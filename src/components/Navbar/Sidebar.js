import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoPricetagsOutline, IoNewspaperOutline, IoShirtOutline } from 'react-icons/io5'
import { RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { Search } from '@material-ui/icons'
import { logout } from '../../redux/userRedux'
import Notification from '../Notification'
import { Card } from 'antd'
import { publicRequest } from '../../requestMethods'

// Components

const SidebarContainer = styled.aside`
    position: fixed;
    padding: 12px;
    width: 280px;
    background: white;
    box-shadow: 0px 0px 6px 0px grey;
    display: grid;
    align-items: center;
    font-weight: 800;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    overflow-y: scroll;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    transition: all 0.3s ease-in-out;
    z-index: 20;

    @media only screen and (max-width: 500px) {
        width: 100%;
        margin-top: 85px;
        border-top-right-radius: 0;
        border-bottom-left-radius: 25px;
        left: 0;
        top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
        z-index: 9;
    }
`

const SidebarWrapper = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    text-align: left;
`

const SearchContainer = styled.div`
    display: none;
    align-items: center;
    jusitfy-content: center;
    flex-direction: column;
    margin: 5px auto;
    width: 100%;

    @media only screen and (max-width: 600px) {
        display: flex;
    }
`

const NavSearch = styled.div`
    width: 100%;
    padding: 7px;
    display: flex;
    align-items: center,
    justify-content: center;
    box-shadow: 1px 1px 10px 1px lightgrey inset;
    border-radius: 25px;
    border: 1px solid lightgrey;
    color: #000;
    box-sizing: border-box;
`

const Input = styled.input`
    border: none;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    background: transparent;
    color: #0d0d0d;
    padding-left: 15px;
    font-size: 1em;
`

const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    z-index: 2;
`

const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin: auto 3px;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 0px 6px 0px grey;
    row-gap: 10px;
`

const ProductResults = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    box-sizing: border-box;
    border-radius: 15px;
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

const SidebarButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 45px;
    font-weight: 800;
    border-radius: 50px;
    margin: 5px auto;
    background: ${(props) => (props.type === 'register' && '#01bf71')};
    color: ${(props) => (props.type === 'register' && '#0d0d0d')};
    box-shadow: ${(props) => (props.type === 'register' && '0px 0px 6px 0px grey')};
    cursor: pointer;

    &:hover {
        background: ${(props) => (props.type === 'register' ? 'white' : 'lightgrey')};
        box-shadow: ${(props) => (props.type === 'register' && '1px 1px 10px 1px grey inset')};
    }
`

const TextLink = styled.h1`
    font-size: 14px;
    margin-left: 17px;
    font-weight: 800;
`

const SidebarRoute = styled(LinkRouter)`
    width: 100%;
    white-space: nowrap;
    color: #000;
    outline: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`

// Sidebar

const Sidebar = ({ isOpen, toggle }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user?.currentUser);
    const [notifyMes, setNotifyMes] = useState('');
    const [notifyType, setNotifyType] = useState('info');
    const [notifyTitle, setNotifyTitle] = useState('');
    const [products, setProducts] = useState([])
    const [matchedProducts, setMatchedProducts] = useState([])
    const [open, setOpen] = useState(false)

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
                setOpen(false);
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
        e.preventDefault();
        setNotifyMes('Has cerrado sesión de tu cuenta Bronx');
        setNotifyType('success');
        setNotifyTitle('Éxito');
        dispatch(logout());
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Notification
                title={notifyTitle}
                message={notifyMes}
                type={notifyType}
            />
            <SidebarWrapper>
                <SearchContainer ref={searchRef}>
                    <NavSearch>
                        <Search style={{fontSize: '18px', marginLeft: '16px', color: 'grey'}} />
                        <Input
                            placeholder='buscar productos...'
                            onChange={(e) => handleSearch(e.target.value)}
                            onClick={() => setOpen((open) => !open)}
                        />
                    </NavSearch>
                    {open && matchedProducts.length > 0 && (
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
                <SidebarRoute to='/' onClick={toggle}>
                    <SidebarButton type='items'>
                        <IoShirtOutline style={{marginLeft:'20px', fontSize:'22px', color:'grey'}} />
                            <TextLink>
                                Colecciones
                            </TextLink>
                    </SidebarButton>
                </SidebarRoute>
                <SidebarRoute to='/' onClick={toggle}>
                    <SidebarButton type='items'>
                        <IoPricetagsOutline style={{marginLeft:'20px', fontSize:'22px', color:'grey'}} />
                        <TextLink>
                            Productos
                        </TextLink>
                    </SidebarButton>
                </SidebarRoute>
                <SidebarRoute to='/' onClick={toggle}>
                    <SidebarButton type='items'>
                        <IoNewspaperOutline style={{marginLeft:'20px', fontSize:'22px', color:'grey'}} />
                        <TextLink>
                            Novedades
                        </TextLink>
                    </SidebarButton>
                </SidebarRoute>
                <SidebarRoute to='/cart/favorites'>
                    <SidebarButton type='favs'>
                        <MdFavoriteBorder style={{marginLeft:'20px', fontSize:'22px', color:'grey'}} />
                        <TextLink>
                            Favoritos
                        </TextLink>
                    </SidebarButton>
                </SidebarRoute>
                <SidebarRoute to='/cart'>
                    <SidebarButton type='cart'>
                        <BsCart3 style={{marginLeft:'20px', fontSize:'22px', color:'grey'}} />
                        <TextLink>
                            Carrito de Compras
                        </TextLink>
                    </SidebarButton>
                </SidebarRoute>

                {!user ? (
                    <>
                        <SidebarRoute to='/login'>
                            <SidebarButton>
                                <RiLoginBoxLine style={{marginLeft:'20px', fontSize:'22px', color:'grey'}} />
                                <TextLink>
                                    Iniciar Sesión
                                </TextLink>
                            </SidebarButton>
                        </SidebarRoute>
                        <SidebarRoute to='/register'>
                            <SidebarButton type='register'>
                                <FiUsers style={{marginLeft:'20px', fontSize:'22px'}} />
                                <TextLink>
                                    Crear Cuenta
                                </TextLink>
                            </SidebarButton>
                        </SidebarRoute>
                    </>
                ) : (
                    <SidebarRoute to='/logout'>
                        <SidebarButton type='register' onClick={handleLogout}>
                            <RiLogoutBoxLine style={{marginLeft:'20px', fontSize:'22px'}} />
                            <TextLink>
                                Cerrar Sesión
                            </TextLink>
                        </SidebarButton>
                    </SidebarRoute>
                )}

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar