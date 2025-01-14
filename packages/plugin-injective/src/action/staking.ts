import { createGenericAction } from "./base";
import * as StakingTemplates from "@injective/template/staking";
import * as StakingExamples from "@injective/examples/staking";

// Module and Pool Query Actions
export const GetStakingModuleParamsAction = createGenericAction({
    name: "GET_STAKING_MODULE_PARAMS",
    description: "Fetches the staking module parameters",
    template: StakingTemplates.getStakingModuleParamsTemplate,
    examples: StakingExamples.getStakingModuleParamsExample,
    functionName: "getStakingModuleParams",
    similes: [
        "view staking params",
        "get staking settings",
        "staking parameters",
    ],
    validateContent: () => true,
});

export const GetPoolAction = createGenericAction({
    name: "GET_POOL",
    description: "Fetches the staking pool information",
    template: StakingTemplates.getPoolTemplate,
    examples: StakingExamples.getPoolExample,
    functionName: "getPool",
    similes: ["view staking pool", "get pool info", "check staking pool"],
    validateContent: () => true,
});

// Validator Query Actions
export const GetValidatorsAction = createGenericAction({
    name: "GET_VALIDATORS",
    description: "Fetches a list of validators with optional pagination",
    template: StakingTemplates.getValidatorsTemplate,
    examples: StakingExamples.getValidatorsExample,
    functionName: "getValidators",
    similes: ["list validators", "view all validators", "get validator list"],
    validateContent: () => true,
});

export const GetValidatorAction = createGenericAction({
    name: "GET_VALIDATOR",
    description: "Fetches a specific validator by address",
    template: StakingTemplates.getValidatorTemplate,
    examples: StakingExamples.getValidatorExample,
    functionName: "getValidator",
    similes: ["view validator", "check validator", "get validator info"],
    validateContent: () => true,
});

// Delegation Query Actions
export const GetValidatorDelegationsAction = createGenericAction({
    name: "GET_VALIDATOR_DELEGATIONS",
    description: "Fetches delegations for a specific validator",
    template: StakingTemplates.getValidatorDelegationsTemplate,
    examples: StakingExamples.getValidatorDelegationsExample,
    functionName: "getValidatorDelegations",
    similes: [
        "view validator stakes",
        "list delegations",
        "check validator delegations",
    ],
    validateContent: () => true,
});

export const GetValidatorDelegationsNoThrowAction = createGenericAction({
    name: "GET_VALIDATOR_DELEGATIONS_NO_THROW",
    description:
        "Fetches delegations for a specific validator without throwing an error",
    template: StakingTemplates.getValidatorDelegationsNoThrowTemplate,
    examples: StakingExamples.getValidatorDelegationsNoThrowExample,
    functionName: "getValidatorDelegationsNoThrow",
    similes: [
        "safe validator stakes",
        "list delegations safe",
        "check validator delegations safe",
    ],
    validateContent: () => true,
});

export const GetValidatorUnbondingDelegationsAction = createGenericAction({
    name: "GET_VALIDATOR_UNBONDING_DELEGATIONS",
    description: "Fetches unbonding delegations for a specific validator",
    template: StakingTemplates.getValidatorUnbondingDelegationsTemplate,
    examples: StakingExamples.getValidatorUnbondingDelegationsExample,
    functionName: "getValidatorUnbondingDelegations",
    similes: [
        "view validator unbonding",
        "list unbonding",
        "check validator unbonding",
    ],
    validateContent: () => true,
});

export const GetValidatorUnbondingDelegationsNoThrowAction =
    createGenericAction({
        name: "GET_VALIDATOR_UNBONDING_DELEGATIONS_NO_THROW",
        description:
            "Fetches unbonding delegations for a specific validator without throwing an error",
        template:
            StakingTemplates.getValidatorUnbondingDelegationsNoThrowTemplate,
        examples:
            StakingExamples.getValidatorUnbondingDelegationsNoThrowExample,
        functionName: "getValidatorUnbondingDelegationsNoThrow",
        similes: [
            "safe validator unbonding",
            "list unbonding safe",
            "check validator unbonding safe",
        ],
        validateContent: () => true,
    });

export const GetDelegationAction = createGenericAction({
    name: "GET_DELEGATION",
    description: "Fetches a specific delegation",
    template: StakingTemplates.getDelegationTemplate,
    examples: StakingExamples.getDelegationExample,
    functionName: "getDelegation",
    similes: ["view delegation", "check stake", "get delegation info"],
    validateContent: () => true,
});

export const GetDelegationsAction = createGenericAction({
    name: "GET_DELEGATIONS",
    description: "Fetches all delegations for a delegator",
    template: StakingTemplates.getDelegationsTemplate,
    examples: StakingExamples.getDelegationsExample,
    functionName: "getDelegations",
    similes: ["list all delegations", "view stakes", "check all delegations"],
    validateContent: () => true,
});

export const GetDelegationsNoThrowAction = createGenericAction({
    name: "GET_DELEGATIONS_NO_THROW",
    description:
        "Fetches all delegations for a delegator without throwing an error",
    template: StakingTemplates.getDelegationsNoThrowTemplate,
    examples: StakingExamples.getDelegationsNoThrowExample,
    functionName: "getDelegationsNoThrow",
    similes: [
        "safe list delegations",
        "view stakes safe",
        "check delegations safe",
    ],
    validateContent: () => true,
});

export const GetDelegatorsAction = createGenericAction({
    name: "GET_DELEGATORS",
    description: "Fetches all delegators for a validator",
    template: StakingTemplates.getDelegatorsTemplate,
    examples: StakingExamples.getDelegatorsExample,
    functionName: "getDelegators",
    similes: ["list delegators", "view stakers", "check validator stakers"],
    validateContent: () => true,
});

export const GetDelegatorsNoThrowAction = createGenericAction({
    name: "GET_DELEGATORS_NO_THROW",
    description:
        "Fetches all delegators for a validator without throwing an error",
    template: StakingTemplates.getDelegatorsNoThrowTemplate,
    examples: StakingExamples.getDelegatorsNoThrowExample,
    functionName: "getDelegatorsNoThrow",
    similes: [
        "safe list delegators",
        "view stakers safe",
        "check validator stakers safe",
    ],
    validateContent: () => true,
});

export const GetUnbondingDelegationsAction = createGenericAction({
    name: "GET_UNBONDING_DELEGATIONS",
    description: "Fetches all unbonding delegations for a delegator",
    template: StakingTemplates.getUnbondingDelegationsTemplate,
    examples: StakingExamples.getUnbondingDelegationsExample,
    functionName: "getUnbondingDelegations",
    similes: ["list unbonding", "view unstaking", "check unbonding"],
    validateContent: () => true,
});

export const GetUnbondingDelegationsNoThrowAction = createGenericAction({
    name: "GET_UNBONDING_DELEGATIONS_NO_THROW",
    description:
        "Fetches all unbonding delegations for a delegator without throwing an error",
    template: StakingTemplates.getUnbondingDelegationsNoThrowTemplate,
    examples: StakingExamples.getUnbondingDelegationsNoThrowExample,
    functionName: "getUnbondingDelegationsNoThrow",
    similes: [
        "safe list unbonding",
        "view unstaking safe",
        "check unbonding safe",
    ],
    validateContent: () => true,
});

export const GetReDelegationsAction = createGenericAction({
    name: "GET_REDELEGATIONS",
    description: "Fetches all redelegations for a delegator",
    template: StakingTemplates.getReDelegationsTemplate,
    examples: StakingExamples.getReDelegationsExample,
    functionName: "getReDelegations",
    similes: ["list redelegations", "view restaking", "check redelegations"],
    validateContent: () => true,
});

export const GetReDelegationsNoThrowAction = createGenericAction({
    name: "GET_REDELEGATIONS_NO_THROW",
    description:
        "Fetches all redelegations for a delegator without throwing an error",
    template: StakingTemplates.getReDelegationsNoThrowTemplate,
    examples: StakingExamples.getReDelegationsNoThrowExample,
    functionName: "getReDelegationsNoThrow",
    similes: [
        "safe list redelegations",
        "view restaking safe",
        "check redelegations safe",
    ],
    validateContent: () => true,
});

// Message Actions
export const MsgBeginRedelegateAction = createGenericAction({
    name: "MSG_BEGIN_REDELEGATE",
    description: "Broadcasts a message to begin redelegating tokens",
    template: StakingTemplates.msgBeginRedelegateTemplate,
    examples: StakingExamples.msgBeginRedelegateExample,
    functionName: "msgBeginRedelegate",
    similes: ["start redelegation", "switch validator", "move stake"],
    validateContent: () => true,
});

export const MsgDelegateAction = createGenericAction({
    name: "MSG_DELEGATE",
    description: "Broadcasts a message to delegate tokens to a validator",
    template: StakingTemplates.msgDelegateTemplate,
    examples: StakingExamples.msgDelegateExample,
    functionName: "msgDelegate",
    similes: ["stake tokens", "delegate to validator", "start staking"],
    validateContent: () => true,
});

export const MsgUndelegateAction = createGenericAction({
    name: "MSG_UNDELEGATE",
    description: "Broadcasts a message to undelegate tokens from a validator",
    template: StakingTemplates.msgUndelegateTemplate,
    examples: StakingExamples.msgUndelegateExample,
    functionName: "msgUndelegate",
    similes: ["unstake tokens", "withdraw stake", "end staking"],
    validateContent: () => true,
});

export const MsgCreateValidatorAction = createGenericAction({
    name: "MSG_CREATE_VALIDATOR",
    description: "Broadcasts a message to create a new validator",
    template: StakingTemplates.msgCreateValidatorTemplate,
    examples: StakingExamples.msgCreateValidatorExample,
    functionName: "msgCreateValidator",
    similes: ["create validator", "become validator", "start validating"],
    validateContent: () => true,
});

export const MsgEditValidatorAction = createGenericAction({
    name: "MSG_EDIT_VALIDATOR",
    description: "Broadcasts a message to edit an existing validator",
    template: StakingTemplates.msgEditValidatorTemplate,
    examples: StakingExamples.msgEditValidatorExample,
    functionName: "msgEditValidator",
    similes: [
        "update validator",
        "modify validator",
        "change validator settings",
    ],
    validateContent: () => true,
});

export const MsgCancelUnbondingDelegationAction = createGenericAction({
    name: "MSG_CANCEL_UNBONDING_DELEGATION",
    description: "Broadcasts a message to cancel an unbonding delegation",
    template: StakingTemplates.msgCancelUnbondingDelegationTemplate,
    examples: StakingExamples.msgCancelUnbondingDelegationExample,
    functionName: "msgCancelUnbondingDelegation",
    similes: ["cancel unstaking", "stop unbonding", "reverse unbonding"],
    validateContent: () => true,
});

// Export all actions as a group
export const StakingActions = [
    // Module and Pool Actions
    GetStakingModuleParamsAction,
    GetPoolAction,

    // Validator Actions
    GetValidatorsAction,
    GetValidatorAction,

    // Delegation Query Actions
    GetValidatorDelegationsAction,
    GetValidatorDelegationsNoThrowAction,
    GetValidatorUnbondingDelegationsAction,
    GetValidatorUnbondingDelegationsNoThrowAction,
    GetDelegationAction,
    GetDelegationsAction,
    GetDelegationsNoThrowAction,
    GetDelegatorsAction,
    GetDelegatorsNoThrowAction,
    GetUnbondingDelegationsAction,
    GetUnbondingDelegationsNoThrowAction,
    GetReDelegationsAction,
    GetReDelegationsNoThrowAction,

    // Message Actions
    MsgBeginRedelegateAction,
    MsgDelegateAction,
    MsgUndelegateAction,
    MsgCreateValidatorAction,
    MsgEditValidatorAction,
    MsgCancelUnbondingDelegationAction,
];
