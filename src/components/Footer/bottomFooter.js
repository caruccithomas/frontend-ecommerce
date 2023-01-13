import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components

const Container = styled.div`
    background-color: #000;
    padding: 50px 80px;
    transition: all 0.5 ease-in-out;

    @media only screen and (max-width: 950px) {
        padding: 50px 25px;
    }
`

const SocialMediaWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: #adadad;
`

const WebsiteRights = styled.small`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    text-align: center;

    @media only screen and (max-width: 680px) {
        justify-content: center;
    }

    @media screen and (max-width: 340px) {
        font-size: 12px;
    }
`

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 680px) {
        display: none;
    }
`

const Wrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 35px;
    list-style: none;
`

const Title = styled.li`
    font-size: 14px;

    @media only screen and (max-width: 340px) {
        font-size: 12px;
    }
`

const LinkRouter = styled(Link)`
    text-decoration: none;
    color: #adadad;
    cursor: pointer;
`

// Foot Extension

const BottomFooter = () => {

    return (
        <Container>
            <SocialMediaWrapper>
                <WebsiteRights>
                    © {new Date().getFullYear()} Bronx Development Inc.
                </WebsiteRights>
                <NavWrapper>
                    <Wrapper>
                        <Title>
                            <LinkRouter to='/privacy'>
                                Privacidad
                            </LinkRouter>
                        </Title>
                        <Title>
                            <LinkRouter to='/privacy'>
                                Accesibilidad
                            </LinkRouter>
                        </Title>
                        <Title>
                            <LinkRouter to='/privacy'>
                                Condiciones
                            </LinkRouter>
                        </Title>
                    </Wrapper>
                </NavWrapper>
            </SocialMediaWrapper>
        </Container>
    )
}

export default BottomFooter