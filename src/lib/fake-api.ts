import { mockShifts } from '@/mocks/shifts'

export const getShifts = async () => {
  await new Promise((r) => setTimeout(r, 800))
  return mockShifts
}

export const getShiftsSlow = async () => {
  await new Promise((r) => setTimeout(r, 3000))
  return mockShifts
}
export const noShifts = async () => {
  await new Promise((r) => setTimeout(r, 800))
  return []
}

export const getShiftsError = async () => {
  await new Promise((r) => setTimeout(r, 800))
  throw new Error(
    'We are having trouble loading this table. Please try refreshing the page or try again later.',
  )
}
