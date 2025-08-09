import Hero from '@/components/LandingPage/Hero'
import Testimonials from '@/components/LandingPage/Testimonials'
import Sky from '@/components/Sky'
import React from 'react'

const page = () => {
  return (
    <div>
      <Sky NumberOfStars={200}/>
      <Hero/>
      <Testimonials/>
    </div>
  )
}

export default page