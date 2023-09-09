export const jbDirectoryABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "_operatorStore",
        internalType: "contract IJBOperatorStore",
        type: "address",
      },
      {
        name: "_projects",
        internalType: "contract IJBProjects",
        type: "address",
      },
      {
        name: "_fundingCycleStore",
        internalType: "contract IJBFundingCycleStore",
        type: "address",
      },
      { name: "_owner", internalType: "address", type: "address" },
    ],
  },
  { type: "error", inputs: [], name: "DUPLICATE_TERMINALS" },
  { type: "error", inputs: [], name: "INVALID_PROJECT_ID_IN_DIRECTORY" },
  { type: "error", inputs: [], name: "SET_CONTROLLER_NOT_ALLOWED" },
  { type: "error", inputs: [], name: "SET_TERMINALS_NOT_ALLOWED" },
  { type: "error", inputs: [], name: "TOKEN_NOT_ACCEPTED" },
  { type: "error", inputs: [], name: "UNAUTHORIZED" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "terminal",
        internalType: "contract IJBPaymentTerminal",
        type: "address",
        indexed: true,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AddTerminal",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "controller",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "SetController",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "addr", internalType: "address", type: "address", indexed: true },
      { name: "flag", internalType: "bool", type: "bool", indexed: true },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "SetIsAllowedToSetFirstController",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "token",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "terminal",
        internalType: "contract IJBPaymentTerminal",
        type: "address",
        indexed: true,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "SetPrimaryTerminal",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "terminals",
        internalType: "contract IJBPaymentTerminal[]",
        type: "address[]",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "SetTerminals",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "controllerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "fundingCycleStore",
    outputs: [
      {
        name: "",
        internalType: "contract IJBFundingCycleStore",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "isAllowedToSetFirstController",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      {
        name: "_terminal",
        internalType: "contract IJBPaymentTerminal",
        type: "address",
      },
    ],
    name: "isTerminalOf",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "operatorStore",
    outputs: [
      { name: "", internalType: "contract IJBOperatorStore", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_token", internalType: "address", type: "address" },
    ],
    name: "primaryTerminalOf",
    outputs: [
      {
        name: "",
        internalType: "contract IJBPaymentTerminal",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "projects",
    outputs: [
      { name: "", internalType: "contract IJBProjects", type: "address" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_controller", internalType: "address", type: "address" },
    ],
    name: "setControllerOf",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_address", internalType: "address", type: "address" },
      { name: "_flag", internalType: "bool", type: "bool" },
    ],
    name: "setIsAllowedToSetFirstController",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_token", internalType: "address", type: "address" },
      {
        name: "_terminal",
        internalType: "contract IJBPaymentTerminal",
        type: "address",
      },
    ],
    name: "setPrimaryTerminalOf",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      {
        name: "_terminals",
        internalType: "contract IJBPaymentTerminal[]",
        type: "address[]",
      },
    ],
    name: "setTerminalsOf",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "_projectId", internalType: "uint256", type: "uint256" }],
    name: "terminalsOf",
    outputs: [
      {
        name: "",
        internalType: "contract IJBPaymentTerminal[]",
        type: "address[]",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
  },
] as const;
