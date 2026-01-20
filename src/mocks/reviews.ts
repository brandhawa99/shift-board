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

let reviewId = 1

export const FacilityReviews: Array<FacilityReview> = [
  {
    id: reviewId++,
    name: 'Randie Taff RN DON',
    location: 'LaBelle Manor Care Center, LaBelle, MO.',
    review:
      "Clipboard staffing gets us results speedily, their staff are knowledgeable, courteous and compassionate. Clipboard staff show up for their shifts and are on time unlike other staffing agencies. If there are any issues it is handled immediately to everyone's satisfaction. Prices for their staff are very reasonable also.",
    rating: 5,
  },
  {
    id: reviewId++,
    name: 'Alexis Ireland',
    location: 'Journey Director, Park View Place',
    review:
      'This partnership feels like a revolution in healthcare staffing! I am thrilled about the potential this brings in maintaining the elevated standard of care we provide. One feature I particularly love is the ability to create a favorites list, which not only promotes continuity of care but also fosters stronger relationships with trusted professionals. A HUGE thank you to Jake and the entire Clipboard Health team for empowering us with these innovative tools and insights.',
    rating: 5,
  },
  {
    id: reviewId++,
    name: 'Saeed Pourali',
    location: 'Dr.D.A., LNHA',
    review:
      'I’ve worked with several staffing agencies, but none compare to Clipboard. We’ve been partnering with Clipboard for many years, and they consistently meet our needs, even on short notice, with unmatched reliability. The have become an essential part of our operations. What sets Clipboard apart from other staffing agencies is their commitment to customer service and effective communication. They take the time to understand our needs and go above and beyond to ensure we’re satisfied.',
    rating: 5,
  },
  {
    id: reviewId++,
    name: 'Kelly Toone',
    location: 'Executive Director, Lansing, MI',
    review:
      'Clipboard has helped alleviate the stress of unfilled shifts and working shorthanded',
    rating: 5,
  },
]

export const CustomerReviews: Array<CustomerReview> = [
  {
    id: reviewId++,
    name: 'WAMARL 19',
    review:
      "High Pay Always Fast. Their shifts always pay me the most and they pay immediately no one else does this. I’m really happy I'm working with them. They're great.",
    rating: 5,
  },
  {
    id: reviewId++,
    name: 'E DAVENPORT',
    review:
      'I wish more facilities in Oklahoma used clipboard. I absolutely love clipboards for my agency shifts! They are great about getting issues resolved.',
    rating: 5,
  },
  {
    id: reviewId++,
    name: 'Romanie Brandee',
    review:
      'Really good. Whenever you need one important shift covered, or you are looking to broadcast thousands of shifts, clipboard is always there to help.',
    rating: 5,
  },
  {
    id: reviewId++,
    name: 'Schmitz Mattison',
    review:
      "Recommended. Very simple fast process I started my process on a Tuesday and I was ready to start working on that wednesday. I'm very happy with the process.",
    rating: 5,
  },
]
