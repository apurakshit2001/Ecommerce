import React from 'react'
import HeroSection from './Slider/HeroSection'
import AmazonSearchResults from './Features/Phones/AmazonSearchResults'
import Mix from './Features/Mix/Mix'
import Fashion from './Features/Fashion/Fashion'
import MenFashion from './Features/Fashion/MenFashion'
import CounterSection from './CounterSection/CounterSection'
// import Phones from './Features/Phones/Phones'

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <Phones/>  */}
      <AmazonSearchResults />
      <Mix />
      <Fashion/>
      <MenFashion/>
      <CounterSection/>
    </div>
  )
}

export default Home
