// https://eth-ropsten.alchemyapi.io/v2/6h6__gOWxi5eO2ukwr8tS_g9-Bw0JY6r

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6h6__gOWxi5eO2ukwr8tS_g9-Bw0JY6r',
      accounts: ['0bcb4e1a14357b3a12e11d3a5e0a394f87e7435c3b2130cbb0b7006ed45a7ff6'],
    },
  },
};