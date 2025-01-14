import { createGenericAction } from "./base";
import * as PeggyTemplates from "@injective/template/peggy";
import * as PeggyExamples from "@injective/examples/peggy";

// Query Actions
export const GetPeggyModuleParamsAction = createGenericAction({
    name: "GET_PEGGY_MODULE_PARAMS",
    description: "Fetches the parameters of the Peggy module",
    template: PeggyTemplates.getPeggyModuleParamsTemplate,
    examples: PeggyExamples.getPeggyModuleParamsExample,
    functionName: "getPeggyModuleParams",
    similes: [
        "view peggy params",
        "get bridge settings",
        "ethereum bridge parameters",
    ],
    validateContent: () => true,
});

// Message Actions
export const MsgSendToEthAction = createGenericAction({
    name: "MSG_SEND_TO_ETH",
    description:
        "Broadcasts a message to send tokens to an Ethereum address via IBC transfer",
    template: PeggyTemplates.msgSendToEthTemplate,
    examples: PeggyExamples.msgSendToEthExample,
    functionName: "msgSendToEth",
    similes: ["send to ethereum", "bridge transfer", "eth bridge send"],
    validateContent: () => true,
});

// Export all actions as a group
export const PeggyActions = [GetPeggyModuleParamsAction, MsgSendToEthAction];
