import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { removeCart } from '../redux/cartRedux'
import { userRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cancel, CheckCircle } from "@material-ui/icons";

// Components

const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 94vh;
  padding: 60px 0;
  background: rgb(240,240,240);
  background: linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(245,245,245,1) 25%, rgba(255,255,255,1) 50%, rgba(244,244,244,1) 75%, rgba(237,237,237,1) 100%);
`

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.span`
  color: ${props => props.type === 'check' ? '#47d864' : '#ff623d'};
  margin: 20px 0;
`

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 800;
  text-align: center;
  text-shadow: 1px 1px 3px grey;
  letter-spacing: 1px;
  font-size: 30px;
  color: #0d0d0d;

  @media only screen and (max-width: 500px) {
    font-size: 25px;
  }

  @media screen and (max-width: 350px) {
    font-size: 20px;
    max-width: 50%;
  }
`

const Text = styled.p`
  text-align: center;
  max-width: 50%;
  margin-top: 20px;
  font-size: 17px;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
    max-width: 60%;
  }

  @media screen and (max-width: 350px) {
    font-size: 15px;
    max-width: 70%;
  }
`

const Link = styled(LinkRouter)`
  text-decoration: none;
  margin-top: 60px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 5vw;
  font-size: 16px;
  font-weight: 800;
  background: #0d0d0d;
  color: #fff;
  letter-spacing: 1.5px;
  border-radius: 30px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #0d0d0d;
    border: 2px solid #0d0d0d;
    font-weight: 800;
  }

  @media only screen and (max-width: 500px) {
    padding: 15px 30px;
  }
`

// Success Page

const Success = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state?.stripeData;
  const cart = location.state?.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  // const navigate = useNavigate()

  useEffect(() => {
    const createOrder = async () => {

      try {

        const res = await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });

        setOrderId(res.data._id)
        dispatch(removeCart())
        window.history.replaceState({}, '')

      } catch (err) {
        console.log(err);
      }

    }

    data && cart && createOrder();
  }, [cart, data, currentUser, dispatch])

  return (
    <>
      <Navbar />
      <Container>
        {orderId && (
          <Wrapper>
            <Icon type='check'>
              <CheckCircle style={{
                width: '100px',
                height: '100px',
              }} />
            </Icon>
            <Title>Tu orden ha sido recibida</Title>
            <Text>El código de tu pedido es: <strong>{orderId}</strong>.</Text>
            <Text>Proximamente podrás recibir  un correo con los detalles de tu compra.</Text>
          </Wrapper>
        )}
        {!cart && (
          <Wrapper>
            <Icon type='cancel'>
              <Cancel style={{
                width: '100px',
                height: '100px',
              }} />
            </Icon>
            <Title>La orden fue cancelada</Title>
            <Text>¡Algo salió mal!</Text>
            <Text>Vuelve a realizar el pedido nuevamente.</Text>
          </Wrapper>
        )}
        <Wrapper>
          <Link to='/'>
            <Button>SEGUIR COMPPRANDO</Button>
          </Link>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Success;