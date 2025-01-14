import { createGenericAction } from "./base";
import * as ExchangeTemplates from "@injective/template/exchange";
import * as ExchangeExamples from "@injective/examples/exchange";

// Module Parameters and State Actions
export const GetModuleParamsAction = createGenericAction({
    name: "GET_MODULE_PARAMS",
    description: "Fetches the exchange module parameters",
    template: ExchangeTemplates.getModuleParamsTemplate,
    examples: ExchangeExamples.getModuleParamsExample,
    functionName: "getModuleParams",
    similes: [
        "get exchange parameters",
        "fetch module params",
        "get exchange config",
    ],
    validateContent: () => true,
});

export const GetModuleStateAction = createGenericAction({
    name: "GET_MODULE_STATE",
    description: "Fetches the current state of the exchange module",
    template: ExchangeTemplates.getModuleStateTemplate,
    examples: ExchangeExamples.getModuleStateExample,
    functionName: "getModuleState",
    similes: [
        "get exchange state",
        "fetch module state",
        "check exchange status",
    ],
    validateContent: () => true,
});

// Fee Discount Actions
export const GetFeeDiscountScheduleAction = createGenericAction({
    name: "GET_FEE_DISCOUNT_SCHEDULE",
    description: "Fetches the fee discount schedule",
    template: ExchangeTemplates.getFeeDiscountScheduleTemplate,
    examples: ExchangeExamples.getFeeDiscountScheduleExample,
    functionName: "getFeeDiscountSchedule",
    similes: ["get fee discounts", "check trading fees", "view discount tiers"],
    validateContent: () => true,
});

export const GetFeeDiscountAccountInfoAction = createGenericAction({
    name: "GET_FEE_DISCOUNT_ACCOUNT_INFO",
    description:
        "Fetches the fee discount information for a specific Injective address",
    template: ExchangeTemplates.getFeeDiscountAccountInfoTemplate,
    examples: ExchangeExamples.getFeeDiscountAccountInfoExample,
    functionName: "getFeeDiscountAccountInfo",
    similes: [
        "get account discounts",
        "check fee tier",
        "view trading discounts",
    ],
    validateContent: () => true,
});

// Trading Rewards Actions
export const GetTradingRewardsCampaignAction = createGenericAction({
    name: "GET_TRADING_REWARDS_CAMPAIGN",
    description: "Fetches the trading rewards campaign details",
    template: ExchangeTemplates.getTradingRewardsCampaignTemplate,
    examples: ExchangeExamples.getTradingRewardsCampaignExample,
    functionName: "getTradingRewardsCampaign",
    similes: ["get rewards campaign", "check trading rewards", "view campaign"],
    validateContent: () => true,
});

export const GetTradeRewardPointsAction = createGenericAction({
    name: "GET_TRADE_REWARD_POINTS",
    description:
        "Fetches the trade reward points for specified Injective addresses",
    template: ExchangeTemplates.getTradeRewardPointsTemplate,
    examples: ExchangeExamples.getTradeRewardPointsExample,
    functionName: "getTradeRewardPoints",
    similes: [
        "get reward points",
        "check trading points",
        "view points balance",
    ],
    validateContent: () => true,
});

export const GetPendingTradeRewardPointsAction = createGenericAction({
    name: "GET_PENDING_TRADE_REWARD_POINTS",
    description:
        "Fetches pending trade reward points for specified Injective addresses",
    template: ExchangeTemplates.getPendingTradeRewardPointsTemplate,
    examples: ExchangeExamples.getPendingTradeRewardPointsExample,
    functionName: "getPendingTradeRewardPoints",
    similes: [
        "check pending points",
        "view unredeemed rewards",
        "pending rewards balance",
    ],
    validateContent: () => true,
});

// Spot Market Actions
export const GetSpotMarketsAction = createGenericAction({
    name: "GET_SPOT_MARKETS",
    description: "Fetches all spot markets",
    template: ExchangeTemplates.getSpotMarketsTemplate,
    examples: ExchangeExamples.getSpotMarketsExample,
    functionName: "getSpotMarkets",
    similes: ["list spot markets", "get trading pairs", "view spot exchanges"],
    validateContent: () => true,
});

export const GetSpotMarketAction = createGenericAction({
    name: "GET_SPOT_MARKET",
    description: "Fetches a specific spot market by its ID",
    template: ExchangeTemplates.getSpotMarketTemplate,
    examples: ExchangeExamples.getSpotMarketExample,
    functionName: "getSpotMarket",
    similes: ["get market details", "fetch spot pair", "view trading pair"],
    validateContent: () => true,
});

export const GetSpotOrdersAction = createGenericAction({
    name: "GET_SPOT_ORDERS",
    description: "Fetches all spot orders",
    template: ExchangeTemplates.getSpotOrdersTemplate,
    examples: ExchangeExamples.getSpotOrdersExample,
    functionName: "getSpotOrders",
    similes: ["list spot orders", "view open orders", "check spot trades"],
    validateContent: () => true,
});

export const GetSpotOrderHistoryAction = createGenericAction({
    name: "GET_SPOT_ORDER_HISTORY",
    description: "Fetches the history of spot orders",
    template: ExchangeTemplates.getSpotOrderHistoryTemplate,
    examples: ExchangeExamples.getSpotOrderHistoryExample,
    functionName: "getSpotOrderHistory",
    similes: [
        "spot trading history",
        "past spot orders",
        "completed spot trades",
    ],
    validateContent: () => true,
});

export const GetSpotTradesAction = createGenericAction({
    name: "GET_SPOT_TRADES",
    description: "Fetches all spot trades",
    template: ExchangeTemplates.getSpotTradesTemplate,
    examples: ExchangeExamples.getSpotTradesExample,
    functionName: "getSpotTrades",
    similes: [
        "list spot trades",
        "view executed trades",
        "spot trading activity",
    ],
    validateContent: () => true,
});

// Derivative Market Actions
export const GetDerivativeMarketsAction = createGenericAction({
    name: "GET_DERIVATIVE_MARKETS",
    description: "Fetches all derivative markets",
    template: ExchangeTemplates.getDerivativeMarketsTemplate,
    examples: ExchangeExamples.getDerivativeMarketsExample,
    functionName: "getDerivativeMarkets",
    similes: ["list derivatives", "get futures markets", "view perpetuals"],
    validateContent: () => true,
});

export const GetDerivativeMarketAction = createGenericAction({
    name: "GET_DERIVATIVE_MARKET",
    description: "Fetches a specific derivative market by its ID",
    template: ExchangeTemplates.getDerivativeMarketTemplate,
    examples: ExchangeExamples.getDerivativeMarketExample,
    functionName: "getDerivativeMarket",
    similes: [
        "get derivative details",
        "fetch futures market",
        "view perpetual",
    ],
    validateContent: () => true,
});

export const GetDerivativeOrdersAction = createGenericAction({
    name: "GET_DERIVATIVE_ORDERS",
    description: "Fetches all derivative orders",
    template: ExchangeTemplates.getDerivativeOrdersTemplate,
    examples: ExchangeExamples.getDerivativeOrdersExample,
    functionName: "getDerivativeOrders",
    similes: [
        "list derivative orders",
        "view futures orders",
        "check derivative positions",
    ],
    validateContent: () => true,
});

export const GetDerivativeOrderHistoryAction = createGenericAction({
    name: "GET_DERIVATIVE_ORDER_HISTORY",
    description: "Fetches the history of derivative orders",
    template: ExchangeTemplates.getDerivativeOrderHistoryTemplate,
    examples: ExchangeExamples.getDerivativeOrderHistoryExample,
    functionName: "getDerivativeOrderHistory",
    similes: [
        "derivative trading history",
        "past futures orders",
        "completed derivative trades",
    ],
    validateContent: () => true,
});

export const GetDerivativeTradesAction = createGenericAction({
    name: "GET_DERIVATIVE_TRADES",
    description: "Fetches all derivative trades",
    template: ExchangeTemplates.getDerivativeTradesTemplate,
    examples: ExchangeExamples.getDerivativeTradesExample,
    functionName: "getDerivativeTrades",
    similes: [
        "list derivative trades",
        "view futures trades",
        "derivative trading activity",
    ],
    validateContent: () => true,
});

// Binary Options Actions
export const GetBinaryOptionsMarketsAction = createGenericAction({
    name: "GET_BINARY_OPTIONS_MARKETS",
    description: "Fetches all binary options markets",
    template: ExchangeTemplates.getBinaryOptionsMarketsTemplate,
    examples: ExchangeExamples.getBinaryOptionsMarketsExample,
    functionName: "getBinaryOptionsMarkets",
    similes: [
        "list binary markets",
        "view options markets",
        "get binary options",
    ],
    validateContent: () => true,
});

export const GetBinaryOptionsMarketAction = createGenericAction({
    name: "GET_BINARY_OPTIONS_MARKET",
    description: "Fetches a specific binary options market by its ID",
    template: ExchangeTemplates.getBinaryOptionsMarketTemplate,
    examples: ExchangeExamples.getBinaryOptionsMarketExample,
    functionName: "getBinaryOptionsMarket",
    similes: [
        "get binary details",
        "fetch options market",
        "view binary market",
    ],
    validateContent: () => true,
});

// Positions Actions
export const GetPositionsAction = createGenericAction({
    name: "GET_POSITIONS",
    description: "Fetches all positions",
    template: ExchangeTemplates.getPositionsTemplate,
    examples: ExchangeExamples.getPositionsExample,
    functionName: "getPositions",
    similes: ["list positions", "get trading positions", "view open trades"],
    validateContent: () => true,
});

export const GetPositionsV2Action = createGenericAction({
    name: "GET_POSITIONS_V2",
    description: "Fetches all positions using version 2 of the API",
    template: ExchangeTemplates.getPositionsV2Template,
    examples: ExchangeExamples.getPositionsV2Example,
    functionName: "getPositionsV2",
    similes: [
        "list positions v2",
        "get trading positions v2",
        "view positions v2",
    ],
    validateContent: () => true,
});

// Funding Rate Actions
export const GetFundingPaymentsAction = createGenericAction({
    name: "GET_FUNDING_PAYMENTS",
    description: "Fetches all funding payments",
    template: ExchangeTemplates.getFundingPaymentsTemplate,
    examples: ExchangeExamples.getFundingPaymentsExample,
    functionName: "getFundingPayments",
    similes: [
        "list funding payments",
        "view funding history",
        "check funding fees",
    ],
    validateContent: () => true,
});

export const GetFundingRatesAction = createGenericAction({
    name: "GET_FUNDING_RATES",
    description: "Fetches all funding rates",
    template: ExchangeTemplates.getFundingRatesTemplate,
    examples: ExchangeExamples.getFundingRatesExample,
    functionName: "getFundingRates",
    similes: [
        "list funding rates",
        "check funding percentages",
        "view rate history",
    ],
    validateContent: () => true,
});

// Subaccount Actions
export const GetSubaccountTradeNonceAction = createGenericAction({
    name: "GET_SUBACCOUNT_TRADE_NONCE",
    description: "Fetches the trade nonce for a specific subaccount",
    template: ExchangeTemplates.getSubaccountTradeNonceTemplate,
    examples: ExchangeExamples.getSubaccountTradeNonceExample,
    functionName: "getSubaccountTradeNonce",
    similes: [
        "get trade nonce",
        "fetch subaccount nonce",
        "check trade sequence",
    ],
    validateContent: () => true,
});

export const GetSubaccountsListAction = createGenericAction({
    name: "GET_SUBACCOUNTS_LIST",
    description: "Fetches the list of subaccounts for a specific address",
    template: ExchangeTemplates.getSubaccountsListTemplate,
    examples: ExchangeExamples.getSubaccountsListExample,
    functionName: "getSubaccountsList",
    similes: [
        "list subaccounts",
        "view trading accounts",
        "get subaccount list",
    ],
    validateContent: () => true,
});

export const GetSubaccountBalancesListAction = createGenericAction({
    name: "GET_SUBACCOUNT_BALANCES_LIST",
    description: "Fetches the balances list for a specific subaccount",
    template: ExchangeTemplates.getSubaccountBalancesListTemplate,
    examples: ExchangeExamples.getSubaccountBalancesListExample,
    functionName: "getSubaccountBalancesList",
    similes: [
        "list subaccount balances",
        "view account holdings",
        "check subaccount funds",
    ],
    validateContent: () => true,
});

export const GetSubaccountHistoryAction = createGenericAction({
    name: "GET_SUBACCOUNT_HISTORY",
    description: "Fetches the history of a specific subaccount",
    template: ExchangeTemplates.getSubaccountHistoryTemplate,
    examples: ExchangeExamples.getSubaccountHistoryExample,
    functionName: "getSubaccountHistory",
    similes: [
        "view account history",
        "check historical activity",
        "get transfer history",
    ],
    validateContent: () => true,
});

export const GetSubaccountOrderSummaryAction = createGenericAction({
    name: "GET_SUBACCOUNT_ORDER_SUMMARY",
    description: "Fetches the order summary for a specific subaccount",
    template: ExchangeTemplates.getSubaccountOrderSummaryTemplate,
    examples: ExchangeExamples.getSubaccountOrderSummaryExample,
    functionName: "getSubaccountOrderSummary",
    similes: [
        "get order summary",
        "view trading summary",
        "check order totals",
    ],
    validateContent: () => true,
});

// Order Management Actions
export const GetOrderStatesAction = createGenericAction({
    name: "GET_ORDER_STATES",
    description: "Fetches the states of orders",
    template: ExchangeTemplates.getOrderStatesTemplate,
    examples: ExchangeExamples.getOrderStatesExample,
    functionName: "getOrderStates",
    similes: ["check order status", "get order states", "view order status"],
    validateContent: () => true,
});

// Portfolio Actions
export const GetAccountPortfolioAction = createGenericAction({
    name: "GET_ACCOUNT_PORTFOLIO",
    description: "Fetches the account portfolio for a specific address",
    template: ExchangeTemplates.getAccountPortfolioTemplate,
    examples: ExchangeExamples.getAccountPortfolioExample,
    functionName: "getAccountPortfolio",
    similes: ["get portfolio", "view holdings", "check balance"],
    validateContent: () => true,
});

export const GetAccountPortfolioBalancesAction = createGenericAction({
    name: "GET_ACCOUNT_PORTFOLIO_BALANCES",
    description:
        "Fetches the balances of the account portfolio for a specific address",
    template: ExchangeTemplates.getAccountPortfolioBalancesTemplate,
    examples: ExchangeExamples.getAccountPortfolioBalancesExample,
    functionName: "getAccountPortfolioBalances",
    similes: [
        "get portfolio balances",
        "view account holdings",
        "check portfolio funds",
    ],
    validateContent: () => true,
});

// Rewards and Opt-out Actions
export const GetIsOptedOutOfRewardsAction = createGenericAction({
    name: "GET_IS_OPTED_OUT_OF_REWARDS",
    description: "Checks if an account is opted out of rewards",
    template: ExchangeTemplates.getIsOptedOutOfRewardsTemplate,
    examples: ExchangeExamples.getIsOptedOutOfRewardsExample,
    functionName: "getIsOptedOutOfRewards",
    similes: [
        "check rewards status",
        "verify opt-out",
        "rewards participation status",
    ],
    validateContent: () => true,
});

export const GetRewardsAction = createGenericAction({
    name: "GET_REWARDS",
    description: "Fetches the rewards for specified Injective addresses",
    template: ExchangeTemplates.getRewardsTemplate,
    examples: ExchangeExamples.getRewardsExample,
    functionName: "getRewards",
    similes: ["fetch rewards", "get trading rewards", "view earned rewards"],
    validateContent: () => true,
});

// Atomic Swap Actions
export const GetAtomicSwapHistoryAction = createGenericAction({
    name: "GET_ATOMIC_SWAP_HISTORY",
    description: "Fetches the atomic swap history",
    template: ExchangeTemplates.getAtomicSwapHistoryTemplate,
    examples: ExchangeExamples.getAtomicSwapHistoryExample,
    functionName: "getAtomicSwapHistory",
    similes: ["list atomic swaps", "view swap history", "check swap records"],
    validateContent: () => true,
});

// Grid Strategy Actions
export const GetGridStrategiesAction = createGenericAction({
    name: "GET_GRID_STRATEGIES",
    description: "Fetches all grid strategies",
    template: ExchangeTemplates.getGridStrategiesTemplate,
    examples: ExchangeExamples.getGridStrategiesExample,
    functionName: "getGridStrategies",
    similes: ["list grid strategies", "view trading grids", "check grid bots"],
    validateContent: () => true,
});

// Historical Data Actions
export const GetHistoricalBalanceAction = createGenericAction({
    name: "GET_HISTORICAL_BALANCE",
    description: "Fetches the historical balance",
    template: ExchangeTemplates.getHistoricalBalanceTemplate,
    examples: ExchangeExamples.getHistoricalBalanceExample,
    functionName: "getHistoricalBalance",
    similes: [
        "view balance history",
        "check past balances",
        "historical account value",
    ],
    validateContent: () => true,
});

export const GetHistoricalRpnlAction = createGenericAction({
    name: "GET_HISTORICAL_RPNL",
    description: "Fetches the historical realized PnL (Rpnl)",
    template: ExchangeTemplates.getHistoricalRpnlTemplate,
    examples: ExchangeExamples.getHistoricalRpnlExample,
    functionName: "getHistoricalRpnl",
    similes: [
        "view pnl history",
        "check realized profits",
        "historical trading performance",
    ],
    validateContent: () => true,
});

export const GetHistoricalVolumesAction = createGenericAction({
    name: "GET_HISTORICAL_VOLUMES",
    description: "Fetches the historical trading volumes",
    template: ExchangeTemplates.getHistoricalVolumesTemplate,
    examples: ExchangeExamples.getHistoricalVolumesExample,
    functionName: "getHistoricalVolumes",
    similes: [
        "view volume history",
        "check trading volumes",
        "historical activity",
    ],
    validateContent: () => true,
});

// Leaderboard Actions
export const GetPnlLeaderboardAction = createGenericAction({
    name: "GET_PNL_LEADERBOARD",
    description: "Fetches the PnL leaderboard",
    template: ExchangeTemplates.getPnlLeaderboardTemplate,
    examples: ExchangeExamples.getPnlLeaderboardExample,
    functionName: "getPnlLeaderboard",
    similes: [
        "view top traders",
        "check profit rankings",
        "trader leaderboard",
    ],
    validateContent: () => true,
});

export const GetVolLeaderboardAction = createGenericAction({
    name: "GET_VOL_LEADERBOARD",
    description: "Fetches the volume leaderboard",
    template: ExchangeTemplates.getVolLeaderboardTemplate,
    examples: ExchangeExamples.getVolLeaderboardExample,
    functionName: "getVolLeaderboard",
    similes: [
        "view volume rankings",
        "check trading activity",
        "volume leaderboard",
    ],
    validateContent: () => true,
});

export const GetPnlLeaderboardFixedResolutionAction = createGenericAction({
    name: "GET_PNL_LEADERBOARD_FIXED_RESOLUTION",
    description: "Fetches the PnL leaderboard with fixed resolution",
    template: ExchangeTemplates.getPnlLeaderboardFixedResolutionTemplate,
    examples: ExchangeExamples.getPnlLeaderboardFixedResolutionExample,
    functionName: "getPnlLeaderboardFixedResolution",
    similes: [
        "view fixed pnl rankings",
        "check profit leaders",
        "fixed resolution leaderboard",
    ],
    validateContent: () => true,
});

export const GetVolLeaderboardFixedResolutionAction = createGenericAction({
    name: "GET_VOL_LEADERBOARD_FIXED_RESOLUTION",
    description: "Fetches the volume leaderboard with fixed resolution",
    template: ExchangeTemplates.getVolLeaderboardFixedResolutionTemplate,
    examples: ExchangeExamples.getVolLeaderboardFixedResolutionExample,
    functionName: "getVolLeaderboardFixedResolution",
    similes: [
        "view fixed volume rankings",
        "check trading leaders",
        "fixed resolution volume board",
    ],
    validateContent: () => true,
});

// Denom Holders Action
export const GetDenomHoldersAction = createGenericAction({
    name: "GET_DENOM_HOLDERS",
    description: "Fetches the holders of a specific denomination",
    template: ExchangeTemplates.getDenomHoldersTemplate,
    examples: ExchangeExamples.getDenomHoldersExample,
    functionName: "getDenomHolders",
    similes: [
        "list token holders",
        "view denom distribution",
        "check token ownership",
    ],
    validateContent: () => true,
});

// Message Actions for Order Management
export const MsgBatchCancelBinaryOptionsOrdersAction = createGenericAction({
    name: "MSG_BATCH_CANCEL_BINARY_OPTIONS_ORDERS",
    description: "Broadcasts a message to batch cancel binary options orders",
    template: ExchangeTemplates.msgBatchCancelBinaryOptionsOrdersTemplate,
    examples: ExchangeExamples.msgBatchCancelBinaryOptionsOrdersExample,
    functionName: "msgBatchCancelBinaryOptionsOrders",
    similes: [
        "cancel multiple binary orders",
        "batch cancel options",
        "cancel binary trades",
    ],
    validateContent: () => true,
});

export const MsgBatchCancelDerivativeOrdersAction = createGenericAction({
    name: "MSG_BATCH_CANCEL_DERIVATIVE_ORDERS",
    description: "Broadcasts a message to batch cancel derivative orders",
    template: ExchangeTemplates.msgBatchCancelDerivativeOrdersTemplate,
    examples: ExchangeExamples.msgBatchCancelDerivativeOrdersExample,
    functionName: "msgBatchCancelDerivativeOrders",
    similes: [
        "cancel multiple derivatives",
        "batch cancel futures",
        "cancel derivative trades",
    ],
    validateContent: () => true,
});

export const MsgBatchCancelSpotOrdersAction = createGenericAction({
    name: "MSG_BATCH_CANCEL_SPOT_ORDERS",
    description: "Broadcasts a message to batch cancel spot orders",
    template: ExchangeTemplates.msgBatchCancelSpotOrdersTemplate,
    examples: ExchangeExamples.msgBatchCancelSpotOrdersExample,
    functionName: "msgBatchCancelSpotOrders",
    similes: [
        "cancel multiple spots",
        "batch cancel spot orders",
        "cancel spot trades",
    ],
    validateContent: () => true,
});

export const MsgBatchUpdateOrdersAction = createGenericAction({
    name: "MSG_BATCH_UPDATE_ORDERS",
    description: "Broadcasts a message to batch update orders",
    template: ExchangeTemplates.msgBatchUpdateOrdersTemplate,
    examples: ExchangeExamples.msgBatchUpdateOrdersExample,
    functionName: "msgBatchUpdateOrders",
    similes: [
        "update multiple orders",
        "batch modify trades",
        "bulk order update",
    ],
    validateContent: () => true,
});

// Message Actions for Individual Orders
export const MsgCancelBinaryOptionsOrderAction = createGenericAction({
    name: "MSG_CANCEL_BINARY_OPTIONS_ORDER",
    description: "Broadcasts a message to cancel a binary options order",
    template: ExchangeTemplates.msgCancelBinaryOptionsOrderTemplate,
    examples: ExchangeExamples.msgCancelBinaryOptionsOrderExample,
    functionName: "msgCancelBinaryOptionsOrder",
    similes: [
        "cancel binary order",
        "stop options trade",
        "remove binary position",
    ],
    validateContent: () => true,
});

export const MsgCancelDerivativeOrderAction = createGenericAction({
    name: "MSG_CANCEL_DERIVATIVE_ORDER",
    description: "Broadcasts a message to cancel a derivative order",
    template: ExchangeTemplates.msgCancelDerivativeOrderTemplate,
    examples: ExchangeExamples.msgCancelDerivativeOrderExample,
    functionName: "msgCancelDerivativeOrder",
    similes: [
        "cancel derivative order",
        "stop futures trade",
        "remove derivative position",
    ],
    validateContent: () => true,
});

export const MsgCancelSpotOrderAction = createGenericAction({
    name: "MSG_CANCEL_SPOT_ORDER",
    description: "Broadcasts a message to cancel a spot order",
    template: ExchangeTemplates.msgCancelSpotOrderTemplate,
    examples: ExchangeExamples.msgCancelSpotOrderExample,
    functionName: "msgCancelSpotOrder",
    similes: ["cancel spot order", "stop spot trade", "remove spot position"],
    validateContent: () => true,
});

// Message Actions for Creating Orders
export const MsgCreateBinaryOptionsLimitOrderAction = createGenericAction({
    name: "MSG_CREATE_BINARY_OPTIONS_LIMIT_ORDER",
    description: "Broadcasts a message to create a binary options limit order",
    template: ExchangeTemplates.msgCreateBinaryOptionsLimitOrderTemplate,
    examples: ExchangeExamples.msgCreateBinaryOptionsLimitOrderExample,
    functionName: "msgCreateBinaryOptionsLimitOrder",
    similes: [
        "place binary limit",
        "create options order",
        "new binary position",
    ],
    validateContent: () => true,
});

export const MsgCreateBinaryOptionsMarketOrderAction = createGenericAction({
    name: "MSG_CREATE_BINARY_OPTIONS_MARKET_ORDER",
    description: "Broadcasts a message to create a binary options market order",
    template: ExchangeTemplates.msgCreateBinaryOptionsMarketOrderTemplate,
    examples: ExchangeExamples.msgCreateBinaryOptionsMarketOrderExample,
    functionName: "msgCreateBinaryOptionsMarketOrder",
    similes: [
        "place binary market",
        "instant options trade",
        "market binary position",
    ],
    validateContent: () => true,
});

export const MsgCreateDerivativeLimitOrderAction = createGenericAction({
    name: "MSG_CREATE_DERIVATIVE_LIMIT_ORDER",
    description: "Broadcasts a message to create a derivative limit order",
    template: ExchangeTemplates.msgCreateDerivativeLimitOrderTemplate,
    examples: ExchangeExamples.msgCreateDerivativeLimitOrderExample,
    functionName: "msgCreateDerivativeLimitOrder",
    similes: [
        "place futures limit",
        "create derivative order",
        "new futures position",
    ],
    validateContent: () => true,
});

export const MsgCreateDerivativeMarketOrderAction = createGenericAction({
    name: "MSG_CREATE_DERIVATIVE_MARKET_ORDER",
    description: "Broadcasts a message to create a derivative market order",
    template: ExchangeTemplates.msgCreateDerivativeMarketOrderTemplate,
    examples: ExchangeExamples.msgCreateDerivativeMarketOrderExample,
    functionName: "msgCreateDerivativeMarketOrder",
    similes: [
        "place futures market",
        "instant derivative trade",
        "market futures position",
    ],
    validateContent: () => true,
});

export const MsgCreateSpotLimitOrderAction = createGenericAction({
    name: "MSG_CREATE_SPOT_LIMIT_ORDER",
    description: "Broadcasts a message to create a spot limit order",
    template: ExchangeTemplates.msgCreateSpotLimitOrderTemplate,
    examples: ExchangeExamples.msgCreateSpotLimitOrderExample,
    functionName: "msgCreateSpotLimitOrder",
    similes: ["place spot limit", "create spot order", "new spot position"],
    validateContent: () => true,
});

export const MsgCreateSpotMarketOrderAction = createGenericAction({
    name: "MSG_CREATE_SPOT_MARKET_ORDER",
    description: "Broadcasts a message to create a spot market order",
    template: ExchangeTemplates.msgCreateSpotMarketOrderTemplate,
    examples: ExchangeExamples.msgCreateSpotMarketOrderExample,
    functionName: "msgCreateSpotMarketOrder",
    similes: [
        "place spot market",
        "instant spot trade",
        "market spot position",
    ],
    validateContent: () => true,
});

// Message Actions for Deposits and Withdrawals
export const MsgDepositAction = createGenericAction({
    name: "MSG_DEPOSIT",
    description: "Broadcasts a message to deposit funds",
    template: ExchangeTemplates.msgDepositTemplate,
    examples: ExchangeExamples.msgDepositExample,
    functionName: "msgDeposit",
    similes: ["deposit funds", "add money", "fund account"],
    validateContent: () => true,
});

export const MsgWithdrawAction = createGenericAction({
    name: "MSG_WITHDRAW",
    description: "Broadcasts a message to withdraw funds",
    template: ExchangeTemplates.msgWithdrawTemplate,
    examples: ExchangeExamples.msgWithdrawExample,
    functionName: "msgWithdraw",
    similes: ["withdraw funds", "take money out", "remove funds"],
    validateContent: () => true,
});

// Message Actions for Position Management
export const MsgIncreasePositionMarginAction = createGenericAction({
    name: "MSG_INCREASE_POSITION_MARGIN",
    description: "Broadcasts a message to increase position margin",
    template: ExchangeTemplates.msgIncreasePositionMarginTemplate,
    examples: ExchangeExamples.msgIncreasePositionMarginExample,
    functionName: "msgIncreasePositionMargin",
    similes: ["add margin", "increase collateral", "boost position"],
    validateContent: () => true,
});

// Message Actions for Market Administration
export const MsgInstantSpotMarketLaunchAction = createGenericAction({
    name: "MSG_INSTANT_SPOT_MARKET_LAUNCH",
    description: "Broadcasts a message to instantly launch a spot market",
    template: ExchangeTemplates.msgInstantSpotMarketLaunchTemplate,
    examples: ExchangeExamples.msgInstantSpotMarketLaunchExample,
    functionName: "msgInstantSpotMarketLaunch",
    similes: [
        "launch spot market",
        "create trading pair",
        "start spot trading",
    ],
    validateContent: () => true,
});

export const MsgLiquidatePositionAction = createGenericAction({
    name: "MSG_LIQUIDATE_POSITION",
    description: "Broadcasts a message to liquidate a position",
    template: ExchangeTemplates.msgLiquidatePositionTemplate,
    examples: ExchangeExamples.msgLiquidatePositionExample,
    functionName: "msgLiquidatePosition",
    similes: ["force close position", "liquidate trade", "trigger liquidation"],
    validateContent: () => true,
});

export const MsgReclaimLockedFundsAction = createGenericAction({
    name: "MSG_RECLAIM_LOCKED_FUNDS",
    description: "Broadcasts a message to reclaim locked funds",
    template: ExchangeTemplates.msgReclaimLockedFundsTemplate,
    examples: ExchangeExamples.msgReclaimLockedFundsExample,
    functionName: "msgReclaimLockedFunds",
    similes: [
        "recover locked funds",
        "claim stuck assets",
        "retrieve locked money",
    ],
    validateContent: () => true,
});

export const MsgRewardsOptOutAction = createGenericAction({
    name: "MSG_REWARDS_OPT_OUT",
    description: "Broadcasts a message to opt out of rewards",
    template: ExchangeTemplates.msgRewardsOptOutTemplate,
    examples: ExchangeExamples.msgRewardsOptOutExample,
    functionName: "msgRewardsOptOut",
    similes: [
        "disable rewards",
        "opt out of incentives",
        "stop reward earning",
    ],
    validateContent: () => true,
});

export const MsgSignDataAction = createGenericAction({
    name: "MSG_SIGN_DATA",
    description: "Broadcasts a message to sign data",
    template: ExchangeTemplates.msgSignDataTemplate,
    examples: ExchangeExamples.msgSignDataExample,
    functionName: "msgSignData",
    similes: ["sign message", "create signature", "sign transaction"],
    validateContent: () => true,
});

export const MsgExternalTransferAction = createGenericAction({
    name: "MSG_EXTERNAL_TRANSFER",
    description: "Broadcasts a message to perform an external transfer",
    template: ExchangeTemplates.msgExternalTransferTemplate,
    examples: ExchangeExamples.msgExternalTransferExample,
    functionName: "msgExternalTransfer",
    similes: ["external send", "transfer out", "external movement"],
    validateContent: () => true,
});

export const MsgAdminUpdateBinaryOptionsMarketAction = createGenericAction({
    name: "MSG_ADMIN_UPDATE_BINARY_OPTIONS_MARKET",
    description:
        "Broadcasts a message to update a binary options market as an admin",
    template: ExchangeTemplates.msgAdminUpdateBinaryOptionsMarketTemplate,
    examples: ExchangeExamples.msgAdminUpdateBinaryOptionsMarketExample,
    functionName: "msgAdminUpdateBinaryOptionsMarket",
    similes: [
        "update binary market",
        "modify options market",
        "admin market update",
    ],
    validateContent: () => true,
});

// Export all actions as a group
export const ExchangeActions = [
    // Module Parameters and State
    GetModuleParamsAction,
    GetModuleStateAction,

    // Fee Discount
    GetFeeDiscountScheduleAction,
    GetFeeDiscountAccountInfoAction,

    // Trading Rewards
    GetTradingRewardsCampaignAction,
    GetTradeRewardPointsAction,
    GetPendingTradeRewardPointsAction,

    // Spot Market
    GetSpotMarketsAction,
    GetSpotMarketAction,
    GetSpotOrdersAction,
    GetSpotOrderHistoryAction,
    GetSpotTradesAction,

    // Derivative Market
    GetDerivativeMarketsAction,
    GetDerivativeMarketAction,
    GetDerivativeOrdersAction,
    GetDerivativeOrderHistoryAction,
    GetDerivativeTradesAction,

    // Binary Options
    GetBinaryOptionsMarketsAction,
    GetBinaryOptionsMarketAction,

    // Positions
    GetPositionsAction,
    GetPositionsV2Action,

    // Funding
    GetFundingPaymentsAction,
    GetFundingRatesAction,

    // Subaccount
    GetSubaccountTradeNonceAction,
    GetSubaccountsListAction,
    GetSubaccountBalancesListAction,
    GetSubaccountHistoryAction,
    GetSubaccountOrderSummaryAction,

    // Order Management
    GetOrderStatesAction,

    // Portfolio
    GetAccountPortfolioAction,
    GetAccountPortfolioBalancesAction,

    // Rewards and Opt-out
    GetIsOptedOutOfRewardsAction,
    GetRewardsAction,

    // Atomic Swap
    GetAtomicSwapHistoryAction,

    // Grid Strategy
    GetGridStrategiesAction,

    // Historical Data
    GetHistoricalBalanceAction,
    GetHistoricalRpnlAction,
    GetHistoricalVolumesAction,

    // Leaderboard
    GetPnlLeaderboardAction,
    GetVolLeaderboardAction,
    GetPnlLeaderboardFixedResolutionAction,
    GetVolLeaderboardFixedResolutionAction,

    // Denom Holders
    GetDenomHoldersAction,

    // Message Actions - Order Management
    MsgBatchCancelBinaryOptionsOrdersAction,
    MsgBatchCancelDerivativeOrdersAction,
    MsgBatchCancelSpotOrdersAction,
    MsgBatchUpdateOrdersAction,
    MsgCancelBinaryOptionsOrderAction,
    MsgCancelDerivativeOrderAction,
    MsgCancelSpotOrderAction,

    // Message Actions - Creating Orders
    MsgCreateBinaryOptionsLimitOrderAction,
    MsgCreateBinaryOptionsMarketOrderAction,
    MsgCreateDerivativeLimitOrderAction,
    MsgCreateDerivativeMarketOrderAction,
    MsgCreateSpotLimitOrderAction,
    MsgCreateSpotMarketOrderAction,

    // Message Actions - Deposits and Withdrawals
    MsgDepositAction,
    MsgWithdrawAction,

    // Message Actions - Position Management
    MsgIncreasePositionMarginAction,
    MsgInstantSpotMarketLaunchAction,
    MsgLiquidatePositionAction,

    // Message Actions - Administration and Utils
    MsgReclaimLockedFundsAction,
    MsgRewardsOptOutAction,
    MsgSignDataAction,
    MsgExternalTransferAction,
    MsgAdminUpdateBinaryOptionsMarketAction,
];
