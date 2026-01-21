import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'
import type { Review } from '@/types/index'

export type ReviewPopUpProps = Review & {
  isLong: boolean
}
const ReviewPopup = (props: ReviewPopUpProps) => {
  const { isLong, rating, review, name } = props
  const stars = '⭐'.repeat(Number(rating))
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'link'}
          className="self-start p-0 text-blue-600 font-semibold hover:text-blue-700"
        >
          {isLong ? 'Read More' : 'Expand'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogTitle>Review</DialogTitle>
        <DialogHeader className="py-4">
          <DialogDescription className="text-xl leading-relaxed text-foreground text-left">
            {review}
          </DialogDescription>
          <div className="flex flex-col items-start border-t pt-2 ">
            <DialogFooter className="text-md py-2">{stars}</DialogFooter>
            <DialogFooter className="text-md font-bold p-0">
              {name}
            </DialogFooter>
            {'location' in props && (
              <DialogFooter className="text-gray-500">
                {props.location}
              </DialogFooter>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ReviewPopup
