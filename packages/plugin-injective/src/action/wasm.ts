import { createGenericAction } from "./base";
import * as WasmTemplates from "@injective/template/wasm";
import * as WasmExamples from "@injective/examples/wasm";

// Contract Query Actions
export const GetContractAccountsBalanceAction = createGenericAction({
    name: "GET_CONTRACT_ACCOUNTS_BALANCE",
    description: "Fetches the balance of contract accounts",
    template: WasmTemplates.getContractAccountsBalanceTemplate,
    examples: WasmExamples.getContractAccountsBalanceExample,
    functionName: "getContractAccountsBalance",
    similes: [
        "view contract balances",
        "check contract funds",
        "get contract accounts",
    ],
    validateContent: () => true,
});

export const GetContractStateAction = createGenericAction({
    name: "GET_CONTRACT_STATE",
    description: "Fetches the state of a specific contract",
    template: WasmTemplates.getContractStateTemplate,
    examples: WasmExamples.getContractStateExample,
    functionName: "getContractState",
    similes: [
        "view contract state",
        "check contract status",
        "get contract data",
    ],
    validateContent: () => true,
});

export const GetContractInfoAction = createGenericAction({
    name: "GET_CONTRACT_INFO",
    description: "Fetches information about a specific contract",
    template: WasmTemplates.getContractInfoTemplate,
    examples: WasmExamples.getContractInfoExample,
    functionName: "getContractInfo",
    similes: [
        "view contract info",
        "contract details",
        "get contract metadata",
    ],
    validateContent: () => true,
});

export const GetContractHistoryAction = createGenericAction({
    name: "GET_CONTRACT_HISTORY",
    description: "Fetches the history of a specific contract",
    template: WasmTemplates.getContractHistoryTemplate,
    examples: WasmExamples.getContractHistoryExample,
    functionName: "getContractHistory",
    similes: [
        "view contract history",
        "contract timeline",
        "get contract changes",
    ],
    validateContent: () => true,
});

export const GetSmartContractStateAction = createGenericAction({
    name: "GET_SMART_CONTRACT_STATE",
    description: "Fetches the smart contract state based on a query",
    template: WasmTemplates.getSmartContractStateTemplate,
    examples: WasmExamples.getSmartContractStateExample,
    functionName: "getSmartContractState",
    similes: [
        "query contract state",
        "smart contract data",
        "get contract query",
    ],
    validateContent: () => true,
});

export const GetRawContractStateAction = createGenericAction({
    name: "GET_RAW_CONTRACT_STATE",
    description:
        "Fetches the raw state of a specific contract based on a query",
    template: WasmTemplates.getRawContractStateTemplate,
    examples: WasmExamples.getRawContractStateExample,
    functionName: "getRawContractState",
    similes: ["raw contract data", "contract raw state", "get contract raw"],
    validateContent: () => true,
});

// Code Query Actions
export const GetContractCodesAction = createGenericAction({
    name: "GET_CONTRACT_CODES",
    description: "Fetches all contract codes with optional pagination",
    template: WasmTemplates.getContractCodesTemplate,
    examples: WasmExamples.getContractCodesExample,
    functionName: "getContractCodes",
    similes: ["list contract codes", "view all codes", "get code list"],
    validateContent: () => true,
});

export const GetContractCodeAction = createGenericAction({
    name: "GET_CONTRACT_CODE",
    description: "Fetches a specific contract code by its ID",
    template: WasmTemplates.getContractCodeTemplate,
    examples: WasmExamples.getContractCodeExample,
    functionName: "getContractCode",
    similes: ["view code", "get code details", "check contract code"],
    validateContent: () => true,
});

export const GetContractCodeContractsAction = createGenericAction({
    name: "GET_CONTRACT_CODE_CONTRACTS",
    description: "Fetches contracts associated with a specific contract code",
    template: WasmTemplates.getContractCodeContractsTemplate,
    examples: WasmExamples.getContractCodeContractsExample,
    functionName: "getContractCodeContracts",
    similes: [
        "list code contracts",
        "view code instances",
        "get code deployments",
    ],
    validateContent: () => true,
});

// Message Actions
export const MsgStoreCodeAction = createGenericAction({
    name: "MSG_STORE_CODE",
    description: "Broadcasts a message to store new contract code",
    template: WasmTemplates.msgStoreCodeTemplate,
    examples: WasmExamples.msgStoreCodeExample,
    functionName: "msgStoreCode",
    similes: ["upload code", "store contract", "deploy code"],
    validateContent: () => true,
});

export const MsgUpdateAdminAction = createGenericAction({
    name: "MSG_UPDATE_ADMIN",
    description: "Broadcasts a message to update the admin of a contract",
    template: WasmTemplates.msgUpdateAdminTemplate,
    examples: WasmExamples.msgUpdateAdminExample,
    functionName: "msgUpdateAdmin",
    similes: ["change admin", "update contract admin", "set new admin"],
    validateContent: () => true,
});

export const MsgExecuteContractAction = createGenericAction({
    name: "MSG_EXECUTE_CONTRACT",
    description: "Broadcasts a message to execute a contract",
    template: WasmTemplates.msgExecuteContractTemplate,
    examples: WasmExamples.msgExecuteContractExample,
    functionName: "msgExecuteContract",
    similes: ["execute contract", "run contract", "call contract"],
    validateContent: () => true,
});

export const MsgMigrateContractAction = createGenericAction({
    name: "MSG_MIGRATE_CONTRACT",
    description:
        "Broadcasts a message to migrate a contract to a new code version",
    template: WasmTemplates.msgMigrateContractTemplate,
    examples: WasmExamples.msgMigrateContractExample,
    functionName: "msgMigrateContract",
    similes: ["migrate contract", "upgrade contract", "update contract code"],
    validateContent: () => true,
});

export const MsgInstantiateContractAction = createGenericAction({
    name: "MSG_INSTANTIATE_CONTRACT",
    description: "Broadcasts a message to instantiate a new contract",
    template: WasmTemplates.msgInstantiateContractTemplate,
    examples: WasmExamples.msgInstantiateContractExample,
    functionName: "msgInstantiateContract",
    similes: ["create contract", "deploy instance", "new contract"],
    validateContent: () => true,
});

export const MsgExecuteContractCompatAction = createGenericAction({
    name: "MSG_EXECUTE_CONTRACT_COMPAT",
    description:
        "Broadcasts a message to execute a contract using compatibility mode",
    template: WasmTemplates.msgExecuteContractCompatTemplate,
    examples: WasmExamples.msgExecuteContractCompatExample,
    functionName: "msgExecuteContractCompat",
    similes: ["execute compat", "run contract compat", "call contract compat"],
    validateContent: () => true,
});

export const MsgPrivilegedExecuteContractAction = createGenericAction({
    name: "MSG_PRIVILEGED_EXECUTE_CONTRACT",
    description: "Broadcasts a privileged message to execute a contract",
    template: WasmTemplates.msgPrivilegedExecuteContractTemplate,
    examples: WasmExamples.msgPrivilegedExecuteContractExample,
    functionName: "msgPrivilegedExecuteContract",
    similes: ["privileged execute", "admin contract call", "sudo contract"],
    validateContent: () => true,
});

// WasmX Query Actions
export const GetWasmxModuleParamsAction = createGenericAction({
    name: "GET_WASMX_MODULE_PARAMS",
    description: "Fetches the parameters of the WasmX module",
    template: WasmTemplates.getWasmxModuleParamsTemplate,
    examples: WasmExamples.getWasmxModuleParamsExample,
    functionName: "getWasmxModuleParams",
    similes: ["view wasmx params", "get wasmx settings", "wasmx parameters"],
    validateContent: () => true,
});

export const GetWasmxModuleStateAction = createGenericAction({
    name: "GET_WASMX_MODULE_STATE",
    description: "Fetches the current state of the WasmX module",
    template: WasmTemplates.getWasmxModuleStateTemplate,
    examples: WasmExamples.getWasmxModuleStateExample,
    functionName: "getWasmxModuleState",
    similes: ["view wasmx state", "get wasmx status", "wasmx module info"],
    validateContent: () => true,
});

// Export all actions as a group
export const WasmActions = [
    // Contract Query Actions
    GetContractAccountsBalanceAction,
    GetContractStateAction,
    GetContractInfoAction,
    GetContractHistoryAction,
    GetSmartContractStateAction,
    GetRawContractStateAction,

    // Code Query Actions
    GetContractCodesAction,
    GetContractCodeAction,
    GetContractCodeContractsAction,

    // Message Actions
    MsgStoreCodeAction,
    MsgUpdateAdminAction,
    MsgExecuteContractAction,
    MsgMigrateContractAction,
    MsgInstantiateContractAction,
    MsgExecuteContractCompatAction,
    MsgPrivilegedExecuteContractAction,

    // WasmX Query Actions
    GetWasmxModuleParamsAction,
    GetWasmxModuleStateAction,
];
