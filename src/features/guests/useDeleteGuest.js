import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { deleteGuest as deleteGuestApi } from '../../services/apiGuests'

export function useDeleteGuest() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteGuest } = useMutation({
    mutationFn: deleteGuestApi,
    onSuccess: () => {
      toast.success('Guest successfully deleted')
      queryClient.invalidateQueries({
        queryKey: ['guests'],
      })
    },
    onError: (err) =>
      toast.error(
        "Guest couldn't be deleted, probably because guest has a reservation"
      ),
  })

  return { isDeleting, deleteGuest }
}
