const SHA256 = require('crypto-js/sha256')

const Blockchain = []

class Block {
  constructor(previousBlockHash, blockTx, blockNumber) {
    this.previousBlockHash = previousBlockHash;
    this.blockTx = blockTx;
    this.blockNumber = blockNumber;
    this.blockData = blockTx + previousBlockHash + String(blockNumber);
    this.blockHash = String(SHA256(this.blockData));
    Blockchain.push(this);
  }
}

new Block("Genesis Block", "Satoshi sends 50 BTC to Kevin" , 0)

// console.log(Blockchain)

while (true) {
  let data = prompt("Please add data to the block")
  new Block(Blockchain[Blockchain.length-1].blockHash, data, Blockchain.length)
  console.log(Blockchain)
}