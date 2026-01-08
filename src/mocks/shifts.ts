export type Shift = {
  id: string
  facilityName: string
  role:
    | 'CNA'
    | 'RN'
    | 'MA'
    | 'CPT'
    | 'LPN'
    | 'NP'
    | 'CG'
    | 'ORRN'
    | 'PT'
    | 'CK'
    | 'EVS'
    | 'MISC'
  location: { city: string; state: string }
  startTime: string
  hourlyRate: number
  status: 'available' | 'claimed' | 'pending' | 'filled'
}
const now = new Date()
const st = now.toISOString()

export const mockShifts: Array<Shift> = [
  {
    id: '1',
    facilityName: 'General Hospital',
    role: 'RN',
    location: { city: 'Los Angeles', state: 'CA' },
    startTime: st,
    hourlyRate: 55,
    status: 'available',
  },
  {
    id: '2',
    facilityName: 'General Hospital 2',
    role: 'RN',
    location: { city: 'Vancouver', state: 'BC' },
    startTime: st + 2000,
    hourlyRate: 55,
    status: 'pending',
  },
  {
    id: '3',
    facilityName: 'General Hospital 3',
    role: 'RN',
    location: { city: 'Burnaby', state: 'BC' },
    startTime: st + 2000,
    hourlyRate: 55,
    status: 'available',
  },
]

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
  throw new Error('Failed to fetch shifts')
}
