import { createFileRoute } from '@tanstack/react-router'
import hospital from "../landing.jpg"
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src={hospital}
          alt="hospital"
          className="w-full h-full object-cover"
        />
        <div>
          <div className="absolute flex-col inset-0 flex justify-center max-md:justify-start max-sm:py-10  p-5 max-md:p-10 gap-7">
            <p className="text-black text-5xl max-w-2xl font-bold max-md:text-4xl max-md:max-w-xl max-sm:text-[1.75rem]">
              Connect Facilities With Top Health Care Professionals
            </p>
            <div className="flex gap-4">
              <Button>I&apos;m a Professional</Button>
              <Button variant="outline">I&apos;m a Facility</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <section className="p-10">
        <h2 className="text-black text-5xl text-align-center">What Our Customers Say About Us</h2>


      </section>

    </div >

  )
}
// add these credits somewhere later

// Photo by <a href="https://unsplash.com/@scalzodesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Samuel Scalzo</a> on <a href="https://unsplash.com/photos/white-concrete-building-illustration-iqGtaQnk3VM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
