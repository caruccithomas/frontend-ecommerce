import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Foot from './Foot'

// Components

const Container = styled.footer`
    background-color: #0d0d0d;
    width: 100%;
`

const Wrapper = styled.div`
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LinksContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    column-gap: 1.3vw;

    @media only screen and (max-width: 820px) {
        column-gap: 14vw;
    }

    @media only screen and (max-width: 550px) {
        column-gap: 25vw;
    }
`

const LinkItem = styled.div`
    padding: 21px 42px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.type === 'right' ? 'flex-end' : 'flex-start'};
    width: 100%;
    justify-content: flex-start;
    box-sizing: border-box;
    color: #fff;

    @media only screen and (max-width: 1150px) {
        align-items: flex-start;
    }

    @media screen and (max-width: 550px) {
        align-items: center;
    }

    @media screen and (max-width: 370px) {
        align-items: flex-start;
        margin-left: 8px;
    }
`

const LinkTitle = styled.h2`
    font-size: 14px;
    font-weight: 800px;
    margin: 25px 0;
`

const LinkRouter = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 15px;
    font-size: 15px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

// Footer

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <LinksContainer>
                    <LinkItem>
                        <LinkTitle>NOSOTROS</LinkTitle>
                        <LinkRouter to='/login'>Perfil Corporativo</LinkRouter>
                        <LinkRouter to='/login'>Relaciones Empresariales</LinkRouter>
                        <LinkRouter to='/login'>Datos Públicos</LinkRouter>
                        <LinkRouter to='/login'>Inversiones</LinkRouter>
                        <LinkRouter to='/login'>Carreras</LinkRouter>
                    </LinkItem>
                    <LinkItem>
                        <LinkTitle>LEGALIDAD</LinkTitle>
                        <LinkRouter to='/login'>Términos y Condiciones</LinkRouter>
                        <LinkRouter to='/login'>Condiciones de Compra</LinkRouter>
                        <LinkRouter to='/login'>Defensa al Consumidor</LinkRouter>
                        <LinkRouter to='/login'>Política de Privacidad</LinkRouter>
                        <LinkRouter to='/login'>Acuerdos Legales</LinkRouter>
                    </LinkItem>
                    <LinkItem type='right'>
                        <LinkTitle>CUENTA</LinkTitle>
                        <LinkRouter to='/login'>Información Personal</LinkRouter>
                        <LinkRouter to='/login'>Recuperar Cuenta</LinkRouter>
                        <LinkRouter to='/login'>Nuestros Descuentos</LinkRouter>
                        <LinkRouter to='/login'>Notificaciones</LinkRouter>
                        <LinkRouter to='/login'>Buscador de Tiendas</LinkRouter>
                    </LinkItem>
                    <LinkItem type='right'>
                        <LinkTitle>SERVICIOS</LinkTitle>
                        <LinkRouter to='/login'>Preguntas Frecuentes</LinkRouter>
                        <LinkRouter to='/login'>Pedidos y Reembolsos</LinkRouter>
                        <LinkRouter to='/login'>Servicio al Cliente</LinkRouter>
                        <LinkRouter to='/login'>Colaboraciones</LinkRouter>
                        <LinkRouter to='/login'>Botón de Arrepentimiento</LinkRouter>
                    </LinkItem>
                </LinksContainer>
            </Wrapper>
            <Foot />
        </Container>
    )
}

export default Footer