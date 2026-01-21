import { Container } from './Container'
import ReviewCard from './ReviewCard'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import type { CustomerReview, FacilityReview } from '@/types/index'
import { CustomerReviews, FacilityReviews } from '@/mocks/reviews'

const ReviewsSection = () => {
  return (
    <>
      <section className="w-full bg-blue-200 p-6 py-10">
        <Container className="flex justify-between items-center max-[900px]:flex-col ">
          <h2 className="p-6 max-w-2xl text-black text-5xl font-medium max-md:text-3xl max-md:py-2 max-md:text-center">
            What Our Customers Say About Us❤️
          </h2>
          <Carousel
            className="w-full max-w-md"
            opts={{ align: 'start', loop: true }}
          >
            <CarouselContent>
              {FacilityReviews.map((review: FacilityReview) => (
                <ReviewCard
                  id={review.id}
                  name={review.name}
                  location={review.location}
                  rating={review.rating}
                  review={review.review}
                />
              ))}
            </CarouselContent>
            <div className="mt-6 items-center justify-center gap-4">
              <CarouselPrevious className="static h-10 w-10 rounded-full" />
              <CarouselNext className="static h-10 w-10 rounded-full" />
            </div>
          </Carousel>
        </Container>
      </section>
      <section className="w-full bg-blue-300 p-6 py-10">
        <Container className="flex flex-row-reverse justify-between items-center max-[900px]:flex-col">
          <h2 className="p-6 max-w-2xl text-black text-5xl font-medium max-md:text-3xl max-md:py-2 ">
            What Our Professionals Say About Us❤️
          </h2>
          <Carousel
            className="w-full max-w-md"
            opts={{ align: 'start', loop: true }}
          >
            <CarouselContent>
              {CustomerReviews.map((review: CustomerReview) => (
                <ReviewCard
                  id={review.id}
                  name={review.name}
                  rating={review.rating}
                  review={review.review}
                />
              ))}
            </CarouselContent>
            <div className="mt-6 items-center justify-center gap-4">
              <CarouselPrevious className="static h-10 w-10 rounded-full" />
              <CarouselNext className="static h-10 w-10 rounded-full" />
            </div>
          </Carousel>
        </Container>
      </section>
    </>
  )
}

export default ReviewsSection
