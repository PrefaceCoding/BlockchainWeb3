const SHA256 = require('crypto-js/sha256');
  
const blockData = prompt("")
  
let hash = String(SHA256(blockData + '0'))

for (let nonce = 1; !hash.startsWith('0000'); nonce++) {
  hash = String(SHA256(blockData + String(nonce)));
  console.log(nonce);
  console.log(hash);
}
console.log('========================')
console.log(`Proof-of-Work: ${hash}` )