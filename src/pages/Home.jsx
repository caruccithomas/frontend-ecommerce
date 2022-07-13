import React from 'react'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Clip from '../components/Clip'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'

// Structure

const Home = () => {
  return (
    <div id='/' style={{backgroundColor:'#f8f8f8'}}>
      <NavbarHome />
      <Clip />
      <Categories />
      <Products />
      <Slider />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
