import React from "react"
import { styled as styles } from '@material-ui/styles'
import styled from 'styled-components'
import Videos from '../videos/horizontal/video_05.mp4'
import { MdFavorite } from 'react-icons/md'
import { AiFillShopping } from 'react-icons/ai'
import { Badge } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

// Components

const Container = styled.div`
    flex: 1;
    width: 100%;
    height: 20%;
`

const Wrapper = styled.div`
    display: flex;
    margin: 0 80px;
    height: 100px;

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
    height: 120px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-start;
    column-gap: 8px;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 500px) {
        width: 100%;
        justify-content: center;
    }
`

const Button = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(91, 91, 91, 0.5);
    padding: 6px 12px;
    border-radius: 50px;
    border: 1px solid whitesmoke;
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
    color: whitesmoke;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in;

    &:hover {
        color: #01bf71;
        border: 1px solid #01bf71;
        transform: scale(0.95);
    }
`

const ShoppingIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.h1`
    display: flex;
    padding-left: 5px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Audiowide', cursive;
    letter-spacing: 1px;

    @media only screen and (max-width: 1100px) {
        font-size: 0.8em;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`

const StyledBadge = styles(Badge)(() => ({
    '& .MuiBadge-badge': {
      right: 10,
      top: 10,
      color: 'whitesmoke',
      backgroundColor: '#01bf71',
      textShadow: '1px 1px 2px #000',
      fontWeight: '700',
    },
}));

const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: ${props => props.type === 'filled' ? '1px 1px 4px #0d0d0d' : 'none'};
    font-weight: 800;
    font-size: 12px;
    color: ${props => props.type === 'filled' ? 'whitesmoke' : '#0d0d0d'};
    background-color: ${props => props.type === 'filled' ? '#01bf71' : 'whitesmoke'};
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

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`

// Favorites Navbar

const NavFav = () => {
    const cartQuantity = useSelector(state => state.cart.products.length)
    const favoriteQuantity = useSelector(state => state.favorites.products.length)

    const isFilled = () => {
        if ( (cartQuantity !== 0) || (favoriteQuantity !== 0) ) {

            switch (isFilled) {
                case (cartQuantity !== 0):
                    return 'filled';

                case (favoriteQuantity !== 0):
                    return 'filled';

                default:
                    return 'none';
            }

        } else {
            return 'none';
        }
    }

    return (
        <Container>
            <Video autoPlay loop muted src={Videos} type='video/mp4' />
            <Wrapper>
                <ButtonWrapper>
                    <Link to='/cart' style={{textDecoration:'none'}}>
                        <Button>
                            <ShoppingIcon>
                                <AiFillShopping style={{
                                    fontSize:'16px',
                                    marginLeft:'5px',
                                }} />
                                <Text>INVENTARIO</Text>
                            </ShoppingIcon>
                            <StyledBadge badgeContent={cartQuantity} color='success' variant='string' overlap='rectangular'>
                                <Circle type={isFilled()}>0</Circle>
                            </StyledBadge>
                        </Button>
                    </Link>
                    <Link to='/favorites' style={{textDecoration:'none'}}>
                        <Button>
                            <FavoriteIcon>
                                <MdFavorite style={{
                                    fontSize:'16px',
                                    marginLeft:'5px',
                                }} />
                                <Text>FAVORITOS</Text>
                            </FavoriteIcon>
                            <StyledBadge badgeContent={favoriteQuantity} color='success' variant='string' overlap='rectangular'>
                                <Circle type={isFilled()}>0</Circle>
                            </StyledBadge>
                        </Button>
                    </Link>
                </ButtonWrapper>
                <TitleWrapper>
                    <Title>MIS FAVORITOS</Title>
                </TitleWrapper>
            </Wrapper>
        </Container>
    )
}

export default NavFav