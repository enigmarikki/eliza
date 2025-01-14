// src/actions/governance/governance-actions.ts
import { createGenericAction } from "./base";
import * as GovTemplates from "@injective/template/gov";
import * as GovExamples from "@injective/examples/gov";

export const GetGovernanceModuleParamsAction = createGenericAction({
    name: "GET_GOVERNANCE_MODULE_PARAMS",
    description: "Fetches the governance module parameters",
    template: GovTemplates.getGovernanceModuleParamsTemplate,
    examples: GovExamples.getGovernanceModuleParamsExample,
    functionName: "getGovernanceModuleParams",
    similes: [
        "view gov params",
        "get governance settings",
        "governance parameters",
    ],
    validateContent: () => true,
});

export const GetProposalsAction = createGenericAction({
    name: "GET_PROPOSALS",
    description: "Fetches a list of proposals based on provided parameters",
    template: GovTemplates.getProposalsTemplate,
    examples: GovExamples.getProposalsExample,
    functionName: "getProposals",
    similes: ["view proposals", "list proposals", "get governance proposals"],
    validateContent: () => true,
});

export const GetProposalAction = createGenericAction({
    name: "GET_PROPOSAL",
    description: "Fetches details of a specific proposal by its ID",
    template: GovTemplates.getProposalTemplate,
    examples: GovExamples.getProposalExample,
    functionName: "getProposal",
    similes: ["view proposal", "get proposal details", "check proposal"],
    validateContent: () => true,
});

export const GetProposalDepositsAction = createGenericAction({
    name: "GET_PROPOSAL_DEPOSITS",
    description: "Fetches deposits for a specific proposal",
    template: GovTemplates.getProposalDepositsTemplate,
    examples: GovExamples.getProposalDepositsExample,
    functionName: "getProposalDeposits",
    similes: [
        "view proposal deposits",
        "check deposits",
        "list proposal deposits",
    ],
    validateContent: () => true,
});

export const GetProposalVotesAction = createGenericAction({
    name: "GET_PROPOSAL_VOTES",
    description: "Fetches votes for a specific proposal",
    template: GovTemplates.getProposalVotesTemplate,
    examples: GovExamples.getProposalVotesExample,
    functionName: "getProposalVotes",
    similes: ["view proposal votes", "check votes", "list proposal votes"],
    validateContent: () => true,
});

export const GetProposalTallyAction = createGenericAction({
    name: "GET_PROPOSAL_TALLY",
    description: "Fetches the tally results of a specific proposal",
    template: GovTemplates.getProposalTallyTemplate,
    examples: GovExamples.getProposalTallyExample,
    functionName: "getProposalTally",
    similes: [
        "view proposal tally",
        "check vote results",
        "get voting results",
    ],
    validateContent: () => true,
});

// Message Actions
export const MsgSubmitProposalExpiryFuturesMarketLaunchAction =
    createGenericAction({
        name: "MSG_SUBMIT_PROPOSAL_EXPIRY_FUTURES_MARKET_LAUNCH",
        description: "Submits a proposal to launch an expiry futures market",
        template:
            GovTemplates.msgSubmitProposalExpiryFuturesMarketLaunchTemplate,
        examples: GovExamples.msgSubmitProposalExpiryFuturesMarketLaunchExample,
        functionName: "msgSubmitProposalExpiryFuturesMarketLaunch",
        similes: [
            "submit futures market proposal",
            "propose futures market",
            "launch futures market",
        ],
        validateContent: () => true,
    });

export const MsgSubmitProposalSpotMarketLaunchAction = createGenericAction({
    name: "MSG_SUBMIT_PROPOSAL_SPOT_MARKET_LAUNCH",
    description: "Submits a proposal to launch a spot market",
    template: GovTemplates.msgSubmitProposalSpotMarketLaunchTemplate,
    examples: GovExamples.msgSubmitProposalSpotMarketLaunchExample,
    functionName: "msgSubmitProposalSpotMarketLaunch",
    similes: [
        "submit spot market proposal",
        "propose spot market",
        "launch spot market",
    ],
    validateContent: () => true,
});

export const MsgSubmitProposalPerpetualMarketLaunchAction = createGenericAction(
    {
        name: "MSG_SUBMIT_PROPOSAL_PERPETUAL_MARKET_LAUNCH",
        description: "Submits a proposal to launch a perpetual market",
        template: GovTemplates.msgSubmitProposalPerpetualMarketLaunchTemplate,
        examples: GovExamples.msgSubmitProposalPerpetualMarketLaunchExample,
        functionName: "msgSubmitProposalPerpetualMarketLaunch",
        similes: [
            "submit perp market proposal",
            "propose perpetual market",
            "launch perp market",
        ],
        validateContent: () => true,
    }
);

export const MsgVoteAction = createGenericAction({
    name: "MSG_VOTE",
    description: "Casts a vote on a specific proposal",
    template: GovTemplates.msgVoteTemplate,
    examples: GovExamples.msgVoteExample,
    functionName: "msgVote",
    similes: ["vote on proposal", "cast vote", "submit vote"],
    validateContent: () => true,
});

export const MsgSubmitTextProposalAction = createGenericAction({
    name: "MSG_SUBMIT_TEXT_PROPOSAL",
    description: "Submits a text-based proposal",
    template: GovTemplates.msgSubmitTextProposalTemplate,
    examples: GovExamples.msgSubmitTextProposalExample,
    functionName: "msgSubmitTextProposal",
    similes: ["submit text proposal", "propose text", "create text proposal"],
    validateContent: () => true,
});

export const MsgSubmitProposalSpotMarketParamUpdateAction = createGenericAction(
    {
        name: "MSG_SUBMIT_PROPOSAL_SPOT_MARKET_PARAM_UPDATE",
        description: "Submits a proposal to update spot market parameters",
        template: GovTemplates.msgSubmitProposalSpotMarketParamUpdateTemplate,
        examples: GovExamples.msgSubmitProposalSpotMarketParamUpdateExample,
        functionName: "msgSubmitProposalSpotMarketParamUpdate",
        similes: [
            "update spot params",
            "modify spot market",
            "change spot parameters",
        ],
        validateContent: () => true,
    }
);

export const MsgSubmitGenericProposalAction = createGenericAction({
    name: "MSG_SUBMIT_GENERIC_PROPOSAL",
    description: "Submits a generic proposal",
    template: GovTemplates.msgSubmitGenericProposalTemplate,
    examples: GovExamples.msgSubmitGenericProposalExample,
    functionName: "msgSubmitGenericProposal",
    similes: ["submit generic proposal", "propose generic", "create proposal"],
    validateContent: () => true,
});

export const MsgGovDepositAction = createGenericAction({
    name: "MSG_GOV_DEPOSIT",
    description: "Deposits tokens to a specific proposal",
    template: GovTemplates.msgGovDepositTemplate,
    examples: GovExamples.msgGovDepositExample,
    functionName: "msgGovDeposit",
    similes: ["deposit to proposal", "fund proposal", "add proposal deposit"],
    validateContent: () => true,
});

// Export all actions as a group
export const GovActions = [
    GetGovernanceModuleParamsAction,
    GetProposalsAction,
    GetProposalAction,
    GetProposalDepositsAction,
    GetProposalVotesAction,
    GetProposalTallyAction,
    MsgSubmitProposalExpiryFuturesMarketLaunchAction,
    MsgSubmitProposalSpotMarketLaunchAction,
    MsgSubmitProposalPerpetualMarketLaunchAction,
    MsgVoteAction,
    MsgSubmitTextProposalAction,
    MsgSubmitProposalSpotMarketParamUpdateAction,
    MsgSubmitGenericProposalAction,
    MsgGovDepositAction,
];
