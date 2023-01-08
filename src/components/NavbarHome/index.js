import React, { Fragment, useState } from 'react'
import Nav from './Navbar'
import Sidebar from './Sidebar'

const Navbar = ({id}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <Fragment>
            <Nav toggle={toggle} />
            <Sidebar isOpen={isOpen} />
        </Fragment>
    )
}

export default Navbar