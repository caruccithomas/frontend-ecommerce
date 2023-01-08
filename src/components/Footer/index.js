import React from "react"
import styled from "styled-components"
import TopFooter from "./topFooter"
import MidFooter from "./midFooter"
import BottomFooter from "./bottomFooter"
import TitlesFooter from "./titlesFooter"

// Styles

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    top: 0;
    min-height: 100vh;
    background: #000;
    width: 100%;
`

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
`

// Component

const Footer = () => {

    return (
        <MainContainer>
            <Container>
                <TitlesFooter />
                <TopFooter />
                <MidFooter />
                <BottomFooter />
            </Container>
        </MainContainer>
    )
}

export default Footer