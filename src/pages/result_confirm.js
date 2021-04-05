import React, { useState } from 'react';
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


export default function ResultConfirm() {
  const classes = useStyles();

  const history = useHistory();
  const [username, setUsername] = useState('');


  function CorrectCode() {
    var codeOk = false
  
    //El codi es correcte
  
    if (codeOk === true){
      return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Button href="/home" className={classes.back} variant="outline-primary">X</Button>{' '}
          <h1>Verified!</h1>
          <Typography component="h1" variant="h5">
            Congratulations! You have succesfully verified the account.
          </Typography>
          
          <form className={classes.form} noValidate>
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => GoDashboard(e) }
            >
              Go to Dashboard
            </Button>         
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      
      </Container>
    );
    }
    //El codi es incorrecte
  
    if (codeOk === false){
      return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Button href="/home" className={classes.back} variant="outline-primary">X</Button>{' '}
          <h1>Error!</h1>
          <Typography component="h1" variant="h5">
            We are sorry! The code you introduced is not correct. Please try again.
          </Typography>
          
          <form className={classes.form} noValidate>
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => TryAgain(e) }
            >
              Try Again
            </Button>         
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      
      </Container>
    );
    }
  }
  const TryAgain = (e) => {

    history.push('/confirm_email');

  }; 

  const GoDashboard = (e) => {

    history.push('/home');

  }; 
  return ( CorrectCode() )


}