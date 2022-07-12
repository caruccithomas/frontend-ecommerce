import React from 'react'
import styled from 'styled-components'

// Components

const Container = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    @media only screen and (max-width: 500px) {
        font-size: 12px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 10px;
    }
`

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    font-size: 14px;
    font-weight: 590;
    background-color: #fff;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    color: #000;

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media only screen and (max-width: 400px) {
        font-size: 10px;
        height: 25px;
    }
`

// Announcement

const OtherAnnouncement = () => {
    return (
        <Container>
            <Text>
                « aceptamos <b style={{margin: '0 4px'}}>TODOS</b> los medios de pago disponibles »
            </Text>
        </Container>
    )
}

export default OtherAnnouncement