import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'

// Components

const Container = styled.div`
    height: 45vh;
    width: 100%;
    background-color: #ECECEC;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 2rem;
    text-shadow: 2px 2px 2px gray;

    @media only screen and (max-width: 1100px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 600px) {
        font-size: 1.3rem;
    }
`

const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    padding: 20px;

    @media only screen and (max-width: 1100px) {
        font-size: 15px;
    }

    @media screen and (max-width: 600px) {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 11px;
        max-width: 250px;
    }
`

const InputContainer = styled.div`
    width: 43vw;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;

    @media only screen and (max-width: 1100px) {
        min-width: 400px;
        height: 9%;
    }

    @media screen and (max-width: 480px) {
        min-width: 250px;
    }
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    border: 1px solid #0d0d0d;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #fff;
    color: #0d0d0d;

    &:hover {
        background-color: #01bf71;
        border: 1px solid #01bf71;
    }

`

// Newsletter

const Newsletter = () => {
    return (
        <Container id='newsletter'>
            <Title>BRONX NEWS</Title>
            <Description>Recibe información sobre descuentos, colecciones y noticias exclusivas.</Description>
            <InputContainer>
                <Input placeholder='ingrese su correo electrónico'/>
                <Button>
                    <MdKeyboardArrowRight size={21} />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
