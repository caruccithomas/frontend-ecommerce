import React from 'react'
import styled from 'styled-components'

// Components

const Container = styled.nav`
    width: 100%;
    top: 0;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: sticky;
    background-color: #000;
    color: whitesmoke;
    transition: all 0.2s ease-in-out;
    z-index: 10;
`

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 9px;
    }
`

// Announcement

const FirstAnnouncement = () => {
    return (
        <Container>
            <Text>
                productos con envíos y devoluciones gratuitas
            </Text>
        </Container>
    )
}

export default FirstAnnouncement