import styled from "styled-components"
import React from 'react'
import { Link } from "react-router-dom"

// Components

const Container = styled.div`
    position: relative;
    flex: 1;
    flex-flow: row;
    display: flex;
    width: 100%;
    height: 77vh;
    margin: 0 10px;
    margin-top: 20px;
    box-shadow: 1px 1px 10px 4px #aaabb0;
    box-sizing: border-box;
    border-radius: 15px;
    overflow: hidden;
    z-index: 2;

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

const Info = styled.div`
    position: absolute;
    flex: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    z-index: 3;
`

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
    object-fit: cover;
    -webkit-object-fit: cover;
    -moz-object-fit: cover;
    -o-object-fit: cover;
    z-index: 2;

    &:hover {
        transform: scale(1.2);
        filter: grayscale(100%);
    }
`

const Title = styled.h1`
    color: #F2EDe4;
    margin-bottom: 10%;
    font-size: 4vh;
    font-weight: 700;
    text-shadow: 4px 4px 4px black;
    z-index: 3;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 10px 25px;
    background-color: white;
    border-radius: 50px;
    color: #101010;
    cursor: pointer;
    font-family: 'Bebas Neue', cursive;
    font-size: 13px;
    letter-spacing: 0.1vw;
    z-index: 3;

    &: hover{
        background-color: #0d0d0d;
        color: #fff;
        border: none;
    }
`

// Category Items

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Info>
                <NavLink to={`/products/${item.categories}`}>
                    <Image src={item.img} />
                    <Title>{item.title}</Title>
                    <Button>Ver Productos</Button>
                </NavLink>
            </Info>
        </Container>
    )
}

export default CategoryItem
