import React from 'react'
import HeroSection from './Slider/HeroSection'
import AmazonSearchResults from './Features/Phones/AmazonSearchResults'
import Mix from './Features/Mix/Mix'
// import Phones from './Features/Phones/Phones'

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <Phones/>  */}
      <AmazonSearchResults />
      <Mix />
    </div>
  )
}

export default Home
