import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import Videos from '../../videos/horizontal/video_02.mp4'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import { Button } from "./button"

// Components

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0, 0.1) 0%,
            rgba(0,0,0, 0.2) 100%
            ),
            linear-gradient(180deg, rgba(0,0,0, 0.1) 0%, transparent 100%);
    }
`

const BackgroundClip = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const Content = styled.div`
    z-index: 3;
    max-width: 1200px;
    pasition: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;
    letter-spacing: 2px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 780px) {
        font-size: 40px;
        letter-spacing: 1px;
    }

    @media only screen and (max-width: 480px) {
        font-size: 32px;
    }
`

// const Description = styled.p`
//     margin-top: 24px;
//     color: #fff;
//     font-size: 24px;
//     text-align: center;
//     letter-spacing: 2px;
//     max-width: 600px;

//     @media only screen and (max-width: 780px) {
//         font-size: 24px;
//     }

//     @media only screen and (max-width: 480px) {
//         font-size: 18px;
//     }
// `

const Description = styled.span`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    max-width: 600px;
    letter-spacing: 1px;

    @media only screen and (max-width: 780px) {
        max-width: 500px;
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        max-width: 300px;
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        max-width: 240px;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque lorem, porta a aliquam non, tempor sit amet ligula. Integer tempor tincidunt aliquet.';

// Clip

const Clip = () => {
    const [binaryText, setBinaryText] = useState('');
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBinaryText(text.slice(0, binaryText.length + 1))
        }, 60);

        // return timeout
        return () => clearTimeout(timeout);
    }, [binaryText]);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <Container>
            <BackgroundClip>
                <Video autoPlay loop muted src={Videos} type='video/mp4' />
            </BackgroundClip>
            <Content>
                <Title>FALL '23</Title>
                    <Description>
                        {binaryText}
                    </Description>
                <ButtonWrapper>
                    <Button
                        to="categories"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        // Smooth Scroll
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact="true"
                        offset={0}
                    >
                        empezar ahora {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </ButtonWrapper>
            </Content>
        </Container>
    )
}

export default Clip