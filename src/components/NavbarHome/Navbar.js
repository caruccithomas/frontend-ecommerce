import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { publicRequest } from '../../requestMethods'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { Search, ShoppingCart, Favorite, Person } from '@material-ui/icons'
import { BiLogOut } from 'react-icons/bi'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Badge } from '@mui/material'
import Hamburger from 'hamburger-react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/userRedux'
import Notification from '../Notification'
import { Card } from 'antd'

// Components

const MainContainer = styled.nav`
    position: sticky;
    top: 0;
    height: 0;
    z-index: 10;
`

const Container = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'white' : 'transparent')};
    height: 60px;
    padding: 0 70px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    box-shadow: ${({scrollNav}) => (scrollNav ? '0px 1px 5px lightgrey' : 'none')};
    transition: 0.3s all ease-in-out;
    z-index: 10;
    
    @media only screen and (max-width: 950px) {
        padding: 0 15px;
    }
`

const MobileIcon = styled.div`
    display: none;
    position: sticky;
    transition: all 0.3s ease-in-out;
    z-index: 999;

    // circle button =>
    // background: ${({scrollNav}) => (scrollNav ? 'rgb(240,240,240) linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(245,245,245,1) 15%, rgba(255,255,255,1) 50%, rgba(244,244,244,1) 85%, rgba(237,237,237,1) 100%)' : 'transparent')};
    // box-shadow: ${({scrollNav}) => (scrollNav ? '0px 0px 6px 0px grey' : '')};
    // padding: 5px;
    // border-radius: 25px;
    
    @media only screen and (max-width: 950px) {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #0d0d0d;
    }
`

const NavLogo = styled(LinkRouter)`
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin: auto 10px;
    color: ${({scrollNav}) => (scrollNav ? '#0d0d0d' : '#fff')};
    font-size: 30px;
    font-weight: 900;
    font-family: 'Audiowide', cursive;
    letter-spacing: -3px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #01BF71;
    }
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    z-index: 1;
`

const SearchContainer = styled.div`
    display: none;
    align-items: center;
    jusitfy-content: center;
    flex-direction: column;
    width: 100%;
    height: 60px;
    margin: 12px;

    @media only screen and (max-width: 950px) {
        display: flex;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`

const NavSearch = styled.div`
    width: 100%;
    padding: 3px;
    display: flex;
    align-items: center,
    justify-content: center;
    border: 1px solid ${({scrollNav}) => (scrollNav ? '#0d0d0d' : 'white')};
    border-radius: 25px;
    margin: auto 0;
    margin-top: 17px;
    color: ${({scrollNav}) => (scrollNav ? '#000' : 'white')};
    box-sizing: border-box;
`

const Input = styled.input`
    border: none;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    background: transparent;
    color: ${({scrollNav}) => (scrollNav ? '#0d0d0d' : 'white')};
    padding-left: 5px;
    font-size: 1em;
`

const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    z-index: 2;
`

const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    background: white;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    box-shadow: 0px 0px 6px 0px grey;
    row-gap: 10px;
`

const ProductResults = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    box-sizing: border-box;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: lightgrey;
        z-index: 10;
    }
`

const NavProductLink = styled(LinkRouter)`
    display: flex;
    width: 100%;
    text-decoration: none;
    color: #000;
`

const ProductWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    width: 100%;
    height: 100%;
`

const ImgWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 60px;
    max-height: 60px;
    margin: auto 12px;                                                                                                          
`

const Img = styled.img`
    margin: 15px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1.0s ease-in-out;
`

const CardWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 4px;
    width: 100%;
    padding-right: 10px;
`

const Strong = styled.h2`
    font-weight: 800;
    font-size: 14px;
    font-style: italic;¿
    color: #000;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 620px) {
        font-size: 13px;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: auto 5px;
    width: 100%;
    text-align: center;
    list-style: none;

    @media only screen and (max-width: 950px) {
        display: none;
    }
`

const NavItem = styled.li`
    height: 60px;
`

const Link = styled(LinkScroll)`
    color: ${({scrollNav}) => (scrollNav ? 'black' : '#fff')};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;

    &.active {
        background: #01bf74;
        border-radius: 30px;
        height: auto;
        margin: 16px 0;
        padding: 7px 1rem;
        color: #fff;
        font-weight: 800;
        text-shadow: 1px 1px 4px #0d0d0d;
        box-shadow: 1px 1px 4px 1px lightgrey;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: 5%;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1080px) {
        display: none;
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
    padding: 5px 14px;
    border-radius: 50px;
    margin: auto 5px;
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

    @media only screen and (max-width: 1080px) {
        display: none;
    }
`

const NavSignUpLink = styled(LinkRouter)`
    background-color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    color: ${({scrollNav}) => (scrollNav ? 'white' : 'black')};
    border: 2px solid ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    white-space: nowrap;
    padding: 5px 15px;
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

    @media only screen and (max-width: 1080px) {
        display: none;
    }
`

const NavCart = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 12px;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

const NavCartLink = styled(LinkRouter)`
    display: ${props => props.type === 'user' ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    margin-right: ${props => props.type === 'cart' && '12px'};
    padding: 4px;
    color: ${({scrollNav}) => (scrollNav ? 'black' : 'white')};
    border-radius: 50px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #01bf71;
    }

    @media only screen and (max-width: 1080px) {
        display: ${props => props.type === 'user' && 'flex'};
    }

    @media screen and (max-width: 600px) {
        display: ${props => props.type === 'user' && 'none'};
    }

    @media screen and (max-width: 320px) {
        display: ${props => props.type === 'favs' && 'none'};
    }
`

// Navbar

const theme = createTheme ({
    palette: {
      success: {
        main: '#01bf71',
      }
    }
})

const Nav = ({ toggle }) => {
    const dispatch = useDispatch()
    const cartQuantity = useSelector(state => state.cart.quantity)
    const favoriteQuantity = useSelector(state => state.favorites.quantity)
    const user = useSelector((state) => state.user?.currentUser)
    const [scrollNav, setScrollNav] = useState(false)
    const [notifyMes, setNotifyMes] = useState('')
    const [notifyType, setNotifyType] = useState('info')
    const [notifyTitle, setNotifyTitle] = useState('')
    const [products, setProducts] = useState([])
    const [matchedProducts, setMatchedProducts] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const changeBgNav = () => {
      if (window.scrollY >= 60) {
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

    useEffect(() => {
        const loadProducts = async () => {
          try {
            const res = await publicRequest.get("/products");
            setProducts(res.data);
          } catch (err) {
            console.dir(err);
          }
        };
        loadProducts();
    }, []);

    let searchRef = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (!searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handler)
        
        return () => { 
            document.removeEventListener('mousedown', handler)
        }
    })

    const handleSearch = (text) => {
        const matches = products.filter((product) => {
            const regex = new RegExp(`${text}`, 'gi');
            return product.title.match(regex) || product.brand.match(regex) || product.type.match(regex)
        })
        setMatchedProducts(matches);
    }

    const handleLogout = (e) => {
        e && e.preventDefault();
        setNotifyMes("Has cerrado sesión de tu cuenta Bronx")
        setNotifyType("success")
        setNotifyTitle("Éxito")
        dispatch(logout())
    };

    return (
        <MainContainer>
            <Notification 
                title={notifyTitle}
                message={notifyMes}
                type={notifyType}
            />
            <Container scrollNav={scrollNav}>
                <MobileIcon onClick={toggle} scrollNav={scrollNav}>
                    <Hamburger
                        direction='right'
                        size={28}
                        onClick={toggle}
                        color={scrollNav ? 'black' : 'white'}
                    />
                </MobileIcon>
                <NavLogo to='/' onClick={toggleHome} scrollNav={scrollNav}>
                    BRONX
                </NavLogo>
                <NavContainer>
                    <SearchContainer ref={searchRef}>
                        <NavSearch scrollNav={scrollNav}>
                            <Search style={{fontSize: 18, marginLeft: 5}} />
                            <Input
                                scrollNav={scrollNav}
                                placeholder='buscar productos...'
                                onChange={(e) => handleSearch(e.target.value)}
                                onClick={() => setIsOpen((isOpen) => !isOpen)}
                            />
                        </NavSearch>
                        {isOpen && matchedProducts.length > 0 && (
                            <ProductContainer>
                                <ProductsWrapper>
                                {matchedProducts && 
                                    matchedProducts.map((item, index) => {
                                        return (
                                            <ProductResults>
                                                <NavProductLink to={`/product/${item._id}`}>
                                                    <ProductWrapper key={index}>
                                                        <ImgWrapper>
                                                            <Img src={item.img} />
                                                        </ImgWrapper>
                                                        <CardWrapper>
                                                            <Card title={(item.title) || (item.brand)} style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'flex-start',
                                                                width: '100%',
                                                                fontSize: '14px',
                                                                textAlign: 'left'
                                                            }} />
                                                            <Strong>{item.brand.toUpperCase()}</Strong>
                                                        </CardWrapper>
                                                    </ProductWrapper>
                                                </NavProductLink>
                                            </ProductResults>
                                        )
                                    })
                                }
                                </ProductsWrapper>
                            </ProductContainer>
                        )}
                    </SearchContainer>
                    <NavMenu>
                        <NavItem>
                            <Link to='categories'
                                scrollNav={scrollNav}
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={-2}
                            >
                                COLECCIONES
                            </Link>        
                        </NavItem>
                        <NavItem>
                            <Link to='products'
                                scrollNav={scrollNav}
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={2}
                            >
                                CATEGORÍAS
                            </Link>           
                        </NavItem>
                        <NavItem>
                            <Link to='announcement'
                                scrollNav={scrollNav}
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={2}
                            >
                                NOVEDADES
                            </Link>          
                        </NavItem>
                    </NavMenu>
                    <UserContainer>
                        {!user ? (
                            <NavSign>
                                <NavSignInLink to='/login' scrollNav={scrollNav} onClick={toggleHome}>
                                    iniciar sesión
                                </NavSignInLink>
                                <NavSignUpLink to='/register' scrollNav={scrollNav} onClick={toggleHome}>
                                    registrarse
                                </NavSignUpLink>
                            </NavSign>
                        ) : (
                            <NavSign onClick={handleLogout}>
                                <NavSignInLink to="/" scrollNav={scrollNav}>
                                    cerrar sesión
                                </NavSignInLink>
                            </NavSign>
                        )}
                    </UserContainer>
                    <NavCart>
                        {!user ? (
                            <NavCartLink to='/login' type='user' scrollNav={scrollNav} onClick={toggleHome}>
                                <Person style={{fontSize:'20px'}} />
                            </NavCartLink>
                        ) : (
                            <NavCartLink to='/' type='user' scrollNav={scrollNav} onClick={handleLogout}>
                                <BiLogOut style={{fontSize:'20px'}} />
                            </NavCartLink>
                        )}
                        <NavCartLink to='/favorites' type='favs' scrollNav={scrollNav} onClick={toggleHome}>
                            <ThemeProvider theme={theme}>
                                <Badge badgeContent={favoriteQuantity} color='success' overlap='rectangular' variant='dot'>
                                    <Favorite style={{fontSize: '20px'}} />
                                </Badge>
                            </ThemeProvider>
                        </NavCartLink>
                        <NavCartLink to='/cart' type='cart' scrollNav={scrollNav}>
                            <ThemeProvider theme={theme}>
                                <Badge badgeContent={cartQuantity} color='success' overlap='rectangular' variant='dot'>
                                    <ShoppingCart style={{fontSize: '20px'}} />
                                </Badge>
                            </ThemeProvider>
                        </NavCartLink>
                    </NavCart>
                </NavContainer>
            </Container>
        </MainContainer>
    )   
}

export default Nav