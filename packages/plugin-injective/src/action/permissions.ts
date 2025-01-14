import { createGenericAction } from "./base";
import * as PermissionsTemplates from "@injective/template/permissions";
import * as PermissionsExamples from "@injective/examples/permissions";

export const GetAddressesByRoleAction = createGenericAction({
    name: "GET_ADDRESSES_BY_ROLE",
    description: "Fetches addresses associated with a specific role",
    template: PermissionsTemplates.getAddressesByRoleTemplate,
    examples: PermissionsExamples.getAddressesByRoleExample,
    functionName: "getAddressesByRole",
    similes: [
        "view role members",
        "list role addresses",
        "check role assignments",
    ],
    validateContent: () => true,
});

export const GetAddressRolesAction = createGenericAction({
    name: "GET_ADDRESS_ROLES",
    description: "Retrieves roles associated with a specific address",
    template: PermissionsTemplates.getAddressRolesTemplate,
    examples: PermissionsExamples.getAddressRolesExample,
    functionName: "getAddressRoles",
    similes: [
        "view address permissions",
        "check user roles",
        "list member roles",
    ],
    validateContent: () => true,
});

export const GetAllNamespacesAction = createGenericAction({
    name: "GET_ALL_NAMESPACES",
    description: "Retrieves all namespaces within the permissions module",
    template: PermissionsTemplates.getAllNamespacesTemplate,
    examples: PermissionsExamples.getAllNamespacesExample,
    functionName: "getAllNamespaces",
    similes: ["list namespaces", "view all namespaces", "get namespace list"],
    validateContent: () => true,
});

export const GetPermissionsModuleParamsAction = createGenericAction({
    name: "GET_PERMISSIONS_MODULE_PARAMS",
    description: "Fetches the parameters of the Permissions module",
    template: PermissionsTemplates.getPermissionsModuleParamsTemplate,
    examples: PermissionsExamples.getPermissionsModuleParamsExample,
    functionName: "getPermissionsModuleParams",
    similes: [
        "view permissions params",
        "get permissions settings",
        "permission parameters",
    ],
    validateContent: () => true,
});

export const GetNamespaceByDenomAction = createGenericAction({
    name: "GET_NAMESPACE_BY_DENOM",
    description:
        "Retrieves the namespace associated with a specific denomination",
    template: PermissionsTemplates.getNamespaceByDenomTemplate,
    examples: PermissionsExamples.getNamespaceByDenomExample,
    functionName: "getNamespaceByDenom",
    similes: [
        "check denom namespace",
        "view token namespace",
        "get denom permissions",
    ],
    validateContent: () => true,
});

export const GetVouchersForAddressAction = createGenericAction({
    name: "GET_VOUCHERS_FOR_ADDRESS",
    description: "Retrieves vouchers associated with a specific address",
    template: PermissionsTemplates.getVouchersForAddressTemplate,
    examples: PermissionsExamples.getVouchersForAddressExample,
    functionName: "getVouchersForAddress",
    similes: [
        "view address vouchers",
        "list user vouchers",
        "check voucher permissions",
    ],
    validateContent: () => true,
});

// Export all actions as a group
export const PermissionsActions = [
    GetAddressesByRoleAction,
    GetAddressRolesAction,
    GetAllNamespacesAction,
    GetPermissionsModuleParamsAction,
    GetNamespaceByDenomAction,
    GetVouchersForAddressAction,
];
