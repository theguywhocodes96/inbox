const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider (
    'wash glove leg primary average attract vocal awake tennis rigid half nephew',
    'https://rinkeby.infura.io/v3/a19dc36732c34481acd2538d6da65442'
)

const web3 = new Web3(provider);

const deploy = async () => {
    try{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract has been deployed at', result.options.address);
    provider.engine.stop();
    }catch(err){
        console.log(err)
    }
};
deploy();