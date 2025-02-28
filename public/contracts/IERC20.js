const IERC20 = {
    "contractName": "IERC20",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
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
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.5+commit.f956cc89\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/F/vscode/cblades/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/F/vscode/cblades/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5f02220344881ce43204ae4a6281145a67bc52c2bb1290a791857df3d19d78f5\",\"urls\":[\"bzz-raw://24427744bd3e6cb73c17010119af12a318289c0253a4d9acb8576c9fb3797b08\",\"dweb:/ipfs/QmTLDqpKRBuxGxRAmjgXt9AkXyACW3MtKzi7PYjm5iMfGC\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "immutableReferences": {},
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "// SPDX-License-Identifier: MIT\n\npragma solidity >=0.6.0 <0.8.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender's allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\n     * allowance mechanism. `amount` is then deducted from the caller's\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
    "sourcePath": "F:\\vscode\\cblades\\node_modules\\@openzeppelin\\contracts\\token\\ERC20\\IERC20.sol",
    "ast": {
      "absolutePath": "/F/vscode/cblades/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
      "exportedSymbols": {
        "IERC20": [
          14092
        ]
      },
      "id": 14093,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 14016,
          "literals": [
            "solidity",
            ">=",
            "0.6",
            ".0",
            "<",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:31:47"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "interface",
          "documentation": {
            "id": 14017,
            "nodeType": "StructuredDocumentation",
            "src": "66:70:47",
            "text": "@dev Interface of the ERC20 standard as defined in the EIP."
          },
          "fullyImplemented": false,
          "id": 14092,
          "linearizedBaseContracts": [
            14092
          ],
          "name": "IERC20",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": null,
              "documentation": {
                "id": 14018,
                "nodeType": "StructuredDocumentation",
                "src": "160:66:47",
                "text": "@dev Returns the amount of tokens in existence."
              },
              "functionSelector": "18160ddd",
              "id": 14023,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 14019,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "251:2:47"
              },
              "returnParameters": {
                "id": 14022,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14021,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14023,
                    "src": "277:7:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14020,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "277:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "276:9:47"
              },
              "scope": 14092,
              "src": "231:55:47",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 14024,
                "nodeType": "StructuredDocumentation",
                "src": "292:72:47",
                "text": "@dev Returns the amount of tokens owned by `account`."
              },
              "functionSelector": "70a08231",
              "id": 14031,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 14027,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14026,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14031,
                    "src": "388:15:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14025,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "388:7:47",
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
                "src": "387:17:47"
              },
              "returnParameters": {
                "id": 14030,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14029,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14031,
                    "src": "428:7:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14028,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "428:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "427:9:47"
              },
              "scope": 14092,
              "src": "369:68:47",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 14032,
                "nodeType": "StructuredDocumentation",
                "src": "443:209:47",
                "text": "@dev Moves `amount` tokens from the caller's account to `recipient`.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
              },
              "functionSelector": "a9059cbb",
              "id": 14041,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 14037,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14034,
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14041,
                    "src": "675:17:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14033,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "675:7:47",
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
                    "id": 14036,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14041,
                    "src": "694:14:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14035,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "694:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "674:35:47"
              },
              "returnParameters": {
                "id": 14040,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14039,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14041,
                    "src": "728:4:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 14038,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "728:4:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "727:6:47"
              },
              "scope": 14092,
              "src": "657:77:47",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 14042,
                "nodeType": "StructuredDocumentation",
                "src": "740:264:47",
                "text": "@dev Returns the remaining number of tokens that `spender` will be\nallowed to spend on behalf of `owner` through {transferFrom}. This is\nzero by default.\n     * This value changes when {approve} or {transferFrom} are called."
              },
              "functionSelector": "dd62ed3e",
              "id": 14051,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 14047,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14044,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14051,
                    "src": "1028:13:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14043,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1028:7:47",
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
                    "id": 14046,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14051,
                    "src": "1043:15:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14045,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1043:7:47",
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
                "src": "1027:32:47"
              },
              "returnParameters": {
                "id": 14050,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14049,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14051,
                    "src": "1083:7:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14048,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1083:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1082:9:47"
              },
              "scope": 14092,
              "src": "1009:83:47",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 14052,
                "nodeType": "StructuredDocumentation",
                "src": "1098:642:47",
                "text": "@dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\nthat someone may use both the old and the new allowance by unfortunate\ntransaction ordering. One possible solution to mitigate this race\ncondition is to first reduce the spender's allowance to 0 and set the\ndesired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     * Emits an {Approval} event."
              },
              "functionSelector": "095ea7b3",
              "id": 14061,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 14057,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14054,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14061,
                    "src": "1762:15:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14053,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1762:7:47",
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
                    "id": 14056,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14061,
                    "src": "1779:14:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14055,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1779:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1761:33:47"
              },
              "returnParameters": {
                "id": 14060,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14059,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14061,
                    "src": "1813:4:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 14058,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1813:4:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1812:6:47"
              },
              "scope": 14092,
              "src": "1745:74:47",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 14062,
                "nodeType": "StructuredDocumentation",
                "src": "1825:296:47",
                "text": "@dev Moves `amount` tokens from `sender` to `recipient` using the\nallowance mechanism. `amount` is then deducted from the caller's\nallowance.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
              },
              "functionSelector": "23b872dd",
              "id": 14073,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 14069,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14064,
                    "name": "sender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14073,
                    "src": "2148:14:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14063,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2148:7:47",
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
                    "id": 14066,
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14073,
                    "src": "2164:17:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14065,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2164:7:47",
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
                    "id": 14068,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14073,
                    "src": "2183:14:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14067,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2183:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2147:51:47"
              },
              "returnParameters": {
                "id": 14072,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14071,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14073,
                    "src": "2217:4:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 14070,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:4:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2216:6:47"
              },
              "scope": 14092,
              "src": "2126:97:47",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 14074,
                "nodeType": "StructuredDocumentation",
                "src": "2229:158:47",
                "text": "@dev Emitted when `value` tokens are moved from one account (`from`) to\nanother (`to`).\n     * Note that `value` may be zero."
              },
              "id": 14082,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 14081,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14076,
                    "indexed": true,
                    "name": "from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14082,
                    "src": "2407:20:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14075,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2407:7:47",
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
                    "id": 14078,
                    "indexed": true,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14082,
                    "src": "2429:18:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14077,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2429:7:47",
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
                    "id": 14080,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14082,
                    "src": "2449:13:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14079,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2449:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2406:57:47"
              },
              "src": "2392:72:47"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 14083,
                "nodeType": "StructuredDocumentation",
                "src": "2470:148:47",
                "text": "@dev Emitted when the allowance of a `spender` for an `owner` is set by\na call to {approve}. `value` is the new allowance."
              },
              "id": 14091,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 14090,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14085,
                    "indexed": true,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14091,
                    "src": "2638:21:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14084,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2638:7:47",
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
                    "id": 14087,
                    "indexed": true,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14091,
                    "src": "2661:23:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 14086,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2661:7:47",
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
                    "id": 14089,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 14091,
                    "src": "2686:13:47",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 14088,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2686:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2637:63:47"
              },
              "src": "2623:78:47"
            }
          ],
          "scope": 14093,
          "src": "137:2566:47"
        }
      ],
      "src": "33:2671:47"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "/F/vscode/cblades/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "exportedSymbols": {
          "IERC20": [
            14092
          ]
        }
      },
      "children": [
        {
          "attributes": {
            "literals": [
              "solidity",
              ">=",
              "0.6",
              ".0",
              "<",
              "0.8",
              ".0"
            ]
          },
          "id": 14016,
          "name": "PragmaDirective",
          "src": "33:31:47"
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
            "fullyImplemented": false,
            "linearizedBaseContracts": [
              14092
            ],
            "name": "IERC20",
            "scope": 14093
          },
          "children": [
            {
              "attributes": {
                "text": "@dev Interface of the ERC20 standard as defined in the EIP."
              },
              "id": 14017,
              "name": "StructuredDocumentation",
              "src": "66:70:47"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "18160ddd",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "totalSupply",
                "overrides": null,
                "scope": 14092,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Returns the amount of tokens in existence."
                  },
                  "id": 14018,
                  "name": "StructuredDocumentation",
                  "src": "160:66:47"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 14019,
                  "name": "ParameterList",
                  "src": "251:2:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 14023,
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
                          "id": 14020,
                          "name": "ElementaryTypeName",
                          "src": "277:7:47"
                        }
                      ],
                      "id": 14021,
                      "name": "VariableDeclaration",
                      "src": "277:7:47"
                    }
                  ],
                  "id": 14022,
                  "name": "ParameterList",
                  "src": "276:9:47"
                }
              ],
              "id": 14023,
              "name": "FunctionDefinition",
              "src": "231:55:47"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "70a08231",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "balanceOf",
                "overrides": null,
                "scope": 14092,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Returns the amount of tokens owned by `account`."
                  },
                  "id": 14024,
                  "name": "StructuredDocumentation",
                  "src": "292:72:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "account",
                        "overrides": null,
                        "scope": 14031,
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
                          "id": 14025,
                          "name": "ElementaryTypeName",
                          "src": "388:7:47"
                        }
                      ],
                      "id": 14026,
                      "name": "VariableDeclaration",
                      "src": "388:15:47"
                    }
                  ],
                  "id": 14027,
                  "name": "ParameterList",
                  "src": "387:17:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 14031,
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
                          "id": 14028,
                          "name": "ElementaryTypeName",
                          "src": "428:7:47"
                        }
                      ],
                      "id": 14029,
                      "name": "VariableDeclaration",
                      "src": "428:7:47"
                    }
                  ],
                  "id": 14030,
                  "name": "ParameterList",
                  "src": "427:9:47"
                }
              ],
              "id": 14031,
              "name": "FunctionDefinition",
              "src": "369:68:47"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "a9059cbb",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "transfer",
                "overrides": null,
                "scope": 14092,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Moves `amount` tokens from the caller's account to `recipient`.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
                  },
                  "id": 14032,
                  "name": "StructuredDocumentation",
                  "src": "443:209:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "recipient",
                        "overrides": null,
                        "scope": 14041,
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
                          "id": 14033,
                          "name": "ElementaryTypeName",
                          "src": "675:7:47"
                        }
                      ],
                      "id": 14034,
                      "name": "VariableDeclaration",
                      "src": "675:17:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "amount",
                        "overrides": null,
                        "scope": 14041,
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
                          "id": 14035,
                          "name": "ElementaryTypeName",
                          "src": "694:7:47"
                        }
                      ],
                      "id": 14036,
                      "name": "VariableDeclaration",
                      "src": "694:14:47"
                    }
                  ],
                  "id": 14037,
                  "name": "ParameterList",
                  "src": "674:35:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 14041,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 14038,
                          "name": "ElementaryTypeName",
                          "src": "728:4:47"
                        }
                      ],
                      "id": 14039,
                      "name": "VariableDeclaration",
                      "src": "728:4:47"
                    }
                  ],
                  "id": 14040,
                  "name": "ParameterList",
                  "src": "727:6:47"
                }
              ],
              "id": 14041,
              "name": "FunctionDefinition",
              "src": "657:77:47"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "dd62ed3e",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "allowance",
                "overrides": null,
                "scope": 14092,
                "stateMutability": "view",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Returns the remaining number of tokens that `spender` will be\nallowed to spend on behalf of `owner` through {transferFrom}. This is\nzero by default.\n     * This value changes when {approve} or {transferFrom} are called."
                  },
                  "id": 14042,
                  "name": "StructuredDocumentation",
                  "src": "740:264:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "owner",
                        "overrides": null,
                        "scope": 14051,
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
                          "id": 14043,
                          "name": "ElementaryTypeName",
                          "src": "1028:7:47"
                        }
                      ],
                      "id": 14044,
                      "name": "VariableDeclaration",
                      "src": "1028:13:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "spender",
                        "overrides": null,
                        "scope": 14051,
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
                          "id": 14045,
                          "name": "ElementaryTypeName",
                          "src": "1043:7:47"
                        }
                      ],
                      "id": 14046,
                      "name": "VariableDeclaration",
                      "src": "1043:15:47"
                    }
                  ],
                  "id": 14047,
                  "name": "ParameterList",
                  "src": "1027:32:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 14051,
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
                          "id": 14048,
                          "name": "ElementaryTypeName",
                          "src": "1083:7:47"
                        }
                      ],
                      "id": 14049,
                      "name": "VariableDeclaration",
                      "src": "1083:7:47"
                    }
                  ],
                  "id": 14050,
                  "name": "ParameterList",
                  "src": "1082:9:47"
                }
              ],
              "id": 14051,
              "name": "FunctionDefinition",
              "src": "1009:83:47"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "095ea7b3",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "approve",
                "overrides": null,
                "scope": 14092,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\nthat someone may use both the old and the new allowance by unfortunate\ntransaction ordering. One possible solution to mitigate this race\ncondition is to first reduce the spender's allowance to 0 and set the\ndesired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     * Emits an {Approval} event."
                  },
                  "id": 14052,
                  "name": "StructuredDocumentation",
                  "src": "1098:642:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "spender",
                        "overrides": null,
                        "scope": 14061,
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
                          "id": 14053,
                          "name": "ElementaryTypeName",
                          "src": "1762:7:47"
                        }
                      ],
                      "id": 14054,
                      "name": "VariableDeclaration",
                      "src": "1762:15:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "amount",
                        "overrides": null,
                        "scope": 14061,
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
                          "id": 14055,
                          "name": "ElementaryTypeName",
                          "src": "1779:7:47"
                        }
                      ],
                      "id": 14056,
                      "name": "VariableDeclaration",
                      "src": "1779:14:47"
                    }
                  ],
                  "id": 14057,
                  "name": "ParameterList",
                  "src": "1761:33:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 14061,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 14058,
                          "name": "ElementaryTypeName",
                          "src": "1813:4:47"
                        }
                      ],
                      "id": 14059,
                      "name": "VariableDeclaration",
                      "src": "1813:4:47"
                    }
                  ],
                  "id": 14060,
                  "name": "ParameterList",
                  "src": "1812:6:47"
                }
              ],
              "id": 14061,
              "name": "FunctionDefinition",
              "src": "1745:74:47"
            },
            {
              "attributes": {
                "body": null,
                "functionSelector": "23b872dd",
                "implemented": false,
                "isConstructor": false,
                "kind": "function",
                "modifiers": [
                  null
                ],
                "name": "transferFrom",
                "overrides": null,
                "scope": 14092,
                "stateMutability": "nonpayable",
                "virtual": false,
                "visibility": "external"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Moves `amount` tokens from `sender` to `recipient` using the\nallowance mechanism. `amount` is then deducted from the caller's\nallowance.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
                  },
                  "id": 14062,
                  "name": "StructuredDocumentation",
                  "src": "1825:296:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "sender",
                        "overrides": null,
                        "scope": 14073,
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
                          "id": 14063,
                          "name": "ElementaryTypeName",
                          "src": "2148:7:47"
                        }
                      ],
                      "id": 14064,
                      "name": "VariableDeclaration",
                      "src": "2148:14:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "recipient",
                        "overrides": null,
                        "scope": 14073,
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
                          "id": 14065,
                          "name": "ElementaryTypeName",
                          "src": "2164:7:47"
                        }
                      ],
                      "id": 14066,
                      "name": "VariableDeclaration",
                      "src": "2164:17:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "amount",
                        "overrides": null,
                        "scope": 14073,
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
                          "id": 14067,
                          "name": "ElementaryTypeName",
                          "src": "2183:7:47"
                        }
                      ],
                      "id": 14068,
                      "name": "VariableDeclaration",
                      "src": "2183:14:47"
                    }
                  ],
                  "id": 14069,
                  "name": "ParameterList",
                  "src": "2147:51:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "",
                        "overrides": null,
                        "scope": 14073,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "bool",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 14070,
                          "name": "ElementaryTypeName",
                          "src": "2217:4:47"
                        }
                      ],
                      "id": 14071,
                      "name": "VariableDeclaration",
                      "src": "2217:4:47"
                    }
                  ],
                  "id": 14072,
                  "name": "ParameterList",
                  "src": "2216:6:47"
                }
              ],
              "id": 14073,
              "name": "FunctionDefinition",
              "src": "2126:97:47"
            },
            {
              "attributes": {
                "anonymous": false,
                "name": "Transfer"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Emitted when `value` tokens are moved from one account (`from`) to\nanother (`to`).\n     * Note that `value` may be zero."
                  },
                  "id": 14074,
                  "name": "StructuredDocumentation",
                  "src": "2229:158:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "from",
                        "overrides": null,
                        "scope": 14082,
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
                          "id": 14075,
                          "name": "ElementaryTypeName",
                          "src": "2407:7:47"
                        }
                      ],
                      "id": 14076,
                      "name": "VariableDeclaration",
                      "src": "2407:20:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "to",
                        "overrides": null,
                        "scope": 14082,
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
                          "id": 14077,
                          "name": "ElementaryTypeName",
                          "src": "2429:7:47"
                        }
                      ],
                      "id": 14078,
                      "name": "VariableDeclaration",
                      "src": "2429:18:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "value",
                        "overrides": null,
                        "scope": 14082,
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
                          "id": 14079,
                          "name": "ElementaryTypeName",
                          "src": "2449:7:47"
                        }
                      ],
                      "id": 14080,
                      "name": "VariableDeclaration",
                      "src": "2449:13:47"
                    }
                  ],
                  "id": 14081,
                  "name": "ParameterList",
                  "src": "2406:57:47"
                }
              ],
              "id": 14082,
              "name": "EventDefinition",
              "src": "2392:72:47"
            },
            {
              "attributes": {
                "anonymous": false,
                "name": "Approval"
              },
              "children": [
                {
                  "attributes": {
                    "text": "@dev Emitted when the allowance of a `spender` for an `owner` is set by\na call to {approve}. `value` is the new allowance."
                  },
                  "id": 14083,
                  "name": "StructuredDocumentation",
                  "src": "2470:148:47"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "owner",
                        "overrides": null,
                        "scope": 14091,
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
                          "id": 14084,
                          "name": "ElementaryTypeName",
                          "src": "2638:7:47"
                        }
                      ],
                      "id": 14085,
                      "name": "VariableDeclaration",
                      "src": "2638:21:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "spender",
                        "overrides": null,
                        "scope": 14091,
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
                          "id": 14086,
                          "name": "ElementaryTypeName",
                          "src": "2661:7:47"
                        }
                      ],
                      "id": 14087,
                      "name": "VariableDeclaration",
                      "src": "2661:23:47"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "value",
                        "overrides": null,
                        "scope": 14091,
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
                          "id": 14088,
                          "name": "ElementaryTypeName",
                          "src": "2686:7:47"
                        }
                      ],
                      "id": 14089,
                      "name": "VariableDeclaration",
                      "src": "2686:13:47"
                    }
                  ],
                  "id": 14090,
                  "name": "ParameterList",
                  "src": "2637:63:47"
                }
              ],
              "id": 14091,
              "name": "EventDefinition",
              "src": "2623:78:47"
            }
          ],
          "id": 14092,
          "name": "ContractDefinition",
          "src": "137:2566:47"
        }
      ],
      "id": 14093,
      "name": "SourceUnit",
      "src": "33:2671:47"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.5+commit.f956cc89.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.3.4",
    "updatedAt": "2021-07-22T21:42:32.387Z",
    "devdoc": {
      "details": "Interface of the ERC20 standard as defined in the EIP.",
      "methods": {
        "allowance(address,address)": {
          "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called."
        },
        "approve(address,uint256)": {
          "details": "Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event."
        },
        "balanceOf(address)": {
          "details": "Returns the amount of tokens owned by `account`."
        },
        "totalSupply()": {
          "details": "Returns the amount of tokens in existence."
        },
        "transfer(address,uint256)": {
          "details": "Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event."
        },
        "transferFrom(address,address,uint256)": {
          "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event."
        }
      }
    },
    "userdoc": {
      "methods": {}
    }
  }