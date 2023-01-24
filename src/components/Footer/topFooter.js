import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { ExpandMore } from '@material-ui/icons'
import { styled as styles } from '@mui/material/styles';
import { GoLaw } from 'react-icons/go'
import { IoPeopleOutline } from 'react-icons/io5'
import { VscTools } from 'react-icons/vsc'

// Components

const Container = styled.footer`
    background-color: #000;
    width: 100%;
`

const Wrapper = styled.div`
    padding: 50px 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 950px) {
        padding: 50px 25px;
    }
`

const LinksContainer = styled.section`
    display: flex;
    width: 100%;
    column-gap: 40px;

    @media only screen and (max-width: 1040px) {
        flex-wrap: wrap;
        row-gap: 13px;
    }
`

const AccordionContainer = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 10px;

    @media only screen and (max-width: 1040px) {
        display: flex;
    }
`

const StyledAccordion = styles(Accordion)(() => ({
    background: 'transparent',
    color: 'white',
    width: '100%'
}))

const StyledAccordionDetails = styles(AccordionDetails)(() => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
}))

const StyledTypography = styles(Typography)(() => ({
    fontWeight: '600',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center'
}))

const LinkItem = styled.div`
    flex: ${props => props.type === 'left' && '0.5'};
    flex: ${props => props.type === 'right' && '1'};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: ${props => props.type === 'left' && 'flex-start'};
    align-items: ${props => props.type === 'right' && 'flex-end'};
    width: ${props => props.type === 'left' && '215px'};
    min-width: ${props => props.type === 'left' && '215px'};
    min-width: ${props => props.type === 'right' && '365px'};
    max-width: ${props => props.type === 'left' && '215px'};
    color: #fff;

    @media only screen and (max-width: 1040px) {
        display: none;
    }
`

const LinkTitle = styled.h2`
    font-size: 16px;
    font-weight: 800px;
    margin: 25px 0;
`

const LinkRouter = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 15px;
    font-size: 14px;
    letter-spacing: 1px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

// Footer

const TopFooter = () => {

    const toggleHome = () => {
        scroll.scrollToTop(); 
    }

    return (
        <Container>
            <Wrapper>
                <LinksContainer>
                    <AccordionContainer>
                        <StyledAccordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore style={{color:'white'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <StyledTypography>
                                    <IoPeopleOutline style={{
                                        width: '30px',
                                        height: '30px',
                                        marginRight: '12px'
                                    }} />
                                    NOSOTROS
                                </StyledTypography>
                            </AccordionSummary>
                            <StyledAccordionDetails>
                                <LinkRouter to='/login' onClick={toggleHome}>Perfil Corporativo</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Relaciones Empresariales</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Datos Públicos</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Inversiones</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Carreras</LinkRouter>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    </AccordionContainer>
                    <AccordionContainer>
                        <StyledAccordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore style={{color:'white'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <StyledTypography>
                                    <GoLaw style={{
                                        width: '30px',
                                        height: '30px',
                                        marginRight: '12px'
                                    }} />
                                    LEGALIDAD
                                </StyledTypography>
                            </AccordionSummary>
                            <StyledAccordionDetails>
                                <LinkRouter to='/login' onClick={toggleHome}>Términos y Condiciones</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Condiciones de Compra</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Defensa al Consumidor</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Política de Privacidad</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Acuerdos Legales</LinkRouter>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    </AccordionContainer>
                    <AccordionContainer>
                        <StyledAccordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore style={{color:'white'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <StyledTypography>
                                    <VscTools style={{
                                        width: '30px',
                                        height: '30px',
                                        marginRight: '12px'
                                    }} />
                                    SERVICIOS
                                </StyledTypography>
                            </AccordionSummary>
                            <StyledAccordionDetails>
                                <LinkRouter to='/login' onClick={toggleHome}>Colaboraciones Internacionales en Descuento</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Botón de Arrepentimiento en su compra</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Servicio de Mensajería Instantánea</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Encuentra tu Boutique cercana</LinkRouter>
                                <LinkRouter to='/login' onClick={toggleHome}>Preguntas frecuentes</LinkRouter>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    </AccordionContainer>
                    <LinkItem type='left'>
                        <LinkTitle>NOSOTROS</LinkTitle>
                        <LinkRouter to='/login' onClick={toggleHome}>Perfil Corporativo</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Relaciones Empresariales</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Datos Públicos</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Inversiones</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Carreras</LinkRouter>
                    </LinkItem>
                    <LinkItem type='left'>
                        <LinkTitle>LEGALIDAD</LinkTitle>
                        <LinkRouter to='/login' onClick={toggleHome}>Términos y Condiciones</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Condiciones de Compra</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Defensa al Consumidor</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Política de Privacidad</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Acuerdos Legales</LinkRouter>
                    </LinkItem>
                    <LinkItem type='right'>
                        <LinkTitle>SERVICIOS</LinkTitle>
                        <LinkRouter to='/login' onClick={toggleHome}>Colaboraciones Internacionales</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Botón de Arrepentimiento en su compra</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Servicio de Mensajería Instantánea</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Encuentra tu Boutique cercana</LinkRouter>
                        <LinkRouter to='/login' onClick={toggleHome}>Preguntas frecuentes</LinkRouter>
                    </LinkItem>
                </LinksContainer>
            </Wrapper>
        </Container>
    )
}

export default TopFooter