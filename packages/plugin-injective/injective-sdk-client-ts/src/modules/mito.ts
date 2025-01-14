import { InjectiveGrpcBase } from "../grpc/grpc-base";
import * as MitoTypes from "../types/mito";
import {
    StandardResponse,
    createSuccessResponse,
    createErrorResponse,
} from "../types/index";

/**
 * Fetches the details of a specific vault.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetVaultParams} params - Parameters including the vault identifier.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing vault details.
 *          - On failure: A standard response containing an error message.
 */
export async function getVault(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetVaultParams
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchVault(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getVaultError", err);
    }
}

/**
 * Fetches a list of all vaults with optional filtering.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetVaultsParams} [params={}] - Optional parameters to filter the list of vaults.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing a list of vaults.
 *          - On failure: A standard response containing an error message.
 */
export async function getVaults(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetVaultsParams = {}
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchVaults(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getVaultsError", err);
    }
}

/**
 * Retrieves the price chart data for LP tokens.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetLpTokenPriceChartParams} params - Parameters including the LP token identifier and chart options.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing LP token price chart data.
 *          - On failure: A standard response containing an error message.
 */
export async function getLpTokenPriceChart(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetLpTokenPriceChartParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchLpTokenPriceChart(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getLpTokenPriceChartError", err);
    }
}

/**
 * Retrieves the Total Value Locked (TVL) chart data.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetTVLChartParams} params - Parameters including time range and other chart options.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing TVL chart data.
 *          - On failure: A standard response containing an error message.
 */
export async function getTVLChart(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetTVLChartParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchTVLChartRequest(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getTVLChartError", err);
    }
}

/**
 * Fetches vaults associated with a specific holder address.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetVaultsByHolderAddressParams} params - Parameters including the holder's address.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing vaults linked to the holder.
 *          - On failure: A standard response containing an error message.
 */
export async function getVaultsByHolderAddress(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetVaultsByHolderAddressParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchVaultsByHolderAddress(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getVaultsByHolderAddressError", err);
    }
}

/**
 * Retrieves a list of LP token holders.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetLPHoldersParams} params - Parameters to filter LP token holders.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing a list of LP token holders.
 *          - On failure: A standard response containing an error message.
 */
export async function getLPHolders(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetLPHoldersParams
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchLPHolders(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getLPHoldersError", err);
    }
}

/**
 * Retrieves the portfolio details of a specific holder.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetHolderPortfolioParams} params - Parameters including the holder's address.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing the holder's portfolio details.
 *          - On failure: A standard response containing an error message.
 */
export async function getHolderPortfolio(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetHolderPortfolioParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchHolderPortfolio(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getHolderPortfolioError", err);
    }
}

/**
 * Retrieves the leaderboard for a specific epoch.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetLeaderboardParams} params - Parameters including the epoch identifier.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing leaderboard details for the epoch.
 *          - On failure: A standard response containing an error message.
 */
export async function getLeaderboard(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetLeaderboardParams
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchLeaderboard(
            params.epochId
        );
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getLeaderboardError", err);
    }
}

/**
 * Fetches the transfer history based on provided parameters.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetTransferHistoryParams} params - Parameters to filter transfer history.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing transfer history data.
 *          - On failure: A standard response containing an error message.
 */
export async function getTransferHistory(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetTransferHistoryParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchTransferHistory(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getTransferHistoryError", err);
    }
}

/**
 * Retrieves the epochs associated with leaderboards.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetLeaderboardEpochsParams} [params={}] - Optional parameters to filter leaderboard epochs.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing leaderboard epochs.
 *          - On failure: A standard response containing an error message.
 */
export async function getLeaderboardEpochs(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetLeaderboardEpochsParams = {}
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchLeaderboardEpochs(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getLeaderboardEpochsError", err);
    }
}

/**
 * Retrieves information about staking pools.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetStakingPoolsParams} params - Parameters to filter staking pools.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing staking pool details.
 *          - On failure: A standard response containing an error message.
 */
export async function getStakingPools(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetStakingPoolsParams
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchStakingPools(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getStakingPoolsError", err);
    }
}

/**
 * Retrieves the staking history based on provided parameters.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetStakingHistoryParams} [params={}] - Optional parameters to filter staking history.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing staking history data.
 *          - On failure: A standard response containing an error message.
 */
export async function getStakingHistory(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetStakingHistoryParams = {}
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchStakingHistory(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getStakingHistoryError", err);
    }
}

/**
 * Retrieves staking rewards for a specific account.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetStakingRewardsByAccountParams} params - Parameters including the account identifier.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing staking rewards details.
 *          - On failure: A standard response containing an error message.
 */
export async function getStakingRewardsByAccount(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetStakingRewardsByAccountParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchStakingRewardsByAccount(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getStakingRewardsByAccountError", err);
    }
}

/**
 * Fetches a list of missions based on provided parameters.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetMissionsParams} params - Parameters to filter missions.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing a list of missions.
 *          - On failure: A standard response containing an error message.
 */
export async function getMissions(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetMissionsParams
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchMissions(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getMissionsError", err);
    }
}

/**
 * Retrieves the leaderboard for missions based on the user address.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetMissionLeaderboardParams} [params={}] - Optional parameters including the user's address.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing the mission leaderboard.
 *          - On failure: A standard response containing an error message.
 */
export async function getMissionLeaderboard(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetMissionLeaderboardParams = {}
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchMissionLeaderboard(
            params.userAddress
        );
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getMissionLeaderboardError", err);
    }
}

/**
 * Fetches details of a specific Initial DEX Offering (IDO).
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetIDOParams} params - Parameters including the IDO identifier.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing IDO details.
 *          - On failure: A standard response containing an error message.
 */
export async function getIDO(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetIDOParams
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchIDO(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getIDOError", err);
    }
}

/**
 * Retrieves a list of all IDOs with optional filtering.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetIDOsParams} [params={}] - Optional parameters to filter the list of IDOs.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing a list of IDOs.
 *          - On failure: A standard response containing an error message.
 */
export async function getIDOs(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetIDOsParams = {}
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchIDOs(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getIDOsError", err);
    }
}

/**
 * Fetches subscribers for a specific IDO.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetIDOSubscribersParams} params - Parameters including the IDO identifier.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing a list of subscribers.
 *          - On failure: A standard response containing an error message.
 */
export async function getIDOSubscribers(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetIDOSubscribersParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchIDOSubscribers(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getIDOSubscribersError", err);
    }
}

/**
 * Retrieves the subscription details for a specific IDO.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetIDOSubscriptionParams} params - Parameters including the IDO identifier.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing subscription details.
 *          - On failure: A standard response containing an error message.
 */
export async function getIDOSubscription(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetIDOSubscriptionParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchIDOSubscription(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getIDOSubscriptionError", err);
    }
}

/**
 * Retrieves activities related to a specific IDO.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetIDOActivitiesParams} [params={}] - Optional parameters to filter IDO activities.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing IDO activities.
 *          - On failure: A standard response containing an error message.
 */
export async function getIDOActivities(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetIDOActivitiesParams = {}
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchIDOActivities(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getIDOActivitiesError", err);
    }
}

/**
 * Fetches the whitelist for a specific IDO.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetIDOWhitelistParams} params - Parameters including the IDO identifier.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing the IDO whitelist.
 *          - On failure: A standard response containing an error message.
 */
export async function getIDOWhitelist(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetIDOWhitelistParams
): Promise<StandardResponse> {
    try {
        const result = await this.indexerGrpcMitoApi.fetchIDOWhitelist(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getIDOWhitelistError", err);
    }
}

/**
 * Retrieves claim references based on provided parameters.
 *
 * @this InjectiveGrpcBase
 * @param {MitoTypes.GetClaimReferencesParams} params - Parameters to filter claim references.
 * @returns {Promise<StandardResponse>}
 *          - On success: A standard response containing claim references.
 *          - On failure: A standard response containing an error message.
 */
export async function getClaimReferences(
    this: InjectiveGrpcBase,
    params: MitoTypes.GetClaimReferencesParams
): Promise<StandardResponse> {
    try {
        const result =
            await this.indexerGrpcMitoApi.fetchClaimReferences(params);
        return createSuccessResponse(result);
    } catch (err) {
        return createErrorResponse("getClaimReferencesError", err);
    }
}
