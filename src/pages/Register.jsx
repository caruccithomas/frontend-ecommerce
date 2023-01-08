import { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../redux/apiCalls'
import { reset } from '../redux/userRedux'
import Footer from '../components/Footer'
import Notification from '../components/Notification'
import SVGImage from '../images/svg/svg_01.svg'
import { useGoogleLogin } from '@react-oauth/google'
import { FcGoogle } from 'react-icons/fc'
import axios from "axios"
import { publicRequest } from '../requestMethods'
import { BsKey } from 'react-icons/bs'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient( rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3) ), url('https://i.ibb.co/CMLT9dQ/background-02.jpg') center;
    background-size: cover;
    padding: 40px 80px;
    column-gap: 20px;

    @media only screen and (max-width: 1280px) {
        transition: all 0.5s ease-in-out;
        padding: 40px;
        flex-direction: column;
        row-gap: 20px;
    }

    @media screen and (max-width: 380px) {
        padding: 20px;
    }
`

const LeftWrapper = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    max-width: 600px;
    padding: 40px 30px;
    background-color: white;
    box-shadow: 1px 1px 8px 1px lightgrey;
    border-radius: 30px;
    opacity: 0.8;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1280px) {
        
    }
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.h1`
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 30px;
    text-align: center;

    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }

    @media screen and (max-width: 380px) {
        font-size: 20px;
    }
`

const Text = styled.h2`
    text-align: center;
    width: 100%;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 20px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 380px) {
        font-size: 12px;
    }
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    width: 100%;
    margin: 5px;
    border: 1px solid grey;
    border-radius: 25px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    width: 100%;
    height: 100%;
    padding: 12px;
    font-weight: 600;
    color: grey;
    border-radius: 25px;
    border: none;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Agreement = styled.span`
    display: inline flex;
    font-size: 13px;
    font-weight: 400;
    margin: 20px 0;
    text-align: center;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 380px) {
        font-size: 12px;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 320px) {
        flex-direction: column;
    }
`

const Info = styled.h3`
    display: flex;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 380px) {
        font-size: 12px;
    }
`

const Link = styled(LinkRouter)`
    display: flex;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    text-shadow: 1px 1px 4px lightgrey;
    color: #000;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 380px) {
        font-size: 13px;
        letter-spacing: 0.5px;
    }
`

const Button = styled.button`
    width: 100%;
    min-width: 25%;
    border: none;
    padding: 13px 0;
    margin-top: 20px;
    background-color: #01bf71;
    border-radius: 50px;
    color: #0d0d0d;
    font-weight: 800;
    font-size: 15px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &: hover{
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

const ButtonText = styled.h1`
    flex: 1;
    font-size: 15px;

    @media only screen and (max-width: 380px) {
        font-size: 13px;
        margin-left: -4px;
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

const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1080px) {
        height: 90%;
    }
`

const Image = styled.img`
    width: 100%;
    height: 90%;
    max-width: 600px;
    padding: 40px;
    object-fit: contain;
    transition: all 0.5s ease-in-out;
    z-index: 2;

    @media only screen and (max-width: 900px) {
        width: 80%;
    }
`

// Register

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {isFetching, error} = useSelector((state) => state.user)
    const [notifyMes, setNotifyMes] = useState('')
    const [notifyType, setNotifyType] = useState('info')
    const [notifyTitle, setNotifyTitle] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();

        const usernameReg = new RegExp(/^(?!.*(!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|`|~|'|"|;|:|,|<|\.|>|\/|\?))[a-zA-Z0-9\-_]{6,20}$/)
        const emailReg = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i)
        const passwordReg = new RegExp(/^(?!.*(!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|`|~|'|"|;|:|,|<|\.|>|\/|\?))(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)

        if (!usernameReg.test(username) || !emailReg.test(email) || !passwordReg.test(password) || password !== confirmPassword) {

            if (!usernameReg.test(username)) {
                setNotifyMes('El nombre de usuario debe tener entre 6 y 20 caracteres, incluyendo letras, números y guiones como "-" & "_"')
                setNotifyType('error')
                setNotifyTitle('Error de Validación')
                return;
            };
            if (!emailReg.test(email)) {
                setNotifyMes('Ingrese una dirección de correo válida, por ejemplo: "abc@gmail.com"')
                setNotifyType('error')
                setNotifyTitle('Error de Validación')
                return;
            };
            if (!passwordReg.test(password)) {
                setNotifyMes('La contraseña debe tener entre 8 y 20 caracteres. Debe contener al menos una letra mayúscula, una letra minúscula. Además, puede contener guiones como "-" y "_"')
                setNotifyType('error')
                setNotifyTitle('Error de Validación')
                return;
            };
            if (password !== confirmPassword) {
                setNotifyMes('La contraseña ingresada debe ser igual a tu contraseña')
                setNotifyType('error')
                setNotifyTitle('Error de Validación')
                return;
            };

        } else if (!error) {

            register(dispatch, {username, email, password})
            setNotifyMes('Tu cuenta en Bronx ha sido registrada ¡Felicidades y disfruta de esta Demo!')
            setNotifyType('success')
            setNotifyTitle('¡Completado!')

            const timeout = setTimeout(()=>{
                navigate('/login')
                window.clearTimeout(timeout)
            }, 4000)
        }
    }

    const suggest = (inputType) => {
        switch (inputType) {
            case 'username':
                setNotifyMes('Entre 6 y 20 caracteres, incluyendo letras, números y guiones como "-" & "_"')
                setNotifyType('warning')
                setNotifyTitle('Sugerencia')                
                break;
            case 'email':
                setNotifyMes('Ejemplo de email válido: "abc@gmail.com"')
                setNotifyType('warning')
                setNotifyTitle('Sugerencia')
                break;
            case 'password':
                setNotifyMes('Entre 8 y 20 caracteres. Debe contener al menos una letra mayúscula, una letra minúscula. Además, puede contener guiones como "-" y "_"')
                setNotifyType('warning')
                setNotifyTitle('Sugerencia')
                break;
            case 'conPassword':
                setNotifyMes('Debe ser igual a tu contraseña')
                setNotifyType('warning')
                setNotifyTitle('Sugerencia')
                break;
            default:
                break;
        }
    }

    useEffect(()=>{
        dispatch(reset())
        document.getElementById('username').focus()
        if (error) {
            setNotifyMes('El nombre de usuario ingresado ya existe. Vuelve a intentarlo ingresando uno nuevo')
            setNotifyType('error')
            setNotifyTitle('Error')
        }
    }, [dispatch, error])

    const handleClick = () => {
        setNotifyMes('Esta sección sigue en desarrollo');
        setNotifyType('info');
        setNotifyTitle('Información');
    }

    const signWithGoogle = useGoogleLogin({
        onSuccess: async (res) => {
            try {
                const tokenRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${res.access_token}`
                    }
                })

                // Create account in Database

                if (tokenRes.data.email_verified === true) {
                    let user = {
                        username: tokenRes.data.name,
                        email: tokenRes.data.email,
                        password: tokenRes.data.sub,
                    }
                
                    if (!user) {
                        const registerRes = await publicRequest.post("/authentication/register", user)
                        user && register(dispatch, {...registerRes, user})
                    }

                    if (user) {
                        await publicRequest.post('/authentication/login', user)
                        user && login(dispatch, user)
                    }
                }
            } catch (err) {
                console.dir(err)
            }
        }
    })
    
    return (
        <Fragment>
            <Notification 
                title={notifyTitle}
                message={notifyMes}
                type={notifyType}
                duration={8000}
            />
            <Container>
                <LeftWrapper>
                    <Wrapper>
                        <Form>
                            <Title>Crear una Cuenta</Title>
                            <Text>Registrate y recibe las mejores marcas en tu casa desde cualquier parte del País</Text>
                            <InputContainer>
                            <BsKey style={{fontSize:'20px', marginRight:'5px'}} />
                                <Input placeholder="nombre de usuario" type='text' id='username' required value={username}
                                    onChange={
                                        (e) => setUsername(e.target.value)
                                    }
                                    onClick={()=>{suggest('username')}}                        
                                />
                            </InputContainer>
                            <InputContainer>
                            <BsKey style={{fontSize:'20px', marginRight:'5px'}} />
                                <Input placeholder="correo electrónico" type="email" required value={email}
                                    onChange={
                                        (e) => setEmail(e.target.value)
                                    }  
                                    onClick={()=>{suggest('email')}}                      
                                />
                            </InputContainer>
                            <InputContainer>
                                <BsKey style={{fontSize:'20px', marginRight:'5px'}} />
                                <Input placeholder="contraseña" type="password" required value={password}
                                    onChange={
                                        (e) => setPassword(e.target.value)
                                    }
                                    onClick={()=>{suggest('password')}}                        
                                />
                            </InputContainer>
                            <InputContainer>
                            <BsKey style={{fontSize:'20px', marginRight:'5px'}} />
                                <Input placeholder="confirmar contraseña" type="password" required value={confirmPassword}
                                    onChange={
                                        (e) => setConfirmPassword(e.target.value)
                                    }
                                    onClick={()=>{suggest('conPassword')}}                        
                                />
                            </InputContainer>
                            <TextWrapper>
                                <Agreement>
                                    Al crear una cuenta, doy mi consentimiento para el 
                                    procesamiento de mis datos personales de acuerdo 
                                    con la <b onClick={handleClick} style={{cursor:'pointer', letterSpacing:'0.5px'}}>Política de Privacidad</b>
                                </Agreement>
                                <InfoWrapper>
                                    <Info>
                                        ¿Ya tienes una cuenta?
                                    </Info>
                                    <Link to='/login'>
                                        Inicia sesión
                                    </Link>
                                </InfoWrapper>
                            </TextWrapper>
                            <Button onClick={handleRegister} disabled={isFetching}>REGISTRARSE</Button>
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
                                    CONECTARSE
                                </ButtonText>
                            </ButtonGoogleMobile>
                        </Form>
                    </Wrapper>
                </LeftWrapper>
                <RightWrapper>
                    <Image src={SVGImage} />
                </RightWrapper>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Register