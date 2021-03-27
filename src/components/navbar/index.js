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
          <NavLink to='#' activeStyle>
            About
          </NavLink>
          <Link to="/mine">
          <NavLink to='#' activeStyle>
            Mine
          </NavLink>
          </Link>
          <NavLink to='#' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='#' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='#'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;