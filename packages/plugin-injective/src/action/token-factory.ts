import { createGenericAction } from "./base";
import * as TokenFactoryTemplates from "@injective/template/token-factory";
import * as TokenFactoryExamples from "@injective/examples/token-factory";

// Query Actions
export const GetDenomsFromCreatorAction = createGenericAction({
    name: "GET_DENOMS_FROM_CREATOR",
    description: "Fetches all denominations created by a specific creator",
    template: TokenFactoryTemplates.getDenomsFromCreatorTemplate,
    examples: TokenFactoryExamples.getDenomsFromCreatorExample,
    functionName: "getDenomsFromCreator",
    similes: [
        "list creator tokens",
        "view created denoms",
        "check creator assets",
    ],
    validateContent: () => true,
});

export const GetDenomAuthorityMetadataAction = createGenericAction({
    name: "GET_DENOM_AUTHORITY_METADATA",
    description: "Fetches the authority metadata for a specific denomination",
    template: TokenFactoryTemplates.getDenomAuthorityMetadataTemplate,
    examples: TokenFactoryExamples.getDenomAuthorityMetadataExample,
    functionName: "getDenomAuthorityMetadata",
    similes: [
        "view denom authority",
        "check token admin",
        "get denom metadata",
    ],
    validateContent: () => true,
});

export const GetTokenFactoryModuleParamsAction = createGenericAction({
    name: "GET_TOKEN_FACTORY_MODULE_PARAMS",
    description: "Fetches the parameters of the Token Factory module",
    template: TokenFactoryTemplates.getTokenFactoryModuleParamsTemplate,
    examples: TokenFactoryExamples.getTokenFactoryModuleParamsExample,
    functionName: "getTokenFactoryModuleParams",
    similes: [
        "view factory params",
        "get token settings",
        "factory parameters",
    ],
    validateContent: () => true,
});

export const GetTokenFactoryModuleStateAction = createGenericAction({
    name: "GET_TOKEN_FACTORY_MODULE_STATE",
    description: "Fetches the current state of the Token Factory module",
    template: TokenFactoryTemplates.getTokenFactoryModuleStateTemplate,
    examples: TokenFactoryExamples.getTokenFactoryModuleStateExample,
    functionName: "getTokenFactoryModuleState",
    similes: [
        "view factory state",
        "check token factory",
        "get factory status",
    ],
    validateContent: () => true,
});

// Message Actions
export const MsgBurnAction = createGenericAction({
    name: "MSG_BURN",
    description: "Broadcasts a message to burn tokens",
    template: TokenFactoryTemplates.msgBurnTemplate,
    examples: TokenFactoryExamples.msgBurnExample,
    functionName: "msgBurn",
    similes: ["burn tokens", "destroy tokens", "remove tokens"],
    validateContent: () => true,
});

export const MsgChangeAdminAction = createGenericAction({
    name: "MSG_CHANGE_ADMIN",
    description: "Broadcasts a message to change the admin of a denomination",
    template: TokenFactoryTemplates.msgChangeAdminTemplate,
    examples: TokenFactoryExamples.msgChangeAdminExample,
    functionName: "msgChangeAdmin",
    similes: ["change token admin", "update denom admin", "transfer admin"],
    validateContent: () => true,
});

export const MsgCreateDenomAction = createGenericAction({
    name: "MSG_CREATE_DENOM",
    description: "Broadcasts a message to create a new denomination",
    template: TokenFactoryTemplates.msgCreateDenomTemplate,
    examples: TokenFactoryExamples.msgCreateDenomExample,
    functionName: "msgCreateDenom",
    similes: ["create token", "new denomination", "make token"],
    validateContent: () => true,
});

export const MsgMintAction = createGenericAction({
    name: "MSG_MINT",
    description: "Broadcasts a message to mint new tokens",
    template: TokenFactoryTemplates.msgMintTemplate,
    examples: TokenFactoryExamples.msgMintExample,
    functionName: "msgMint",
    similes: ["mint tokens", "create tokens", "issue tokens"],
    validateContent: () => true,
});

export const MsgSetDenomMetadataAction = createGenericAction({
    name: "MSG_SET_DENOM_METADATA",
    description: "Broadcasts a message to set metadata for a denomination",
    template: TokenFactoryTemplates.msgSetDenomMetadataTemplate,
    examples: TokenFactoryExamples.msgSetDenomMetadataExample,
    functionName: "msgSetDenomMetadata",
    similes: [
        "set token metadata",
        "update denom info",
        "modify token details",
    ],
    validateContent: () => true,
});

// Export all actions as a group
export const TokenFactoryActions = [
    // Query Actions
    GetDenomsFromCreatorAction,
    GetDenomAuthorityMetadataAction,
    GetTokenFactoryModuleParamsAction,
    GetTokenFactoryModuleStateAction,

    // Message Actions
    MsgBurnAction,
    MsgChangeAdminAction,
    MsgCreateDenomAction,
    MsgMintAction,
    MsgSetDenomMetadataAction,
];
