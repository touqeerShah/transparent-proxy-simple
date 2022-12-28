const { ethers } = require("hardhat")
// const fs = require("fs")
// const ADDRESS_PATH = "./addresses.json"
// const file = require(ADDRESS_PATH)
let { networkConfig, developmentChains } = require("../helper.config.js")
let { verify } = require("../utils/verify")

require("dotenv").config()

module.exports = async ({ getNamedAccounts, deployments, getChainId, network, upgrades }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts() // it will tell the who is going to deploy the contract
    const chainId = await getChainId()
    const initNumber = 785
    log("---------------- Box v1 Proxy ----------------")

    log("Network is detected to be mock")

    const BoxV2 = await deploy("BoxV2", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    log(`Box  contract is deployed on local network to ${BoxV2.address} ${chainId}`)

    if (!developmentChains.includes(network.name) && process.env.ETHERSCANAPIKEY) {
        await verify(BoxV2.address, [])
    }
}
module.exports.tags = ["v1", "all"]
