import React, { Fragment } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import BsPerson from 'react-icons/bs'
import BsKey from 'react-icons/bs'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient( rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3) ), url('images/logins/login_11.jpg') center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NavLogo = styled(LinkRouter)`
    color: #000;
    display: flex;
    margin-bottom: 20px;
    font-size: 2em;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #01BF71;
    }
`

const LogoText = styled.h2`
    font-weight: 200;
    font-size: 1em;
    margin-left: 6px;
    letter-spacing: -1px;
`

const Wrapper = styled.div`
    width: 25%;
    min-width: 300px;
    padding: 40px 30px;
    background-color: white;
    box-shadow: 0px 0px 3px 1px lightgrey;
    opacity: 0.9;

    @media only screen and (max-width: 380px) {
        transition: all 0.5s ease-in-out;
        margin: 0 20px;
        min-width: 250px;
    }
`

const Title = styled.h1`
    width: 100%;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 5px 0;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid grey;
`

const Input = styled.input`
    width: 100%;
    display: flex;
    font-weight: 600;
    border: none;
`

const Button = styled.button`
    width: 100%;
    min-width: 25%;
    border: none;
    padding: 13px 0;
    margin-top: 20px;
    background-color: #01bf71;
    border-radius: 50px;
    color: #000;
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

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 380px) {
        transition: all 0.5s ease-in-out;
        flex-direction: column;
        margin-top: 15px;
    }
`


const Link = styled(LinkRouter)`
    margin: 10px 0;
    font-size: 12px;
    cursor: pointer;
    font-style: italic;
    text-align: ${props => props.direction === 'left' ? 'left' : 'right'};
    text-decoration: none;
    color: #000;

    &: hover{
        font-weight: 600;
    }

    @media only screen and (max-width: 380px) {
        margin: 2px 0;
    }
`


// Login

const Login = () => {
    return (
        <Fragment>
            <Container>
                <NavLogo to='/'> BRONX
                    <LogoText>boutique</LogoText>
                </NavLogo>
                <Wrapper>
                    <Title>Iniciar Sesión</Title>
                    <Form>
                        <InputContainer>
                            <BsPerson style={{fontSize:'20px', marginRight:'5px'}} />
                            <Input placeholder="nombre de usuario" />
                        </InputContainer>
                        <InputContainer>
                            <BsKey style={{fontSize:'20px', marginRight:'5px'}} />
                            <Input placeholder="contraseña" />
                        </InputContainer>
                        <LinkContainer>
                            <Link direction='left'to='/'>Olvidé mi Contraseña</Link>
                            <Link direction='right' to='/register'>Crear un Usuario</Link>
                        </LinkContainer>
                        <Button>INGRESAR</Button>
                    </Form>
                </Wrapper>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Login