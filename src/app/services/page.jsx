import Contact from '@/components/LandingPage/Contact'
import WhatWeDo from '@/components/LandingPage/WhatWeDo'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <WhatWeDo/>
      <Contact/>
    </div>
  )
}

export default page