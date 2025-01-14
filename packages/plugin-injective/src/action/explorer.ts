// src/actions/explorer/explorer-actions.ts
import { createGenericAction } from "./base";
import * as ExplorerTemplates from "@injective/template/explorer";
import * as ExplorerExamples from "@injective/examples/explorer";

export const GetTxByHashAction = createGenericAction({
    name: "GET_TX_BY_HASH",
    description: "Fetches a transaction by its hash",
    template: ExplorerTemplates.getTxByHashTemplate,
    examples: ExplorerExamples.getTxByHashExample,
    functionName: "getTxByHash",
    similes: ["find transaction", "lookup tx", "search transaction"],
    validateContent: () => true,
});

export const GetAccountTxAction = createGenericAction({
    name: "GET_ACCOUNT_TX",
    description: "Fetches transactions for a specific account",
    template: ExplorerTemplates.getAccountTxTemplate,
    examples: ExplorerExamples.getAccountTxExample,
    functionName: "getAccountTx",
    similes: [
        "view account transactions",
        "get account tx",
        "list account transactions",
    ],
    validateContent: () => true,
});

export const GetExplorerValidatorAction = createGenericAction({
    name: "GET_EXPLORER_VALIDATOR",
    description: "Fetches details of a specific validator",
    template: ExplorerTemplates.getValidatorTemplate,
    examples: ExplorerExamples.getValidatorExample,
    functionName: "getValidator",
    similes: ["view validator", "check validator", "validator info"],
    validateContent: () => true,
});

export const GetValidatorUptimeAction = createGenericAction({
    name: "GET_VALIDATOR_UPTIME",
    description: "Fetches the uptime of a specific validator",
    template: ExplorerTemplates.getValidatorUptimeTemplate,
    examples: ExplorerExamples.getValidatorUptimeExample,
    functionName: "getValidatorUptime",
    similes: [
        "check validator uptime",
        "validator availability",
        "uptime stats",
    ],
    validateContent: () => true,
});

export const GetPeggyDepositTxsAction = createGenericAction({
    name: "GET_PEGGY_DEPOSIT_TXS",
    description: "Fetches Peggy deposit transactions",
    template: ExplorerTemplates.getPeggyDepositTxsTemplate,
    examples: ExplorerExamples.getPeggyDepositTxsExample,
    functionName: "getPeggyDepositTxs",
    similes: ["view peggy deposits", "check bridge deposits", "list deposits"],
    validateContent: () => true,
});

export const GetPeggyWithdrawalTxsAction = createGenericAction({
    name: "GET_PEGGY_WITHDRAWAL_TXS",
    description: "Fetches Peggy withdrawal transactions",
    template: ExplorerTemplates.getPeggyWithdrawalTxsTemplate,
    examples: ExplorerExamples.getPeggyWithdrawalTxsExample,
    functionName: "getPeggyWithdrawalTxs",
    similes: [
        "view peggy withdrawals",
        "check bridge withdrawals",
        "list withdrawals",
    ],
    validateContent: () => true,
});

export const GetBlocksAction = createGenericAction({
    name: "GET_BLOCKS",
    description: "Fetches a list of blocks based on provided parameters",
    template: ExplorerTemplates.getBlocksTemplate,
    examples: ExplorerExamples.getBlocksExample,
    functionName: "getBlocks",
    similes: ["view blocks", "list blocks", "get blockchain blocks"],
    validateContent: () => true,
});

export const GetBlockAction = createGenericAction({
    name: "GET_BLOCK",
    description: "Fetches details of a specific block by its ID",
    template: ExplorerTemplates.getBlockTemplate,
    examples: ExplorerExamples.getBlockExample,
    functionName: "getBlock",
    similes: ["view block", "get block details", "check block"],
    validateContent: () => true,
});

export const GetTxsAction = createGenericAction({
    name: "GET_TXS",
    description: "Fetches a list of transactions based on provided parameters",
    template: ExplorerTemplates.getTxsTemplate,
    examples: ExplorerExamples.getTxsExample,
    functionName: "getTxs",
    similes: ["view transactions", "list transactions", "get tx list"],
    validateContent: () => true,
});

export const GetIBCTransferTxsAction = createGenericAction({
    name: "GET_IBC_TRANSFER_TXS",
    description: "Fetches IBC transfer transactions",
    template: ExplorerTemplates.getIBCTransferTxsTemplate,
    examples: ExplorerExamples.getIBCTransferTxsExample,
    functionName: "getIBCTransferTxs",
    similes: ["view ibc transfers", "list ibc transactions", "check ibc tx"],
    validateContent: () => true,
});

export const GetExplorerStatsAction = createGenericAction({
    name: "GET_EXPLORER_STATS",
    description: "Fetches explorer statistics",
    template: ExplorerTemplates.getExplorerStatsTemplate,
    examples: ExplorerExamples.getExplorerStatsExample,
    functionName: "getExplorerStats",
    similes: ["view explorer stats", "get statistics", "check network stats"],
    validateContent: () => true,
});

// Export all actions as a group
export const ExplorerActions = [
    GetTxByHashAction,
    GetAccountTxAction,
    GetExplorerValidatorAction,
    GetValidatorUptimeAction,
    GetPeggyDepositTxsAction,
    GetPeggyWithdrawalTxsAction,
    GetBlocksAction,
    GetBlockAction,
    GetTxsAction,
    GetIBCTransferTxsAction,
    GetExplorerStatsAction,
];
