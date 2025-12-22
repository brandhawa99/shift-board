import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import type { ReviewCardProps } from "./ReviewCard"


export type ReviewPopUpProps = ReviewCardProps & {
  isLong: boolean;
}
const ReviewPopup = ({ review, location, name, rating, isLong }: ReviewPopUpProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="self-start text-blue-600 font-semibold hover:text-blue-700"
        >{isLong ? "...Read More" : "Expand"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader className="py-4">
          <DialogDescription className='text-xl leading-relaxed text-foreground'>
            {review}
          </DialogDescription>
          <div className="flex flex-col items-start border-t pt-2 ">
            <DialogFooter className="text-md py-2">{rating}</DialogFooter>
            <DialogFooter className="text-md font-bold p-0">{name}</DialogFooter>
            {location && (<DialogFooter className="text-gray-500">{location}</DialogFooter>)}
          </div>
        </DialogHeader>
      </DialogContent>

    </Dialog>
  )

}

export default ReviewPopup;