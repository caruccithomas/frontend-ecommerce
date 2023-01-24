import React, { useState } from "react"
import styled from "styled-components"
import { slider_items } from "../data"
import Notification from "./Notification"
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons"

// Components

const Container = styled.div`
    width: 100%;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 20px;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 950px) {
        margin-bottom: -20px;
        padding-bottom: 0;
    }
`

const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    box-shadow: 1px 1px 8px 1px lightgrey;
    margin: 0 80px;
    margin-bottom: 20px;
    padding: 10px;
    background: #0d0d0d;
    color: whitesmoke;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 950px) {
        margin-left: 24px;
        margin-right: 24px;
        transition: all 0.5s ease-in-out;
    }
`

const TitleMenu = styled.h1`
    font-size: 1.2em;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.2vw;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.8em;
    }
`

const SliderContainer = styled.div`
    position: relative;
    margin: 0 80px;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 950px) {
        margin: 0 20px;
    }
`

const Arrow = styled.div`
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: rgba(236, 236, 236, 0.5);
    border-radius: 25px;
    color: #0d0d0d;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "38px"};
    right: ${props => props.direction === "right" && "38px"};
    margin: auto 0;
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #0d0d0d;
        color: #fff;
        box-shadow: 1px 1px 5px 1px #0d0d0d inset;
    }

    @media only screen and (max-width: 950px) {
        width: 30px;
        height: 30px;
        left: ${props => props.direction === "left" && "46px"};
        right: ${props => props.direction === "right" && "46px"};

        @media screen and (max-width: 500px) {
            width: 20px;
            height: 20px;
            font-size: 10px;
            left: ${props => props.direction === "left" && "12px"};
            right: ${props => props.direction === "right" && "12px"};
        }
    }
`
const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 30px;
    box-shadow: 1px 1px 8px 4px grey;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    overflow-x: hidden;
    z-index: 1;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: all 1.3s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100%;
    margin: 0 auto;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.5s ease-in-out;
`

const SlideContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    transition: all 0.5s ease-in-out;
`

const Image = styled.img`
    width: 35vw;
    object-fit: contain;
    padding: 20px;
    z-index: 1;

    @media screen and (max-width: 400px) {
        width: 200px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    padding-right: 180px;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 950px) {
        padding-right: 60px;
    }
`

const Info = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    z-index: 2;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: lightgrey;
    font-size: 35px;
    font-family: 'Audiowide', cursive;
    font-weight: 900;
    text-shadow: 3px 3px 3px #0d0d0d;
    text-align: center;
    letter-spacing: -2px;
    transition: all 0.3s ease-in-out;
`

const Subtitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 1px 2px 2px #000;
    color: #fff;
    transition: all 0.3s ease-in-out;
`

// Slider

const Slider = () => {
    const [notifyMes, setNotifyMes] = useState('')
    const [notifyType, setNotifyType] = useState('info')
    const [notifyTitle, setNotifyTitle] = useState('')

    const handleButton = () => {
        setNotifyMes('Esta sección sigue en desarrollo')
        setNotifyType('info')
        setNotifyTitle('Información')
    }

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container id='announcement'>
            <TitleContainer>
                <TitleMenu>NOVEDADES</TitleMenu>
            </TitleContainer>
            <SliderContainer>
                <Notification
                    title={notifyTitle}
                    message={notifyMes}
                    type={notifyType}
                />
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <KeyboardArrowLeft style={{fontSize: '20px'}} />
                </Arrow>
                <ContentWrapper onClick={handleButton}>
                    <Wrapper slideIndex={slideIndex}>
                        {slider_items.map((item) => (
                            <Slide background={item.background} key={item.id}>
                                <SlideContent>
                                    <InfoContainer>
                                        <ImageContainer>
                                            <Image src={item.img} /* style={{filter: "grayscale(100%)"}} */ />
                                        </ImageContainer>
                                        <Info>
                                            <Title>{item.title}</Title>
                                            <Subtitle>{item.subtitle}</Subtitle>
                                        </Info>
                                    </InfoContainer>
                                </SlideContent>
                            </Slide>
                        ))}
                    </Wrapper>
                </ContentWrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <KeyboardArrowRight style={{fontSize: '20px'}} />
                </Arrow>
            </SliderContainer>
        </Container>
    )
}

export default Slider