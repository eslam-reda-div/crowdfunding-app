require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // zksolc: {
  //   version: "1.3.9",
  //   compilerSource: "binary",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //     }, 
  //   },
  // },
  // networks: {
  //   zksync_testnet: {
  //     url: "https://zksync2-testnet.zksync.dev",
  //     ethNetwork: "sepolia",
  //     chainId: 280,
  //     zksync: true,
  //   },
  //   zksync_mainnet: {
  //     url: "https://zksync2-mainnet.zksync.io/",
  //     ethNetwork: "mainnet",
  //     chainId: 324,
  //     zksync: true,
  //   },
  // },
  // paths: {
  //   artifacts: "./artifacts-zk",
  //   cache: "./cache-zk",
  //   sources: "./contracts",
  //   tests: "./test",
  // },
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat:{},
      sepolia:{
        url: 'https://rpc.ankr.com/eth_sepolia/23d0b42d1f62a36bf59bfa964eb89176dfe871e358fb789a3623d7577231ff9e',
        accounts: [`0x596c577a4f7e20620be2afe372d55817224eb7f66f87a97098df6aa12a23f6f9`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
