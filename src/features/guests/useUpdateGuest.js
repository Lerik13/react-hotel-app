import { useSearchParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateGuest as updateGuestApi } from '../../services/apiGuests'

export function useUpdateGuest() {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()

  const sortByRaw = searchParams.get('sortBy') || 'fullName-asc'
  const [field, direction] = sortByRaw.split('-')
  const sortBy = { field, direction }
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))
  const filterValue = searchParams.get('bookings.startDate')
  const method = 'gt'
  const isAllGuests = !filterValue || filterValue === 'all'
  const filter = isAllGuests
    ? null
    : { field: 'bookings.startDate', method, value: filterValue }

  const { mutate: updateGuest, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, editGuestData }) => updateGuestApi(id, editGuestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: isAllGuests
          ? ['guests', sortBy, page]
          : ['guestsWithBookings', filter, sortBy, page],
      })
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  return { updateGuest, isUpdating }
}
