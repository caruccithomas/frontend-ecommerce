import React, { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'
import { reset } from '../redux/userRedux'
import Notification from '../components/Notification'
import { BsPerson, BsKey } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import Videos from '../videos/horizontal/video_10.mp4'
import { useGoogleLogin } from '@react-oauth/google'
import axios from "axios"
import { publicRequest } from '../requestMethods'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BackgroundClip = styled.div`
    display: flex;
    position: absolute;
    background-color: black;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

const Video = styled.video`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const NavLogo = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    column-gap: 12px;
    font-weight: 900;
    text-shadow: 1px 1px 4px #0d0d0d;
    width: 25%;
    color: white;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    z-index: 10;

    &:hover {
        color: #01bf71;
    }

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
`

const Text = styled.h1`
    font-size: 35px;
    font-family: 'Audiowide', cursive;
    letter-spacing: -3px;

    @media only screen and (max-width: 1200px) {
        font-size: 35px;
    }

    @media only screen and (max-width: 380px) {
        font-size: 30px;
    }
`

const LogoText = styled.h2`
    font-weight: 200;
    font-size: 30px;
    letter-spacing: -1px;

    @media only screen and (max-width: 1200px) {
        font-size: 25px;
    }

    @media only screen and (max-width: 380px) {
        font-size: 20px;
    }
`

const Wrapper = styled.div`
    width: 25%;
    min-width: 300px;
    padding: 40px 30px;
    background-color: white;
    box-shadow: 0px 0px 3px 1px lightgrey;
    border-radius: 30px;
    opacity: 0.8;

    @media only screen and (max-width: 380px) {
        transition: all 0.5s ease-in-out;
        margin: 0 20px;
        min-width: 250px;
    }
`

const Title = styled.h1`
    width: 100%;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    height: 100%;
`

const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 25px;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    display: flex;
    font-weight: 600;
    border: none;
    border-radius: 25px;
    padding: 8px;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 25%;
    border: none;
    padding: 15px;
    background-color: #01bf71;
    border-radius: 50px;
    color: #000;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #0d0d0d;
        color: #fff;
    }
`

const Line = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 94%;
    height: 1px;
    margin: 26px 0;
    background: grey;
    position: relative;
    z-index: 1;
`

const LineText = styled.h2`
    position: aboslute;
    padding: 8px;
    color: black;
    background: #fff;
    font-size: 8px;
    letter-spacing: 1.5px;
    z-index: 2;
`

const ButtonText = styled.h1`
    flex: 1;
    font-size: 15px;

    @media only screen and (max-width: 380px) {
        font-size: 13px;
        margin-left: -15px;
    }
`

const ButtonGoogle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 25%;
    border: none;
    padding: 15px;
    background-color: lightgrey;
    border-radius: 50px;
    color: #000;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #0d0d0d;
        color: #fff;
    }

    @media only screen and (max-width: 380px) {
        display: none;
    }
`

const ButtonGoogleMobile = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 25%;
    border: none;
    padding: 15px;
    background-color: lightgrey;
    border-radius: 50px;
    color: #000;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #0d0d0d;
        color: #fff;
    }

    @media only screen and (max-width: 380px) {
        display: flex;
    }
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    width: 100%;
    height: 100%;
    margin: 22px;

    @media only screen and (max-width: 380px) {
        transition: all 0.5s ease-in-out;
        flex-direction: column;
    }
`

const LinkText = styled.h2`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    flex-direction: ${props => props.type === 'mobile' && 'column'};

    @media only screen and (max-width: 1200px) {
        font-size: 13px;
    }
`


const Link = styled(LinkRouter)`
    font-size: ${props => props.direction === 'left' ? '13px' : '14px'};
    font-weight: ${props => props.direction === 'right' && '800'};
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.5px;
    color: #000;

    @media only screen and (max-width: 1200px) {
        font-size: 13px;
    }

    @media only screen and (max-width: 380px) {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 16px;
        font-size: ${props => props.direction === 'right' && '12px'};
    }
`

// Login

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const [notifyMes, setNotifyMes] = useState('');
    const [notifyType, setNotifyType] = useState('info');
    const [notifyTitle, setNotifyTitle] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (username.trim() !== '' && password.trim() !== '') {
            try{
                login(dispatch, {username, password});            
            }
            catch(err){
                console.dir(err);
            }
        } else {
            setNotifyMes('El nombre de usuario y/o contraseña está vacío. Ingrese los datos especificados');
            setNotifyType('error');
            setNotifyTitle('Campo Indefinido');
        }
    }

    useEffect(()=>{
        dispatch(reset());
        document.getElementById('username').focus();

        if (error) {
            setNotifyMes('El nombre de usuario y/o contraseña es incorrecto. Vuelve a ingresar sus datos correctamente');
            setNotifyType('error');
            setNotifyTitle('Error de Validación');   
        }
    }, [dispatch, error])

    const signWithGoogle = useGoogleLogin({
        onSuccess: async (res) => {
        
        try {
            const tokenRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${res.access_token}`
                }
            })

            // Create account in Database

            if (tokenRes.data?.email_verified === true) {
                let user = {
                    username: tokenRes.data.name,
                    email: tokenRes.data.email,
                    password: tokenRes.data.sub,
                }
                const checkUserExists = await publicRequest.get("/authentication/check-username/" + user.username);

                if (checkUserExists.data === 'Usuario creado exitosamente') {
                    const registerRes = await publicRequest.post("/authentication/register", user)
                    console.log(registerRes.data)
                    user = null
                    user = {...registerRes.data, password: tokenRes.data.sub}
                    console.log(user)
                    user && login(dispatch, user)
                }

                if (checkUserExists.data === 'El usuario ingresado ya existe') {
                    const loginRes = await publicRequest.post("/authentication/login", user)
                    user = null
                    user = loginRes.data
                    user && login(dispatch, user)
                }
            } else {
                setNotifyMes('El email ingresado no pudo autorizarse. Inténtelo nuevamente');
                setNotifyType('warning');
                setNotifyTitle('Advertencia');   
            }
        } catch (err) {
            console.dir(err)
        }}
    })

    const handleClick = () => {
        setNotifyMes('Esta sección sigue en desarrollo');
        setNotifyType('info');
        setNotifyTitle('Información');
    }

    return (
        <Container>
            <BackgroundClip>
                <Video autoPlay loop muted src={Videos} type='video/mp4' />
            </BackgroundClip>
            <Notification 
                title={notifyTitle}
                message={notifyMes}
                type={notifyType}
            />    
            <NavLogo to='/'> 
                <Text>BRONX</Text>
                <LogoText>boutique</LogoText>
            </NavLogo>
            <Wrapper>
                <Title>Iniciar Sesión</Title>
                <Form>
                    <InputsWrapper>
                        <InputContainer>
                            <BsPerson style={{fontSize:'20px', marginRight:'5px'}} />
                            <Input
                                placeholder="nombre de usuario" id='username' required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <BsKey style={{fontSize:'20px', marginRight:'5px'}} />
                            <Input
                                placeholder="contraseña" required
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputContainer>
                    </InputsWrapper>
                    <LinkContainer>
                        <LinkText>
                            <Link direction='left' to='' onClick={handleClick}>Olvidé mi Contraseña</Link>
                        </LinkText>
                        <LinkText type='mobile'>
                            ¿No tienes cuenta?
                            <Link direction='right' to='/register'> Crea una ahora</Link>
                        </LinkText>
                    </LinkContainer>
                    <Button onClick={handleLogin} disabled={isFetching}>INGRESAR</Button>
                    <Line>
                        <LineText>O PODRÍAS</LineText>
                    </Line>
                    <ButtonGoogle onClick={signWithGoogle}>
                        <FcGoogle style={{fontSize:18}} />
                        <ButtonText>
                            Continuar con Google
                        </ButtonText>
                    </ButtonGoogle>
                    <ButtonGoogleMobile onClick={signWithGoogle}>
                        <FcGoogle style={{fontSize:18}} />
                        <ButtonText>
                            CONECTAR
                        </ButtonText>
                    </ButtonGoogleMobile>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login