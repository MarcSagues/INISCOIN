import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='#'>
         <h1 alt='logo'>INIS</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          
          <NavLink to='/mine' activeStyle>
            Mine
          </NavLink>
          <NavLink to='/mine' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/singup' activeStyle>
            Sign Up
          </NavLink>
         

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/singin'>

            Sign In

            </NavBtnLink>
        </NavBtn>
        
      </Nav>
      
    </>
    
  );
};

export default Navbar;