import Hero from '@/components/LandingPage/Hero'
import Sky from '@/components/Sky'
import React from 'react'

const page = () => {
  return (
    <div>
      <Sky NumberOfStars={200}/>
      <Hero/>
    </div>
  )
}

export default page