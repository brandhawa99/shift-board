interface BaseReview {
  id: number
  name: string
  review: string
  rating: number
}
export interface FacilityReview extends BaseReview {
  location: string
}
export interface CustomerReview extends BaseReview {}
export type Review = FacilityReview | CustomerReview

export type Shift = {
  id: string
  facilityName: string
  role: shiftRole
  location: { city: string; state: string }
  startTime: number
  hourlyRate: number
  status: shiftStatus
}
type shiftStatus = 'available' | 'claimed' | 'pending' | 'filled'
export type shiftRole =
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
