import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { IoIosArrowForward } from 'react-icons/io'
import { RiLoginBoxLine } from 'react-icons/ri'
import { FaRegUserCircle } from 'react-icons/fa'

// Components

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 20;
    margin-top: 80px;
    width: 350px;
    height: 87vh;
    background: rgb(240,240,240) linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(245,245,245,1) 15%, rgba(255,255,255,1) 50%, rgba(244,244,244,1) 85%, rgba(237,237,237,1) 100%);
    box-shadow: 1px 1px 10px 1px grey;
    display: grid;
    align-items: center;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    @media only screen and (max-width: 500px) {
        width: 100%;
    }
`

const SidebarWrapper = styled.div`
    height: 100%;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const SidebarMenu = styled.ul`
    display: grid;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50px);
    text-align: left;
`

const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    text-decoration: none;
    list-styled: none;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #01BF71;
        font-weight: 900;
        transition: 0.5s ease-in-out;
    }
`

const SidebarTitle = styled.h1`
    font-size: 16px;
`

const SidebarButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #01bf71;
        color: #000;
    }
`

const SidebarRoute = styled(LinkRouter)`
    width: 100%;
    white-space: nowrap;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`

// Sidebar

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='categories' onClick={toggle}>
                        <SidebarTitle>COLECCIONES</SidebarTitle>
                        <IoIosArrowForward />
                    </SidebarLink>
                    <SidebarLink to='products' onClick={toggle}>
                        <SidebarTitle>PRODUCTOS</SidebarTitle>
                        <IoIosArrowForward />
                    </SidebarLink>
                    <SidebarLink to='announcement' onClick={toggle}>
                        <SidebarTitle>NOVEDADES</SidebarTitle>
                        <IoIosArrowForward />
                    </SidebarLink>
                </SidebarMenu>
                <SidebarButton>
                    <RiLoginBoxLine style={{marginRight:"10px", fontSize:"20px"}} />
                    <SidebarRoute to='/login'>Ingresar</SidebarRoute>
                </SidebarButton>
                <SidebarButton>
                    <FaRegUserCircle style={{marginRight:"10px", fontSize:"20px"}} />
                    <SidebarRoute to='/register'>Registrarse</SidebarRoute>
                </SidebarButton>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar