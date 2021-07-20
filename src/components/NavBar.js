import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import CartWidget from './CartWidget'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(

        <NavBar className = 'containerNav' dark expand='md'>
            <NavbarBrand> <i className= 'https://pm1.narvii.com/6187/09f9647a65c174ec43b776894761007927a4dbfb_hq.jpg'></i>Alianza Reverde
            </NavbarBrand>
            <div className='navbar-right'>
                <NavbarToggler onClick = {toggle}/>
                <Collapse>
                    <Nav>
                        <Link to='/' className='nav-item'>Producto</Link>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Categorias</DropdownToggle>
                            <DropdownMenu right>
                                <Link to='/Productos/Categoria/Dulces'>
                                <DropdownItem>Productos dulces</DropdownItem></Link>
                                <Link to='/Productos/Categoria/Congelados'><DropdownItem>Productos ongelados</DropdownItem></Link>
                                <Link to='/Productos/Categoria/Calientes'><DropdownItem>Platos calientes</DropdownItem></Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <CartWidget/>
            </div>
        </NavBar>

    );


}

export default NavBar