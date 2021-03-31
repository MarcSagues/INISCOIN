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
import SingIn from './pages/singin'
import SingUp from './pages/singup'
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
  let block = new Block(12342132, undefined, 'g3n3s1s-h4sh', 'i like ramen.', 0, 3);
  console.log(blockchain.blocks[0].data);

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
    
    <SingUp />
  </Route>
  <Route exact path="/singin">
    <SingIn />
  </Route>
  <Route exact path="/home">
  <Navbar />
    <Home />
  </Route>

</Switch>
</Router>

       </header>


    </div>
    
  );
}



export default App;
