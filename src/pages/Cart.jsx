import React, { useEffect, useState } from 'react';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import NavCart from '../components/NavCart';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Videos from '../videos/vertical/video_02.mp4';
import { userRequest } from '../requestMethods';
import { Add, Clear, Remove } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../redux/cartRedux';
import emptyImg from '../images/png/empty_cart.png';
import stripePayments from '../images/png/stripe_payments.png';
import StripeCheckout from 'react-stripe-checkout';
import Notification from '../components/Notification';
import Swal from 'sweetalert2';
import '../components/Swal2/styles.css'

const MainContainer = styled.div`
    background-color: #f8f8f8;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    padding: 20px 80px;
    background: #f8f8f8;

    @media only screen and (max-width: 950px) {
        padding: 20px;
        transition: all 0.5s ease-in-out;
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
    width: 350px;
    height. 350px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 500px) {
        width: 300px;
        height: 300px;
    }

    @media screen and (max-width: 325px) {
        width: 250px;
        height: 250px;
    }
`

const TitleEmpty = styled.h1`
    flex: 1;
    font-family: 'Audiowide', cursive;
    font-size: 28px;
    color: #0d0d0d;
    text-shadow: 1px 1px 5px grey;
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

const PriceAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 4px 8px;
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

const ProductAmount = styled.div`
    margin: 0 10px;
    font-size: 15px;
    font-weight: 600;
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

const MethodsWrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 28px;
    box-shadow: 2px 2px 8px 2px lightgrey inset;
    padding: 20px;

    @media only screen and (max-width: 1280px) {
        padding: 40px;
    }

    @media screen and (max-width: 790px) {
        padding: 20px;
    }

    @media screen and (max-width: 325px) {
        padding: 15px;
    }
`

const Methods = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 270px;

    @media only screen and (max-width: 1280px) {
        width: 95%;
    }
`

const Summary = styled.div`
    flex: 1;
    height: 100%;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 2px 2px 10px 2px lightgrey inset;
    align-items: center;
    justify-content: center;
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
    margin-bottom: ${props => props.type === 'filled' ? '0px' : '20px'};
    font-weight: 700;
    cursor: pointer;
    border: 1.6px solid #0D0D0D;
    color: #000;
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
    margin-bottom: -20px;
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
        height: 60vh;
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
`

const TitleWeight = styled.span`
    font-weight: 800;
    font-size: 45px;
    font-family: 'Audiowide', cursive;
    display: inline;
    color: whitesmoke;
    text-align: center;
    text-shadow: 1px 2px 6px #000;

    @media only screen and (max-width: 325px) {
        width: 50%;
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
    
    @media only screen and (max-width: 325px) {
        font-size: 25px;
    }
`

const DiscountButton = styled.button`
    padding: 10px 5vw;
    margin-top: 20px;
    border-radius: 50px;
    border: none;
    letter-spacing: 2px;
    transition: all 0.2s ease-in-out;
    text-shadow: 1px 1px 1px grey;
    color: #000;
    cursor: pointer;

    &:hover {
        background-color: #0d0d0d;
        color: whitesmoke;
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

// Shopping Cart

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user)
    const [stripeToken, setStripeToken] = useState(null)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('info')
    const [title, setTitle] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const KEY = process.env.REACT_APP_STRIPE

    const onToken = (token) => {
        setStripeToken(token)
    }

    const handleClick = () => {
        setMessage('Esta sección sigue en desarrollo')
        setType('info')
        setTitle('Información')
    }

    const handleEvent = (event) => {
        event.preventDefault()
    }

    const handleCheckout = () => {
        setMessage('Debes iniciar sesión para acceder aquí')
        setType('warning')
        setTitle('Advertencia')
        const timeout = setTimeout(() => {
            navigate('/login')
            window.clearTimeout(timeout)
        }, 3000)
    }
  
    const handleQuantity = (type, id) => {
        const quantity = 1;
        const product = cart.products.find((element) => element._id === id)
        
        if (type === "asc") {
          dispatch(addProduct({ ...product, quantity }))
        }
        if (type === "desc") {
          dispatch(removeProduct({ ...product, quantity }))
        }
    }
    
    const removeFromCart = (id) => {
        const product = cart.products.find((element) => element._id === id)
        const quantity = product.quantity

        // if (window.confirm('¿Seguro desea eliminar este producto?')) {
        //     dispatch(removeProduct({ ...product, quantity }));
        // }

        const warningAlert = () => {
            Swal.fire({
                title: 'Advertencia',
                html: `¿Seguro quieres eliminar <b>${product.title}</b> de tu inventario?`,
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
                    container: 'container',
                    htmlContainer: 'container',
                    popup: 'container',
                    confirmButton: 'button-confirm',
                    cancelButton: 'button-cancel',
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(removeProduct({ ...product, quantity }));
                    Swal.fire({
                        title: '¡Completado!',
                        html: 'El producto ha sido eliminado de tu inventario.',
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

        warningAlert();
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                navigate('/success', {
                    state: {
                        stripeData: res.data,
                        cart,
                    },
                });
            } catch (err) {
                console.log(err)
            }
        };
        
        stripeToken && makeRequest()
    }, [stripeToken, cart, navigate])

    return (
        <MainContainer>
            <Navbar />
            <NavCart />
            <Notification title={title} message={message} type={type} />
            <Container>
                    <Wrapper>
                        <Info>

                            {cart.quantity === 0 && (
                                <EmptyTarget>
                                    <SVGEmpty src={emptyImg} />
                                    <TitleEmpty>INVENTARIO VACÍO</TitleEmpty>
                                    <TextEmpty>Navega por nuestras selecciones de productos elegidos especialmente para vos.</TextEmpty>
                                </EmptyTarget>
                            )}

                            {cart.products.map(product => (
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
                                                    <Color color={'#' + product.color} />
                                                </ProductColor>
                                                <ProductSize>
                                                    <b>Talle:</b>
                                                    <Size>{product.size}</Size>
                                                </ProductSize>
                                            </Details>
                                        </ProductDetail>
                                        <PriceDetail>
                                            <PriceAmountContainer>
                                                <Remove
                                                    onClick={(e) => handleEvent(e) + handleQuantity("desc", product._id)}
                                                />
                                                <ProductAmount> {product.quantity} </ProductAmount>
                                                <Add
                                                    onClick={(e) => handleEvent(e) + handleQuantity("asc", product._id)}
                                                />
                                            </PriceAmountContainer>
                                            <ProductPrice>U$D {product.price * product.quantity} </ProductPrice>
                                        </PriceDetail>
                                        <DeleteContainer type='desktop'>
                                            <Clear style={{cursor: 'pointer'}} onClick={(e) => handleEvent(e) + removeFromCart(product._id)} />
                                        </DeleteContainer>
                                        <DeleteContainer type='mobile'>
                                            <DeleteButton onClick={(e) => handleEvent(e) + removeFromCart(product._id)}>
                                                ELIMINAR
                                            </DeleteButton>
                                        </DeleteContainer>
                                    </ProductTarget>
                                </Link>
                            ))}

                        </Info>
                        <SummaryContainer>
                            <Summary>
                                <SummaryTitle>RESUMEN DEL PEDIDO</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Costos de Envío</SummaryItemText>
                                    <SummaryItemPrice>$ 1.500</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>Descuentos Adicionales</SummaryItemText>
                                    <SummaryItemPrice>- $ 1.500</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type='total'>
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                                </SummaryItem>
                                    
                                {user.currentUser ? (
                                        <StripeCheckout
                                            name="Bronx Boutique"
                                            image="https://i.ibb.co/P9xnxbg/BRONX.png"
                                            billingAddress
                                            shippingAddress
                                            description={`Su total es de U$D ${cart.total}`}
                                            amount={cart.total * 100}
                                            token={onToken}
                                            stripeKey={KEY}
                                        >
                                            <Button type='filled'>
                                                PAGAR AHORA
                                            </Button>
                                        </StripeCheckout>
                                ) : (
                                    <Button type='filled' onClick={handleCheckout}>
                                        PAGAR AHORA
                                    </Button>
                                )}
                            <Link to='/'>
                                <Button>
                                        SEGUIR COMPRANDO
                                </Button>
                            </Link>
                                <MethodsWrapper>
                                    <Methods src={stripePayments} />
                                </MethodsWrapper>
                            </Summary>
                            <VideoContainer>
                                <BackgroundClip>
                                    <Video autoPlay loop muted src={Videos} type='video/mp4' />
                                </BackgroundClip>
                                <Content>
                                    <TitleWeight>35% OFF</TitleWeight>
                                    <Title>descuentos semanales</Title>
                                    <DiscountButton onClick={handleClick}>OBTENER</DiscountButton>
                                </Content>
                            </VideoContainer>
                        </SummaryContainer>
                    </Wrapper>
            </Container>
            <Newsletter />
            <Footer />
        </MainContainer>
    )
}

export default Cart