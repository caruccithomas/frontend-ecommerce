import React, { Fragment } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import SVGImage from './svg/svg_10.svg'

const NavLogo = styled(LinkRouter)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 75vh;
    padding-right: 80px;
    padding-top: 6px;
    padding-bottom: 6px;
    box-shadow: 2px 2px 8px lightgrey;
    background: whitesmoke;
    color: #0d0d0d;
    font-size: 1.6em;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    z-index: 1;

    &:hover {
        color: #01bf71; 
    }

    @media only screen and (max-width: 1280px) {
        margin-top: 125vh;
        font-size: 1.6em;
    }

    @media screen and (max-width: 1080px) {
        display: none;
    }
`

const LogoText = styled.h2`
    font-weight: 200;
    font-size: 1em;
    margin-left: 6px;
    letter-spacing: -1px;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: linear-gradient( rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3) ), url('images/logins/background_02.jpg') center;
    background-size: cover;
    padding: 40px 80px;
    column-gap: 20px;

    @media only screen and (max-width: 1280px) {
        transition: all 0.5s ease-in-out;
        padding: 20px 40px;
        flex-direction: column;
        height: 100%;
        row-gap: 20px;
    }

    @media screen and (max-width: 380px) {
        padding: 20px 15px;
    }
`

const LeftWrapper = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px 30px;
    background-color: white;
    box-shadow: 1px 1px 8px 1px lightgrey;
    opacity: 0.9;

    @media only screen and (max-width: 1280px) {
        transition: all 0.5s ease-in-out;

    }
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 180px) {
        transition: all 0.5s ease-in-out;
        flex-direction: column;
        width: 100%;
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

    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }

    @media screen and (max-width: 380px) {
        font-size: 20px;
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
        margin: 4px;
    }

    @media screen and (max-width: 800px) {
        transition: all 0.5s ease-in-out;
        flex-direction: column;
        min-width: 100%;
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
        background-color: #0d0d0d;
        color: #fff;
    }
`

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: white;
    border-radius: 50px;
    box-shadow: 1px 1px 8px 1px lightgrey;
    padding: 12px;
    margin-top: 12px;

    @media screen and (max-width: 300px) {
        box-shadow: none;
        padding: 0;
        margin-top: 20px;
    }
`

const Info = styled.h3`
    display: flex;
    text-align: center;
    margin-right: 5px;
    font-weight: 300;
    font-size: 14px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 500px) {
        font-size: 12px;
    }

    @media screen and (max-width: 400px) {
        font-size: 10px;
    }

    @media screen and (max-width: 300px) {
        
    }
`

const Link = styled(LinkRouter)`
    display: flex;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    text-decoration: none;
    text-shadow: 1px 1px 4px lightgrey;
    color: #000;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

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

const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;

    @media only screen and (max-width: 1080px) {
        transition: all 0.5s ease-in-out;
        height: 90%;
    }
`

const Image = styled.img`
    width: 60vh;
    object-fit: contain;
    z-index: 2;

    @media only screen and (max-width: 1280px) {
        transition: all 0.5s ease-in-out;
        padding: 20px 0;
        width: 60%;
    }
`

// Register

const Register = () => {
    return (
        <Fragment>
            <NavLogo to='/'> BRONX
                <LogoText>boutique</LogoText>
            </NavLogo>
            <Container>
                <LeftWrapper>
                    <Wrapper>
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
                            <LoginWrapper>
                                <Info>¿Ya tienes una cuenta?</Info>
                                <Link to='/login'>INICIA SESIÓN</Link>
                            </LoginWrapper>
                        </Form>
                    </Wrapper>
                </LeftWrapper>
                <RightWrapper>
                    <Image src={SVGImage} />
                </RightWrapper>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Register