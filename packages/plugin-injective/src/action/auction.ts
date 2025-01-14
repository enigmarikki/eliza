import { createGenericAction } from "./base";
import * as AuctionTemplates from "@injective/template/auction";
import * as AuctionExamples from "@injective/examples/auction";
import { ActionExample } from "@elizaos/core";

export const GetAuctionModuleParamsAction = createGenericAction({
    name: "GET_AUCTION_MODULE_PARAMS",
    description: "Fetches the auction module parameters",
    template: AuctionTemplates.getAuctionModuleParamsTemplate,
    examples: AuctionExamples.getAuctionModuleParamsExample,
    functionName: "getAuctionModuleParams",
    similes: ["view params", "get params", "check auction parameters"],
    validateContent: () => true,
});

export const GetAuctionModuleStateAction = createGenericAction({
    name: "GET_AUCTION_MODULE_STATE",
    description: "Fetches the auction module state",
    template: AuctionTemplates.getAuctionModuleStateTemplate,
    examples: AuctionExamples.getAuctionModuleStateExample,
    functionName: "getAuctionModuleState",
    similes: ["view state", "get state", "check auction state"],
    validateContent: () => true,
});

export const GetCurrentBasketAction = createGenericAction({
    name: "GET_CURRENT_BASKET",
    description: "Fetches the current auction basket",
    template: AuctionTemplates.getCurrentBasketTemplate,
    examples: AuctionExamples.getCurrentBasketExample,
    functionName: "getCurrentBasket",
    similes: ["view basket", "get basket", "check current basket"],
    validateContent: () => true,
});

export const GetAuctionRoundAction = createGenericAction({
    name: "GET_AUCTION_ROUND",
    description: "Fetches details of a specific auction round",
    template: AuctionTemplates.getAuctionRoundTemplate,
    examples: AuctionExamples.getAuctionRoundExample,
    functionName: "getAuctionRound",
    similes: ["view round", "get round", "check auction round"],
    validateContent: () => true,
});

export const GetAuctionsAction = createGenericAction({
    name: "GET_AUCTIONS",
    description: "Fetches a list of auctions",
    template: AuctionTemplates.getAuctionsTemplate,
    examples: AuctionExamples.getAuctionsExample,
    functionName: "getAuctions",
    similes: ["view auctions", "get auctions", "list auctions"],
    validateContent: () => true,
});

export const MsgBidAction = createGenericAction({
    name: "MSG_BID",
    description: "Places a bid in an auction round",
    template: AuctionTemplates.msgBidTemplate,
    examples: AuctionExamples.msgBidExample,
    functionName: "msgBid",
    similes: ["place bid", "submit bid", "make bid", "bid on auction"],
    validateContent: () => true,
});

export const AuctionActions = [
    GetAuctionModuleParamsAction,
    GetAuctionModuleStateAction,
    GetCurrentBasketAction,
    GetAuctionRoundAction,
    GetAuctionsAction,
    MsgBidAction,
];
