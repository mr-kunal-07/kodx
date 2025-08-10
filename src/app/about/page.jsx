import Contact from '@/components/LandingPage/Contact'
import StackIcons from '@/components/LandingPage/StackIcons'
import WhatWeDo from '@/components/LandingPage/WhatWeDo'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen'>
      <WhatWeDo/>
      <StackIcons/>
      <Contact/>
    </div>
  )
}

export default page