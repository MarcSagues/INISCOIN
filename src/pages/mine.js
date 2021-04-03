


import { render } from 'react-dom';
import style from './styles/mine.css'
import {
    divStyle
  } from './styles/mine';
  import React, { Component, useEffect, useState } from 'react'
  import Select from 'react-select'
  import axios from 'axios';

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
                      <button id="btn_mine" onClick={this.mine24h}>EARN YOUR INIS</button>
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



export default Mine;
