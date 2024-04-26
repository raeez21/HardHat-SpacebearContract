const { expect } = require("chai");
const hre = require("hardhat") //Hardhat runtime evt
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers")

describe("Spacebear_Test", function(){
    async function deployAndMintTokenFixture(){
        const Spacebear = await hre.ethers.getContractFactory("Spacebear");
        const [owner, otherAccount] = await hre.ethers.getSigners();
        const spacebearInstance = await Spacebear.deploy(owner.address); //Deploying the SC
        await spacebearInstance.safeMint(otherAccount.address);
        return {spacebearInstance};
    }
    it("is possible to mint a token", async()=>{
        const {spacebearInstance} = await loadFixture(deployAndMintTokenFixture);
        const [owner, otherAccount] = await hre.ethers.getSigners();
        expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
    })
    it("fails to transfer tokens from wrong address", async()=>{
        const {spacebearInstance} = await loadFixture(deployAndMintTokenFixture);
        const [owner, otherAccount, notNftOwner] = await hre.ethers.getSigners();
        expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
        //The below expect should fail
        await expect(spacebearInstance.connect(notNftOwner).transferFrom(otherAccount.address, notNftOwner.address,0)).to.be.reverted //(ERC721IncorrectOwner);//("ERC721: caller is not token owner nor approved")
    })
})