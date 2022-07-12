import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;;
`
const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: contain;
    display: flex;
    background-color: #D9D9D9;
    box-shadow: 2px 2px 12px grey;
`
const InfoContainer = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 0 20px;
`
const Title = styled.h1`
    font-weight: 200;
`

const Description = styled.p`
    margin: 20px 0;
    max-width: 700px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
`

const FilterContainer = styled.div`
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6vh;
    margin-bottom: 20px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 16px;
    font-weight: 200;
    margin-right: 8px;
`

const FilterColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-shadow: 2px 2px 2px grey;
    background-color: ${props => props.color};
    margin: 0 3px;
    cursor: pointer;
`

const FilterSize = styled.select`
    padding: 4px;
`

const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const Amount = styled.span`
    width: 25px;
    height: 25px;
    border-radius: 25%;
    border: 1px solid #0D0D0D;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    font-weight: 600;
`

const Button = styled.button`
    padding: 6px;
    background-color: white;
    border: 1px solid #0D0D0D;
    font-weight: 600;
    cursor: pointer;
    font-size: 10px;

    &: hover{
        background-color: #0D0D0D;
        color: white;
    }
`

// SPA Product

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="images/products/jackets/jacket_07.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Campera Rip-Curl</Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, maxime. 
                        Voluptatibus quaerat temporibus sint soluta iure rerum voluptate, 
                        deleniti ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nisi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, tenetur.
                    </Description>
                    <Price>$18.500</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color = "black" />
                            <FilterColor color = "blue" />
                            <FilterColor color = "#217343" />
                            <FilterColor color = "#986BC2" />
                            <FilterColor color = "red" />
                            <FilterColor color = "orange" />
                            <FilterColor color = "yellow" />
                            <FilterColor color = "white" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Talle</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption selected>M</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>XXS</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{cursor: 'pointer'}} />
                            <Amount>1</Amount>
                            <Add style={{cursor: 'pointer'}} />
                        </AmountContainer>
                        <Button>AÑADIR AL CARRITO</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product