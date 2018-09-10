const Web3 = require('web3');
const net = require('net');

const ipcRoute = '~/Library/Application Support/io.parity.ethereum/jsonrpc.ipc';
const address = '0xCeFcE89b5cD253E855383496e619772DD0aAFa66';

web3 = new Web3(new Web3.providers.IpcProvider(ipcRoute, net));
let subscription = web3.eth.subscribe('newBlockHeaders');

subscription.on('data', header => {
  let block = web3.eth.getBlock(header.hash, true).then(block => {
    block.transactions.forEach(tx => {
      if (
        tx.to == address ||
        tx.from == address
      ) {
        console.log(tx);
        console.log('Amount in wei: ', tx.value);
      }
    });
  });
});
