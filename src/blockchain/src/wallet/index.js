//generamos dicccionario o facilitador de importación
import Transaction from './transaction.js';
import Wallet from './wallet.js';

const blockchainWallet = new Wallet(undefined, 1000);

export { Transaction, blockchainWallet };
export default Wallet;
