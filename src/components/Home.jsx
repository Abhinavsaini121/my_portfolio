import React from 'react'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import Marquee from './Marquee/Marquee'
import Experience from './Experience/Experience'
import About from './About/About'

const Home = () => {
  return (
    <>
        <Header/>    
        <HeroSection/>
        <Marquee/>
        <About/>
        <Experience/>
        
    </>
  )
}

export default Home