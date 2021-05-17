import logo from './logo.svg';
import './App.css';
import Block from './blockchain/src/blockchain/block';
import Blockchain from './blockchain/src/blockchain/blockchain';
import P2PService from './blockchain/src/service/p2p';
import BlocksTable from './containers/BlocksTable';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import Select from 'react-select'
import MainPage from './components/MainPage';
import Mine from './pages/mine'
import Home from './pages/home'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Profile from './pages/profile'
import Dashboard from './pages/dashboard/Dashboard'
import ConfirmEmail from './pages/confirm_email'
import ResultConfirm from './pages/result_confirm'
import Referrals from './pages/dashboard/leftMenu/Referrals'
import { Helmet } from 'react-helmet'


import './pages/styles/mine.css'



//import blockchainFront from './blockchain/src/service/index';
//const { blockchainFront as blockchain} = indexApp; 
const blockchain = new Blockchain();
//instancia P2P service inicializada con instancia de blockchain
const p2pService = new P2PService(blockchain);



const options = [
  { value: 'transactions', label: 'Transactions', for: 'item1'},
  { value: 'blocks', label: 'Blocks'},


]

//PER FER EL LOGIN
/*class App extends Component(){
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

}
*/



function App() {
  

  p2pService.sync();
  return (
   
    <div className="App">

    

      <header className="App-header">
      <Router>
      <Switch>
        
      <Route
                exact
                path="/"
                render={() => {
                    return (
                      //this.state.isUserAuthenticated ?
                      <Redirect to="/home" /> 
                      
                    )
                }}
              />
  <Route exact path="/mine">
  <Navbar />
    <Mine />
  </Route>
  <Route exact path="/signup">
    <SignUp />
  </Route>
  <Route exact path="/signin">
    <SignIn />
  </Route>
  <Route exact path="/home">
  <Navbar />
    <Home />
  </Route>
  <Route exact path="/profile">
    <Dashboard />
  </Route>
  <Route exact path="/confirm_email">
    <ConfirmEmail />
  </Route>
  <Route exact path="/result_confirm">
    <ResultConfirm/>
  </Route>
  <Route exact path="/referrals">
    <Referrals/>
  </Route>
</Switch>
</Router>

       </header>


    </div>
    
  );
}



export default App;
