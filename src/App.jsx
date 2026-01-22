import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import YogaHeroSection from './components/sections/YogaHeroSection'
import YogaAboutSection from './components/sections/YogaAboutSection'
import YogaServicesSection from './components/sections/YogaServicesSection'
import Specialities from './components/sections/Specialities'
import YogaEventsSection from './components/sections/YogaEventsSection'
import YogaMarquee from './components/sections/YogaMarquee'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FaqSection from './components/sections/FaqSection'
import YogaMoments from './components/sections/YogaMoments'
import Footer from './components/sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <YogaHeroSection />
     <YogaAboutSection />
     <YogaServicesSection />
     <Specialities />
     <YogaEventsSection />
     <YogaMarquee />
     <TestimonialsSection />
     <FaqSection />
     <YogaMoments />
     <Footer />
    </>
  )
}

export default App
