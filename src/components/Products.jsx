import React from 'react'
import styled from 'styled-components'
import Product from './ProductItem'
import { popular_products } from '../data'
import NavFilters from './NavFilters'

// Components

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0 70px;
  margin-bottom: 50px;

  @media only screen and (max-width: 950px) {
    padding: 0 15px;
    transition: all 0.5s ease-in-out;
  }
`

// Products

const Products = () => {
  return (
    <Container id='products'>
      <NavFilters />
      <Wrapper>
        {popular_products.map(item => (
            <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Products