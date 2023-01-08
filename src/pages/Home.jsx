import React from 'react'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import Clip from '../components/Clip'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import NavFilters from '../components/NavFilters'

// Structure

const Home = () => {
  return (
    <div id='/' style={{backgroundColor:'#f8f8f8'}}>
      <NavbarHome />
      <Clip />
      <Categories />
      <NavFilters />
      <Slider />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
