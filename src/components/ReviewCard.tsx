import { Card, CardContent, CardFooter } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import ReviewPopup from "./ReviewPopup";

export type ReviewCardProps = {
  name: string;
  rating: number;
  review: string;
  location?: string;
};

export default function ReviewCard({ location, name, rating, review }: ReviewCardProps) {
  const CHARACTER_LIMIT = 175
  const stars = '⭐'.repeat(Number(rating));
  const isLongReview = review.length > CHARACTER_LIMIT

  return (
    <CarouselItem>
      <div className="p-1">
        <Card className="h-80 flex flex-col overflow-hidden gap-0">
          <CardContent className="flex-1 mt-4 py-0">
            <div
              className={`text-xl leading-relaxed text-gray-800 ${isLongReview ? "line-clamp-4" : ""}`}
            >
              {review}
            </div>
            <ReviewPopup review={review} location={location} name={name} rating={rating} isLong={isLongReview} />
          </CardContent>

          <CardFooter className="flex items-start flex-col py-0">
            <span>{stars}</span>
            <span className="font-bold">{name}</span>
            {location && (
              <span className="text-sm text-gray-500">{location}</span>
            )}
          </CardFooter>
        </Card>
      </div>
    </CarouselItem >
  );
}
