import React from 'react'
import styled from "styled-components"
import CategoryItem from './CategoryItem'
import { categories } from '../data'

// Components

const Wrapper = styled.div`
  padding-top: 76px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 70px;

  @media only screen and (max-width: 950px) {
    padding: 0 15px;
    transition: all 0.5s ease-in-out;
  }
`

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0px 1px 8px 1px lightgrey;
  margin-left: 80px;
  margin-right: 80px;
  padding: 10px;
  background: #0d0d0d;
  color: whitesmoke;
  border-radius: 50px;

  @media only screen and (max-width: 950px) {
      margin-left: 24px;
      margin-right: 24px;
      transition: all 0.5s ease-in-out;
  }
`

const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2vw;

  @media only screen and (max-width: 800px) {
      font-size: 1em;
  }

  @media only screen and (max-width: 400px) {
      font-size: 0.8em;
  }
`

// Categories

export const Categories = () => {
  return (
    <Wrapper id='categories'>
      <TitleContainer>
        <Title>NUESTRAS COLECCIONES</Title>
      </TitleContainer>
      <Container>
        {categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default Categories