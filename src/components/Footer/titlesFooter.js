import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

// Styles

const Container = styled.div`
    width: 100%;
    padding: 0 80px;

    @media only screen and (max-width: 950px) {
        padding: 0 25px;
    }
`

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 25px;

    @media screen and (max-width: 600px) {
        align-items: center;
        justify-content: center;
    }
`

const LogoText = styled.h2`
    color: white;
    font-size: 24px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 900px) {
        font-size: 22px;
    }
`

const BottomTitle = styled.div`
    font-size: 16px;
    color: white;

    @media only screen and (max-width: 950px) {
        font-size: 14px;
    }
        
    @media screen and (max-width: 340px) {
        font-size: 13px;
        text-align: center;
    }
`

// Components

const toggle = () => {
    scroll.scrollToTop(); 
}

const TitlesFooter = () => {
    return (
        <Container>
            <Wrapper>
                <Link to='/' onClick={toggle} style={{textDecoration:'none', cursor:'pointer'}}>
                    <LogoText>BRONX boutique</LogoText>
                </Link>
                <BottomTitle>
                    Desarrollado por Thomas Carucci
                </BottomTitle>
            </Wrapper>
        </Container>
    )
}

export default TitlesFooter