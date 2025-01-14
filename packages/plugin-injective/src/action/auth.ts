import { createGenericAction } from "./base";
import * as AuthTemplates from "@injective/template/auth";
import * as AuthExamples from "@injective/examples/auth";

// Auth Module Actions
export const GetAuthModuleParamsAction = createGenericAction({
    name: "GET_AUTH_MODULE_PARAMS",
    description: "Fetches the authentication module parameters",
    template: AuthTemplates.getAuthModuleParamsTemplate,
    examples: AuthExamples.getAuthModuleParamsExample,
    functionName: "getAuthModuleParams",
    similes: ["view auth params", "get auth parameters", "check auth settings"],
    validateContent: () => true,
});

export const GetAccountDetailsAction = createGenericAction({
    name: "GET_ACCOUNT_DETAILS",
    description: "Fetches the details of the current account",
    template: AuthTemplates.getAccountDetailsTemplate,
    examples: AuthExamples.getAccountDetailsExample,
    functionName: "getAccountDetails",
    similes: ["view account", "get account details", "check my account"],
    validateContent: () => true,
});

export const GetAccountsAction = createGenericAction({
    name: "GET_ACCOUNTS",
    description: "Fetches all accounts associated with the current address",
    template: AuthTemplates.getAccountsTemplate,
    examples: AuthExamples.getAccountsExample,
    functionName: "getAccounts",
    similes: ["view accounts", "list accounts", "get all accounts"],
    validateContent: () => true,
});

export const GetGrantsAction = createGenericAction({
    name: "GET_GRANTS",
    description: "Fetches all grants based on provided parameters",
    template: AuthTemplates.getGrantsTemplate,
    examples: AuthExamples.getGrantsExample,
    functionName: "getGrants",
    similes: ["view grants", "list grants", "check grants"],
    validateContent: () => true,
});

export const GetGranterGrantsAction = createGenericAction({
    name: "GET_GRANTER_GRANTS",
    description: "Fetches all grants granted by a specific granter",
    template: AuthTemplates.getGranterGrantsTemplate,
    examples: AuthExamples.getGranterGrantsExample,
    functionName: "getGranterGrants",
    similes: [
        "view granter grants",
        "list granted permissions",
        "check given grants",
    ],
    validateContent: () => true,
});

export const GetGranteeGrantsAction = createGenericAction({
    name: "GET_GRANTEE_GRANTS",
    description: "Fetches all grants received by a specific grantee",
    template: AuthTemplates.getGranteeGrantsTemplate,
    examples: AuthExamples.getGranteeGrantsExample,
    functionName: "getGranteeGrants",
    similes: [
        "view grantee grants",
        "list received permissions",
        "check received grants",
    ],
    validateContent: () => true,
});

export const MsgGrantAction = createGenericAction({
    name: "MSG_GRANT",
    description:
        "Grants authorization to a grantee to perform specific actions",
    template: AuthTemplates.msgGrantTemplate,
    examples: AuthExamples.msgGrantExample,
    functionName: "msgGrant",
    similes: ["grant permission", "authorize action", "give access"],
    validateContent: () => true,
});

export const MsgExecAction = createGenericAction({
    name: "MSG_EXEC",
    description: "Executes authorized messages on behalf of the grantee",
    template: AuthTemplates.msgExecTemplate,
    examples: AuthExamples.msgExecExample,
    functionName: "msgExec",
    similes: ["execute grant", "run authorized action", "use permission"],
    validateContent: () => true,
});

export const MsgRevokeAction = createGenericAction({
    name: "MSG_REVOKE",
    description: "Revokes previously granted authorizations from a grantee",
    template: AuthTemplates.msgRevokeTemplate,
    examples: AuthExamples.msgRevokeExample,
    functionName: "msgRevoke",
    similes: ["revoke permission", "remove authorization", "cancel access"],
    validateContent: () => true,
});

export const AuthActions = [
    GetAuthModuleParamsAction,
    GetAccountDetailsAction,
    GetAccountsAction,
    GetGrantsAction,
    GetGranterGrantsAction,
    GetGranteeGrantsAction,
    MsgGrantAction,
    MsgExecAction,
    MsgRevokeAction,
];
