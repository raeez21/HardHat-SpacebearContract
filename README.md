# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
# This repo

Hardhat is, like Truffle, JavaScript (node) based. That means, you install it via the node package manager. But, unlike Truffle, it is project dependent and installed as a dev-dependency.

Once we setup and intialise Hardhat, it creates a project scaffold with different folders:
1. contracts folder - all the contracts are here
2. ignition folder - to deploy the contracts (Truffle had migrations while Hardhat uses scripts for deployement)
3. test folder - testing the contracts

Hardhat comes with a dev chain called node (similar to Ganache)


# Deploying Spacebear contract to Sepolia test chain
The Spacebear contract file is placed in [contracts/Spacebear.sol](contracts/Spacebear.sol). 

Compile this with `npx hardhat compile`

Now we need to add the secret keys to files.
1. Metamask account private keys (2 accounts)
2. Infura keys
3. Etherscan api key to verify the deployed contract

See [hardhat.config.js](hardhat.config.js) to learn how the config file was updated to connect to the Sepolia test chain.

To deploy: `npx hardhat ignition deploy ignition/modules/Spacebear.js --network sepolia`

# Unit testing with Hardhat

Hardhat uses JavaScript based tests just like Truffle but with some differences. They work with the expect API from chai, not with assert.

See [test/Spacebear_test.js](test/Spacebear_test.js) for the custom test script on our Spacebear contract.
Now run the test with `npx hardhat test`




For more info: https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/12-hardhat-testing/




