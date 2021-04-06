import { render } from 'react-dom';
import style from './styles/mine.css'
import {
    divStyle
  } from './styles/mine';
import React, { Component, useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';
import jQuery from 'jquery'
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';
import { db } from '../context/axios';

const AMOUNT = 1;

var WALLET;




    



      
/*
setInterval(function time(){
    var d = new Date();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    jQuery('#the-final-countdown p').html(hours+':'+min+':'+sec)
  }, 1000);
*/

  function startTimer(){
    var counter = 59;
    var hours = 23;
    var min = 59;
    setInterval(function() {
      counter--;
      
      if (counter >= 0) {
          /*zfill(counter,2);
          zfill(hours,2);
        zfill(min,2);*/
        jQuery('#btn_mine').html(hours+':'+min+':'+counter);  
        jQuery('#btn_mine').css("background-color", "grey");
        jQuery('#btn_mine').css("border-color", "grey");     


      }
      if (counter === 0) {
        counter = 59;
          min--;
      }
      if (min === 0) {
        min = 59;
        hours--;
    }
    if (hours === 0) {
        
        clearInterval(counter);
    }
    }, 1000);
  }


  function zfill(number, width) {
    
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
  }
  export default function Mine() {
    const [{wallet,username,email, amount}, dispacth] = useStateValue();
    var totalAmount = 0;
    
    
    function Mine24() {
       totalAmount =  parseInt(amount) + AMOUNT;

        
      startTimer();

      axios.post('http://localhost:3000/transaction',{
          amount: AMOUNT,
          recipient: wallet,
    }).then((result) => {
      console.log(result);
      dispacth({
        type: actionTypes.SET_AMOUNT,
        amount: totalAmount,
        
      });
      
      
  }, (error) => {
    console.log(error);
      });
  
      const userActive = {
        
        amount: totalAmount,
        wallet: wallet,
  
      };

      console.table('useractive: '+userActive.amount);
      
      db.post('/addAmount', userActive)
      .then(res => {
        console.log('amount: updated: '+res);
        console.table('amount: updated: '+res.data[0]);
      }, (error) => {
        console.log(error);
          
      });
      
          
      
    
}


    if (wallet !== null  ){
      return (

          <div className="mine">
            
            <header className="App-header">

              <div className="mineDiv" >
              
                <header id="header1">EARN YOUR INIS</header>


                <header id="header2">Every 24 hours you can claim your rewards.</header>

                <header id="header3">The standard mining rate is 1 INIS/day</header>
                <button id="btn_mine" onClick={Mine24}>MINE</button>
              </div>

             </header>
              
          </div>
        );
  }else {
      return (

          <div className="mine">
            
            <header className="App-header">
           
                
              <div className="mineDiv" >
                <button id="btn_mine"  disabled>DISABLEEEED</button>
              </div>
            
              
              
             </header>
              
          </div>
        );
  }
    
  
    }   