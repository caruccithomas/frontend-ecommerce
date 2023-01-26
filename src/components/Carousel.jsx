import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { publicRequest } from "../requestMethods"
import Slider from 'react-slick'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CarouselItem from "./CarouselItem"

// Styles

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px 80px;
    padding-right: 87px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 950px) {
        padding: 20px;
        padding-bottom: 32px;
        overflow: hidden;
    }
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    box-shadow: 1px 1px 12px 1px lightgrey;
    padding: 12px;
    width: 100%;
    background: #01bf74;
    color: #0d0d0d;
    border: none;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`

const Title = styled.h1`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;

    @media only screen and (max-width: 800px) {
        font-size: 1em;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.8em;
    }
`

const SliderWrapper = styled.div`
    position: relative;
    padding: 10px;
    margin-bottom: 8px;
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 1px 1px 10px 1px #dcdcdc;
`

const ArrowButton = styled.span`
    width: 45px;
    height: 45px;
    border-radius: 50px;
    background-color: #01bf74;
    box-shadow: 1px 2px 4px 2px lightgrey;
    color: #000;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "right" && "100%"};
    right: 100%;
    margin: auto -35px;
    cursor: pointer;
    z-index: 2;
    transition: all 0.5s ease-in-out;

    &:hover {
        box-shadow: 1px 2px 4px 2px grey;
    }

    @media only screen and (max-width: 950px) {
        display: none;
    }
`

// Components

const PreviousArrow = (props) => {
    const { onClick } = props

    return (
        <ArrowButton direction='left' onClick={onClick}>
            <MdOutlineKeyboardArrowLeft />
        </ArrowButton>
    )
}
  
const NextArrow = (props) => {
    const { onClick } = props

    return (
        <ArrowButton direction='right' onClick={onClick}>
            <MdOutlineKeyboardArrowRight />
        </ArrowButton>
    )
}

// Carousel Products

const Carousel = ({ categories }) => {
    const [products, setProducts] = useState([]);

    let category = categories

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        appendDots: dots => (
            <div style={{
                padding: '10px',
                position: 'relative',
                marginTop: '-24px'
            }}>
                <div
                    style={{
                        width: '100%',
                        backgroundColor: "#fff",
                        boxShadow: '1px 2px 8px 2px #c0c0c0',
                        borderRadius: '30px',
                        padding: '6px',
                        marginBottom: '30px',
                        position: 'relative'
                    }}
                >
                    <ul> {dots} </ul>
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
          ]
    }

    // useEffect(() => {
    //     const getProducts = async () => {
      
    //       try {
    //         const res = await publicRequest.get('/products');
    //         console.log(res);
    //         setProducts(res.data);
    //       } catch (err) {
    //         console.dir(err);
    //       }
      
    //     };
    //     getProducts();
    // },[]);

    useEffect(() => {
        const getProducts = async () => {
      
          try {
            const res = await publicRequest.get(
              `/products?categories=${categories}`
            );
            // console.log(res);
            setProducts(res.data);
          } catch (err) {
            console.dir(err);
          }
      
        };
        getProducts();
    },[categories]);

    return (
        <Container>
            <TitleWrapper>
                <Title>{'MÁS PRODUCTOS DE ' + (category && category[0].toUpperCase())}</Title>
            </TitleWrapper>
            <SliderWrapper>
                <Slider {...settings} style={{position:'relative'}}>
                    {products.map((item) => (
                        <CarouselItem item={item} key={item._id} />
                    ))}
                </Slider>
            </SliderWrapper>
        </Container>
    )
}

export default Carousel