import Contact from '@/components/LandingPage/Contact'
import Hero from '@/components/LandingPage/Hero'
import StackIcons from '@/components/LandingPage/StackIcons'
import Testimonials from '@/components/LandingPage/Testimonials'
import WhatWeDo from '@/components/LandingPage/WhatWeDo'
import Sky from '@/components/Sky'
import { memo } from 'react'

const HomePage = memo(function HomePage() {
  return (
    <>
      <Sky NumberOfStars={200} />
      <main className="relative z-10">
        <Hero />
        <WhatWeDo />
        <StackIcons />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
})

export default HomePage