import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

// Components

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    margin-top: 80px;
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const SidebarWrapper = styled.div`
    color: #000;
`

const SidebarButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background-color: #0D0D0D;
    white-space: nowrap;
    padding: 16px 64px;
    margin: 12px 0;
    color: white;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #01BF71;
        color: black;
    }
`

// Sidebar

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarWrapper>
                <SidebarButton>
                    <SidebarRoute to='/'>Home</SidebarRoute>
                </SidebarButton>
                <SidebarButton>
                    <SidebarRoute to='/login'>ingresar</SidebarRoute>
                </SidebarButton>
                <SidebarButton>
                    <SidebarRoute to='/register'>registrarse</SidebarRoute>
                </SidebarButton>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar