'use client'
import Contact from '@/components/LandingPage/Contact'
import Hero from '@/components/LandingPage/Hero'
import StackIcons from '@/components/LandingPage/StackIcons'
import WhatWeDo from '@/components/LandingPage/WhatWeDo'
import Sky from '@/components/Sky'
import { memo, useState, useEffect } from 'react'

const HomePage = memo(function HomePage() {
  const [stars, setStars] = useState(300)

  useEffect(() => {
    const update = () => setStars(window.innerWidth >= 1024 ? 500 : 300)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <>
      <Sky NumberOfStars={stars} />
      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <WhatWeDo />
        <StackIcons />
        <Contact />
      </main>
    </>
  )
})

export default HomePage
