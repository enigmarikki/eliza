// Mito Module Templates

export const getVaultTemplate = `
Extract the following details for retrieving a specific vault:
- **contractAddress** (string): Optional contract address
- **slug** (string): Optional vault slug

Request format:

\`\`\`json
{
    "contractAddress": "inj1...",
    "slug": "vault-slug"
}
\`\`\`

Response format:

\`\`\`json
{
    "contractAddress": "inj1...",
    "codeId": "1",
    "vaultName": "Example Vault",
    "marketId": "0x123...",
    "currentTvl": 1000000,
    "profits": {
        "allTimeChange": 10.5,
        "threeMonthsChange": 5.2,
        "oneMonthChange": 2.1,
        "oneDayChange": 0.5,
        "oneWeekChange": 1.2,
        "oneYearChange": 15.3,
        "threeYearsChange": 45.6,
        "sixMonthsChange": 8.4
    },
    "updatedAt": 1632150400,
    "vaultType": "perpetual",
    "lpTokenPrice": 1.05,
    "subaccountInfo": {
        "subaccountId": "0x123...",
        "balancesList": [
            {
                "denom": "inj",
                "totalBalance": "1000000000"
            }
        ]
    },
    "masterContractAddress": "inj1...",
    "totalLpAmount": "1000000",
    "slug": "vault-slug",
    "createdAt": 1632150400,
    "notionalValueCap": "10000000",
    "tvlChanges": {
        "allTimeChange": 20.5
    },
    "apy": 15.2,
    "apy7D": 14.8,
    "apy7DFq": 14.9,
    "apyue": 15.0,
    "apyV3": 15.1,
    "registrationMode": "open"
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getVaultsTemplate = `
Extract the following details for retrieving vaults:
- **limit** (number): Optional number of records
- **codeId** (string): Optional code ID filter
- **pageIndex** (number): Optional page index

Request format:

\`\`\`json
{
    "limit": 10,
    "codeId": "1",
    "pageIndex": 0
}
\`\`\`

Response format:

\`\`\`json
{
    "vaults": [
        {
            "contractAddress": "inj1...",
            "vaultName": "Example Vault",
            "currentTvl": 1000000,
            "lpTokenPrice": 1.05,
            "apy": 15.2
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getLpTokenPriceChartTemplate = `
Extract the following details for LP token price chart:
- **to** (string): Optional end timestamp
- **from** (string): Optional start timestamp
- **vaultAddress** (string): Vault address

Request format:

\`\`\`json
{
    "to": "1640995200",
    "from": "1633360000",
    "vaultAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "priceSnapshots": [
        {
            "price": 1.05,
            "updatedAt": 1633360000
        }
    ]
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getTVLChartTemplate = `
Extract the following details for TVL chart:
- **to** (string): Optional end timestamp
- **from** (string): Optional start timestamp
- **vaultAddress** (string): Vault address

Request format:

\`\`\`json
{
    "to": "1640995200",
    "from": "1633360000",
    "vaultAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "priceSnapshots": [
        {
            "price": 1000000,
            "updatedAt": 1633360000
        }
    ]
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getVaultsByHolderAddressTemplate = `
Extract the following details for vaults by holder:
- **skip** (number): Optional skip count
- **limit** (number): Optional number of records
- **holderAddress** (string): Holder address
- **vaultAddress** (string): Optional vault address

Request format:

\`\`\`json
{
    "skip": 0,
    "limit": 10,
    "holderAddress": "inj1...",
    "vaultAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "subscriptions": [
        {
            "vaultInfo": {
                "contractAddress": "inj1...",
                "vaultName": "Example Vault",
                "currentTvl": 1000000
            },
            "lpAmount": "1000000",
            "holderAddress": "inj1...",
            "lpAmountPercentage": 0.1
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getLPHoldersTemplate = `
Extract the following details for LP holders:
- **skip** (number): Optional skip count
- **limit** (number): Optional number of records
- **vaultAddress** (string): Vault address
- **stakingContractAddress** (string): Staking contract address

Request format:

\`\`\`json
{
    "skip": 0,
    "limit": 10,
    "vaultAddress": "inj1...",
    "stakingContractAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "holders": [
        {
            "holderAddress": "inj1...",
            "vaultAddress": "inj1...",
            "amount": "1000000",
            "updatedAt": 1633360000,
            "lpAmountPercentage": 0.1,
            "redemptionLockTime": "1640995200",
            "stakedAmount": "500000"
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getHolderPortfolioTemplate = `
Extract the following details for holder portfolio:
- **holderAddress** (string): Holder address
- **stakingContractAddress** (string): Staking contract address

Request format:

\`\`\`json
{
    "holderAddress": "inj1...",
    "stakingContractAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "totalValue": 1000000,
    "pnl": 50000,
    "totalValueChartList": [
        {
            "price": 1000000,
            "updatedAt": 1633360000
        }
    ],
    "pnlChartList": [
        {
            "price": 50000,
            "updatedAt": 1633360000
        }
    ],
    "updatedAt": 1633360000
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getLeaderboardTemplate = `
Extract the following details for leaderboard:
- **epochId** (number): Optional epoch ID

Request format:

\`\`\`json
{
    "epochId": 1
}
\`\`\`

Response format:

\`\`\`json
{
    "entriesList": [
        {
            "address": "inj1...",
            "pnl": 50000
        }
    ],
    "snapshotBlock": "1000000",
    "updatedAt": 1633360000,
    "epochId": 1
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getLeaderboardEpochsTemplate = `
Extract the following details for leaderboard epochs:
- **limit** (number): Optional number of records
- **toEpochId** (number): Optional end epoch ID
- **fromEpochId** (number): Optional start epoch ID

Request format:

\`\`\`json
{
    "limit": 10,
    "toEpochId": 10,
    "fromEpochId": 1
}
\`\`\`

Response format:

\`\`\`json
{
    "epochs": [
        {
            "epochId": 1,
            "startAt": 1633360000,
            "endAt": 1640995200,
            "isLive": true
        }
    ],
    "pagination": {
        "total": 10
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getTransferHistoryTemplate = `
Extract the following details for transfer history:
- **vault** (string): Optional vault address
- **account** (string): Optional account address
- **limit** (number): Optional number of records
- **toNumber** (number): Optional end number
- **fromNumber** (number): Optional start number

Request format:

\`\`\`json
{
    "vault": "inj1...",
    "account": "inj1...",
    "limit": 10,
    "toNumber": 100,
    "fromNumber": 1
}
\`\`\`

Response format:

\`\`\`json
{
    "transfers": [
        {
            "lpAmount": "1000000",
            "coins": [
                {
                    "denom": "inj",
                    "amount": "1000000"
                }
            ],
            "usdValue": "1000000",
            "isDeposit": true,
            "executedAt": 1633360000,
            "account": "inj1...",
            "vault": "inj1...",
            "txHash": "0x...",
            "tidByVault": 1,
            "tidByAccount": 1
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getStakingPoolsTemplate = `
Extract the following details for staking pools:
- **staker** (string): Optional staker address
- **stakingContractAddress** (string): Staking contract address

Request format:

\`\`\`json
{
    "staker": "inj1...",
    "stakingContractAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "pools": [
        {
            "vaultName": "Example Vault",
            "vaultAddress": "inj1...",
            "stakeDenom": "inj",
            "gauges": [
                {
                    "id": "1",
                    "owner": "inj1...",
                    "startTimestamp": 1633360000,
                    "endTimestamp": 1640995200,
                    "rewardTokens": [
                        {
                            "denom": "inj",
                            "amount": "1000000"
                        }
                    ],
                    "lastDistribution": 1633360000,
                    "status": "active"
                }
            ],
            "apr": 15.2,
            "totalLiquidity": 1000000,
            "stakingAddress": "inj1...",
            "aprBreakdown": {
                "inj": 15.2
            }
        }
    ],
    "pagination": {
        "total": 10
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getStakingHistoryTemplate = `
Extract the following details for staking history:
- **staker** (string): Optional staker address
- **toNumber** (number): Optional end number
- **limit** (number): Optional number of records
- **fromNumber** (number): Optional start number

Request format:

\`\`\`json
{
    "staker": "inj1...",
    "toNumber": 100,
    "limit": 10,
    "fromNumber": 1
}
\`\`\`

Response format:

\`\`\`json
{
    "activities": [
        {
            "action": "stake",
            "txHash": "0x...",
            "staker": "inj1...",
            "vaultAddress": "inj1...",
            "numberByAccount": 1,
            "timestamp": 1633360000,
            "rewardedTokens": [
                {
                    "denom": "inj",
                    "amount": "1000000"
                }
            ],
            "stakeAmount": {
                "denom": "inj",
                "amount": "1000000"
            }
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getStakingRewardsByAccountTemplate = `
Extract the following details for staking rewards:
- **staker** (string): Staker address
- **stakingContractAddress** (string): Staking contract address

Request format:

\`\`\`json
{
    "staker": "inj1...",
    "stakingContractAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "rewards": [
        {
            "apr": 15.2,
            "vaultName": "Example Vault",
            "vaultAddress": "inj1...",
            "lockTimestamp": 1633360000,
            "claimableRewards": [
                {
                    "denom": "inj",
                    "amount": "1000000"
                }
            ],
            "stakedAmount": {
                "denom": "inj",
                "amount": "1000000"
            },
            "lockedAmount": {
                "denom": "inj",
                "amount": "1000000"
            }
        }
    ],
    "pagination": {
        "total": 10
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getMissionsTemplate = `
Extract the following details for retrieving missions:
- **accountAddress** (string): Account address

Request format:

\`\`\`json
{
    "accountAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "missions": [
        {
            "id": "mission1",
            "points": "100",
            "completed": true,
            "accruedPoints": "50",
            "updatedAt": 1633360000,
            "progress": 0.5,
            "expected": 100
        }
    ]
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getMissionLeaderboardTemplate = `
Extract the following details for mission leaderboard:
- **userAddress** (string): Optional user address

Request format:

\`\`\`json
{
    "userAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "entries": [
        {
            "address": "inj1...",
            "accruedPoints": "100"
        }
    ],
    "updatedAt": 1633360000,
    "rank": "1"
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getIDOTemplate = `
Extract the following details for IDO information:
- **contractAddress** (string): Contract address
- **accountAddress** (string): Optional account address

Request format:

\`\`\`json
{
    "contractAddress": "inj1...",
    "accountAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "ido": {
        "startTime": 1633360000,
        "endTime": 1640995200,
        "owner": "inj1...",
        "status": "active",
        "tokenInfo": {
            "denom": "inj",
            "supply": "1000000",
            "symbol": "INJ",
            "decimal": 18,
            "logoUrl": "https://example.com/logo.png"
        },
        "capPerAddress": "1000000",
        "contractAddress": "inj1...",
        "subscribedAmount": "500000",
        "projectTokenAmount": "1000000",
        "targetAmountInQuoteDenom": "1000000",
        "secondBeforeStartToSetQuotePrice": 3600,
        "targetAmountInUsd": "1000000",
        "tokenPrice": 1.0,
        "isAccountWhiteListed": true,
        "isLaunchWithVault": true,
        "isVestingScheduleEnabled": true,
        "name": "Example IDO",
        "progress": [
            {
                "status": "active",
                "timestamp": 1633360000
            }
        ],
        "quoteDenom": "inj",
        "stakeToSubscription": [
            {
                "stakedAmount": "1000000",
                "subscribableAmount": "500000"
            }
        ],
        "useWhitelist": true,
        "marketId": "0x...",
        "vaultAddress": "inj1..."
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getIDOsTemplate = `
Extract the following details for retrieving IDOs:
- **status** (string): Optional status filter
- **limit** (number): Optional number of records
- **toNumber** (number): Optional end number
- **accountAddress** (string): Optional account address
- **ownerAddress** (string): Optional owner address

Request format:

\`\`\`json
{
    "status": "active",
    "limit": 10,
    "toNumber": 100,
    "accountAddress": "inj1...",
    "ownerAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "idos": [
        {
            "startTime": 1633360000,
            "endTime": 1640995200,
            "owner": "inj1...",
            "status": "active",
            "contractAddress": "inj1...",
            "name": "Example IDO"
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getIDOSubscribersTemplate = `
Extract the following details for IDO subscribers:
- **skip** (number): Optional skip count
- **limit** (number): Optional number of records
- **sortBy** (string): Optional sort field
- **contractAddress** (string): Contract address

Request format:

\`\`\`json
{
    "skip": 0,
    "limit": 10,
    "sortBy": "subscribedAmount",
    "contractAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "marketId": "0x...",
    "quoteDenom": "inj",
    "subscribers": [
        {
            "address": "inj1...",
            "subscribedCoin": {
                "denom": "inj",
                "amount": "1000000"
            },
            "lastSubscribeTime": 1633360000,
            "estimateTokenReceived": {
                "denom": "token",
                "amount": "500000"
            },
            "createdAt": 1633360000
        }
    ],
    "pagination": {
        "total": 100
    },
    "tokenInfo": {
        "denom": "inj",
        "supply": "1000000",
        "symbol": "INJ",
        "decimal": 18,
        "logoUrl": "https://example.com/logo.png"
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getIDOSubscriptionTemplate = `
Extract the following details for IDO subscription:
- **contractAddress** (string): Contract address
- **accountAddress** (string): Account address

Request format:

\`\`\`json
{
    "contractAddress": "inj1...",
    "accountAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "subscription": {
        "maxSubscriptionCoin": {
            "denom": "inj",
            "amount": "1000000"
        },
        "committedAmount": "500000",
        "price": 1.0,
        "claimableCoins": [
            {
                "denom": "token",
                "amount": "500000"
            }
        ],
        "rewardClaimed": false,
        "tokenInfo": {
            "denom": "inj",
            "supply": "1000000",
            "symbol": "INJ",
            "decimal": 18,
            "logoUrl": "https://example.com/logo.png"
        },
        "quoteDenom": "inj",
        "updatedAt": 1633360000,
        "stakedAmount": "1000000",
        "marketId": "0x..."
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getIDOActivitiesTemplate = `
Extract the following details for IDO activities:
- **contractAddress** (string): Optional contract address
- **accountAddress** (string): Optional account address
- **limit** (number): Optional number of records
- **toNumber** (string): Optional end number

Request format:

\`\`\`json
{
    "contractAddress": "inj1...",
    "accountAddress": "inj1...",
    "limit": 10,
    "toNumber": "100"
}
\`\`\`

Response format:

\`\`\`json
{
    "activities": [
        {
            "address": "inj1...",
            "subscribedCoin": {
                "denom": "inj",
                "amount": "1000000"
            },
            "usdValue": 1000000,
            "timestamp": 1633360000,
            "txHash": "0x..."
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getIDOWhitelistTemplate = `
Extract the following details for IDO whitelist:
- **skip** (number): Optional skip count
- **limit** (number): Optional number of records
- **idoAddress** (string): IDO address

Request format:

\`\`\`json
{
    "skip": 0,
    "limit": 10,
    "idoAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "idoAddress": "inj1...",
    "accounts": [
        {
            "accountAddress": "inj1...",
            "updatedAt": 1633360000,
            "weight": "1.0"
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;

export const getClaimReferencesTemplate = `
Extract the following details for claim references:
- **skip** (number): Optional skip count
- **limit** (number): Optional number of records
- **idoAddress** (string): IDO address
- **accountAddress** (string): Account address

Request format:

\`\`\`json
{
    "skip": 0,
    "limit": 10,
    "idoAddress": "inj1...",
    "accountAddress": "inj1..."
}
\`\`\`

Response format:

\`\`\`json
{
    "claimReferences": [
        {
            "denom": "inj",
            "updatedAt": 1633360000,
            "claimedAmount": "500000",
            "claimableAmount": "1000000",
            "accountAddress": "inj1...",
            "cwContractAddress": "inj1...",
            "idoContractAddress": "inj1...",
            "startVestingTime": 1633360000,
            "vestingDurationSeconds": 2592000
        }
    ],
    "pagination": {
        "total": 100
    }
}
\`\`\`

Here are the recent user messages for context:
{{recentMessages}}
`;
