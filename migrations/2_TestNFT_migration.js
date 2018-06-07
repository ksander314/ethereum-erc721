var TestToken1 = artifacts.require('./tokens/TestToken1.sol');

module.exports = function(deployer) {
    deployer.deploy(TestToken1, "TestToken1", "TT1");
};
