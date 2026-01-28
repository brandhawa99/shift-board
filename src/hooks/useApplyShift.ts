import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { Shift } from '@/types/index'

import { applyToShift } from '@/lib/fake-api'

export function useApplyShift(queryKey: Array<string> = ['shifts']) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: applyToShift,
    onMutate: async (shiftId) => {
      await queryClient.cancelQueries({ queryKey })

      const previousShifts = queryClient.getQueryData<Array<Shift>>(queryKey)

      queryClient.setQueryData(queryKey, (old: Array<Shift> | undefined) => {
        return old?.map((shift) =>
          shift.id === shiftId ? { ...shift, status: 'pending' } : shift,
        )
      })
      return { previousShifts }
    },

    onError: (_err, _shiftId, context) => {
      if (context?.previousShifts) {
        queryClient.setQueryData(queryKey, context.previousShifts)
      }
      toast.error('Failed to apply for shift')
    },

    onSuccess: (_, shiftId) => {
      const shifts = queryClient.getQueryData<Array<Shift>>(queryKey)
      const shift = shifts?.find((s) => s.id === shiftId)

      if (shift) {
        toast.success(`Successfully applied to shift at ${shift.facilityName}!`)
      }
    },
  })
}
