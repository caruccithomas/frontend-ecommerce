import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'

// Components

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    background-color: rgba(0,0,0, 0.1);
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    height: 125%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const ProductWrapper = styled.div`
    width: 100%;
    min-width: 220px;
`

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    height: 300px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 1px 1px 8px 1px lightgrey;

    &:hover ${Info}{
        opacity: 1;
    }

    @media only screen and (max-width: 370px) {
        white-space: nowrap;
        margin: 0 auto;
        transition: all 0.5s ease-in-out;
    }
`   

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0.5vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &: hover{
        background-color: #01bf71;
        transform: scale(1.1);
    }
`

const InfoWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    color: #0d0d0d;
    flex-direction: column;
    width: 100%;
    height: 25%;
`

const Title = styled.h1`
    flex: 1;
    font-size: 1.1em;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin-top: 12px;
    z-index: 3;
`

const Brand = styled.span`
    flex: 1;
    font-size: 0.8em;
    font-weight: 600;
    margin: 5px 0;
    z-index: 3;
`

const Price = styled.span`
    flex: 1;
    font-size: 0.8em;
    font-weight: 200;
    margin-top: 10px;
    z-index: 3;
`

// Product Item

const Product = ({item}) => {
    return (
        <Container>
            <ProductWrapper>
                <ImageWrapper>
                    <Image src={item.img} />
                    <Info>
                        <Icon>
                            <ShoppingCartOutlined />
                        </Icon>
                        <Icon>
                            <SearchOutlined />
                        </Icon>
                        <Icon>
                            <FavoriteBorderOutlined />
                        </Icon>
                    </Info>
                </ImageWrapper>
                <InfoWrapper>
                    <Title>{item.title}</Title>
                    <Brand>{item.brand}</Brand>
                    <Price>AR$ {item.price}</Price>
                </InfoWrapper>
            </ProductWrapper>
        </Container>
    );
}

export default Product

