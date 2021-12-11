import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
               <Bars />

               <NavMenu>
                    <NavLink to='/create' activeStyle>
                        Create
                    </NavLink> 
                    <NavLink to='/read' activeStyle>
                        Read
                    </NavLink> 
                </NavMenu> 
            </Nav>    
        </div>
    )
}

export default Navbar;