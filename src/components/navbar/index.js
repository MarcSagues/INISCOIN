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


function checkLogIn(){
  var isLogged = true;
  if(isLogged === false){

    return (
      <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink>
    )
  }else{
    return (
      <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
    )
  }
}

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
          
         {checkLogIn()}

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>

            Sign In

            </NavBtnLink>
        </NavBtn>
        
      </Nav>
      
    </>
    
  );
};

export default Navbar;