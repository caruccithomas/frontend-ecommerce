import React, { Fragment } from 'react'
import styled from 'styled-components'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Clip from '../components/Clip'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import NavFilters from '../components/NavFilters'

// Styles

const Container = styled.div`
  background: #f8f8f8;
  padding-bottom: 60px;

  @media only screen and (max-width: 950px) {
    // padding-bottom: 50px;
  }
`

// Home Page

const Home = () => {
  return (
    <Fragment>
      <Container id='/'>
        <NavbarHome />
        <Clip />
        <Categories />
        <NavFilters />
        <Slider />
      </Container>
      <Footer />
    </Fragment>
  )
}

export default Home
