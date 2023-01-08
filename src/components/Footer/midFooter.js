import React from 'react'
import styled from 'styled-components'
import { BsTwitter, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { MdLanguage } from 'react-icons/md'
import appStore from '../../images/png/app_store.png'
import playStore from '../../images/png/play_store.png'

// Styles

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    column-gap: 60px;
    transition: all 0.5 ease-in-out;

    @media only screen and (max-width: 950px) {
        padding: 0 25px;
    }
`

const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 43px;
    transition: all 0.5 ease-in-out;

    @media only screen and (max-width: 680px) {
        width: 100%;
    }

    @media screen and (max-width: 340px) {
        column-gap: 30px;
    }
`

const Icon = styled.span`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5 ease-in-out;

    @media only screen and (max-width: 680px) {
        font-size: 20px;
    }

    @media screen and (max-width: 340px) {
        font-size: 16px;
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    transition: all 0.5 ease-in-out;

    @media only screen and (max-width: 1180px) {
        width: 100%;
        justify-content: flex-end;
    }

    @media screen and (max-width: 680px) {
        display: none;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 12px;
    width: 100%;
    transition: all 0.5 ease-in-out;

    @media only screen and (max-width: 1180px) {
        justify-content: flex-end;
    }
`

const Wrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    border: 1px solid lightgrey;
    border-radius: 12px;
    padding: 8px 10px;
    color: white;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
`

const StickersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 12px;

    @media only screen and (max-width: 1180px) {
        display: none;
    }
`

const Sticker = styled.span``

const Img = styled.img`
    width: 165px;
    height: 55px;
    border: 1px solid white;
    border-radius: 15px;
    cursor: pointer;
`

// Component

const MidFooter = () => {

  return (
    <Container>
        <IconsWrapper>
            <Icon>
                <BsLinkedin />
            </Icon>
            <Icon>
                <BsTwitter />
            </Icon>
            <Icon>
                <BsYoutube />
            </Icon>
            <Icon>
                <BsInstagram />
            </Icon>
        </IconsWrapper>
        <ButtonsWrapper>
            <ButtonWrapper>
                <Wrapper>
                    <MdLanguage style={{fontSize:'18px', marginRight:'4px'}} />
                    Español (Latinoamerica)
                </Wrapper>
                <Wrapper>
                    <ImLocation2 style={{fontSize:'16px'}} />
                    Argentina
                </Wrapper>
            </ButtonWrapper>
        </ButtonsWrapper>
        <StickersWrapper>
            <Sticker>
                <Img src={appStore} />
            </Sticker>
            <Sticker>
                <Img src={playStore} />
            </Sticker>
        </StickersWrapper>
    </Container>
  )
}

export default MidFooter