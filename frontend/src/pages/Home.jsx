import React from 'react'
import Hero from '../components/Hero'
import HomeServices from '../components/HomeServices'
import Facts from '../components/Facts'

import Testimonials from '../components/Testimonials'




function Home() {
  return (
    <div>
        <Hero/>
      
        <HomeServices/>
        <Facts/>
        
        <Testimonials/>

     
    </div>
  )
}

export default Home