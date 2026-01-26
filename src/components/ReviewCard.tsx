import { Card, CardContent, CardFooter } from './ui/card'
import { CarouselItem } from './ui/carousel'
import ReviewPopup from './ReviewPopup'
import type { Review } from '@/types/index'

export default function ReviewCard(props: Review) {
  const { review, name, rating } = props
  const CHARACTER_LIMIT = 175
  const stars = '⭐'.repeat(Number(rating))
  const isLongReview = review.length > CHARACTER_LIMIT

  return (
    <CarouselItem>
      <div className="p-1">
        <Card className="h-80 flex flex-col overflow-hidden gap-0">
          <CardContent className="flex-1 mt-4 py-0">
            <div
              className={`text-xl leading-relaxed max-sm:text-[15px] text-gray-800 ${isLongReview ? 'line-clamp-4' : ''}`}
            >
              {review}
            </div>
            <ReviewPopup {...props} isLong={isLongReview} />
          </CardContent>

          <CardFooter className="flex items-start flex-col py-0">
            <span>{stars}</span>
            <span className="font-bold max-sm:text-sm">{name}</span>
            {'location' in props && (
              <span className="text-sm text-gray-500">{props.location}</span>
            )}
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  )
}
