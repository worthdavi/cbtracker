const IStakingRewards = {
    "contractName": "IStakingRewards",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newMinimumStakeTime",
            "type": "uint256"
          }
        ],
        "name": "MinimumStakeTimeUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "name": "RewardAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "name": "RewardPaid",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newDuration",
            "type": "uint256"
          }
        ],
        "name": "RewardsDurationUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Staked",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Withdrawn",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "lastTimeRewardApplicable",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rewardPerToken",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "earned",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getRewardForDuration",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "minimumStakeTime",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getStakeRewardDistributionTimeLeft",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getStakeUnlockTimeLeft",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rewardRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rewardsDuration",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "stake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "exit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.5+commit.f956cc89\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newMinimumStakeTime\",\"type\":\"uint256\"}],\"name\":\"MinimumStakeTimeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"RewardAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"RewardPaid\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newDuration\",\"type\":\"uint256\"}],\"name\":\"RewardsDurationUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Staked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdrawn\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"earned\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"exit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getReward\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRewardForDuration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStakeRewardDistributionTimeLeft\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStakeUnlockTimeLeft\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lastTimeRewardApplicable\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minimumStakeTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardPerToken\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardsDuration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"stake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol\":\"IStakingRewards\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol\":{\"keccak256\":\"0xb6b7f2ab36cbf14f60310e2bcc2aead46f8e0f42ec7edcfc2d831dc603b0c510\",\"urls\":[\"bzz-raw://ddfbbc00d382ea573512e9e50217cd959eaa9f599f0d395261d700c865da6ece\",\"dweb:/ipfs/QmYZtshZX4jf4Wj6aRkAkDwATnvBNDeZ77Xsuj7u2xyi5h\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "immutableReferences": {},
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "pragma solidity >=0.4.24;\r\n\r\n// https://docs.synthetix.io/contracts/source/interfaces/istakingrewards\r\ninterface IStakingRewards {\r\n    // Views\r\n    function lastTimeRewardApplicable() external view returns (uint256);\r\n\r\n    function rewardPerToken() external view returns (uint256);\r\n\r\n    function earned(address account) external view returns (uint256);\r\n\r\n    function getRewardForDuration() external view returns (uint256);\r\n\r\n    function totalSupply() external view returns (uint256);\r\n\r\n    function balanceOf(address account) external view returns (uint256);\r\n\r\n    function minimumStakeTime() external view returns (uint256);\r\n\r\n    function getStakeRewardDistributionTimeLeft() external view returns (uint256);\r\n\r\n    function getStakeUnlockTimeLeft() external view returns (uint256);\r\n\r\n    function rewardRate() external view returns (uint256);\r\n\r\n    function rewardsDuration() external view returns (uint256);\r\n\r\n    // Mutative\r\n    function stake(uint256 amount) external;\r\n\r\n    function withdraw(uint256 amount) external;\r\n\r\n    function getReward() external;\r\n\r\n    function exit() external;\r\n\r\n    // Events\r\n    event RewardAdded(uint256 reward);\r\n\r\n    event Staked(address indexed user, uint256 amount);\r\n\r\n    event Withdrawn(address indexed user, uint256 amount);\r\n\r\n    event RewardPaid(address indexed user, uint256 reward);\r\n\r\n    event RewardsDurationUpdated(uint256 newDuration);\r\n\r\n    event MinimumStakeTimeUpdated(uint256 newMinimumStakeTime);\r\n}\r\n",
    "sourcePath": "F:\\vscode\\cblades\\contracts\\staking\\interfaces\\IStakingRewards.sol",
    "ast": {
      "absolutePath": "/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol",
      "exportedSymbols": {
        "IStakingRewards": [
          10003
        ]
      },
      "id": 10004,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 9897,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".24"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:25:34"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "interface",
          "documentation": null,
          "fullyImplemented": false,
          "id": 10003,
          "linearizedBaseContracts": [
            10003
          ],
          "name": "IStakingRewards",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": null,
              "documentation": null,
              "functionSelector": "80faa57d",
              "id": 9902,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "lastTimeRewardApplicable",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9898,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "183:2:34"
              },
              "returnParameters": {
                "id": 9901,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9900,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9902,
                    "src": "209:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9899,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "209:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "208:9:34"
              },
              "scope": 10003,
              "src": "150:68:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "cd3daf9d",
              "id": 9907,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "rewardPerToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9903,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "249:2:34"
              },
              "returnParameters": {
                "id": 9906,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9905,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9907,
                    "src": "275:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9904,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "275:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "274:9:34"
              },
              "scope": 10003,
              "src": "226:58:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "008cc262",
              "id": 9914,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "earned",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9910,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9909,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9914,
                    "src": "308:15:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9908,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "308:7:34",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "307:17:34"
              },
              "returnParameters": {
                "id": 9913,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9912,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9914,
                    "src": "348:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9911,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "348:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "347:9:34"
              },
              "scope": 10003,
              "src": "292:65:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "1c1f78eb",
              "id": 9919,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getRewardForDuration",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9915,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "394:2:34"
              },
              "returnParameters": {
                "id": 9918,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9917,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9919,
                    "src": "420:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9916,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "420:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "419:9:34"
              },
              "scope": 10003,
              "src": "365:64:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "18160ddd",
              "id": 9924,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9920,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "457:2:34"
              },
              "returnParameters": {
                "id": 9923,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9922,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9924,
                    "src": "483:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9921,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "483:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "482:9:34"
              },
              "scope": 10003,
              "src": "437:55:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "70a08231",
              "id": 9931,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9927,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9926,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9931,
                    "src": "519:15:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9925,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "519:7:34",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "518:17:34"
              },
              "returnParameters": {
                "id": 9930,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9929,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9931,
                    "src": "559:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9928,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "559:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "558:9:34"
              },
              "scope": 10003,
              "src": "500:68:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "242df9e1",
              "id": 9936,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "minimumStakeTime",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9932,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "601:2:34"
              },
              "returnParameters": {
                "id": 9935,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9934,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9936,
                    "src": "627:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9933,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "627:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "626:9:34"
              },
              "scope": 10003,
              "src": "576:60:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "27ab1969",
              "id": 9941,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getStakeRewardDistributionTimeLeft",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9937,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "687:2:34"
              },
              "returnParameters": {
                "id": 9940,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9939,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9941,
                    "src": "713:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9938,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "713:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "712:9:34"
              },
              "scope": 10003,
              "src": "644:78:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "f603944c",
              "id": 9946,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getStakeUnlockTimeLeft",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9942,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "761:2:34"
              },
              "returnParameters": {
                "id": 9945,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9944,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9946,
                    "src": "787:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9943,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "787:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "786:9:34"
              },
              "scope": 10003,
              "src": "730:66:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "7b0a47ee",
              "id": 9951,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "rewardRate",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9947,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "823:2:34"
              },
              "returnParameters": {
                "id": 9950,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9949,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9951,
                    "src": "849:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9948,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "849:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "848:9:34"
              },
              "scope": 10003,
              "src": "804:54:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "386a9525",
              "id": 9956,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "rewardsDuration",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9952,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "890:2:34"
              },
              "returnParameters": {
                "id": 9955,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9954,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9956,
                    "src": "916:7:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9953,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "916:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "915:9:34"
              },
              "scope": 10003,
              "src": "866:59:34",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "a694fc3a",
              "id": 9961,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "stake",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9959,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9958,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9961,
                    "src": "965:14:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9957,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "965:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "964:16:34"
              },
              "returnParameters": {
                "id": 9960,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "989:0:34"
              },
              "scope": 10003,
              "src": "950:40:34",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "2e1a7d4d",
              "id": 9966,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "withdraw",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9964,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9963,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9966,
                    "src": "1016:14:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9962,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1016:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1015:16:34"
              },
              "returnParameters": {
                "id": 9965,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1040:0:34"
              },
              "scope": 10003,
              "src": "998:43:34",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "3d18b912",
              "id": 9969,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getReward",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9967,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1067:2:34"
              },
              "returnParameters": {
                "id": 9968,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1078:0:34"
              },
              "scope": 10003,
              "src": "1049:30:34",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": null,
              "functionSelector": "e9fad8ee",
              "id": 9972,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "exit",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 9970,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1100:2:34"
              },
              "returnParameters": {
                "id": 9971,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1111:0:34"
              },
              "scope": 10003,
              "src": "1087:25:34",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 9976,
              "name": "RewardAdded",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 9975,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9974,
                    "indexed": false,
                    "name": "reward",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9976,
                    "src": "1153:14:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9973,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1153:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1152:16:34"
              },
              "src": "1135:34:34"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 9982,
              "name": "Staked",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 9981,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9978,
                    "indexed": true,
                    "name": "user",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9982,
                    "src": "1190:20:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9977,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1190:7:34",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 9980,
                    "indexed": false,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9982,
                    "src": "1212:14:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9979,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1212:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1189:38:34"
              },
              "src": "1177:51:34"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 9988,
              "name": "Withdrawn",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 9987,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9984,
                    "indexed": true,
                    "name": "user",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9988,
                    "src": "1252:20:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9983,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1252:7:34",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 9986,
                    "indexed": false,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9988,
                    "src": "1274:14:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9985,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1274:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1251:38:34"
              },
              "src": "1236:54:34"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 9994,
              "name": "RewardPaid",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 9993,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9990,
                    "indexed": true,
                    "name": "user",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9994,
                    "src": "1315:20:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9989,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1315:7:34",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 9992,
                    "indexed": false,
                    "name": "reward",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9994,
                    "src": "1337:14:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9991,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1337:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1314:38:34"
              },
              "src": "1298:55:34"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 9998,
              "name": "RewardsDurationUpdated",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 9997,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9996,
                    "indexed": false,
                    "name": "newDuration",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 9998,
                    "src": "1390:19:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9995,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1390:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1389:21:34"
              },
              "src": "1361:50:34"
            },
            {
              "anonymous": false,
              "documentation": null,
              "id": 10002,
              "name": "MinimumStakeTimeUpdated",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 10001,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 10000,
                    "indexed": false,
                    "name": "newMinimumStakeTime",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 10002,
                    "src": "1449:27:34",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9999,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1449:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1448:29:34"
              },
              "src": "1419:59:34"
            }
          ],
          "scope": 10004,
          "src": "103:1378:34"
        }
      ],
      "src": "0:1483:34"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "/F/vscode/cblades/contracts/staking/interfaces/IStakingRewards.sol",
        "exportedSymbols": {
          "IStakingRewards": [
            10003
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              ">=",
              "0.4",
              ".24"
            ]
          },
          "id": 9897,
          "name": "PragmaDirective",
          "src": "0:25:34"
        },
        {
          "attributes": {
            "abstract": false,
            "baseContracts": [
              null
            ],
            "contractDependencies": [
              null
            ],
            "contractKind": "interface",
            "documentation": null,
            "fullyImplemented": false,
            "linearizedBaseContracts": [
              10003
            ],
            "name": "IStakingRewards",
            "scope": 10004
          },
          "children": [
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "80faa57d",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "lastTimeRewardApplicable",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9898,
                  "name": "ParameterList",
                  "src": "183:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9902,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9899,
                          "name": "ElementaryTypeName",
                          "src": "209:7:34"
                        }
                      ],
                      "id": 9900,
                      "name": "VariableDeclaration",
                      "src": "209:7:34"
                    }
                  ],
                  "id": 9901,
                  "name": "ParameterList",
                  "src": "208:9:34"
                }
              ],
              "id": 9902,
              "name": "FunctionDefinition",
              "src": "150:68:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "cd3daf9d",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "rewardPerToken",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9903,
                  "name": "ParameterList",
                  "src": "249:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9907,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9904,
                          "name": "ElementaryTypeName",
                          "src": "275:7:34"
                        }
                      ],
                      "id": 9905,
                      "name": "VariableDeclaration",
                      "src": "275:7:34"
                    }
                  ],
                  "id": 9906,
                  "name": "ParameterList",
                  "src": "274:9:34"
                }
              ],
              "id": 9907,
              "name": "FunctionDefinition",
              "src": "226:58:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "008cc262",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "earned",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "account",
                        "overrides": null,
                        "scope": 9914,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 9908,
                          "name": "ElementaryTypeName",
                          "src": "308:7:34"
                        }
                      ],
                      "id": 9909,
                      "name": "VariableDeclaration",
                      "src": "308:15:34"
                    }
                  ],
                  "id": 9910,
                  "name": "ParameterList",
                  "src": "307:17:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9914,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9911,
                          "name": "ElementaryTypeName",
                          "src": "348:7:34"
                        }
                      ],
                      "id": 9912,
                      "name": "VariableDeclaration",
                      "src": "348:7:34"
                    }
                  ],
                  "id": 9913,
                  "name": "ParameterList",
                  "src": "347:9:34"
                }
              ],
              "id": 9914,
              "name": "FunctionDefinition",
              "src": "292:65:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "1c1f78eb",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getRewardForDuration",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9915,
                  "name": "ParameterList",
                  "src": "394:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9919,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9916,
                          "name": "ElementaryTypeName",
                          "src": "420:7:34"
                        }
                      ],
                      "id": 9917,
                      "name": "VariableDeclaration",
                      "src": "420:7:34"
                    }
                  ],
                  "id": 9918,
                  "name": "ParameterList",
                  "src": "419:9:34"
                }
              ],
              "id": 9919,
              "name": "FunctionDefinition",
              "src": "365:64:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "18160ddd",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "totalSupply",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9920,
                  "name": "ParameterList",
                  "src": "457:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9924,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9921,
                          "name": "ElementaryTypeName",
                          "src": "483:7:34"
                        }
                      ],
                      "id": 9922,
                      "name": "VariableDeclaration",
                      "src": "483:7:34"
                    }
                  ],
                  "id": 9923,
                  "name": "ParameterList",
                  "src": "482:9:34"
                }
              ],
              "id": 9924,
              "name": "FunctionDefinition",
              "src": "437:55:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "70a08231",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "balanceOf",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "account",
                        "overrides": null,
                        "scope": 9931,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 9925,
                          "name": "ElementaryTypeName",
                          "src": "519:7:34"
                        }
                      ],
                      "id": 9926,
                      "name": "VariableDeclaration",
                      "src": "519:15:34"
                    }
                  ],
                  "id": 9927,
                  "name": "ParameterList",
                  "src": "518:17:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9931,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9928,
                          "name": "ElementaryTypeName",
                          "src": "559:7:34"
                        }
                      ],
                      "id": 9929,
                      "name": "VariableDeclaration",
                      "src": "559:7:34"
                    }
                  ],
                  "id": 9930,
                  "name": "ParameterList",
                  "src": "558:9:34"
                }
              ],
              "id": 9931,
              "name": "FunctionDefinition",
              "src": "500:68:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "242df9e1",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "minimumStakeTime",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9932,
                  "name": "ParameterList",
                  "src": "601:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9936,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9933,
                          "name": "ElementaryTypeName",
                          "src": "627:7:34"
                        }
                      ],
                      "id": 9934,
                      "name": "VariableDeclaration",
                      "src": "627:7:34"
                    }
                  ],
                  "id": 9935,
                  "name": "ParameterList",
                  "src": "626:9:34"
                }
              ],
              "id": 9936,
              "name": "FunctionDefinition",
              "src": "576:60:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "27ab1969",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getStakeRewardDistributionTimeLeft",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9937,
                  "name": "ParameterList",
                  "src": "687:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9941,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9938,
                          "name": "ElementaryTypeName",
                          "src": "713:7:34"
                        }
                      ],
                      "id": 9939,
                      "name": "VariableDeclaration",
                      "src": "713:7:34"
                    }
                  ],
                  "id": 9940,
                  "name": "ParameterList",
                  "src": "712:9:34"
                }
              ],
              "id": 9941,
              "name": "FunctionDefinition",
              "src": "644:78:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "f603944c",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getStakeUnlockTimeLeft",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9942,
                  "name": "ParameterList",
                  "src": "761:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9946,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9943,
                          "name": "ElementaryTypeName",
                          "src": "787:7:34"
                        }
                      ],
                      "id": 9944,
                      "name": "VariableDeclaration",
                      "src": "787:7:34"
                    }
                  ],
                  "id": 9945,
                  "name": "ParameterList",
                  "src": "786:9:34"
                }
              ],
              "id": 9946,
              "name": "FunctionDefinition",
              "src": "730:66:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "7b0a47ee",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "rewardRate",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9947,
                  "name": "ParameterList",
                  "src": "823:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9951,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9948,
                          "name": "ElementaryTypeName",
                          "src": "849:7:34"
                        }
                      ],
                      "id": 9949,
                      "name": "VariableDeclaration",
                      "src": "849:7:34"
                    }
                  ],
                  "id": 9950,
                  "name": "ParameterList",
                  "src": "848:9:34"
                }
              ],
              "id": 9951,
              "name": "FunctionDefinition",
              "src": "804:54:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "386a9525",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "rewardsDuration",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9952,
                  "name": "ParameterList",
                  "src": "890:2:34"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 9956,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9953,
                          "name": "ElementaryTypeName",
                          "src": "916:7:34"
                        }
                      ],
                      "id": 9954,
                      "name": "VariableDeclaration",
                      "src": "916:7:34"
                    }
                  ],
                  "id": 9955,
                  "name": "ParameterList",
                  "src": "915:9:34"
                }
              ],
              "id": 9956,
              "name": "FunctionDefinition",
              "src": "866:59:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "a694fc3a",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "stake",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "amount",
                        "overrides": null,
                        "scope": 9961,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9957,
                          "name": "ElementaryTypeName",
                          "src": "965:7:34"
                        }
                      ],
                      "id": 9958,
                      "name": "VariableDeclaration",
                      "src": "965:14:34"
                    }
                  ],
                  "id": 9959,
                  "name": "ParameterList",
                  "src": "964:16:34"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9960,
                  "name": "ParameterList",
                  "src": "989:0:34"
                }
              ],
              "id": 9961,
              "name": "FunctionDefinition",
              "src": "950:40:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "2e1a7d4d",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "withdraw",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "amount",
                        "overrides": null,
                        "scope": 9966,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9962,
                          "name": "ElementaryTypeName",
                          "src": "1016:7:34"
                        }
                      ],
                      "id": 9963,
                      "name": "VariableDeclaration",
                      "src": "1016:14:34"
                    }
                  ],
                  "id": 9964,
                  "name": "ParameterList",
                  "src": "1015:16:34"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9965,
                  "name": "ParameterList",
                  "src": "1040:0:34"
                }
              ],
              "id": 9966,
              "name": "FunctionDefinition",
              "src": "998:43:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "3d18b912",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "getReward",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9967,
                  "name": "ParameterList",
                  "src": "1067:2:34"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9968,
                  "name": "ParameterList",
                  "src": "1078:0:34"
                }
              ],
              "id": 9969,
              "name": "FunctionDefinition",
              "src": "1049:30:34"
            },
            {
              "attributes": {
                "body": null,
                "documentation": null,
                "functionSelector": "e9fad8ee",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "exit",
                "overrides": null,
                "scope": 10003,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9970,
                  "name": "ParameterList",
                  "src": "1100:2:34"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 9971,
                  "name": "ParameterList",
                  "src": "1111:0:34"
                }
              ],
              "id": 9972,
              "name": "FunctionDefinition",
              "src": "1087:25:34"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "RewardAdded"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "reward",
                        "overrides": null,
                        "scope": 9976,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9973,
                          "name": "ElementaryTypeName",
                          "src": "1153:7:34"
                        }
                      ],
                      "id": 9974,
                      "name": "VariableDeclaration",
                      "src": "1153:14:34"
                    }
                  ],
                  "id": 9975,
                  "name": "ParameterList",
                  "src": "1152:16:34"
                }
              ],
              "id": 9976,
              "name": "EventDefinition",
              "src": "1135:34:34"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "Staked"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "user",
                        "overrides": null,
                        "scope": 9982,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 9977,
                          "name": "ElementaryTypeName",
                          "src": "1190:7:34"
                        }
                      ],
                      "id": 9978,
                      "name": "VariableDeclaration",
                      "src": "1190:20:34"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "amount",
                        "overrides": null,
                        "scope": 9982,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9979,
                          "name": "ElementaryTypeName",
                          "src": "1212:7:34"
                        }
                      ],
                      "id": 9980,
                      "name": "VariableDeclaration",
                      "src": "1212:14:34"
                    }
                  ],
                  "id": 9981,
                  "name": "ParameterList",
                  "src": "1189:38:34"
                }
              ],
              "id": 9982,
              "name": "EventDefinition",
              "src": "1177:51:34"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "Withdrawn"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "user",
                        "overrides": null,
                        "scope": 9988,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 9983,
                          "name": "ElementaryTypeName",
                          "src": "1252:7:34"
                        }
                      ],
                      "id": 9984,
                      "name": "VariableDeclaration",
                      "src": "1252:20:34"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "amount",
                        "overrides": null,
                        "scope": 9988,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9985,
                          "name": "ElementaryTypeName",
                          "src": "1274:7:34"
                        }
                      ],
                      "id": 9986,
                      "name": "VariableDeclaration",
                      "src": "1274:14:34"
                    }
                  ],
                  "id": 9987,
                  "name": "ParameterList",
                  "src": "1251:38:34"
                }
              ],
              "id": 9988,
              "name": "EventDefinition",
              "src": "1236:54:34"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "RewardPaid"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "user",
                        "overrides": null,
                        "scope": 9994,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "address",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "stateMutability": "nonpayable",
                            "type": "address"
                          },
                          "id": 9989,
                          "name": "ElementaryTypeName",
                          "src": "1315:7:34"
                        }
                      ],
                      "id": 9990,
                      "name": "VariableDeclaration",
                      "src": "1315:20:34"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "reward",
                        "overrides": null,
                        "scope": 9994,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9991,
                          "name": "ElementaryTypeName",
                          "src": "1337:7:34"
                        }
                      ],
                      "id": 9992,
                      "name": "VariableDeclaration",
                      "src": "1337:14:34"
                    }
                  ],
                  "id": 9993,
                  "name": "ParameterList",
                  "src": "1314:38:34"
                }
              ],
              "id": 9994,
              "name": "EventDefinition",
              "src": "1298:55:34"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "RewardsDurationUpdated"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "newDuration",
                        "overrides": null,
                        "scope": 9998,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9995,
                          "name": "ElementaryTypeName",
                          "src": "1390:7:34"
                        }
                      ],
                      "id": 9996,
                      "name": "VariableDeclaration",
                      "src": "1390:19:34"
                    }
                  ],
                  "id": 9997,
                  "name": "ParameterList",
                  "src": "1389:21:34"
                }
              ],
              "id": 9998,
              "name": "EventDefinition",
              "src": "1361:50:34"
            },
            {
              "attributes": {
                "anonymous": false,
                "documentation": null,
                "name": "MinimumStakeTimeUpdated"
              },
              "children": [
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "newMinimumStakeTime",
                        "overrides": null,
                        "scope": 10002,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 9999,
                          "name": "ElementaryTypeName",
                          "src": "1449:7:34"
                        }
                      ],
                      "id": 10000,
                      "name": "VariableDeclaration",
                      "src": "1449:27:34"
                    }
                  ],
                  "id": 10001,
                  "name": "ParameterList",
                  "src": "1448:29:34"
                }
              ],
              "id": 10002,
              "name": "EventDefinition",
              "src": "1419:59:34"
            }
          ],
          "id": 10003,
          "name": "ContractDefinition",
          "src": "103:1378:34"
        }
      ],
      "id": 10004,
      "name": "SourceUnit",
      "src": "0:1483:34"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.5+commit.f956cc89.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.3.4",
    "updatedAt": "2021-07-22T21:42:32.228Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }