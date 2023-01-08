import React, { useState } from 'react'
import styled from 'styled-components'
import Notification from './Notification'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import { useSelector } from 'react-redux'

// Components

const Container = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 80px;
    border-radius: 30px;
    background: #fff;

    @media only screen and (max-width: 950px) {
        margin: 21px;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: #ECECEC;
    margin: 0 80px;
    padding: 35px 0;
    border-radius: 30px;
    box-shadow: 1px 1px 8px 4px silver;
    transition: all 0.5s ease-in-out;
`

const NewsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    flex-direction: row;
    text-shadow: 1px 2px 5px black;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        column-gap: 0;
    }
`

const TitleBold = styled.h1`
    font-size: 35px;
    font-family: 'Audiowide', cursive;
    letter-spacing: -2px;
    color: lightgrey;

    @media only screen and (max-width: 480px) {
        font-size: 30px;
    }
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-weight: 400;
    color: #fff;
    
    @media only screen and (max-width: 480px) {
        font-size: 30px;
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
    width: 45%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #0d0d0d;

    @media only screen and (max-width: 1100px) {
        min-width: 400px;
        height: 32px;
    }

    @media screen and (max-width: 480px) {
        width: 80%;
        min-width: 200px;
    }
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50px;
    flex: 8;
    padding-left: 15px;
    background-color: transparent;
    letter-spacing: 1px;

    @media only screen and (max-width: 600px) {
        letter-spacing: 0px;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 38px;
    border-radius: 50px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media only screen and (max-width: 1100px) {
        height: 32px;
        width: 32px;
    }
`

// Newsletter

const Newsletter = () => {
    const [hover, setHover] = useState(false);
    const [email, setEmail] = useState('')
    const {isFetching, error} = useSelector((state) => state.user)
    const [notifyMes, setNotifyMes] = useState('')
    const [notifyType, setNotifyType] = useState('info')
    const [notifyTitle, setNotifyTitle] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const emailReg = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i)

        if (!email) {
            setNotifyMes('Especifique su dirección de correo electrónico')
            setNotifyType('error')
            setNotifyTitle('Campo Indefinido')
            return;

        } else if (!emailReg.test(email)) {
            setNotifyMes('Ingrese una dirección de correo válida, por ejemplo: "abc@gmail.com"')
            setNotifyType('error')
            setNotifyTitle('Error de Validación')
            return;

        } else if (!error) {
            // register(dispatch, {email})
            setNotifyMes('Tu email ha sido registrado. Recibirás periodicamente las noticias en tu bandeja de entrada')
            setNotifyType('success')
            setNotifyTitle('¡Completado!')
        }
    }

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <Container id='newsletter'>
            <Notification 
                title={notifyTitle}
                message={notifyMes}
                type={notifyType}
            />
            <Wrapper>
                <NewsContainer>
                    <TitleBold>BRONX</TitleBold>
                    <Title>newsletter</Title>
                </NewsContainer>
                <Description>Recibe información sobre descuentos, colecciones y noticias exclusivas.</Description>
                <InputContainer>
                    <Input
                        placeholder='ingrese su correo electrónico'
                        style={{fontStyle: 'italic', textShadow: '1px 1px 1px lightgrey'}}
                        type="email" required value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        onClick={handleSubmit}
                        disabled={isFetching}
                    >
                        {hover ? <MdArrowForward color='grey' size={20} /> : <MdKeyboardArrowRight color='grey' size={20} />}
                    </Button>
                </InputContainer>
            </Wrapper>
        </Container>
    )
}

export default Newsletter
