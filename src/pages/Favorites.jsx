import React, { Fragment, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import NavFav from '../components/NavFav';
import Footer from '../components/Footer';
import Videos from '../videos/vertical/video_12.mp4';
import { AddShoppingCartOutlined, Clear } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteProduct, removeFavorites } from '../redux/favoriteRedux';
import emptyImg from '../images/png/empty_wishlist.png';
import Notification from '../components/Notification';
import Swal from 'sweetalert2';
import '../components/Swal2/styles.css'
import { addProduct } from '../redux/cartRedux';

const MainContainer = styled.div`
    background-color: #f8f8f8;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    padding: 20px 80px;
    padding-bottom: 75px;
    background: #f8f8f8;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 950px) {
        padding: 20px;
        padding-bottom: 42px;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 1280px) {
        flex-direction: column;
    }
`

const Info = styled.div`
    flex: 1;
    flex-direction: column;
    margin-right: 20px;

    @media only screen and (max-width: 1280px) {
        width: 100%;
    }
`

const EmptyTarget = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SVGEmpty = styled.img`
    flex: 1;
    width: 275px;
    height. 275px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 500px) {
        width: 225px;
        height: 225px;
    }

    @media screen and (max-width: 325px) {
        width: 175px;
        height: 175px;
    }
`

const TitleEmpty = styled.h1`
    flex: 1;
    font-family: 'Audiowide', cursive;
    font-size: 28px;
    color: #0d0d0d;
    text-shadow: 1px 1px 5px grey;
    text-align: center;
    margin: 15px 0;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1280px) {
        font-size: 24px;
    }

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`

const TextEmpty = styled.p`
    text-align: center;
    max-width: 35%;
    margin-bottom: 40px;
    transition: all 0.5s ease-in-out;
    font-size: 16px;

    @media only screen and (max-width: 790px) {
        max-width: 70%;
        font-size: 14px;
    }
`

const ProductTarget = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    box-shadow: 2px 2px 10px 2px lightgrey;
    margin-bottom: 20px;
    border-radius: 30px;
    padding: 22px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        box-shadow: 1px 1px 10px 1px grey;
    }

    @media only screen and (max-width: 790px) {
        height: auto;
        flex-direction: column;
        align-items: center;
    }
`

const ProductDetail = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;

    @media only screen and (max-width: 790px) {
        max-width: 225px;
        min-width: 200px;
        margin-left: 0px;
    }
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const ImgCircle = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 2px 2px 10px 2px lightgrey inset;
    z-index: 2;
`

const Image = styled.img`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    object-fit: contain;
    z-index: 1;
`

const Line = styled.hr`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    border: 1px solid lightgrey;
    width: 1px;
    height: 160px;
    margin-left: 30px;

    @media only screen and (max-width: 790px) {
        display: flex;
        width: 25%;
        margin: 30px auto;
        height: 1px;
    }
`

const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 790px) {
        width: 100%;
    }
`

const ProductName = styled.span`
    margin-bottom: 10px;
`

const ProductBrand = styled.span`
    margin-bottom: 10px;
`

const ProductColor = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-left: 5px;
    box-shadow: 1px 1px 4px grey;
`

const ProductSize = styled.div``

const Size = styled.span`
    margin-left: 5px;
`

const PriceDetail = styled.span`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 790px) {
        margin: 25px 0;
    }
`

const AddToCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 12px;
    margin-bottom: 5px;
    cursor: pointer;
    background: #01bf71;
    border-radius: 50px;
    box-shadow: 0px 1px 5px 1px lightgrey;

    @media only screen and (max-width: 790px) {
        flex-direction: row;
        margin-bottom: 15px;
    }
`

const AddToCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductPrice = styled.h2`
    font-size: 20px;
    font-weight: 400;
    margin-top: 5px;
`

const SummaryContainer = styled.div`
    height: 100%;
    width: 350px;

    @media only screen and (max-width: 1280px) {
        width: 100%;
    }
`

const Summary = styled.div`
    flex: 1;
    height: 100%;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 2px 2px 10px 2px lightgrey inset;
    align-items: center;
    text-align: center;
    background-color: #fff;
`

const SummaryTitle = styled.h1`
    font-weight: 400;
    text-align: center;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 500px) {
        font-size: 24px;
    }
`

const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '600'};
    font-size: ${props => props.type === 'total' && '25px'};
`

const SummaryItemText = styled.span`
    text-align: left;
`

const SummaryItemPrice = styled.span`
    min-width: 100px;
    text-align: right;
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    font-weight: 700;
    cursor: pointer;
    border: 1.6px solid #0D0D0D;
    border-radius: 50px;
    background-color: ${props => props.type === 'filled' ? '#0D0D0D' : 'white'};
    color: ${props => props.type === 'filled' && 'white'};
`

const Link = styled(LinkRouter)`
    text-decoration: none;
    color: #000;
`

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 0 30px;
    width: 100%;
    height: 80vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        z-index: 2;
        position: absolute;
        box-shadow: 1px 2px 6px 1px grey;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 30px;
        background: linear-gradient(
            180deg,
            rgba(0,0,0, 0.1) 0%,
            rgba(0,0,0, 0.1) 100%
            ), linear-gradient(
            180deg,
            rgba(0,0,0, 0.1) 0%,
            transparent 100%
        );
    }

    @media only screen and (max-width: 1280px) {
        height: 40vh;
    }
`

const BackgroundClip = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
`

const Video = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`

const Content = styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;

    @media only screen and (max-width: 1280px) {
        row-gap: 10px;
    }

    @media screen and (max-width: 950px) {
        row-gap: 5px;
    }
`

const TitleWeight = styled.span`
    font-weight: 800;
    font-size: 40px;
    font-family: 'Audiowide', cursive;
    display: inline;
    color: whitesmoke;
    text-align: center;
    text-shadow: 1px 2px 6px #000;
    letter-spacing: 2px;

    @media only screen and (max-width: 1280px) {
        width: 100%;
        font-size: 35px;
        letter-spacing: -2px;
    }

    @media screen and (max-width: 950px) {
        font-size: 30px;
    }

    @media only screen and (max-width: 325px) {
        font-size: 25px;
    }
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    max-width: 50%;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    text-shadow: 2px 2px 8px #0d0d0d;
    
    @media only screen and (max-width: 1280px) {
        font-size: 25px;
        max-width: 100%;
        letter-spacing: 2px;
    }

    @media screen and (max-width: 950px) {
        font-size: 20px;
    }

    @media screen and (max-width: 450px) {
        font-size: 18px;
        max-width: 50%;
        letter-spacing: 0;
    }
`

const DiscountButton = styled.button`
    padding: 10px 50px;
    margin-top: 20px;
    border-radius: 50px;
    border: none;
    background: rgba(255, 255, 255, 0.7);
    letter-spacing: 2px;
    transition: all 0.2s ease-in-out;
    text-shadow: 1px 1px 1px grey;
    cursor: pointer;

    &:hover {
        background-color: #0d0d0d;
        color: whitesmoke;
    }

    @media only screen and (max-width: 325px) {
        padding: 8px 35px;
    }
`

const DeleteContainer = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 790px) {
        display: ${props => props.type === 'desktop' ? 'none' : 'flex'};
    }
`

const DeleteButton = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 50px;
    border: none;
    display: none;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: 600;
    background-color: #d92b3a;
    box-shadow: 2px 2px 10px 2px lightgrey;
    color: #fff;
    cursor: pointer;

    @media only screen and (max-width: 790px) {
        display: flex;
    }
`

// Favorite Wishlist

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('info')
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

    const handleClick = () => {
        setMessage('Esta sección sigue en desarrollo')
        setType('info')
        setTitle('Información')
    }

    const handleEvent = (event) => {
        event.preventDefault()
    }

    const handleProduct = (id) => {
        const product = favorites.products.find((element) => element._id === id)
        const quantity = product.quantity
        const color = product.color[0];
        const size = product.size[0];

        dispatch(addProduct({ ...product, quantity, color, size}));
        dispatch(removeFavoriteProduct({...product, quantity}));
        setMessage('Ítem añadido al carrito de compras')
        setType('success')
        setTitle('¡Completado!')
    }

    const handleTotal = () => {
        const product = favorites.products.find((element) => element._id);

        if (product) {
            favorites.products.map((element) => {
                const quantity = element.quantity
                const color = element.color[0]
                const size = element.size[0]

                return (
                    dispatch(addProduct({
                        ...element,
                        quantity,
                        color,
                        size
                    }))
                )
            })
            dispatch(removeFavorites())
            setMessage('Ítems añadidos al carrito de compras')
            setType('success')
            setTitle('¡Completado!')
        } else if (!product) {
            setMessage('No se encontraron ítems para añadir al carrito')
            setType('error')
            setTitle('Error')
        }

    }

    const removeFavorite = (id) => {
        const product = favorites.products.find((element) => element._id === id);
        const quantity = product.quantity;

        const warningAlert = () => {
            Swal.fire({
                title: 'Advertencia',
                html: `¿Seguro quieres eliminar <b>${product.title}</b> de tus favoritos?`,
                icon: 'warning',
                iconColor: '#d92b3a',
                buttonsStyling: false,
                allowOutsideClick: true,
                confirmButtonColor: '#d92b3a',
                confirmButtonText: 'ELIMINAR',
                showCancelButton: true,
                cancelButtonColor: '#38ba7c',
                cancelButtonText: 'CANCELAR',
                padding: '40px 20px',
                customClass: {
                    popup: 'container',
                    confirmButton: 'button-confirm',
                    cancelButton: 'button-cancel',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(removeFavoriteProduct({ ...product, quantity }));
                    Swal.fire({
                        title: '¡Completado!',
                        html: 'El producto ha sido eliminado de tus favoritos.',
                        icon: 'success',
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 3000,
                        customClass: {
                            popup: 'container',
                            timerProgressBar: 'progress-bar',
                        }
                    })
                }
            })
        }

        warningAlert()
    }

    return (
        <Fragment>
            <MainContainer>
                <Navbar />
                <NavFav />
                <Notification title={title} message={message} type={type} />
                <Container>
                        <Wrapper>
                            <Info>
        
                                {favorites.quantity === 0 && (
                                    <EmptyTarget>
                                        <SVGEmpty src={emptyImg} />
                                        <TitleEmpty>LISTA DE FAVORITOS VACÍA</TitleEmpty>
                                        <TextEmpty>Los productos que agregues a favoritos se guardarán aquí.</TextEmpty>
                                    </EmptyTarget>
                                )}
    
                                {favorites.products.map(product => (
                                    <Link to={`/product/${product._id}`} key={product._id}>
                                        <ProductTarget>
                                            <ImageContainer>
                                                <ImgCircle>
                                                    <Image src={product.img} />
                                                </ImgCircle>
                                            </ImageContainer>
                                            <Line />
                                            <ProductDetail>
                                                <Details>
                                                    <ProductName><b>Producto:</b> {product.title} </ProductName>
                                                    <ProductBrand><b>Marca:</b> {product.brand} </ProductBrand>
                                                    <ProductColor>
                                                        <b>Color:</b>
                                                        <Color color={'#' + product.color[0]} />
                                                    </ProductColor>
                                                    <ProductSize>
                                                        <b>Talle:</b>
                                                        <Size>{product.size[0]}</Size>
                                                    </ProductSize>
                                                </Details>
                                            </ProductDetail>
                                            <PriceDetail>
                                                <AddToCartContainer>
                                                    <AddToCart>
                                                        <AddShoppingCartOutlined style={{fontSize: '25px'}} onClick={(e) => handleEvent(e) + handleProduct(product._id)} />
                                                    </AddToCart>
                                                </AddToCartContainer>
                                                <ProductPrice>U$D {product.price * product.quantity} </ProductPrice>
                                            </PriceDetail>
                                            <DeleteContainer type='desktop'>
                                                <Clear style={{cursor: 'pointer'}} onClick={(e) => handleEvent(e) + removeFavorite(product._id)} />
                                            </DeleteContainer>
                                            <DeleteContainer type='mobile'>
                                                <DeleteButton onClick={(e) => handleEvent(e) + removeFavorite(product._id)}>
                                                    ELIMINAR
                                                </DeleteButton>
                                            </DeleteContainer>
                                        </ProductTarget>
                                    </Link>
                                ))}
    
                            </Info>
                            <SummaryContainer>
                                <Summary>
                                    <SummaryTitle>RESUMEN DE TU LISTA</SummaryTitle>
                                    <SummaryItem>
                                        <SummaryItemText>Subtotal</SummaryItemText>
                                        <SummaryItemPrice>$ {favorites.total}</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                        <SummaryItemText>Costos Adicionales</SummaryItemText>
                                        <SummaryItemPrice>$ 0</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                        <SummaryItemText>Descuentos Adicionales</SummaryItemText>
                                        <SummaryItemPrice>- $ 0</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem type='total'>
                                        <SummaryItemText>Total</SummaryItemText>
                                        <SummaryItemPrice>$ {favorites.total}</SummaryItemPrice>
                                    </SummaryItem>
                                    <Button type='filled' onClick={handleTotal}>
                                            AGREGAR AL CARRITO
                                    </Button>
                                </Summary>
                                <VideoContainer>
                                    <BackgroundClip>
                                        <Video autoPlay loop muted src={Videos} type='video/mp4' />
                                    </BackgroundClip>
                                    <Content>
                                        <TitleWeight>DESCUBRE</TitleWeight>
                                        <Title>próximas colecciones</Title>
                                        <DiscountButton onClick={handleClick}>INGRESAR</DiscountButton>
                                    </Content>
                                </VideoContainer>
                            </SummaryContainer>
                        </Wrapper>
                </Container>
            </MainContainer>
            <Footer />
        </Fragment>
    )
}

export default Favorites