import logo from './logo.svg';
import './App.css';
import Block from './blockchain/src/blockchain/block';
import Blockchain from './blockchain/src/blockchain/blockchain';
import P2PService from './blockchain/src/service/p2p';

//import blockchainFront from './blockchain/src/service/index';
//const { blockchainFront as blockchain} = indexApp; 
const blockchain = new Blockchain();
//instancia P2P service inicializada con instancia de blockchain
const p2pService = new P2PService(blockchain);


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

function App() {
  let block = new Block(12342132, undefined, 'g3n3s1s-h4sh', 'i like ramen.', 0, 3);
  console.log(blockchain.blocks[0].data);
  p2pService.sync();
  return (
    <div className="App">
      <header className="App-header">
        <div  className="div1" alt="logo">
        <table>
          <caption>WhitePaper</caption>
          <th>ID</th>
          <th>HASH</th>  
          <th>PREVIOUS HASH</th>
          <th>DATA</th>
          <th>DATE</th>
          <th>DIFF</th>
          {tableRow()}
          <tr>
            <td>1</td>
            <td>{block.hash}</td>
            <td>{block.previousHash}</td>
            <td>{block.data}</td>
            <td>{block.timestamp}</td>
            <td>{block.difficulty}</td>

          </tr>
        </table>
      
        <button onClick={handleClick}>HOLA</button>
        </div>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
