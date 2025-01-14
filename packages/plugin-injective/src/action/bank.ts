import { createGenericAction } from "./base";
import * as BankTemplates from "@injective/template/bank";
import * as BankExamples from "@injective/examples/bank";

// Query Actions
export const GetBankModuleParamsAction = createGenericAction({
    name: "GET_BANK_MODULE_PARAMS",
    description: "Fetches the bank module parameters",
    template: BankTemplates.getBankModuleParamsTemplate,
    examples: BankExamples.getBankModuleParamsExample,
    functionName: "getBankModuleParams",
    similes: ["view bank params", "get bank parameters", "check bank settings"],
    validateContent: () => true,
});

export const GetBankBalanceAction = createGenericAction({
    name: "GET_BANK_BALANCE",
    description: "Fetches the balance of a specific account",
    template: BankTemplates.getBankBalanceTemplate,
    examples: BankExamples.getBankBalanceExample,
    functionName: "getBankBalance",
    similes: ["check balance", "view balance", "get token balance"],
    validateContent: () => true,
});

export const GetBankBalancesAction = createGenericAction({
    name: "GET_BANK_BALANCES",
    description: "Fetches all balances for the current account",
    template: BankTemplates.getBankBalancesTemplate,
    examples: BankExamples.getBankBalancesExample,
    functionName: "getBankBalances",
    similes: ["check all balances", "view all balances", "list balances"],
    validateContent: () => true,
});

export const GetTotalSupplyAction = createGenericAction({
    name: "GET_TOTAL_SUPPLY",
    description: "Fetches the total supply of all denominations",
    template: BankTemplates.getTotalSupplyTemplate,
    examples: BankExamples.getTotalSupplyExample,
    functionName: "getTotalSupply",
    similes: ["view total supply", "check total supply", "get supply"],
    validateContent: () => true,
});

export const GetAllTotalSupplyAction = createGenericAction({
    name: "GET_ALL_TOTAL_SUPPLY",
    description: "Fetches the total supply for all denominations",
    template: BankTemplates.getAllTotalSupplyTemplate,
    examples: BankExamples.getAllTotalSupplyExample,
    functionName: "getAllTotalSupply",
    similes: ["view all supplies", "check all supplies", "list total supplies"],
    validateContent: () => true,
});

export const GetSupplyOfAction = createGenericAction({
    name: "GET_SUPPLY_OF",
    description: "Fetches the supply of a specific denomination",
    template: BankTemplates.getSupplyOfTemplate,
    examples: BankExamples.getSupplyOfExample,
    functionName: "getSupplyOf",
    similes: ["check denom supply", "view token supply", "get token total"],
    validateContent: () => true,
});

export const GetDenomsMetadataAction = createGenericAction({
    name: "GET_DENOMS_METADATA",
    description: "Fetches metadata for all denominations",
    template: BankTemplates.getDenomsMetadataTemplate,
    examples: BankExamples.getDenomsMetadataExample,
    functionName: "getDenomsMetadata",
    similes: ["view all denoms", "list denominations", "check token metadata"],
    validateContent: () => true,
});

export const GetDenomMetadataAction = createGenericAction({
    name: "GET_DENOM_METADATA",
    description: "Fetches metadata for a specific denomination",
    template: BankTemplates.getDenomMetadataTemplate,
    examples: BankExamples.getDenomMetadataExample,
    functionName: "getDenomMetadata",
    similes: ["view denom info", "check token metadata", "get token info"],
    validateContent: () => true,
});

export const GetDenomOwnersAction = createGenericAction({
    name: "GET_DENOM_OWNERS",
    description: "Fetches the owners of a specific denomination",
    template: BankTemplates.getDenomOwnersTemplate,
    examples: BankExamples.getDenomOwnersExample,
    functionName: "getDenomOwners",
    similes: ["view token holders", "list denom owners", "check token owners"],
    validateContent: () => true,
});

// Transaction Actions
export const MsgSendAction = createGenericAction({
    name: "MSG_SEND",
    description: "Sends tokens from one account to another",
    template: BankTemplates.msgSendTemplate,
    examples: BankExamples.msgSendExample,
    functionName: "msgSend",
    similes: ["send tokens", "transfer funds", "send money"],
    validateContent: () => true,
});

export const MsgMultiSendAction = createGenericAction({
    name: "MSG_MULTI_SEND",
    description: "Sends tokens from multiple senders to multiple receivers",
    template: BankTemplates.msgMultiSendTemplate,
    examples: BankExamples.msgMultiSendExample,
    functionName: "msgMultiSend",
    similes: ["batch transfer", "multi send", "send to many"],
    validateContent: () => true,
});

export const BankActions = [
    GetBankModuleParamsAction,
    GetBankBalanceAction,
    GetBankBalancesAction,
    GetTotalSupplyAction,
    GetAllTotalSupplyAction,
    GetSupplyOfAction,
    GetDenomsMetadataAction,
    GetDenomMetadataAction,
    GetDenomOwnersAction,
    MsgSendAction,
    MsgMultiSendAction,
];
