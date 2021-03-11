require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stone decrease stereo social hover knife flower gasp'; 
let testAccounts = [
"0x7d102a112734fca0e592426c97e8e3114eb98d30ddfee8e2b55f5924acc9f754",
"0xdbdcc776d6fdc86416b01d838d184240e686cb7d67f4bdc0d472aff2ffde19a2",
"0xca73a50a8d8d742f1d22ee835747dfdf600fd19ffd29dd6ec9e423bca66eb224",
"0xbc57f15b5ff22a2b2e667ce4a2f2571160fd52a5482ecf10b30edb8a23bf5ae4",
"0x346f75634932ec5b7df086f43cae0778bdce458479e379473814c4a7d72a319a",
"0xc8eb43d4769222890ab17a4a3e8966d3c2edaaa42a224578ca255ec42c7c8f68",
"0xfe7b56ef023eafea23e82ae7bab626a7ee3ac008ef3400a2590ea0bf3e8cb20a",
"0x7b0f6bed7e189be35b60254218aa55fde1f1e9bc29c2a4b129a3c3e4b2aff349",
"0x8cfa064feedfafea01c906e3dbc54b56abee72d1ee15b535acb65de08577a980",
"0x50764a2f205b98266d45be763e4e46c1057e2e185676531fc1dbe3047779f645"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
