import Web3 from 'web3';

const web3 = new Web3('https://rpc-msc.mindchain.info/'); 

async function getLatestDifficulty() {
  const latestBlock = await web3.eth.getBlock('latest');
  const difficulty = latestBlock.difficulty;
  return difficulty;
}

export { getLatestDifficulty };
