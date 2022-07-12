import React from "react"
import styled from 'styled-components'
import Videos from '../components/Clip/videos/horizontal/video_10.mp4'
import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material'


// Components

const Container = styled.div`
    flex: 1;
    width: 100%;
    height: 20vh;
`

const Wrapper = styled.div`
    display: flex;
    margin: 0 80px;
    height: 18.5vh;

    @media only screen and (max-width: 950px) {
        margin: 0 20px;
        transition: all 0.5s ease-in-out;
        flex-direction: column-reverse;
        align-items: center;
    }
`

const Video = styled.video`
    display: flex;
    position: absolute;
    width: 100%;
    height: 20vh;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-start;
    z-index: 1;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 500px) {
        width: 100%;
        justify-content: center;
    }
`

const Button = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    padding: 3px 5px;
    border-radius: 50px;
    border: 1px solid white;
    box-shadow: 2px 2px 6px black;
    text-decoration: none;
    font-size: 1em;
    cursor: pointer;
    margin-right: 3%;
    color: white;
    backdrop-filter: blur(10px);

    &:hover {
        color: #01bf71;
        border: 2px solid #01bf71;
        transform: scale(0.95);
        transition: all 0.2s ease-in;
    }

    @media only screen and (max-width: 500px) {
        margin: 0 2%;
    }
`

const ShoppingIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.h1`
    display: flex;
    padding-left: 4px;
    font-size: 1em;
    font-family: 'Audiowide', cursive;
    letter-spacing: 1px;

    @media only screen and (max-width: 1100px) {
        font-size: 0.8em;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-shadow: ${props => props.type === 'filled' ? '1px 1px 4px #0d0d0d' : 'none'};
    font-weight: 800;
    color: ${props => props.type === 'filled' ? 'whitesmoke' : '#0d0d0d'};
    background-color: ${props => props.type === 'filled' ? 'red' : 'white'};

    &:hover {
        transform: ${props => props.type === 'filled' ? 'scale(1.12)' : 'none'};
    }
`

const FavoriteIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const TitleWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

const Title = styled.h1`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    overflow: hidden;
    white-space: nowrap;
    text-shadow: 2px 2px 8px black;
    width: 100%;
    font-family: 'Audiowide', cursive;
    font-size: 2em;
    font-weight: 800;
    color: white;
    letter-spacing: 3px;
    z-index: 2;

    @media only screen and (max-width: 1100px) {
        font-size: 1.8em;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 950px) {
        font-size: 1.5em;
    }
`

// Cart Navbar

const NavCart = () => {
    return (
        <Container>
            <Video autoPlay loop muted src={Videos} type='video/mp4' />
            <Wrapper>
                <ButtonWrapper>
                    <Button>
                        <ShoppingIcon>
                            <ShoppingBagOutlined style={{fontSize:'20px'}} />
                            <Text>INVENTARIO</Text>
                        </ShoppingIcon>
                        <Circle type='filled'>3</Circle>
                    </Button>
                    <Button>
                        <FavoriteIcon>
                            <FavoriteBorderOutlined style={{fontSize:'20px'}} />
                            <Text>FAVORITOS</Text>
                        </FavoriteIcon>
                        <Circle type='none'>0</Circle>
                    </Button>
                </ButtonWrapper>
                <TitleWrapper>
                    <Title>MI CARRITO</Title>
                </TitleWrapper>
            </Wrapper>
        </Container>
    )
}

export default NavCart