import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import NavCart from '../components/NavCart'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Videos from '../components/Clip/videos/vertical/video_02.mp4'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px 0;
    padding: 0 80px;

    @media only screen and (max-width: 950px) {
        padding: 0 20px;
        transition: all 0.5s ease-in-out;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
    }
`

const Info = styled.div`
    flex: 1;
    flex-direction: column;
    margin-right: 20px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
`

const ProductTarget = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 10px 2px lightgrey;
    margin-bottom: 20px;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: scale(0.98);
        box-shadow: 1px 1px 10px 1px grey;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        height: 88vh;
    }
`

const ProductDetail = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 0 20px;
`

const ImgCircle = styled.div`
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 2px 2px 10px 2px lightgrey inset;
    z-index: 1;

    @media only screen and (max-width: 1200px) {
        width: 180px;
        height: 180px;
        transition: all 0.5s ease-in-out;
    }
`

const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    padding: 10px;
    object-fit: contain;
    z-index: 2;
`

const Details = styled.div`
    display: flex;
    max-width: 400px;
    align-items: right;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 600px) {
        align-items: center;
    }
`

const ProductName = styled.span`
    margin-bottom: 10px;
`

const ProductBrand = styled.span`
    margin-bottom: 10px;
`

const ProductId = styled.span`
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
`

const ProductSize = styled.span``

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    @media only screen and (max-width: 600px) {
        flex-direction: row;
        margin-bottom: 15px;
    }
`

const ProductAmount = styled.div`
    margin: 0 10px;
    font-size: 15px;
    font-weight: 600;
`

const ProductPrice = styled.div`
    font-size: 20px;
    font-weight: 200;
`

const SummaryContainer = styled.div`
    height: 100%;

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
` 

const Summary = styled.div`
    flex: 1;
    height: 100%;
    padding: 20px;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    text-align: center;
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
`

const SummaryButton = styled.button`
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background-color: ${props => props.type === 'filled' ? 'black' : 'white'};
    color: ${props => props.type === 'filled' && 'white'};
    font-weight: 600;
    cursor: pointer;
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    font-weight: 700;
    cursor: pointer;
    border: 1.6px solid #0D0D0D;
    background-color: ${props => props.type === 'filled' ? '#0D0D0D' : 'white'};
    color: ${props => props.type === 'filled' && 'white'};
`

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
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
            rgba(0,0,0, 0.1) 100%
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
    height: 100%;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    max-width: 80%;
    font-size: 40px;
    font-weight: 200;
    text-align: center;
    text-shadow: 2px 2px 8px #0d0d0d;
`

const DescriptionContainer = styled.div`

    backdrop-filter: blur(8px) hue-rotate(100deg);
    width: 100%;
    padding: 35px;
    margin: 25px 0;
`

const Description = styled.p`
    color: whitesmoke;
    text-shadow: 1px 1px 4px grey;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;

`

const DiscountButton = styled.button`
    padding: 10px 20px;
    border-radius: 50px;

    &:hover {
        background-color: #0d0d0d;
        color: #fff;

    }
`

// Shopping Cart

const Cart = () => {
    return (
        <Fragment>
            <Navbar />
            <NavCart />
            <Container>
                    <Wrapper>
                        <Info>
                            <ProductTarget>
                                <ImageContainer>
                                    <ImgCircle />
                                    <Image src='images/products/jackets/jacket_16.png' />
                                </ImageContainer>
                                <ProductDetail>
                                    <Details>
                                        <ProductId><b>ID:</b> 93655610 </ProductId>
                                        <ProductName><b>Producto:</b> CAMPERA OUTWEAR </ProductName>
                                        <ProductBrand><b>Marca:</b> RIP-CURL</ProductBrand>
                                        <ProductColor> 
                                            <b>Color:</b><Color color='green'/>
                                        </ProductColor>
                                        <ProductSize><b>Talle:</b> XL </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <PriceAmountContainer>
                                        <Remove />
                                        <ProductAmount>1</ProductAmount>
                                        <Add />
                                    </PriceAmountContainer>
                                    <ProductPrice>$ 32.850 </ProductPrice>
                                </PriceDetail>
                            </ProductTarget>
                            <ProductTarget>
                                <ImageContainer>
                                    <ImgCircle />
                                    <Image src='images/products/accesories/accesory_02.png' />
                                </ImageContainer>
                                <ProductDetail>
                                    <Details>
                                        <ProductId><b>ID:</b> 26637800 </ProductId>
                                        <ProductName><b>Producto:</b> BRAZALETE SUMMER</ProductName>
                                        <ProductBrand><b>Marca:</b> ISADORA</ProductBrand>
                                        <ProductColor> 
                                            <b>Color:</b><Color color='brown'/>
                                        </ProductColor>
                                        <ProductSize><b>Talle:</b> - </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <PriceAmountContainer>
                                        <Remove />
                                        <ProductAmount>1</ProductAmount>
                                        <Add />
                                    </PriceAmountContainer>
                                    <ProductPrice>$ 8.500 </ProductPrice>
                                </PriceDetail>
                            </ProductTarget>
                            <ProductTarget>
                                <ImageContainer>
                                    <ImgCircle /><Image src='images/products/suits/suit_05.png' />
                                </ImageContainer>
                                <ProductDetail>
                                    <Details>
                                        <ProductId><b>ID:</b> 26632022 </ProductId>
                                        <ProductName><b>Producto:</b> TRAJE NAVY</ProductName>
                                        <ProductBrand><b>Marca:</b> GIORGIO ARMANI</ProductBrand>
                                        <ProductColor> 
                                            <b>Color:</b><Color color='darkblue'/>
                                        </ProductColor>
                                        <ProductSize><b>Talle:</b> M </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <PriceAmountContainer>
                                        <Remove />
                                        <ProductAmount>1</ProductAmount>
                                        <Add />
                                    </PriceAmountContainer>
                                    <ProductPrice>$ 60.580 </ProductPrice>
                                </PriceDetail>
                            </ProductTarget>
                        </Info>
                        <SummaryContainer>
                            <Summary>
                                <SummaryTitle>RESUMEN DEL PEDIDO</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice>$ 101.960</SummaryItemPrice>
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
                                    <SummaryItemPrice>$ 101.960</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryButton type='filled'>PAGAR AHORA</SummaryButton>
                                <Button>SEGUIR COMPRANDO</Button>
                            </Summary>
                            <VideoContainer>
                                <BackgroundClip>
                                    <Video autoPlay loop muted src={Videos} type='video/mp4' />
                                </BackgroundClip>
                                <Content>
                                    <Title>35% OFF DISCOUNT</Title>
                                    <DescriptionContainer>
                                        <Description>
                                            Obtén tu cupón del 35% de Descuento para tu Primera Compra en cualquier producto de la página
                                        </Description>
                                    </DescriptionContainer>
                                    <DiscountButton>OBTENER CUPÓN</DiscountButton>
                                </Content>
                            </VideoContainer>
                        </SummaryContainer>
                    </Wrapper>
            </Container>
            <Newsletter />
            <Footer />
        </Fragment>
    )
}

export default Cart