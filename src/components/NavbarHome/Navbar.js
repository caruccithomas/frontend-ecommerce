import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { Search, ShoppingCart } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import Hamburger from 'hamburger-react'

// Components

const Container = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    top: 0;
    padding-left: 58px;
    padding-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    z-index: 10;
    box-shadow: ${({scrollNav}) => (scrollNav ? '0px 1px 5px lightgrey' : 'none')};
    
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
    color: ${({scrollNav}) => (scrollNav ? 'black' : '#fff')};
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
    background: ${({scrollNav}) => (scrollNav ? 'rgb(240,240,240) linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(245,245,245,1) 15%, rgba(255,255,255,1) 50%, rgba(244,244,244,1) 85%, rgba(237,237,237,1) 100%)' : 'transparent')};
    box-shadow: ${({scrollNav}) => (scrollNav ? '0px 0px 6px 0px grey' : '')};
    transition: all 0.5s ease-in-out;
    z-index: 999;

    margin-right: ${({toggle}) => (toggle ? '35vw' : '0px')};

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
    border: 1px solid ${({scrollNav}) => (scrollNav ? '#0d0d0d' : 'white')};
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
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
    color: ${({scrollNav}) => (scrollNav ? '#0d0d0d' : 'white')};
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
    color: ${({scrollNav}) => (scrollNav ? 'black' : '#fff')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1rem;
    letter-spacing: 1px;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
        color: #01bf71;
        font-weight: 800;
        text-shadow: 1px 1px 4px lightgrey;
    }
`


const NavSign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavSignInLink = styled(LinkRouter)`
    background-color: ${({scrollNav}) => (scrollNav ? 'white' : 'transparent')};
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    border: 2px solid ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
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
        background-color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
        color: ${({scrollNav}) => (scrollNav ? 'white' : 'black')};
    }

    @media only screen and (max-width: 950px) {
        display: none;
    }
`

const NavSignUpLink = styled(LinkRouter)`
    background-color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    color: ${({scrollNav}) => (scrollNav ? 'white' : 'black')};
    border: 2px solid ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
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
        background-color: ${({scrollNav}) => (scrollNav ? '#01bf71' : '#01bf71')};;
        color: ${({scrollNav}) => (scrollNav ? 'black' : 'black')};
        border: 2px solid ${({scrollNav}) => (scrollNav ? '#01bf71' : '#01bf71')};
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
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
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
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
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

    @media only screen and (max-width: 360px) {
        display: none;
    }
`

// Navbar

const Nav = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeBgNav = () => {
      if (window.scrollY >= 80) {
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll', changeBgNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop(); 
    }

    return (
        <Container scrollNav={scrollNav}>
            <NavContainer>
                <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>BRONX</NavLogo>
                <NavSearch scrollNav={scrollNav}>
                    <Search style={{fontSize: 18, marginLeft: 5}}/>
                    <Input scrollNav={scrollNav} placeholder='buscar productos...'/>
                </NavSearch>
                <NavMenu>
                    <NavItem>
                        <Link to='categories'scrollNav={scrollNav} smooth={true} duration={800} spy={true} exact="true" offset={-2}>Colecciones</Link>        
                    </NavItem>
                    <NavItem>
                        <Link to='products' scrollNav={scrollNav} smooth={true} duration={800} spy={true} exact="true" offset={2}>Categorías</Link>           
                    </NavItem>
                    <NavItem>
                        <Link to='announcement' scrollNav={scrollNav} smooth={true} duration={800} spy={true} exact="true" offset={2}>Novedades</Link>          
                    </NavItem>
                </NavMenu>
                <NavSign>
                    <NavSignInLink to='/login' scrollNav={scrollNav}>ingresar</NavSignInLink>
                    <NavSignUpLink to='/register' scrollNav={scrollNav}>registrarse</NavSignUpLink>
                </NavSign>
                <NavCart>
                    <SearchIcon scrollNav={scrollNav}>
                        <Search />
                    </SearchIcon>
                    <NavCartLink to='/cart' scrollNav={scrollNav}>
                        <Badge badgeContent={3} color="transparent">
                            <ShoppingCart />
                        </Badge>    
                    </NavCartLink>
                    <MobileIcon onClick={toggle} scrollNav={scrollNav}>
                        <Hamburger
                            direction='right'
                            size={25}
                            onClick={toggle}
                            color={scrollNav ? 'black' : 'white'}
                        />
                    </MobileIcon>
                </NavCart>
            </NavContainer>
        </Container>
    )
}

export default Nav