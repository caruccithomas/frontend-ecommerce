import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { Search, ShoppingCart } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import Hamburger from 'hamburger-react'

// Components

const Container = styled.nav`
    background: white;
    height: 80px;
    padding-left: 58px;
    padding-right: 40px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    z-index: 10;
    box-shadow: 0px 1px 5px lightgrey;

    
    @media only screen and (max-width: 950px) {
        transition: 0.5s all ease-in-out;
        padding: 0;
    }
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    z-index: 1;
`

const NavLogo = styled(LinkRouter)`
    justify-self: flex-start;
    display: flex;
    align-items: center;
    color: #0d0d0d;
    font-size: 2.2em;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #01BF71;
    }

    @media only screen and (max-width: 950px) {
        margin-right: 20px;
    }
`

const MobileIcon = styled.div`
    display: none;
    position: sticky;
    background: rgb(240,240,240) linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(245,245,245,1) 15%, rgba(255,255,255,1) 50%, rgba(244,244,244,1) 85%, rgba(237,237,237,1) 100%);
    box-shadow: 0px 0px 6px 0px grey;
    z-index: 999;

    @media only screen and (max-width: 950px) {
        display: flex;
        cursor: pointer;
        color: #0D0D0D;
        align-items: flex-end;
    }
`

const NavSearch = styled.div`
    width: 100%;
    margin: auto;
    padding: 4px;
    display: none;
    align-items: center,
    justify-content: flex-start;
    box-sizing: border-box;
    border: 1px solid #0d0d0d;
    color: black;
    position: relative;

    @media only screen and (max-width: 950px) {
        display: flex;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`

const Input = styled.input`
    border: none;
    width: 100%;
    background: transparent;
    color: #0d0d0d;
    padding-left: 5px;
    font-size: 1em;
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;

    @media only screen and (max-width: 950px) {
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;
`

const Link = styled(LinkScroll)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1rem;
    letter-spacing: 1px;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #0d0d0d;
    }
`


const NavSign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavSignInLink = styled(LinkRouter)`
    background-color: transparent;
    color: #0d0d0d;
    border: 2px solid #0d0d0d;
    white-space: nowrap;
    padding: 8px 18px;
    border-radius: 50px;
    margin: 0 5px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #0d0d0d;
        color: white;
    }

    @media only screen and (max-width: 950px) {
        display: none;
    }
`

const NavSignUpLink = styled(LinkRouter)`
    background-color: #0d0d0d;
    color: white;
    border: 2px solid black;
    white-space: nowrap;
    padding: 8px 18px;
    border-radius: 50px;
    margin: 0 5px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #01bf71;
        color: black;
        border: 2px solid #01bf71;
    }

    @media only screen and (max-width: 950px) {
        display: none;
    }
`

const NavCart = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #0d0d0d;
    cursor: pointer;

    &:hover {
        color: #01bf74;
    }

    @media only screen and (max-width: 950px) {
        display: none;
    }
`

const NavCartLink = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0d0d0d;
    white-space: nowrap;
    border-radius: 50px;
    outline: none;
    text-decoration: none;
    padding: 8px 18px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #01BF71;
    }

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

// Navbar

const Nav = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop(); 
    }

    return (
        <Container>
            <NavContainer>
                <NavLogo to='/'>BRONX</NavLogo>
                <NavSearch>
                    <Search style={{fontSize: 18, marginLeft: 5}}/>
                    <Input placeholder='buscar productos...'/>
                </NavSearch>
                <NavMenu>
                    <NavItem>
                        <Link to='categories'>Colecciones</Link>        
                    </NavItem>
                    <NavItem>
                        <Link to='products'>Categorías</Link>           
                    </NavItem>
                    <NavItem>
                        <Link to='newsletter'>Novedades</Link>          
                    </NavItem>
                </NavMenu>
                <NavSign>
                    <NavSignInLink to='/login'>ingresar</NavSignInLink>
                    <NavSignUpLink to='/register'>registrarse</NavSignUpLink>
                </NavSign>
                <NavCart>
                    <SearchIcon>
                        <Search />
                    </SearchIcon>
                    <NavCartLink to='/cart' onClick={toggleHome}>
                        <Badge badgeContent={3} color="transparent">
                            <ShoppingCart />
                        </Badge>    
                    </NavCartLink>
                    <MobileIcon onClick={toggle}>
                        <Hamburger
                            direction='right'
                            size={25}
                            onClick={toggle}
                            color='black'
                        />
                    </MobileIcon>
                </NavCart>
            </NavContainer>
        </Container>
    )
}

export default Nav