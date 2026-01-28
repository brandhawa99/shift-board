import { mockShifts } from '@/mocks/shifts'

export const getShifts = async () => {
  await new Promise((r) => setTimeout(r, 500))
  return mockShifts
}

export const getShiftsSlow = async () => {
  await new Promise((r) => setTimeout(r, 3000))
  return mockShifts
}

export const noShifts = async () => {
  await new Promise((r) => setTimeout(r, 500))
  return []
}

export const getShiftsError = async () => {
  await new Promise((r) => setTimeout(r, 500))
  throw new Error(
    'We are having trouble loading this table. Please try refreshing the page or try again later.',
  )
}

// New function to update the mock database
export const applyToShift = async (shiftId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const appliedShift = mockShifts.find((shift) => shift.id === shiftId)
  if (!appliedShift) {
    throw new Error('Shift not found')
  }
  return { success: true, shift: { ...appliedShift, status: 'pending' } }
}
