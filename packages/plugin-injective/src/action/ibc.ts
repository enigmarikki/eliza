import { createGenericAction } from "./base";
import * as IBCTemplates from "@injective/template/ibc";
import * as IBCExamples from "@injective/examples/ibc";

export const GetDenomTraceAction = createGenericAction({
    name: "GET_DENOM_TRACE",
    description: "Fetches the denomination trace for a specific hash",
    template: IBCTemplates.getDenomTraceTemplate,
    examples: IBCExamples.getDenomTraceExample,
    functionName: "getDenomTrace",
    similes: [
        "get denom trace",
        "fetch denomination trace",
        "check denom path",
    ],
    validateContent: () => true,
});

export const GetDenomsTraceAction = createGenericAction({
    name: "GET_DENOMS_TRACE",
    description:
        "Fetches a list of denomination traces with optional pagination",
    template: IBCTemplates.getDenomsTraceTemplate,
    examples: IBCExamples.getDenomsTraceExample,
    functionName: "getDenomsTrace",
    similes: [
        "list denom traces",
        "get all denomination traces",
        "fetch denom paths",
    ],
    validateContent: () => true,
});

export const MsgIBCTransferAction = createGenericAction({
    name: "MSG_IBC_TRANSFER",
    description: "Broadcasts an IBC transfer message",
    template: IBCTemplates.msgIBCTransferTemplate,
    examples: IBCExamples.msgIBCTransferExample,
    functionName: "msgIBCTransfer",
    similes: ["transfer ibc tokens", "send cross-chain", "ibc transfer"],
    validateContent: () => true,
});

// Export all actions as a group
export const IbcActions = [
    GetDenomTraceAction,
    GetDenomsTraceAction,
    MsgIBCTransferAction,
];
