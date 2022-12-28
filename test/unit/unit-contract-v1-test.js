const { expect, assert } = require("chai")
const { network, deployments, ethers, upgrades } = require("hardhat")
const fileName = "../../addresses.json"
const file = require(fileName)

const { developmentChains } = require("../../helper.config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("NFTFarm ", function () {
          let box, transparentProxy, proxyBox, boxProxyAdmin
          beforeEach(async () => {
              await deployments.fixture(["box"])
              //   box = await ethers.getContract("BoxV1")
              transparentProxy = await ethers.getContract("BoxV1_Proxy")
              proxyBox = await ethers.getContractAt("BoxV1", transparentProxy.address)
              boxProxyAdmin = await ethers.getContract("BoxProxyAdmin")
          })
          it("can deploy and upgrade a contract", async function () {
              const startingVersion = await proxyBox.version()
              assert.equal(startingVersion.toString(), "1")
              await deployments.fixture(["BoxV2"])
              const boxV2 = await ethers.getContract("BoxV2")
              const upgradeTx = await boxProxyAdmin.upgrade(transparentProxy.address, boxV2.address)
              await upgradeTx.wait(1)
              const endingVersion = await proxyBox.version()
              assert.equal(endingVersion.toString(), "2")
          })
      })
