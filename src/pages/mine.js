import { render } from 'react-dom';
import style from './styles/mine.css'
import {
    divStyle
  } from './styles/mine';
import React, { Component, useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';
import jQuery from 'jquery'

const AMOUNT = 15;

class Mine extends Component{

   

    constructor(props) {
        super(props);
        this.mine24h = this
            .mine24h
            .bind(this);
        this.isLogged = true;
        
    }
    
     mine24h = () =>{

        
            startTimer();
            axios.post('http://localhost:3000/transaction',{
                amount: AMOUNT.toString(),
                recipient: '043f2067b91a58b3f406771467c67d15e7f15bb5fee0fced52356dc8ad58228ffc44ed383ee931621f9e31b96c36b091d666a24bfb84682033cfa78bbd831dc4e2'
          }).then((result) => {
            console.log(result);
        }, (error) => {
          console.log(error);
            });
        
          
    }

    
     checkLogIn() {
         
        if (this.isLogged === true  ){
            return (

                <div className="mine">
                  
                  <header className="App-header">

                    <div className="mineDiv" >
                      <br></br>
                      <br></br>
                      <header id="header1">EARN YOUR INIS</header>
                      <br></br>
                      <br></br>
                      <header id="header2">Every 24 hours you can claim your rewards.</header>
                        <br></br>
                      <header id="header3">The standard mining rate is 1 INIS/day</header>
                      <button id="btn_mine" onClick={this.mine24h}>MINE</button>
                    </div>
      
                   </header>
                    
                </div>
              );
        }else {
            return (

                <div className="mine">
                  
                  <header className="App-header">
                 
                      
                    <div className="mineDiv" >
                      <button id="btn_mine" onClick={this.mine24h} disabled>DISABLEEEED</button>
                    </div>
                  
                    
                    
                   </header>
                    
                </div>
              );
        }
    }
  render(){
  return this.checkLogIn();
  }
}
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


export default Mine;
