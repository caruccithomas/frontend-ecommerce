import styled from "styled-components"
import React from 'react'

// Components

const Container = styled.div`
    position: relative;
    flex: 1;
    flex-flow: row;
    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0 10px;
    margin-top: 20px;
    box-shadow: 1px 1px 10px 1px grey;

    &: hover{
        transform: scale(1.02);
        transition: all 0.5s ease;
        background: red;
        z-index: 2;
    }

    @media only screen and (max-width: 1300px) {
        min-width: 25%;
    }

    @media only screen and (max-width: 1010px) {
        min-width: 45%;
    }

    @media screen and (max-width: 800px) {
        min-width: 50vw;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.4s ease;

    &: hover{
        backdrop-filter: grayscale(100%);
    }
`
const Title = styled.h1`
    color: #F2EDe4;
    margin-bottom: 10%;
    font-size: 4vh;
    font-weight: 700;
    text-shadow: 4px 4px 4px black;
`

const Button = styled.button`
    border: none;
    padding: 10px 16px;
    background-color: white;
    color: #101010;
    cursor: pointer;
    font-family: 'Bebas Neue', cursive;
    font-size: 2vh;
    letter-spacing: 0.1vw;

    &: hover{
        background-color: black;
        color: white;
    }
`

// Category Items

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Ver Productos</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
