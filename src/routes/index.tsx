import { createFileRoute } from '@tanstack/react-router'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}
