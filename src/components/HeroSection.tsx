import { Link } from '@tanstack/react-router'
import { Container } from './Container'
import { Button } from './ui/button'
import hospital from '@/images/landing.webp'

const HeroSection = () => {
  return (
    <main className="relative h-96 w-full">
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
            <Button asChild>
              <Link to={'/dashboard'}>I&apos;m a Professional</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to={'/dashboard'}>I&apos;m a Facility</Link>
            </Button>
          </div>
        </Container>
      </div>
    </main>
  )
}

export default HeroSection
