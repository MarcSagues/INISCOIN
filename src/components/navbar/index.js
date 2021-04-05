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
import {useStateValue} from '../../context/StateProvider';


function checkLogIn(email){

  
  if(email === null){

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

function checkLogInBtn(email){

  
  if(email === null){

    return (
      <NavBtnLink to='/signin'>

      Sign In

      </NavBtnLink>
    )
  }else{
    return (
      <NavBtnLink to='/signin'>

      I'm logged

      </NavBtnLink>
    )
  }
}

const Navbar = () => {
  const [{email}, dispacth /*fa accions*/] = useStateValue(); //agafem valor del reducer
  console.log('user del reducer: '+email)

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
          
         {checkLogIn(email)}

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {checkLogInBtn(email)}
        </NavBtn>
        
      </Nav>
      
    </>
    
  );
};

export default Navbar;