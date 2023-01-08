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
    min-width: 25%;
    height: 100%;
    min-height: 405px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 2px 1px 10px 2px lightgrey;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;

    &:hover {
        box-shadow: 2px 1px 10px 2px grey;
    }

    &:hover ${FavContainer}{
        opacity: 1;
    }
`

const ImageWrapper = styled.div`
    width: 225px;
    height: 225px;
    border-radius: 50%;
    position: relative;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px 2px lightgrey inset;
    transition: all 0.5s ease-in-out;
    z-index: 2;


    @media only screen and (max-width: 1200px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 300px) {
        width: 180px;
        height: 180px;
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
    margin: 20px 0;
    padding: 8px 20px;
    min-width: 225px;
    text-transform: lowercase;
    z-index: 3;
    color: grey;
    background: #f8f8f8;
    box-shadow: 1px 1px 8px 1px lightgrey;
    border-radius: 25px;
    letter-spacing: 1px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1200px) {
        min-width: 200px;
    }

    @media screen and (max-width: 300px) {
        min-width: 180px;
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
`

// Product Item

const Product = ({ item, index }) => {
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
            <ProductLink to={`/product/${item._id}`} key={index}>
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

export default Product