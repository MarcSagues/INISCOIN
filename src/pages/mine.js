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

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './dashboard/Title';
import clsx from 'clsx';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



const AMOUNT = 1;
const REFERRER_MULTIPLYER = 0.20;
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





  export default function Mine() {

    const [{wallet,username,email, amount,dateNowClick, referralCount, referralLider}, dispacth] = useStateValue();

    var totalAmount = 0;
  const oneday = 60 * 60 * 24 * 1000; 
useEffect (() => {
  jQuery('#amountInis').each( function () {
    // get value of table cell and convert to number...
    var val = parseFloat(amount);
    // put it back as fixed point value
    jQuery(this).text(val.toFixed(2)+' INIS');
});
})
  


  const useStyles = makeStyles((theme) => ({
    
    inisAmount: {
      position: 'relative',
      top: '11vmin',
      fontSize: '1.8em',
    },
    time: {
      position: 'relative',
      top: '14vmin',
      fontSize: '0.8em',
    },
    title: {
      position: 'relative',
      top: '3vmin',
      fontWeight: 'bold',
      fontSize: '1.6em',
      color: '#3578e3',
    },
    paper: {
      width: '90vmin',
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: '70vmin',
    },

  }));
const classes = useStyles();
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

var t;


      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

      function startTime(date) {
          
        if(( parseInt(dateNowClick) + oneday) > Date.now()){
          jQuery('#btn_mine').html( 'MINE');
          jQuery('#btn_mine').css("background-color", "#3578e3");
          jQuery('#btn_mine').css("border-color", "white"); 
   
        } else {
          var dateNow = new Date(date)
          var s = dateNow.getSeconds();
          var m = dateNow.getMinutes();
          var h = dateNow.getUTCHours();
          // add a zero in front of numbers<10
          m = checkTime(m);
          s = checkTime(s);
          jQuery('#btn_mine').html( h + ":" + m + ":" + s);
          jQuery('#btn_mine').css("background-color", "grey");
          jQuery('#btn_mine').css("border-color", "grey");    
          t = setTimeout(function() {
            startTime( parseInt(dateNowClick) - Date.now() )
          }, 500);
        }

       
      }
      
    

    function Mine24() {

       
  startTime(parseInt(dateNowClick) - Date.now() )
  alert((referralCount));
      
      var date = Date.now();
      console.log('hora: '+ ( (parseInt(dateNowClick)) ))
      console.log('datenowclick: '+ date)


      //if(( parseInt(dateNowClick) + oneday) <= Date.now()){
      var amountBlockchain = 0;
      
      var dateClick =  Date.now();
      if (referralLider !== undefined){
    totalAmount =  amount + AMOUNT + (REFERRER_MULTIPLYER*(referralCount)+1);
    amountBlockchain =  AMOUNT + (REFERRER_MULTIPLYER*(referralCount)+1);

      } else{
      alert('datenowclick: '+ (REFERRER_MULTIPLYER*parseInt(referralCount)).toFixed(2));

  totalAmount =  amount + AMOUNT + (REFERRER_MULTIPLYER*parseInt(referralCount));
  amountBlockchain =   AMOUNT + (REFERRER_MULTIPLYER*parseInt(referralCount));

      }

      

      axios.post('http://localhost:3001/transaction',{
          amount: amountBlockchain,
          recipient: wallet,
    }).then((result) => {
      console.log(result);
      dispacth({
        type: actionTypes.SET_AMOUNT,
        amount: totalAmount,
        
      });
      dispacth({
        type: actionTypes.SET_DATENOWCLICK,
        dateNowClick: dateClick.toString(),
        
      });
      
      
  }, (error) => {
    console.log(error);
      });
  
      const userActive = {
        
        amount: totalAmount,
        wallet: wallet,
        dateNowClick: dateClick.toString(),
      };

      console.table('useractive: '+userActive.amount);
      
      db.post('/addAmount', userActive)
      .then(res => {
        console.log('amount: updated: '+res);
        console.table('amount: updated: '+res.data[0]);
      }, (error) => {
        console.log(error);
          
      });
      
    //} 
    
    
}

    if (wallet !== null  ){
      return (
        <div>
        <Paper className={fixedHeightPaper}>
        <React.Fragment>
        
          <Typography className={classes.title}>INIS AMOUNT</Typography>
          <Typography className={classes.inisAmount} component="p" variant="h4" id='amountInis' >
            {amount} INIS
          </Typography>
          <Typography className={classes.time} >
            on 06 April, 2021
          </Typography>
          
            <button id="btn_mine" onClick={Mine24}>MINE</button>
          
        </React.Fragment>
      </Paper>
      </div>
      );
  }else {
      return (

          <div>
          <Paper className={fixedHeightPaper}>
          <React.Fragment>
          
            <Typography className={classes.title}>LOG IN TO GET YOUR INIS</Typography>
            <Typography className={classes.inisAmount} component="p" variant="h4">
              0 INIS
            </Typography>
            <Typography className={classes.time} >
              on 06 April, 2021
            </Typography>
            
              <button id="btn_mine" disabled>DISABLED</button>
            
          </React.Fragment>
        </Paper>
        </div>
        );
    }
    
  
  }   
    
