import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateGuest as updateGuestApi } from '../../services/apiGuests'

export function useUpdateGuest() {
  const queryClient = useQueryClient()

  const { mutate: updateGuest, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, editGuestData }) => updateGuestApi(id, editGuestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['guests'],
      })
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  return { updateGuest, isUpdating }
}
