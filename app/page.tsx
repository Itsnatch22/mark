import Partners from '@/components/Partners'
import TestimonialsPage from '@/components/Testimonials'
import HeroSwiper from '@/components/HeroSwiper'
import AboutDeveloper from '@/components/AboutDeveloper'

export default function Home() {
  return (
   <div>
    <HeroSwiper/>
    <TestimonialsPage/>
    <Partners/>
    <AboutDeveloper/>
   </div>
  )
}