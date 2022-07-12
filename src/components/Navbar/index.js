import React, { Fragment, useState } from 'react'
import Nav from './Navbar'
import Sidebar from './Sidebar'

const Navbar = ({id}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Nav toggle={toggle} />
        </Fragment>
    )
}

export default Navbar