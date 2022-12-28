#  Transparent Upgrade Contract 
We will do most popular upgrade proxy example which is tranparent proxy because it will separate the admin proxy function from the Application function which mean admin of contract can't call the function from his account directly.

Best way to upgrade is by some voting methode nota single person will right to upgrade the contract.


We will used Openzepelien
```
yarn add --dev openzeppelin/contract

// and we user  proxy admin from openzeppelin 
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/ProxyAdmin.sol
```
### Usercase
First we deploy one simple contract which do increament by one in his init values and then we deployed new contract which have new function increament by 2 every time that function call.

- [Hardhat Upgrades](#hardhat-upgrades)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
- [Usage](#usage)
  - [Testing](#testing)
    - [Test Coverage](#test-coverage)
- [Deployment to a testnet or mainnet](#deployment-to-a-testnet-or-mainnet)
  - [Scripts](#scripts)
  - [Verify on etherscan](#verify-on-etherscan)
- [Thank you!](#thank-you)

# Getting Started

## Requirements

- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    -  You might need to install it with npm

## Quickstart

```
git clone https://github.com/touqeerShah/Universal-Upgradeable-Contract.git
cd Universal-Upgradeable-Contract
yarn
```


# Usage


Start Node locally :

```
yarn run node
```


Deploy Version V1:

```
yarn run deploy:v1

```
Output :
```
Network is detected to be mock
---- > first Deploy Proxy Amdin Contract
deploying "BoxProxyAdmin" (tx: 0x44d6bca072629d8ba3877aa5d70989173395b52f011237502ac2ad44a2bac56d)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 444893 gas
----> then deploy impelementation contract our our contract 
deploying "BoxV1_Implementation" (tx: 0x2d3524bdf04cf8de1fb7f79c9e2d4a96b13925d01ba2f84e8a9ca4736adff87d)...: deployed at 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 with 104391 gas
-----> then tell Proxy contract the implementation contract address
deploying "BoxV1_Proxy" (tx: 0x23ad4f81fe03f9e599de9e724b0fddd074ac97d659ec8c27a27567502b585da1)...: deployed at 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 with 720430 gas
PTNFT MarketPlace contract is deployed on local network to 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 31337
```

Copy Address to  V1:

```
addresses.json
{
    "ProxyUUPS": "<here Proxy Contract address>"
}

```

## Testing

```
yarn run test:v1
```



Deploy Version V2:

```
yarn run deploy:v2
```



```
yarn run test:v2
```



### Best Source to learn 
```
https://github.com/wighawag/template-ethereum-contracts/tree/examples/openzeppelin-proxies/deploy
```

# Thank you!


[![Touqeer Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@touqeershah32)
[![Touqeer YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UC3oUDpfMOBefugPp4GADyUQ)
[![Touqeer Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/touqeer-shah/)

