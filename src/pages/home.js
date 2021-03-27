
import '../App.css';
import Block from '../blockchain/src/blockchain/block';
import Blockchain from '../blockchain/src/blockchain/blockchain';
import P2PService from '../blockchain/src/service/p2p';
import BlocksTable from '../containers/BlocksTable';
import Navbar from '../components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Select from 'react-select'
import MainPage from '../components/MainPage';



function Home() {
  
  return (
    <div className="home">
      
      <header className="App-header">
      <Router>
      <Navbar />
      <MainPage />
    </Router>
    
        <div className="div1" alt="logo">
      
          
        <table>
          
          
          <th>ID</th>
          <th>HASH</th>  
          <th>PREVIOUS HASH</th>
          <th>DATA</th>
          <th>DATE</th>
          <th>DIFF</th>
         
          <BlocksTable/>
          
        </table>
      
        
        </div>
       </header>
        
    </div>
  );
}



export default Home;
