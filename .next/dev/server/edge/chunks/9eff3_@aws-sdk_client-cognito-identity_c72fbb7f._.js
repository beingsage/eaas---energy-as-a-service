(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/9eff3_@aws-sdk_client-cognito-identity_c72fbb7f._.js",
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultCognitoIdentityHttpAuthSchemeParametersProvider",
    ()=>defaultCognitoIdentityHttpAuthSchemeParametersProvider,
    "defaultCognitoIdentityHttpAuthSchemeProvider",
    ()=>defaultCognitoIdentityHttpAuthSchemeProvider,
    "resolveHttpAuthSchemeConfig",
    ()=>resolveHttpAuthSchemeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4Config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js [middleware-edge] (ecmascript)");
;
;
const defaultCognitoIdentityHttpAuthSchemeParametersProvider = async (config, context, input)=>{
    return {
        operation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSmithyContext"])(context).operation,
        region: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeProvider"])(config.region)() || (()=>{
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "cognito-identity",
            region: authParameters.region
        },
        propertiesExtractor: (config, context)=>({
                signingProperties: {
                    config,
                    context
                }
            })
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth"
    };
}
const defaultCognitoIdentityHttpAuthSchemeProvider = (authParameters)=>{
    const options = [];
    switch(authParameters.operation){
        case "GetCredentialsForIdentity":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        case "GetId":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        case "GetOpenIdToken":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        case "UnlinkIdentity":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        default:
            {
                options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
            }
    }
    return options;
};
const resolveHttpAuthSchemeConfig = (config)=>{
    const config_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4Config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAwsSdkSigV4Config"])(config);
    return Object.assign(config_0, {
        authSchemePreference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizeProvider"])(config.authSchemePreference ?? [])
    });
};
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commonParams",
    ()=>commonParams,
    "resolveClientEndpointParameters",
    ()=>resolveClientEndpointParameters
]);
const resolveClientEndpointParameters = (options)=>{
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "cognito-identity"
    });
};
const commonParams = {
    UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
    },
    Endpoint: {
        type: "builtInParams",
        name: "endpoint"
    },
    Region: {
        type: "builtInParams",
        name: "region"
    },
    UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
    }
};
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"@aws-sdk/client-cognito-identity","description":"AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native","version":"3.940.0","scripts":{"build":"concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'","build:cjs":"node ../../scripts/compilation/inline client-cognito-identity","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity","test:e2e":"yarn g:vitest run -c vitest.config.e2e.mts --mode development","test:e2e:watch":"yarn g:vitest watch -c vitest.config.e2e.mts"},"main":"./dist-cjs/index.js","types":"./dist-types/index.d.ts","module":"./dist-es/index.js","sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/core":"3.940.0","@aws-sdk/credential-provider-node":"3.940.0","@aws-sdk/middleware-host-header":"3.936.0","@aws-sdk/middleware-logger":"3.936.0","@aws-sdk/middleware-recursion-detection":"3.936.0","@aws-sdk/middleware-user-agent":"3.940.0","@aws-sdk/region-config-resolver":"3.936.0","@aws-sdk/types":"3.936.0","@aws-sdk/util-endpoints":"3.936.0","@aws-sdk/util-user-agent-browser":"3.936.0","@aws-sdk/util-user-agent-node":"3.940.0","@smithy/config-resolver":"^4.4.3","@smithy/core":"^3.18.5","@smithy/fetch-http-handler":"^5.3.6","@smithy/hash-node":"^4.2.5","@smithy/invalid-dependency":"^4.2.5","@smithy/middleware-content-length":"^4.2.5","@smithy/middleware-endpoint":"^4.3.12","@smithy/middleware-retry":"^4.4.12","@smithy/middleware-serde":"^4.2.6","@smithy/middleware-stack":"^4.2.5","@smithy/node-config-provider":"^4.3.5","@smithy/node-http-handler":"^4.4.5","@smithy/protocol-http":"^5.3.5","@smithy/smithy-client":"^4.9.8","@smithy/types":"^4.9.0","@smithy/url-parser":"^4.2.5","@smithy/util-base64":"^4.3.0","@smithy/util-body-length-browser":"^4.2.0","@smithy/util-body-length-node":"^4.2.1","@smithy/util-defaults-mode-browser":"^4.3.11","@smithy/util-defaults-mode-node":"^4.2.14","@smithy/util-endpoints":"^3.2.5","@smithy/util-middleware":"^4.2.5","@smithy/util-retry":"^4.2.5","@smithy/util-utf8":"^4.2.0","tslib":"^2.6.2"},"devDependencies":{"@aws-sdk/client-iam":"3.940.0","@tsconfig/node18":"18.2.4","@types/chai":"^4.2.11","@types/node":"^18.19.69","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typescript":"~5.8.3"},"engines":{"node":">=18.0.0"},"typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["dist-*/**"],"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-cognito-identity"}});}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ruleSet",
    ()=>ruleSet
]);
const w = "required", x = "fn", y = "argv", z = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = "stringEquals", j = {
    [w]: false,
    "type": "string"
}, k = {
    [w]: true,
    "default": false,
    "type": "boolean"
}, l = {
    [z]: "Endpoint"
}, m = {
    [x]: c,
    [y]: [
        {
            [z]: "UseFIPS"
        },
        true
    ]
}, n = {
    [x]: c,
    [y]: [
        {
            [z]: "UseDualStack"
        },
        true
    ]
}, o = {}, p = {
    [z]: "Region"
}, q = {
    [x]: h,
    [y]: [
        {
            [z]: g
        },
        "supportsFIPS"
    ]
}, r = {
    [z]: g
}, s = {
    [x]: c,
    [y]: [
        true,
        {
            [x]: h,
            [y]: [
                r,
                "supportsDualStack"
            ]
        }
    ]
}, t = [
    m
], u = [
    n
], v = [
    p
];
const _data = {
    version: "1.0",
    parameters: {
        Region: j,
        UseDualStack: k,
        UseFIPS: k,
        Endpoint: j
    },
    rules: [
        {
            conditions: [
                {
                    [x]: b,
                    [y]: [
                        l
                    ]
                }
            ],
            rules: [
                {
                    conditions: t,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: d
                },
                {
                    conditions: u,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: d
                },
                {
                    endpoint: {
                        url: l,
                        properties: o,
                        headers: o
                    },
                    type: e
                }
            ],
            type: f
        },
        {
            conditions: [
                {
                    [x]: b,
                    [y]: v
                }
            ],
            rules: [
                {
                    conditions: [
                        {
                            [x]: "aws.partition",
                            [y]: v,
                            assign: g
                        }
                    ],
                    rules: [
                        {
                            conditions: [
                                m,
                                n
                            ],
                            rules: [
                                {
                                    conditions: [
                                        {
                                            [x]: c,
                                            [y]: [
                                                a,
                                                q
                                            ]
                                        },
                                        s
                                    ],
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    [x]: i,
                                                    [y]: [
                                                        p,
                                                        "us-east-1"
                                                    ]
                                                }
                                            ],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-east-1.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        },
                                        {
                                            conditions: [
                                                {
                                                    [x]: i,
                                                    [y]: [
                                                        p,
                                                        "us-east-2"
                                                    ]
                                                }
                                            ],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-east-2.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        },
                                        {
                                            conditions: [
                                                {
                                                    [x]: i,
                                                    [y]: [
                                                        p,
                                                        "us-west-1"
                                                    ]
                                                }
                                            ],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-west-1.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        },
                                        {
                                            conditions: [
                                                {
                                                    [x]: i,
                                                    [y]: [
                                                        p,
                                                        "us-west-2"
                                                    ]
                                                }
                                            ],
                                            endpoint: {
                                                url: "https://cognito-identity-fips.us-west-2.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        },
                                        {
                                            endpoint: {
                                                url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }
                                    ],
                                    type: f
                                },
                                {
                                    error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                    type: d
                                }
                            ],
                            type: f
                        },
                        {
                            conditions: t,
                            rules: [
                                {
                                    conditions: [
                                        {
                                            [x]: c,
                                            [y]: [
                                                q,
                                                a
                                            ]
                                        }
                                    ],
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }
                                    ],
                                    type: f
                                },
                                {
                                    error: "FIPS is enabled but this partition does not support FIPS",
                                    type: d
                                }
                            ],
                            type: f
                        },
                        {
                            conditions: u,
                            rules: [
                                {
                                    conditions: [
                                        s
                                    ],
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    [x]: i,
                                                    [y]: [
                                                        "aws",
                                                        {
                                                            [x]: h,
                                                            [y]: [
                                                                r,
                                                                "name"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ],
                                            endpoint: {
                                                url: "https://cognito-identity.{Region}.amazonaws.com",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        },
                                        {
                                            endpoint: {
                                                url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: o,
                                                headers: o
                                            },
                                            type: e
                                        }
                                    ],
                                    type: f
                                },
                                {
                                    error: "DualStack is enabled but this partition does not support DualStack",
                                    type: d
                                }
                            ],
                            type: f
                        },
                        {
                            endpoint: {
                                url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                                properties: o,
                                headers: o
                            },
                            type: e
                        }
                    ],
                    type: f
                }
            ],
            type: f
        },
        {
            error: "Invalid Configuration: Missing Region",
            type: d
        }
    ]
};
const ruleSet = _data;
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultEndpointResolver",
    ()=>defaultEndpointResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/util-endpoints/dist-es/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$aws$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$utils$2f$customEndpointFunctions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$cache$2f$EndpointCache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$resolveEndpoint$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$ruleset$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js [middleware-edge] (ecmascript)");
;
;
;
const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$cache$2f$EndpointCache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EndpointCache"]({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS"
    ]
});
const defaultEndpointResolver = (endpointParams, context = {})=>{
    return cache.get(endpointParams, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$resolveEndpoint$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveEndpoint"])(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$ruleset$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ruleSet"], {
            endpointParams: endpointParams,
            logger: context.logger
        }));
};
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$utils$2f$customEndpointFunctions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["customEndpointFunctions"].aws = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$aws$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["awsEndpointFunctions"];
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$json$2f$AwsJson1_1Protocol$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsJson1_1Protocol.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/url-parser/dist-es/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$endpointResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
const getRuntimeConfig = (config)=>{
    return {
        apiVersion: "2014-06-30",
        base64Decoder: config?.base64Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["fromBase64"],
        base64Encoder: config?.base64Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toBase64"],
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$endpointResolver$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultEndpointResolver"],
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultCognitoIdentityHttpAuthSchemeProvider"],
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc)=>ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AwsSdkSigV4Signer"]()
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc)=>ipc.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NoAuthSigner"]()
            }
        ],
        logger: config?.logger ?? new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NoOpLogger"](),
        protocol: config?.protocol ?? new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$json$2f$AwsJson1_1Protocol$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AwsJson1_1Protocol"]({
            defaultNamespace: "com.amazonaws.cognitoidentity",
            serviceTarget: "AWSCognitoIdentityService",
            awsQueryCompatible: false
        }),
        serviceId: config?.serviceId ?? "Cognito Identity",
        urlParser: config?.urlParser ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseUrl"],
        utf8Decoder: config?.utf8Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["fromUtf8"],
        utf8Encoder: config?.utf8Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["toUtf8"]
    };
};
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/package.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$crossPlatformSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$browser$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseDualstackEndpointConfigOptions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseFipsEndpointConfigOptions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$fetch$2d$http$2d$handler$2f$dist$2d$es$2f$fetch$2d$http$2d$handler$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$fetch$2d$http$2d$handler$2f$dist$2d$es$2f$stream$2d$collector$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$invalid$2d$dependency$2f$dist$2d$es$2f$invalidProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$body$2d$length$2d$browser$2f$dist$2d$es$2f$calculateBodyLength$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$retry$2f$dist$2d$es$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-retry/dist-es/config.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$runtimeConfig$2e$shared$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$defaults$2d$mode$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$defaults$2d$mode$2d$browser$2f$dist$2d$es$2f$resolveDefaultsModeConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const getRuntimeConfig = (config)=>{
    const defaultsMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$defaults$2d$mode$2d$browser$2f$dist$2d$es$2f$resolveDefaultsModeConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveDefaultsModeConfig"])(config);
    const defaultConfigProvider = ()=>defaultsMode().then(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$defaults$2d$mode$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["loadConfigsForDefaultMode"]);
    const clientSharedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$runtimeConfig$2e$shared$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$body$2d$length$2d$browser$2f$dist$2d$es$2f$calculateBodyLength$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["calculateBodyLength"],
        credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_)=>()=>Promise.reject(new Error("Credential is missing"))),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$browser$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDefaultUserAgentProvider"])({
            serviceId: clientSharedValues.serviceId,
            clientVersion: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$package$2e$json__$28$json$29$__["default"].version
        }),
        maxAttempts: config?.maxAttempts ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$retry$2f$dist$2d$es$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_MAX_ATTEMPTS"],
        region: config?.region ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$invalid$2d$dependency$2f$dist$2d$es$2f$invalidProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["invalidProvider"])("Region is missing"),
        requestHandler: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$fetch$2d$http$2d$handler$2f$dist$2d$es$2f$fetch$2d$http$2d$handler$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchHttpHandler"].create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (async ()=>(await defaultConfigProvider()).retryMode || __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$util$2d$retry$2f$dist$2d$es$2f$config$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_RETRY_MODE"]),
        sha256: config?.sha256 ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$crossPlatformSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Sha256"],
        streamCollector: config?.streamCollector ?? __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$fetch$2d$http$2d$handler$2f$dist$2d$es$2f$stream$2d$collector$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["streamCollector"],
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (()=>Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseDualstackEndpointConfigOptions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_USE_DUALSTACK_ENDPOINT"])),
        useFipsEndpoint: config?.useFipsEndpoint ?? (()=>Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseFipsEndpointConfigOptions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_USE_FIPS_ENDPOINT"]))
    };
};
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthExtensionConfiguration.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHttpAuthExtensionConfiguration",
    ()=>getHttpAuthExtensionConfiguration,
    "resolveHttpAuthRuntimeConfig",
    ()=>resolveHttpAuthRuntimeConfig
]);
const getHttpAuthExtensionConfiguration = (runtimeConfig)=>{
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme (httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme)=>scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            } else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes () {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider (httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider () {
            return _httpAuthSchemeProvider;
        },
        setCredentials (credentials) {
            _credentials = credentials;
        },
        credentials () {
            return _credentials;
        }
    };
};
const resolveHttpAuthRuntimeConfig = (config)=>{
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
    };
};
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeExtensions.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveRuntimeExtensions",
    ()=>resolveRuntimeExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthExtensionConfiguration.js [middleware-edge] (ecmascript)");
;
;
;
;
const resolveRuntimeExtensions = (runtimeConfig, extensions)=>{
    const extensionConfiguration = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getAwsRegionExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getDefaultExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHttpHandlerExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHttpAuthExtensionConfiguration"])(runtimeConfig));
    extensions.forEach((extension)=>extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveAwsRegionExtensionConfiguration"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveDefaultRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveHttpHandlerRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveHttpAuthRuntimeConfig"])(extensionConfiguration));
};
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CognitoIdentityClient",
    ()=>CognitoIdentityClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$logger$2f$dist$2d$es$2f$loggerMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$recursion$2d$detection$2f$dist$2d$es$2f$getRecursionDetectionPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/getRecursionDetectionPlugin.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$user$2d$agent$2d$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$configurations$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$resolveRegionConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$DefaultIdentityProviderConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$getHttpAuthSchemeEndpointRuleSetPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$signing$2f$getHttpSigningMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$getSchemaSerdePlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$content$2d$length$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/middleware-content-length/dist-es/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$resolveEndpointConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$retryMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/middleware-retry/dist-es/configurations.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/smithy-client/dist-es/client.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$runtimeConfig$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$runtimeExtensions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeExtensions.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class CognitoIdentityClient extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Client"] {
    config;
    constructor(...[configuration]){
        const _config_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$runtimeConfig$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveClientEndpointParameters"])(_config_0);
        const _config_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$configurations$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveUserAgentConfig"])(_config_1);
        const _config_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveRetryConfig"])(_config_2);
        const _config_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$resolveRegionConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveRegionConfig"])(_config_3);
        const _config_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveHostHeaderConfig"])(_config_4);
        const _config_6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$resolveEndpointConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveEndpointConfig"])(_config_5);
        const _config_7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveHttpAuthSchemeConfig"])(_config_6);
        const _config_8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$runtimeExtensions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["resolveRuntimeExtensions"])(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$getSchemaSerdePlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSchemaSerdePlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$user$2d$agent$2d$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getUserAgentPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$retryMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getRetryPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$content$2d$length$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getContentLengthPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHostHeaderPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$logger$2f$dist$2d$es$2f$loggerMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getLoggerPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$recursion$2d$detection$2f$dist$2d$es$2f$getRecursionDetectionPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getRecursionDetectionPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$getHttpAuthSchemeEndpointRuleSetPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHttpAuthSchemeEndpointRuleSetPlugin"])(this.config, {
            httpAuthSchemeParametersProvider: __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultCognitoIdentityHttpAuthSchemeParametersProvider"],
            identityProviderConfigProvider: async (config)=>new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$DefaultIdentityProviderConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DefaultIdentityProviderConfig"]({
                    "aws.auth#sigv4": config.credentials
                })
        }));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$signing$2f$getHttpSigningMiddleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getHttpSigningPlugin"])(this.config));
    }
    destroy() {
        super.destroy();
    }
}
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CognitoIdentityServiceException",
    ()=>CognitoIdentityServiceException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/smithy-client/dist-es/exceptions.js [middleware-edge] (ecmascript)");
;
;
class CognitoIdentityServiceException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ServiceException"] {
    constructor(options){
        super(options);
        Object.setPrototypeOf(this, CognitoIdentityServiceException.prototype);
    }
}
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/models/errors.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConcurrentModificationException",
    ()=>ConcurrentModificationException,
    "DeveloperUserAlreadyRegisteredException",
    ()=>DeveloperUserAlreadyRegisteredException,
    "ExternalServiceException",
    ()=>ExternalServiceException,
    "InternalErrorException",
    ()=>InternalErrorException,
    "InvalidIdentityPoolConfigurationException",
    ()=>InvalidIdentityPoolConfigurationException,
    "InvalidParameterException",
    ()=>InvalidParameterException,
    "LimitExceededException",
    ()=>LimitExceededException,
    "NotAuthorizedException",
    ()=>NotAuthorizedException,
    "ResourceConflictException",
    ()=>ResourceConflictException,
    "ResourceNotFoundException",
    ()=>ResourceNotFoundException,
    "TooManyRequestsException",
    ()=>TooManyRequestsException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js [middleware-edge] (ecmascript) <locals>");
;
class InternalErrorException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "InternalErrorException";
    $fault = "server";
    constructor(opts){
        super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts
        });
        Object.setPrototypeOf(this, InternalErrorException.prototype);
    }
}
class InvalidParameterException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(opts){
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
class LimitExceededException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "LimitExceededException";
    $fault = "client";
    constructor(opts){
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
class NotAuthorizedException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "NotAuthorizedException";
    $fault = "client";
    constructor(opts){
        super({
            name: "NotAuthorizedException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    }
}
class ResourceConflictException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "ResourceConflictException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ResourceConflictException.prototype);
    }
}
class TooManyRequestsException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(opts){
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class ResourceNotFoundException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class ExternalServiceException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "ExternalServiceException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ExternalServiceException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ExternalServiceException.prototype);
    }
}
class InvalidIdentityPoolConfigurationException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "InvalidIdentityPoolConfigurationException";
    $fault = "client";
    constructor(opts){
        super({
            name: "InvalidIdentityPoolConfigurationException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, InvalidIdentityPoolConfigurationException.prototype);
    }
}
class DeveloperUserAlreadyRegisteredException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "DeveloperUserAlreadyRegisteredException";
    $fault = "client";
    constructor(opts){
        super({
            name: "DeveloperUserAlreadyRegisteredException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, DeveloperUserAlreadyRegisteredException.prototype);
    }
}
class ConcurrentModificationException extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"] {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/schemas/schemas_0.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CognitoIdentityProvider",
    ()=>CognitoIdentityProvider,
    "CognitoIdentityProviderList",
    ()=>CognitoIdentityProviderList,
    "CognitoIdentityServiceException",
    ()=>CognitoIdentityServiceException,
    "ConcurrentModificationException",
    ()=>ConcurrentModificationException,
    "CreateIdentityPool",
    ()=>CreateIdentityPool,
    "CreateIdentityPoolInput",
    ()=>CreateIdentityPoolInput,
    "Credentials",
    ()=>Credentials,
    "DeleteIdentities",
    ()=>DeleteIdentities,
    "DeleteIdentitiesInput",
    ()=>DeleteIdentitiesInput,
    "DeleteIdentitiesResponse",
    ()=>DeleteIdentitiesResponse,
    "DeleteIdentityPool",
    ()=>DeleteIdentityPool,
    "DeleteIdentityPoolInput",
    ()=>DeleteIdentityPoolInput,
    "DescribeIdentity",
    ()=>DescribeIdentity,
    "DescribeIdentityInput",
    ()=>DescribeIdentityInput,
    "DescribeIdentityPool",
    ()=>DescribeIdentityPool,
    "DescribeIdentityPoolInput",
    ()=>DescribeIdentityPoolInput,
    "DeveloperUserAlreadyRegisteredException",
    ()=>DeveloperUserAlreadyRegisteredException,
    "DeveloperUserIdentifierList",
    ()=>DeveloperUserIdentifierList,
    "ExternalServiceException",
    ()=>ExternalServiceException,
    "GetCredentialsForIdentity",
    ()=>GetCredentialsForIdentity,
    "GetCredentialsForIdentityInput",
    ()=>GetCredentialsForIdentityInput,
    "GetCredentialsForIdentityResponse",
    ()=>GetCredentialsForIdentityResponse,
    "GetId",
    ()=>GetId,
    "GetIdInput",
    ()=>GetIdInput,
    "GetIdResponse",
    ()=>GetIdResponse,
    "GetIdentityPoolRoles",
    ()=>GetIdentityPoolRoles,
    "GetIdentityPoolRolesInput",
    ()=>GetIdentityPoolRolesInput,
    "GetIdentityPoolRolesResponse",
    ()=>GetIdentityPoolRolesResponse,
    "GetOpenIdToken",
    ()=>GetOpenIdToken,
    "GetOpenIdTokenForDeveloperIdentity",
    ()=>GetOpenIdTokenForDeveloperIdentity,
    "GetOpenIdTokenForDeveloperIdentityInput",
    ()=>GetOpenIdTokenForDeveloperIdentityInput,
    "GetOpenIdTokenForDeveloperIdentityResponse",
    ()=>GetOpenIdTokenForDeveloperIdentityResponse,
    "GetOpenIdTokenInput",
    ()=>GetOpenIdTokenInput,
    "GetOpenIdTokenResponse",
    ()=>GetOpenIdTokenResponse,
    "GetPrincipalTagAttributeMap",
    ()=>GetPrincipalTagAttributeMap,
    "GetPrincipalTagAttributeMapInput",
    ()=>GetPrincipalTagAttributeMapInput,
    "GetPrincipalTagAttributeMapResponse",
    ()=>GetPrincipalTagAttributeMapResponse,
    "IdentitiesList",
    ()=>IdentitiesList,
    "IdentityDescription",
    ()=>IdentityDescription,
    "IdentityIdList",
    ()=>IdentityIdList,
    "IdentityPool",
    ()=>IdentityPool,
    "IdentityPoolShortDescription",
    ()=>IdentityPoolShortDescription,
    "IdentityPoolTagsListType",
    ()=>IdentityPoolTagsListType,
    "IdentityPoolTagsType",
    ()=>IdentityPoolTagsType,
    "IdentityPoolsList",
    ()=>IdentityPoolsList,
    "IdentityProviderToken",
    ()=>IdentityProviderToken,
    "IdentityProviders",
    ()=>IdentityProviders,
    "InternalErrorException",
    ()=>InternalErrorException,
    "InvalidIdentityPoolConfigurationException",
    ()=>InvalidIdentityPoolConfigurationException,
    "InvalidParameterException",
    ()=>InvalidParameterException,
    "LimitExceededException",
    ()=>LimitExceededException,
    "ListIdentities",
    ()=>ListIdentities,
    "ListIdentitiesInput",
    ()=>ListIdentitiesInput,
    "ListIdentitiesResponse",
    ()=>ListIdentitiesResponse,
    "ListIdentityPools",
    ()=>ListIdentityPools,
    "ListIdentityPoolsInput",
    ()=>ListIdentityPoolsInput,
    "ListIdentityPoolsResponse",
    ()=>ListIdentityPoolsResponse,
    "ListTagsForResource",
    ()=>ListTagsForResource,
    "ListTagsForResourceInput",
    ()=>ListTagsForResourceInput,
    "ListTagsForResourceResponse",
    ()=>ListTagsForResourceResponse,
    "LoginsList",
    ()=>LoginsList,
    "LoginsMap",
    ()=>LoginsMap,
    "LookupDeveloperIdentity",
    ()=>LookupDeveloperIdentity,
    "LookupDeveloperIdentityInput",
    ()=>LookupDeveloperIdentityInput,
    "LookupDeveloperIdentityResponse",
    ()=>LookupDeveloperIdentityResponse,
    "MappingRule",
    ()=>MappingRule,
    "MappingRulesList",
    ()=>MappingRulesList,
    "MergeDeveloperIdentities",
    ()=>MergeDeveloperIdentities,
    "MergeDeveloperIdentitiesInput",
    ()=>MergeDeveloperIdentitiesInput,
    "MergeDeveloperIdentitiesResponse",
    ()=>MergeDeveloperIdentitiesResponse,
    "NotAuthorizedException",
    ()=>NotAuthorizedException,
    "OIDCProviderList",
    ()=>OIDCProviderList,
    "OIDCToken",
    ()=>OIDCToken,
    "PrincipalTags",
    ()=>PrincipalTags,
    "ResourceConflictException",
    ()=>ResourceConflictException,
    "ResourceNotFoundException",
    ()=>ResourceNotFoundException,
    "RoleMapping",
    ()=>RoleMapping,
    "RoleMappingMap",
    ()=>RoleMappingMap,
    "RolesMap",
    ()=>RolesMap,
    "RulesConfigurationType",
    ()=>RulesConfigurationType,
    "SAMLProviderList",
    ()=>SAMLProviderList,
    "SecretKeyString",
    ()=>SecretKeyString,
    "SetIdentityPoolRoles",
    ()=>SetIdentityPoolRoles,
    "SetIdentityPoolRolesInput",
    ()=>SetIdentityPoolRolesInput,
    "SetPrincipalTagAttributeMap",
    ()=>SetPrincipalTagAttributeMap,
    "SetPrincipalTagAttributeMapInput",
    ()=>SetPrincipalTagAttributeMapInput,
    "SetPrincipalTagAttributeMapResponse",
    ()=>SetPrincipalTagAttributeMapResponse,
    "TagResource",
    ()=>TagResource,
    "TagResourceInput",
    ()=>TagResourceInput,
    "TagResourceResponse",
    ()=>TagResourceResponse,
    "TooManyRequestsException",
    ()=>TooManyRequestsException,
    "UnlinkDeveloperIdentity",
    ()=>UnlinkDeveloperIdentity,
    "UnlinkDeveloperIdentityInput",
    ()=>UnlinkDeveloperIdentityInput,
    "UnlinkIdentity",
    ()=>UnlinkIdentity,
    "UnlinkIdentityInput",
    ()=>UnlinkIdentityInput,
    "UnprocessedIdentityId",
    ()=>UnprocessedIdentityId,
    "UnprocessedIdentityIdList",
    ()=>UnprocessedIdentityIdList,
    "UntagResource",
    ()=>UntagResource,
    "UntagResourceInput",
    ()=>UntagResourceInput,
    "UntagResourceResponse",
    ()=>UntagResourceResponse,
    "UpdateIdentityPool",
    ()=>UpdateIdentityPool,
    "__Unit",
    ()=>__Unit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/models/errors.js [middleware-edge] (ecmascript)");
const _ACF = "AllowClassicFlow";
const _AI = "AccountId";
const _AKI = "AccessKeyId";
const _ARR = "AmbiguousRoleResolution";
const _AUI = "AllowUnauthenticatedIdentities";
const _C = "Credentials";
const _CD = "CreationDate";
const _CI = "ClientId";
const _CIP = "CognitoIdentityProvider";
const _CIPI = "CreateIdentityPoolInput";
const _CIPL = "CognitoIdentityProviderList";
const _CIPo = "CognitoIdentityProviders";
const _CIPr = "CreateIdentityPool";
const _CME = "ConcurrentModificationException";
const _CRA = "CustomRoleArn";
const _Cl = "Claim";
const _DI = "DeleteIdentities";
const _DII = "DeleteIdentitiesInput";
const _DIIe = "DescribeIdentityInput";
const _DIP = "DeleteIdentityPool";
const _DIPI = "DeleteIdentityPoolInput";
const _DIPIe = "DescribeIdentityPoolInput";
const _DIPe = "DescribeIdentityPool";
const _DIR = "DeleteIdentitiesResponse";
const _DIe = "DescribeIdentity";
const _DPN = "DeveloperProviderName";
const _DUARE = "DeveloperUserAlreadyRegisteredException";
const _DUI = "DeveloperUserIdentifier";
const _DUIL = "DeveloperUserIdentifierList";
const _DUIe = "DestinationUserIdentifier";
const _E = "Expiration";
const _EC = "ErrorCode";
const _ESE = "ExternalServiceException";
const _GCFI = "GetCredentialsForIdentity";
const _GCFII = "GetCredentialsForIdentityInput";
const _GCFIR = "GetCredentialsForIdentityResponse";
const _GI = "GetId";
const _GII = "GetIdInput";
const _GIPR = "GetIdentityPoolRoles";
const _GIPRI = "GetIdentityPoolRolesInput";
const _GIPRR = "GetIdentityPoolRolesResponse";
const _GIR = "GetIdResponse";
const _GOIT = "GetOpenIdToken";
const _GOITFDI = "GetOpenIdTokenForDeveloperIdentity";
const _GOITFDII = "GetOpenIdTokenForDeveloperIdentityInput";
const _GOITFDIR = "GetOpenIdTokenForDeveloperIdentityResponse";
const _GOITI = "GetOpenIdTokenInput";
const _GOITR = "GetOpenIdTokenResponse";
const _GPTAM = "GetPrincipalTagAttributeMap";
const _GPTAMI = "GetPrincipalTagAttributeMapInput";
const _GPTAMR = "GetPrincipalTagAttributeMapResponse";
const _HD = "HideDisabled";
const _I = "Identities";
const _ID = "IdentityDescription";
const _IEE = "InternalErrorException";
const _II = "IdentityId";
const _IIPCE = "InvalidIdentityPoolConfigurationException";
const _IITD = "IdentityIdsToDelete";
const _IL = "IdentitiesList";
const _IP = "IdentityPool";
const _IPE = "InvalidParameterException";
const _IPI = "IdentityPoolId";
const _IPL = "IdentityPoolsList";
const _IPN = "IdentityPoolName";
const _IPNd = "IdentityProviderName";
const _IPSD = "IdentityPoolShortDescription";
const _IPT = "IdentityProviderToken";
const _IPTd = "IdentityPoolTags";
const _IPd = "IdentityPools";
const _L = "Logins";
const _LDI = "LookupDeveloperIdentity";
const _LDII = "LookupDeveloperIdentityInput";
const _LDIR = "LookupDeveloperIdentityResponse";
const _LEE = "LimitExceededException";
const _LI = "ListIdentities";
const _LII = "ListIdentitiesInput";
const _LIP = "ListIdentityPools";
const _LIPI = "ListIdentityPoolsInput";
const _LIPR = "ListIdentityPoolsResponse";
const _LIR = "ListIdentitiesResponse";
const _LM = "LoginsMap";
const _LMD = "LastModifiedDate";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRR = "ListTagsForResourceResponse";
const _LTR = "LoginsToRemove";
const _MDI = "MergeDeveloperIdentities";
const _MDII = "MergeDeveloperIdentitiesInput";
const _MDIR = "MergeDeveloperIdentitiesResponse";
const _MR = "MaxResults";
const _MRL = "MappingRulesList";
const _MRa = "MappingRule";
const _MT = "MatchType";
const _NAE = "NotAuthorizedException";
const _NT = "NextToken";
const _OICPARN = "OpenIdConnectProviderARNs";
const _OIDCT = "OIDCToken";
const _PN = "ProviderName";
const _PT = "PrincipalTags";
const _R = "Roles";
const _RA = "ResourceArn";
const _RARN = "RoleARN";
const _RC = "RulesConfiguration";
const _RCE = "ResourceConflictException";
const _RCT = "RulesConfigurationType";
const _RM = "RoleMappings";
const _RMM = "RoleMappingMap";
const _RMo = "RoleMapping";
const _RNFE = "ResourceNotFoundException";
const _Ru = "Rules";
const _SIPR = "SetIdentityPoolRoles";
const _SIPRI = "SetIdentityPoolRolesInput";
const _SK = "SecretKey";
const _SKS = "SecretKeyString";
const _SLP = "SupportedLoginProviders";
const _SPARN = "SamlProviderARNs";
const _SPTAM = "SetPrincipalTagAttributeMap";
const _SPTAMI = "SetPrincipalTagAttributeMapInput";
const _SPTAMR = "SetPrincipalTagAttributeMapResponse";
const _SSTC = "ServerSideTokenCheck";
const _ST = "SessionToken";
const _SUI = "SourceUserIdentifier";
const _T = "Token";
const _TD = "TokenDuration";
const _TK = "TagKeys";
const _TMRE = "TooManyRequestsException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRR = "TagResourceResponse";
const _Ta = "Tags";
const _Ty = "Type";
const _UD = "UseDefaults";
const _UDI = "UnlinkDeveloperIdentity";
const _UDII = "UnlinkDeveloperIdentityInput";
const _UI = "UnlinkIdentity";
const _UII = "UnprocessedIdentityIds";
const _UIIL = "UnprocessedIdentityIdList";
const _UIIn = "UnlinkIdentityInput";
const _UIInp = "UnprocessedIdentityId";
const _UIP = "UpdateIdentityPool";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URR = "UntagResourceResponse";
const _V = "Value";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity";
const n0 = "com.amazonaws.cognitoidentity";
;
;
;
var IdentityProviderToken = [
    0,
    n0,
    _IPT,
    8,
    0
];
var OIDCToken = [
    0,
    n0,
    _OIDCT,
    8,
    0
];
var SecretKeyString = [
    0,
    n0,
    _SKS,
    8,
    0
];
var CognitoIdentityProvider = [
    3,
    n0,
    _CIP,
    0,
    [
        _PN,
        _CI,
        _SSTC
    ],
    [
        0,
        0,
        2
    ]
];
var ConcurrentModificationException = [
    -3,
    n0,
    _CME,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(ConcurrentModificationException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ConcurrentModificationException"]);
var CreateIdentityPoolInput = [
    3,
    n0,
    _CIPI,
    0,
    [
        _IPN,
        _AUI,
        _ACF,
        _SLP,
        _DPN,
        _OICPARN,
        _CIPo,
        _SPARN,
        _IPTd
    ],
    [
        0,
        2,
        2,
        128 | 0,
        0,
        64 | 0,
        ()=>CognitoIdentityProviderList,
        64 | 0,
        128 | 0
    ]
];
var Credentials = [
    3,
    n0,
    _C,
    0,
    [
        _AKI,
        _SK,
        _ST,
        _E
    ],
    [
        0,
        [
            ()=>SecretKeyString,
            0
        ],
        0,
        4
    ]
];
var DeleteIdentitiesInput = [
    3,
    n0,
    _DII,
    0,
    [
        _IITD
    ],
    [
        64 | 0
    ]
];
var DeleteIdentitiesResponse = [
    3,
    n0,
    _DIR,
    0,
    [
        _UII
    ],
    [
        ()=>UnprocessedIdentityIdList
    ]
];
var DeleteIdentityPoolInput = [
    3,
    n0,
    _DIPI,
    0,
    [
        _IPI
    ],
    [
        0
    ]
];
var DescribeIdentityInput = [
    3,
    n0,
    _DIIe,
    0,
    [
        _II
    ],
    [
        0
    ]
];
var DescribeIdentityPoolInput = [
    3,
    n0,
    _DIPIe,
    0,
    [
        _IPI
    ],
    [
        0
    ]
];
var DeveloperUserAlreadyRegisteredException = [
    -3,
    n0,
    _DUARE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(DeveloperUserAlreadyRegisteredException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DeveloperUserAlreadyRegisteredException"]);
var ExternalServiceException = [
    -3,
    n0,
    _ESE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(ExternalServiceException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ExternalServiceException"]);
var GetCredentialsForIdentityInput = [
    3,
    n0,
    _GCFII,
    0,
    [
        _II,
        _L,
        _CRA
    ],
    [
        0,
        [
            ()=>LoginsMap,
            0
        ],
        0
    ]
];
var GetCredentialsForIdentityResponse = [
    3,
    n0,
    _GCFIR,
    0,
    [
        _II,
        _C
    ],
    [
        0,
        [
            ()=>Credentials,
            0
        ]
    ]
];
var GetIdentityPoolRolesInput = [
    3,
    n0,
    _GIPRI,
    0,
    [
        _IPI
    ],
    [
        0
    ]
];
var GetIdentityPoolRolesResponse = [
    3,
    n0,
    _GIPRR,
    0,
    [
        _IPI,
        _R,
        _RM
    ],
    [
        0,
        128 | 0,
        ()=>RoleMappingMap
    ]
];
var GetIdInput = [
    3,
    n0,
    _GII,
    0,
    [
        _AI,
        _IPI,
        _L
    ],
    [
        0,
        0,
        [
            ()=>LoginsMap,
            0
        ]
    ]
];
var GetIdResponse = [
    3,
    n0,
    _GIR,
    0,
    [
        _II
    ],
    [
        0
    ]
];
var GetOpenIdTokenForDeveloperIdentityInput = [
    3,
    n0,
    _GOITFDII,
    0,
    [
        _IPI,
        _II,
        _L,
        _PT,
        _TD
    ],
    [
        0,
        0,
        [
            ()=>LoginsMap,
            0
        ],
        128 | 0,
        1
    ]
];
var GetOpenIdTokenForDeveloperIdentityResponse = [
    3,
    n0,
    _GOITFDIR,
    0,
    [
        _II,
        _T
    ],
    [
        0,
        [
            ()=>OIDCToken,
            0
        ]
    ]
];
var GetOpenIdTokenInput = [
    3,
    n0,
    _GOITI,
    0,
    [
        _II,
        _L
    ],
    [
        0,
        [
            ()=>LoginsMap,
            0
        ]
    ]
];
var GetOpenIdTokenResponse = [
    3,
    n0,
    _GOITR,
    0,
    [
        _II,
        _T
    ],
    [
        0,
        [
            ()=>OIDCToken,
            0
        ]
    ]
];
var GetPrincipalTagAttributeMapInput = [
    3,
    n0,
    _GPTAMI,
    0,
    [
        _IPI,
        _IPNd
    ],
    [
        0,
        0
    ]
];
var GetPrincipalTagAttributeMapResponse = [
    3,
    n0,
    _GPTAMR,
    0,
    [
        _IPI,
        _IPNd,
        _UD,
        _PT
    ],
    [
        0,
        0,
        2,
        128 | 0
    ]
];
var IdentityDescription = [
    3,
    n0,
    _ID,
    0,
    [
        _II,
        _L,
        _CD,
        _LMD
    ],
    [
        0,
        64 | 0,
        4,
        4
    ]
];
var IdentityPool = [
    3,
    n0,
    _IP,
    0,
    [
        _IPI,
        _IPN,
        _AUI,
        _ACF,
        _SLP,
        _DPN,
        _OICPARN,
        _CIPo,
        _SPARN,
        _IPTd
    ],
    [
        0,
        0,
        2,
        2,
        128 | 0,
        0,
        64 | 0,
        ()=>CognitoIdentityProviderList,
        64 | 0,
        128 | 0
    ]
];
var IdentityPoolShortDescription = [
    3,
    n0,
    _IPSD,
    0,
    [
        _IPI,
        _IPN
    ],
    [
        0,
        0
    ]
];
var InternalErrorException = [
    -3,
    n0,
    _IEE,
    {
        [_e]: _s
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(InternalErrorException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["InternalErrorException"]);
var InvalidIdentityPoolConfigurationException = [
    -3,
    n0,
    _IIPCE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(InvalidIdentityPoolConfigurationException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["InvalidIdentityPoolConfigurationException"]);
var InvalidParameterException = [
    -3,
    n0,
    _IPE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(InvalidParameterException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["InvalidParameterException"]);
var LimitExceededException = [
    -3,
    n0,
    _LEE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(LimitExceededException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LimitExceededException"]);
var ListIdentitiesInput = [
    3,
    n0,
    _LII,
    0,
    [
        _IPI,
        _MR,
        _NT,
        _HD
    ],
    [
        0,
        1,
        0,
        2
    ]
];
var ListIdentitiesResponse = [
    3,
    n0,
    _LIR,
    0,
    [
        _IPI,
        _I,
        _NT
    ],
    [
        0,
        ()=>IdentitiesList,
        0
    ]
];
var ListIdentityPoolsInput = [
    3,
    n0,
    _LIPI,
    0,
    [
        _MR,
        _NT
    ],
    [
        1,
        0
    ]
];
var ListIdentityPoolsResponse = [
    3,
    n0,
    _LIPR,
    0,
    [
        _IPd,
        _NT
    ],
    [
        ()=>IdentityPoolsList,
        0
    ]
];
var ListTagsForResourceInput = [
    3,
    n0,
    _LTFRI,
    0,
    [
        _RA
    ],
    [
        0
    ]
];
var ListTagsForResourceResponse = [
    3,
    n0,
    _LTFRR,
    0,
    [
        _Ta
    ],
    [
        128 | 0
    ]
];
var LookupDeveloperIdentityInput = [
    3,
    n0,
    _LDII,
    0,
    [
        _IPI,
        _II,
        _DUI,
        _MR,
        _NT
    ],
    [
        0,
        0,
        0,
        1,
        0
    ]
];
var LookupDeveloperIdentityResponse = [
    3,
    n0,
    _LDIR,
    0,
    [
        _II,
        _DUIL,
        _NT
    ],
    [
        0,
        64 | 0,
        0
    ]
];
var MappingRule = [
    3,
    n0,
    _MRa,
    0,
    [
        _Cl,
        _MT,
        _V,
        _RARN
    ],
    [
        0,
        0,
        0,
        0
    ]
];
var MergeDeveloperIdentitiesInput = [
    3,
    n0,
    _MDII,
    0,
    [
        _SUI,
        _DUIe,
        _DPN,
        _IPI
    ],
    [
        0,
        0,
        0,
        0
    ]
];
var MergeDeveloperIdentitiesResponse = [
    3,
    n0,
    _MDIR,
    0,
    [
        _II
    ],
    [
        0
    ]
];
var NotAuthorizedException = [
    -3,
    n0,
    _NAE,
    {
        [_e]: _c,
        [_hE]: 403
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(NotAuthorizedException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NotAuthorizedException"]);
var ResourceConflictException = [
    -3,
    n0,
    _RCE,
    {
        [_e]: _c,
        [_hE]: 409
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(ResourceConflictException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ResourceConflictException"]);
var ResourceNotFoundException = [
    -3,
    n0,
    _RNFE,
    {
        [_e]: _c,
        [_hE]: 404
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(ResourceNotFoundException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ResourceNotFoundException"]);
var RoleMapping = [
    3,
    n0,
    _RMo,
    0,
    [
        _Ty,
        _ARR,
        _RC
    ],
    [
        0,
        0,
        ()=>RulesConfigurationType
    ]
];
var RulesConfigurationType = [
    3,
    n0,
    _RCT,
    0,
    [
        _Ru
    ],
    [
        ()=>MappingRulesList
    ]
];
var SetIdentityPoolRolesInput = [
    3,
    n0,
    _SIPRI,
    0,
    [
        _IPI,
        _R,
        _RM
    ],
    [
        0,
        128 | 0,
        ()=>RoleMappingMap
    ]
];
var SetPrincipalTagAttributeMapInput = [
    3,
    n0,
    _SPTAMI,
    0,
    [
        _IPI,
        _IPNd,
        _UD,
        _PT
    ],
    [
        0,
        0,
        2,
        128 | 0
    ]
];
var SetPrincipalTagAttributeMapResponse = [
    3,
    n0,
    _SPTAMR,
    0,
    [
        _IPI,
        _IPNd,
        _UD,
        _PT
    ],
    [
        0,
        0,
        2,
        128 | 0
    ]
];
var TagResourceInput = [
    3,
    n0,
    _TRI,
    0,
    [
        _RA,
        _Ta
    ],
    [
        0,
        128 | 0
    ]
];
var TagResourceResponse = [
    3,
    n0,
    _TRR,
    0,
    [],
    []
];
var TooManyRequestsException = [
    -3,
    n0,
    _TMRE,
    {
        [_e]: _c,
        [_hE]: 429
    },
    [
        _m
    ],
    [
        0
    ]
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0).registerError(TooManyRequestsException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TooManyRequestsException"]);
var UnlinkDeveloperIdentityInput = [
    3,
    n0,
    _UDII,
    0,
    [
        _II,
        _IPI,
        _DPN,
        _DUI
    ],
    [
        0,
        0,
        0,
        0
    ]
];
var UnlinkIdentityInput = [
    3,
    n0,
    _UIIn,
    0,
    [
        _II,
        _L,
        _LTR
    ],
    [
        0,
        [
            ()=>LoginsMap,
            0
        ],
        64 | 0
    ]
];
var UnprocessedIdentityId = [
    3,
    n0,
    _UIInp,
    0,
    [
        _II,
        _EC
    ],
    [
        0,
        0
    ]
];
var UntagResourceInput = [
    3,
    n0,
    _URI,
    0,
    [
        _RA,
        _TK
    ],
    [
        0,
        64 | 0
    ]
];
var UntagResourceResponse = [
    3,
    n0,
    _URR,
    0,
    [],
    []
];
var __Unit = "unit";
var CognitoIdentityServiceException = [
    -3,
    _sm,
    "CognitoIdentityServiceException",
    0,
    [],
    []
];
__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["TypeRegistry"].for(_sm).registerError(CognitoIdentityServiceException, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$models$2f$CognitoIdentityServiceException$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CognitoIdentityServiceException"]);
var CognitoIdentityProviderList = [
    1,
    n0,
    _CIPL,
    0,
    ()=>CognitoIdentityProvider
];
var DeveloperUserIdentifierList = 64 | 0;
var IdentitiesList = [
    1,
    n0,
    _IL,
    0,
    ()=>IdentityDescription
];
var IdentityIdList = 64 | 0;
var IdentityPoolsList = [
    1,
    n0,
    _IPL,
    0,
    ()=>IdentityPoolShortDescription
];
var IdentityPoolTagsListType = 64 | 0;
var LoginsList = 64 | 0;
var MappingRulesList = [
    1,
    n0,
    _MRL,
    0,
    ()=>MappingRule
];
var OIDCProviderList = 64 | 0;
var SAMLProviderList = 64 | 0;
var UnprocessedIdentityIdList = [
    1,
    n0,
    _UIIL,
    0,
    ()=>UnprocessedIdentityId
];
var IdentityPoolTagsType = 128 | 0;
var IdentityProviders = 128 | 0;
var LoginsMap = [
    2,
    n0,
    _LM,
    0,
    [
        0,
        0
    ],
    [
        ()=>IdentityProviderToken,
        0
    ]
];
var PrincipalTags = 128 | 0;
var RoleMappingMap = [
    2,
    n0,
    _RMM,
    0,
    0,
    ()=>RoleMapping
];
var RolesMap = 128 | 0;
var CreateIdentityPool = [
    9,
    n0,
    _CIPr,
    0,
    ()=>CreateIdentityPoolInput,
    ()=>IdentityPool
];
var DeleteIdentities = [
    9,
    n0,
    _DI,
    0,
    ()=>DeleteIdentitiesInput,
    ()=>DeleteIdentitiesResponse
];
var DeleteIdentityPool = [
    9,
    n0,
    _DIP,
    0,
    ()=>DeleteIdentityPoolInput,
    ()=>__Unit
];
var DescribeIdentity = [
    9,
    n0,
    _DIe,
    0,
    ()=>DescribeIdentityInput,
    ()=>IdentityDescription
];
var DescribeIdentityPool = [
    9,
    n0,
    _DIPe,
    0,
    ()=>DescribeIdentityPoolInput,
    ()=>IdentityPool
];
var GetCredentialsForIdentity = [
    9,
    n0,
    _GCFI,
    0,
    ()=>GetCredentialsForIdentityInput,
    ()=>GetCredentialsForIdentityResponse
];
var GetId = [
    9,
    n0,
    _GI,
    0,
    ()=>GetIdInput,
    ()=>GetIdResponse
];
var GetIdentityPoolRoles = [
    9,
    n0,
    _GIPR,
    0,
    ()=>GetIdentityPoolRolesInput,
    ()=>GetIdentityPoolRolesResponse
];
var GetOpenIdToken = [
    9,
    n0,
    _GOIT,
    0,
    ()=>GetOpenIdTokenInput,
    ()=>GetOpenIdTokenResponse
];
var GetOpenIdTokenForDeveloperIdentity = [
    9,
    n0,
    _GOITFDI,
    0,
    ()=>GetOpenIdTokenForDeveloperIdentityInput,
    ()=>GetOpenIdTokenForDeveloperIdentityResponse
];
var GetPrincipalTagAttributeMap = [
    9,
    n0,
    _GPTAM,
    0,
    ()=>GetPrincipalTagAttributeMapInput,
    ()=>GetPrincipalTagAttributeMapResponse
];
var ListIdentities = [
    9,
    n0,
    _LI,
    0,
    ()=>ListIdentitiesInput,
    ()=>ListIdentitiesResponse
];
var ListIdentityPools = [
    9,
    n0,
    _LIP,
    0,
    ()=>ListIdentityPoolsInput,
    ()=>ListIdentityPoolsResponse
];
var ListTagsForResource = [
    9,
    n0,
    _LTFR,
    0,
    ()=>ListTagsForResourceInput,
    ()=>ListTagsForResourceResponse
];
var LookupDeveloperIdentity = [
    9,
    n0,
    _LDI,
    0,
    ()=>LookupDeveloperIdentityInput,
    ()=>LookupDeveloperIdentityResponse
];
var MergeDeveloperIdentities = [
    9,
    n0,
    _MDI,
    0,
    ()=>MergeDeveloperIdentitiesInput,
    ()=>MergeDeveloperIdentitiesResponse
];
var SetIdentityPoolRoles = [
    9,
    n0,
    _SIPR,
    0,
    ()=>SetIdentityPoolRolesInput,
    ()=>__Unit
];
var SetPrincipalTagAttributeMap = [
    9,
    n0,
    _SPTAM,
    0,
    ()=>SetPrincipalTagAttributeMapInput,
    ()=>SetPrincipalTagAttributeMapResponse
];
var TagResource = [
    9,
    n0,
    _TR,
    0,
    ()=>TagResourceInput,
    ()=>TagResourceResponse
];
var UnlinkDeveloperIdentity = [
    9,
    n0,
    _UDI,
    0,
    ()=>UnlinkDeveloperIdentityInput,
    ()=>__Unit
];
var UnlinkIdentity = [
    9,
    n0,
    _UI,
    0,
    ()=>UnlinkIdentityInput,
    ()=>__Unit
];
var UntagResource = [
    9,
    n0,
    _UR,
    0,
    ()=>UntagResourceInput,
    ()=>UntagResourceResponse
];
var UpdateIdentityPool = [
    9,
    n0,
    _UIP,
    0,
    ()=>IdentityPool,
    ()=>IdentityPool
];
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetCredentialsForIdentityCommand",
    ()=>GetCredentialsForIdentityCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/smithy-client/dist-es/command.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/schemas/schemas_0.js [middleware-edge] (ecmascript)");
;
;
;
;
;
class GetCredentialsForIdentityCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Command"].classBuilder().ep(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["commonParams"]).m(function(Command, cs, config, o) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointPlugin"])(config, Command.getEndpointParameterInstructions())
    ];
}).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").sc(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GetCredentialsForIdentity"]).build() {
}
}),
"[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetIdCommand",
    ()=>GetIdCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@smithy/smithy-client/dist-es/command.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/client-cognito-identity/dist-es/schemas/schemas_0.js [middleware-edge] (ecmascript)");
;
;
;
;
;
class GetIdCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Command"].classBuilder().ep(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["commonParams"]).m(function(Command, cs, config, o) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getEndpointPlugin"])(config, Command.getEndpointParameterInstructions())
    ];
}).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").sc(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$cognito$2d$identity$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["GetId"]).build() {
}
}),
]);

//# sourceMappingURL=9eff3_%40aws-sdk_client-cognito-identity_c72fbb7f._.js.map