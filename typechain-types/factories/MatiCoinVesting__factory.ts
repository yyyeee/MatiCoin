/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MatiCoinVesting,
  MatiCoinVestingInterface,
} from "../MatiCoinVesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "matiCoinAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "availableVestingBalance",
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
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "totalVestingBalance",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "vest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014463803806200144683398181016040528101906200003791906200018c565b620000576200004b620000a960201b60201c565b620000b160201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062278d006002819055505062000206565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200018681620001ec565b92915050565b6000602082840312156200019f57600080fd5b6000620001af8482850162000175565b91505092915050565b6000620001c582620001cc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001f781620001b8565b81146200020357600080fd5b50565b61123080620002166000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063419d0ed11161005b578063419d0ed1146100d8578063715018a6146100f65780638da5cb5b14610100578063f2fde38b1461011e5761007d565b80630e421000146100825780632797c6c8146100a0578063379607f5146100bc575b600080fd5b61008a61013a565b6040516100979190610e1a565b60405180910390f35b6100ba60048036038101906100b59190610b61565b6101b1565b005b6100d660048036038101906100d19190610bc6565b61045b565b005b6100e06106d7565b6040516100ed9190610e1a565b60405180910390f35b6100fe610765565b005b6101086107ed565b6040516101159190610cdf565b60405180910390f35b61013860048036038101906101339190610b38565b610816565b005b60006101ac600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820154815260200160028201548152505061090e565b905090565b6101b96109d5565b73ffffffffffffffffffffffffffffffffffffffff166101d76107ed565b73ffffffffffffffffffffffffffffffffffffffff161461022d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022490610dda565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561029d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029490610dba565b60405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414610322576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031990610d7a565b60405180910390fd5b60405180606001604052808281526020014281526020016000815250600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020155905050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd6103e46107ed565b30846040518463ffffffff1660e01b815260040161040493929190610cfa565b602060405180830381600087803b15801561041e57600080fd5b505af1158015610432573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104569190610b9d565b505050565b6000811161049e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049590610d9a565b60405180910390fd5b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600061051582604051806060016040529081600082015481526020016001820154815260200160028201548152505061090e565b90508281101561055a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055190610dfa565b60405180910390fd5b600083836002015461056c9190610e46565b905082600001548114156105d957600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160009055600182016000905560028201600090555050610621565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33866040518363ffffffff1660e01b815260040161067e929190610d31565b602060405180830381600087803b15801561069857600080fd5b505af11580156106ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d09190610b9d565b5050505050565b600080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050905061075f816040015182600001516109dd90919063ffffffff16565b91505090565b61076d6109d5565b73ffffffffffffffffffffffffffffffffffffffff1661078b6107ed565b73ffffffffffffffffffffffffffffffffffffffff16146107e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d890610dda565b60405180910390fd5b6107eb60006109f3565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61081e6109d5565b73ffffffffffffffffffffffffffffffffffffffff1661083c6107ed565b73ffffffffffffffffffffffffffffffffffffffff1614610892576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088990610dda565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610902576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f990610d5a565b60405180910390fd5b61090b816109f3565b50565b60008082600001519050600081141561092b5760009150506109d0565b426109456002548560200151610ab790919063ffffffff16565b1161096d57610965836040015184600001516109dd90919063ffffffff16565b9150506109d0565b60006109ac60025461099e846109908860200151426109dd90919063ffffffff16565b610acd90919063ffffffff16565b610ae390919063ffffffff16565b905060006109c78560400151836109dd90919063ffffffff16565b90508093505050505b919050565b600033905090565b600081836109eb9190610f27565b905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008183610ac59190610e46565b905092915050565b60008183610adb9190610ecd565b905092915050565b60008183610af19190610e9c565b905092915050565b600081359050610b08816111b5565b92915050565b600081519050610b1d816111cc565b92915050565b600081359050610b32816111e3565b92915050565b600060208284031215610b4a57600080fd5b6000610b5884828501610af9565b91505092915050565b60008060408385031215610b7457600080fd5b6000610b8285828601610af9565b9250506020610b9385828601610b23565b9150509250929050565b600060208284031215610baf57600080fd5b6000610bbd84828501610b0e565b91505092915050565b600060208284031215610bd857600080fd5b6000610be684828501610b23565b91505092915050565b610bf881610f5b565b82525050565b6000610c0b602683610e35565b9150610c1682611001565b604082019050919050565b6000610c2e603e83610e35565b9150610c3982611050565b604082019050919050565b6000610c51602c83610e35565b9150610c5c8261109f565b604082019050919050565b6000610c74602983610e35565b9150610c7f826110ee565b604082019050919050565b6000610c97602083610e35565b9150610ca28261113d565b602082019050919050565b6000610cba602683610e35565b9150610cc582611166565b604082019050919050565b610cd981610f99565b82525050565b6000602082019050610cf46000830184610bef565b92915050565b6000606082019050610d0f6000830186610bef565b610d1c6020830185610bef565b610d296040830184610cd0565b949350505050565b6000604082019050610d466000830185610bef565b610d536020830184610cd0565b9392505050565b60006020820190508181036000830152610d7381610bfe565b9050919050565b60006020820190508181036000830152610d9381610c21565b9050919050565b60006020820190508181036000830152610db381610c44565b9050919050565b60006020820190508181036000830152610dd381610c67565b9050919050565b60006020820190508181036000830152610df381610c8a565b9050919050565b60006020820190508181036000830152610e1381610cad565b9050919050565b6000602082019050610e2f6000830184610cd0565b92915050565b600082825260208201905092915050565b6000610e5182610f99565b9150610e5c83610f99565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e9157610e90610fa3565b5b828201905092915050565b6000610ea782610f99565b9150610eb283610f99565b925082610ec257610ec1610fd2565b5b828204905092915050565b6000610ed882610f99565b9150610ee383610f99565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f1c57610f1b610fa3565b5b828202905092915050565b6000610f3282610f99565b9150610f3d83610f99565b925082821015610f5057610f4f610fa3565b5b828203905092915050565b6000610f6682610f79565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4d617469436f696e56657374696e673a2043616e6e6f74207665737420756e7460008201527f696c207265636569766572206861732076657374656420746f6b656e732e0000602082015250565b7f4d617469436f696e56657374696e673a203020746f6b656e732063616e6e6f7460008201527f20626520636c61696d65642e0000000000000000000000000000000000000000602082015250565b7f4d617469436f696e56657374696e673a2043616e6e6f74207665737420746f2060008201527f3020616464726573730000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4d617469436f696e56657374696e673a20546f6b656e73206e6f74206176616960008201527f6c61626c652e0000000000000000000000000000000000000000000000000000602082015250565b6111be81610f5b565b81146111c957600080fd5b50565b6111d581610f6d565b81146111e057600080fd5b50565b6111ec81610f99565b81146111f757600080fd5b5056fea264697066735822122030c627559b798abb991938054eda39049fe6a8ffd0e4ee17c8da1e5923487e8564736f6c63430008020033";

type MatiCoinVestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MatiCoinVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MatiCoinVesting__factory extends ContractFactory {
  constructor(...args: MatiCoinVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    matiCoinAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MatiCoinVesting> {
    return super.deploy(
      matiCoinAddress,
      overrides || {}
    ) as Promise<MatiCoinVesting>;
  }
  getDeployTransaction(
    matiCoinAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(matiCoinAddress, overrides || {});
  }
  attach(address: string): MatiCoinVesting {
    return super.attach(address) as MatiCoinVesting;
  }
  connect(signer: Signer): MatiCoinVesting__factory {
    return super.connect(signer) as MatiCoinVesting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MatiCoinVestingInterface {
    return new utils.Interface(_abi) as MatiCoinVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MatiCoinVesting {
    return new Contract(address, _abi, signerOrProvider) as MatiCoinVesting;
  }
}
