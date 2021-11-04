require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain honey inflict arena flame tortoise'; 
let testAccounts = [
"0xe698058b56ced8851cb7c4eb4092ed6e7284ea2d8edd9a8eb04a2d8d59e649bb",
"0xb2be0a2a3af3bfa89d9414575954edae4ba51bcd5fc910cb28c8fe49c50d5ac4",
"0x16d6640b3aa7422ee139db0c07e9da354ffe1c9b875d868556662b5606cb353f",
"0xbeaf612f6903405b093394558f005222f49e98d25e4f534df0236d7611f3037a",
"0x16116bbd1d8006c321a19a9719cd1acf7c5d0209fe6022e4fbe23fd4e1565c5d",
"0x235aa2aeb96997bd2ee0f67bc54ae8fffaffb5f183eb6cdf8e67459743b6390c",
"0x5e4088540a7926c7fa0d286562cea5ddbb802cd5ff5ab37b9f0b96f392d4f76a",
"0x390b4db74bfb689cdd5f5cd1c3c5aaa69787791de0e7c8f4dee83eb8081c2224",
"0x3d75e1b9b4572a4ef1a972cecd555af43f983164586c94d1c1396a4f057b69c5",
"0x4a8fbd16862c9223f40759cbca792cbec186b1c0fb0e0573c6db3db7ccf71374"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


