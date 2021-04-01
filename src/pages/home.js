import logo from '../logo.svg';
import '../App.css';
import Block from '../blockchain/src/blockchain/block';
import Blockchain from '../blockchain/src/blockchain/blockchain';
import P2PService from '../blockchain/src/service/p2p';
import BlocksTable from '../containers/BlocksTable';

import React, { Component, useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios';




//import blockchainFront from './blockchain/src/service/index';
//const { blockchainFront as blockchain} = indexApp; 
const blockchain = new Blockchain();
//instancia P2P service inicializada con instancia de blockchain
const p2pService = new P2PService(blockchain);



const options = [
  { value: 'transactions', label: 'Transactions', for: 'item1'},
  { value: 'blocks', label: 'Blocks'},


]

const MyComponent = () => (
  <Select class="list" id="select"  na options={options} />
  
)





function tableRow() {
  let arrayHTML = []
  for (let index = 0; index < blockchain.blocks.length; index++) {
    const value = [<tr><td>{blockchain.blocks[index].hash}</td>
                  <td>{blockchain.blocks[index].hash}</td>
                  <td>{blockchain.blocks[index].previoushash}</td>
                  <td>{blockchain.blocks[index].data}</td>
                  <td>{blockchain.blocks[index].timestamp}</td>
                  <td>{blockchain.blocks[index].difficulty}</td></tr>]
    arrayHTML.push(value); 
    
  }
  return arrayHTML;
  }

  function syncBlockchain(){
    alert('btn');
    p2pService.sync();
    tableRow();
  }


    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      syncBlockchain();
    
  }

function Home() {
  //let block = new Block(12342132, undefined, 'g3n3s1s-h4sh', 'i like ramen.', 0, 3);
  //console.log(blockchain.blocks[0].data);
  const[blocks,setBlocks] = useState([]);
  p2pService.sync();

  useEffect(() => {

    axios.get('http://localhost:3000/blocks').then((result) => {
      console.table(result.data);
      setBlocks(result.data);
      
    })

  }, []);
  return (
    <div className="Home">
      
      <header className="App-header">
      

 

    {MyComponent()}
        <div className="div1" alt="logo">
      
          
        <table>
          
          
          <th>ID</th>
          <th>HASH</th>  
          <th>PREVIOUS HASH</th>
          <th>DATA</th>
          <th>DATE</th>
          <th>DIFF</th>
          {tableRow()}
          <BlocksTable/>

            {blocks?.map(block => 
          <tr>

               <td>1</td>
            <td>{block.hash}</td>
            <td>{block.previousHash}</td>
            <td>{block.data}</td>
            <td>{block.timestamp}</td>
            <td>{block.difficulty}</td>
          </tr>
            
              )} 
            
           
            

        </table>
      
        
        </div>
       </header>


    </div>
    
  );
}



export default Home;
