import React, { useEffect } from 'react';
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
import Logo from './img/userIcon2.jpeg';
import './navbar.css'
import jQuery from 'jquery'


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

function checkLogInBtn(email, amount){

  
  if(email === null){

    return (
      <NavBtnLink to='/signin'>

      Sign In

      </NavBtnLink>
    )
  }else{
    return (
      <h1> <a id="inis_amount">{amount} INIS</a></h1>

    )
  }
}

const Navbar = () => {
  const [{email, amount}, dispacth /*fa accions*/] = useStateValue(); //agafem valor del reducer
  console.log('user del reducer: '+email)

  useEffect (() => {
    jQuery('#inis_amount').each( function () {
      // get value of table cell and convert to number...
      var val = parseFloat(amount);
      // put it back as fixed point value
      jQuery(this).text(val.toFixed(2)+' INIS');
  });
  })
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
          
         {checkLogIn(email,amount)}

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {checkLogInBtn(email,amount)}
        </NavBtn>
        
      </Nav>
      
    </>
    
  );
};

export default Navbar;