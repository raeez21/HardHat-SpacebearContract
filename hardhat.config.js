require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
const fs = require("fs") //to import keys from a file

let SEPOLIA_PRIVATE_KEY_ACCOUNT1= fs.readFileSync(".metamask_PK_ACC1").toString().trim();
let SEPOLIA_PRIVATE_KEY_ACCOUNT2= fs.readFileSync(".metamask_PK_ACC2").toString().trim();

let INFURA_API_KEY = fs.readFileSync(".infura_key").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY_ACCOUNT1, SEPOLIA_PRIVATE_KEY_ACCOUNT2],
    },
  },
  etherscan:{
    apiKey: fs.readFileSync(".etherscan").toString().trim()
  },
  solidity: "0.8.24",
  
};
