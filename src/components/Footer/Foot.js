import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaSnapchat } from 'react-icons/fa'

// Components

const Container = styled.div`
    background-color: #0d0d0d;
    padding: 30px 40px;
`

const SocialMediaWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 0 40px;

    @media only screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const SocialMedia = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const SocialMediaLogo = styled(Link)`
    justify-self: start;
    display: flex;
    align-items: space-between;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    @media only screen and (max-width: 820px) {
        font-size: 1.2rem;
        padding-bottom: 10px;
    }
`

const LogoDescription = styled.h2`
    display: flex;
    margin-left: 5px;
    font-weight: 200;
    font-size: 1.5rem;
    color: #fff;

    @media screen and (max-width: 820px) {
        font-size: 1.2rem;
    }
`

const WebsiteRights = styled.small`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    min-width: 180px;

    @media only screen and (max-width: 370px) {
        display: none;
    }
`

const SocialIcons = styled.div`
    flex: 1;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vh 0;
`
const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin: 0 1vw;
`

// Foot Extension

const Foot = () => {
    return (
        <Container>
            <SocialMediaWrapper>
                <SocialMedia>
                    <SocialMediaLogo to='/'>
                        BRONX <LogoDescription> boutique </LogoDescription>
                    </SocialMediaLogo>
                </SocialMedia>
                <SocialIcons>
                    <SocialIconLink href='//www.instagram.com/chanelofficial' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='//www.linkedin.com/in/caruccithomas' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href='//www.youtube.com/louisvuitton' target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.snapchat.com/es' target='_blank' aria-label='Snapchat'>
                        <FaSnapchat />
                    </SocialIconLink>
                </SocialIcons>
                <WebsiteRights>
                    BRONX © {new Date().getFullYear()} | Rights Reserved
                </WebsiteRights>
            </SocialMediaWrapper>
        </Container>
    )
}

export default Foot