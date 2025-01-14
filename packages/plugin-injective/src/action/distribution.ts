import { createGenericAction } from "./base";
import * as DistributionTemplates from "@injective/template/distribution";
import * as DistributionExamples from "@injective/examples/distribution";

export const GetDistributionModuleParamsAction = createGenericAction({
    name: "GET_DISTRIBUTION_MODULE_PARAMS",
    description: "Fetches the distribution module parameters",
    template: DistributionTemplates.getDistributionModuleParamsTemplate,
    examples: DistributionExamples.getDistributionModuleParamsExample,
    functionName: "getDistributionModuleParams",
    similes: [
        "view distribution params",
        "get distribution parameters",
        "distribution settings",
    ],
    validateContent: () => true,
});

export const GetDelegatorRewardsForValidatorAction = createGenericAction({
    name: "GET_DELEGATOR_REWARDS_FOR_VALIDATOR",
    description: "Fetches the delegator rewards for a specific validator",
    template: DistributionTemplates.getDelegatorRewardsForValidatorTemplate,
    examples: DistributionExamples.getDelegatorRewardsForValidatorExample,
    functionName: "getDelegatorRewardsForValidator",
    similes: [
        "check validator rewards",
        "view delegator rewards",
        "validator rewards",
    ],
    validateContent: () => true,
});

export const GetDelegatorRewardsForValidatorNoThrowAction = createGenericAction(
    {
        name: "GET_DELEGATOR_REWARDS_FOR_VALIDATOR_NO_THROW",
        description:
            "Fetches the delegator rewards for a specific validator without throwing errors",
        template:
            DistributionTemplates.getDelegatorRewardsForValidatorNoThrowTemplate,
        examples:
            DistributionExamples.getDelegatorRewardsForValidatorNoThrowExample,
        functionName: "getDelegatorRewardsForValidatorNoThrow",
        similes: [
            "safe check validator rewards",
            "view delegator rewards safely",
        ],
        validateContent: () => true,
    }
);

export const GetDelegatorRewardsAction = createGenericAction({
    name: "GET_DELEGATOR_REWARDS",
    description: "Fetches the rewards for a delegator",
    template: DistributionTemplates.getDelegatorRewardsTemplate,
    examples: DistributionExamples.getDelegatorRewardsExample,
    functionName: "getDelegatorRewards",
    similes: ["view rewards", "check delegator rewards", "get staking rewards"],
    validateContent: () => true,
});

export const GetDelegatorRewardsNoThrowAction = createGenericAction({
    name: "GET_DELEGATOR_REWARDS_NO_THROW",
    description: "Fetches the rewards for a delegator without throwing errors",
    template: DistributionTemplates.getDelegatorRewardsNoThrowTemplate,
    examples: DistributionExamples.getDelegatorRewardsNoThrowExample,
    functionName: "getDelegatorRewardsNoThrow",
    similes: ["safe view rewards", "check delegator rewards safely"],
    validateContent: () => true,
});

export const MsgWithdrawDelegatorRewardAction = createGenericAction({
    name: "MSG_WITHDRAW_DELEGATOR_REWARD",
    description: "Withdraws delegator rewards from a specific validator",
    template: DistributionTemplates.msgWithdrawDelegatorRewardTemplate,
    examples: DistributionExamples.msgWithdrawDelegatorRewardExample,
    functionName: "msgWithdrawDelegatorReward",
    similes: [
        "withdraw rewards",
        "claim rewards",
        "get staking rewards",
        "collect rewards",
    ],
    validateContent: () => true,
});

export const MsgWithdrawValidatorCommissionAction = createGenericAction({
    name: "MSG_WITHDRAW_VALIDATOR_COMMISSION",
    description: "Withdraws validator commission rewards",
    template: DistributionTemplates.msgWithdrawValidatorCommissionTemplate,
    examples: DistributionExamples.msgWithdrawValidatorCommissionExample,
    functionName: "msgWithdrawValidatorCommission",
    similes: [
        "withdraw commission",
        "claim commission",
        "get validator rewards",
    ],
    validateContent: () => true,
});

// Export all actions as a group
export const DistributionActions = [
    GetDistributionModuleParamsAction,
    GetDelegatorRewardsForValidatorAction,
    GetDelegatorRewardsForValidatorNoThrowAction,
    GetDelegatorRewardsAction,
    GetDelegatorRewardsNoThrowAction,
    MsgWithdrawDelegatorRewardAction,
    MsgWithdrawValidatorCommissionAction,
];
