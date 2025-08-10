import Contact from '@/components/LandingPage/Contact'
import Hero from '@/components/LandingPage/Hero'
import StackIcons from '@/components/LandingPage/StackIcons'
import Testimonials from '@/components/LandingPage/Testimonials'
import WhatWeDo from '@/components/LandingPage/WhatWeDo'
import Sky from '@/components/Sky'
import React from 'react'

const page = () => {
  return (
    <div >
      <Sky NumberOfStars={200}/>
      <Hero/>
      <WhatWeDo/>
      <StackIcons />
      <Testimonials/>
      <Contact />
    </div>
  ) 
}

export default page