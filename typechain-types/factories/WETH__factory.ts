/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETH, WETHInterface } from "../WETH";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f57726170706564204574686572000000000000000000000000000000000000008152506040518060400160405280600481526020017f5745544800000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620001a6565b508060049080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611e2880620002cb6000396000f3fe6080604052600436106100f35760003560e01c806370a082311161008a578063a457c2d711610059578063a457c2d71461030d578063a9059cbb1461034a578063dd62ed3e14610387578063f2fde38b146103c4576100f3565b806370a0823114610263578063715018a6146102a05780638da5cb5b146102b757806395d89b41146102e2576100f3565b806323b872dd116100c657806323b872dd14610195578063313ce567146101d257806339509351146101fd57806342966c681461023a576100f3565b806306fdde03146100f8578063095ea7b3146101235780631249c58b1461016057806318160ddd1461016a575b600080fd5b34801561010457600080fd5b5061010d6103ed565b60405161011a91906116b5565b60405180910390f35b34801561012f57600080fd5b5061014a60048036038101906101459190611401565b61047f565b604051610157919061169a565b60405180910390f35b61016861049d565b005b34801561017657600080fd5b5061017f6104a9565b60405161018c9190611857565b60405180910390f35b3480156101a157600080fd5b506101bc60048036038101906101b791906113b2565b6104b3565b6040516101c9919061169a565b60405180910390f35b3480156101de57600080fd5b506101e76105ab565b6040516101f49190611872565b60405180910390f35b34801561020957600080fd5b50610224600480360381019061021f9190611401565b6105b4565b604051610231919061169a565b60405180910390f35b34801561024657600080fd5b50610261600480360381019061025c919061143d565b610660565b005b34801561026f57600080fd5b5061028a6004803603810190610285919061134d565b6106b4565b6040516102979190611857565b60405180910390f35b3480156102ac57600080fd5b506102b56106fc565b005b3480156102c357600080fd5b506102cc610784565b6040516102d9919061167f565b60405180910390f35b3480156102ee57600080fd5b506102f76107ae565b60405161030491906116b5565b60405180910390f35b34801561031957600080fd5b50610334600480360381019061032f9190611401565b610840565b604051610341919061169a565b60405180910390f35b34801561035657600080fd5b50610371600480360381019061036c9190611401565b61092b565b60405161037e919061169a565b60405180910390f35b34801561039357600080fd5b506103ae60048036038101906103a99190611376565b610949565b6040516103bb9190611857565b60405180910390f35b3480156103d057600080fd5b506103eb60048036038101906103e6919061134d565b6109d0565b005b6060600380546103fc906119bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610428906119bb565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b600061049361048c610ac8565b8484610ad0565b6001905092915050565b6104a73334610c9b565b565b6000600254905090565b60006104c0848484610dfb565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061050b610ac8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561058b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058290611777565b60405180910390fd5b61059f85610597610ac8565b858403610ad0565b60019150509392505050565b60006012905090565b60006106566105c1610ac8565b8484600160006105cf610ac8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461065191906118a9565b610ad0565b6001905092915050565b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106a6573d6000803e3d6000fd5b506106b1338261107c565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610704610ac8565b73ffffffffffffffffffffffffffffffffffffffff16610722610784565b73ffffffffffffffffffffffffffffffffffffffff1614610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076f90611797565b60405180910390fd5b6107826000611253565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546107bd906119bb565b80601f01602080910402602001604051908101604052809291908181526020018280546107e9906119bb565b80156108365780601f1061080b57610100808354040283529160200191610836565b820191906000526020600020905b81548152906001019060200180831161081957829003601f168201915b5050505050905090565b6000806001600061084f610ac8565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561090c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090390611817565b60405180910390fd5b610920610917610ac8565b85858403610ad0565b600191505092915050565b600061093f610938610ac8565b8484610dfb565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6109d8610ac8565b73ffffffffffffffffffffffffffffffffffffffff166109f6610784565b73ffffffffffffffffffffffffffffffffffffffff1614610a4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4390611797565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610abc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab390611717565b60405180910390fd5b610ac581611253565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b37906117f7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba790611737565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c8e9190611857565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0290611837565b60405180910390fd5b610d1760008383611319565b8060026000828254610d2991906118a9565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d7e91906118a9565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610de39190611857565b60405180910390a3610df76000838361131e565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e62906117d7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610edb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed2906116d7565b60405180910390fd5b610ee6838383611319565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6390611757565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fff91906118a9565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110639190611857565b60405180910390a361107684848461131e565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e3906117b7565b60405180910390fd5b6110f882600083611319565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561117e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611175906116f7565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546111d591906118ff565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161123a9190611857565b60405180910390a361124e8360008461131e565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b60008135905061133281611dc4565b92915050565b60008135905061134781611ddb565b92915050565b60006020828403121561135f57600080fd5b600061136d84828501611323565b91505092915050565b6000806040838503121561138957600080fd5b600061139785828601611323565b92505060206113a885828601611323565b9150509250929050565b6000806000606084860312156113c757600080fd5b60006113d586828701611323565b93505060206113e686828701611323565b92505060406113f786828701611338565b9150509250925092565b6000806040838503121561141457600080fd5b600061142285828601611323565b925050602061143385828601611338565b9150509250929050565b60006020828403121561144f57600080fd5b600061145d84828501611338565b91505092915050565b61146f81611933565b82525050565b61147e81611945565b82525050565b600061148f8261188d565b6114998185611898565b93506114a9818560208601611988565b6114b281611a4b565b840191505092915050565b60006114ca602383611898565b91506114d582611a5c565b604082019050919050565b60006114ed602283611898565b91506114f882611aab565b604082019050919050565b6000611510602683611898565b915061151b82611afa565b604082019050919050565b6000611533602283611898565b915061153e82611b49565b604082019050919050565b6000611556602683611898565b915061156182611b98565b604082019050919050565b6000611579602883611898565b915061158482611be7565b604082019050919050565b600061159c602083611898565b91506115a782611c36565b602082019050919050565b60006115bf602183611898565b91506115ca82611c5f565b604082019050919050565b60006115e2602583611898565b91506115ed82611cae565b604082019050919050565b6000611605602483611898565b915061161082611cfd565b604082019050919050565b6000611628602583611898565b915061163382611d4c565b604082019050919050565b600061164b601f83611898565b915061165682611d9b565b602082019050919050565b61166a81611971565b82525050565b6116798161197b565b82525050565b60006020820190506116946000830184611466565b92915050565b60006020820190506116af6000830184611475565b92915050565b600060208201905081810360008301526116cf8184611484565b905092915050565b600060208201905081810360008301526116f0816114bd565b9050919050565b60006020820190508181036000830152611710816114e0565b9050919050565b6000602082019050818103600083015261173081611503565b9050919050565b6000602082019050818103600083015261175081611526565b9050919050565b6000602082019050818103600083015261177081611549565b9050919050565b600060208201905081810360008301526117908161156c565b9050919050565b600060208201905081810360008301526117b08161158f565b9050919050565b600060208201905081810360008301526117d0816115b2565b9050919050565b600060208201905081810360008301526117f0816115d5565b9050919050565b60006020820190508181036000830152611810816115f8565b9050919050565b600060208201905081810360008301526118308161161b565b9050919050565b600060208201905081810360008301526118508161163e565b9050919050565b600060208201905061186c6000830184611661565b92915050565b60006020820190506118876000830184611670565b92915050565b600081519050919050565b600082825260208201905092915050565b60006118b482611971565b91506118bf83611971565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118f4576118f36119ed565b5b828201905092915050565b600061190a82611971565b915061191583611971565b925082821015611928576119276119ed565b5b828203905092915050565b600061193e82611951565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156119a657808201518184015260208101905061198b565b838111156119b5576000848401525b50505050565b600060028204905060018216806119d357607f821691505b602082108114156119e7576119e6611a1c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611dcd81611933565b8114611dd857600080fd5b50565b611de481611971565b8114611def57600080fd5b5056fea264697066735822122006ae5912b2cef13705a1243600bd1ec8fd6aeabae383abf1a085a75baac7029064736f6c63430008020033";

type WETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETH__factory extends ContractFactory {
  constructor(...args: WETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WETH> {
    return super.deploy(overrides || {}) as Promise<WETH>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WETH {
    return super.attach(address) as WETH;
  }
  connect(signer: Signer): WETH__factory {
    return super.connect(signer) as WETH__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHInterface {
    return new utils.Interface(_abi) as WETHInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WETH {
    return new Contract(address, _abi, signerOrProvider) as WETH;
  }
}
