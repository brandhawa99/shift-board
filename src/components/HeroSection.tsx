import { Container } from './Container'
import { Button } from './ui/button'
import hospital from '@/images/landing.webp'

const HeroSection = () => {
  return (
    <div className="relative h-96 w-full">
      <img
        src={hospital}
        fetchPriority="high"
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
  )
}

export default HeroSection
