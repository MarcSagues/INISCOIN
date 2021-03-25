//Aquí comença la app (servei http)
//Per executar: yarn start o yarn nodemon
//Si volem veure la llista de blocs, obrir nova terminal i:
//curl http://localhost:3000/blocks

import express from 'express';


import Blockchain from '../blockchain/blockchain.js';
import P2PService, {MESSAGE} from './p2p.js';
import Wallet from '../wallet/wallet.js';
import Miner from '../miner/miner.js'

//HTTP_PORT => Variable d'entorn
//Posem port al HTTP (3000 per defecte)
const { HTTP_PORT = 3000} = process.env;

//creem app d'express

const app = express();
const blockchain = new Blockchain();
//instancia P2P service inicializada con instancia de blockchain
const p2pService = new P2PService(blockchain);
//instancia de wallet que le pasamos la instancia de blockchain para que pueda acceder a la memoryPool
const wallet = new Wallet(blockchain);
const walletMiner = new Wallet(blockchain, 0);
const miner = new Miner(blockchain,p2pService, walletMiner);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 



//End point, si la entrada http es blocks rebem el blocks de la chain
app.get('/blocks',(req,res) => {
    res.json(blockchain.blocks);
    
});

//Servicio para minar
//Mediante un formulario nos envian el dato que queremos guardar en el bloque
app.post('/mine', (req,res) => {
    //descomponem body i desde body recuperem un parametre que es diu data
    const  { body: { data } } = req;

    const block = blockchain.addBlock(data);
    //si minamos un bloque, enviamos mensaje a todos los nodos con los bloques que tenemos, con el nuevo bloque minado
    p2pService.sync();
    //retornem resposta(num de blocs, bloc)
    res.json({
        blocks: blockchain.blocks.length,
    })
})
//devuelve todas las transacciones de la blockchain
app.get('/transactions', (req,res) => {
    const { memoryPool: { transactions } } = blockchain;
    res.json(transactions);
})

//añadir transacciones memoryPool
app.post('/transaction', (req,res) => {

    const { body: { recipient, amount } } = req;
    const amount2 = parseInt(amount);

    //wallet que genera la transaccion
    
    
    try {
        const tx = wallet.createTransaction(recipient,amount2);
        p2pService.broadcast(MESSAGE.TX, tx);
        res.json(tx);
    } catch (error) {
    res.json({ error: error.message });
    }
});


app.get('/mine/transactions', (req,res) => {

    try {
        miner.mine();
        res.redirect('/blocks');
    } catch (error) {
        res.json({ error: error.message});
    }

});

app.post('/wallet', (req,res) => {
    const { publicKey } = new Wallet(blockchain);
    res.json({ publicKey });
})
app.listen(HTTP_PORT, () => {
    console.log(`Service HTTP: ${HTTP_PORT}listening...`);
    //una vez tenemos el servicio levantado, escuchamos 
    p2pService.listen();
});

