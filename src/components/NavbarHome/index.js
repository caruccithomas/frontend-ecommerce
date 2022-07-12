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
            <Nav toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </Fragment>
    )
}

export default Navbar