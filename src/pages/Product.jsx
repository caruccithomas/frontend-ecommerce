import React, { useState, useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { userRequest } from '../requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
import { CloseRounded, AddCircleOutlineOutlined, Favorite } from '@material-ui/icons'
import '../components/Gallery/gallery.css'
import Notification from '../components/Notification'
import { addFavoriteProduct, removeFavoriteProduct } from '../redux/favoriteRedux'
import Carousel from '../components/Carousel'
import { useRef } from 'react'

// Styles

const MainContainer = styled.div`
    background-color: #f8f8f8;
    margin: 0 auto;
    height: 100%;
    width: 100%;
`

const Container = styled.div`
    background-color: #f8f8f8;
    margin: 0 auto;
    height: 100%;
`

const Wrapper = styled.div`
    width: auto;
    height: auto;
    column-gap: 18px;
    -webkit-column-gap: 18px;
    -moz-column-gap: 18px;
    margin: 10px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 950px) {
        margin: 20px;
    }

    @media only screen and (max-width: 800px) {
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 14px;
        -webkit-row-gap: 14px;
        -moz-row-gap: 14px;
    }
`

const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
`

const Gallery = styled.div`
    height: 84vh;
    min-height: 500px;
    width: 100%;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    column-gap: 18px;
    -webkit-column-gap: 18px;
    -moz-column-gap: 18px;
    row-gap: 18px;
    -webkit-row-gap: 18px;
    -moz-row-gap: 18px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1220px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 680px) {
        margin: 10px auto;
    }
`

const ImageContainer = styled.div`
    border-radius: 20px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        filter: opacity(0.8);
    }
`

const Image = styled.img`
    display: flex;
    background-color: #ece8e5;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    width: 100%;
    min-width: 45%;
    height: 84vh;
    min-height: 500px;
    overflow: scroll;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 12px auto;
    margin-right: 8px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 1px 2px 8px 2px lightgrey;

    @media only screen and (max-width: 800px) {
        height: 100%;
        min-height: auto;
        align-items: center;
        justify-content: flex-start;
        margin: 10px auto;
    }
`

const Info = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const TopContainer = styled.div`
    flex: 1;
`

const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

const FavContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    transition: all 0.5s ease-in-out;
    z-index: 4;
`

const FavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.type === 'added' ? 'flex-end' : 'center'};
    width: 55px;
    height: 32px;
    padding-right: ${props => props.type === 'added' ? '8px' : '0'};
    background: ${props => props.type === 'added' ? '#01bf74' : 'whitesmoke'};
    color: #0d0d0d;
    border-radius: 30px;
    box-shadow: 1px 1px 4px 1px darkgrey;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    z-index: 3;
`

const Brand = styled.span`
    font-weight: 800;
    font-size: 18px;
    color: grey;
    width: 100%;
    text-transform: uppercase;

    @media only screen and (max-width: 1300px) {
        font-size: 16px;
    }

    @media screen and (max-width: 870px) {
        font-size: 14px;
    }
`

const Title = styled.h1`
    margin: 25px 0;
    letter-spacing: 1px;
    font-weight: 800;
    font-size: 45px;
    font-family: 'Lato', sans-serif;
    text-shadow: 4px 4px 4px lightgrey;

    @media only screen and (max-width: 1450px) {
        font-size: 35px;
    }

    @media screen and (max-width: 1050px) {
        font-size: 30px;
    }

    @media screen and (max-width: 870px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 320px) {
        text-align: center;
    }
`

const PriceTag = styled.div`
    max-width: 115px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border: 2px solid #01bf74;
    border-radius: 12px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 950px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 320px) {
        margin: 0 auto;
    }
`

const Price = styled.span`
    font-weight: 800;
    font-size: 16px;
    letter-spacing: 1px;
    color: #01bf74;

    @media only screen and (max-width: 950px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Description = styled.p`
    margin-top: 20px;
    min-height: auto;
    overflow-y: scroll;
    text-align: justify;
    font-size: 15px;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 950px) {
        font-size: 14px;
    }

    @media screen and (max-width: 680px) {
        font-size: 13px;
    }

    @media only screen and (max-width: 320px) {
        text-align: justify;
    }
`

const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    @media only screen and (max-width: 320px) {
        flex-direction: column;
    }
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    column-gap: ${(props) => props.className === 'color-choice' && '8px'};
`

const FilterColor = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: 1px solid grey;
    border-radius: 50%;
    // box-shadow: 1px 1px 6px 1px grey inset;
    background-color: ${props => props.color};
    cursor: pointer;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 320px) {
        margin-top: 15px;
    }
`

const Amount = styled.span`
    width: 25px;
    height: 25px;
    margin-left: 7px;
    border-radius: 50%;
    border: 1px solid #0D0D0D;
    text-shadow: 2px 2px 10px grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    @media only screen and (max-width: 320px) {
        margin: 4px;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 12px;

    @media only screen and (max-width: 950px) {
        margin-bottom: 40px;
    }
`

const SizeTitleMobile = styled.h2`
    display: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 1px 0px 6px 1px darkgrey;
    text-shadow: 1px 1px 6px lightgrey;
    background: rgb(226,226,226);
    background: linear-gradient(90deg, rgba(226,226,226,1) 0%, rgba(245,245,245,1) 15%, rgba(255,255,255,1) 50%, rgba(244,244,244,1) 85%, rgba(226,226,226,1) 100%);
    color: #0d0d0d;
    width: 100%;
    padding: 8px;
    font-size: 12px;
    letter-spacing: 1px;
    z-index: 1;

    @media only screen and (max-width: 950px) {
        display: flex;
    }

    @media screen and (max-width: 680px) {
        font-size: 12px;
    }

    @media screen and (max-width: 380px) {
        font-size: 10px;
    }

    @media screen and (max-width: 320px) {
        font-size: 9px;
    }
`

const SizeButton = styled.select`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 40px;
    font-weight: 900;
    color: #000;
    background: transparent;
    border: 1px solid #0d0d0d;
    border-radius: 50px;
    -webkit-appearance: none;
    -moz-appearance: none;

    @media only screen and (max-width: 1450px) {
        // height: 30px;
    }

    @media screen and (max-width: 950px) {
        display: none;
    }
`

const FilterSizeButton = styled.option`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    text-align: center;
`

const SizeButtonMobile = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px;
    box-shadow: 1px 1px 8px 1px darkgrey;
    background: #f8f8f8;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-sizing: border-box;
    gap: 15px;

    @media only screen and (max-width: 950px) {
        display: flex;
    }

    @media screen and (max-width: 320px) {
        padding: 10px;
        gap: 10px;
    }
`

const FilterSizeButtonMobile = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fff;
    color: #000;
    font-size: 15px;
    padding: 6px;
    border: 1px solid grey;
    border-radius: 30px;
    text-decoration: none;
    // box-shadow: 1px 1px 2px 2px darkgrey;
    cursor: pointer;
`

const CartButton = styled.button`
    width: 100%;
    min-height: 40px;
    border-radius: 30px;
    background-color: #0d0d0d;
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 1px 2px 10px 2px grey;

    &: hover{
        background-color: #01bf71;
        color: #000;
    }
`

// SPA Product

const Product = () => {
    const location = useLocation()
    const colorRef = useRef(null)
    const sizeRef = useRef(null)
    const id = location.pathname.split('/')[2]
    const favorites = useSelector((state) => state.favorites)
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const dispatch = useDispatch()
    const [model, setModel] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const [notifyMes, setNotifyMes] = useState('')
    const [notifyType, setNotifyType] = useState('info')
    const [notifyTitle, setNotifyTitle] = useState('')

    useEffect(() => {
        const getProduct = async () => {

            try {
                const res = await userRequest.get('/products/find/' + id);
                setProduct(res.data);
            } catch (err) {
                console.dir(err);
            }
        
        }
        getProduct();
    }, [id])

    const getImg = (item) => {
        setTempImgSrc(item);
        setModel(true);
    }

    const handleColorClassListRef = (ref) => {
        
        if (!colorRef.current) {
            return
        }

        if (!colorRef.current.classList.contains('border-color')) {
            colorRef.current.classList.add('border-color')
        } else if (colorRef.current.classList.contains('border-color')) {
            colorRef.current.classList.remove('border-color')
            colorRef.current = null
        }
        
    }

    const handleSizeClassListRef = (ref) => {
        
        if (!sizeRef.current) {
            return
        }

        if (!sizeRef.current.classList.contains('border-size')) {
            sizeRef.current.classList.add('border-size')
        } else if (sizeRef.current.classList.contains('border-size')) {
            sizeRef.current.classList.remove('border-size')
            sizeRef.current = null
        }

    }

    const handleColorRef = (event) => {
        event.preventDefault()
        event.stopPropagation()
        colorRef.current = event.target
    }

    const handleSizeRef = (event) => {
        event.preventDefault()
        event.stopPropagation()
        sizeRef.current = event.target
    }

    const handleColor = (choice) => {
        setColor(choice)
    }

    const handleSize = (choice) => {
        setSize(choice)
    }

    const handleQuantity = (type) => {
        
        if (type === 'decrease') {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }

    };

    const handleClick = (c) => {

        if (color === '' || size === '') {
            if (!color) {
                setNotifyMes('Selecciona un color específico')
                setNotifyType('error')
                setNotifyTitle('Campo Indefinido')
            }

            if (!size) {
                setNotifyMes('Selecciona un tamaño específico')
                setNotifyType('error')
                setNotifyTitle('Campo Indefinido')
            }
        } else {
            dispatch (
                addProduct({
                    ...product,
                    quantity,
                    color: color,
                    size: size,
                })
            );
            console.log(product)
            setNotifyMes('Ítem añadido al carrito de compras')
            setNotifyType('success')
            setNotifyTitle('¡Completado!')
        }
        
    }

    const handleEvent = (event) => {
        event.preventDefault()
    }

    const handleFavorite = () => {
        setQuantity(quantity)

        if (!isFavorite) {
            dispatch(addFavoriteProduct({
                ...product,
                quantity
            }))
            setIsFavorite((prevState) => !prevState)
            return
        }
        
        if (isFavorite) {
            dispatch(removeFavoriteProduct({
                ...product,
                quantity
            }))
            setIsFavorite((prevState) => !prevState)
            return
        }
    
    }

    return (
        <Fragment>
            <MainContainer>
                <Navbar />
                <Container>
                    <Notification
                        title={notifyTitle}
                        message={notifyMes}
                        type={notifyType}
                        duration={7500}
                    />
                    <Wrapper>
                        <ImgContainer>
                            <Gallery>
                                <>
                                    <div className={model ? 'model open' : 'model'}>
                                        <Image src={tempImgSrc} alt='image' />
                                        <CloseRounded onClick={() => setModel(false)} />
                                    </div>
                                    {product.img !== undefined && product.img.map((item, index) => {
                                        return (
                                            <ImageContainer onClick={() => getImg(item)}>
                                                <Image src={item} key={index} alt='image' style={{width:'100%'}} />
                                            </ImageContainer>
                                        )
                                    })}
                                </>
                            </Gallery>
                        </ImgContainer>
                        <InfoContainer>
                            <Info>
                                <TopContainer>
                                    <TopWrapper>
                                        <Brand>{product.brand}</Brand>
                                        <FavContainer>
                                            {favorites.products.find((element) => element._id === product._id) ? (
                                                <FavWrapper type='added' onClick={(e) => handleEvent(e) + handleFavorite(product._id)}>
                                                    <Favorite style={{fontSize:'20px', color:'#fff'}} />
                                                </FavWrapper>
                                            ) : (
                                                <FavWrapper type='add' onClick={(e) => handleEvent(e) + handleFavorite(product._id)}>
                                                    <AddCircleOutlineOutlined style={{fontSize:'15px'}} />
                                                    <Favorite style={{fontSize:'22px', color:'#01bf71'}} />
                                                </FavWrapper>
                                            )}
                                        </FavContainer>
                                    </TopWrapper>
                                    <Title>{product.title}</Title>
                                    <PriceTag>
                                        <Price>{'U$D ' + product.price}</Price>
                                    </PriceTag>
                                    <Description>{product.description}</Description>
                                </TopContainer>
                                <FilterContainer>
                                    <Filter className='color-choice'>
                                        {product.color !== undefined && product.color.map((c, index) => {
                                            return (
                                                <FilterColor color={'#' + c} key={index} onClick={(event) => {
                                                    handleColor(c)
                                                    handleColorClassListRef(colorRef)
                                                    handleColorRef(event)
                                                    handleColorClassListRef(colorRef)
                                                }} />
                                            )
                                        })}
    
                                    </Filter>
                                    <Filter>
                                        <AmountContainer> 
                                            <Amount onClick={() => handleQuantity('decrease')}>
                                                <IoMdRemove style={{cursor: 'pointer'}} />
                                            </Amount>
                                            <Amount style={{textShadow: '1px 1px 2px grey'}}>{quantity}</Amount>
                                            <Amount onClick={() => handleQuantity('increase')}>
                                                <IoMdAdd style={{cursor: 'pointer'}} />
                                            </Amount>
                                        </AmountContainer>
                                    </Filter>
                                </FilterContainer>
                                <ButtonContainer>
                                    <SizeTitleMobile>
                                        SELECCIONA UN TAMAÑO
                                    </SizeTitleMobile>
                                    <SizeButton defaultValue={size} onClick={(s) => setSize(s.target.value)}>
                                        <FilterSizeButton value='' hidden>
                                            SELECCIONA UN TAMAÑO
                                        </FilterSizeButton>
                                        {product.size !== undefined && product.size.map((s, index) => {
                                            return (
                                                <FilterSizeButton key={index} value={s}>
                                                    {s}
                                                </FilterSizeButton>
                                            )
                                        })}
                                    </SizeButton>
                                    <SizeButtonMobile>
                                        {product.size !== undefined && product.size.map((s, index) => {
                                            return (
                                                <FilterSizeButtonMobile key={index} value={s} onClick={(event) => {
                                                    handleSize(s)
                                                    handleSizeClassListRef(sizeRef)
                                                    handleSizeRef(event)
                                                    handleSizeClassListRef(sizeRef)
                                                }}>
                                                    {s}
                                                </FilterSizeButtonMobile>
                                            )
                                            // return (
                                            //     <FilterColor color={'#' + c} key={index} onClick={(event) => {
                                            //         handleColor(c)
                                            //         handleToggleClassListRef(ref)
                                            //         handleRefEvent(event)
                                            //         handleToggleClassListRef(ref)
                                            //     }} />
                                            // )
                                        })}
                                    </SizeButtonMobile>
                                </ButtonContainer>
                                <CartButton onClick={handleClick}>AÑADIR AL CARRITO</CartButton>
                            </Info>
                        </InfoContainer>
                    </Wrapper>
                </Container>
                <Carousel categories={product.categories} />
            </MainContainer>
            <Footer />
        </Fragment>
    )
}

export default Product