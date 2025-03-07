import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';
import { useHistory } from 'react-router';

import { db } from '../context/axios';
import {randomNumber} from './signup';
import emailjs from 'emailjs-com';

import{ init } from 'emailjs-com';
import { Paper } from '@material-ui/core';
import { MD5 } from 'crypto-js';

init("user_gyduzqABXjCbxIEE3cTiY");




var isRegistered = true;
var randomNumberResend = 0;
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/home">
        INIS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    left: '3%',
    top: '7%',
    width: '10%',
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#3578e3',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3578e3',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function ConfirmEmail() {
  const classes = useStyles();
  const [{username, email, password, wallet, amount, creation, referralLider, dateNowClick}, dispacth] = useStateValue();
  var [inputNumber, setInputNumber] = useState(0);
  var [user, setUser] = useState([]);
  useEffect(() => {

    db.get('/users').then((result) => {
        
      setUser(result.data);



      
      
    });
  }); 
  
  const history = useHistory();
 
  const resendEmail = (e) => {

        emailjs.send("confirm_email","template_y6kfnr8",{
          to_name: username+'.',
          number: randomNumber,
          to_email: email,
          }).then(function(response) {
            if(response.text === 'OK'){

            }
           console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            alert('Ocurrió un problema al enviar el correo', + err);
           console.log("FAILED. error=", err);
        });
  }

  const CheckCode = (e) => {
    e.preventDefault();
    console.log('inputnumber: '+inputNumber)
    console.log('randomnumber: '+randomNumber)

    if(randomNumber == inputNumber){
      isRegistered = true;

      dispacth({
        type: actionTypes.SET_AMOUNT,
        amount: 0,
        
      });
      dispacth({
        type: actionTypes.SET_CREATION,
        creation: Date.now(),
        
      });
    const userActive = {
      username: username,
      password: MD5(password).toString(),
      email: email,
      wallet: wallet,
      amount: amount,
      creation: creation,
      referralLink: 'iniscoin.com/signup?referral='+username,
      referralLider: referralLider,
      dateNowClick: dateNowClick,


    };
    console.table('useractive: '+userActive.wallet);



    db.post('/addUser', userActive)
      .then(res => {
        console.log('user: created: '+res);
        console.table('user: created: '+res.data[0]);
      });
     
      var count = 0;
      for (let i = 0; i < user.length; i++){
        if (user[i].username === referralLider){
            count = user[i].referralCount + 1;
        }
      } 
      
      //sumem un al contador de referidos del lider
      db.post('/addReferral', {username: referralLider, referralCount: count})
      .then(res => {
        console.log('ok');
      }, (error) => {
        console.log('error '+error);

          
      });

   

    }else {
      isRegistered = false;

      console.log('error');

    }
    history.push('/result_confirm');


}
  return (
    <div style={{ width:'80vmin'}}>
    <Paper style={{height:'80vmin'}} >
    <React.Fragment>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Button href="/home" className={classes.back} variant="outline-primary">X</Button>{' '}
        <h1>Verify your email</h1>
        <Typography component="h1" variant="h5">
          Please enter the 6 digits code sent to your email
        </Typography>
        
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="user"
            label="CODE"
            type="number"
            id="user"
            autoComplete="current-password"
            onChange={(e) => setInputNumber(e.target.value)} 
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => CheckCode(e) }
          >
            CHECK
          </Button>
          <Grid container>
            <Grid item xs>
              <Button onClick={resendEmail} variant="body2">
                Resend Code
              </Button>
            </Grid>
          </Grid>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    
    </Container>
    </React.Fragment>
    </Paper>
  </div>
  );
}

export {isRegistered};