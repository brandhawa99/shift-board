import { createFileRoute } from '@tanstack/react-router'
import hospital from "../landing.jpg"
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { CustomerReviews, FacilityReviews } from '@/mocks/reviews'
import ReviewCard from '@/components/ReviewCard'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src={hospital}
          alt="hospital"
          className="w-full h-full object-cover"
        />
        <div>
          <Container className="absolute flex-col inset-0 flex justify-center max-md:justify-start max-sm:py-10  p-5 max-md:p-10 gap-7">
            {/* <Container className=""> */}
            <p className="text-black text-5xl max-w-2xl font-bold max-md:text-4xl max-md:max-w-xl">
              Connect Facilities With Top Health Care Professionals
            </p>
            <div className="flex gap-4">
              <Button>I&apos;m a Professional</Button>
              <Button variant="outline">I&apos;m a Facility</Button>
            </div>
            {/* </Container> */}
          </Container>
        </div>
      </div>
      {/* Reviews */}

      <section className="w-full bg-blue-200 p-6 py-10">
        <Container className="flex justify-between items-center max-md:flex-col ">
          <h2 className="p-6 max-w-2xl text-black text-5xl font-medium max-md:text-3xl max-md:py-2 ">What Our Customers Say About Us❤️</h2>
          <Carousel className="w-full max-w-md" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {FacilityReviews.map((review) => (
                <ReviewCard
                  key={review.id}
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
      {/* Move the Carousel Item to its own component  */}
      <section className="w-full bg-blue-300 p-6 py-10">
        <Container className="flex flex-row-reverse justify-between items-center max-md:flex-col">
          <h2 className="p-6 max-w-2xl text-black text-5xl font-medium max-md:text-3xl max-md:py-2 ">What Our Professionals Say About Us❤️</h2>
          <Carousel className="w-full max-w-md" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {CustomerReviews.map((review) => (
                <ReviewCard
                  key={review.id}
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
      <footer className="p-2">
        Made By: Baltej Randhawa
      </footer>
    </div >

  )
}
// add these credits somewhere later

// Photo by <a href="https://unsplash.com/@scalzodesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Scalzo</a> on <a href="https://unsplash.com/photos/white-concrete-building-illustration-iqGtaQnk3VM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
