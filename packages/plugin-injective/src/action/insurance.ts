import { createGenericAction } from "./base";
import * as InsuranceTemplates from "@injective/template/insurance";
import * as InsuranceExamples from "@injective/examples/insurance";

// Query Actions
export const GetInsuranceModuleParamsAction = createGenericAction({
    name: "GET_INSURANCE_MODULE_PARAMS",
    description: "Fetches the insurance module parameters",
    template: InsuranceTemplates.getInsuranceModuleParamsTemplate,
    examples: InsuranceExamples.getInsuranceModuleParamsExample,
    functionName: "getInsuranceModuleParams",
    similes: [
        "view insurance params",
        "get insurance settings",
        "insurance parameters",
    ],
    validateContent: () => true,
});

export const GetInsuranceFundsAction = createGenericAction({
    name: "GET_INSURANCE_FUNDS",
    description: "Fetches a list of all insurance funds",
    template: InsuranceTemplates.getInsuranceFundsTemplate,
    examples: InsuranceExamples.getInsuranceFundsExample,
    functionName: "getInsuranceFunds",
    similes: ["list insurance funds", "view all funds", "get funds list"],
    validateContent: () => true,
});

export const GetInsuranceFundAction = createGenericAction({
    name: "GET_INSURANCE_FUND",
    description:
        "Fetches details of a specific insurance fund by its market ID",
    template: InsuranceTemplates.getInsuranceFundTemplate,
    examples: InsuranceExamples.getInsuranceFundExample,
    functionName: "getInsuranceFund",
    similes: ["view fund details", "get fund info", "check insurance fund"],
    validateContent: () => true,
});

export const GetEstimatedRedemptionsAction = createGenericAction({
    name: "GET_ESTIMATED_REDEMPTIONS",
    description: "Fetches estimated redemptions based on provided parameters",
    template: InsuranceTemplates.getEstimatedRedemptionsTemplate,
    examples: InsuranceExamples.getEstimatedRedemptionsExample,
    functionName: "getEstimatedRedemptions",
    similes: [
        "view estimated redemptions",
        "check redemption estimates",
        "get redemption preview",
    ],
    validateContent: () => true,
});

export const GetPendingRedemptionsAction = createGenericAction({
    name: "GET_PENDING_REDEMPTIONS",
    description: "Fetches pending redemptions based on provided parameters",
    template: InsuranceTemplates.getPendingRedemptionsTemplate,
    examples: InsuranceExamples.getPendingRedemptionsExample,
    functionName: "getPendingRedemptions",
    similes: [
        "view pending redemptions",
        "check redemption status",
        "list pending claims",
    ],
    validateContent: () => true,
});

// Message Actions
export const MsgCreateInsuranceFundAction = createGenericAction({
    name: "MSG_CREATE_INSURANCE_FUND",
    description: "Broadcasts a message to create a new insurance fund",
    template: InsuranceTemplates.msgCreateInsuranceFundTemplate,
    examples: InsuranceExamples.msgCreateInsuranceFundExample,
    functionName: "msgCreateInsuranceFund",
    similes: ["create fund", "establish insurance fund", "setup new fund"],
    validateContent: () => true,
});

export const MsgRequestRedemptionAction = createGenericAction({
    name: "MSG_REQUEST_REDEMPTION",
    description:
        "Broadcasts a message to request a redemption from an insurance fund",
    template: InsuranceTemplates.msgRequestRedemptionTemplate,
    examples: InsuranceExamples.msgRequestRedemptionExample,
    functionName: "msgRequestRedemption",
    similes: ["request redemption", "redeem insurance", "claim insurance"],
    validateContent: () => true,
});

export const MsgUnderwriteAction = createGenericAction({
    name: "MSG_UNDERWRITE",
    description: "Broadcasts a message to underwrite an insurance fund",
    template: InsuranceTemplates.msgUnderwriteTemplate,
    examples: InsuranceExamples.msgUnderwriteExample,
    functionName: "msgUnderwrite",
    similes: [
        "underwrite fund",
        "back insurance fund",
        "provide insurance backing",
    ],
    validateContent: () => true,
});

// Export all actions as a group
export const InsuranceActions = [
    GetInsuranceModuleParamsAction,
    GetInsuranceFundsAction,
    GetInsuranceFundAction,
    GetEstimatedRedemptionsAction,
    GetPendingRedemptionsAction,
    MsgCreateInsuranceFundAction,
    MsgRequestRedemptionAction,
    MsgUnderwriteAction,
];
