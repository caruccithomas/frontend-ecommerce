import React, { Fragment } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import SVGImage from '../components/registers/register_02.svg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient( rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3) ), url('images/logins/background_02.jpg') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    padding: 0 80px;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        padding: 0 20px;
    }

    @media screen and (max-width: 820px) {
        flex-direction: column;
        height: 100%;
        row-gap: 20px;
        padding: 20px;
    }
`

const LeftWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 40px 30px;
    background-color: white;
    box-shadow: 1px 1px 8px 1px lightgrey;
    opacity: 0.9;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        height: 90%;
    }
`

const Title = styled.h1`
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 30px;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        flex-direction: column;
        width: 100%;
    }
`

const Text = styled.h2`
    text-align: center;
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        font-size: 12px;
    }
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    width: 100%;
    margin: 5px;
    padding: 10px;
    font-weight: 600;
    border: 1px solid grey;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        margin: 4px;
    }
`

const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0;
    text-align: center;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        font-size: 12px;
        margin: 15px 0;
    }
`

const Button = styled.button`
    width: 100%;
    min-width: 25%;
    border: none;
    padding: 13px 0;
    margin-top: 20px;
    background-color: #01bf71;
    border-radius: 50px;
    color: #0d0d0d;
    font-weight: 800;
    font-size: 15px;
    letter-spacing: 1px;
    cursor: pointer;

    &: hover{
        transition: all 0.5s ease-in-out;
        transform: scale(0.92);
        background-color: #0d0d0d;
        color: #fff;
    }
`

const RightWrapper = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        height: 90%;
    }
`

const NavLogo = styled(LinkRouter)`
    color: #000;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2em;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #01BF71;
    }

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        font-size: 1.8em;
    }

    @media screen and (max-width: 380px) {
        transition: all 0.5s ease-in-out;
        font-size: 1.4em;
    }
`

const LogoText = styled.h2`
    font-weight: 200;
    font-size: 1em;
    margin-left: 6px;
    letter-spacing: -1px;
`

const Image = styled.img`
    width: 100%;
    max-height: 80vh;
    object-fit: fill;
    padding: 10px 0;

    @media only screen and (max-width: 820px) {
        transition: all 0.5s ease-in-out;
        padding: 20px 0;
    }
`

const LoginWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    // width: 100%;
    background: white;
    border-radius: 50px;
    box-shadow: 1px 1px 8px 1px lightgrey;
    padding: 10px 15px;
    margin-left: auto;
`

const Info = styled.h3`
    display: flex;
    margin-right: 5px;
    font-weight: 300;
    font-size: 14px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1080px) {
        font-size: 12px;
    }

    @media screen and (max-width: 380px) {
        font-size: 10px;
    }
`

const Link = styled.a`
    display: flex;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1px;
    text-shadow: 1px 1px 4px lightgrey;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #01bf71;
    }

    @media only screen and (max-width: 1080px) {
        font-size: 13px;
    }

    @media screen and (max-width: 380px) {
        font-size: 11px;
    }
`

// Register

const Register = () => {
    return (
        <Fragment>
            <Container>
                <LeftWrapper>
                    <Form>
                        <Title>Crear una cuenta en BRONX</Title>
                        <Text>Registrate y recibe las mejores marcas en tu casa desde cualquier parte del País</Text>
                        <Input placeholder="nombre" />
                        <Input placeholder="apellido" />
                        <Input placeholder="nombre de usuario" />
                        <Input placeholder="correo electrónico" />
                        <Input placeholder="contraseña" />
                        <Input placeholder="confirmar contraseña" />
                        <Agreement>
                            Al crear una cuenta, doy mi consentimiento para el 
                            procesamiento de mis datos personales de acuerdo 
                            con la <b>Política de Privacidad</b>
                        </Agreement>
                        <Button>REGISTRARSE</Button>
                    </Form>
                </LeftWrapper>
                <RightWrapper>
                    <NavLogo to='/'> BRONX
                        <LogoText>boutique</LogoText>
                    </NavLogo>
                    <Image src={SVGImage} />
                    <LoginWrapper>
                        <Info>¿Ya tienes una cuenta?</Info>
                        <Link>INICIA SESIÓN</Link>
                    </LoginWrapper>
                </RightWrapper>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Register