import React, { Fragment } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/Effects/ScrollToTop';

// Styles

const Container = styled.div`
    padding: 50px 84px;
    background: #000;

    @media only screen and (max-width: 950px) {
        padding: 50px 24px;
    }
`

const Title = styled.h1`
    font-size: 16px;
    font-weight: 900;
    font-family: 'Audiowide', cursive;
    letter-spacing: -1px;
    color: lightgrey;
`

const Text =  styled.p`
    font-size: 13px;
    text-align: justify;
    margin: 30px 0;
    color: white;
    letter-spacing: 1px;
    font-weight: 300;
    line-height: 25px;
`

const UnorderedList = styled.ul`
    margin: 30px 0;
    margin-left: 15px;
`

const ListItem = styled.li`
    font-size: 13px;
    color: white;
    letter-spacing: 1px;
    font-weight: 300;
    line-height: 25px;
`

// Privacy Page

const Privacy = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <Navbar />
            <Container>
                <Title>
                    POLÍTICA DE PRIVACIDAD
                </Title>
                <Text>
                    El sitio web https://bronx-ecommerce.onrender.com/ es propiedad de BRONX boutique, que es un controlador de datos de tus datos personales.
                </Text>
                <Text>
                    Hemos adoptado esta Política de privacidad, que determina cómo procesamos la información recopilada por https://bronx-ecommerce.onrender.com/, que también proporciona las razones por las que debemos recopilar ciertos datos personales sobre ti. Por lo tanto, debes leer esta Política de privacidad antes de usar el sitio web de https://bronx-ecommerce.onrender.com/.
                </Text>
                <Text>
                    Cuidamos tus datos personales y nos comprometemos a garantizar su confidencialidad y seguridad.
                </Text>
                <Title>
                    INFORMACIÓN PERSONAL QUE RECOPILAMOS
                </Title>
                <Text>
                    Cuando visitas https://bronx-ecommerce.onrender.com/, recopilamos automáticamente cierta información sobre tu dispositivo, incluida información sobre tu navegador web, dirección IP, zona horaria y algunas de las cookies instaladas en tu dispositivo. Además, a medida que navegas, recopilamos información sobre las páginas web individuales o los productos que ves, qué sitios web o términos de búsqueda te remitieron a la web y cómo interactúas. Nos referimos a esta información recopilada automáticamente como "Información del dispositivo". Además, podemos recopilar los datos personales que nos proporcionas (incluidos, entre otros, nombre, apellido, dirección, información de pago, etc.) durante el registro para poder cumplir con el acuerdo.
                </Text>
                <Title>
                    ¿POR QUÉ PROCESAMOS TUS DATOS?
                </Title>
                <Text>
                    Nuestra máxima prioridad es la seguridad de los datos del cliente y, como tal, podemos procesar solo los datos mínimos del usuario, solo en la medida en que sea absolutamente necesario para mantener el sitio web. La información recopilada automáticamente se utiliza solo para identificar casos potenciales de abuso y establecer información estadística sobre el uso del sitio web. Esta información estadística no se agrega de tal manera que identifique a ningún usuario en particular del sistema.
                </Text>
                <Text>
                    Puedes visitar la web sin decirnos quién eres ni revelar ninguna información por la cual alguien pueda identificarte como una persona específica. Sin embargo, si deseas utilizar algunas de las funciones del sitio web, o deseas recibir nuestro boletín informativo o proporcionar otros detalles al completar un formulario, puedes proporcionarnos datos personales, como tu correo electrónico, nombre, apellido, ciudad de residencia, organización y número de teléfono. Puedes optar por no proporcionar tus datos personales, pero es posible que no puedas aprovechar algunas de las funciones del sitio web. Por ejemplo, no podrás recibir nuestro boletín ni contactarnos directamente desde el sitio web. Los usuarios que no estén seguros de qué información es obligatoria pueden ponerse en contacto con nosotros a través de caruccithomasignacio@gmail.com.
                </Text>
                <Title>
                    TUS DERECHOS
                </Title>
                <Text>
                    Si eres residente europeo, tienes los siguientes derechos relacionados con tus datos personales:
                </Text>
                <UnorderedList>
                    <ListItem>
                        El derecho a ser informado.
                    </ListItem>
                    <ListItem>
                        El derecho de acceso.
                    </ListItem>
                    <ListItem>
                        El derecho a la rectificación.
                    </ListItem>
                    <ListItem>
                        El derecho a borrar.
                    </ListItem>
                    <ListItem>
                        El derecho a restringir el procesamiento.
                    </ListItem>
                    <ListItem>
                        El derecho a la portabilidad de datos.
                    </ListItem>
                    <ListItem>
                        El derecho a oponerte.
                    </ListItem>
                    <ListItem>
                        Derechos en relación con la toma de decisiones automatizada y la elaboración de perfiles.
                    </ListItem>
                </UnorderedList>
                <Text>
                    Si deseas ejercer este derecho, comunícate con nosotros a través de la información de contacto a continuación.
                </Text>
                <Text>
                    Además, si eres residente europeo, destacamos que estamos procesando tu información para cumplir con los contratos que podríamos tener contigo (por ejemplo, si realizas un pedido a través de la web), o de otra manera para seguir nuestros intereses comerciales legítimos enumerados anteriormente. Además, ten en cuenta que tu información puede transferirse fuera de Europa, incluidos Canadá y Estados Unidos.
                </Text>
                <Title>
                    ENLACES A OTROS SITIOS WEB
                </Title>
                <Text>
                    Nuestra web puede contener enlaces a otros sitios web que no son de nuestra propiedad ni están controlados por nosotros. Ten en cuenta que no somos responsables de dichos sitios web ni de las prácticas de privacidad de terceros. Te recomendamos que estés atento cuando abandones nuestro sitio web y leas las declaraciones de privacidad de cada web que pueda recopilar información personal.
                </Text>
                <Title>
                    SEGURIDAD DE LA INFORMACIÓN
                </Title>
                <Text>
                    Aseguramos la información que proporcionas en servidores informáticos en un entorno controlado y seguro, protegido del acceso, uso o divulgación no autorizados. Mantenemos medidas de seguridad administrativas, técnicas y físicas razonables para proteger contra el acceso no autorizado, el uso, la modificación y la divulgación de datos personales bajo su control y custodia. Sin embargo, no se puede garantizar la transmisión de datos a través de Internet o redes inalámbricas.
                </Text>
                <Title>
                    DIVULGACIÓN LEGAL
                </Title>
                <Text>
                    Divulgaremos cualquier información que recopilemos, usemos o recibamos si así lo requiere o lo permite la ley, como para cumplir con una citación o un proceso legal similar, y cuando creemos de buena fe que la divulgación es necesaria para proteger nuestros derechos, proteger tu seguridad o la seguridad de los demás, investigar el fraude o responder a una solicitud del gobierno.
                </Text>
                <Title>
                    INFORMACIÓN DE CONTACTO
                </Title>
                <Text>
                    Si deseas comunicarte con nosotros para comprender más sobre esta Política o deseas comunicarte con nosotros en relación con cualquier asunto sobre los derechos individuales y tu información personal, puedes enviarnos un correo electrónico a caruccithomasignacio@gmail.com.
                </Text>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Privacy