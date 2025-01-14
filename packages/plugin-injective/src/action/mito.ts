import { createGenericAction } from "./base";
import * as MitoTemplates from "@injective/template/mito";
import * as MitoExamples from "@injective/examples/mito";

// Vault Related Actions
export const GetVaultAction = createGenericAction({
    name: "GET_VAULT",
    description: "Fetches the details of a specific vault",
    template: MitoTemplates.getVaultTemplate,
    examples: MitoExamples.getVaultExample,
    functionName: "getVault",
    similes: ["view vault details", "check vault", "get vault info"],
    validateContent: () => true,
});

export const GetVaultsAction = createGenericAction({
    name: "GET_VAULTS",
    description: "Fetches a list of all vaults with optional filtering",
    template: MitoTemplates.getVaultsTemplate,
    examples: MitoExamples.getVaultsExample,
    functionName: "getVaults",
    similes: ["list vaults", "view all vaults", "get vault list"],
    validateContent: () => true,
});

export const GetVaultsByHolderAddressAction = createGenericAction({
    name: "GET_VAULTS_BY_HOLDER_ADDRESS",
    description: "Fetches vaults associated with a specific holder address",
    template: MitoTemplates.getVaultsByHolderAddressTemplate,
    examples: MitoExamples.getVaultsByHolderAddressExample,
    functionName: "getVaultsByHolderAddress",
    similes: ["holder vaults", "address vaults", "user vaults"],
    validateContent: () => true,
});

// LP Token Related Actions
export const GetLpTokenPriceChartAction = createGenericAction({
    name: "GET_LP_TOKEN_PRICE_CHART",
    description: "Retrieves the price chart data for LP tokens",
    template: MitoTemplates.getLpTokenPriceChartTemplate,
    examples: MitoExamples.getLpTokenPriceChartExample,
    functionName: "getLpTokenPriceChart",
    similes: ["lp price history", "token price chart", "lp chart"],
    validateContent: () => true,
});

export const GetLPHoldersAction = createGenericAction({
    name: "GET_LP_HOLDERS",
    description: "Retrieves a list of LP token holders",
    template: MitoTemplates.getLPHoldersTemplate,
    examples: MitoExamples.getLPHoldersExample,
    functionName: "getLPHolders",
    similes: ["list lp holders", "token holders", "lp investors"],
    validateContent: () => true,
});

// TVL and Portfolio Actions
export const GetTVLChartAction = createGenericAction({
    name: "GET_TVL_CHART",
    description: "Retrieves the Total Value Locked (TVL) chart data",
    template: MitoTemplates.getTVLChartTemplate,
    examples: MitoExamples.getTVLChartExample,
    functionName: "getTVLChart",
    similes: ["tvl history", "value locked chart", "tvl data"],
    validateContent: () => true,
});

export const GetHolderPortfolioAction = createGenericAction({
    name: "GET_HOLDER_PORTFOLIO",
    description: "Retrieves the portfolio details of a specific holder",
    template: MitoTemplates.getHolderPortfolioTemplate,
    examples: MitoExamples.getHolderPortfolioExample,
    functionName: "getHolderPortfolio",
    similes: ["view portfolio", "holder assets", "user portfolio"],
    validateContent: () => true,
});

// Leaderboard Related Actions
export const GetLeaderboardAction = createGenericAction({
    name: "GET_LEADERBOARD",
    description: "Retrieves the leaderboard for a specific epoch",
    template: MitoTemplates.getLeaderboardTemplate,
    examples: MitoExamples.getLeaderboardExample,
    functionName: "getLeaderboard",
    similes: ["view rankings", "epoch leaderboard", "top performers"],
    validateContent: () => true,
});

export const GetLeaderboardEpochsAction = createGenericAction({
    name: "GET_LEADERBOARD_EPOCHS",
    description: "Retrieves the epochs associated with leaderboards",
    template: MitoTemplates.getLeaderboardEpochsTemplate,
    examples: MitoExamples.getLeaderboardEpochsExample,
    functionName: "getLeaderboardEpochs",
    similes: ["list epochs", "view periods", "leaderboard times"],
    validateContent: () => true,
});

// Transfer and History Actions
export const GetTransferHistoryAction = createGenericAction({
    name: "GET_TRANSFER_HISTORY",
    description: "Fetches the transfer history based on provided parameters",
    template: MitoTemplates.getTransferHistoryTemplate,
    examples: MitoExamples.getTransferHistoryExample,
    functionName: "getTransferHistory",
    similes: ["transfer logs", "transaction history", "movement history"],
    validateContent: () => true,
});

// Staking Related Actions
export const GetStakingPoolsAction = createGenericAction({
    name: "GET_STAKING_POOLS",
    description: "Retrieves information about staking pools",
    template: MitoTemplates.getStakingPoolsTemplate,
    examples: MitoExamples.getStakingPoolsExample,
    functionName: "getStakingPools",
    similes: ["list pools", "view stake pools", "staking options"],
    validateContent: () => true,
});

export const GetStakingHistoryAction = createGenericAction({
    name: "GET_STAKING_HISTORY",
    description: "Retrieves the staking history based on provided parameters",
    template: MitoTemplates.getStakingHistoryTemplate,
    examples: MitoExamples.getStakingHistoryExample,
    functionName: "getStakingHistory",
    similes: ["stake history", "staking logs", "stake records"],
    validateContent: () => true,
});

export const GetStakingRewardsByAccountAction = createGenericAction({
    name: "GET_STAKING_REWARDS_BY_ACCOUNT",
    description: "Retrieves staking rewards for a specific account",
    template: MitoTemplates.getStakingRewardsByAccountTemplate,
    examples: MitoExamples.getStakingRewardsByAccountExample,
    functionName: "getStakingRewardsByAccount",
    similes: ["view rewards", "stake earnings", "account rewards"],
    validateContent: () => true,
});

// Mission Related Actions
export const GetMissionsAction = createGenericAction({
    name: "GET_MISSIONS",
    description: "Fetches a list of missions based on provided parameters",
    template: MitoTemplates.getMissionsTemplate,
    examples: MitoExamples.getMissionsExample,
    functionName: "getMissions",
    similes: ["list missions", "view tasks", "available missions"],
    validateContent: () => true,
});

export const GetMissionLeaderboardAction = createGenericAction({
    name: "GET_MISSION_LEADERBOARD",
    description:
        "Retrieves the leaderboard for missions based on the user address",
    template: MitoTemplates.getMissionLeaderboardTemplate,
    examples: MitoExamples.getMissionLeaderboardExample,
    functionName: "getMissionLeaderboard",
    similes: ["mission rankings", "task leaderboard", "mission scores"],
    validateContent: () => true,
});

// IDO Related Actions
export const GetIDOAction = createGenericAction({
    name: "GET_IDO",
    description: "Fetches details of a specific Initial DEX Offering (IDO)",
    template: MitoTemplates.getIDOTemplate,
    examples: MitoExamples.getIDOExample,
    functionName: "getIDO",
    similes: ["view ido", "check offering", "get ido details"],
    validateContent: () => true,
});

export const GetIDOsAction = createGenericAction({
    name: "GET_IDOS",
    description: "Retrieves a list of all IDOs with optional filtering",
    template: MitoTemplates.getIDOsTemplate,
    examples: MitoExamples.getIDOsExample,
    functionName: "getIDOs",
    similes: ["list idos", "view offerings", "get ido list"],
    validateContent: () => true,
});

export const GetIDOSubscribersAction = createGenericAction({
    name: "GET_IDO_SUBSCRIBERS",
    description: "Fetches subscribers for a specific IDO",
    template: MitoTemplates.getIDOSubscribersTemplate,
    examples: MitoExamples.getIDOSubscribersExample,
    functionName: "getIDOSubscribers",
    similes: ["view subscribers", "ido participants", "subscriber list"],
    validateContent: () => true,
});

export const GetIDOSubscriptionAction = createGenericAction({
    name: "GET_IDO_SUBSCRIPTION",
    description: "Retrieves the subscription details for a specific IDO",
    template: MitoTemplates.getIDOSubscriptionTemplate,
    examples: MitoExamples.getIDOSubscriptionExample,
    functionName: "getIDOSubscription",
    similes: ["check subscription", "view ido status", "subscription details"],
    validateContent: () => true,
});

export const GetIDOActivitiesAction = createGenericAction({
    name: "GET_IDO_ACTIVITIES",
    description: "Retrieves activities related to a specific IDO",
    template: MitoTemplates.getIDOActivitiesTemplate,
    examples: MitoExamples.getIDOActivitiesExample,
    functionName: "getIDOActivities",
    similes: ["ido history", "offering activities", "ido events"],
    validateContent: () => true,
});

export const GetIDOWhitelistAction = createGenericAction({
    name: "GET_IDO_WHITELIST",
    description: "Fetches the whitelist for a specific IDO",
    template: MitoTemplates.getIDOWhitelistTemplate,
    examples: MitoExamples.getIDOWhitelistExample,
    functionName: "getIDOWhitelist",
    similes: ["view whitelist", "check eligibility", "ido approved list"],
    validateContent: () => true,
});

export const GetClaimReferencesAction = createGenericAction({
    name: "GET_CLAIM_REFERENCES",
    description: "Retrieves claim references based on provided parameters",
    template: MitoTemplates.getClaimReferencesTemplate,
    examples: MitoExamples.getClaimReferencesExample,
    functionName: "getClaimReferences",
    similes: ["view claims", "check references", "claim list"],
    validateContent: () => true,
});

// Export all actions as a group
export const MitoActions = [
    GetVaultAction,
    GetVaultsAction,
    GetVaultsByHolderAddressAction,
    GetLpTokenPriceChartAction,
    GetLPHoldersAction,
    GetTVLChartAction,
    GetHolderPortfolioAction,
    GetLeaderboardAction,
    GetLeaderboardEpochsAction,
    GetTransferHistoryAction,
    GetStakingPoolsAction,
    GetStakingHistoryAction,
    GetStakingRewardsByAccountAction,
    GetMissionsAction,
    GetMissionLeaderboardAction,
    GetIDOAction,
    GetIDOsAction,
    GetIDOSubscribersAction,
    GetIDOSubscriptionAction,
    GetIDOActivitiesAction,
    GetIDOWhitelistAction,
    GetClaimReferencesAction,
];
