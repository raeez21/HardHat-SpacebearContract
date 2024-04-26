
// (async()=>{
//     try{
//         const Spacebear = await hre.ethers.getContractFactory("Spacebear");
//         const spacebearInstance = await Spacebear.deploy;
//         await spacebearInstance.deployed();
//         console.log("Deployed contract at ${spacebearInstance.address}");
//     }catch(e){
//         console.error(e);
//         process.exitCode=1;
//     }
// })()

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("Spacebear_M2", (m) => {
    const sp = m.contract("Spacebear", ["0x094Ff675b44883b15Fa04A503A3Ec6eCC47E203F"]);
    return { sp };
})
