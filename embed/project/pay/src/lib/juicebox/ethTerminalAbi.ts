export const jbethPaymentTerminalABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      { name: "_baseWeightCurrency", internalType: "uint256", type: "uint256" },
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
        name: "_directory",
        internalType: "contract IJBDirectory",
        type: "address",
      },
      {
        name: "_splitsStore",
        internalType: "contract IJBSplitsStore",
        type: "address",
      },
      { name: "_prices", internalType: "contract IJBPrices", type: "address" },
      {
        name: "_store",
        internalType: "contract IJBSingleTokenPaymentTerminalStore",
        type: "address",
      },
      { name: "_owner", internalType: "address", type: "address" },
    ],
  },
  { type: "error", inputs: [], name: "FEE_TOO_HIGH" },
  { type: "error", inputs: [], name: "INADEQUATE_DISTRIBUTION_AMOUNT" },
  { type: "error", inputs: [], name: "INADEQUATE_RECLAIM_AMOUNT" },
  { type: "error", inputs: [], name: "INADEQUATE_TOKEN_COUNT" },
  { type: "error", inputs: [], name: "NO_MSG_VALUE_ALLOWED" },
  { type: "error", inputs: [], name: "PAY_TO_ZERO_ADDRESS" },
  {
    type: "error",
    inputs: [
      { name: "prod1", internalType: "uint256", type: "uint256" },
      { name: "denominator", internalType: "uint256", type: "uint256" },
    ],
    name: "PRBMath__MulDivOverflow",
  },
  { type: "error", inputs: [], name: "PROJECT_TERMINAL_MISMATCH" },
  { type: "error", inputs: [], name: "REDEEM_TO_ZERO_ADDRESS" },
  { type: "error", inputs: [], name: "TERMINAL_IN_SPLIT_ZERO_ADDRESS" },
  { type: "error", inputs: [], name: "TERMINAL_TOKENS_INCOMPATIBLE" },
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
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "refundedFees",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "memo", internalType: "string", type: "string", indexed: false },
      {
        name: "metadata",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AddToBalance",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "delegate",
        internalType: "contract IJBPayDelegate",
        type: "address",
        indexed: true,
      },
      {
        name: "data",
        internalType: "struct JBDidPayData",
        type: "tuple",
        components: [
          { name: "payer", internalType: "address", type: "address" },
          { name: "projectId", internalType: "uint256", type: "uint256" },
          {
            name: "currentFundingCycleConfiguration",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "amount",
            internalType: "struct JBTokenAmount",
            type: "tuple",
            components: [
              { name: "token", internalType: "address", type: "address" },
              { name: "value", internalType: "uint256", type: "uint256" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "currency", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "forwardedAmount",
            internalType: "struct JBTokenAmount",
            type: "tuple",
            components: [
              { name: "token", internalType: "address", type: "address" },
              { name: "value", internalType: "uint256", type: "uint256" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "currency", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "projectTokenCount",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "beneficiary", internalType: "address", type: "address" },
          { name: "preferClaimedTokens", internalType: "bool", type: "bool" },
          { name: "memo", internalType: "string", type: "string" },
          { name: "metadata", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "delegatedAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "DelegateDidPay",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "delegate",
        internalType: "contract IJBRedemptionDelegate",
        type: "address",
        indexed: true,
      },
      {
        name: "data",
        internalType: "struct JBDidRedeemData",
        type: "tuple",
        components: [
          { name: "holder", internalType: "address", type: "address" },
          { name: "projectId", internalType: "uint256", type: "uint256" },
          {
            name: "currentFundingCycleConfiguration",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "projectTokenCount",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "reclaimedAmount",
            internalType: "struct JBTokenAmount",
            type: "tuple",
            components: [
              { name: "token", internalType: "address", type: "address" },
              { name: "value", internalType: "uint256", type: "uint256" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "currency", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "forwardedAmount",
            internalType: "struct JBTokenAmount",
            type: "tuple",
            components: [
              { name: "token", internalType: "address", type: "address" },
              { name: "value", internalType: "uint256", type: "uint256" },
              { name: "decimals", internalType: "uint256", type: "uint256" },
              { name: "currency", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "beneficiary",
            internalType: "address payable",
            type: "address",
          },
          { name: "memo", internalType: "string", type: "string" },
          { name: "metadata", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "delegatedAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "DelegateDidRedeem",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "fundingCycleConfiguration",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "fundingCycleNumber",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "beneficiary",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "distributedAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "fee", internalType: "uint256", type: "uint256", indexed: false },
      {
        name: "beneficiaryDistributionAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "memo", internalType: "string", type: "string", indexed: false },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "DistributePayouts",
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
        name: "domain",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "group",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "split",
        internalType: "struct JBSplit",
        type: "tuple",
        components: [
          { name: "preferClaimed", internalType: "bool", type: "bool" },
          { name: "preferAddToBalance", internalType: "bool", type: "bool" },
          { name: "percent", internalType: "uint256", type: "uint256" },
          { name: "projectId", internalType: "uint256", type: "uint256" },
          {
            name: "beneficiary",
            internalType: "address payable",
            type: "address",
          },
          { name: "lockedUntil", internalType: "uint256", type: "uint256" },
          {
            name: "allocator",
            internalType: "contract IJBSplitAllocator",
            type: "address",
          },
        ],
        indexed: false,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "DistributeToPayoutSplit",
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
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "fee", internalType: "uint256", type: "uint256", indexed: true },
      {
        name: "feeDiscount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "beneficiary",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "HoldFee",
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
        name: "to",
        internalType: "contract IJBPaymentTerminal",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Migrate",
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
        name: "fundingCycleConfiguration",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "fundingCycleNumber",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "payer",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "beneficiary",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "beneficiaryTokenCount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "memo", internalType: "string", type: "string", indexed: false },
      {
        name: "metadata",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Pay",
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
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "wasHeld", internalType: "bool", type: "bool", indexed: true },
      {
        name: "beneficiary",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "ProcessFee",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "fundingCycleConfiguration",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "fundingCycleNumber",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "holder",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "beneficiary",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "tokenCount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "reclaimedAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "memo", internalType: "string", type: "string", indexed: false },
      {
        name: "metadata",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "RedeemTokens",
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
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "refundedFees",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "leftoverAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "RefundHeldFees",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "fee", internalType: "uint256", type: "uint256", indexed: false },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "SetFee",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "feeGauge",
        internalType: "contract IJBFeeGauge",
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
    name: "SetFeeGauge",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addrs",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "flag", internalType: "bool", type: "bool", indexed: true },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "SetFeelessAddress",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "fundingCycleConfiguration",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "fundingCycleNumber",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "projectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "beneficiary",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "distributedAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "netDistributedamount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "memo", internalType: "string", type: "string", indexed: false },
      {
        name: "caller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "UseAllowance",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "_token", internalType: "address", type: "address" },
      { name: "_projectId", internalType: "uint256", type: "uint256" },
    ],
    name: "acceptsToken",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_amount", internalType: "uint256", type: "uint256" },
      { name: "_token", internalType: "address", type: "address" },
      { name: "_memo", internalType: "string", type: "string" },
      { name: "_metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "addToBalanceOf",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "baseWeightCurrency",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "currency",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "_token", internalType: "address", type: "address" }],
    name: "currencyForToken",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "_projectId", internalType: "uint256", type: "uint256" }],
    name: "currentEthOverflowOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "_token", internalType: "address", type: "address" }],
    name: "decimalsForToken",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "directory",
    outputs: [
      { name: "", internalType: "contract IJBDirectory", type: "address" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_amount", internalType: "uint256", type: "uint256" },
      { name: "_currency", internalType: "uint256", type: "uint256" },
      { name: "_token", internalType: "address", type: "address" },
      { name: "_minReturnedTokens", internalType: "uint256", type: "uint256" },
      { name: "_memo", internalType: "string", type: "string" },
    ],
    name: "distributePayoutsOf",
    outputs: [
      {
        name: "netLeftoverDistributionAmount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "fee",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "feeGauge",
    outputs: [
      { name: "", internalType: "contract IJBFeeGauge", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "_projectId", internalType: "uint256", type: "uint256" }],
    name: "heldFeesOf",
    outputs: [
      {
        name: "",
        internalType: "struct JBFee[]",
        type: "tuple[]",
        components: [
          { name: "amount", internalType: "uint256", type: "uint256" },
          { name: "fee", internalType: "uint32", type: "uint32" },
          { name: "feeDiscount", internalType: "uint32", type: "uint32" },
          { name: "beneficiary", internalType: "address", type: "address" },
        ],
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "isFeelessAddress",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      {
        name: "_to",
        internalType: "contract IJBPaymentTerminal",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
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
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_amount", internalType: "uint256", type: "uint256" },
      { name: "_token", internalType: "address", type: "address" },
      { name: "_beneficiary", internalType: "address", type: "address" },
      { name: "_minReturnedTokens", internalType: "uint256", type: "uint256" },
      { name: "_preferClaimedTokens", internalType: "bool", type: "bool" },
      { name: "_memo", internalType: "string", type: "string" },
      { name: "_metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "pay",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "payoutSplitsGroup",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "prices",
    outputs: [
      { name: "", internalType: "contract IJBPrices", type: "address" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "_projectId", internalType: "uint256", type: "uint256" }],
    name: "processFees",
    outputs: [],
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
    inputs: [
      { name: "_holder", internalType: "address", type: "address" },
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_tokenCount", internalType: "uint256", type: "uint256" },
      { name: "_token", internalType: "address", type: "address" },
      { name: "_minReturnedTokens", internalType: "uint256", type: "uint256" },
      {
        name: "_beneficiary",
        internalType: "address payable",
        type: "address",
      },
      { name: "_memo", internalType: "string", type: "string" },
      { name: "_metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "redeemTokensOf",
    outputs: [
      { name: "reclaimAmount", internalType: "uint256", type: "uint256" },
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
    inputs: [{ name: "_fee", internalType: "uint256", type: "uint256" }],
    name: "setFee",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      {
        name: "_feeGauge",
        internalType: "contract IJBFeeGauge",
        type: "address",
      },
    ],
    name: "setFeeGauge",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_address", internalType: "address", type: "address" },
      { name: "_flag", internalType: "bool", type: "bool" },
    ],
    name: "setFeelessAddress",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "splitsStore",
    outputs: [
      { name: "", internalType: "contract IJBSplitsStore", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "store",
    outputs: [
      {
        name: "",
        internalType: "contract IJBSingleTokenPaymentTerminalStore",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "_interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "token",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "_projectId", internalType: "uint256", type: "uint256" },
      { name: "_amount", internalType: "uint256", type: "uint256" },
      { name: "_currency", internalType: "uint256", type: "uint256" },
      { name: "_token", internalType: "address", type: "address" },
      { name: "_minReturnedTokens", internalType: "uint256", type: "uint256" },
      {
        name: "_beneficiary",
        internalType: "address payable",
        type: "address",
      },
      { name: "_memo", internalType: "string", type: "string" },
    ],
    name: "useAllowanceOf",
    outputs: [
      {
        name: "netDistributedAmount",
        internalType: "uint256",
        type: "uint256",
      },
    ],
  },
] as const;
