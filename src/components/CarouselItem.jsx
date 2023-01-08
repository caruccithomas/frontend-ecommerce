import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AddCircleOutlineOutlined, Favorite } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addFavoriteProduct, removeFavoriteProduct } from '../redux/favoriteRedux'

// Components

const FavContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    opacity: 0;
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    z-index: 3;
`

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const ProductLink = styled(Link)`
    text-decoration: none;
    min-width: 100%;
`

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 440px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 1px 2px 8px 1px lightgrey;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;

    &:hover {
        box-shadow: 2px 1px 10px 2px grey;
    }

    &:hover ${FavContainer}{
        opacity: 1;
    }

    @media only screen and (max-width: 1440px) {
        height: 400px;
    }

    @media screen and (max-width: 1280px) {
        height: 380px;
    }

    @media screen and (max-width: 420px) {
        height: 340px;
    }
`

const ImageWrapper = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: relative;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px 2px lightgrey inset;
    transition: all 0.5s ease-in-out;
    z-index: 2;

    @media only screen and (max-width: 1440px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 1280px) {
        width: 175px;
        height: 175px;
    }

    @media screen and (max-width: 1080px) {
        width: 150px;
        height: 150px;
    }

    @media screen and (max-width: 420px) {
        width: 125px;
        height: 125px;
    }

    @media screen and (max-width: 380px) {
        width: 100px;
        height: 100px;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

const FavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.type === 'added' ? 'flex-end' : 'center'};
    width: 55px;
    height: 32px;
    padding-right: ${props => props.type === 'added' ? '8px' : '0'};
    background: ${props => props.type === 'added' ? '#01bf74' : '#fff'};
    color: #0d0d0d;
    border-radius: 30px;
    box-shadow: ${props => props.type === 'added' ? 'none' : '1px 2px 4px 2px lightgrey inset'};
    transition: all 0.5s ease-in-out;
    z-index: 3;
`

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0d0d0d;
    flex-direction: column;
    width: 100%;
`

const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    margin: 20px 0;
    padding: 8px 20px;
    text-transform: lowercase;
    text-align: center;
    color: grey;
    background: #f8f8f8;
    box-shadow: 1px 1px 8px 1px lightgrey;
    border-radius: 25px;
    letter-spacing: 1px;
    transition: all 0.5s ease-in-out;
    z-index: 3;

    @media screen and (max-width: 420px) {
        padding: 5px 15px;
        box-shadow: 1px 1px 8px 1px lightgrey inset;
        font-size: 13px;
    }
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    text-align: center;
    font-size: 15px;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 3;

    @media screen and (max-width: 420px) {
        font-size: 13px;
    }
`

const Color = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const FilterColor = styled.h2`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;

    @media screen and (max-width: 420px) {
        font-size: 10px;
    }
`

// Carousel Item

const CarouselItem = ({ item }) => {
    const favorites = useSelector((state) => state.favorites)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const [isFavorite, setIsFavorite] = useState(false)

    const handleEvent = (event) => {
        event.preventDefault()
    }

    const handleFavorite = () => {
        setQuantity(quantity)

        if (!isFavorite) {
            dispatch(addFavoriteProduct({
                ...item,
                quantity
            }))
            setIsFavorite((prevState) => !prevState)
            return
        }
        
        if (isFavorite) {
            dispatch(removeFavoriteProduct({
                ...item,
                quantity
            }))
            setIsFavorite((prevState) => !prevState)
            return
        }
    
    }

    return (
        <Container>
            <ProductLink to={`/product/${item._id}`}>
                <ProductWrapper>
                    <ImageWrapper>
                        <Image src={item.img} />
                        <FavContainer>
                            {favorites.products.find((element) => element._id === item._id) ? (
                                <FavWrapper type='added' onClick={(e) => handleEvent(e) + handleFavorite(item._id)}>
                                    <Favorite style={{fontSize:'20px', color:'#fff'}} />
                                </FavWrapper>
                            ) : (
                                <FavWrapper type='add' onClick={(e) => handleEvent(e) + handleFavorite(item._id)}>
                                    <AddCircleOutlineOutlined style={{fontSize:'15px'}} />
                                    <Favorite style={{fontSize:'22px', color:'#01bf71'}} />
                                </FavWrapper>
                            )}
                        </FavContainer>
                    </ImageWrapper>
                    <InfoWrapper>
                        <Brand>{item.brand}</Brand>
                        <Title>{item.title}</Title>
                        <Color>
                            <FilterColor>
                                {item.color.length + ' COLORES'}
                            </FilterColor>
                        </Color>
                    </InfoWrapper>
                </ProductWrapper>
            </ProductLink>
        </Container>
    )
}

export default CarouselItem