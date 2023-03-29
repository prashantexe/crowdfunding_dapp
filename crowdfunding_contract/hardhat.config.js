/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork : "goreli",
    networks:{
      hardhat: {},
      goreli:{
        url: "https://rpc.ankr.com/eth_goerli"

      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
