import { createGenericAction } from "./base";
import * as MintTemplates from "@injective/template/mint";
import * as MintExamples from "@injective/examples/mint";

export const GetMintModuleParamsAction = createGenericAction({
    name: "GET_MINT_MODULE_PARAMS",
    description: "Fetches the parameters of the Mint module",
    template: MintTemplates.getMintModuleParamsTemplate,
    examples: MintExamples.getMintModuleParamsExample,
    functionName: "getMintModuleParams",
    similes: ["view mint params", "get mint settings", "mint parameters"],
    validateContent: () => true,
});

export const GetInflationAction = createGenericAction({
    name: "GET_INFLATION",
    description: "Retrieves the current inflation rate",
    template: MintTemplates.getInflationTemplate,
    examples: MintExamples.getInflationExample,
    functionName: "getInflation",
    similes: [
        "check inflation",
        "view inflation rate",
        "get current inflation",
    ],
    validateContent: () => true,
});

export const GetAnnualProvisionsAction = createGenericAction({
    name: "GET_ANNUAL_PROVISIONS",
    description: "Obtains the annual provisions",
    template: MintTemplates.getAnnualProvisionsTemplate,
    examples: MintExamples.getAnnualProvisionsExample,
    functionName: "getAnnualProvisions",
    similes: [
        "view annual provisions",
        "check yearly mint",
        "get token issuance",
    ],
    validateContent: () => true,
});

// Export all actions as a group
export const MintActions = [
    GetMintModuleParamsAction,
    GetInflationAction,
    GetAnnualProvisionsAction,
];
