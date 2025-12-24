export type Shift = {
  id: string;
  facilityName: string;
  role: "CNA" | "RN" | "MA" | "CPT" | "LPN" | "NP" | "CG" | "ORRN" | "PT" | "CK" | "EVS" | "MISC";
  city: string;
  state:string;
  startTime: string;
  hourlyRate: number; 
}

export const mockShifts: Array<Shift> = [
  {
    id: '1',
    facilityName: 'General Hospital',
    role: 'RN',
    city: 'Los Angeles',
    state: 'CA',
    startTime: new Date(Date.now() + 86400000).toISOString(),
    hourlyRate: 55,
  },
]


export const getShifts = async() => {
  await new Promise((r) => setTimeout(r,800));
  return mockShifts
}

export const getShiftsSlow = async() =>{
  await new Promise((r) => setTimeout(r,3000));
  return mockShifts
}
export const noShifts = async () =>{
  await new Promise((r) => setTimeout(r,800));
  return []
}

export const getShiftsError = async () =>{
  await new Promise((r) => setTimeout(r,800));
  throw new Error("Failed to fetch shifts")
}