import React, {Fragment, useState} from "react"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import OtherAnnouncement from "../components/OtherAnnouncement"
import { slider_items } from "../data"
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

// Components

const Container = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "50px"};
    right: ${props => props.direction === "right" && "50px"};
    margin: auto 10px;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;

    @media only screen and (max-width: 920px) {
        left: ${props => props.direction === "left" && "0"};
        right: ${props => props.direction === "right" && "0"};
        transition: all 0.5s ease-in-out;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${(props) => props.background};

    @media only screen and (max-width: 920px) {
        flex-direction: column;
    }
`

const Image = styled.img`
    flex: 1;
    height: 70vh;
    object-fit: contain;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1280px) {
        transition: all 0.5s ease-in-out;
        height: 60vh;
    }

    @media only screen and (max-width: 920px) {
        transition: all 0.5s ease-in-out;
        height: 20vh;
        margin-top: 80px;
    }

    @media screen and (max-width: 420px) {
        transition: all 0.5s ease-in-out;
        width: 50vw;
    }
`

const InfoContainer = styled.div`
    flex: 1;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    @media only screen and (max-width: 920px) {
        align-items: center;
        justify-content: flex-start;
    }
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 4em;
    text-shadow: 3px 3px 3px gray;
    transition: all 0.5s ease-in-out;
    width: 50%;
    max-width: 200px;

    @media only screen and (max-width: 1280px) {
        transition: all 0.5s ease-in-out;
        font-size: 3em;
    }

    @media screen and (max-width: 920px) {
        transition: all 0.5s ease-in-out;
        text-align: center;
        width: 100%;
    }

    @media screen and (max-width: 520px) {
        font-size: 2.5em;
        text-align: center;
        justify-content: center;
        max-width: 150px;
    }
`

const Description = styled.p`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    max-width: 30vw;
    padding: 5vh 0;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1280px) {
        font-size: 12px;
    }

    @media screen and (max-width: 920px) {
        padding: 20px 0;
        font-size: 9px;
        text-align: center;
    }

    @media screen and (max-width: 380px) {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    background: #fff;
    padding: 2vh 2vw;
    font-size: 1em;
    width: 250%;
    z-index: 0;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0px 1px 10px lightgrey;

    &:hover {
        background-color: #01bf71;
    }

    @media only screen and (max-width: 1280px) {
        transition: all 0.5s ease-in-out;
        width: 250%;
    }

    @media screen and (max-width: 920px) {
        transition: all 0.5s ease-in-out;
        width: 230px;
        padding: 10px 0;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
    }
`

const Button = styled.button`
    display: flex;
    font-weight: 800;
    font-size: 15px;
    color: #0d0d0d;
    background: transparent;
    border: none;
    letter-spacing: 1.5px;

    @media only screen and (max-width: 1280px) {
        font-size: 12px;
    }

    @media screen and (max-width: 920px) {
        font-size: 10px;
    }
`

// Slider

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Fragment>
            <Announcement />
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <IoIosArrowBack style={{fontSize: '1.5em'}} />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {slider_items.map((item) => (
                        <Slide background={item.background} key={item.id}>
                            <Image src={item.img} /* style={{filter: "grayscale(100%)"}} */ />
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <ButtonContainer>
                                    <Button>ingresar a ver la colección</Button>
                                </ButtonContainer>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <IoIosArrowForward style={{fontSize: '1.5em'}} />
                </Arrow>
            </Container>
            <OtherAnnouncement />
        </Fragment>
    )
}

export default Slider