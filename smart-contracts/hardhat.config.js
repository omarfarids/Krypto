require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9331BorV2aWn8BTdZA-MSP0ayxQH3RjE',
      accounts: ['9fb53235e6ad0a40ef3d566620f11f2d194ff08876878ed62eacbdaae62a63f5']
    }
  }
}