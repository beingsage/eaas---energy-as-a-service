(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/9eff3_634ec7b7._.js",
"[project]/energy-os-v0/node_modules/kerberos/lib/util.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function loadBindings() {
    try {
        return (()=>{
            throw new Error('could not resolve "' + '../build/Release/kerberos.node' + '" into a module');
        })();
    } catch  {
        // Webpack will fail when just returning the require, so we need to wrap
        // in a try/catch and rethrow.
        /* eslint no-useless-catch: 0 */ try {
            return (()=>{
                const e = new Error("Cannot find module '../build/Debug/kerberos.node'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        } catch (error) {
            throw error;
        }
    }
}
module.exports = {
    loadBindings
};
}),
"[project]/energy-os-v0/node_modules/kerberos/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"kerberos","version":"7.0.0","description":"Kerberos library for Node.js","main":"lib/index.js","files":["lib","src","binding.gyp","HISTORY.md","README.md","index.d.ts"],"types":"index.d.ts","repository":{"type":"git","url":"https://github.com/mongodb-js/kerberos.git"},"keywords":["kerberos","security","authentication"],"author":{"name":"The MongoDB NodeJS Team","email":"dbx-node@mongodb.com"},"bugs":{"url":"https://jira.mongodb.org/projects/NODE/issues/"},"dependencies":{"node-addon-api":"^8.5.0","prebuild-install":"^7.1.3"},"devDependencies":{"@types/node":"^24.2.1","@typescript-eslint/eslint-plugin":"^8.31.1","chai":"^4.4.1","chai-string":"^1.6.0","chalk":"^4.1.2","clang-format":"^1.8.0","dmd-clear":"^0.1.2","eslint":"^9.33.0","eslint-config-prettier":"^10.1.8","eslint-plugin-prettier":"^5.5.4","jsdoc-to-markdown":"^9.1.2","mocha":"^11.7.1","node-gyp":"^11.4.2","prebuild":"^13.0.1","prettier":"^3.6.2"},"scripts":{"install":"prebuild-install --runtime napi || node-gyp rebuild","format-cxx":"clang-format -i 'src/**/*'","format-js":"ESLINT_USE_FLAT_CONFIG=false eslint lib test --fix","check:lint":"ESLINT_USE_FLAT_CONFIG=false eslint lib test index.d.ts","precommit":"check-clang-format","docs":"jsdoc2md --template etc/README.hbs --plugin dmd-clear --files lib/index.js > README.md","test":"mocha 'test/*_tests.js'","prebuild":"prebuild --runtime napi --strip --verbose --all"},"engines":{"node":">=20.19.0"},"binary":{"napi_versions":[9]},"license":"Apache-2.0","readmeFilename":"README.md"});}),
"[project]/energy-os-v0/node_modules/kerberos/lib/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { promisify } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const { loadBindings } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/kerberos/lib/util.js [middleware-edge] (ecmascript)");
const kerberos = loadBindings();
const KerberosClient = kerberos.KerberosClient;
const KerberosServer = kerberos.KerberosServer;
// GSS Flags
/** @kind constant */ const GSS_C_DELEG_FLAG = 1;
/** @kind constant */ const GSS_C_MUTUAL_FLAG = 2;
/** @kind constant */ const GSS_C_REPLAY_FLAG = 4;
/** @kind constant */ const GSS_C_SEQUENCE_FLAG = 8;
/** @kind constant */ const GSS_C_CONF_FLAG = 16;
/** @kind constant */ const GSS_C_INTEG_FLAG = 32;
/** @kind constant */ const GSS_C_ANON_FLAG = 64;
/** @kind constant */ const GSS_C_PROT_READY_FLAG = 128;
/** @kind constant */ const GSS_C_TRANS_FLAG = 256;
// GSS_OID
/** @kind constant */ const GSS_C_NO_OID = 0;
/** @kind constant */ const GSS_MECH_OID_KRB5 = 9;
/** @kind constant */ const GSS_MECH_OID_SPNEGO = 6;
/** @kind constant */ const version = __turbopack_context__.r("[project]/energy-os-v0/node_modules/kerberos/package.json (json)").version;
/**
 * @class KerberosClient
 *
 * @property {string} username The username used for authentication
 * @property {string} response The last response received during authentication steps
 * @property {string} responseConf Indicates whether confidentiality was applied or not (GSSAPI only)
 * @property {boolean} contextComplete Indicates that authentication has successfully completed or not
 */ const promisifiedStep = promisify(KerberosClient.prototype.step);
/**
 * Processes a single kerberos client-side step using the supplied server challenge.
 *
 * @kind function
 * @memberof KerberosClient
 * @param {string} challenge A string containing the base64-encoded server data (which may be empty for the first step)
 * @return {Promise<string>}
 */ KerberosClient.prototype.step = async function step(challenge) {
    if (typeof challenge !== 'string') {
        throw new TypeError('parameter `challenge` must be a string.');
    }
    return await promisifiedStep.call(this, challenge);
};
const promsifiedWrap = promisify(KerberosClient.prototype.wrap);
/**
 * Perform the client side kerberos wrap step.
 *
 * @kind function
 * @memberof KerberosClient
 * @param {string} challenge The response returned after calling `unwrap`
 * @param {object} [options] Options
 * @param {string} [options.user] The user to authorize
 * @param {boolean} [options.protect] Indicates if the wrap should request message confidentiality
 * @return {Promise<string>}
 */ KerberosClient.prototype.wrap = async function wrap(challenge, options = {}) {
    if (typeof challenge !== 'string') {
        throw new TypeError('parameter `challenge` must be a string.');
    }
    return await promsifiedWrap.call(this, challenge, options);
};
const promisifiedUnwrap = promisify(KerberosClient.prototype.unwrap);
/**
 * Perform the client side kerberos unwrap step
 *
 * @kind function
 * @memberof KerberosClient
 * @param {string} challenge A string containing the base64-encoded server data
 * @return {Promise<string>}
 */ KerberosClient.prototype.unwrap = async function unwrap(challenge) {
    if (typeof challenge !== 'string') {
        throw new TypeError('parameter `challenge` must be a string.');
    }
    return await promisifiedUnwrap.call(this, challenge);
};
const promisifiedServerStep = promisify(KerberosServer.prototype.step);
/**
 * @class KerberosServer
 *
 * @property {string} username The username used for authentication
 * @property {string} response The last response received during authentication steps
 * @property {string} targetName The target used for authentication
 * @property {boolean} contextComplete Indicates that authentication has successfully completed or not
 */ /**
 * Processes a single kerberos server-side step using the supplied client data.
 *
 * @kind function
 * @memberof KerberosServer
 * @param {string} challenge A string containing the base64-encoded client data
 * @return {Promise<KerberosServer>}
 */ KerberosServer.prototype.step = async function step(challenge) {
    if (typeof challenge !== 'string') {
        throw new TypeError('parameter `challenge` must be a string.');
    }
    return await promisifiedServerStep.call(this, challenge);
};
const promisifiedCheckPassword = promisify(kerberos.checkPassword);
/**
 * This function provides a simple way to verify that a user name and password
 * match those normally used for Kerberos authentication.
 * It does this by checking that the supplied user name and password can be
 * used to get a ticket for the supplied service.
 * If the user name does not contain a realm, then the default realm supplied
 * is used.
 *
 * For this to work properly the Kerberos must be configured properly on this
 * machine.
 * That will likely mean ensuring that the edu.mit.Kerberos preference file
 * has the correct realms and KDCs listed.
 *
 * IMPORTANT: This method is vulnerable to KDC spoofing attacks and it should
 * only be used for testing. Do not use this in any production system - your
 * security could be compromised if you do.
 *
 * @kind function
 * @param {string} username The Kerberos user name. If no realm is supplied, then the `defaultRealm` will be used.
 * @param {string} password The password for the user.
 * @param {string} service The Kerberos service to check access for.
 * @param {string} [defaultRealm] The default realm to use if one is not supplied in the user argument.
 * @return {Promise<null>} returns Promise that rejects if the password is invalid
 */ async function checkPassword(username, password, service, defaultRealm) {
    if (typeof username !== 'string') {
        throw new TypeError('parameter `username` must be a string.');
    }
    if (typeof password !== 'string') {
        throw new TypeError('parameter `password` must be a string.');
    }
    if (typeof service !== 'string') {
        throw new TypeError('parameter `service` must be a string.');
    }
    if (defaultRealm && typeof defaultRealm !== 'string') {
        throw new TypeError('if specified, parameter `defaultRealm` must be a string.');
    }
    return await promisifiedCheckPassword.call(this, username, password, service, defaultRealm);
}
const promisifiedPrincipalDetails = promisify(kerberos.principalDetails);
/**
 * This function returns the service principal for the server given a service type and hostname.
 *
 * Details are looked up via the `/etc/keytab` file.
 *
 * @kind function
 * @param {string} service The Kerberos service type for the server.
 * @param {string} hostname The hostname of the server.
 * @return {Promise} returns Promise
 */ async function principalDetails(service, hostname) {
    if (typeof service !== 'string') {
        throw new TypeError('parameter `service` must be a string.');
    }
    if (typeof hostname !== 'string') {
        throw new TypeError('parameter `hostname` must be a string.');
    }
    return await promisifiedPrincipalDetails.call(this, service, hostname);
}
const promisifiedInitializeClient = promisify(kerberos.initializeClient);
/**
 * Initializes a context for client-side authentication with the given service principal.
 *
 * @kind function
 * @param {string} service A string containing the service principal in the form 'type@fqdn' (e.g. 'imap@mail.apple.com').
 * @param {object} [options] Optional settings
 * @param {string} [options.principal] Optional string containing the client principal in the form 'user@realm' (e.g. 'jdoe@example.com').
 * @param {number} [options.flags] Optional integer used to set GSS flags. (e.g.  `GSS_C_DELEG_FLAG\|GSS_C_MUTUAL_FLAG\|GSS_C_SEQUENCE_FLAG` will allow for forwarding credentials to the remote host)
 * @param {number} [options.mechOID] Optional GSS mech OID. Defaults to None (GSS_C_NO_OID). Other possible values are `GSS_MECH_OID_KRB5`, `GSS_MECH_OID_SPNEGO`.
 * @param {string} [options.user] The username with which to authenticate.  Only used on Windows.
 * @param {string} [options.pass] The password with which to authenticate.  Only used on Windows.
 * @return {Promise<KerberosClient>} returns Promise
 */ async function initializeClient(service, options = {
    mechOID: GSS_C_NO_OID
}) {
    if (typeof service !== 'string') {
        throw new TypeError('parameter `service` must be a string.');
    }
    return await promisifiedInitializeClient.call(this, service, options);
}
const promisifiedInitializeServer = promisify(kerberos.initializeServer);
/**
 * Initializes a context for server-side authentication with the given service principal.
 *
 * @kind function
 * @param {string} service A string containing the service principal in the form 'type@fqdn' (e.g. 'imap@mail.apple.com').
 * @return {Promise<KerberosServer>} returns Promise
 */ async function initializeServer(service) {
    if (typeof service !== 'string') {
        throw new TypeError('parameter `service` must be a string.');
    }
    return await promisifiedInitializeServer.call(this, service);
}
/**
 * @private
 *
 * The NAPI version kerberos is configured to use, defined in kerberos.h.
 */ const definedNapiVersion = kerberos.definedNapiVersion;
module.exports = {
    initializeClient,
    initializeServer,
    principalDetails,
    checkPassword,
    // gss flags
    GSS_C_DELEG_FLAG,
    GSS_C_MUTUAL_FLAG,
    GSS_C_REPLAY_FLAG,
    GSS_C_SEQUENCE_FLAG,
    GSS_C_CONF_FLAG,
    GSS_C_INTEG_FLAG,
    GSS_C_ANON_FLAG,
    GSS_C_PROT_READY_FLAG,
    GSS_C_TRANS_FLAG,
    GSS_C_NO_OID,
    // mechanism OIDs
    GSS_MECH_OID_KRB5,
    GSS_MECH_OID_SPNEGO,
    version,
    definedNapiVersion
};
}),
"[project]/energy-os-v0/node_modules/@mongodb-js/zstd/lib/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { promisify } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const { isUint8Array } = (()=>{
    const e = new Error("Cannot find module 'util/types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function load() {
    try {
        return (()=>{
            throw new Error('could not resolve "' + '../build/Release/zstd.node' + '" into a module');
        })();
    } catch  {
        // Webpack will fail when just returning the require, so we need to wrap
        // in a try/catch and rethrow.
        /* eslint no-useless-catch: 0 */ try {
            return (()=>{
                const e = new Error("Cannot find module '../build/Debug/zstd.node'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        } catch (error) {
            throw error;
        }
    }
}
const zstd = load();
const _compress = promisify(zstd.compress);
const _decompress = promisify(zstd.decompress);
// Error objects created via napi don't have JS stacks; wrap them so .stack is present
// https://github.com/nodejs/node/issues/25318#issuecomment-451068073
exports.compress = async function compress(data, compressionLevel) {
    if (!isUint8Array(data)) {
        throw new TypeError(`parameter 'data' must be a Uint8Array.`);
    }
    if (compressionLevel != null && typeof compressionLevel !== 'number') {
        throw new TypeError(`parameter 'compressionLevel' must be a number.`);
    }
    try {
        return await _compress(data, compressionLevel ?? 3);
    } catch (e) {
        throw new Error(`zstd: ${e.message}`);
    }
};
exports.decompress = async function decompress(data) {
    if (!isUint8Array(data)) {
        throw new TypeError(`parameter 'data' must be a Uint8Array.`);
    }
    try {
        return await _decompress(data);
    } catch (e) {
        throw new Error(`zstd: ${e.message}`);
    }
};
/** used for testing */ exports.getDefinedNapiVersion = zstd.getDefinedNapiVersion;
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromUtf8",
    ()=>fromUtf8
]);
const fromUtf8 = (input)=>new TextEncoder().encode(input);
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toUint8Array",
    ()=>toUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js [middleware-edge] (ecmascript)");
;
const toUint8Array = (data)=>{
    if (typeof data === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["fromUtf8"])(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toUtf8",
    ()=>toUtf8
]);
const toUtf8 = (input)=>{
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return new TextDecoder("utf-8").decode(input);
};
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/index.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUint8Array$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js [middleware-edge] (ecmascript)");
;
;
;
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "convertToBuffer",
    ()=>convertToBuffer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js [middleware-edge] (ecmascript)");
;
// Quick polyfill
var fromUtf8 = typeof __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"] !== "undefined" && __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from ? function(input) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(input, "utf8");
} : __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$browser$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["fromUtf8"];
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array) return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
} //# sourceMappingURL=convertToBuffer.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/isEmptyData.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "isEmptyData",
    ()=>isEmptyData
]);
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
} //# sourceMappingURL=isEmptyData.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/numToUint8.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([
    "numToUint8",
    ()=>numToUint8
]);
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff
    ]);
} //# sourceMappingURL=numToUint8.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// IE 11 does not support Array.from, so we do it manually
__turbopack_context__.s([
    "uint32ArrayFrom",
    ()=>uint32ArrayFrom
]);
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while(a_index < a_lookUpTable.length){
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
} //# sourceMappingURL=uint32ArrayFrom.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/index.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/isEmptyData.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$numToUint8$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/numToUint8.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$uint32ArrayFrom$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js [middleware-edge] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/constants.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_DATA_SHA_256",
    ()=>EMPTY_DATA_SHA_256,
    "SHA_256_HASH",
    ()=>SHA_256_HASH,
    "SHA_256_HMAC_ALGO",
    ()=>SHA_256_HMAC_ALGO
]);
var SHA_256_HASH = {
    name: "SHA-256"
};
var SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
]); //# sourceMappingURL=constants.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sha256",
    ()=>Sha256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/isEmptyData.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$locate$2d$window$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/util-locate-window/dist-es/index.js [middleware-edge] (ecmascript)");
;
;
;
var Sha256 = function() {
    function Sha256(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
    }
    Sha256.prototype.update = function(data) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isEmptyData"])(data)) {
            return;
        }
        var update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["convertToBuffer"])(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
    };
    Sha256.prototype.digest = function() {
        var _this = this;
        if (this.key) {
            return this.key.then(function(key) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$locate$2d$window$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locateWindow"])().crypto.subtle.sign(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA_256_HMAC_ALGO"], key, _this.toHash).then(function(data) {
                    return new Uint8Array(data);
                });
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isEmptyData"])(this.toHash)) {
            return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["EMPTY_DATA_SHA_256"]);
        }
        return Promise.resolve().then(function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$locate$2d$window$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locateWindow"])().crypto.subtle.digest(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA_256_HASH"], _this.toHash);
        }).then(function(data) {
            return Promise.resolve(new Uint8Array(data));
        });
    };
    Sha256.prototype.reset = function() {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
            this.key = new Promise(function(resolve, reject) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$locate$2d$window$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locateWindow"])().crypto.subtle.importKey("raw", (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["convertToBuffer"])(_this.secret), __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SHA_256_HMAC_ALGO"], false, [
                    "sign"
                ]).then(resolve, reject);
            });
            this.key.catch(function() {});
        }
    };
    return Sha256;
}();
;
 //# sourceMappingURL=webCryptoSha256.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sha256",
    ()=>Sha256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$webCryptoSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$supports$2d$web$2d$crypto$2f$build$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/supports-web-crypto/build/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$supports$2d$web$2d$crypto$2f$build$2f$module$2f$supportsWebCrypto$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$locate$2d$window$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-sdk/util-locate-window/dist-es/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [middleware-edge] (ecmascript)");
;
;
;
;
;
var Sha256 = function() {
    function Sha256(secret) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$supports$2d$web$2d$crypto$2f$build$2f$module$2f$supportsWebCrypto$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["supportsWebCrypto"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$locate$2d$window$2f$dist$2d$es$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locateWindow"])())) {
            this.hash = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$webCryptoSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Sha256"](secret);
        } else {
            this.hash = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["Sha256"](secret);
        }
    }
    Sha256.prototype.update = function(data, encoding) {
        this.hash.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["convertToBuffer"])(data));
    };
    Sha256.prototype.digest = function() {
        return this.hash.digest();
    };
    Sha256.prototype.reset = function() {
        this.hash.reset();
    };
    return Sha256;
}();
;
 //# sourceMappingURL=crossPlatformSha256.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/index.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$crossPlatformSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$browser$2f$build$2f$module$2f$webCryptoSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js [middleware-edge] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/constants.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 */ __turbopack_context__.s([
    "BLOCK_SIZE",
    ()=>BLOCK_SIZE,
    "DIGEST_LENGTH",
    ()=>DIGEST_LENGTH,
    "INIT",
    ()=>INIT,
    "KEY",
    ()=>KEY,
    "MAX_HASHABLE_LENGTH",
    ()=>MAX_HASHABLE_LENGTH
]);
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1; //# sourceMappingURL=constants.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawSha256",
    ()=>RawSha256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/constants.js [middleware-edge] (ecmascript)");
;
/**
 * @internal
 */ var RawSha256 = function() {
    function RawSha256() {
        this.state = Int32Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["INIT"]);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        /**
         * @internal
         */ this.finished = false;
    }
    RawSha256.prototype.update = function(data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MAX_HASHABLE_LENGTH"]) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while(byteLength > 0){
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"]) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    };
    RawSha256.prototype.digest = function() {
        if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 0x80);
            // Ensure the final block has enough room for the hashed length
            if (undecoratedLength % __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"] >= __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"] - 8) {
                for(var i = this.bufferLength; i < __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"]; i++){
                    bufferView.setUint8(i, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for(var i = this.bufferLength; i < __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"] - 8; i++){
                bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"] - 8, Math.floor(bitsHashed / 0x100000000), true);
            bufferView.setUint32(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"] - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        // The value in state is little-endian rather than big-endian, so flip
        // each word into a new Uint8Array
        var out = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DIGEST_LENGTH"]);
        for(var i = 0; i < 8; i++){
            out[i * 4] = this.state[i] >>> 24 & 0xff;
            out[i * 4 + 1] = this.state[i] >>> 16 & 0xff;
            out[i * 4 + 2] = this.state[i] >>> 8 & 0xff;
            out[i * 4 + 3] = this.state[i] >>> 0 & 0xff;
        }
        return out;
    };
    RawSha256.prototype.hashBuffer = function() {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"]; i++){
            if (i < 16) {
                this.temp[i] = (buffer[i * 4] & 0xff) << 24 | (buffer[i * 4 + 1] & 0xff) << 16 | (buffer[i * 4 + 2] & 0xff) << 8 | buffer[i * 4 + 3] & 0xff;
            } else {
                var u = this.temp[i - 2];
                var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
                u = this.temp[i - 15];
                var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
                this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
            }
            var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["KEY"][i] + this.temp[i] | 0) | 0) | 0;
            var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = state3 + t1 | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = t1 + t2 | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    };
    return RawSha256;
}();
;
 //# sourceMappingURL=RawSha256.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sha256",
    ()=>Sha256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/constants.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$RawSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/isEmptyData.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js [middleware-edge] (ecmascript)");
;
;
;
;
var Sha256 = function() {
    function Sha256(secret) {
        this.secret = secret;
        this.hash = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$RawSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["RawSha256"]();
        this.reset();
    }
    Sha256.prototype.update = function(toHash) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$isEmptyData$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isEmptyData"])(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["convertToBuffer"])(toHash));
        } catch (e) {
            this.error = e;
        }
    };
    /* This synchronous method keeps compatibility
     * with the v2 aws-sdk.
     */ Sha256.prototype.digestSync = function() {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    };
    /* The underlying digest method here is synchronous.
     * To keep the same interface with the other hash functions
     * the default is to expose this as an async method.
     * However, it can sometimes be useful to have a sync method.
     */ Sha256.prototype.digest = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                return [
                    2 /*return*/ ,
                    this.digestSync()
                ];
            });
        });
    };
    Sha256.prototype.reset = function() {
        this.hash = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$RawSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["RawSha256"]();
        if (this.secret) {
            this.outer = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$RawSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["RawSha256"]();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"]);
            outer.set(inner);
            for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"]; i++){
                inner[i] ^= 0x36;
                outer[i] ^= 0x5c;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            // overwrite the copied key in memory
            for(var i = 0; i < inner.byteLength; i++){
                inner[i] = 0;
            }
        }
    };
    return Sha256;
}();
;
function bufferFromSecret(secret) {
    var input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$util$2f$build$2f$module$2f$convertToBuffer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["convertToBuffer"])(secret);
    if (input.byteLength > __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"]) {
        var bufferHash = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$RawSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["RawSha256"]();
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$constants$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["BLOCK_SIZE"]);
    buffer.set(input);
    return buffer;
} //# sourceMappingURL=jsSha256.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/index.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$sha256$2d$js$2f$build$2f$module$2f$jsSha256$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js [middleware-edge] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsSecureRandom",
    ()=>supportsSecureRandom,
    "supportsSubtleCrypto",
    ()=>supportsSubtleCrypto,
    "supportsWebCrypto",
    ()=>supportsWebCrypto,
    "supportsZeroByteGCM",
    ()=>supportsZeroByteGCM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)");
;
var subtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
];
function supportsWebCrypto(window) {
    if (supportsSecureRandom(window) && typeof window.crypto.subtle === "object") {
        var subtle = window.crypto.subtle;
        return supportsSubtleCrypto(subtle);
    }
    return false;
}
function supportsSecureRandom(window) {
    if (typeof window === "object" && typeof window.crypto === "object") {
        var getRandomValues = window.crypto.getRandomValues;
        return typeof getRandomValues === "function";
    }
    return false;
}
function supportsSubtleCrypto(subtle) {
    return subtle && subtleCryptoMethods.every(function(methodName) {
        return typeof subtle[methodName] === "function";
    });
}
function supportsZeroByteGCM(subtle) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var key, zeroByteAuthTag, _a;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    if (!supportsSubtleCrypto(subtle)) return [
                        2 /*return*/ ,
                        false
                    ];
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4 /*yield*/ ,
                        subtle.generateKey({
                            name: "AES-GCM",
                            length: 128
                        }, false, [
                            "encrypt"
                        ])
                    ];
                case 2:
                    key = _b.sent();
                    return [
                        4 /*yield*/ ,
                        subtle.encrypt({
                            name: "AES-GCM",
                            iv: new Uint8Array(Array(12)),
                            additionalData: new Uint8Array(Array(16)),
                            tagLength: 128
                        }, key, new Uint8Array(0))
                    ];
                case 3:
                    zeroByteAuthTag = _b.sent();
                    return [
                        2 /*return*/ ,
                        zeroByteAuthTag.byteLength === 16
                    ];
                case 4:
                    _a = _b.sent();
                    return [
                        2 /*return*/ ,
                        false
                    ];
                case 5:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
} //# sourceMappingURL=supportsWebCrypto.js.map
}),
"[project]/energy-os-v0/node_modules/@aws-crypto/supports-web-crypto/build/module/index.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f40$aws$2d$crypto$2f$supports$2d$web$2d$crypto$2f$build$2f$module$2f$supportsWebCrypto$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js [middleware-edge] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/energy-os-v0/node_modules/tslib/tslib.es6.mjs [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/energy-os-v0/node_modules/gcp-metadata/build/src/gcp-residency.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GCE_LINUX_BIOS_PATHS = void 0;
exports.isGoogleCloudServerless = isGoogleCloudServerless;
exports.isGoogleComputeEngineLinux = isGoogleComputeEngineLinux;
exports.isGoogleComputeEngineMACAddress = isGoogleComputeEngineMACAddress;
exports.isGoogleComputeEngine = isGoogleComputeEngine;
exports.detectGCPResidency = detectGCPResidency;
const fs_1 = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'fs', ecmascript)");
const os_1 = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'os', ecmascript)");
/**
 * Known paths unique to Google Compute Engine Linux instances
 */ exports.GCE_LINUX_BIOS_PATHS = {
    BIOS_DATE: '/sys/class/dmi/id/bios_date',
    BIOS_VENDOR: '/sys/class/dmi/id/bios_vendor'
};
const GCE_MAC_ADDRESS_REGEX = /^42:01/;
/**
 * Determines if the process is running on a Google Cloud Serverless environment (Cloud Run or Cloud Functions instance).
 *
 * Uses the:
 * - {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
 * - {@link https://cloud.google.com/functions/docs/env-var Cloud Functions environment variables}.
 *
 * @returns {boolean} `true` if the process is running on GCP serverless, `false` otherwise.
 */ function isGoogleCloudServerless() {
    /**
     * `CLOUD_RUN_JOB` is used for Cloud Run Jobs
     * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
     *
     * `FUNCTION_NAME` is used in older Cloud Functions environments:
     * - See {@link https://cloud.google.com/functions/docs/env-var Python 3.7 and Go 1.11}.
     *
     * `K_SERVICE` is used in Cloud Run and newer Cloud Functions environments:
     * - See {@link https://cloud.google.com/run/docs/container-contract#env-vars Cloud Run environment variables}.
     * - See {@link https://cloud.google.com/functions/docs/env-var Cloud Functions newer runtimes}.
     */ const isGFEnvironment = process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE;
    return !!isGFEnvironment;
}
/**
 * Determines if the process is running on a Linux Google Compute Engine instance.
 *
 * @returns {boolean} `true` if the process is running on Linux GCE, `false` otherwise.
 */ function isGoogleComputeEngineLinux() {
    if ((0, os_1.platform)() !== 'linux') return false;
    try {
        // ensure this file exist
        (0, fs_1.statSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
        // ensure this file exist and matches
        const biosVendor = (0, fs_1.readFileSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, 'utf8');
        return /Google/.test(biosVendor);
    } catch  {
        return false;
    }
}
/**
 * Determines if the process is running on a Google Compute Engine instance with a known
 * MAC address.
 *
 * @returns {boolean} `true` if the process is running on GCE (as determined by MAC address), `false` otherwise.
 */ function isGoogleComputeEngineMACAddress() {
    const interfaces = (0, os_1.networkInterfaces)();
    for (const item of Object.values(interfaces)){
        if (!item) continue;
        for (const { mac } of item){
            if (GCE_MAC_ADDRESS_REGEX.test(mac)) {
                return true;
            }
        }
    }
    return false;
}
/**
 * Determines if the process is running on a Google Compute Engine instance.
 *
 * @returns {boolean} `true` if the process is running on GCE, `false` otherwise.
 */ function isGoogleComputeEngine() {
    return isGoogleComputeEngineLinux() || isGoogleComputeEngineMACAddress();
}
/**
 * Determines if the process is running on Google Cloud Platform.
 *
 * @returns {boolean} `true` if the process is running on GCP, `false` otherwise.
 */ function detectGCPResidency() {
    return isGoogleCloudServerless() || isGoogleComputeEngine();
} //# sourceMappingURL=gcp-residency.js.map
}),
"[project]/energy-os-v0/node_modules/gcp-metadata/build/src/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gcpResidencyCache = exports.METADATA_SERVER_DETECTION = exports.HEADERS = exports.HEADER_VALUE = exports.HEADER_NAME = exports.SECONDARY_HOST_ADDRESS = exports.HOST_ADDRESS = exports.BASE_PATH = void 0;
exports.instance = instance;
exports.project = project;
exports.universe = universe;
exports.bulk = bulk;
exports.isAvailable = isAvailable;
exports.resetIsAvailableCache = resetIsAvailableCache;
exports.getGCPResidency = getGCPResidency;
exports.setGCPResidency = setGCPResidency;
exports.requestTimeout = requestTimeout;
const gaxios_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/index.js [middleware-edge] (ecmascript)");
const jsonBigint = __turbopack_context__.r("[project]/energy-os-v0/node_modules/json-bigint/index.js [middleware-edge] (ecmascript)");
const gcp_residency_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gcp-metadata/build/src/gcp-residency.js [middleware-edge] (ecmascript)");
const logger = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/google-logging-utils/build/src/index.js [middleware-edge] (ecmascript)"));
exports.BASE_PATH = '/computeMetadata/v1';
exports.HOST_ADDRESS = 'http://169.254.169.254';
exports.SECONDARY_HOST_ADDRESS = 'http://metadata.google.internal.';
exports.HEADER_NAME = 'Metadata-Flavor';
exports.HEADER_VALUE = 'Google';
exports.HEADERS = Object.freeze({
    [exports.HEADER_NAME]: exports.HEADER_VALUE
});
const log = logger.log('gcp-metadata');
/**
 * Metadata server detection override options.
 *
 * Available via `process.env.METADATA_SERVER_DETECTION`.
 */ exports.METADATA_SERVER_DETECTION = Object.freeze({
    'assume-present': "don't try to ping the metadata server, but assume it's present",
    none: "don't try to ping the metadata server, but don't try to use it either",
    'bios-only': "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
    'ping-only': 'skip the BIOS probe, and go straight to pinging'
});
/**
 * Returns the base URL while taking into account the GCE_METADATA_HOST
 * environment variable if it exists.
 *
 * @returns The base URL, e.g., http://169.254.169.254/computeMetadata/v1.
 */ function getBaseUrl(baseUrl) {
    if (!baseUrl) {
        baseUrl = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || exports.HOST_ADDRESS;
    }
    // If no scheme is provided default to HTTP:
    if (!/^https?:\/\//.test(baseUrl)) {
        baseUrl = `http://${baseUrl}`;
    }
    return new URL(exports.BASE_PATH, baseUrl).href;
}
// Accepts an options object passed from the user to the API. In previous
// versions of the API, it referred to a `Request` or an `Axios` request
// options object.  Now it refers to an object with very limited property
// names. This is here to help ensure users don't pass invalid options when
// they  upgrade from 0.4 to 0.5 to 0.8.
function validate(options) {
    Object.keys(options).forEach((key)=>{
        switch(key){
            case 'params':
            case 'property':
            case 'headers':
                break;
            case 'qs':
                throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
            default:
                throw new Error(`'${key}' is not a valid configuration option.`);
        }
    });
}
async function metadataAccessor(type, options = {}, noResponseRetries = 3, fastFail = false) {
    const headers = new Headers(exports.HEADERS);
    let metadataKey = '';
    let params = {};
    if (typeof type === 'object') {
        const metadataAccessor = type;
        new Headers(metadataAccessor.headers).forEach((value, key)=>headers.set(key, value));
        metadataKey = metadataAccessor.metadataKey;
        params = metadataAccessor.params || params;
        noResponseRetries = metadataAccessor.noResponseRetries || noResponseRetries;
        fastFail = metadataAccessor.fastFail || fastFail;
    } else {
        metadataKey = type;
    }
    if (typeof options === 'string') {
        metadataKey += `/${options}`;
    } else {
        validate(options);
        if (options.property) {
            metadataKey += `/${options.property}`;
        }
        new Headers(options.headers).forEach((value, key)=>headers.set(key, value));
        params = options.params || params;
    }
    const requestMethod = fastFail ? fastFailMetadataRequest : gaxios_1.request;
    const req = {
        url: `${getBaseUrl()}/${metadataKey}`,
        headers,
        retryConfig: {
            noResponseRetries
        },
        params,
        responseType: 'text',
        timeout: requestTimeout()
    };
    log.info('instance request %j', req);
    const res = await requestMethod(req);
    log.info('instance metadata is %s', res.data);
    const metadataFlavor = res.headers.get(exports.HEADER_NAME);
    if (metadataFlavor !== exports.HEADER_VALUE) {
        throw new RangeError(`Invalid response from metadata service: incorrect ${exports.HEADER_NAME} header. Expected '${exports.HEADER_VALUE}', got ${metadataFlavor ? `'${metadataFlavor}'` : 'no header'}`);
    }
    if (typeof res.data === 'string') {
        try {
            return jsonBigint.parse(res.data);
        } catch  {
        /* ignore */ }
    }
    return res.data;
}
async function fastFailMetadataRequest(options) {
    const secondaryOptions = {
        ...options,
        url: options.url?.toString().replace(getBaseUrl(), getBaseUrl(exports.SECONDARY_HOST_ADDRESS))
    };
    // We race a connection between DNS/IP to metadata server. There are a couple
    // reasons for this:
    //
    // 1. the DNS is slow in some GCP environments; by checking both, we might
    //    detect the runtime environment significantly faster.
    // 2. we can't just check the IP, which is tarpitted and slow to respond
    //    on a user's local machine.
    //
    // Returns first resolved promise or if all promises get rejected we return an AggregateError.
    //
    // Note, however, if a failure happens prior to a success, a rejection should
    // occur, this is for folks running locally.
    //
    const r1 = (0, gaxios_1.request)(options);
    const r2 = (0, gaxios_1.request)(secondaryOptions);
    return Promise.any([
        r1,
        r2
    ]);
}
/**
 * Obtain metadata for the current GCE instance.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const serviceAccount: {} = await instance('service-accounts/');
 * const serviceAccountEmail: string = await instance('service-accounts/default/email');
 * ```
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function instance(options) {
    return metadataAccessor('instance', options);
}
/**
 * Obtain metadata for the current GCP project.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const projectId: string = await project('project-id');
 * const numericProjectId: number = await project('numeric-project-id');
 * ```
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function project(options) {
    return metadataAccessor('project', options);
}
/**
 * Obtain metadata for the current universe.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const universeDomain: string = await universe('universe-domain');
 * ```
 */ function universe(options) {
    return metadataAccessor('universe', options);
}
/**
 * Retrieve metadata items in parallel.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const data = await bulk([
 *   {
 *     metadataKey: 'instance',
 *   },
 *   {
 *     metadataKey: 'project/project-id',
 *   },
 * ] as const);
 *
 * // data.instance;
 * // data['project/project-id'];
 * ```
 *
 * @param properties The metadata properties to retrieve
 * @returns The metadata in `metadatakey:value` format
 */ async function bulk(properties) {
    const r = {};
    await Promise.all(properties.map((item)=>{
        return (async ()=>{
            const res = await metadataAccessor(item);
            const key = item.metadataKey;
            r[key] = res;
        })();
    }));
    return r;
}
/*
 * How many times should we retry detecting GCP environment.
 */ function detectGCPAvailableRetries() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
}
let cachedIsAvailableResponse;
/**
 * Determine if the metadata server is currently available.
 */ async function isAvailable() {
    if (process.env.METADATA_SERVER_DETECTION) {
        const value = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
        if (!(value in exports.METADATA_SERVER_DETECTION)) {
            throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(exports.METADATA_SERVER_DETECTION).join('`, `')}\`, or unset`);
        }
        switch(value){
            case 'assume-present':
                return true;
            case 'none':
                return false;
            case 'bios-only':
                return getGCPResidency();
            case 'ping-only':
        }
    }
    try {
        // If a user is instantiating several GCP libraries at the same time,
        // this may result in multiple calls to isAvailable(), to detect the
        // runtime environment. We use the same promise for each of these calls
        // to reduce the network load.
        if (cachedIsAvailableResponse === undefined) {
            cachedIsAvailableResponse = metadataAccessor('instance', undefined, detectGCPAvailableRetries(), // If the default HOST_ADDRESS has been overridden, we should not
            // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
            // a non-GCP environment):
            !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
        }
        await cachedIsAvailableResponse;
        return true;
    } catch (e) {
        const err = e;
        if (process.env.DEBUG_AUTH) {
            console.info(err);
        }
        if (err.type === 'request-timeout') {
            // If running in a GCP environment, metadata endpoint should return
            // within ms.
            return false;
        }
        if (err.response && err.response.status === 404) {
            return false;
        } else {
            if (!(err.response && err.response.status === 404) && // A warning is emitted if we see an unexpected err.code, or err.code
            // is not populated:
            (!err.code || ![
                'EHOSTDOWN',
                'EHOSTUNREACH',
                'ENETUNREACH',
                'ENOENT',
                'ENOTFOUND',
                'ECONNREFUSED'
            ].includes(err.code.toString()))) {
                let code = 'UNKNOWN';
                if (err.code) code = err.code.toString();
                process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, 'MetadataLookupWarning');
            }
            // Failure to resolve the metadata service means that it is not available.
            return false;
        }
    }
}
/**
 * reset the memoized isAvailable() lookup.
 */ function resetIsAvailableCache() {
    cachedIsAvailableResponse = undefined;
}
/**
 * A cache for the detected GCP Residency.
 */ exports.gcpResidencyCache = null;
/**
 * Detects GCP Residency.
 * Caches results to reduce costs for subsequent calls.
 *
 * @see setGCPResidency for setting
 */ function getGCPResidency() {
    if (exports.gcpResidencyCache === null) {
        setGCPResidency();
    }
    return exports.gcpResidencyCache;
}
/**
 * Sets the detected GCP Residency.
 * Useful for forcing metadata server detection behavior.
 *
 * Set `null` to autodetect the environment (default behavior).
 * @see getGCPResidency for getting
 */ function setGCPResidency(value = null) {
    exports.gcpResidencyCache = value !== null ? value : (0, gcp_residency_1.detectGCPResidency)();
}
/**
 * Obtain the timeout for requests to the metadata server.
 *
 * In certain environments and conditions requests can take longer than
 * the default timeout to complete. This function will determine the
 * appropriate timeout based on the environment.
 *
 * @returns {number} a request timeout duration in milliseconds.
 */ function requestTimeout() {
    return getGCPResidency() ? 0 : 3000;
}
__exportStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/gcp-metadata/build/src/gcp-residency.js [middleware-edge] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/extend/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr);
    }
    return toStr.call(arr) === '[object Array]';
};
var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== '[object Object]') {
        return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
    }
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj){}
    return typeof key === 'undefined' || hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
    if (defineProperty && options.name === '__proto__') {
        defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
        });
    } else {
        target[options.name] = options.newValue;
    }
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
        if (!hasOwn.call(obj, name)) {
            return void 0;
        } else if (gOPD) {
            // In early versions of node, obj['__proto__'] is buggy when obj has
            // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
            return gOPD(obj, name).value;
        }
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) {
            // Extend the base object
            for(name in options){
                src = getProperty(target, name);
                copy = getProperty(options, name);
                // Prevent never-ending loop
                if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        setProperty(target, {
                            name: name,
                            newValue: extend(deep, clone, copy)
                        });
                    // Don't bring in undefined values
                    } else if (typeof copy !== 'undefined') {
                        setProperty(target, {
                            name: name,
                            newValue: copy
                        });
                    }
                }
            }
        }
    }
    // Return the modified object
    return target;
};
}),
"[project]/energy-os-v0/node_modules/gaxios/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"gaxios","version":"7.1.3","description":"A simple common HTTP client specifically for Google APIs and services.","main":"build/cjs/src/index.js","types":"build/cjs/src/index.d.ts","files":["build/"],"exports":{".":{"import":{"types":"./build/esm/src/index.d.ts","default":"./build/esm/src/index.js"},"require":{"types":"./build/cjs/src/index.d.ts","default":"./build/cjs/src/index.js"}}},"scripts":{"lint":"gts check --no-inline-config","test":"c8 mocha build/esm/test","presystem-test":"npm run compile","system-test":"mocha build/esm/system-test --timeout 80000","compile":"tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs","fix":"gts fix","prepare":"npm run compile","pretest":"npm run compile","webpack":"webpack","prebrowser-test":"npm run compile","browser-test":"node build/browser-test/browser-test-runner.js","docs":"jsdoc -c .jsdoc.js","docs-test":"linkinator docs","predocs-test":"npm run docs","samples-test":"cd samples/ && npm link ../ && npm test && cd ../","prelint":"cd samples; npm link ../; npm install","clean":"gts clean"},"repository":{"type":"git","directory":"packages/gaxios","url":"https://github.com/googleapis/google-cloud-node-core.git"},"keywords":["google"],"engines":{"node":">=18"},"author":"Google, LLC","license":"Apache-2.0","devDependencies":{"@babel/plugin-proposal-private-methods":"^7.18.6","@types/cors":"^2.8.6","@types/express":"^5.0.0","@types/extend":"^3.0.1","@types/mocha":"^10.0.10","@types/multiparty":"4.2.1","@types/mv":"^2.1.0","@types/ncp":"^2.0.1","@types/node":"^22.0.0","@types/sinon":"^17.0.0","@types/tmp":"0.2.6","assert":"^2.0.0","browserify":"^17.0.0","c8":"^10.0.0","cors":"^2.8.5","express":"^5.0.0","gts":"^6.0.0","is-docker":"^3.0.0","jsdoc":"^4.0.0","jsdoc-fresh":"^5.0.0","jsdoc-region-tag":"^4.0.0","karma":"^6.0.0","karma-chrome-launcher":"^3.0.0","karma-coverage":"^2.0.0","karma-firefox-launcher":"^2.0.0","karma-mocha":"^2.0.0","karma-remap-coverage":"^0.1.5","karma-sourcemap-loader":"^0.4.0","karma-webpack":"^5.0.1","linkinator":"^6.1.2","mocha":"^11.1.0","multiparty":"^4.2.1","mv":"^2.1.1","ncp":"^2.0.0","nock":"^14.0.0-beta.13","null-loader":"^4.0.0","pack-n-play":"^4.0.0","puppeteer":"^24.0.0","sinon":"^21.0.0","stream-browserify":"^3.0.0","tmp":"0.2.5","ts-loader":"^9.5.2","typescript":"^5.8.3","webpack":"^5.35.0","webpack-cli":"^6.0.1"},"dependencies":{"extend":"^3.0.2","https-proxy-agent":"^7.0.1","node-fetch":"^3.3.2","rimraf":"^5.0.1"},"homepage":"https://github.com/googleapis/google-cloud-node-core/tree/main/packages/gaxios"});}),
"[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/util.cjs [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2023 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const pkg = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/package.json (json)");
module.exports = {
    pkg
}; //# sourceMappingURL=util.cjs.map
}),
"[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/common.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GaxiosError = exports.GAXIOS_ERROR_SYMBOL = void 0;
exports.defaultErrorRedactor = defaultErrorRedactor;
const extend_1 = __importDefault(__turbopack_context__.r("[project]/energy-os-v0/node_modules/extend/index.js [middleware-edge] (ecmascript)"));
const util_cjs_1 = __importDefault(__turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/util.cjs [middleware-edge] (ecmascript)"));
const pkg = util_cjs_1.default.pkg;
/**
 * Support `instanceof` operator for `GaxiosError`s in different versions of this library.
 *
 * @see {@link GaxiosError[Symbol.hasInstance]}
 */ exports.GAXIOS_ERROR_SYMBOL = Symbol.for(`${pkg.name}-gaxios-error`);
class GaxiosError extends Error {
    config;
    response;
    /**
     * An error code.
     * Can be a system error code, DOMException error name, or any error's 'code' property where it is a `string`.
     *
     * It is only a `number` when the cause is sourced from an API-level error (AIP-193).
     *
     * @see {@link https://nodejs.org/api/errors.html#errorcode error.code}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMException#error_names DOMException#error_names}
     * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
     *
     * @example
     * 'ECONNRESET'
     *
     * @example
     * 'TimeoutError'
     *
     * @example
     * 500
     */ code;
    /**
     * An HTTP Status code.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response/status Response#status}
     *
     * @example
     * 500
     */ status;
    /**
     * @deprecated use {@link GaxiosError.cause} instead.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause Error#cause}
     *
     * @privateRemarks
     *
     * We will want to remove this property later as the modern `cause` property is better suited
     * for displaying and relaying nested errors. Keeping this here makes the resulting
     * error log larger than it needs to be.
     *
     */ error;
    /**
     * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
     *
     * @see {@link GAXIOS_ERROR_SYMBOL}
     * @see {@link GaxiosError[Symbol.hasInstance]}
     * @see {@link https://github.com/microsoft/TypeScript/issues/13965#issuecomment-278570200}
     * @see {@link https://stackoverflow.com/questions/46618852/require-and-instanceof}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance#reverting_to_default_instanceof_behavior}
     */ [exports.GAXIOS_ERROR_SYMBOL] = pkg.version;
    /**
     * Support `instanceof` operator for `GaxiosError` across builds/duplicated files.
     *
     * @see {@link GAXIOS_ERROR_SYMBOL}
     * @see {@link GaxiosError[GAXIOS_ERROR_SYMBOL]}
     */ static [Symbol.hasInstance](instance) {
        if (instance && typeof instance === 'object' && exports.GAXIOS_ERROR_SYMBOL in instance && instance[exports.GAXIOS_ERROR_SYMBOL] === pkg.version) {
            return true;
        }
        // fallback to native
        return Function.prototype[Symbol.hasInstance].call(GaxiosError, instance);
    }
    constructor(message, config, response, cause){
        super(message, {
            cause
        });
        this.config = config;
        this.response = response;
        this.error = cause instanceof Error ? cause : undefined;
        // deep-copy config as we do not want to mutate
        // the existing config for future retries/use
        this.config = (0, extend_1.default)(true, {}, config);
        if (this.response) {
            this.response.config = (0, extend_1.default)(true, {}, this.response.config);
        }
        if (this.response) {
            try {
                this.response.data = translateData(this.config.responseType, // workaround for `node-fetch`'s `.data` deprecation...
                this.response?.bodyUsed ? this.response?.data : undefined);
            } catch  {
            // best effort - don't throw an error within an error
            // we could set `this.response.config.responseType = 'unknown'`, but
            // that would mutate future calls with this config object.
            }
            this.status = this.response.status;
        }
        if (cause instanceof DOMException) {
            // The DOMException's equivalent to code is its name
            // E.g.: name = `TimeoutError`, code = number
            // https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name
            this.code = cause.name;
        } else if (cause && typeof cause === 'object' && 'code' in cause && (typeof cause.code === 'string' || typeof cause.code === 'number')) {
            this.code = cause.code;
        }
    }
    /**
     * An AIP-193 conforming error extractor.
     *
     * @see {@link https://google.aip.dev/193#http11json-representation AIP-193}
     *
     * @internal
     * @expiremental
     *
     * @param res the response object
     * @returns the extracted error information
     */ static extractAPIErrorFromResponse(res, defaultErrorMessage = 'The request failed') {
        let message = defaultErrorMessage;
        // Use res.data as the error message
        if (typeof res.data === 'string') {
            message = res.data;
        }
        if (res.data && typeof res.data === 'object' && 'error' in res.data && res.data.error && !res.ok) {
            if (typeof res.data.error === 'string') {
                return {
                    message: res.data.error,
                    code: res.status,
                    status: res.statusText
                };
            }
            if (typeof res.data.error === 'object') {
                // extract status from data.message
                message = 'message' in res.data.error && typeof res.data.error.message === 'string' ? res.data.error.message : message;
                // extract status from data.error
                const status = 'status' in res.data.error && typeof res.data.error.status === 'string' ? res.data.error.status : res.statusText;
                // extract code from data.error
                const code = 'code' in res.data.error && typeof res.data.error.code === 'number' ? res.data.error.code : res.status;
                if ('errors' in res.data.error && Array.isArray(res.data.error.errors)) {
                    const errorMessages = [];
                    for (const e of res.data.error.errors){
                        if (typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                            errorMessages.push(e.message);
                        }
                    }
                    return Object.assign({
                        message: errorMessages.join('\n') || message,
                        code,
                        status
                    }, res.data.error);
                }
                return Object.assign({
                    message,
                    code,
                    status
                }, res.data.error);
            }
        }
        return {
            message,
            code: res.status,
            status: res.statusText
        };
    }
}
exports.GaxiosError = GaxiosError;
function translateData(responseType, data) {
    switch(responseType){
        case 'stream':
            return data;
        case 'json':
            return JSON.parse(JSON.stringify(data));
        case 'arraybuffer':
            return JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(data).toString('utf8'));
        case 'blob':
            return JSON.parse(data.text());
        default:
            return data;
    }
}
/**
 * An experimental error redactor.
 *
 * @param config Config to potentially redact properties of
 * @param response Config to potentially redact properties of
 *
 * @experimental
 */ function defaultErrorRedactor(data) {
    const REDACT = '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';
    function redactHeaders(headers) {
        if (!headers) return;
        headers.forEach((_, key)=>{
            // any casing of `Authentication`
            // any casing of `Authorization`
            // anything containing secret, such as 'client secret'
            if (/^authentication$/i.test(key) || /^authorization$/i.test(key) || /secret/i.test(key)) headers.set(key, REDACT);
        });
    }
    function redactString(obj, key) {
        if (typeof obj === 'object' && obj !== null && typeof obj[key] === 'string') {
            const text = obj[key];
            if (/grant_type=/i.test(text) || /assertion=/i.test(text) || /secret/i.test(text)) {
                obj[key] = REDACT;
            }
        }
    }
    function redactObject(obj) {
        if (!obj || typeof obj !== 'object') {
            return;
        } else if (obj instanceof FormData || obj instanceof URLSearchParams || 'forEach' in obj && 'set' in obj) {
            obj.forEach((_, key)=>{
                if ([
                    'grant_type',
                    'assertion'
                ].includes(key) || /secret/.test(key)) {
                    obj.set(key, REDACT);
                }
            });
        } else {
            if ('grant_type' in obj) {
                obj['grant_type'] = REDACT;
            }
            if ('assertion' in obj) {
                obj['assertion'] = REDACT;
            }
            if ('client_secret' in obj) {
                obj['client_secret'] = REDACT;
            }
        }
    }
    if (data.config) {
        redactHeaders(data.config.headers);
        redactString(data.config, 'data');
        redactObject(data.config.data);
        redactString(data.config, 'body');
        redactObject(data.config.body);
        if (data.config.url.searchParams.has('token')) {
            data.config.url.searchParams.set('token', REDACT);
        }
        if (data.config.url.searchParams.has('client_secret')) {
            data.config.url.searchParams.set('client_secret', REDACT);
        }
    }
    if (data.response) {
        defaultErrorRedactor({
            config: data.response.config
        });
        redactHeaders(data.response.headers);
        // workaround for `node-fetch`'s `.data` deprecation...
        if (data.response.bodyUsed) {
            redactString(data.response, 'data');
            redactObject(data.response.data);
        }
    }
    return data;
} //# sourceMappingURL=common.js.map
}),
"[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/retry.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRetryConfig = getRetryConfig;
async function getRetryConfig(err) {
    let config = getConfig(err);
    if (!err || !err.config || !config && !err.config.retry) {
        return {
            shouldRetry: false
        };
    }
    config = config || {};
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    config.retry = config.retry === undefined || config.retry === null ? 3 : config.retry;
    config.httpMethodsToRetry = config.httpMethodsToRetry || [
        'GET',
        'HEAD',
        'PUT',
        'OPTIONS',
        'DELETE'
    ];
    config.noResponseRetries = config.noResponseRetries === undefined || config.noResponseRetries === null ? 2 : config.noResponseRetries;
    config.retryDelayMultiplier = config.retryDelayMultiplier ? config.retryDelayMultiplier : 2;
    config.timeOfFirstRequest = config.timeOfFirstRequest ? config.timeOfFirstRequest : Date.now();
    config.totalTimeout = config.totalTimeout ? config.totalTimeout : Number.MAX_SAFE_INTEGER;
    config.maxRetryDelay = config.maxRetryDelay ? config.maxRetryDelay : Number.MAX_SAFE_INTEGER;
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    const retryRanges = [
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        // 1xx - Retry (Informational, request still processing)
        // 2xx - Do not retry (Success)
        // 3xx - Do not retry (Redirect)
        // 4xx - Do not retry (Client errors)
        // 408 - Retry ("Request Timeout")
        // 429 - Retry ("Too Many Requests")
        // 5xx - Retry (Server errors)
        [
            100,
            199
        ],
        [
            408,
            408
        ],
        [
            429,
            429
        ],
        [
            500,
            599
        ]
    ];
    config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
    // Put the config back into the err
    err.config.retryConfig = config;
    // Determine if we should retry the request
    const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
    if (!await shouldRetryFn(err)) {
        return {
            shouldRetry: false,
            config: err.config
        };
    }
    const delay = getNextRetryDelay(config);
    // We're going to retry!  Increment the counter.
    err.config.retryConfig.currentRetryAttempt += 1;
    // Create a promise that invokes the retry after the backOffDelay
    const backoff = config.retryBackoff ? config.retryBackoff(err, delay) : new Promise((resolve)=>{
        setTimeout(resolve, delay);
    });
    // Notify the user if they added an `onRetryAttempt` handler
    if (config.onRetryAttempt) {
        await config.onRetryAttempt(err);
    }
    // Return the promise in which recalls Gaxios to retry the request
    await backoff;
    return {
        shouldRetry: true,
        config: err.config
    };
}
/**
 * Determine based on config if we should retry the request.
 * @param err The GaxiosError passed to the interceptor.
 */ function shouldRetryRequest(err) {
    const config = getConfig(err);
    if (err.config.signal?.aborted && err.code !== 'TimeoutError' || err.code === 'AbortError') {
        return false;
    }
    // If there's no config, or retries are disabled, return.
    if (!config || config.retry === 0) {
        return false;
    }
    // Check if this error has no response (ETIMEDOUT, ENOTFOUND, etc)
    if (!err.response && (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
        return false;
    }
    // Only retry with configured HttpMethods.
    if (!config.httpMethodsToRetry || !config.httpMethodsToRetry.includes(err.config.method?.toUpperCase() || 'GET')) {
        return false;
    }
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    if (err.response && err.response.status) {
        let isInRange = false;
        for (const [min, max] of config.statusCodesToRetry){
            const status = err.response.status;
            if (status >= min && status <= max) {
                isInRange = true;
                break;
            }
        }
        if (!isInRange) {
            return false;
        }
    }
    // If we are out of retry attempts, return
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    if (config.currentRetryAttempt >= config.retry) {
        return false;
    }
    return true;
}
/**
 * Acquire the raxConfig object from an GaxiosError if available.
 * @param err The Gaxios error with a config object.
 */ function getConfig(err) {
    if (err && err.config && err.config.retryConfig) {
        return err.config.retryConfig;
    }
    return;
}
/**
 * Gets the delay to wait before the next retry.
 *
 * @param {RetryConfig} config The current set of retry options
 * @returns {number} the amount of ms to wait before the next retry attempt.
 */ function getNextRetryDelay(config) {
    // Calculate time to wait with exponential backoff.
    // If this is the first retry, look for a configured retryDelay.
    const retryDelay = config.currentRetryAttempt ? 0 : config.retryDelay ?? 100;
    // Formula: retryDelay + ((retryDelayMultiplier^currentRetryAttempt - 1 / 2) * 1000)
    const calculatedDelay = retryDelay + (Math.pow(config.retryDelayMultiplier, config.currentRetryAttempt) - 1) / 2 * 1000;
    const maxAllowableDelay = config.totalTimeout - (Date.now() - config.timeOfFirstRequest);
    return Math.min(calculatedDelay, maxAllowableDelay, config.maxRetryDelay);
} //# sourceMappingURL=retry.js.map
}),
"[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/interceptor.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2024 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GaxiosInterceptorManager = void 0;
/**
 * Class to manage collections of GaxiosInterceptors for both requests and responses.
 */ class GaxiosInterceptorManager extends Set {
}
exports.GaxiosInterceptorManager = GaxiosInterceptorManager; //# sourceMappingURL=interceptor.js.map
}),
"[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/gaxios.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var _a;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Gaxios = void 0;
const extend_1 = __importDefault(__turbopack_context__.r("[project]/energy-os-v0/node_modules/extend/index.js [middleware-edge] (ecmascript)"));
const https_1 = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'https', ecmascript)");
const common_js_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/common.js [middleware-edge] (ecmascript)");
const retry_js_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/retry.js [middleware-edge] (ecmascript)");
const stream_1 = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'stream', ecmascript)");
const interceptor_js_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/interceptor.js [middleware-edge] (ecmascript)");
const randomUUID = async ()=>globalThis.crypto?.randomUUID() || (await Promise.resolve().then(()=>__turbopack_context__.i("[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)"))).randomUUID();
const HTTP_STATUS_NO_CONTENT = 204;
class Gaxios {
    agentCache = new Map();
    /**
     * Default HTTP options that will be used for every HTTP request.
     */ defaults;
    /**
     * Interceptors
     */ interceptors;
    /**
     * The Gaxios class is responsible for making HTTP requests.
     * @param defaults The default set of options to be used for this instance.
     */ constructor(defaults){
        this.defaults = defaults || {};
        this.interceptors = {
            request: new interceptor_js_1.GaxiosInterceptorManager(),
            response: new interceptor_js_1.GaxiosInterceptorManager()
        };
    }
    /**
     * A {@link fetch `fetch`} compliant API for {@link Gaxios}.
     *
     * @remarks
     *
     * This is useful as a drop-in replacement for `fetch` API usage.
     *
     * @example
     *
     * ```ts
     * const gaxios = new Gaxios();
     * const myFetch: typeof fetch = (...args) => gaxios.fetch(...args);
     * await myFetch('https://example.com');
     * ```
     *
     * @param args `fetch` API or `Gaxios#request` parameters
     * @returns the {@link Response} with Gaxios-added properties
     */ fetch(...args) {
        // Up to 2 parameters in either overload
        const input = args[0];
        const init = args[1];
        let url = undefined;
        const headers = new Headers();
        // prepare URL
        if (typeof input === 'string') {
            url = new URL(input);
        } else if (input instanceof URL) {
            url = input;
        } else if (input && input.url) {
            url = new URL(input.url);
        }
        // prepare headers
        if (input && typeof input === 'object' && 'headers' in input) {
            _a.mergeHeaders(headers, input.headers);
        }
        if (init) {
            _a.mergeHeaders(headers, new Headers(init.headers));
        }
        // prepare request
        if (typeof input === 'object' && !(input instanceof URL)) {
            // input must have been a non-URL object
            return this.request({
                ...init,
                ...input,
                headers,
                url
            });
        } else {
            // input must have been a string or URL
            return this.request({
                ...init,
                headers,
                url
            });
        }
    }
    /**
     * Perform an HTTP request with the given options.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */ async request(opts = {}) {
        let prepared = await this.#prepareRequest(opts);
        prepared = await this.#applyRequestInterceptors(prepared);
        return this.#applyResponseInterceptors(this._request(prepared));
    }
    async _defaultAdapter(config) {
        const fetchImpl = config.fetchImplementation || this.defaults.fetchImplementation || await _a.#getFetch();
        // node-fetch v3 warns when `data` is present
        // https://github.com/node-fetch/node-fetch/issues/1000
        const preparedOpts = {
            ...config
        };
        delete preparedOpts.data;
        const res = await fetchImpl(config.url, preparedOpts);
        const data = await this.getResponseData(config, res);
        if (!Object.getOwnPropertyDescriptor(res, 'data')?.configurable) {
            // Work-around for `node-fetch` v3 as accessing `data` would otherwise throw
            Object.defineProperties(res, {
                data: {
                    configurable: true,
                    writable: true,
                    enumerable: true,
                    value: data
                }
            });
        }
        // Keep object as an instance of `Response`
        return Object.assign(res, {
            config,
            data
        });
    }
    /**
     * Internal, retryable version of the `request` method.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */ async _request(opts) {
        try {
            let translatedResponse;
            if (opts.adapter) {
                translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
            } else {
                translatedResponse = await this._defaultAdapter(opts);
            }
            if (!opts.validateStatus(translatedResponse.status)) {
                if (opts.responseType === 'stream') {
                    const response = [];
                    for await (const chunk of translatedResponse.data){
                        response.push(chunk);
                    }
                    translatedResponse.data = response.toString();
                }
                const errorInfo = common_js_1.GaxiosError.extractAPIErrorFromResponse(translatedResponse, `Request failed with status code ${translatedResponse.status}`);
                throw new common_js_1.GaxiosError(errorInfo?.message, opts, translatedResponse, errorInfo);
            }
            return translatedResponse;
        } catch (e) {
            let err;
            if (e instanceof common_js_1.GaxiosError) {
                err = e;
            } else if (e instanceof Error) {
                err = new common_js_1.GaxiosError(e.message, opts, undefined, e);
            } else {
                err = new common_js_1.GaxiosError('Unexpected Gaxios Error', opts, undefined, e);
            }
            const { shouldRetry, config } = await (0, retry_js_1.getRetryConfig)(err);
            if (shouldRetry && config) {
                err.config.retryConfig.currentRetryAttempt = config.retryConfig.currentRetryAttempt;
                // The error's config could be redacted - therefore we only want to
                // copy the retry state over to the existing config
                opts.retryConfig = err.config?.retryConfig;
                // re-prepare timeout for the next request
                this.#appendTimeoutToSignal(opts);
                return this._request(opts);
            }
            if (opts.errorRedactor) {
                opts.errorRedactor(err);
            }
            throw err;
        }
    }
    async getResponseData(opts, res) {
        if (res.status === HTTP_STATUS_NO_CONTENT) {
            return '';
        }
        if (opts.maxContentLength && res.headers.has('content-length') && opts.maxContentLength < Number.parseInt(res.headers?.get('content-length') || '')) {
            throw new common_js_1.GaxiosError("Response's `Content-Length` is over the limit.", opts, Object.assign(res, {
                config: opts
            }));
        }
        switch(opts.responseType){
            case 'stream':
                return res.body;
            case 'json':
                {
                    const data = await res.text();
                    try {
                        return JSON.parse(data);
                    } catch  {
                        return data;
                    }
                }
            case 'arraybuffer':
                return res.arrayBuffer();
            case 'blob':
                return res.blob();
            case 'text':
                return res.text();
            default:
                return this.getResponseDataFromContentType(res);
        }
    }
    #urlMayUseProxy(url, noProxy = []) {
        const candidate = new URL(url);
        const noProxyList = [
            ...noProxy
        ];
        const noProxyEnvList = (process.env.NO_PROXY ?? process.env.no_proxy)?.split(',') || [];
        for (const rule of noProxyEnvList){
            noProxyList.push(rule.trim());
        }
        for (const rule of noProxyList){
            // Match regex
            if (rule instanceof RegExp) {
                if (rule.test(candidate.toString())) {
                    return false;
                }
            } else if (rule instanceof URL) {
                if (rule.origin === candidate.origin) {
                    return false;
                }
            } else if (rule.startsWith('*.') || rule.startsWith('.')) {
                const cleanedRule = rule.replace(/^\*\./, '.');
                if (candidate.hostname.endsWith(cleanedRule)) {
                    return false;
                }
            } else if (rule === candidate.origin || rule === candidate.hostname || rule === candidate.href) {
                return false;
            }
        }
        return true;
    }
    /**
     * Applies the request interceptors. The request interceptors are applied after the
     * call to prepareRequest is completed.
     *
     * @param {GaxiosOptionsPrepared} options The current set of options.
     *
     * @returns {Promise<GaxiosOptionsPrepared>} Promise that resolves to the set of options or response after interceptors are applied.
     */ async #applyRequestInterceptors(options) {
        let promiseChain = Promise.resolve(options);
        for (const interceptor of this.interceptors.request.values()){
            if (interceptor) {
                promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
            }
        }
        return promiseChain;
    }
    /**
     * Applies the response interceptors. The response interceptors are applied after the
     * call to request is made.
     *
     * @param {GaxiosOptionsPrepared} options The current set of options.
     *
     * @returns {Promise<GaxiosOptionsPrepared>} Promise that resolves to the set of options or response after interceptors are applied.
     */ async #applyResponseInterceptors(response) {
        let promiseChain = Promise.resolve(response);
        for (const interceptor of this.interceptors.response.values()){
            if (interceptor) {
                promiseChain = promiseChain.then(interceptor.resolved, interceptor.rejected);
            }
        }
        return promiseChain;
    }
    /**
     * Validates the options, merges them with defaults, and prepare request.
     *
     * @param options The original options passed from the client.
     * @returns Prepared options, ready to make a request
     */ async #prepareRequest(options) {
        // Prepare Headers - copy in order to not mutate the original objects
        const preparedHeaders = new Headers(this.defaults.headers);
        _a.mergeHeaders(preparedHeaders, options.headers);
        // Merge options
        const opts = (0, extend_1.default)(true, {}, this.defaults, options);
        if (!opts.url) {
            throw new Error('URL is required.');
        }
        if (opts.baseURL) {
            opts.url = new URL(opts.url, opts.baseURL);
        }
        // don't modify the properties of a default or provided URL
        opts.url = new URL(opts.url);
        if (opts.params) {
            if (opts.paramsSerializer) {
                let additionalQueryParams = opts.paramsSerializer(opts.params);
                if (additionalQueryParams.startsWith('?')) {
                    additionalQueryParams = additionalQueryParams.slice(1);
                }
                const prefix = opts.url.toString().includes('?') ? '&' : '?';
                opts.url = opts.url + prefix + additionalQueryParams;
            } else {
                const url = opts.url instanceof URL ? opts.url : new URL(opts.url);
                for (const [key, value] of new URLSearchParams(opts.params)){
                    url.searchParams.append(key, value);
                }
                opts.url = url;
            }
        }
        if (typeof options.maxContentLength === 'number') {
            opts.size = options.maxContentLength;
        }
        if (typeof options.maxRedirects === 'number') {
            opts.follow = options.maxRedirects;
        }
        const shouldDirectlyPassData = typeof opts.data === 'string' || opts.data instanceof ArrayBuffer || opts.data instanceof Blob || globalThis.File && opts.data instanceof File || opts.data instanceof FormData || opts.data instanceof stream_1.Readable || opts.data instanceof ReadableStream || opts.data instanceof String || opts.data instanceof URLSearchParams || ArrayBuffer.isView(opts.data) || // `Buffer` (Node.js), `DataView`, `TypedArray`
        /**
             * @deprecated `node-fetch` or another third-party's request types
             */ [
            'Blob',
            'File',
            'FormData'
        ].includes(opts.data?.constructor?.name || '');
        if (opts.multipart?.length) {
            const boundary = await randomUUID();
            preparedHeaders.set('content-type', `multipart/related; boundary=${boundary}`);
            opts.body = stream_1.Readable.from(this.getMultipartRequest(opts.multipart, boundary));
        } else if (shouldDirectlyPassData) {
            opts.body = opts.data;
        } else if (typeof opts.data === 'object') {
            if (preparedHeaders.get('Content-Type') === 'application/x-www-form-urlencoded') {
                // If www-form-urlencoded content type has been set, but data is
                // provided as an object, serialize the content
                opts.body = opts.paramsSerializer ? opts.paramsSerializer(opts.data) : new URLSearchParams(opts.data);
            } else {
                if (!preparedHeaders.has('content-type')) {
                    preparedHeaders.set('content-type', 'application/json');
                }
                opts.body = JSON.stringify(opts.data);
            }
        } else if (opts.data) {
            opts.body = opts.data;
        }
        opts.validateStatus = opts.validateStatus || this.validateStatus;
        opts.responseType = opts.responseType || 'unknown';
        if (!preparedHeaders.has('accept') && opts.responseType === 'json') {
            preparedHeaders.set('accept', 'application/json');
        }
        const proxy = opts.proxy || process?.env?.HTTPS_PROXY || process?.env?.https_proxy || process?.env?.HTTP_PROXY || process?.env?.http_proxy;
        if (opts.agent) {
        // don't do any of the following options - use the user-provided agent.
        } else if (proxy && this.#urlMayUseProxy(opts.url, opts.noProxy)) {
            const HttpsProxyAgent = await _a.#getProxyAgent();
            if (this.agentCache.has(proxy)) {
                opts.agent = this.agentCache.get(proxy);
            } else {
                opts.agent = new HttpsProxyAgent(proxy, {
                    cert: opts.cert,
                    key: opts.key
                });
                this.agentCache.set(proxy, opts.agent);
            }
        } else if (opts.cert && opts.key) {
            // Configure client for mTLS
            if (this.agentCache.has(opts.key)) {
                opts.agent = this.agentCache.get(opts.key);
            } else {
                opts.agent = new https_1.Agent({
                    cert: opts.cert,
                    key: opts.key
                });
                this.agentCache.set(opts.key, opts.agent);
            }
        }
        if (typeof opts.errorRedactor !== 'function' && opts.errorRedactor !== false) {
            opts.errorRedactor = common_js_1.defaultErrorRedactor;
        }
        if (opts.body && !('duplex' in opts)) {
            /**
             * required for Node.js and the type isn't available today
             * @link https://github.com/nodejs/node/issues/46221
             * @link https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1483
             */ opts.duplex = 'half';
        }
        this.#appendTimeoutToSignal(opts);
        return Object.assign(opts, {
            headers: preparedHeaders,
            url: opts.url instanceof URL ? opts.url : new URL(opts.url)
        });
    }
    #appendTimeoutToSignal(opts) {
        if (opts.timeout) {
            const timeoutSignal = AbortSignal.timeout(opts.timeout);
            if (opts.signal && !opts.signal.aborted) {
                opts.signal = AbortSignal.any([
                    opts.signal,
                    timeoutSignal
                ]);
            } else {
                opts.signal = timeoutSignal;
            }
        }
    }
    /**
     * By default, throw for any non-2xx status code
     * @param status status code from the HTTP response
     */ validateStatus(status) {
        return status >= 200 && status < 300;
    }
    /**
     * Attempts to parse a response by looking at the Content-Type header.
     * @param {Response} response the HTTP response.
     * @returns a promise that resolves to the response data.
     */ async getResponseDataFromContentType(response) {
        let contentType = response.headers.get('Content-Type');
        if (contentType === null) {
            // Maintain existing functionality by calling text()
            return response.text();
        }
        contentType = contentType.toLowerCase();
        if (contentType.includes('application/json')) {
            let data = await response.text();
            try {
                data = JSON.parse(data);
            } catch  {
            // continue
            }
            return data;
        } else if (contentType.match(/^text\//)) {
            return response.text();
        } else {
            // If the content type is something not easily handled, just return the raw data (blob)
            return response.blob();
        }
    }
    /**
     * Creates an async generator that yields the pieces of a multipart/related request body.
     * This implementation follows the spec: https://www.ietf.org/rfc/rfc2387.txt. However, recursive
     * multipart/related requests are not currently supported.
     *
     * @param {GaxiosMultipartOptions[]} multipartOptions the pieces to turn into a multipart/related body.
     * @param {string} boundary the boundary string to be placed between each part.
     */ async *getMultipartRequest(multipartOptions, boundary) {
        const finale = `--${boundary}--`;
        for (const currentPart of multipartOptions){
            const partContentType = currentPart.headers.get('Content-Type') || 'application/octet-stream';
            const preamble = `--${boundary}\r\nContent-Type: ${partContentType}\r\n\r\n`;
            yield preamble;
            if (typeof currentPart.content === 'string') {
                yield currentPart.content;
            } else {
                yield* currentPart.content;
            }
            yield '\r\n';
        }
        yield finale;
    }
    /**
     * A cache for the lazily-loaded proxy agent.
     *
     * Should use {@link Gaxios[#getProxyAgent]} to retrieve.
     */ // using `import` to dynamically import the types here
    static #proxyAgent;
    /**
     * A cache for the lazily-loaded fetch library.
     *
     * Should use {@link Gaxios[#getFetch]} to retrieve.
     */ //
    static #fetch;
    /**
     * Imports, caches, and returns a proxy agent - if not already imported
     *
     * @returns A proxy agent
     */ static async #getProxyAgent() {
        this.#proxyAgent ||= (await Promise.resolve().then(()=>__turbopack_context__.i("[project]/energy-os-v0/node_modules/https-proxy-agent/dist/index.js [middleware-edge] (ecmascript)"))).HttpsProxyAgent;
        return this.#proxyAgent;
    }
    static async #getFetch() {
        const hasWindow = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && !!window;
        this.#fetch ||= ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (await Promise.resolve().then(()=>__turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/index.js [middleware-edge] (ecmascript)"))).default;
        return this.#fetch;
    }
    /**
     * Merges headers.
     * If the base headers do not exist a new `Headers` object will be returned.
     *
     * @remarks
     *
     * Using this utility can be helpful when the headers are not known to exist:
     * - if they exist as `Headers`, that instance will be used
     *   - it improves performance and allows users to use their existing references to their `Headers`
     * - if they exist in another form (`HeadersInit`), they will be used to create a new `Headers` object
     * - if the base headers do not exist a new `Headers` object will be created
     *
     * @param base headers to append/overwrite to
     * @param append headers to append/overwrite with
     * @returns the base headers instance with merged `Headers`
     */ static mergeHeaders(base, ...append) {
        base = base instanceof Headers ? base : new Headers(base);
        for (const headers of append){
            const add = headers instanceof Headers ? headers : new Headers(headers);
            add.forEach((value, key)=>{
                // set-cookie is the only header that would repeat.
                // A bit of background: https://developer.mozilla.org/en-US/docs/Web/API/Headers/getSetCookie
                key === 'set-cookie' ? base.append(key, value) : base.set(key, value);
            });
        }
        return base;
    }
}
exports.Gaxios = Gaxios;
_a = Gaxios; //# sourceMappingURL=gaxios.js.map
}),
"[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.instance = exports.Gaxios = exports.GaxiosError = void 0;
exports.request = request;
const gaxios_js_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/gaxios.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "Gaxios", {
    enumerable: true,
    get: function() {
        return gaxios_js_1.Gaxios;
    }
});
var common_js_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/common.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "GaxiosError", {
    enumerable: true,
    get: function() {
        return common_js_1.GaxiosError;
    }
});
__exportStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/gaxios/build/cjs/src/interceptor.js [middleware-edge] (ecmascript)"), exports);
/**
 * The default instance used when the `request` method is directly
 * invoked.
 */ exports.instance = new gaxios_js_1.Gaxios();
/**
 * Make an HTTP request using the given options.
 * @param opts Options for the request
 */ async function request(opts) {
    return exports.instance.request(opts);
} //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/ms/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/energy-os-v0/node_modules/debug/src/common.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ms/index.js [middleware-edge] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/energy-os-v0/node_modules/debug/src/browser.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/energy-os-v0/node_modules/debug/src/common.js [middleware-edge] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/energy-os-v0/node_modules/agent-base/dist/helpers.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.req = exports.json = exports.toBuffer = void 0;
const http = __importStar(__turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'http', ecmascript)"));
const https = __importStar(__turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'https', ecmascript)"));
async function toBuffer(stream) {
    let length = 0;
    const chunks = [];
    for await (const chunk of stream){
        length += chunk.length;
        chunks.push(chunk);
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat(chunks, length);
}
exports.toBuffer = toBuffer;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function json(stream) {
    const buf = await toBuffer(stream);
    const str = buf.toString('utf8');
    try {
        return JSON.parse(str);
    } catch (_err) {
        const err = _err;
        err.message += ` (input: ${str})`;
        throw err;
    }
}
exports.json = json;
function req(url, opts = {}) {
    const href = typeof url === 'string' ? url : url.href;
    const req1 = (href.startsWith('https:') ? https : http).request(url, opts);
    const promise = new Promise((resolve, reject)=>{
        req1.once('response', resolve).once('error', reject).end();
    });
    req1.then = promise.then.bind(promise);
    return req1;
}
exports.req = req; //# sourceMappingURL=helpers.js.map
}),
"[project]/energy-os-v0/node_modules/agent-base/dist/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Agent = void 0;
const net = __importStar(__turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'net', ecmascript)"));
const http = __importStar(__turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'http', ecmascript)"));
const https_1 = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'https', ecmascript)");
__exportStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/agent-base/dist/helpers.js [middleware-edge] (ecmascript)"), exports);
const INTERNAL = Symbol('AgentBaseInternalState');
class Agent extends http.Agent {
    constructor(opts){
        super(opts);
        this[INTERNAL] = {};
    }
    /**
     * Determine whether this is an `http` or `https` request.
     */ isSecureEndpoint(options) {
        if (options) {
            // First check the `secureEndpoint` property explicitly, since this
            // means that a parent `Agent` is "passing through" to this instance.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof options.secureEndpoint === 'boolean') {
                return options.secureEndpoint;
            }
            // If no explicit `secure` endpoint, check if `protocol` property is
            // set. This will usually be the case since using a full string URL
            // or `URL` instance should be the most common usage.
            if (typeof options.protocol === 'string') {
                return options.protocol === 'https:';
            }
        }
        // Finally, if no `protocol` property was set, then fall back to
        // checking the stack trace of the current call stack, and try to
        // detect the "https" module.
        const { stack } = new Error();
        if (typeof stack !== 'string') return false;
        return stack.split('\n').some((l)=>l.indexOf('(https.js:') !== -1 || l.indexOf('node:https:') !== -1);
    }
    // In order to support async signatures in `connect()` and Node's native
    // connection pooling in `http.Agent`, the array of sockets for each origin
    // has to be updated synchronously. This is so the length of the array is
    // accurate when `addRequest()` is next called. We achieve this by creating a
    // fake socket and adding it to `sockets[origin]` and incrementing
    // `totalSocketCount`.
    incrementSockets(name) {
        // If `maxSockets` and `maxTotalSockets` are both Infinity then there is no
        // need to create a fake socket because Node.js native connection pooling
        // will never be invoked.
        if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) {
            return null;
        }
        // All instances of `sockets` are expected TypeScript errors. The
        // alternative is to add it as a private property of this class but that
        // will break TypeScript subclassing.
        if (!this.sockets[name]) {
            // @ts-expect-error `sockets` is readonly in `@types/node`
            this.sockets[name] = [];
        }
        const fakeSocket = new net.Socket({
            writable: false
        });
        this.sockets[name].push(fakeSocket);
        // @ts-expect-error `totalSocketCount` isn't defined in `@types/node`
        this.totalSocketCount++;
        return fakeSocket;
    }
    decrementSockets(name, socket) {
        if (!this.sockets[name] || socket === null) {
            return;
        }
        const sockets = this.sockets[name];
        const index = sockets.indexOf(socket);
        if (index !== -1) {
            sockets.splice(index, 1);
            // @ts-expect-error  `totalSocketCount` isn't defined in `@types/node`
            this.totalSocketCount--;
            if (sockets.length === 0) {
                // @ts-expect-error `sockets` is readonly in `@types/node`
                delete this.sockets[name];
            }
        }
    }
    // In order to properly update the socket pool, we need to call `getName()` on
    // the core `https.Agent` if it is a secureEndpoint.
    getName(options) {
        const secureEndpoint = this.isSecureEndpoint(options);
        if (secureEndpoint) {
            // @ts-expect-error `getName()` isn't defined in `@types/node`
            return https_1.Agent.prototype.getName.call(this, options);
        }
        // @ts-expect-error `getName()` isn't defined in `@types/node`
        return super.getName(options);
    }
    createSocket(req, options, cb) {
        const connectOpts = {
            ...options,
            secureEndpoint: this.isSecureEndpoint(options)
        };
        const name = this.getName(connectOpts);
        const fakeSocket = this.incrementSockets(name);
        Promise.resolve().then(()=>this.connect(req, connectOpts)).then((socket)=>{
            this.decrementSockets(name, fakeSocket);
            if (socket instanceof http.Agent) {
                try {
                    // @ts-expect-error `addRequest()` isn't defined in `@types/node`
                    return socket.addRequest(req, connectOpts);
                } catch (err) {
                    return cb(err);
                }
            }
            this[INTERNAL].currentSocket = socket;
            // @ts-expect-error `createSocket()` isn't defined in `@types/node`
            super.createSocket(req, options, cb);
        }, (err)=>{
            this.decrementSockets(name, fakeSocket);
            cb(err);
        });
    }
    createConnection() {
        const socket = this[INTERNAL].currentSocket;
        this[INTERNAL].currentSocket = undefined;
        if (!socket) {
            throw new Error('No socket was returned in the `connect()` function');
        }
        return socket;
    }
    get defaultPort() {
        return this[INTERNAL].defaultPort ?? (this.protocol === 'https:' ? 443 : 80);
    }
    set defaultPort(v) {
        if (this[INTERNAL]) {
            this[INTERNAL].defaultPort = v;
        }
    }
    get protocol() {
        return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? 'https:' : 'http:');
    }
    set protocol(v) {
        if (this[INTERNAL]) {
            this[INTERNAL].protocol = v;
        }
    }
}
exports.Agent = Agent; //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/https-proxy-agent/dist/parse-proxy-response.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseProxyResponse = void 0;
const debug_1 = __importDefault(__turbopack_context__.r("[project]/energy-os-v0/node_modules/debug/src/browser.js [middleware-edge] (ecmascript)"));
const debug = (0, debug_1.default)('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(socket) {
    return new Promise((resolve, reject)=>{
        // we need to buffer any HTTP traffic that happens with the proxy before we get
        // the CONNECT response, so that if the response is anything other than an "200"
        // response code, then we can re-play the "data" events on the socket once the
        // HTTP parser is hooked up...
        let buffersLength = 0;
        const buffers = [];
        function read() {
            const b = socket.read();
            if (b) ondata(b);
            else socket.once('readable', read);
        }
        function cleanup() {
            socket.removeListener('end', onend);
            socket.removeListener('error', onerror);
            socket.removeListener('readable', read);
        }
        function onend() {
            cleanup();
            debug('onend');
            reject(new Error('Proxy connection ended before receiving CONNECT response'));
        }
        function onerror(err) {
            cleanup();
            debug('onerror %o', err);
            reject(err);
        }
        function ondata(b) {
            buffers.push(b);
            buffersLength += b.length;
            const buffered = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat(buffers, buffersLength);
            const endOfHeaders = buffered.indexOf('\r\n\r\n');
            if (endOfHeaders === -1) {
                // keep buffering
                debug('have not received end of HTTP headers yet...');
                read();
                return;
            }
            const headerParts = buffered.slice(0, endOfHeaders).toString('ascii').split('\r\n');
            const firstLine = headerParts.shift();
            if (!firstLine) {
                socket.destroy();
                return reject(new Error('No header received from proxy CONNECT response'));
            }
            const firstLineParts = firstLine.split(' ');
            const statusCode = +firstLineParts[1];
            const statusText = firstLineParts.slice(2).join(' ');
            const headers = {};
            for (const header of headerParts){
                if (!header) continue;
                const firstColon = header.indexOf(':');
                if (firstColon === -1) {
                    socket.destroy();
                    return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
                }
                const key = header.slice(0, firstColon).toLowerCase();
                const value = header.slice(firstColon + 1).trimStart();
                const current = headers[key];
                if (typeof current === 'string') {
                    headers[key] = [
                        current,
                        value
                    ];
                } else if (Array.isArray(current)) {
                    current.push(value);
                } else {
                    headers[key] = value;
                }
            }
            debug('got proxy server response: %o %o', firstLine, headers);
            cleanup();
            resolve({
                connect: {
                    statusCode,
                    statusText,
                    headers
                },
                buffered
            });
        }
        socket.on('error', onerror);
        socket.on('end', onend);
        read();
    });
}
exports.parseProxyResponse = parseProxyResponse; //# sourceMappingURL=parse-proxy-response.js.map
}),
"[project]/energy-os-v0/node_modules/https-proxy-agent/dist/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpsProxyAgent = void 0;
const net = __importStar(__turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'net', ecmascript)"));
const tls = __importStar(__turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'tls', ecmascript)"));
const assert_1 = __importDefault(__turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)"));
const debug_1 = __importDefault(__turbopack_context__.r("[project]/energy-os-v0/node_modules/debug/src/browser.js [middleware-edge] (ecmascript)"));
const agent_base_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/agent-base/dist/index.js [middleware-edge] (ecmascript)");
const url_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/next/dist/compiled/native-url/index.js [middleware-edge] (ecmascript)");
const parse_proxy_response_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/https-proxy-agent/dist/parse-proxy-response.js [middleware-edge] (ecmascript)");
const debug = (0, debug_1.default)('https-proxy-agent');
const setServernameFromNonIpHost = (options)=>{
    if (options.servername === undefined && options.host && !net.isIP(options.host)) {
        return {
            ...options,
            servername: options.host
        };
    }
    return options;
};
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 */ class HttpsProxyAgent extends agent_base_1.Agent {
    constructor(proxy, opts){
        super(opts);
        this.options = {
            path: undefined
        };
        this.proxy = typeof proxy === 'string' ? new url_1.URL(proxy) : proxy;
        this.proxyHeaders = opts?.headers ?? {};
        debug('Creating new HttpsProxyAgent instance: %o', this.proxy.href);
        // Trim off the brackets from IPv6 addresses
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, '');
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === 'https:' ? 443 : 80;
        this.connectOpts = {
            // Attempt to negotiate http/1.1 for proxy servers that support http/2
            ALPNProtocols: [
                'http/1.1'
            ],
            ...opts ? omit(opts, 'headers') : null,
            host,
            port
        };
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     */ async connect(req, opts) {
        const { proxy } = this;
        if (!opts.host) {
            throw new TypeError('No "host" provided');
        }
        // Create a socket connection to the proxy server.
        let socket;
        if (proxy.protocol === 'https:') {
            debug('Creating `tls.Socket`: %o', this.connectOpts);
            socket = tls.connect(setServernameFromNonIpHost(this.connectOpts));
        } else {
            debug('Creating `net.Socket`: %o', this.connectOpts);
            socket = net.connect(this.connectOpts);
        }
        const headers = typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : {
            ...this.proxyHeaders
        };
        const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
        let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r\n`;
        // Inject the `Proxy-Authorization` header if necessary.
        if (proxy.username || proxy.password) {
            const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
            headers['Proxy-Authorization'] = `Basic ${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(auth).toString('base64')}`;
        }
        headers.Host = `${host}:${opts.port}`;
        if (!headers['Proxy-Connection']) {
            headers['Proxy-Connection'] = this.keepAlive ? 'Keep-Alive' : 'close';
        }
        for (const name of Object.keys(headers)){
            payload += `${name}: ${headers[name]}\r\n`;
        }
        const proxyResponsePromise = (0, parse_proxy_response_1.parseProxyResponse)(socket);
        socket.write(`${payload}\r\n`);
        const { connect, buffered } = await proxyResponsePromise;
        req.emit('proxyConnect', connect);
        this.emit('proxyConnect', connect, req);
        if (connect.statusCode === 200) {
            req.once('socket', resume);
            if (opts.secureEndpoint) {
                // The proxy is connecting to a TLS server, so upgrade
                // this socket connection to a TLS connection.
                debug('Upgrading socket connection to TLS');
                return tls.connect({
                    ...omit(setServernameFromNonIpHost(opts), 'host', 'path', 'port'),
                    socket
                });
            }
            return socket;
        }
        // Some other status code that's not 200... need to re-play the HTTP
        // header "data" events onto the socket once the HTTP machinery is
        // attached so that the node core `http` can parse and handle the
        // error status code.
        // Close the original socket, and a new "fake" socket is returned
        // instead, so that the proxy doesn't get the HTTP request
        // written to it (which may contain `Authorization` headers or other
        // sensitive data).
        //
        // See: https://hackerone.com/reports/541502
        socket.destroy();
        const fakeSocket = new net.Socket({
            writable: false
        });
        fakeSocket.readable = true;
        // Need to wait for the "socket" event to re-play the "data" events.
        req.once('socket', (s)=>{
            debug('Replaying proxy buffer for failed request');
            (0, assert_1.default)(s.listenerCount('data') > 0);
            // Replay the "buffered" Buffer onto the fake `socket`, since at
            // this point the HTTP module machinery has been hooked up for
            // the user.
            s.push(buffered);
            s.push(null);
        });
        return fakeSocket;
    }
}
HttpsProxyAgent.protocols = [
    'http',
    'https'
];
exports.HttpsProxyAgent = HttpsProxyAgent;
function resume(socket) {
    socket.resume();
}
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for(key in obj){
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
} //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/data-uri-to-buffer/dist/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns a `Buffer` instance from the given data URI `uri`.
 *
 * @param {String} uri Data URI to turn into a Buffer instance
 * @returns {Buffer} Buffer instance from Data URI
 * @api public
 */ __turbopack_context__.s([
    "dataUriToBuffer",
    ()=>dataUriToBuffer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
function dataUriToBuffer(uri) {
    if (!/^data:/i.test(uri)) {
        throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    }
    // strip newlines
    uri = uri.replace(/\r?\n/g, '');
    // split the URI up into the "metadata" and the "data" portions
    const firstComma = uri.indexOf(',');
    if (firstComma === -1 || firstComma <= 4) {
        throw new TypeError('malformed data: URI');
    }
    // remove the "data:" scheme and parse the metadata
    const meta = uri.substring(5, firstComma).split(';');
    let charset = '';
    let base64 = false;
    const type = meta[0] || 'text/plain';
    let typeFull = type;
    for(let i = 1; i < meta.length; i++){
        if (meta[i] === 'base64') {
            base64 = true;
        } else if (meta[i]) {
            typeFull += `;${meta[i]}`;
            if (meta[i].indexOf('charset=') === 0) {
                charset = meta[i].substring(8);
            }
        }
    }
    // defaults to US-ASCII only if type is not provided
    if (!meta[0] && !charset.length) {
        typeFull += ';charset=US-ASCII';
        charset = 'US-ASCII';
    }
    // get the encoded data portion and decode URI-encoded chars
    const encoding = base64 ? 'base64' : 'ascii';
    const data = unescape(uri.substring(firstComma + 1));
    const buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(data, encoding);
    // set `.type` and `.typeFull` properties to MIME type
    buffer.type = type;
    buffer.typeFull = typeFull;
    // set the `.charset` property
    buffer.charset = charset;
    return buffer;
}
const __TURBOPACK__default__export__ = dataUriToBuffer;
 //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/fetch-blob/streams.cjs [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* c8 ignore start */ // 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536;
if (!globalThis.ReadableStream) {
    // `node:stream/web` got introduced in v16.5.0 as experimental
    // and it's preferred over the polyfilled version. So we also
    // suppress the warning that gets emitted by NodeJS for using it.
    try {
        const process = (()=>{
            const e = new Error("Cannot find module 'node:process': Unsupported external type Url for commonjs reference");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const { emitWarning } = process;
        try {
            process.emitWarning = ()=>{};
            Object.assign(globalThis, (()=>{
                const e = new Error("Cannot find module 'node:stream/web': Unsupported external type Url for commonjs reference");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })());
            process.emitWarning = emitWarning;
        } catch (error) {
            process.emitWarning = emitWarning;
            throw error;
        }
    } catch (error) {
        // fallback to polyfill implementation
        Object.assign(globalThis, __turbopack_context__.r("[project]/energy-os-v0/node_modules/web-streams-polyfill/dist/ponyfill.es2018.js [middleware-edge] (ecmascript)"));
    }
}
try {
    // Don't use node: prefix for this, require+node: is not supported until node v14.14
    // Only `import()` can use prefix in 12.20 and later
    const { Blob } = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
    if (Blob && !Blob.prototype.stream) {
        Blob.prototype.stream = function name(params) {
            let position = 0;
            const blob = this;
            return new ReadableStream({
                type: 'bytes',
                async pull (ctrl) {
                    const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE));
                    const buffer = await chunk.arrayBuffer();
                    position += buffer.byteLength;
                    ctrl.enqueue(new Uint8Array(buffer));
                    if (position === blob.size) {
                        ctrl.close();
                    }
                }
            });
        };
    }
} catch (error) {} /* c8 ignore end */ 
}),
"[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ // TODO (jimmywarting): in the feature use conditional loading with top level await (requires 14.x)
// Node has recently added whatwg stream into core
__turbopack_context__.s([
    "Blob",
    ()=>Blob,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$streams$2e$cjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/streams.cjs [middleware-edge] (ecmascript)");
;
// 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536;
/** @param {(Blob | Uint8Array)[]} parts */ async function* toIterator(parts, clone = true) {
    for (const part of parts){
        if ('stream' in part) {
            yield* part.stream();
        } else if (ArrayBuffer.isView(part)) {
            if (clone) {
                let position = part.byteOffset;
                const end = part.byteOffset + part.byteLength;
                while(position !== end){
                    const size = Math.min(end - position, POOL_SIZE);
                    const chunk = part.buffer.slice(position, position + size);
                    position += chunk.byteLength;
                    yield new Uint8Array(chunk);
                }
            } else {
                yield part;
            }
        /* c8 ignore next 10 */ } else {
            // For blobs that have arrayBuffer but no stream method (nodes buffer.Blob)
            let position = 0, b = part;
            while(position !== b.size){
                const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
                const buffer = await chunk.arrayBuffer();
                position += buffer.byteLength;
                yield new Uint8Array(buffer);
            }
        }
    }
}
const _Blob = class Blob {
    /** @type {Array.<(Blob|Uint8Array)>} */ #parts = [];
    #type = '';
    #size = 0;
    #endings = 'transparent';
    /**
   * The Blob() constructor returns a new Blob object. The content
   * of the blob consists of the concatenation of the values given
   * in the parameter array.
   *
   * @param {*} blobParts
   * @param {{ type?: string, endings?: string }} [options]
   */ constructor(blobParts = [], options = {}){
        if (typeof blobParts !== 'object' || blobParts === null) {
            throw new TypeError('Failed to construct \'Blob\': The provided value cannot be converted to a sequence.');
        }
        if (typeof blobParts[Symbol.iterator] !== 'function') {
            throw new TypeError('Failed to construct \'Blob\': The object must have a callable @@iterator property.');
        }
        if (typeof options !== 'object' && typeof options !== 'function') {
            throw new TypeError('Failed to construct \'Blob\': parameter 2 cannot convert to dictionary.');
        }
        if (options === null) options = {};
        const encoder = new TextEncoder();
        for (const element of blobParts){
            let part;
            if (ArrayBuffer.isView(element)) {
                part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
            } else if (element instanceof ArrayBuffer) {
                part = new Uint8Array(element.slice(0));
            } else if (element instanceof Blob) {
                part = element;
            } else {
                part = encoder.encode(`${element}`);
            }
            this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
            this.#parts.push(part);
        }
        this.#endings = `${options.endings === undefined ? 'transparent' : options.endings}`;
        const type = options.type === undefined ? '' : String(options.type);
        this.#type = /^[\x20-\x7E]*$/.test(type) ? type : '';
    }
    /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */ get size() {
        return this.#size;
    }
    /**
   * The type property of a Blob object returns the MIME type of the file.
   */ get type() {
        return this.#type;
    }
    /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */ async text() {
        // More optimized than using this.arrayBuffer()
        // that requires twice as much ram
        const decoder = new TextDecoder();
        let str = '';
        for await (const part of toIterator(this.#parts, false)){
            str += decoder.decode(part, {
                stream: true
            });
        }
        // Remaining
        str += decoder.decode();
        return str;
    }
    /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */ async arrayBuffer() {
        // Easier way... Just a unnecessary overhead
        // const view = new Uint8Array(this.size);
        // await this.stream().getReader({mode: 'byob'}).read(view);
        // return view.buffer;
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(this.#parts, false)){
            data.set(chunk, offset);
            offset += chunk.length;
        }
        return data.buffer;
    }
    stream() {
        const it = toIterator(this.#parts, true);
        return new globalThis.ReadableStream({
            // @ts-ignore
            type: 'bytes',
            async pull (ctrl) {
                const chunk = await it.next();
                chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
            },
            async cancel () {
                await it.return();
            }
        });
    }
    /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */ slice(start = 0, end = this.size, type = '') {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = this.#parts;
        const blobParts = [];
        let added = 0;
        for (const part of parts){
            // don't add the overflow to new blobParts
            if (added >= span) {
                break;
            }
            const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
            if (relativeStart && size <= relativeStart) {
                // Skip the beginning and change the relative
                // start & end position as we skip the unwanted parts
                relativeStart -= size;
                relativeEnd -= size;
            } else {
                let chunk;
                if (ArrayBuffer.isView(part)) {
                    chunk = part.subarray(relativeStart, Math.min(size, relativeEnd));
                    added += chunk.byteLength;
                } else {
                    chunk = part.slice(relativeStart, Math.min(size, relativeEnd));
                    added += chunk.size;
                }
                relativeEnd -= size;
                blobParts.push(chunk);
                relativeStart = 0; // All next sequential parts should start at 0
            }
        }
        const blob = new Blob([], {
            type: String(type).toLowerCase()
        });
        blob.#size = span;
        blob.#parts = blobParts;
        return blob;
    }
    get [Symbol.toStringTag]() {
        return 'Blob';
    }
    static [Symbol.hasInstance](object) {
        return object && typeof object === 'object' && typeof object.constructor === 'function' && (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
    }
};
Object.defineProperties(_Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
const Blob = _Blob;
const __TURBOPACK__default__export__ = Blob;
}),
"[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "File",
    ()=>File,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript)");
;
const _File = class File extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"] {
    #lastModified = 0;
    #name = '';
    /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */ // @ts-ignore
    constructor(fileBits, fileName, options = {}){
        if (arguments.length < 2) {
            throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        if (options === null) options = {};
        // Simulate WebIDL type casting for NaN value in lastModified option.
        const lastModified = options.lastModified === undefined ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
            this.#lastModified = lastModified;
        }
        this.#name = String(fileName);
    }
    get name() {
        return this.#name;
    }
    get lastModified() {
        return this.#lastModified;
    }
    get [Symbol.toStringTag]() {
        return 'File';
    }
    static [Symbol.hasInstance](object) {
        return !!object && object instanceof __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"] && /^(File)$/.test(object[Symbol.toStringTag]);
    }
};
const File = _File;
const __TURBOPACK__default__export__ = File;
}),
"[project]/energy-os-v0/node_modules/fetch-blob/from.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blobFrom",
    ()=>blobFrom,
    "blobFromSync",
    ()=>blobFromSync,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fileFrom",
    ()=>fileFrom,
    "fileFromSync",
    ()=>fileFromSync
]);
var __TURBOPACK__url__external__node$3a$fs__ = __turbopack_context__.x("node:fs", ()=>require("node:fs"), true);
var __TURBOPACK__url__external__node$3a$path__ = __turbopack_context__.x("node:path", ()=>require("node:path"), true);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$domexception$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-domexception/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript)");
;
;
;
;
;
const { stat } = __TURBOPACK__url__external__node$3a$fs__["promises"];
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 */ const blobFromSync = (path, type)=>fromBlob((0, __TURBOPACK__url__external__node$3a$fs__["statSync"])(path), path, type);
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 * @returns {Promise<Blob>}
 */ const blobFrom = (path, type)=>stat(path).then((stat)=>fromBlob(stat, path, type));
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 * @returns {Promise<File>}
 */ const fileFrom = (path, type)=>stat(path).then((stat)=>fromFile(stat, path, type));
/**
 * @param {string} path filepath on the disk
 * @param {string} [type] mimetype to use
 */ const fileFromSync = (path, type)=>fromFile((0, __TURBOPACK__url__external__node$3a$fs__["statSync"])(path), path, type);
// @ts-ignore
const fromBlob = (stat, path, type = '')=>new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]([
        new BlobDataItem({
            path,
            size: stat.size,
            lastModified: stat.mtimeMs,
            start: 0
        })
    ], {
        type
    });
// @ts-ignore
const fromFile = (stat, path, type = '')=>new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]([
        new BlobDataItem({
            path,
            size: stat.size,
            lastModified: stat.mtimeMs,
            start: 0
        })
    ], (0, __TURBOPACK__url__external__node$3a$path__["basename"])(path), {
        type,
        lastModified: stat.mtimeMs
    });
/**
 * This is a blob backed up by a file on the disk
 * with minium requirement. Its wrapped around a Blob as a blobPart
 * so you have no direct access to this.
 *
 * @private
 */ class BlobDataItem {
    #path;
    #start;
    constructor(options){
        this.#path = options.path;
        this.#start = options.start;
        this.size = options.size;
        this.lastModified = options.lastModified;
    }
    /**
   * Slicing arguments is first validated and formatted
   * to not be out of range by Blob.prototype.slice
   */ slice(start, end) {
        return new BlobDataItem({
            path: this.#path,
            lastModified: this.lastModified,
            size: end - start,
            start: this.#start + start
        });
    }
    async *stream() {
        const { mtimeMs } = await stat(this.#path);
        if (mtimeMs > this.lastModified) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$domexception$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]('The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.', 'NotReadableError');
        }
        yield* (0, __TURBOPACK__url__external__node$3a$fs__["createReadStream"])(this.#path, {
            start: this.#start,
            end: this.#start + this.size - 1
        });
    }
    get [Symbol.toStringTag]() {
        return 'Blob';
    }
}
const __TURBOPACK__default__export__ = blobFromSync;
;
}),
"[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript) <export default as File>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "File",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript)");
}),
"[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript) <export default as Blob>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Blob",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript)");
}),
"[project]/energy-os-v0/node_modules/formdata-polyfill/esm.min.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ __turbopack_context__.s([
    "File",
    ()=>File,
    "FormData",
    ()=>FormData,
    "formDataToBlob",
    ()=>formDataToBlob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript)");
;
;
var { toStringTag: t, iterator: i, hasInstance: h } = Symbol, r = Math.random, m = 'append,set,get,getAll,delete,keys,values,entries,forEach,constructor'.split(','), f = (a, b, c)=>(a += '', /^(Blob|File)$/.test(b && b[t]) ? [
        (c = c !== void 0 ? c + '' : b[t] == 'File' ? b.name : 'blob', a),
        b.name !== c || b[t] == 'blob' ? new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]([
            b
        ], c, b) : b
    ] : [
        a,
        b + ''
    ]), e = (c, f)=>(f ? c : c.replace(/\r?\n|\r/g, '\r\n')).replace(/\n/g, '%0A').replace(/\r/g, '%0D').replace(/"/g, '%22'), x = (n, a, e)=>{
    if (a.length < e) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e} arguments required, but only ${a.length} present.`);
    }
};
const File = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"];
const FormData = class FormData {
    #d = [];
    constructor(...a){
        if (a.length) throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
    }
    get [t]() {
        return 'FormData';
    }
    [i]() {
        return this.entries();
    }
    static [h](o) {
        return o && typeof o === 'object' && o[t] === 'FormData' && !m.some((m)=>typeof o[m] != 'function');
    }
    append(...a) {
        x('append', arguments, 2);
        this.#d.push(f(...a));
    }
    delete(a) {
        x('delete', arguments, 1);
        a += '';
        this.#d = this.#d.filter(([b])=>b !== a);
    }
    get(a) {
        x('get', arguments, 1);
        a += '';
        for(var b = this.#d, l = b.length, c = 0; c < l; c++)if (b[c][0] === a) return b[c][1];
        return null;
    }
    getAll(a, b) {
        x('getAll', arguments, 1);
        b = [];
        a += '';
        this.#d.forEach((c)=>c[0] === a && b.push(c[1]));
        return b;
    }
    has(a) {
        x('has', arguments, 1);
        a += '';
        return this.#d.some((b)=>b[0] === a);
    }
    forEach(a, b) {
        x('forEach', arguments, 1);
        for (var [c, d] of this)a.call(b, d, c, this);
    }
    set(...a) {
        x('set', arguments, 2);
        var b = [], c = !0;
        a = f(...a);
        this.#d.forEach((d)=>{
            d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        this.#d = b;
    }
    *entries() {
        yield* this.#d;
    }
    *keys() {
        for (var [a] of this)yield a;
    }
    *values() {
        for (var [, a] of this)yield a;
    }
};
function formDataToBlob(F, B = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]) {
    var b = `${r()}${r()}`.replace(/\./g, '').slice(-28).padStart(32, '-'), c = [], p = `--${b}\r\nContent-Disposition: form-data; name="`;
    F.forEach((v, n)=>typeof v == 'string' ? c.push(p + e(n) + `"\r\n\r\n${v.replace(/\r(?!\n)|(?<!\r)\n/g, '\r\n')}\r\n`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r\nContent-Type: ${v.type || "application/octet-stream"}\r\n\r\n`, v, '\r\n'));
    c.push(`--${b}--`);
    return new B(c, {
        type: "multipart/form-data; boundary=" + b
    });
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/errors/base.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FetchBaseError",
    ()=>FetchBaseError
]);
class FetchBaseError extends Error {
    constructor(message, type){
        super(message);
        // Hide custom error implementation details from end-users
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
    }
    get name() {
        return this.constructor.name;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/errors/fetch-error.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FetchError",
    ()=>FetchError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$base$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/base.js [middleware-edge] (ecmascript)");
;
class FetchError extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$base$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchBaseError"] {
    /**
	 * @param  {string} message -      Error message for human
	 * @param  {string} [type] -        Error type for machine
	 * @param  {SystemError} [systemError] - For Node.js system error
	 */ constructor(message, type, systemError){
        super(message, type);
        // When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
        if (systemError) {
            // eslint-disable-next-line no-multi-assign
            this.code = this.errno = systemError.code;
            this.erroredSysCall = systemError.syscall;
        }
    }
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/utils/is.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Is.js
 *
 * Object type checks.
 */ __turbopack_context__.s([
    "isAbortSignal",
    ()=>isAbortSignal,
    "isBlob",
    ()=>isBlob,
    "isDomainOrSubdomain",
    ()=>isDomainOrSubdomain,
    "isSameProtocol",
    ()=>isSameProtocol,
    "isURLSearchParameters",
    ()=>isURLSearchParameters
]);
const NAME = Symbol.toStringTag;
const isURLSearchParameters = (object)=>{
    return typeof object === 'object' && typeof object.append === 'function' && typeof object.delete === 'function' && typeof object.get === 'function' && typeof object.getAll === 'function' && typeof object.has === 'function' && typeof object.set === 'function' && typeof object.sort === 'function' && object[NAME] === 'URLSearchParams';
};
const isBlob = (object)=>{
    return object && typeof object === 'object' && typeof object.arrayBuffer === 'function' && typeof object.type === 'string' && typeof object.stream === 'function' && typeof object.constructor === 'function' && /^(Blob|File)$/.test(object[NAME]);
};
const isAbortSignal = (object)=>{
    return typeof object === 'object' && (object[NAME] === 'AbortSignal' || object[NAME] === 'EventTarget');
};
const isDomainOrSubdomain = (destination, original)=>{
    const orig = new URL(original).hostname;
    const dest = new URL(destination).hostname;
    return orig === dest || orig.endsWith(`.${dest}`);
};
const isSameProtocol = (destination, original)=>{
    const orig = new URL(original).protocol;
    const dest = new URL(destination).protocol;
    return orig === dest;
};
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/utils/multipart-parser.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toFormData",
    ()=>toFormData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$from$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/from.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/formdata-polyfill/esm.min.js [middleware-edge] (ecmascript)");
;
;
let s = 0;
const S = {
    START_BOUNDARY: s++,
    HEADER_FIELD_START: s++,
    HEADER_FIELD: s++,
    HEADER_VALUE_START: s++,
    HEADER_VALUE: s++,
    HEADER_VALUE_ALMOST_DONE: s++,
    HEADERS_ALMOST_DONE: s++,
    PART_DATA_START: s++,
    PART_DATA: s++,
    END: s++
};
let f = 1;
const F = {
    PART_BOUNDARY: f,
    LAST_BOUNDARY: f *= 2
};
const LF = 10;
const CR = 13;
const SPACE = 32;
const HYPHEN = 45;
const COLON = 58;
const A = 97;
const Z = 122;
const lower = (c)=>c | 0x20;
const noop = ()=>{};
class MultipartParser {
    /**
	 * @param {string} boundary
	 */ constructor(boundary){
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = '\r\n--' + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for(let i = 0; i < boundary.length; i++){
            ui8a[i] = boundary.charCodeAt(i);
            this.boundaryChars[ui8a[i]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
    }
    /**
	 * @param {Uint8Array} data
	 */ write(data) {
        let i = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name)=>{
            this[name + 'Mark'] = i;
        };
        const clear = (name)=>{
            delete this[name + 'Mark'];
        };
        const callback = (callbackSymbol, start, end, ui8a)=>{
            if (start === undefined || start !== end) {
                this[callbackSymbol](ui8a && ui8a.subarray(start, end));
            }
        };
        const dataCallback = (name, clear)=>{
            const markSymbol = name + 'Mark';
            if (!(markSymbol in this)) {
                return;
            }
            if (clear) {
                callback(name, this[markSymbol], i, data);
                delete this[markSymbol];
            } else {
                callback(name, this[markSymbol], data.length, data);
                this[markSymbol] = 0;
            }
        };
        for(i = 0; i < length_; i++){
            c = data[i];
            switch(state){
                case S.START_BOUNDARY:
                    if (index === boundary.length - 2) {
                        if (c === HYPHEN) {
                            flags |= F.LAST_BOUNDARY;
                        } else if (c !== CR) {
                            return;
                        }
                        index++;
                        break;
                    } else if (index - 1 === boundary.length - 2) {
                        if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                            state = S.END;
                            flags = 0;
                        } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                            index = 0;
                            callback('onPartBegin');
                            state = S.HEADER_FIELD_START;
                        } else {
                            return;
                        }
                        break;
                    }
                    if (c !== boundary[index + 2]) {
                        index = -2;
                    }
                    if (c === boundary[index + 2]) {
                        index++;
                    }
                    break;
                case S.HEADER_FIELD_START:
                    state = S.HEADER_FIELD;
                    mark('onHeaderField');
                    index = 0;
                // falls through
                case S.HEADER_FIELD:
                    if (c === CR) {
                        clear('onHeaderField');
                        state = S.HEADERS_ALMOST_DONE;
                        break;
                    }
                    index++;
                    if (c === HYPHEN) {
                        break;
                    }
                    if (c === COLON) {
                        if (index === 1) {
                            // empty header field
                            return;
                        }
                        dataCallback('onHeaderField', true);
                        state = S.HEADER_VALUE_START;
                        break;
                    }
                    cl = lower(c);
                    if (cl < A || cl > Z) {
                        return;
                    }
                    break;
                case S.HEADER_VALUE_START:
                    if (c === SPACE) {
                        break;
                    }
                    mark('onHeaderValue');
                    state = S.HEADER_VALUE;
                // falls through
                case S.HEADER_VALUE:
                    if (c === CR) {
                        dataCallback('onHeaderValue', true);
                        callback('onHeaderEnd');
                        state = S.HEADER_VALUE_ALMOST_DONE;
                    }
                    break;
                case S.HEADER_VALUE_ALMOST_DONE:
                    if (c !== LF) {
                        return;
                    }
                    state = S.HEADER_FIELD_START;
                    break;
                case S.HEADERS_ALMOST_DONE:
                    if (c !== LF) {
                        return;
                    }
                    callback('onHeadersEnd');
                    state = S.PART_DATA_START;
                    break;
                case S.PART_DATA_START:
                    state = S.PART_DATA;
                    mark('onPartData');
                // falls through
                case S.PART_DATA:
                    previousIndex = index;
                    if (index === 0) {
                        // boyer-moore derrived algorithm to safely skip non-boundary data
                        i += boundaryEnd;
                        while(i < bufferLength && !(data[i] in boundaryChars)){
                            i += boundaryLength;
                        }
                        i -= boundaryEnd;
                        c = data[i];
                    }
                    if (index < boundary.length) {
                        if (boundary[index] === c) {
                            if (index === 0) {
                                dataCallback('onPartData', true);
                            }
                            index++;
                        } else {
                            index = 0;
                        }
                    } else if (index === boundary.length) {
                        index++;
                        if (c === CR) {
                            // CR = part boundary
                            flags |= F.PART_BOUNDARY;
                        } else if (c === HYPHEN) {
                            // HYPHEN = end boundary
                            flags |= F.LAST_BOUNDARY;
                        } else {
                            index = 0;
                        }
                    } else if (index - 1 === boundary.length) {
                        if (flags & F.PART_BOUNDARY) {
                            index = 0;
                            if (c === LF) {
                                // unset the PART_BOUNDARY flag
                                flags &= ~F.PART_BOUNDARY;
                                callback('onPartEnd');
                                callback('onPartBegin');
                                state = S.HEADER_FIELD_START;
                                break;
                            }
                        } else if (flags & F.LAST_BOUNDARY) {
                            if (c === HYPHEN) {
                                callback('onPartEnd');
                                state = S.END;
                                flags = 0;
                            } else {
                                index = 0;
                            }
                        } else {
                            index = 0;
                        }
                    }
                    if (index > 0) {
                        // when matching a possible boundary, keep a lookbehind reference
                        // in case it turns out to be a false lead
                        lookbehind[index - 1] = c;
                    } else if (previousIndex > 0) {
                        // if our boundary turned out to be rubbish, the captured lookbehind
                        // belongs to partData
                        const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                        callback('onPartData', 0, previousIndex, _lookbehind);
                        previousIndex = 0;
                        mark('onPartData');
                        // reconsider the current character even so it interrupted the sequence
                        // it could be the beginning of a new sequence
                        i--;
                    }
                    break;
                case S.END:
                    break;
                default:
                    throw new Error(`Unexpected state entered: ${state}`);
            }
        }
        dataCallback('onHeaderField');
        dataCallback('onHeaderValue');
        dataCallback('onPartData');
        // Update properties for the next call
        this.index = index;
        this.state = state;
        this.flags = flags;
    }
    end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
            this.onPartEnd();
        } else if (this.state !== S.END) {
            throw new Error('MultipartParser.end(): stream ended unexpectedly');
        }
    }
}
function _fileName(headerValue) {
    // matches either a quoted-string or a token (RFC 2616 section 19.5.1)
    const m = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
    if (!m) {
        return;
    }
    const match = m[2] || m[3] || '';
    let filename = match.slice(match.lastIndexOf('\\') + 1);
    filename = filename.replace(/%22/g, '"');
    filename = filename.replace(/&#(\d{4});/g, (m, code)=>{
        return String.fromCharCode(code);
    });
    return filename;
}
async function toFormData(Body, ct) {
    if (!/multipart/i.test(ct)) {
        throw new TypeError('Failed to fetch');
    }
    const m = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
    if (!m) {
        throw new TypeError('no or bad content-type header, no multipart boundary');
    }
    const parser = new MultipartParser(m[1] || m[2]);
    let headerField;
    let headerValue;
    let entryValue;
    let entryName;
    let contentType;
    let filename;
    const entryChunks = [];
    const formData = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FormData"]();
    const onPartData = (ui8a)=>{
        entryValue += decoder.decode(ui8a, {
            stream: true
        });
    };
    const appendToFile = (ui8a)=>{
        entryChunks.push(ui8a);
    };
    const appendFileToFormData = ()=>{
        const file = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"](entryChunks, filename, {
            type: contentType
        });
        formData.append(entryName, file);
    };
    const appendEntryToFormData = ()=>{
        formData.append(entryName, entryValue);
    };
    const decoder = new TextDecoder('utf-8');
    decoder.decode();
    parser.onPartBegin = function() {
        parser.onPartData = onPartData;
        parser.onPartEnd = appendEntryToFormData;
        headerField = '';
        headerValue = '';
        entryValue = '';
        entryName = '';
        contentType = '';
        filename = null;
        entryChunks.length = 0;
    };
    parser.onHeaderField = function(ui8a) {
        headerField += decoder.decode(ui8a, {
            stream: true
        });
    };
    parser.onHeaderValue = function(ui8a) {
        headerValue += decoder.decode(ui8a, {
            stream: true
        });
    };
    parser.onHeaderEnd = function() {
        headerValue += decoder.decode();
        headerField = headerField.toLowerCase();
        if (headerField === 'content-disposition') {
            // matches either a quoted-string or a token (RFC 2616 section 19.5.1)
            const m = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
            if (m) {
                entryName = m[2] || m[3] || '';
            }
            filename = _fileName(headerValue);
            if (filename) {
                parser.onPartData = appendToFile;
                parser.onPartEnd = appendFileToFormData;
            }
        } else if (headerField === 'content-type') {
            contentType = headerValue;
        }
        headerValue = '';
        headerField = '';
    };
    for await (const chunk of Body){
        parser.write(chunk);
    }
    parser.end();
    return formData;
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/body.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Body.js
 *
 * Body interface provides common methods for Request and Response
 */ __turbopack_context__.s([
    "clone",
    ()=>clone,
    "default",
    ()=>Body,
    "extractContentType",
    ()=>extractContentType,
    "getTotalBytes",
    ()=>getTotalBytes,
    "writeToStream",
    ()=>writeToStream
]);
var __TURBOPACK__url__external__node$3a$stream__ = __turbopack_context__.x("node:stream", ()=>require("node:stream"), true);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/formdata-polyfill/esm.min.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/fetch-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$base$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/base.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/is.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
;
const pipeline = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__url__external__node$3a$stream__["default"].pipeline);
const INTERNALS = Symbol('Body internals');
class Body {
    constructor(body, { size = 0 } = {}){
        let boundary = null;
        if (body === null) {
            // Body is undefined or null
            body = null;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isURLSearchParameters"])(body)) {
            // Body is a URLSearchParams
            body = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(body.toString());
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isBlob"])(body)) {
        // Body is blob
        } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(body)) {
        // Body is Buffer
        } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isAnyArrayBuffer(body)) {
            // Body is ArrayBuffer
            body = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(body);
        } else if (ArrayBuffer.isView(body)) {
            // Body is ArrayBufferView
            body = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(body.buffer, body.byteOffset, body.byteLength);
        } else if (body instanceof __TURBOPACK__url__external__node$3a$stream__["default"]) {
        // Body is stream
        } else if (body instanceof __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FormData"]) {
            // Body is FormData
            body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["formDataToBlob"])(body);
            boundary = body.type.split('=')[1];
        } else {
            // None of the above
            // coerce to string then buffer
            body = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(String(body));
        }
        let stream = body;
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(body)) {
            stream = __TURBOPACK__url__external__node$3a$stream__["default"].Readable.from(body);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isBlob"])(body)) {
            stream = __TURBOPACK__url__external__node$3a$stream__["default"].Readable.from(body.stream());
        }
        this[INTERNALS] = {
            body,
            stream,
            boundary,
            disturbed: false,
            error: null
        };
        this.size = size;
        if (body instanceof __TURBOPACK__url__external__node$3a$stream__["default"]) {
            body.on('error', (error_)=>{
                const error = error_ instanceof __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$base$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchBaseError"] ? error_ : new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, 'system', error_);
                this[INTERNALS].error = error;
            });
        }
    }
    get body() {
        return this[INTERNALS].stream;
    }
    get bodyUsed() {
        return this[INTERNALS].disturbed;
    }
    /**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */ async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
    }
    async formData() {
        const ct = this.headers.get('content-type');
        if (ct.startsWith('application/x-www-form-urlencoded')) {
            const formData = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FormData"]();
            const parameters = new URLSearchParams(await this.text());
            for (const [name, value] of parameters){
                formData.append(name, value);
            }
            return formData;
        }
        const { toFormData } = await Promise.resolve().then(()=>__turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/multipart-parser.js [middleware-edge] (ecmascript)"));
        return toFormData(this.body, ct);
    }
    /**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */ async blob() {
        const ct = this.headers && this.headers.get('content-type') || this[INTERNALS].body && this[INTERNALS].body.type || '';
        const buf = await this.arrayBuffer();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]([
            buf
        ], {
            type: ct
        });
    }
    /**
	 * Decode response as json
	 *
	 * @return  Promise
	 */ async json() {
        const text = await this.text();
        return JSON.parse(text);
    }
    /**
	 * Decode response as text
	 *
	 * @return  Promise
	 */ async text() {
        const buffer = await consumeBody(this);
        return new TextDecoder().decode(buffer);
    }
    /**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */ buffer() {
        return consumeBody(this);
    }
}
Body.prototype.buffer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])(Body.prototype.buffer, 'Please use \'response.arrayBuffer()\' instead of \'response.buffer()\'', 'node-fetch#buffer');
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    },
    data: {
        get: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])(()=>{}, 'data doesn\'t exist, use json(), text(), arrayBuffer(), or body instead', 'https://github.com/node-fetch/node-fetch/issues/1000 (response)')
    }
});
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return Promise
 */ async function consumeBody(data) {
    if (data[INTERNALS].disturbed) {
        throw new TypeError(`body used already for: ${data.url}`);
    }
    data[INTERNALS].disturbed = true;
    if (data[INTERNALS].error) {
        throw data[INTERNALS].error;
    }
    const { body } = data;
    // Body is null
    if (body === null) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(0);
    }
    /* c8 ignore next 3 */ if (!(body instanceof __TURBOPACK__url__external__node$3a$stream__["default"])) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(0);
    }
    // Body is stream
    // get ready to actually consume the body
    const accum = [];
    let accumBytes = 0;
    try {
        for await (const chunk of body){
            if (data.size > 0 && accumBytes + chunk.length > data.size) {
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`content size at ${data.url} over limit: ${data.size}`, 'max-size');
                body.destroy(error);
                throw error;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        }
    } catch (error) {
        const error_ = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$base$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchBaseError"] ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
        throw error_;
    }
    if (body.readableEnded === true || body._readableState.ended === true) {
        try {
            if (accum.every((c)=>typeof c === 'string')) {
                return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(accum.join(''));
            }
            return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat(accum, accumBytes);
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`Could not create Buffer from response body for ${data.url}: ${error.message}`, 'system', error);
        }
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`Premature close of server response while trying to fetch ${data.url}`);
    }
}
const clone = (instance, highWaterMark)=>{
    let p1;
    let p2;
    let { body } = instance[INTERNALS];
    // Don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // Check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof __TURBOPACK__url__external__node$3a$stream__["default"] && typeof body.getBoundary !== 'function') {
        // Tee instance body
        p1 = new __TURBOPACK__url__external__node$3a$stream__["PassThrough"]({
            highWaterMark
        });
        p2 = new __TURBOPACK__url__external__node$3a$stream__["PassThrough"]({
            highWaterMark
        });
        body.pipe(p1);
        body.pipe(p2);
        // Set instance body to teed body and return the other teed body
        instance[INTERNALS].stream = p1;
        body = p2;
    }
    return body;
};
const getNonSpecFormDataBoundary = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])((body)=>body.getBoundary(), 'form-data doesn\'t follow the spec and requires special treatment. Use alternative package', 'https://github.com/node-fetch/node-fetch/issues/1167');
const extractContentType = (body, request)=>{
    // Body is null or undefined
    if (body === null) {
        return null;
    }
    // Body is string
    if (typeof body === 'string') {
        return 'text/plain;charset=UTF-8';
    }
    // Body is a URLSearchParams
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isURLSearchParameters"])(body)) {
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    // Body is blob
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isBlob"])(body)) {
        return body.type || null;
    }
    // Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(body) || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
        return null;
    }
    if (body instanceof __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FormData"]) {
        return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
    }
    // Detect form data input from form-data module
    if (body && typeof body.getBoundary === 'function') {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
    }
    // Body is stream - can't really do much about this
    if (body instanceof __TURBOPACK__url__external__node$3a$stream__["default"]) {
        return null;
    }
    // Body constructor defaults other things to string
    return 'text/plain;charset=UTF-8';
};
const getTotalBytes = (request)=>{
    const { body } = request[INTERNALS];
    // Body is null or undefined
    if (body === null) {
        return 0;
    }
    // Body is Blob
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isBlob"])(body)) {
        return body.size;
    }
    // Body is Buffer
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(body)) {
        return body.length;
    }
    // Detect form data input from form-data module
    if (body && typeof body.getLengthSync === 'function') {
        return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
    }
    // Body is stream
    return null;
};
const writeToStream = async (dest, { body })=>{
    if (body === null) {
        // Body is null
        dest.end();
    } else {
        // Body is stream
        await pipeline(body, dest);
    }
};
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/headers.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Headers.js
 *
 * Headers class offers convenient helpers
 */ __turbopack_context__.s([
    "default",
    ()=>Headers,
    "fromRawHeaders",
    ()=>fromRawHeaders
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__url__external__node$3a$http__ = __turbopack_context__.x("node:http", ()=>require("node:http"), true);
;
;
/* c8 ignore next 9 */ const validateHeaderName = typeof __TURBOPACK__url__external__node$3a$http__["default"].validateHeaderName === 'function' ? __TURBOPACK__url__external__node$3a$http__["default"].validateHeaderName : (name)=>{
    if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error, 'code', {
            value: 'ERR_INVALID_HTTP_TOKEN'
        });
        throw error;
    }
};
/* c8 ignore next 9 */ const validateHeaderValue = typeof __TURBOPACK__url__external__node$3a$http__["default"].validateHeaderValue === 'function' ? __TURBOPACK__url__external__node$3a$http__["default"].validateHeaderValue : (name, value)=>{
    if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        const error = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error, 'code', {
            value: 'ERR_INVALID_CHAR'
        });
        throw error;
    }
};
class Headers extends URLSearchParams {
    /**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */ constructor(init){
        // Validate and normalize init object in [name, value(s)][]
        /** @type {string[][]} */ let result = [];
        if (init instanceof Headers) {
            const raw = init.raw();
            for (const [name, values] of Object.entries(raw)){
                result.push(...values.map((value)=>[
                        name,
                        value
                    ]));
            }
        } else if (init == null) {
        // No op
        } else if (typeof init === 'object' && !__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isBoxedPrimitive(init)) {
            const method = init[Symbol.iterator];
            // eslint-disable-next-line no-eq-null, eqeqeq
            if (method == null) {
                // Record<ByteString, ByteString>
                result.push(...Object.entries(init));
            } else {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // Sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                result = [
                    ...init
                ].map((pair)=>{
                    if (typeof pair !== 'object' || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["types"].isBoxedPrimitive(pair)) {
                        throw new TypeError('Each header pair must be an iterable object');
                    }
                    return [
                        ...pair
                    ];
                }).map((pair)=>{
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    return [
                        ...pair
                    ];
                });
            }
        } else {
            throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
        }
        // Validate and lowercase
        result = result.length > 0 ? result.map(([name, value])=>{
            validateHeaderName(name);
            validateHeaderValue(name, String(value));
            return [
                String(name).toLowerCase(),
                String(value)
            ];
        }) : undefined;
        super(result);
        // Returning a Proxy that will lowercase key names, validate parameters and sort keys
        // eslint-disable-next-line no-constructor-return
        return new Proxy(this, {
            get (target, p, receiver) {
                switch(p){
                    case 'append':
                    case 'set':
                        return (name, value)=>{
                            validateHeaderName(name);
                            validateHeaderValue(name, String(value));
                            return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
                        };
                    case 'delete':
                    case 'has':
                    case 'getAll':
                        return (name)=>{
                            validateHeaderName(name);
                            return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
                        };
                    case 'keys':
                        return ()=>{
                            target.sort();
                            return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                        };
                    default:
                        return Reflect.get(target, p, receiver);
                }
            }
        });
    /* c8 ignore next */ }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    toString() {
        return Object.prototype.toString.call(this);
    }
    get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
            return null;
        }
        let value = values.join(', ');
        if (/^content-encoding$/i.test(name)) {
            value = value.toLowerCase();
        }
        return value;
    }
    forEach(callback, thisArg = undefined) {
        for (const name of this.keys()){
            Reflect.apply(callback, thisArg, [
                this.get(name),
                name,
                this
            ]);
        }
    }
    *values() {
        for (const name of this.keys()){
            yield this.get(name);
        }
    }
    /**
	 * @type {() => IterableIterator<[string, string]>}
	 */ *entries() {
        for (const name of this.keys()){
            yield [
                name,
                this.get(name)
            ];
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    /**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */ raw() {
        return [
            ...this.keys()
        ].reduce((result, key)=>{
            result[key] = this.getAll(key);
            return result;
        }, {});
    }
    /**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */ [Symbol.for('nodejs.util.inspect.custom')]() {
        return [
            ...this.keys()
        ].reduce((result, key)=>{
            const values = this.getAll(key);
            // Http.request() only supports string as Host header.
            // This hack makes specifying custom Host header possible.
            if (key === 'host') {
                result[key] = values[0];
            } else {
                result[key] = values.length > 1 ? values : values[0];
            }
            return result;
        }, {});
    }
}
/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */ Object.defineProperties(Headers.prototype, [
    'get',
    'entries',
    'forEach',
    'values'
].reduce((result, property)=>{
    result[property] = {
        enumerable: true
    };
    return result;
}, {}));
function fromRawHeaders(headers = []) {
    return new Headers(headers// Split into pairs
    .reduce((result, value, index, array)=>{
        if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
        }
        return result;
    }, []).filter(([name, value])=>{
        try {
            validateHeaderName(name);
            validateHeaderValue(name, String(value));
            return true;
        } catch  {
            return false;
        }
    }));
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/utils/is-redirect.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRedirect",
    ()=>isRedirect
]);
const redirectStatus = new Set([
    301,
    302,
    303,
    307,
    308
]);
const isRedirect = (code)=>{
    return redirectStatus.has(code);
};
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/response.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Response.js
 *
 * Response class provides content decoding
 */ __turbopack_context__.s([
    "default",
    ()=>Response
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/body.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2d$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/is-redirect.js [middleware-edge] (ecmascript)");
;
;
;
const INTERNALS = Symbol('Response internals');
class Response extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"] {
    constructor(body = null, options = {}){
        super(body, options);
        // eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
        const status = options.status != null ? options.status : 200;
        const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](options.headers);
        if (body !== null && !headers.has('Content-Type')) {
            const contentType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["extractContentType"])(body, this);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        this[INTERNALS] = {
            type: 'default',
            url: options.url,
            status,
            statusText: options.statusText || '',
            headers,
            counter: options.counter,
            highWaterMark: options.highWaterMark
        };
    }
    get type() {
        return this[INTERNALS].type;
    }
    get url() {
        return this[INTERNALS].url || '';
    }
    get status() {
        return this[INTERNALS].status;
    }
    /**
	 * Convenience property representing if the request ended normally
	 */ get ok() {
        return this[INTERNALS].status >= 200 && this[INTERNALS].status < 300;
    }
    get redirected() {
        return this[INTERNALS].counter > 0;
    }
    get statusText() {
        return this[INTERNALS].statusText;
    }
    get headers() {
        return this[INTERNALS].headers;
    }
    get highWaterMark() {
        return this[INTERNALS].highWaterMark;
    }
    /**
	 * Clone this response
	 *
	 * @return  Response
	 */ clone() {
        return new Response((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clone"])(this, this.highWaterMark), {
            type: this.type,
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected,
            size: this.size,
            highWaterMark: this.highWaterMark
        });
    }
    /**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */ static redirect(url, status = 302) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2d$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isRedirect"])(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        return new Response(null, {
            headers: {
                location: new URL(url).toString()
            },
            status
        });
    }
    static error() {
        const response = new Response(null, {
            status: 0,
            statusText: ''
        });
        response[INTERNALS].type = 'error';
        return response;
    }
    static json(data = undefined, init = {}) {
        const body = JSON.stringify(data);
        if (body === undefined) {
            throw new TypeError('data is not JSON serializable');
        }
        const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](init && init.headers);
        if (!headers.has('content-type')) {
            headers.set('content-type', 'application/json');
        }
        return new Response(body, {
            ...init,
            headers
        });
    }
    get [Symbol.toStringTag]() {
        return 'Response';
    }
}
Object.defineProperties(Response.prototype, {
    type: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/utils/get-search.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSearch",
    ()=>getSearch
]);
const getSearch = (parsedURL)=>{
    if (parsedURL.search) {
        return parsedURL.search;
    }
    const lastOffset = parsedURL.href.length - 1;
    const hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
    return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
};
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/utils/referrer.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_REFERRER_POLICY",
    ()=>DEFAULT_REFERRER_POLICY,
    "ReferrerPolicy",
    ()=>ReferrerPolicy,
    "determineRequestsReferrer",
    ()=>determineRequestsReferrer,
    "isOriginPotentiallyTrustworthy",
    ()=>isOriginPotentiallyTrustworthy,
    "isUrlPotentiallyTrustworthy",
    ()=>isUrlPotentiallyTrustworthy,
    "parseReferrerPolicyFromHeader",
    ()=>parseReferrerPolicyFromHeader,
    "stripURLForUseAsAReferrer",
    ()=>stripURLForUseAsAReferrer,
    "validateReferrerPolicy",
    ()=>validateReferrerPolicy
]);
var __TURBOPACK__url__external__node$3a$net__ = __turbopack_context__.x("node:net", ()=>require("node:net"), true);
;
function stripURLForUseAsAReferrer(url, originOnly = false) {
    // 1. If url is null, return no referrer.
    if (url == null) {
        return 'no-referrer';
    }
    url = new URL(url);
    // 2. If url's scheme is a local scheme, then return no referrer.
    if (/^(about|blob|data):$/.test(url.protocol)) {
        return 'no-referrer';
    }
    // 3. Set url's username to the empty string.
    url.username = '';
    // 4. Set url's password to null.
    // Note: `null` appears to be a mistake as this actually results in the password being `"null"`.
    url.password = '';
    // 5. Set url's fragment to null.
    // Note: `null` appears to be a mistake as this actually results in the fragment being `"#null"`.
    url.hash = '';
    // 6. If the origin-only flag is true, then:
    if (originOnly) {
        // 6.1. Set url's path to null.
        // Note: `null` appears to be a mistake as this actually results in the path being `"/null"`.
        url.pathname = '';
        // 6.2. Set url's query to null.
        // Note: `null` appears to be a mistake as this actually results in the query being `"?null"`.
        url.search = '';
    }
    // 7. Return url.
    return url;
}
const ReferrerPolicy = new Set([
    '',
    'no-referrer',
    'no-referrer-when-downgrade',
    'same-origin',
    'origin',
    'strict-origin',
    'origin-when-cross-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url'
]);
const DEFAULT_REFERRER_POLICY = 'strict-origin-when-cross-origin';
function validateReferrerPolicy(referrerPolicy) {
    if (!ReferrerPolicy.has(referrerPolicy)) {
        throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
    }
    return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
    // 1. If origin is an opaque origin, return "Not Trustworthy".
    // Not applicable
    // 2. Assert: origin is a tuple origin.
    // Not for implementations
    // 3. If origin's scheme is either "https" or "wss", return "Potentially Trustworthy".
    if (/^(http|ws)s:$/.test(url.protocol)) {
        return true;
    }
    // 4. If origin's host component matches one of the CIDR notations 127.0.0.0/8 or ::1/128 [RFC4632], return "Potentially Trustworthy".
    const hostIp = url.host.replace(/(^\[)|(]$)/g, '');
    const hostIPVersion = (0, __TURBOPACK__url__external__node$3a$net__["isIP"])(hostIp);
    if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
        return true;
    }
    if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
        return true;
    }
    // 5. If origin's host component is "localhost" or falls within ".localhost", and the user agent conforms to the name resolution rules in [let-localhost-be-localhost], return "Potentially Trustworthy".
    // We are returning FALSE here because we cannot ensure conformance to
    // let-localhost-be-loalhost (https://tools.ietf.org/html/draft-west-let-localhost-be-localhost)
    if (url.host === 'localhost' || url.host.endsWith('.localhost')) {
        return false;
    }
    // 6. If origin's scheme component is file, return "Potentially Trustworthy".
    if (url.protocol === 'file:') {
        return true;
    }
    // 7. If origin's scheme component is one which the user agent considers to be authenticated, return "Potentially Trustworthy".
    // Not supported
    // 8. If origin has been configured as a trustworthy origin, return "Potentially Trustworthy".
    // Not supported
    // 9. Return "Not Trustworthy".
    return false;
}
function isUrlPotentiallyTrustworthy(url) {
    // 1. If url is "about:blank" or "about:srcdoc", return "Potentially Trustworthy".
    if (/^about:(blank|srcdoc)$/.test(url)) {
        return true;
    }
    // 2. If url's scheme is "data", return "Potentially Trustworthy".
    if (url.protocol === 'data:') {
        return true;
    }
    // Note: The origin of blob: and filesystem: URLs is the origin of the context in which they were
    // created. Therefore, blobs created in a trustworthy origin will themselves be potentially
    // trustworthy.
    if (/^(blob|filesystem):$/.test(url.protocol)) {
        return true;
    }
    // 3. Return the result of executing §3.2 Is origin potentially trustworthy? on url's origin.
    return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
    // There are 2 notes in the specification about invalid pre-conditions.  We return null, here, for
    // these cases:
    // > Note: If request's referrer is "no-referrer", Fetch will not call into this algorithm.
    // > Note: If request's referrer policy is the empty string, Fetch will not call into this
    // > algorithm.
    if (request.referrer === 'no-referrer' || request.referrerPolicy === '') {
        return null;
    }
    // 1. Let policy be request's associated referrer policy.
    const policy = request.referrerPolicy;
    // 2. Let environment be request's client.
    // not applicable to node.js
    // 3. Switch on request's referrer:
    if (request.referrer === 'about:client') {
        return 'no-referrer';
    }
    // "a URL": Let referrerSource be request's referrer.
    const referrerSource = request.referrer;
    // 4. Let request's referrerURL be the result of stripping referrerSource for use as a referrer.
    let referrerURL = stripURLForUseAsAReferrer(referrerSource);
    // 5. Let referrerOrigin be the result of stripping referrerSource for use as a referrer, with the
    //    origin-only flag set to true.
    let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
    // 6. If the result of serializing referrerURL is a string whose length is greater than 4096, set
    //    referrerURL to referrerOrigin.
    if (referrerURL.toString().length > 4096) {
        referrerURL = referrerOrigin;
    }
    // 7. The user agent MAY alter referrerURL or referrerOrigin at this point to enforce arbitrary
    //    policy considerations in the interests of minimizing data leakage. For example, the user
    //    agent could strip the URL down to an origin, modify its host, replace it with an empty
    //    string, etc.
    if (referrerURLCallback) {
        referrerURL = referrerURLCallback(referrerURL);
    }
    if (referrerOriginCallback) {
        referrerOrigin = referrerOriginCallback(referrerOrigin);
    }
    // 8.Execute the statements corresponding to the value of policy:
    const currentURL = new URL(request.url);
    switch(policy){
        case 'no-referrer':
            return 'no-referrer';
        case 'origin':
            return referrerOrigin;
        case 'unsafe-url':
            return referrerURL;
        case 'strict-origin':
            // 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return 'no-referrer';
            }
            // 2. Return referrerOrigin.
            return referrerOrigin.toString();
        case 'strict-origin-when-cross-origin':
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // 2. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return 'no-referrer';
            }
            // 3. Return referrerOrigin.
            return referrerOrigin;
        case 'same-origin':
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // 2. Return no referrer.
            return 'no-referrer';
        case 'origin-when-cross-origin':
            // 1. If the origin of referrerURL and the origin of request's current URL are the same, then
            //    return referrerURL.
            if (referrerURL.origin === currentURL.origin) {
                return referrerURL;
            }
            // Return referrerOrigin.
            return referrerOrigin;
        case 'no-referrer-when-downgrade':
            // 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
            //    potentially trustworthy URL, then return no referrer.
            if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
                return 'no-referrer';
            }
            // 2. Return referrerURL.
            return referrerURL;
        default:
            throw new TypeError(`Invalid referrerPolicy: ${policy}`);
    }
}
function parseReferrerPolicyFromHeader(headers) {
    // 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy`
    //    and response’s header list.
    const policyTokens = (headers.get('referrer-policy') || '').split(/[,\s]+/);
    // 2. Let policy be the empty string.
    let policy = '';
    // 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty
    //    string, then set policy to token.
    // Note: This algorithm loops over multiple policy values to allow deployment of new policy
    // values with fallbacks for older user agents, as described in § 11.1 Unknown Policy Values.
    for (const token of policyTokens){
        if (token && ReferrerPolicy.has(token)) {
            policy = token;
        }
    }
    // 4. Return policy.
    return policy;
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/request.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Request.js
 *
 * Request class contains server only options
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */ __turbopack_context__.s([
    "default",
    ()=>Request,
    "getNodeRequestOptions",
    ()=>getNodeRequestOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$native$2d$url$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/next/dist/compiled/native-url/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:util [external] (node:util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/body.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/is.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$get$2d$search$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/get-search.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$referrer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/referrer.js [middleware-edge] (ecmascript)");
;
;
;
;
;
;
;
const INTERNALS = Symbol('Request internals');
/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} object
 * @return {boolean}
 */ const isRequest = (object)=>{
    return typeof object === 'object' && typeof object[INTERNALS] === 'object';
};
const doBadDataWarn = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$util__$5b$external$5d$__$28$node$3a$util$2c$__cjs$29$__["deprecate"])(()=>{}, '.data is not a valid RequestInit property, use .body instead', 'https://github.com/node-fetch/node-fetch/issues/1000 (request)');
class Request extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"] {
    constructor(input, init = {}){
        let parsedURL;
        // Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
        if (isRequest(input)) {
            parsedURL = new URL(input.url);
        } else {
            parsedURL = new URL(input);
            input = {};
        }
        if (parsedURL.username !== '' || parsedURL.password !== '') {
            throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
        }
        let method = init.method || input.method || 'GET';
        if (/^(delete|get|head|options|post|put)$/i.test(method)) {
            method = method.toUpperCase();
        }
        if (!isRequest(init) && 'data' in init) {
            doBadDataWarn();
        }
        // eslint-disable-next-line no-eq-null, eqeqeq
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        const inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clone"])(input) : null;
        super(inputBody, {
            size: init.size || input.size || 0
        });
        const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](init.headers || input.headers || {});
        if (inputBody !== null && !headers.has('Content-Type')) {
            const contentType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["extractContentType"])(inputBody, this);
            if (contentType) {
                headers.set('Content-Type', contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) {
            signal = init.signal;
        }
        // eslint-disable-next-line no-eq-null, eqeqeq
        if (signal != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isAbortSignal"])(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
        }
        // §5.4, Request constructor steps, step 15.1
        // eslint-disable-next-line no-eq-null, eqeqeq
        let referrer = init.referrer == null ? input.referrer : init.referrer;
        if (referrer === '') {
            // §5.4, Request constructor steps, step 15.2
            referrer = 'no-referrer';
        } else if (referrer) {
            // §5.4, Request constructor steps, step 15.3.1, 15.3.2
            const parsedReferrer = new URL(referrer);
            // §5.4, Request constructor steps, step 15.3.3, 15.3.4
            referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? 'client' : parsedReferrer;
        } else {
            referrer = undefined;
        }
        this[INTERNALS] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal,
            referrer
        };
        // Node-fetch-only options
        this.follow = init.follow === undefined ? input.follow === undefined ? 20 : input.follow : init.follow;
        this.compress = init.compress === undefined ? input.compress === undefined ? true : input.compress : init.compress;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
        this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
        // §5.4, Request constructor steps, step 16.
        // Default is empty string per https://fetch.spec.whatwg.org/#concept-request-referrer-policy
        this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || '';
    }
    /** @returns {string} */ get method() {
        return this[INTERNALS].method;
    }
    /** @returns {string} */ get url() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$native$2d$url$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["format"])(this[INTERNALS].parsedURL);
    }
    /** @returns {Headers} */ get headers() {
        return this[INTERNALS].headers;
    }
    get redirect() {
        return this[INTERNALS].redirect;
    }
    /** @returns {AbortSignal} */ get signal() {
        return this[INTERNALS].signal;
    }
    // https://fetch.spec.whatwg.org/#dom-request-referrer
    get referrer() {
        if (this[INTERNALS].referrer === 'no-referrer') {
            return '';
        }
        if (this[INTERNALS].referrer === 'client') {
            return 'about:client';
        }
        if (this[INTERNALS].referrer) {
            return this[INTERNALS].referrer.toString();
        }
        return undefined;
    }
    get referrerPolicy() {
        return this[INTERNALS].referrerPolicy;
    }
    set referrerPolicy(referrerPolicy) {
        this[INTERNALS].referrerPolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$referrer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["validateReferrerPolicy"])(referrerPolicy);
    }
    /**
	 * Clone this request
	 *
	 * @return  Request
	 */ clone() {
        return new Request(this);
    }
    get [Symbol.toStringTag]() {
        return 'Request';
    }
}
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    },
    referrer: {
        enumerable: true
    },
    referrerPolicy: {
        enumerable: true
    }
});
const getNodeRequestOptions = (request)=>{
    const { parsedURL } = request[INTERNALS];
    const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](request[INTERNALS].headers);
    // Fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body !== null) {
        const totalBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getTotalBytes"])(request);
        // Set Content-Length if totalBytes is a number (that is not NaN)
        if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // 4.1. Main fetch, step 2.6
    // > If request's referrer policy is the empty string, then set request's referrer policy to the
    // > default referrer policy.
    if (request.referrerPolicy === '') {
        request.referrerPolicy = __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$referrer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_REFERRER_POLICY"];
    }
    // 4.1. Main fetch, step 2.7
    // > If request's referrer is not "no-referrer", set request's referrer to the result of invoking
    // > determine request's referrer.
    if (request.referrer && request.referrer !== 'no-referrer') {
        request[INTERNALS].referrer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$referrer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["determineRequestsReferrer"])(request);
    } else {
        request[INTERNALS].referrer = 'no-referrer';
    }
    // 4.5. HTTP-network-or-cache fetch, step 6.9
    // > If httpRequest's referrer is a URL, then append `Referer`/httpRequest's referrer, serialized
    // >  and isomorphic encoded, to httpRequest's header list.
    if (request[INTERNALS].referrer instanceof URL) {
        headers.set('Referer', request.referrer);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip, deflate, br');
    }
    let { agent } = request;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$get$2d$search$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getSearch"])(parsedURL);
    // Pass the full URL directly to request(), but overwrite the following
    // options:
    const options = {
        // Overwrite search to retain trailing ? (issue #776)
        path: parsedURL.pathname + search,
        // The following options are not expressed in the URL
        method: request.method,
        headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
    };
    return {
        /** @type {URL} */ parsedURL,
        options
    };
};
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/errors/abort-error.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbortError",
    ()=>AbortError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$base$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/base.js [middleware-edge] (ecmascript)");
;
class AbortError extends __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$base$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchBaseError"] {
    constructor(message, type = 'aborted'){
        super(message, type);
    }
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/index.js [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */ __turbopack_context__.s([
    "default",
    ()=>fetch
]);
var __TURBOPACK__url__external__node$3a$http__ = __turbopack_context__.x("node:http", ()=>require("node:http"), true);
var __TURBOPACK__url__external__node$3a$https__ = __turbopack_context__.x("node:https", ()=>require("node:https"), true);
var __TURBOPACK__url__external__node$3a$zlib__ = __turbopack_context__.x("node:zlib", ()=>require("node:zlib"), true);
var __TURBOPACK__url__external__node$3a$stream__ = __turbopack_context__.x("node:stream", ()=>require("node:stream"), true);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$data$2d$uri$2d$to$2d$buffer$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/data-uri-to-buffer/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/body.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/request.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/fetch-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$abort$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/abort-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2d$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/is-redirect.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/formdata-polyfill/esm.min.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/is.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$referrer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/referrer.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$from$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/from.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__Blob$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript) <export default as Blob>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript) <export default as File>");
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
;
;
;
const supportedSchemas = new Set([
    'data:',
    'http:',
    'https:'
]);
async function fetch(url, options_) {
    return new Promise((resolve, reject)=>{
        // Build request object
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](url, options_);
        const { parsedURL, options } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getNodeRequestOptions"])(request);
        if (!supportedSchemas.has(parsedURL.protocol)) {
            throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, '')}" is not supported.`);
        }
        if (parsedURL.protocol === 'data:') {
            const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$data$2d$uri$2d$to$2d$buffer$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(request.url);
            const response = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](data, {
                headers: {
                    'Content-Type': data.typeFull
                }
            });
            resolve(response);
            return;
        }
        // Wrap http.request into fetch
        const send = (parsedURL.protocol === 'https:' ? __TURBOPACK__url__external__node$3a$https__["default"] : __TURBOPACK__url__external__node$3a$http__["default"]).request;
        const { signal } = request;
        let response = null;
        const abort = ()=>{
            const error = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$abort$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AbortError"]('The operation was aborted.');
            reject(error);
            if (request.body && request.body instanceof __TURBOPACK__url__external__node$3a$stream__["default"].Readable) {
                request.body.destroy(error);
            }
            if (!response || !response.body) {
                return;
            }
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = ()=>{
            abort();
            finalize();
        };
        // Send request
        const request_ = send(parsedURL.toString(), options);
        if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
        }
        const finalize = ()=>{
            request_.abort();
            if (signal) {
                signal.removeEventListener('abort', abortAndFinalize);
            }
        };
        request_.on('error', (error)=>{
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`request to ${request.url} failed, reason: ${error.message}`, 'system', error));
            finalize();
        });
        fixResponseChunkedTransferBadEnding(request_, (error)=>{
            if (response && response.body) {
                response.body.destroy(error);
            }
        });
        /* c8 ignore next 18 */ if (process.version < 'v14') {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            request_.on('socket', (s)=>{
                let endedWithEventsCount;
                s.prependListener('end', ()=>{
                    endedWithEventsCount = s._eventsCount;
                });
                s.prependListener('close', (hadError)=>{
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && endedWithEventsCount < s._eventsCount && !hadError) {
                        const error = new Error('Premature close');
                        error.code = 'ERR_STREAM_PREMATURE_CLOSE';
                        response.body.emit('error', error);
                    }
                });
            });
        }
        request_.on('response', (response_)=>{
            request_.setTimeout(0);
            const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["fromRawHeaders"])(response_.rawHeaders);
            // HTTP fetch step 5
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2d$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isRedirect"])(response_.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL(location, request.url);
                } catch  {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        break;
                    case 'follow':
                        {
                            // HTTP-redirect fetch step 2
                            if (locationURL === null) {
                                break;
                            }
                            // HTTP-redirect fetch step 5
                            if (request.counter >= request.follow) {
                                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"](`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                                finalize();
                                return;
                            }
                            // HTTP-redirect fetch step 6 (counter increment)
                            // Create a new Request object.
                            const requestOptions = {
                                headers: new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](request.headers),
                                follow: request.follow,
                                counter: request.counter + 1,
                                agent: request.agent,
                                compress: request.compress,
                                method: request.method,
                                body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["clone"])(request),
                                signal: request.signal,
                                size: request.size,
                                referrer: request.referrer,
                                referrerPolicy: request.referrerPolicy
                            };
                            // when forwarding sensitive headers like "Authorization",
                            // "WWW-Authenticate", and "Cookie" to untrusted targets,
                            // headers will be ignored when following a redirect to a domain
                            // that is not a subdomain match or exact match of the initial domain.
                            // For example, a redirect from "foo.com" to either "foo.com" or "sub.foo.com"
                            // will forward the sensitive headers, but a redirect to "bar.com" will not.
                            // headers will also be ignored when following a redirect to a domain using
                            // a different protocol. For example, a redirect from "https://foo.com" to "http://foo.com"
                            // will not forward the sensitive headers
                            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDomainOrSubdomain"])(request.url, locationURL) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isSameProtocol"])(request.url, locationURL)) {
                                for (const name of [
                                    'authorization',
                                    'www-authenticate',
                                    'cookie',
                                    'cookie2'
                                ]){
                                    requestOptions.headers.delete(name);
                                }
                            }
                            // HTTP-redirect fetch step 9
                            if (response_.statusCode !== 303 && request.body && options_.body instanceof __TURBOPACK__url__external__node$3a$stream__["default"].Readable) {
                                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"]('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                                finalize();
                                return;
                            }
                            // HTTP-redirect fetch step 11
                            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST') {
                                requestOptions.method = 'GET';
                                requestOptions.body = undefined;
                                requestOptions.headers.delete('content-length');
                            }
                            // HTTP-redirect fetch step 14
                            const responseReferrerPolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$referrer$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parseReferrerPolicyFromHeader"])(headers);
                            if (responseReferrerPolicy) {
                                requestOptions.referrerPolicy = responseReferrerPolicy;
                            }
                            // HTTP-redirect fetch step 15
                            resolve(fetch(new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](locationURL, requestOptions)));
                            finalize();
                            return;
                        }
                    default:
                        return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
                }
            }
            // Prepare response
            if (signal) {
                response_.once('end', ()=>{
                    signal.removeEventListener('abort', abortAndFinalize);
                });
            }
            let body = (0, __TURBOPACK__url__external__node$3a$stream__["pipeline"])(response_, new __TURBOPACK__url__external__node$3a$stream__["PassThrough"](), (error)=>{
                if (error) {
                    reject(error);
                }
            });
            // see https://github.com/nodejs/node/pull/29376
            /* c8 ignore next 3 */ if (process.version < 'v12.10') {
                response_.on('aborted', abortAndFinalize);
            }
            const responseOptions = {
                url: request.url,
                status: response_.statusCode,
                statusText: response_.statusMessage,
                headers,
                size: request.size,
                counter: request.counter,
                highWaterMark: request.highWaterMark
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
                response = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](body, responseOptions);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: __TURBOPACK__url__external__node$3a$zlib__["default"].Z_SYNC_FLUSH,
                finishFlush: __TURBOPACK__url__external__node$3a$zlib__["default"].Z_SYNC_FLUSH
            };
            // For gzip
            if (codings === 'gzip' || codings === 'x-gzip') {
                body = (0, __TURBOPACK__url__external__node$3a$stream__["pipeline"])(body, __TURBOPACK__url__external__node$3a$zlib__["default"].createGunzip(zlibOptions), (error)=>{
                    if (error) {
                        reject(error);
                    }
                });
                response = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](body, responseOptions);
                resolve(response);
                return;
            }
            // For deflate
            if (codings === 'deflate' || codings === 'x-deflate') {
                // Handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = (0, __TURBOPACK__url__external__node$3a$stream__["pipeline"])(response_, new __TURBOPACK__url__external__node$3a$stream__["PassThrough"](), (error)=>{
                    if (error) {
                        reject(error);
                    }
                });
                raw.once('data', (chunk)=>{
                    // See http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = (0, __TURBOPACK__url__external__node$3a$stream__["pipeline"])(body, __TURBOPACK__url__external__node$3a$zlib__["default"].createInflate(), (error)=>{
                            if (error) {
                                reject(error);
                            }
                        });
                    } else {
                        body = (0, __TURBOPACK__url__external__node$3a$stream__["pipeline"])(body, __TURBOPACK__url__external__node$3a$zlib__["default"].createInflateRaw(), (error)=>{
                            if (error) {
                                reject(error);
                            }
                        });
                    }
                    response = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](body, responseOptions);
                    resolve(response);
                });
                raw.once('end', ()=>{
                    // Some old IIS servers return zero-length OK deflate responses, so
                    // 'data' is never emitted. See https://github.com/node-fetch/node-fetch/pull/903
                    if (!response) {
                        response = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](body, responseOptions);
                        resolve(response);
                    }
                });
                return;
            }
            // For br
            if (codings === 'br') {
                body = (0, __TURBOPACK__url__external__node$3a$stream__["pipeline"])(body, __TURBOPACK__url__external__node$3a$zlib__["default"].createBrotliDecompress(), (error)=>{
                    if (error) {
                        reject(error);
                    }
                });
                response = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](body, responseOptions);
                resolve(response);
                return;
            }
            // Otherwise, use response as-is
            response = new __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"](body, responseOptions);
            resolve(response);
        });
        // eslint-disable-next-line promise/prefer-await-to-then
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$body$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["writeToStream"])(request_, request).catch(reject);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    const LAST_CHUNK = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from('0\r\n\r\n');
    let isChunkedTransfer = false;
    let properLastChunkReceived = false;
    let previousChunk;
    request.on('response', (response)=>{
        const { headers } = response;
        isChunkedTransfer = headers['transfer-encoding'] === 'chunked' && !headers['content-length'];
    });
    request.on('socket', (socket)=>{
        const onSocketClose = ()=>{
            if (isChunkedTransfer && !properLastChunkReceived) {
                const error = new Error('Premature close');
                error.code = 'ERR_STREAM_PREMATURE_CLOSE';
                errorCallback(error);
            }
        };
        const onData = (buf)=>{
            properLastChunkReceived = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].compare(buf.slice(-5), LAST_CHUNK) === 0;
            // Sometimes final 0-length chunk and end of message code are in separate packets
            if (!properLastChunkReceived && previousChunk) {
                properLastChunkReceived = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
            }
            previousChunk = buf;
        };
        socket.prependListener('close', onSocketClose);
        socket.on('data', onData);
        request.on('close', ()=>{
            socket.removeListener('close', onSocketClose);
            socket.removeListener('data', onData);
        });
    });
}
}),
"[project]/energy-os-v0/node_modules/node-fetch/src/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbortError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$abort$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["AbortError"],
    "Blob",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__Blob$3e$__["Blob"],
    "FetchError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FetchError"],
    "File",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"],
    "FormData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["FormData"],
    "Headers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    "Request",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    "Response",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"],
    "blobFrom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$from$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["blobFrom"],
    "blobFromSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$from$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["blobFromSync"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "fileFrom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$from$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fileFrom"],
    "fileFromSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$from$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fileFromSync"],
    "isRedirect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2d$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isRedirect"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/headers.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$request$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/request.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$fetch$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/fetch-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$errors$2f$abort$2d$error$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/errors/abort-error.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$node$2d$fetch$2f$src$2f$utils$2f$is$2d$redirect$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/node-fetch/src/utils/is-redirect.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$formdata$2d$polyfill$2f$esm$2e$min$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/formdata-polyfill/esm.min.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__Blob$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/index.js [middleware-edge] (ecmascript) <export default as Blob>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$file$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/file.js [middleware-edge] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$fetch$2d$blob$2f$from$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/fetch-blob/from.js [middleware-edge] (ecmascript) <locals>");
}),
"[project]/energy-os-v0/node_modules/node-domexception/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ if (!globalThis.DOMException) {
    try {
        const { MessageChannel } = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'worker_threads', ecmascript)"), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [
            ab,
            ab
        ]);
    } catch (err) {
        err.constructor.name === 'DOMException' && (globalThis.DOMException = err.constructor);
    }
}
module.exports = globalThis.DOMException;
}),
"[project]/energy-os-v0/node_modules/bignumber.js/bignumber.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

;
(function(globalObject) {
    'use strict';
    /*
 *      bignumber.js v9.3.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */ var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = '[BigNumber Error] ', tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ', BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 0x1fffffffffffff, // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [
        1,
        10,
        100,
        1e3,
        1e4,
        1e5,
        1e6,
        1e7,
        1e8,
        1e9,
        1e10,
        1e11,
        1e12,
        1e13
    ], SQRT_BASE = 1e7, // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9; // 0 to MAX_INT32
    /*
   * Create and return a BigNumber constructor.
   */ function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber.prototype = {
            constructor: BigNumber,
            toString: null,
            valueOf: null
        }, ONE = new BigNumber(1), //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
        // The default values below must be integers within the inclusive ranges stated.
        // The values can also be changed at run-time using BigNumber.set.
        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20, // The rounding mode used when rounding to the above decimal places, and when using
        // toExponential, toFixed, toFormat and toPrecision, and round (default value).
        // UP         0 Away from zero.
        // DOWN       1 Towards zero.
        // CEIL       2 Towards +Infinity.
        // FLOOR      3 Towards -Infinity.
        // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
        // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
        // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
        // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
        // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
        ROUNDING_MODE = 4, // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7, // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21, // RANGE : [MIN_EXP, MAX_EXP]
        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -1e7, // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 1e7, // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false, // The modulo mode used when calculating the modulus: a mod n.
        // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
        // The remainder (r) is calculated as: r = a - n * q.
        //
        // UP        0 The remainder is positive if the dividend is negative, else is negative.
        // DOWN      1 The remainder has the same sign as the dividend.
        //             This modulo mode is commonly known as 'truncated division' and is
        //             equivalent to (a % n) in JavaScript.
        // FLOOR     3 The remainder has the same sign as the divisor (Python %).
        // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
        // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
        //             The remainder is always positive.
        //
        // The truncated division, floored division, Euclidian division and IEEE 754 remainder
        // modes are commonly used for the modulus operation.
        // Although the other rounding modes can also be used, they may not give useful results.
        MODULO_MODE = 1, // The maximum number of significant digits of the result of the exponentiatedBy operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 0, // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
            prefix: '',
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ',',
            decimalSeparator: '.',
            fractionGroupSize: 0,
            fractionGroupSeparator: '\xA0',
            suffix: ''
        }, // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
        // '-', '.', whitespace, or repeated character.
        // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
        ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz', alphabetHasNormalDecimalDigits = true;
        //------------------------------------------------------------------------------------------
        // CONSTRUCTOR
        /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */ function BigNumber(v, b) {
            var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
            // Enable constructor call without `new`.
            if (!(x instanceof BigNumber)) return new BigNumber(v, b);
            if (b == null) {
                if (v && v._isBigNumber === true) {
                    x.s = v.s;
                    if (!v.c || v.e > MAX_EXP) {
                        x.c = x.e = null;
                    } else if (v.e < MIN_EXP) {
                        x.c = [
                            x.e = 0
                        ];
                    } else {
                        x.e = v.e;
                        x.c = v.c.slice();
                    }
                    return;
                }
                if ((isNum = typeof v == 'number') && v * 0 == 0) {
                    // Use `1 / n` to handle minus zero also.
                    x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                    // Fast path for integers, where n < 2147483648 (2**31).
                    if (v === ~~v) {
                        for(e = 0, i = v; i >= 10; i /= 10, e++);
                        if (e > MAX_EXP) {
                            x.c = x.e = null;
                        } else {
                            x.e = e;
                            x.c = [
                                v
                            ];
                        }
                        return;
                    }
                    str = String(v);
                } else {
                    if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                    x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
                }
                // Decimal point?
                if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
                // Exponential form?
                if ((i = str.search(/e/i)) > 0) {
                    // Determine exponent.
                    if (e < 0) e = i;
                    e += +str.slice(i + 1);
                    str = str.substring(0, i);
                } else if (e < 0) {
                    // Integer.
                    e = str.length;
                }
            } else {
                // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
                intCheck(b, 2, ALPHABET.length, 'Base');
                // Allow exponential notation to be used with base 10 argument, while
                // also rounding to DECIMAL_PLACES as with other bases.
                if (b == 10 && alphabetHasNormalDecimalDigits) {
                    x = new BigNumber(v);
                    return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }
                str = String(v);
                if (isNum = typeof v == 'number') {
                    // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                    if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                    x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                    // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                    if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
                        throw Error(tooManyDigits + v);
                    }
                } else {
                    x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                }
                alphabet = ALPHABET.slice(0, b);
                e = i = 0;
                // Check that str is a valid base b number.
                // Don't use RegExp, so alphabet can contain special characters.
                for(len = str.length; i < len; i++){
                    if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                        if (c == '.') {
                            // If '.' is not the first character and it has not be found before.
                            if (i > e) {
                                e = len;
                                continue;
                            }
                        } else if (!caseChanged) {
                            // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                            if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                                caseChanged = true;
                                i = -1;
                                e = 0;
                                continue;
                            }
                        }
                        return parseNumeric(x, String(v), isNum, b);
                    }
                }
                // Prevent later check for length on converted number.
                isNum = false;
                str = convertBase(str, b, 10, x.s);
                // Decimal point?
                if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
                else e = str.length;
            }
            // Determine leading zeros.
            for(i = 0; str.charCodeAt(i) === 48; i++);
            // Determine trailing zeros.
            for(len = str.length; str.charCodeAt(--len) === 48;);
            if (str = str.slice(i, ++len)) {
                len -= i;
                // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                    throw Error(tooManyDigits + x.s * v);
                }
                // Overflow?
                if ((e = e - i - 1) > MAX_EXP) {
                    // Infinity.
                    x.c = x.e = null;
                // Underflow?
                } else if (e < MIN_EXP) {
                    // Zero.
                    x.c = [
                        x.e = 0
                    ];
                } else {
                    x.e = e;
                    x.c = [];
                    // Transform base
                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = (e + 1) % LOG_BASE;
                    if (e < 0) i += LOG_BASE; // i < 1
                    if (i < len) {
                        if (i) x.c.push(+str.slice(0, i));
                        for(len -= LOG_BASE; i < len;){
                            x.c.push(+str.slice(i, i += LOG_BASE));
                        }
                        i = LOG_BASE - (str = str.slice(i)).length;
                    } else {
                        i -= len;
                    }
                    for(; i--; str += '0');
                    x.c.push(+str);
                }
            } else {
                // Zero.
                x.c = [
                    x.e = 0
                ];
            }
        }
        // CONSTRUCTOR PROPERTIES
        BigNumber.clone = clone;
        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;
        /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */ BigNumber.config = BigNumber.set = function(obj) {
            var p, v;
            if (obj != null) {
                if (typeof obj == 'object') {
                    // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        DECIMAL_PLACES = v;
                    }
                    // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                    // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
                        v = obj[p];
                        intCheck(v, 0, 8, p);
                        ROUNDING_MODE = v;
                    }
                    // EXPONENTIAL_AT {number|number[]}
                    // Integer, -MAX to MAX inclusive or
                    // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                    // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, 0, p);
                            intCheck(v[1], 0, MAX, p);
                            TO_EXP_NEG = v[0];
                            TO_EXP_POS = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                        }
                    }
                    // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                    // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                    // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
                    if (obj.hasOwnProperty(p = 'RANGE')) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, -1, p);
                            intCheck(v[1], 1, MAX, p);
                            MIN_EXP = v[0];
                            MAX_EXP = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            if (v) {
                                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                            } else {
                                throw Error(bignumberError + p + ' cannot be zero: ' + v);
                            }
                        }
                    }
                    // CRYPTO {boolean} true or false.
                    // '[BigNumber Error] CRYPTO not true or false: {v}'
                    // '[BigNumber Error] crypto unavailable'
                    if (obj.hasOwnProperty(p = 'CRYPTO')) {
                        v = obj[p];
                        if (v === !!v) {
                            if (v) {
                                if (typeof crypto != 'undefined' && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                                    CRYPTO = v;
                                } else {
                                    CRYPTO = !v;
                                    throw Error(bignumberError + 'crypto unavailable');
                                }
                            } else {
                                CRYPTO = v;
                            }
                        } else {
                            throw Error(bignumberError + p + ' not true or false: ' + v);
                        }
                    }
                    // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                    // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
                        v = obj[p];
                        intCheck(v, 0, 9, p);
                        MODULO_MODE = v;
                    }
                    // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        POW_PRECISION = v;
                    }
                    // FORMAT {object}
                    // '[BigNumber Error] FORMAT not an object: {v}'
                    if (obj.hasOwnProperty(p = 'FORMAT')) {
                        v = obj[p];
                        if (typeof v == 'object') FORMAT = v;
                        else throw Error(bignumberError + p + ' not an object: ' + v);
                    }
                    // ALPHABET {string}
                    // '[BigNumber Error] ALPHABET invalid: {v}'
                    if (obj.hasOwnProperty(p = 'ALPHABET')) {
                        v = obj[p];
                        // Disallow if less than two characters,
                        // or if it contains '+', '-', '.', whitespace, or a repeated character.
                        if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                            alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
                            ALPHABET = v;
                        } else {
                            throw Error(bignumberError + p + ' invalid: ' + v);
                        }
                    }
                } else {
                    // '[BigNumber Error] Object expected: {v}'
                    throw Error(bignumberError + 'Object expected: ' + obj);
                }
            }
            return {
                DECIMAL_PLACES: DECIMAL_PLACES,
                ROUNDING_MODE: ROUNDING_MODE,
                EXPONENTIAL_AT: [
                    TO_EXP_NEG,
                    TO_EXP_POS
                ],
                RANGE: [
                    MIN_EXP,
                    MAX_EXP
                ],
                CRYPTO: CRYPTO,
                MODULO_MODE: MODULO_MODE,
                POW_PRECISION: POW_PRECISION,
                FORMAT: FORMAT,
                ALPHABET: ALPHABET
            };
        };
        /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */ BigNumber.isBigNumber = function(v) {
            if (!v || v._isBigNumber !== true) return false;
            if (!BigNumber.DEBUG) return true;
            var i, n, c = v.c, e = v.e, s = v.s;
            out: if (({}).toString.call(c) == '[object Array]') {
                if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                    // If the first element is zero, the BigNumber value must be zero.
                    if (c[0] === 0) {
                        if (e === 0 && c.length === 1) return true;
                        break out;
                    }
                    // Calculate number of digits that c[0] should have, based on the exponent.
                    i = (e + 1) % LOG_BASE;
                    if (i < 1) i += LOG_BASE;
                    // Calculate number of digits of c[0].
                    //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
                    if (String(c[0]).length == i) {
                        for(i = 0; i < c.length; i++){
                            n = c[i];
                            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                        }
                        // Last element cannot be zero, unless it is the only element.
                        if (n !== 0) return true;
                    }
                }
            // Infinity/NaN
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
                return true;
            }
            throw Error(bignumberError + 'Invalid BigNumber: ' + v);
        };
        /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.maximum = BigNumber.max = function() {
            return maxOrMin(arguments, -1);
        };
        /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.minimum = BigNumber.min = function() {
            return maxOrMin(arguments, 1);
        };
        /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */ BigNumber.random = function() {
            var pow2_53 = 0x20000000000000;
            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function() {
                return mathfloor(Math.random() * pow2_53);
            } : function() {
                return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
            };
            return function(dp) {
                var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
                if (dp == null) dp = DECIMAL_PLACES;
                else intCheck(dp, 0, MAX);
                k = mathceil(dp / LOG_BASE);
                if (CRYPTO) {
                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {
                        a = crypto.getRandomValues(new Uint32Array(k *= 2));
                        for(; i < k;){
                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if (v >= 9e15) {
                                b = crypto.getRandomValues(new Uint32Array(2));
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {
                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 2;
                            }
                        }
                        i = k / 2;
                    // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {
                        // buffer
                        a = crypto.randomBytes(k *= 7);
                        for(; i < k;){
                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                            if (v >= 9e15) {
                                crypto.randomBytes(7).copy(a, i);
                            } else {
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        throw Error(bignumberError + 'crypto unavailable');
                    }
                }
                // Use Math.random.
                if (!CRYPTO) {
                    for(; i < k;){
                        v = random53bitInt();
                        if (v < 9e15) c[i++] = v % 1e14;
                    }
                }
                k = c[--i];
                dp %= LOG_BASE;
                // Convert trailing digits to zeros according to dp.
                if (k && dp) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor(k / v) * v;
                }
                // Remove trailing elements which are zero.
                for(; c[i] === 0; c.pop(), i--);
                // Zero?
                if (i < 0) {
                    c = [
                        e = 0
                    ];
                } else {
                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for(e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
                    // Count the digits of the first element of c to determine leading zeros, and...
                    for(i = 1, v = c[0]; v >= 10; v /= 10, i++);
                    // adjust the exponent accordingly.
                    if (i < LOG_BASE) e -= LOG_BASE - i;
                }
                rand.e = e;
                rand.c = c;
                return rand;
            };
        }();
        /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.sum = function() {
            var i = 1, args = arguments, sum = new BigNumber(args[0]);
            for(; i < args.length;)sum = sum.plus(args[i++]);
            return sum;
        };
        // PRIVATE FUNCTIONS
        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = function() {
            var decimal = '0123456789';
            /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */ function toBaseOut(str, baseIn, baseOut, alphabet) {
                var j, arr = [
                    0
                ], arrL, i = 0, len = str.length;
                for(; i < len;){
                    for(arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                    arr[0] += alphabet.indexOf(str.charAt(i++));
                    for(j = 0; j < arr.length; j++){
                        if (arr[j] > baseOut - 1) {
                            if (arr[j + 1] == null) arr[j + 1] = 0;
                            arr[j + 1] += arr[j] / baseOut | 0;
                            arr[j] %= baseOut;
                        }
                    }
                }
                return arr.reverse();
            }
            // Convert a numeric string of baseIn to a numeric string of baseOut.
            // If the caller is toString, we are converting from base 10 to baseOut.
            // If the caller is BigNumber, we are converting from baseIn to base 10.
            return function(str, baseIn, baseOut, sign, callerIsToString) {
                var alphabet, d, e, k, r, x, xc, y, i = str.indexOf('.'), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
                // Non-integer.
                if (i >= 0) {
                    k = POW_PRECISION;
                    // Unlimited precision.
                    POW_PRECISION = 0;
                    str = str.replace('.', '');
                    y = new BigNumber(baseIn);
                    x = y.pow(str.length - i);
                    POW_PRECISION = k;
                    // Convert str as if an integer, then restore the fraction part by dividing the
                    // result by its base raised to a power.
                    y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'), 10, baseOut, decimal);
                    y.e = y.c.length;
                }
                // Convert the number as integer.
                xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
                // xc now represents str as an integer and converted to baseOut. e is the exponent.
                e = k = xc.length;
                // Remove trailing zeros.
                for(; xc[--k] == 0; xc.pop());
                // Zero?
                if (!xc[0]) return alphabet.charAt(0);
                // Does str represent an integer? If so, no need for the division.
                if (i < 0) {
                    --e;
                } else {
                    x.c = xc;
                    x.e = e;
                    // The sign is needed for correct rounding.
                    x.s = sign;
                    x = div(x, y, dp, rm, baseOut);
                    xc = x.c;
                    r = x.r;
                    e = x.e;
                }
                // xc now represents str converted to baseOut.
                // The index of the rounding digit.
                d = e + dp + 1;
                // The rounding digit: the digit to the right of the digit that may be rounded up.
                i = xc[d];
                // Look at the rounding digits and mode to determine whether to round up.
                k = baseOut / 2;
                r = r || d < 0 || xc[d + 1] != null;
                r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
                // If the index of the rounding digit is not greater than zero, or xc represents
                // zero, then the result of the base conversion is zero or, if rounding up, a value
                // such as 0.00001.
                if (d < 1 || !xc[0]) {
                    // 1^-dp or 0
                    str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
                } else {
                    // Truncate xc to the required number of decimal places.
                    xc.length = d;
                    // Round up?
                    if (r) {
                        // Rounding up may mean the previous digit has to be rounded up and so on.
                        for(--baseOut; ++xc[--d] > baseOut;){
                            xc[d] = 0;
                            if (!d) {
                                ++e;
                                xc = [
                                    1
                                ].concat(xc);
                            }
                        }
                    }
                    // Determine trailing zeros.
                    for(k = xc.length; !xc[--k];);
                    // E.g. [4, 11, 15] becomes 4bf.
                    for(i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));
                    // Add leading zeros, decimal point and trailing zeros as required.
                    str = toFixedPoint(str, e, alphabet.charAt(0));
                }
                // The caller will add the sign.
                return str;
            };
        }();
        // Perform division in the specified base. Called by div and convertBase.
        div = function() {
            // Assume non-zero x and k.
            function multiply(x, k, base) {
                var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
                for(x = x.slice(); i--;){
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                    carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                    x[i] = temp % base;
                }
                if (carry) x = [
                    carry
                ].concat(x);
                return x;
            }
            function compare(a, b, aL, bL) {
                var i, cmp;
                if (aL != bL) {
                    cmp = aL > bL ? 1 : -1;
                } else {
                    for(i = cmp = 0; i < aL; i++){
                        if (a[i] != b[i]) {
                            cmp = a[i] > b[i] ? 1 : -1;
                            break;
                        }
                    }
                }
                return cmp;
            }
            function subtract(a, b, aL, base) {
                var i = 0;
                // Subtract b from a.
                for(; aL--;){
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }
                // Remove leading zeros.
                for(; !a[0] && a.length > 1; a.splice(0, 1));
            }
            // x: dividend, y: divisor.
            return function(x, y, dp, rm, base) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
                // Either NaN, Infinity or 0?
                if (!xc || !xc[0] || !yc || !yc[0]) {
                    return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
                    !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                    xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                }
                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;
                if (!base) {
                    base = BASE;
                    e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                    s = s / LOG_BASE | 0;
                }
                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for(i = 0; yc[i] == (xc[i] || 0); i++);
                if (yc[i] > (xc[i] || 0)) e--;
                if (s < 0) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;
                    // Normalise xc and yc so highest order digit of yc is >= base / 2.
                    n = mathfloor(base / (yc[0] + 1));
                    // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                    // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
                    if (n > 1) {
                        yc = multiply(yc, n, base);
                        xc = multiply(xc, n, base);
                        yL = yc.length;
                        xL = xc.length;
                    }
                    xi = yL;
                    rem = xc.slice(0, yL);
                    remL = rem.length;
                    // Add zeros to make remainder as long as divisor.
                    for(; remL < yL; rem[remL++] = 0);
                    yz = yc.slice();
                    yz = [
                        0
                    ].concat(yz);
                    yc0 = yc[0];
                    if (yc[1] >= base / 2) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
                    do {
                        n = 0;
                        // Compare divisor and remainder.
                        cmp = compare(yc, rem, yL, remL);
                        // If divisor < remainder.
                        if (cmp < 0) {
                            // Calculate trial digit, n.
                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor(rem0 / yc0);
                            //  Algorithm:
                            //  product = divisor multiplied by trial digit (n).
                            //  Compare product and remainder.
                            //  If product is greater than remainder:
                            //    Subtract divisor from product, decrement trial digit.
                            //  Subtract product from remainder.
                            //  If product was less than remainder at the last compare:
                            //    Compare new remainder and divisor.
                            //    If remainder is greater than divisor:
                            //      Subtract divisor from remainder, increment trial digit.
                            if (n > 1) {
                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;
                                // product = divisor * trial digit.
                                prod = multiply(yc, n, base);
                                prodL = prod.length;
                                remL = rem.length;
                                // Compare product and remainder.
                                // If product > remainder then trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while(compare(prod, rem, prodL, remL) == 1){
                                    n--;
                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {
                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if (n == 0) {
                                    // divisor < remainder, so n must be at least 1.
                                    cmp = n = 1;
                                }
                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }
                            if (prodL < remL) prod = [
                                0
                            ].concat(prod);
                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            remL = rem.length;
                            // If product was < remainder.
                            if (cmp == -1) {
                                // Compare divisor and new remainder.
                                // If divisor < new remainder, subtract divisor from remainder.
                                // Trial digit n too low.
                                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                                while(compare(yc, rem, yL, remL) < 1){
                                    n++;
                                    // Subtract divisor from remainder.
                                    subtract(rem, yL < remL ? yz : yc, remL, base);
                                    remL = rem.length;
                                }
                            }
                        } else if (cmp === 0) {
                            n++;
                            rem = [
                                0
                            ];
                        } // else cmp === 1 and n will be 0
                        // Add the next digit, n, to the result array.
                        qc[i++] = n;
                        // Update the remainder.
                        if (rem[0]) {
                            rem[remL++] = xc[xi] || 0;
                        } else {
                            rem = [
                                xc[xi]
                            ];
                            remL = 1;
                        }
                    }while ((xi++ < xL || rem[0] != null) && s--)
                    more = rem[0] != null;
                    // Leading zero?
                    if (!qc[0]) qc.splice(0, 1);
                }
                if (base == BASE) {
                    // To calculate q.e, first get the number of digits of qc[0].
                    for(i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                    round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }
                return q;
            };
        }();
        /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */ function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;
            if (i == null) {
                str = coeffToString(n.c);
                str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, '0');
            } else {
                n = round(new BigNumber(n), i, rm);
                // n.e may have changed if the value was rounded up.
                e = n.e;
                str = coeffToString(n.c);
                len = str.length;
                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.
                // Exponential notation.
                if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                    // Append zeros?
                    for(; len < i; str += '0', len++);
                    str = toExponential(str, e);
                // Fixed-point notation.
                } else {
                    i -= ne + (id === 2 && e > ne);
                    str = toFixedPoint(str, e, '0');
                    // Append zeros?
                    if (e + 1 > len) {
                        if (--i > 0) for(str += '.'; i--; str += '0');
                    } else {
                        i += e - len;
                        if (i > 0) {
                            if (e + 1 == len) str += '.';
                            for(; i--; str += '0');
                        }
                    }
                }
            }
            return n.s < 0 && c0 ? '-' + str : str;
        }
        // Handle BigNumber.max and BigNumber.min.
        // If any number is NaN, return NaN.
        function maxOrMin(args, n) {
            var k, y, i = 1, x = new BigNumber(args[0]);
            for(; i < args.length; i++){
                y = new BigNumber(args[i]);
                if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
                    x = y;
                }
            }
            return x;
        }
        /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */ function normalise(n, c, e) {
            var i = 1, j = c.length;
            // Remove trailing zeros.
            for(; !c[--j]; c.pop());
            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for(j = c[0]; j >= 10; j /= 10, i++);
            // Overflow?
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
                // Infinity.
                n.c = n.e = null;
            // Underflow?
            } else if (e < MIN_EXP) {
                // Zero.
                n.c = [
                    n.e = 0
                ];
            } else {
                n.e = e;
                n.c = c;
            }
            return n;
        }
        // Handle values that fail the validity test in BigNumber.
        parseNumeric = function() {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(x, str, isNum, b) {
                var base, s = isNum ? str : str.replace(whitespaceOrPlus, '');
                // No exception on ±Infinity or NaN.
                if (isInfinityOrNaN.test(s)) {
                    x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                } else {
                    if (!isNum) {
                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace(basePrefix, function(m, p1, p2) {
                            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });
                        if (b) {
                            base = b;
                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                        }
                        if (str != s) return new BigNumber(s, base);
                    }
                    // '[BigNumber Error] Not a number: {n}'
                    // '[BigNumber Error] Not a base {b} number: {n}'
                    if (BigNumber.DEBUG) {
                        throw Error(bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
                    }
                    // NaN
                    x.s = null;
                }
                x.c = x.e = null;
            };
        }();
        /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */ function round(x, sd, rm, r) {
            var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
            // if x is not Infinity or NaN...
            if (xc) {
                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {
                    // Get the number of digits of the first element of xc.
                    for(d = 1, k = xc[0]; k >= 10; k /= 10, d++);
                    i = sd - d;
                    // If the rounding digit is in the first element of xc...
                    if (i < 0) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ni = 0];
                        // Get the rounding digit at index j of n.
                        rd = mathfloor(n / pows10[d - j - 1] % 10);
                    } else {
                        ni = mathceil((i + 1) / LOG_BASE);
                        if (ni >= xc.length) {
                            if (r) {
                                // Needed by sqrt.
                                for(; xc.length <= ni; xc.push(0));
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else {
                                break out;
                            }
                        } else {
                            n = k = xc[ni];
                            // Get the number of digits of n.
                            for(d = 1; k >= 10; k /= 10, d++);
                            // Get the index of rd within n.
                            i %= LOG_BASE;
                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;
                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
                        }
                    }
                    r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                    r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
                    (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                    if (sd < 1 || !xc[0]) {
                        xc.length = 0;
                        if (r) {
                            // Convert sd to decimal places.
                            sd -= x.e + 1;
                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                            x.e = -sd || 0;
                        } else {
                            // Zero.
                            xc[0] = x.e = 0;
                        }
                        return x;
                    }
                    // Remove excess digits.
                    if (i == 0) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[LOG_BASE - i];
                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                    }
                    // Round up?
                    if (r) {
                        for(;;){
                            // If the digit to be rounded up is in the first element of xc...
                            if (ni == 0) {
                                // i will be the length of xc[0] before k is added.
                                for(i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                                j = xc[0] += k;
                                for(k = 1; j >= 10; j /= 10, k++);
                                // if i != k the length has increased.
                                if (i != k) {
                                    x.e++;
                                    if (xc[0] == BASE) xc[0] = 1;
                                }
                                break;
                            } else {
                                xc[ni] += k;
                                if (xc[ni] != BASE) break;
                                xc[ni--] = 0;
                                k = 1;
                            }
                        }
                    }
                    // Remove trailing zeros.
                    for(i = xc.length; xc[--i] === 0; xc.pop());
                }
                // Overflow? Infinity.
                if (x.e > MAX_EXP) {
                    x.c = x.e = null;
                // Underflow? Zero.
                } else if (x.e < MIN_EXP) {
                    x.c = [
                        x.e = 0
                    ];
                }
            }
            return x;
        }
        function valueOf(n) {
            var str, e = n.e;
            if (e === null) return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, '0');
            return n.s < 0 ? '-' + str : str;
        }
        // PROTOTYPE/INSTANCE METHODS
        /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */ P.absoluteValue = P.abs = function() {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
        };
        /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */ P.comparedTo = function(y, b) {
            return compare(this, new BigNumber(y, b));
        };
        /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.decimalPlaces = P.dp = function(dp, rm) {
            var c, n, v, x = this;
            if (dp != null) {
                intCheck(dp, 0, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), dp + x.e + 1, rm);
            }
            if (!(c = x.c)) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
            // Subtract the number of trailing zeros of the last number.
            if (v = c[v]) for(; v % 10 == 0; v /= 10, n--);
            if (n < 0) n = 0;
            return n;
        };
        /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.dividedBy = P.div = function(y, b) {
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */ P.dividedToIntegerBy = P.idiv = function(y, b) {
            return div(this, new BigNumber(y, b), 0, 1);
        };
        /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */ P.exponentiatedBy = P.pow = function(n, m) {
            var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
            n = new BigNumber(n);
            // Allow NaN and ±Infinity, but not other non-integers.
            if (n.c && !n.isInteger()) {
                throw Error(bignumberError + 'Exponent not an integer: ' + valueOf(n));
            }
            if (m != null) m = new BigNumber(m);
            // Exponent of MAX_SAFE_INTEGER is 15.
            nIsBig = n.e > 14;
            // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
                // The sign of the result of pow when x is negative depends on the evenness of n.
                // If +n overflows to ±Infinity, the evenness of n would be not be known.
                y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
                return m ? y.mod(m) : y;
            }
            nIsNeg = n.s < 0;
            if (m) {
                // x % m returns NaN if abs(m) is zero, or m is NaN.
                if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
                isModExp = !nIsNeg && x.isInteger() && m.isInteger();
                if (isModExp) x = x.mod(m);
            // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
            // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
                // If x is negative and n is odd, k = -0, else k = 0.
                k = x.s < 0 && isOdd(n) ? -0 : 0;
                // If x >= 1, k = ±Infinity.
                if (x.e > -1) k = 1 / k;
                // If n is negative return ±0, else return ±Infinity.
                return new BigNumber(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) {
                // Truncating each coefficient array to a length of k after each multiplication
                // equates to truncating significant digits to POW_PRECISION + [28, 41],
                // i.e. there will be a minimum of 28 guard digits retained.
                k = mathceil(POW_PRECISION / LOG_BASE + 2);
            }
            if (nIsBig) {
                half = new BigNumber(0.5);
                if (nIsNeg) n.s = 1;
                nIsOdd = isOdd(n);
            } else {
                i = Math.abs(+valueOf(n));
                nIsOdd = i % 2;
            }
            y = new BigNumber(ONE);
            // Performs 54 loop iterations for n of 9007199254740991.
            for(;;){
                if (nIsOdd) {
                    y = y.times(x);
                    if (!y.c) break;
                    if (k) {
                        if (y.c.length > k) y.c.length = k;
                    } else if (isModExp) {
                        y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                    }
                }
                if (i) {
                    i = mathfloor(i / 2);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                } else {
                    n = n.times(half);
                    round(n, n.e + 1, 1);
                    if (n.e > 14) {
                        nIsOdd = isOdd(n);
                    } else {
                        i = +valueOf(n);
                        if (i === 0) break;
                        nIsOdd = i % 2;
                    }
                }
                x = x.times(x);
                if (k) {
                    if (x.c && x.c.length > k) x.c.length = k;
                } else if (isModExp) {
                    x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
                }
            }
            if (isModExp) return y;
            if (nIsNeg) y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */ P.integerValue = function(rm) {
            var n = new BigNumber(this);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
        };
        /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isEqualTo = P.eq = function(y, b) {
            return compare(this, new BigNumber(y, b)) === 0;
        };
        /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */ P.isFinite = function() {
            return !!this.c;
        };
        /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isGreaterThan = P.gt = function(y, b) {
            return compare(this, new BigNumber(y, b)) > 0;
        };
        /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */ P.isInteger = function() {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isLessThan = P.lt = function(y, b) {
            return compare(this, new BigNumber(y, b)) < 0;
        };
        /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isLessThanOrEqualTo = P.lte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */ P.isNaN = function() {
            return !this.s;
        };
        /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */ P.isNegative = function() {
            return this.s < 0;
        };
        /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */ P.isPositive = function() {
            return this.s > 0;
        };
        /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */ P.isZero = function() {
            return !!this.c && this.c[0] == 0;
        };
        /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */ P.minus = function(y, b) {
            var i, j, t, xLTy, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.plus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Either Infinity?
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
                // Either zero?
                if (!xc[0] || !yc[0]) {
                    // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                    return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                    ROUNDING_MODE == 3 ? -0 : 0);
                }
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Determine which is the bigger number.
            if (a = xe - ye) {
                if (xLTy = a < 0) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }
                t.reverse();
                // Prepend zeros to equalise exponents.
                for(b = a; b--; t.push(0));
                t.reverse();
            } else {
                // Exponents equal. Check digit by digit.
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                for(a = b = 0; b < j; b++){
                    if (xc[b] != yc[b]) {
                        xLTy = xc[b] < yc[b];
                        break;
                    }
                }
            }
            // x < y? Point xc to the array of the bigger number.
            if (xLTy) {
                t = xc;
                xc = yc;
                yc = t;
                y.s = -y.s;
            }
            b = (j = yc.length) - (i = xc.length);
            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if (b > 0) for(; b--; xc[i++] = 0);
            b = BASE - 1;
            // Subtract yc from xc.
            for(; j > a;){
                if (xc[--j] < yc[j]) {
                    for(i = j; i && !xc[--i]; xc[i] = b);
                    --xc[i];
                    xc[j] += BASE;
                }
                xc[j] -= yc[j];
            }
            // Remove leading zeros and adjust exponent accordingly.
            for(; xc[0] == 0; xc.splice(0, 1), --ye);
            // Zero?
            if (!xc[0]) {
                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [
                    y.e = 0
                ];
                return y;
            }
            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise(y, xc, ye);
        };
        /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */ P.modulo = P.mod = function(y, b) {
            var q, s, x = this;
            y = new BigNumber(y, b);
            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if (!x.c || !y.s || y.c && !y.c[0]) {
                return new BigNumber(NaN);
            // Return x if y is Infinity or x is zero.
            } else if (!y.c || x.c && !x.c[0]) {
                return new BigNumber(x);
            }
            if (MODULO_MODE == 9) {
                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
            } else {
                q = div(x, y, 0, MODULO_MODE);
            }
            y = x.minus(q.times(y));
            // To match JavaScript %, ensure sign of zero is sign of dividend.
            if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
            return y;
        };
        /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */ P.multipliedBy = P.times = function(y, b) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
            // Either NaN, ±Infinity or ±0?
            if (!xc || !yc || !xc[0] || !yc[0]) {
                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                    y.c = y.e = y.s = null;
                } else {
                    y.s *= x.s;
                    // Return ±Infinity if either is ±Infinity.
                    if (!xc || !yc) {
                        y.c = y.e = null;
                    // Return ±0 if either is ±0.
                    } else {
                        y.c = [
                            0
                        ];
                        y.e = 0;
                    }
                }
                return y;
            }
            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;
            // Ensure xc points to longer array and xcL to its length.
            if (xcL < ycL) {
                zc = xc;
                xc = yc;
                yc = zc;
                i = xcL;
                xcL = ycL;
                ycL = i;
            }
            // Initialise the result array with zeros.
            for(i = xcL + ycL, zc = []; i--; zc.push(0));
            base = BASE;
            sqrtBase = SQRT_BASE;
            for(i = ycL; --i >= 0;){
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;
                for(k = xcL, j = i + k; j > i;){
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                    c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                    zc[j--] = xlo % base;
                }
                zc[j] = c;
            }
            if (c) {
                ++e;
            } else {
                zc.splice(0, 1);
            }
            return normalise(y, zc, e);
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */ P.negated = function() {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };
        /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */ P.plus = function(y, b) {
            var t, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.minus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Return ±Infinity if either ±Infinity.
                if (!xc || !yc) return new BigNumber(a / 0);
                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if (a = xe - ye) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }
                t.reverse();
                for(; a--; t.push(0));
                t.reverse();
            }
            a = xc.length;
            b = yc.length;
            // Point xc to the longer array, and b to the shorter length.
            if (a - b < 0) {
                t = yc;
                yc = xc;
                xc = t;
                b = a;
            }
            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for(a = 0; b;){
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }
            if (a) {
                xc = [
                    a
                ].concat(xc);
                ++ye;
            }
            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise(y, xc, ye);
        };
        /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.precision = P.sd = function(sd, rm) {
            var c, n, v, x = this;
            if (sd != null && sd !== !!sd) {
                intCheck(sd, 1, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), sd, rm);
            }
            if (!(c = x.c)) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;
            if (v = c[v]) {
                // Subtract the number of trailing zeros of the last element.
                for(; v % 10 == 0; v /= 10, n--);
                // Add the number of digits of the first element.
                for(v = c[0]; v >= 10; v /= 10, n++);
            }
            if (sd && x.e + 1 > n) n = x.e + 1;
            return n;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */ P.shiftedBy = function(k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times('1e' + k);
        };
        /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.squareRoot = P.sqrt = function() {
            var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber('0.5');
            // Negative/NaN/Infinity/zero?
            if (s !== 1 || !c || !c[0]) {
                return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            }
            // Initial estimate.
            s = Math.sqrt(+valueOf(x));
            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += '0';
                s = Math.sqrt(+n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                if (s == 1 / 0) {
                    n = '5e' + e;
                } else {
                    n = s.toExponential();
                    n = n.slice(0, n.indexOf('e') + 1) + e;
                }
                r = new BigNumber(n);
            } else {
                r = new BigNumber(s + '');
            }
            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;
                // Newton-Raphson iteration.
                for(;;){
                    t = r;
                    r = half.times(t.plus(div(x, t, dp, 1)));
                    if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if (r.e < e) --s;
                        n = n.slice(s - 3, s + 1);
                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if (n == '9999' || !rep && n == '4999') {
                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if (!rep) {
                                round(t, t.e + DECIMAL_PLACES + 2, 0);
                                if (t.times(t).eq(x)) {
                                    r = t;
                                    break;
                                }
                            }
                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {
                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                                // Truncate to the first rounding digit.
                                round(r, r.e + DECIMAL_PLACES + 2, 1);
                                m = !r.times(r).eq(x);
                            }
                            break;
                        }
                    }
                }
            }
            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toExponential = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp++;
            }
            return format(this, dp, rm, 1);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toFixed = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp = dp + this.e + 1;
            }
            return format(this, dp, rm);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */ P.toFormat = function(dp, rm, format) {
            var str, x = this;
            if (format == null) {
                if (dp != null && rm && typeof rm == 'object') {
                    format = rm;
                    rm = null;
                } else if (dp && typeof dp == 'object') {
                    format = dp;
                    dp = rm = null;
                } else {
                    format = FORMAT;
                }
            } else if (typeof format != 'object') {
                throw Error(bignumberError + 'Argument not an object: ' + format);
            }
            str = x.toFixed(dp, rm);
            if (x.c) {
                var i, arr = str.split('.'), g1 = +format.groupSize, g2 = +format.secondaryGroupSize, groupSeparator = format.groupSeparator || '', intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
                if (g2) {
                    i = g1;
                    g1 = g2;
                    g2 = i;
                    len -= i;
                }
                if (g1 > 0 && len > 0) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr(0, i);
                    for(; i < len; i += g1)intPart += groupSeparator + intDigits.substr(i, g1);
                    if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = '-' + intPart;
                }
                str = fractionPart ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + (format.fractionGroupSeparator || '')) : fractionPart) : intPart;
            }
            return (format.prefix || '') + str + (format.suffix || '');
        };
        /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */ P.toFraction = function(md) {
            var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
            if (md != null) {
                n = new BigNumber(md);
                // Throw if md is less than one or is not an integer, unless it is Infinity.
                if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
                    throw Error(bignumberError + 'Argument ' + (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
                }
            }
            if (!xc) return new BigNumber(x);
            d = new BigNumber(ONE);
            n1 = d0 = new BigNumber(ONE);
            d1 = n0 = new BigNumber(ONE);
            s = coeffToString(xc);
            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);
            // n0 = d1 = 0
            n0.c[0] = 0;
            for(;;){
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.comparedTo(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
            }
            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2;
            // Determine which fraction is closer to x, n0/d0 or n1/d1
            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [
                n1,
                d1
            ] : [
                n0,
                d0
            ];
            MAX_EXP = exp;
            return r;
        };
        /*
     * Return the value of this BigNumber converted to a number primitive.
     */ P.toNumber = function() {
            return +valueOf(this);
        };
        /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.toPrecision = function(sd, rm) {
            if (sd != null) intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
        };
        /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */ P.toString = function(b) {
            var str, n = this, s = n.s, e = n.e;
            // Infinity or NaN?
            if (e === null) {
                if (s) {
                    str = 'Infinity';
                    if (s < 0) str = '-' + str;
                } else {
                    str = 'NaN';
                }
            } else {
                if (b == null) {
                    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, '0');
                } else if (b === 10 && alphabetHasNormalDecimalDigits) {
                    n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                    str = toFixedPoint(coeffToString(n.c), n.e, '0');
                } else {
                    intCheck(b, 2, ALPHABET.length, 'Base');
                    str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
                }
                if (s < 0 && n.c[0]) str = '-' + str;
            }
            return str;
        };
        /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */ P.valueOf = P.toJSON = function() {
            return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null) BigNumber.set(configObject);
        return BigNumber;
    }
    // PRIVATE HELPER FUNCTIONS
    // These functions don't need access to variables,
    // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }
    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + '';
        for(; i < j;){
            s = a[i++] + '';
            z = LOG_BASE - s.length;
            for(; z--; s = '0' + s);
            r += s;
        }
        // Determine trailing zeros.
        for(j = r.length; r.charCodeAt(--j) === 48;);
        return r.slice(0, j + 1 || 1);
    }
    // Compare the value of BigNumbers x and y.
    function compare(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        // Either NaN?
        if (!i || !j) return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;
        // Signs differ?
        if (i != j) return i;
        a = i < 0;
        b = k == l;
        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        // Compare digit by digit.
        for(i = 0; i < j; i++)if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */ function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) {
            throw Error(bignumberError + (name || 'Argument') + (typeof n == 'number' ? n < min || n > max ? ' out of range: ' : ' not an integer: ' : ' not a primitive number: ') + String(n));
        }
    }
    // Assumes finite n.
    function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) + (e < 0 ? 'e' : 'e+') + e;
    }
    function toFixedPoint(str, e, z) {
        var len, zs;
        // Negative exponent?
        if (e < 0) {
            // Prepend zeros.
            for(zs = z + '.'; ++e; zs += z);
            str = zs + str;
        // Positive exponent
        } else {
            len = str.length;
            // Append zeros.
            if (++e > len) {
                for(zs = z, e -= len; --e; zs += z);
                str += zs;
            } else if (e < len) {
                str = str.slice(0, e) + '.' + str.slice(e);
            }
        }
        return str;
    }
    // EXPORT
    BigNumber = clone();
    BigNumber['default'] = BigNumber.BigNumber = BigNumber;
    // AMD.
    if (typeof define == 'function' && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return BigNumber;
        }(__turbopack_context__.r, exports, module));
    // Node.js and other environments that support module.exports.
    } else if (("TURBOPACK compile-time value", "object") != 'undefined' && module.exports) {
        module.exports = BigNumber;
    // Browser.
    } else {
        if (!globalObject) {
            globalObject = typeof self != 'undefined' && self ? self : window;
        }
        globalObject.BigNumber = BigNumber;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/energy-os-v0/node_modules/json-bigint/lib/stringify.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

var BigNumber = __turbopack_context__.r("[project]/energy-os-v0/node_modules/bignumber.js/bignumber.js [middleware-edge] (ecmascript)");
/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/ /*jslint evil: true, regexp: true */ /*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/ // Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
var JSON = module.exports;
(function() {
    'use strict';
    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
    }, rep;
    function quote(string) {
        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }
    function str(key, holder) {
        // Produce a string from holder[key].
        var i, k, v, length, mind = gap, partial, value = holder[key], isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));
        // If the value has a toJSON method, call it to obtain a replacement value.
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        // If we were called with a replacer function, then call the replacer to
        // obtain a replacement value.
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
        // What happens next depends on the value's type.
        switch(typeof value){
            case 'string':
                if (isBigNumber) {
                    return value;
                } else {
                    return quote(value);
                }
            case 'number':
                // JSON numbers must be finite. Encode non-finite numbers as null.
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
            case 'null':
            case 'bigint':
                // If the value is a boolean or null, convert it to a string. Note:
                // typeof null does not produce 'null'. The case is included here in
                // the remote chance that this gets fixed someday.
                return String(value);
            // If the type is 'object', we might be dealing with an object or an array or
            // null.
            case 'object':
                // Due to a specification blunder in ECMAScript, typeof null is 'object',
                // so watch out for that case.
                if (!value) {
                    return 'null';
                }
                // Make an array to hold the partial results of stringifying this object value.
                gap += indent;
                partial = [];
                // Is the value an array?
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    // The value is an array. Stringify every element. Use null as a placeholder
                    // for non-JSON values.
                    length = value.length;
                    for(i = 0; i < length; i += 1){
                        partial[i] = str(i, value) || 'null';
                    }
                    // Join all of the elements together, separated with commas, and wrap them in
                    // brackets.
                    v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }
                // If the replacer is an array, use it to select the members to be stringified.
                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for(i = 0; i < length; i += 1){
                        if (typeof rep[i] === 'string') {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {
                    // Otherwise, iterate through all of the keys in the object.
                    Object.keys(value).forEach(function(k) {
                        var v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    });
                }
                // Join all of the member texts together, separated with commas,
                // and wrap them in braces.
                v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }
    // If the JSON object does not yet have a stringify method, give it one.
    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function(value, replacer, space) {
            // The stringify method takes a value and an optional replacer, and an optional
            // space parameter, and returns a JSON text. The replacer can be a function
            // that can replace values, or an array of strings that will select the keys.
            // A default replacer method can be provided. Use of the space parameter can
            // produce text that is more easily readable.
            var i;
            gap = '';
            indent = '';
            // If the space parameter is a number, make an indent string containing that
            // many spaces.
            if (typeof space === 'number') {
                for(i = 0; i < space; i += 1){
                    indent += ' ';
                }
            // If the space parameter is a string, it will be used as the indent string.
            } else if (typeof space === 'string') {
                indent = space;
            }
            // If there is a replacer, it must be a function or an array.
            // Otherwise, throw an error.
            rep = replacer;
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
            // Make a fake root object containing our value under the key of ''.
            // Return the result of stringifying the value.
            return str('', {
                '': value
            });
        };
    }
})();
}),
"[project]/energy-os-v0/node_modules/json-bigint/lib/parse.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

var BigNumber = null;
// regexpxs extracted from
// (c) BSD-3-Clause
// https://github.com/fastify/secure-json-parse/graphs/contributors and https://github.com/hapijs/bourne/graphs/contributors
const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
/*
    json_parse.js
    2012-06-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    This file creates a json_parse function.
    During create you can (optionally) specify some behavioural switches

        require('json-bigint')(options)

            The optional options parameter holds switches that drive certain
            aspects of the parsing process:
            * options.strict = true will warn about duplicate-key usage in the json.
              The default (strict = false) will silently ignore those and overwrite
              values for keys that are in duplicate use.

    The resulting function follows this signature:
        json_parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = json_parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/ /*members "", "\"", "\/", "\\", at, b, call, charAt, f, fromCharCode,
    hasOwnProperty, message, n, name, prototype, push, r, t, text
*/ var json_parse = function(options) {
    'use strict';
    // This is a function that can parse a JSON text, producing a JavaScript
    // data structure. It is a simple, recursive descent parser. It does not use
    // eval or regular expressions, so it can be used as a model for implementing
    // a JSON parser in other languages.
    // We are defining the function inside of another function to avoid creating
    // global variables.
    // Default options one can override by passing options to the parse()
    var _options = {
        strict: false,
        storeAsString: false,
        alwaysParseAsBig: false,
        useNativeBigInt: false,
        protoAction: 'error',
        constructorAction: 'error'
    };
    // If there are options, then use them to override the default _options
    if (options !== undefined && options !== null) {
        if (options.strict === true) {
            _options.strict = true;
        }
        if (options.storeAsString === true) {
            _options.storeAsString = true;
        }
        _options.alwaysParseAsBig = options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
        _options.useNativeBigInt = options.useNativeBigInt === true ? options.useNativeBigInt : false;
        if (typeof options.constructorAction !== 'undefined') {
            if (options.constructorAction === 'error' || options.constructorAction === 'ignore' || options.constructorAction === 'preserve') {
                _options.constructorAction = options.constructorAction;
            } else {
                throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`);
            }
        }
        if (typeof options.protoAction !== 'undefined') {
            if (options.protoAction === 'error' || options.protoAction === 'ignore' || options.protoAction === 'preserve') {
                _options.protoAction = options.protoAction;
            } else {
                throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`);
            }
        }
    }
    var at, ch, escapee = {
        '"': '"',
        '\\': '\\',
        '/': '/',
        b: '\b',
        f: '\f',
        n: '\n',
        r: '\r',
        t: '\t'
    }, text, error = function(m) {
        // Call error when something is wrong.
        throw {
            name: 'SyntaxError',
            message: m,
            at: at,
            text: text
        };
    }, next = function(c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        // Get the next character. When there are no more characters,
        // return the empty string.
        ch = text.charAt(at);
        at += 1;
        return ch;
    }, number = function() {
        // Parse a number value.
        var number, string = '';
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while(ch >= '0' && ch <= '9'){
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while(next() && ch >= '0' && ch <= '9'){
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while(ch >= '0' && ch <= '9'){
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error('Bad number');
        } else {
            if (BigNumber == null) BigNumber = __turbopack_context__.r("[project]/energy-os-v0/node_modules/bignumber.js/bignumber.js [middleware-edge] (ecmascript)");
            //if (number > 9007199254740992 || number < -9007199254740992)
            // Bignumber has stricter check: everything with length > 15 digits disallowed
            if (string.length > 15) return _options.storeAsString ? string : _options.useNativeBigInt ? BigInt(string) : new BigNumber(string);
            else return !_options.alwaysParseAsBig ? number : _options.useNativeBigInt ? BigInt(number) : new BigNumber(number);
        }
    }, string = function() {
        // Parse a string value.
        var hex, i, string = '', uffff;
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            var startAt = at;
            while(next()){
                if (ch === '"') {
                    if (at - 1 > startAt) string += text.substring(startAt, at - 1);
                    next();
                    return string;
                }
                if (ch === '\\') {
                    if (at - 1 > startAt) string += text.substring(startAt, at - 1);
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for(i = 0; i < 4; i += 1){
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                    startAt = at;
                }
            }
        }
        error('Bad string');
    }, white = function() {
        // Skip whitespace.
        while(ch && ch <= ' '){
            next();
        }
    }, word = function() {
        // true, false, or null.
        switch(ch){
            case 't':
                next('t');
                next('r');
                next('u');
                next('e');
                return true;
            case 'f':
                next('f');
                next('a');
                next('l');
                next('s');
                next('e');
                return false;
            case 'n':
                next('n');
                next('u');
                next('l');
                next('l');
                return null;
        }
        error("Unexpected '" + ch + "'");
    }, value, array = function() {
        // Parse an array value.
        var array = [];
        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array; // empty array
            }
            while(ch){
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error('Bad array');
    }, object = function() {
        // Parse an object value.
        var key, object = Object.create(null);
        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object; // empty object
            }
            while(ch){
                key = string();
                white();
                next(':');
                if (_options.strict === true && Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                if (suspectProtoRx.test(key) === true) {
                    if (_options.protoAction === 'error') {
                        error('Object contains forbidden prototype property');
                    } else if (_options.protoAction === 'ignore') {
                        value();
                    } else {
                        object[key] = value();
                    }
                } else if (suspectConstructorRx.test(key) === true) {
                    if (_options.constructorAction === 'error') {
                        error('Object contains forbidden constructor property');
                    } else if (_options.constructorAction === 'ignore') {
                        value();
                    } else {
                        object[key] = value();
                    }
                } else {
                    object[key] = value();
                }
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error('Bad object');
    };
    value = function() {
        // Parse a JSON value. It could be an object, an array, a string, a number,
        // or a word.
        white();
        switch(ch){
            case '{':
                return object();
            case '[':
                return array();
            case '"':
                return string();
            case '-':
                return number();
            default:
                return ch >= '0' && ch <= '9' ? number() : word();
        }
    };
    // Return the json_parse function. It will have access to all of the above
    // functions and variables.
    return function(source, reviver) {
        var result;
        text = source + '';
        at = 0;
        ch = ' ';
        result = value();
        white();
        if (ch) {
            error('Syntax error');
        }
        // If there is a reviver function, we recursively walk the new structure,
        // passing each name/value pair to the reviver function for possible
        // transformation, starting with a temporary root object that holds the result
        // in an empty key. If there is not a reviver function, we simply return the
        // result.
        return typeof reviver === 'function' ? function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
                Object.keys(value).forEach(function(k) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                });
            }
            return reviver.call(holder, key, value);
        }({
            '': result
        }, '') : result;
    };
};
module.exports = json_parse;
}),
"[project]/energy-os-v0/node_modules/json-bigint/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

var json_stringify = __turbopack_context__.r("[project]/energy-os-v0/node_modules/json-bigint/lib/stringify.js [middleware-edge] (ecmascript)").stringify;
var json_parse = __turbopack_context__.r("[project]/energy-os-v0/node_modules/json-bigint/lib/parse.js [middleware-edge] (ecmascript)");
module.exports = function(options) {
    return {
        parse: json_parse(options),
        stringify: json_stringify
    };
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;
}),
"[project]/energy-os-v0/node_modules/google-logging-utils/build/src/colours.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Colours = void 0;
/**
 * Handles figuring out if we can use ANSI colours and handing out the escape codes.
 *
 * This is for package-internal use only, and may change at any time.
 *
 * @private
 * @internal
 */ class Colours {
    /**
     * @param stream The stream (e.g. process.stderr)
     * @returns true if the stream should have colourization enabled
     */ static isEnabled(stream) {
        return stream && // May happen in browsers.
        stream.isTTY && (typeof stream.getColorDepth === 'function' ? stream.getColorDepth() > 2 : true);
    }
    static refresh() {
        Colours.enabled = Colours.isEnabled(process === null || process === void 0 ? void 0 : process.stderr);
        if (!this.enabled) {
            Colours.reset = '';
            Colours.bright = '';
            Colours.dim = '';
            Colours.red = '';
            Colours.green = '';
            Colours.yellow = '';
            Colours.blue = '';
            Colours.magenta = '';
            Colours.cyan = '';
            Colours.white = '';
            Colours.grey = '';
        } else {
            Colours.reset = '\u001b[0m';
            Colours.bright = '\u001b[1m';
            Colours.dim = '\u001b[2m';
            Colours.red = '\u001b[31m';
            Colours.green = '\u001b[32m';
            Colours.yellow = '\u001b[33m';
            Colours.blue = '\u001b[34m';
            Colours.magenta = '\u001b[35m';
            Colours.cyan = '\u001b[36m';
            Colours.white = '\u001b[37m';
            Colours.grey = '\u001b[90m';
        }
    }
}
exports.Colours = Colours;
Colours.enabled = false;
Colours.reset = '';
Colours.bright = '';
Colours.dim = '';
Colours.red = '';
Colours.green = '';
Colours.yellow = '';
Colours.blue = '';
Colours.magenta = '';
Colours.cyan = '';
Colours.white = '';
Colours.grey = '';
Colours.refresh(); //# sourceMappingURL=colours.js.map
}),
"[project]/energy-os-v0/node_modules/google-logging-utils/build/src/logging-utils.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2021-2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.env = exports.DebugLogBackendBase = exports.placeholder = exports.AdhocDebugLogger = exports.LogSeverity = void 0;
exports.getNodeBackend = getNodeBackend;
exports.getDebugBackend = getDebugBackend;
exports.getStructuredBackend = getStructuredBackend;
exports.setBackend = setBackend;
exports.log = log;
const events_1 = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const process = __importStar(__turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'process', ecmascript)"));
const util = __importStar(__turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)"));
const colours_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/google-logging-utils/build/src/colours.js [middleware-edge] (ecmascript)");
// Some functions (as noted) are based on the Node standard library, from
// the following file:
//
// https://github.com/nodejs/node/blob/main/lib/internal/util/debuglog.js
/**
 * This module defines an ad-hoc debug logger for Google Cloud Platform
 * client libraries in Node. An ad-hoc debug logger is a tool which lets
 * users use an external, unified interface (in this case, environment
 * variables) to determine what logging they want to see at runtime. This
 * isn't necessarily fed into the console, but is meant to be under the
 * control of the user. The kind of logging that will be produced by this
 * is more like "call retry happened", not "events you'd want to record
 * in Cloud Logger".
 *
 * More for Googlers implementing libraries with it:
 * go/cloud-client-logging-design
 */ /**
 * Possible log levels. These are a subset of Cloud Observability levels.
 * https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#LogSeverity
 */ var LogSeverity;
(function(LogSeverity) {
    LogSeverity["DEFAULT"] = "DEFAULT";
    LogSeverity["DEBUG"] = "DEBUG";
    LogSeverity["INFO"] = "INFO";
    LogSeverity["WARNING"] = "WARNING";
    LogSeverity["ERROR"] = "ERROR";
})(LogSeverity || (exports.LogSeverity = LogSeverity = {}));
/**
 * Our logger instance. This actually contains the meat of dealing
 * with log lines, including EventEmitter. This contains the function
 * that will be passed back to users of the package.
 */ class AdhocDebugLogger extends events_1.EventEmitter {
    /**
     * @param upstream The backend will pass a function that will be
     *   called whenever our logger function is invoked.
     */ constructor(namespace, upstream){
        super();
        this.namespace = namespace;
        this.upstream = upstream;
        this.func = Object.assign(this.invoke.bind(this), {
            // Also add an instance pointer back to us.
            instance: this,
            // And pull over the EventEmitter functionality.
            on: (event, listener)=>this.on(event, listener)
        });
        // Convenience methods for log levels.
        this.func.debug = (...args)=>this.invokeSeverity(LogSeverity.DEBUG, ...args);
        this.func.info = (...args)=>this.invokeSeverity(LogSeverity.INFO, ...args);
        this.func.warn = (...args)=>this.invokeSeverity(LogSeverity.WARNING, ...args);
        this.func.error = (...args)=>this.invokeSeverity(LogSeverity.ERROR, ...args);
        this.func.sublog = (namespace)=>log(namespace, this.func);
    }
    invoke(fields, ...args) {
        // Push out any upstream logger first.
        if (this.upstream) {
            try {
                this.upstream(fields, ...args);
            } catch (e) {
            // Swallow exceptions to avoid interfering with other logging.
            }
        }
        // Emit sink events.
        try {
            this.emit('log', fields, args);
        } catch (e) {
        // Swallow exceptions to avoid interfering with other logging.
        }
    }
    invokeSeverity(severity, ...args) {
        this.invoke({
            severity
        }, ...args);
    }
}
exports.AdhocDebugLogger = AdhocDebugLogger;
/**
 * This can be used in place of a real logger while waiting for Promises or disabling logging.
 */ exports.placeholder = new AdhocDebugLogger('', ()=>{}).func;
/**
 * The base class for debug logging backends. It's possible to use this, but the
 * same non-guarantees above still apply (unstable interface, etc).
 *
 * @private
 * @internal
 */ class DebugLogBackendBase {
    constructor(){
        var _a;
        this.cached = new Map();
        this.filters = [];
        this.filtersSet = false;
        // Look for the Node config variable for what systems to enable. We'll store
        // these for the log method below, which will call setFilters() once.
        let nodeFlag = (_a = process.env[exports.env.nodeEnables]) !== null && _a !== void 0 ? _a : '*';
        if (nodeFlag === 'all') {
            nodeFlag = '*';
        }
        this.filters = nodeFlag.split(',');
    }
    log(namespace, fields, ...args) {
        try {
            if (!this.filtersSet) {
                this.setFilters();
                this.filtersSet = true;
            }
            let logger = this.cached.get(namespace);
            if (!logger) {
                logger = this.makeLogger(namespace);
                this.cached.set(namespace, logger);
            }
            logger(fields, ...args);
        } catch (e) {
            // Silently ignore all errors; we don't want them to interfere with
            // the user's running app.
            // e;
            console.error(e);
        }
    }
}
exports.DebugLogBackendBase = DebugLogBackendBase;
// The basic backend. This one definitely works, but it's less feature-filled.
//
// Rather than using util.debuglog, this implements the same basic logic directly.
// The reason for this decision is that debuglog checks the value of the
// NODE_DEBUG environment variable before any user code runs; we therefore
// can't pipe our own enables into it (and util.debuglog will never print unless
// the user duplicates it into NODE_DEBUG, which isn't reasonable).
//
class NodeBackend extends DebugLogBackendBase {
    constructor(){
        super(...arguments);
        // Default to allowing all systems, since we gate earlier based on whether the
        // variable is empty.
        this.enabledRegexp = /.*/g;
    }
    isEnabled(namespace) {
        return this.enabledRegexp.test(namespace);
    }
    makeLogger(namespace) {
        if (!this.enabledRegexp.test(namespace)) {
            return ()=>{};
        }
        return (fields, ...args)=>{
            var _a;
            // TODO: `fields` needs to be turned into a string here, one way or another.
            const nscolour = `${colours_1.Colours.green}${namespace}${colours_1.Colours.reset}`;
            const pid = `${colours_1.Colours.yellow}${process.pid}${colours_1.Colours.reset}`;
            let level;
            switch(fields.severity){
                case LogSeverity.ERROR:
                    level = `${colours_1.Colours.red}${fields.severity}${colours_1.Colours.reset}`;
                    break;
                case LogSeverity.INFO:
                    level = `${colours_1.Colours.magenta}${fields.severity}${colours_1.Colours.reset}`;
                    break;
                case LogSeverity.WARNING:
                    level = `${colours_1.Colours.yellow}${fields.severity}${colours_1.Colours.reset}`;
                    break;
                default:
                    level = (_a = fields.severity) !== null && _a !== void 0 ? _a : LogSeverity.DEFAULT;
                    break;
            }
            const msg = util.formatWithOptions({
                colors: colours_1.Colours.enabled
            }, ...args);
            const filteredFields = Object.assign({}, fields);
            delete filteredFields.severity;
            const fieldsJson = Object.getOwnPropertyNames(filteredFields).length ? JSON.stringify(filteredFields) : '';
            const fieldsColour = fieldsJson ? `${colours_1.Colours.grey}${fieldsJson}${colours_1.Colours.reset}` : '';
            console.error('%s [%s|%s] %s%s', pid, nscolour, level, msg, fieldsJson ? ` ${fieldsColour}` : '');
        };
    }
    // Regexp patterns below are from here:
    // https://github.com/nodejs/node/blob/c0aebed4b3395bd65d54b18d1fd00f071002ac20/lib/internal/util/debuglog.js#L36
    setFilters() {
        const totalFilters = this.filters.join(',');
        const regexp = totalFilters.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/\*/g, '.*').replace(/,/g, '$|^');
        this.enabledRegexp = new RegExp(`^${regexp}$`, 'i');
    }
}
/**
 * @returns A backend based on Node util.debuglog; this is the default.
 */ function getNodeBackend() {
    return new NodeBackend();
}
class DebugBackend extends DebugLogBackendBase {
    constructor(pkg){
        super();
        this.debugPkg = pkg;
    }
    makeLogger(namespace) {
        const debugLogger = this.debugPkg(namespace);
        return (fields, ...args)=>{
            // TODO: `fields` needs to be turned into a string here.
            debugLogger(args[0], ...args.slice(1));
        };
    }
    setFilters() {
        var _a;
        const existingFilters = (_a = process.env['NODE_DEBUG']) !== null && _a !== void 0 ? _a : '';
        process.env['NODE_DEBUG'] = `${existingFilters}${existingFilters ? ',' : ''}${this.filters.join(',')}`;
    }
}
/**
 * Creates a "debug" package backend. The user must call require('debug') and pass
 * the resulting object to this function.
 *
 * ```
 *  setBackend(getDebugBackend(require('debug')))
 * ```
 *
 * https://www.npmjs.com/package/debug
 *
 * Note: Google does not explicitly endorse or recommend this package; it's just
 * being provided as an option.
 *
 * @returns A backend based on the npm "debug" package.
 */ function getDebugBackend(debugPkg) {
    return new DebugBackend(debugPkg);
}
/**
 * This pretty much works like the Node logger, but it outputs structured
 * logging JSON matching Google Cloud's ingestion specs. Rather than handling
 * its own output, it wraps another backend. The passed backend must be a subclass
 * of `DebugLogBackendBase` (any of the backends exposed by this package will work).
 */ class StructuredBackend extends DebugLogBackendBase {
    constructor(upstream){
        var _a;
        super();
        this.upstream = (_a = upstream) !== null && _a !== void 0 ? _a : undefined;
    }
    makeLogger(namespace) {
        var _a;
        const debugLogger = (_a = this.upstream) === null || _a === void 0 ? void 0 : _a.makeLogger(namespace);
        return (fields, ...args)=>{
            var _a;
            const severity = (_a = fields.severity) !== null && _a !== void 0 ? _a : LogSeverity.INFO;
            const json = Object.assign({
                severity,
                message: util.format(...args)
            }, fields);
            const jsonString = JSON.stringify(json);
            if (debugLogger) {
                debugLogger(fields, jsonString);
            } else {
                console.log('%s', jsonString);
            }
        };
    }
    setFilters() {
        var _a;
        (_a = this.upstream) === null || _a === void 0 ? void 0 : _a.setFilters();
    }
}
/**
 * Creates a "structured logging" backend. This pretty much works like the
 * Node logger, but it outputs structured logging JSON matching Google
 * Cloud's ingestion specs instead of plain text.
 *
 * ```
 *  setBackend(getStructuredBackend())
 * ```
 *
 * @param upstream If you want to use something besides the Node backend to
 *   write the actual log lines into, pass that here.
 * @returns A backend based on Google Cloud structured logging.
 */ function getStructuredBackend(upstream) {
    return new StructuredBackend(upstream);
}
/**
 * The environment variables that we standardized on, for all ad-hoc logging.
 */ exports.env = {
    /**
     * Filter wildcards specific to the Node syntax, and similar to the built-in
     * utils.debuglog() environment variable. If missing, disables logging.
     */ nodeEnables: 'GOOGLE_SDK_NODE_LOGGING'
};
// Keep a copy of all namespaced loggers so users can reliably .on() them.
// Note that these cached functions will need to deal with changes in the backend.
const loggerCache = new Map();
// Our current global backend. This might be:
let cachedBackend = undefined;
/**
 * Set the backend to use for our log output.
 * - A backend object
 * - null to disable logging
 * - undefined for "nothing yet", defaults to the Node backend
 *
 * @param backend Results from one of the get*Backend() functions.
 */ function setBackend(backend) {
    cachedBackend = backend;
    loggerCache.clear();
}
/**
 * Creates a logging function. Multiple calls to this with the same namespace
 * will produce the same logger, with the same event emitter hooks.
 *
 * Namespaces can be a simple string ("system" name), or a qualified string
 * (system:subsystem), which can be used for filtering, or for "system:*".
 *
 * @param namespace The namespace, a descriptive text string.
 * @returns A function you can call that works similar to console.log().
 */ function log(namespace, parent) {
    // If the enable environment variable isn't set, do nothing. The user
    // can still choose to set a backend of their choice using the manual
    // `setBackend()`.
    if (!cachedBackend) {
        const enablesFlag = process.env[exports.env.nodeEnables];
        if (!enablesFlag) {
            return exports.placeholder;
        }
    }
    // This might happen mostly if the typings are dropped in a user's code,
    // or if they're calling from JavaScript.
    if (!namespace) {
        return exports.placeholder;
    }
    // Handle sub-loggers.
    if (parent) {
        namespace = `${parent.instance.namespace}:${namespace}`;
    }
    // Reuse loggers so things like event sinks are persistent.
    const existing = loggerCache.get(namespace);
    if (existing) {
        return existing.func;
    }
    // Do we have a backend yet?
    if (cachedBackend === null) {
        // Explicitly disabled.
        return exports.placeholder;
    } else if (cachedBackend === undefined) {
        // One hasn't been made yet, so default to Node.
        cachedBackend = getNodeBackend();
    }
    // The logger is further wrapped so we can handle the backend changing out.
    const logger = (()=>{
        let previousBackend = undefined;
        const newLogger = new AdhocDebugLogger(namespace, (fields, ...args)=>{
            if (previousBackend !== cachedBackend) {
                // Did the user pass a custom backend?
                if (cachedBackend === null) {
                    // Explicitly disabled.
                    return;
                } else if (cachedBackend === undefined) {
                    // One hasn't been made yet, so default to Node.
                    cachedBackend = getNodeBackend();
                }
                previousBackend = cachedBackend;
            }
            cachedBackend === null || cachedBackend === void 0 ? void 0 : cachedBackend.log(namespace, fields, ...args);
        });
        return newLogger;
    })();
    loggerCache.set(namespace, logger);
    return logger.func;
} //# sourceMappingURL=logging-utils.js.map
}),
"[project]/energy-os-v0/node_modules/google-logging-utils/build/src/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/google-logging-utils/build/src/logging-utils.js [middleware-edge] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/snappy/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createRequire } = (()=>{
    const e = new Error("Cannot find module 'node:module': Unsupported external type Url for commonjs reference");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
require = createRequire(("TURBOPACK compile-time value", "/ROOT/energy-os-v0/node_modules/snappy/index.js"));
const { readFileSync } = (()=>{
    const e = new Error("Cannot find module 'node:fs': Unsupported external type Url for commonjs reference");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
let nativeBinding = null;
const loadErrors = [], isMusl = ()=>{
    let e = !1;
    return process.platform === "linux" && (e = isMuslFromFilesystem(), e === null && (e = isMuslFromReport()), e === null && (e = isMuslFromChildProcess())), e;
}, isFileMusl = (e)=>e.includes("libc.musl-") || e.includes("ld-musl-"), isMuslFromFilesystem = ()=>{
    try {
        return readFileSync("/usr/bin/ldd", "utf-8").includes("musl");
    } catch  {
        return null;
    }
}, isMuslFromReport = ()=>{
    let e = null;
    return typeof process.report?.getReport == "function" && (process.report.excludeNetwork = !0, e = process.report.getReport()), e ? e.header && e.header.glibcVersionRuntime ? !1 : !!(Array.isArray(e.sharedObjects) && e.sharedObjects.some(isFileMusl)) : null;
}, isMuslFromChildProcess = ()=>{
    try {
        return __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'child_process', ecmascript)").execSync("ldd --version", {
            encoding: "utf8"
        }).includes("musl");
    } catch  {
        return !1;
    }
};
function requireNative() {
    if (process.env.NAPI_RS_NATIVE_LIBRARY_PATH) try {
        nativeBinding = (()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
    } catch (e) {
        loadErrors.push(e);
    }
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else loadErrors.push(new Error(`Unsupported OS: ${process.platform}, architecture: ${process.arch}`));
}
if (nativeBinding = requireNative(), !nativeBinding || process.env.NAPI_RS_FORCE_WASI) {
    try {
        nativeBinding = (()=>{
            const e = new Error("Cannot find module './snappy.wasi.cjs'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
    } catch (e) {
        process.env.NAPI_RS_FORCE_WASI && loadErrors.push(e);
    }
    if (!nativeBinding) try {
        nativeBinding = (()=>{
            const e = new Error("Cannot find module '@napi-rs/snappy-wasm32-wasi'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
    } catch (e) {
        process.env.NAPI_RS_FORCE_WASI && loadErrors.push(e);
    }
}
if (!nativeBinding) throw loadErrors.length > 0 ? new Error("Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.", {
    cause: loadErrors
}) : new Error("Failed to load native binding");
module.exports = nativeBinding, module.exports.compress = nativeBinding.compress, module.exports.compressSync = nativeBinding.compressSync, module.exports.uncompress = nativeBinding.uncompress, module.exports.uncompressSync = nativeBinding.uncompressSync;
}),
"[project]/energy-os-v0/node_modules/smart-buffer/build/utils.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const buffer_1 = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
/**
 * Error strings
 */ const ERRORS = {
    INVALID_ENCODING: 'Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.',
    INVALID_SMARTBUFFER_SIZE: 'Invalid size provided. Size must be a valid integer greater than zero.',
    INVALID_SMARTBUFFER_BUFFER: 'Invalid Buffer provided in SmartBufferOptions.',
    INVALID_SMARTBUFFER_OBJECT: 'Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.',
    INVALID_OFFSET: 'An invalid offset value was provided.',
    INVALID_OFFSET_NON_NUMBER: 'An invalid offset value was provided. A numeric value is required.',
    INVALID_LENGTH: 'An invalid length value was provided.',
    INVALID_LENGTH_NON_NUMBER: 'An invalid length value was provived. A numeric value is required.',
    INVALID_TARGET_OFFSET: 'Target offset is beyond the bounds of the internal SmartBuffer data.',
    INVALID_TARGET_LENGTH: 'Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.',
    INVALID_READ_BEYOND_BOUNDS: 'Attempted to read beyond the bounds of the managed data.',
    INVALID_WRITE_BEYOND_BOUNDS: 'Attempted to write beyond the bounds of the managed data.'
};
exports.ERRORS = ERRORS;
/**
 * Checks if a given encoding is a valid Buffer encoding. (Throws an exception if check fails)
 *
 * @param { String } encoding The encoding string to check.
 */ function checkEncoding(encoding) {
    if (!buffer_1.Buffer.isEncoding(encoding)) {
        throw new Error(ERRORS.INVALID_ENCODING);
    }
}
exports.checkEncoding = checkEncoding;
/**
 * Checks if a given number is a finite integer. (Throws an exception if check fails)
 *
 * @param { Number } value The number value to check.
 */ function isFiniteInteger(value) {
    return typeof value === 'number' && isFinite(value) && isInteger(value);
}
exports.isFiniteInteger = isFiniteInteger;
/**
 * Checks if an offset/length value is valid. (Throws an exception if check fails)
 *
 * @param value The value to check.
 * @param offset True if checking an offset, false if checking a length.
 */ function checkOffsetOrLengthValue(value, offset) {
    if (typeof value === 'number') {
        // Check for non finite/non integers
        if (!isFiniteInteger(value) || value < 0) {
            throw new Error(offset ? ERRORS.INVALID_OFFSET : ERRORS.INVALID_LENGTH);
        }
    } else {
        throw new Error(offset ? ERRORS.INVALID_OFFSET_NON_NUMBER : ERRORS.INVALID_LENGTH_NON_NUMBER);
    }
}
/**
 * Checks if a length value is valid. (Throws an exception if check fails)
 *
 * @param { Number } length The value to check.
 */ function checkLengthValue(length) {
    checkOffsetOrLengthValue(length, false);
}
exports.checkLengthValue = checkLengthValue;
/**
 * Checks if a offset value is valid. (Throws an exception if check fails)
 *
 * @param { Number } offset The value to check.
 */ function checkOffsetValue(offset) {
    checkOffsetOrLengthValue(offset, true);
}
exports.checkOffsetValue = checkOffsetValue;
/**
 * Checks if a target offset value is out of bounds. (Throws an exception if check fails)
 *
 * @param { Number } offset The offset value to check.
 * @param { SmartBuffer } buff The SmartBuffer instance to check against.
 */ function checkTargetOffset(offset, buff) {
    if (offset < 0 || offset > buff.length) {
        throw new Error(ERRORS.INVALID_TARGET_OFFSET);
    }
}
exports.checkTargetOffset = checkTargetOffset;
/**
 * Determines whether a given number is a integer.
 * @param value The number to check.
 */ function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * Throws if Node.js version is too low to support bigint
 */ function bigIntAndBufferInt64Check(bufferMethod) {
    if (typeof BigInt === 'undefined') {
        throw new Error('Platform does not support JS BigInt type.');
    }
    if (typeof buffer_1.Buffer.prototype[bufferMethod] === 'undefined') {
        throw new Error(`Platform does not support Buffer.prototype.${bufferMethod}.`);
    }
}
exports.bigIntAndBufferInt64Check = bigIntAndBufferInt64Check; //# sourceMappingURL=utils.js.map
}),
"[project]/energy-os-v0/node_modules/smart-buffer/build/smartbuffer.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/smart-buffer/build/utils.js [middleware-edge] (ecmascript)");
// The default Buffer size if one is not provided.
const DEFAULT_SMARTBUFFER_SIZE = 4096;
// The default string encoding to use for reading/writing strings.
const DEFAULT_SMARTBUFFER_ENCODING = 'utf8';
class SmartBuffer {
    /**
     * Creates a new SmartBuffer instance.
     *
     * @param options { SmartBufferOptions } The SmartBufferOptions to apply to this instance.
     */ constructor(options){
        this.length = 0;
        this._encoding = DEFAULT_SMARTBUFFER_ENCODING;
        this._writeOffset = 0;
        this._readOffset = 0;
        if (SmartBuffer.isSmartBufferOptions(options)) {
            // Checks for encoding
            if (options.encoding) {
                utils_1.checkEncoding(options.encoding);
                this._encoding = options.encoding;
            }
            // Checks for initial size length
            if (options.size) {
                if (utils_1.isFiniteInteger(options.size) && options.size > 0) {
                    this._buff = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(options.size);
                } else {
                    throw new Error(utils_1.ERRORS.INVALID_SMARTBUFFER_SIZE);
                }
            // Check for initial Buffer
            } else if (options.buff) {
                if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(options.buff)) {
                    this._buff = options.buff;
                    this.length = options.buff.length;
                } else {
                    throw new Error(utils_1.ERRORS.INVALID_SMARTBUFFER_BUFFER);
                }
            } else {
                this._buff = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(DEFAULT_SMARTBUFFER_SIZE);
            }
        } else {
            // If something was passed but it's not a SmartBufferOptions object
            if (typeof options !== 'undefined') {
                throw new Error(utils_1.ERRORS.INVALID_SMARTBUFFER_OBJECT);
            }
            // Otherwise default to sane options
            this._buff = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(DEFAULT_SMARTBUFFER_SIZE);
        }
    }
    /**
     * Creates a new SmartBuffer instance with the provided internal Buffer size and optional encoding.
     *
     * @param size { Number } The size of the internal Buffer.
     * @param encoding { String } The BufferEncoding to use for strings.
     *
     * @return { SmartBuffer }
     */ static fromSize(size, encoding) {
        return new this({
            size: size,
            encoding: encoding
        });
    }
    /**
     * Creates a new SmartBuffer instance with the provided Buffer and optional encoding.
     *
     * @param buffer { Buffer } The Buffer to use as the internal Buffer value.
     * @param encoding { String } The BufferEncoding to use for strings.
     *
     * @return { SmartBuffer }
     */ static fromBuffer(buff, encoding) {
        return new this({
            buff: buff,
            encoding: encoding
        });
    }
    /**
     * Creates a new SmartBuffer instance with the provided SmartBufferOptions options.
     *
     * @param options { SmartBufferOptions } The options to use when creating the SmartBuffer instance.
     */ static fromOptions(options) {
        return new this(options);
    }
    /**
     * Type checking function that determines if an object is a SmartBufferOptions object.
     */ static isSmartBufferOptions(options) {
        const castOptions = options;
        return castOptions && (castOptions.encoding !== undefined || castOptions.size !== undefined || castOptions.buff !== undefined);
    }
    // Signed integers
    /**
     * Reads an Int8 value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readInt8(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readInt8, 1, offset);
    }
    /**
     * Reads an Int16BE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readInt16BE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readInt16BE, 2, offset);
    }
    /**
     * Reads an Int16LE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readInt16LE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readInt16LE, 2, offset);
    }
    /**
     * Reads an Int32BE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readInt32BE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readInt32BE, 4, offset);
    }
    /**
     * Reads an Int32LE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readInt32LE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readInt32LE, 4, offset);
    }
    /**
     * Reads a BigInt64BE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { BigInt }
     */ readBigInt64BE(offset) {
        utils_1.bigIntAndBufferInt64Check('readBigInt64BE');
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readBigInt64BE, 8, offset);
    }
    /**
     * Reads a BigInt64LE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { BigInt }
     */ readBigInt64LE(offset) {
        utils_1.bigIntAndBufferInt64Check('readBigInt64LE');
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readBigInt64LE, 8, offset);
    }
    /**
     * Writes an Int8 value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeInt8(value, offset) {
        this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt8, 1, value, offset);
        return this;
    }
    /**
     * Inserts an Int8 value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertInt8(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt8, 1, value, offset);
    }
    /**
     * Writes an Int16BE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeInt16BE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt16BE, 2, value, offset);
    }
    /**
     * Inserts an Int16BE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertInt16BE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt16BE, 2, value, offset);
    }
    /**
     * Writes an Int16LE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeInt16LE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt16LE, 2, value, offset);
    }
    /**
     * Inserts an Int16LE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertInt16LE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt16LE, 2, value, offset);
    }
    /**
     * Writes an Int32BE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeInt32BE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt32BE, 4, value, offset);
    }
    /**
     * Inserts an Int32BE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertInt32BE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt32BE, 4, value, offset);
    }
    /**
     * Writes an Int32LE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeInt32LE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt32LE, 4, value, offset);
    }
    /**
     * Inserts an Int32LE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertInt32LE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeInt32LE, 4, value, offset);
    }
    /**
     * Writes a BigInt64BE value to the current write position (or at optional offset).
     *
     * @param value { BigInt } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeBigInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigInt64BE');
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigInt64BE, 8, value, offset);
    }
    /**
     * Inserts a BigInt64BE value at the given offset value.
     *
     * @param value { BigInt } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertBigInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigInt64BE');
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigInt64BE, 8, value, offset);
    }
    /**
     * Writes a BigInt64LE value to the current write position (or at optional offset).
     *
     * @param value { BigInt } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeBigInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigInt64LE');
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigInt64LE, 8, value, offset);
    }
    /**
     * Inserts a Int64LE value at the given offset value.
     *
     * @param value { BigInt } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertBigInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigInt64LE');
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigInt64LE, 8, value, offset);
    }
    // Unsigned Integers
    /**
     * Reads an UInt8 value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readUInt8(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readUInt8, 1, offset);
    }
    /**
     * Reads an UInt16BE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readUInt16BE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readUInt16BE, 2, offset);
    }
    /**
     * Reads an UInt16LE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readUInt16LE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readUInt16LE, 2, offset);
    }
    /**
     * Reads an UInt32BE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readUInt32BE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readUInt32BE, 4, offset);
    }
    /**
     * Reads an UInt32LE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readUInt32LE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readUInt32LE, 4, offset);
    }
    /**
     * Reads a BigUInt64BE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { BigInt }
     */ readBigUInt64BE(offset) {
        utils_1.bigIntAndBufferInt64Check('readBigUInt64BE');
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readBigUInt64BE, 8, offset);
    }
    /**
     * Reads a BigUInt64LE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { BigInt }
     */ readBigUInt64LE(offset) {
        utils_1.bigIntAndBufferInt64Check('readBigUInt64LE');
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readBigUInt64LE, 8, offset);
    }
    /**
     * Writes an UInt8 value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeUInt8(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt8, 1, value, offset);
    }
    /**
     * Inserts an UInt8 value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertUInt8(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt8, 1, value, offset);
    }
    /**
     * Writes an UInt16BE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeUInt16BE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt16BE, 2, value, offset);
    }
    /**
     * Inserts an UInt16BE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertUInt16BE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt16BE, 2, value, offset);
    }
    /**
     * Writes an UInt16LE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeUInt16LE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt16LE, 2, value, offset);
    }
    /**
     * Inserts an UInt16LE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertUInt16LE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt16LE, 2, value, offset);
    }
    /**
     * Writes an UInt32BE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeUInt32BE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt32BE, 4, value, offset);
    }
    /**
     * Inserts an UInt32BE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertUInt32BE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt32BE, 4, value, offset);
    }
    /**
     * Writes an UInt32LE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeUInt32LE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt32LE, 4, value, offset);
    }
    /**
     * Inserts an UInt32LE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertUInt32LE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeUInt32LE, 4, value, offset);
    }
    /**
     * Writes a BigUInt64BE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeBigUInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigUInt64BE');
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigUInt64BE, 8, value, offset);
    }
    /**
     * Inserts a BigUInt64BE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertBigUInt64BE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigUInt64BE');
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigUInt64BE, 8, value, offset);
    }
    /**
     * Writes a BigUInt64LE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeBigUInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigUInt64LE');
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigUInt64LE, 8, value, offset);
    }
    /**
     * Inserts a BigUInt64LE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertBigUInt64LE(value, offset) {
        utils_1.bigIntAndBufferInt64Check('writeBigUInt64LE');
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeBigUInt64LE, 8, value, offset);
    }
    // Floating Point
    /**
     * Reads an FloatBE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readFloatBE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readFloatBE, 4, offset);
    }
    /**
     * Reads an FloatLE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readFloatLE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readFloatLE, 4, offset);
    }
    /**
     * Writes a FloatBE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeFloatBE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeFloatBE, 4, value, offset);
    }
    /**
     * Inserts a FloatBE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertFloatBE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeFloatBE, 4, value, offset);
    }
    /**
     * Writes a FloatLE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeFloatLE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeFloatLE, 4, value, offset);
    }
    /**
     * Inserts a FloatLE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertFloatLE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeFloatLE, 4, value, offset);
    }
    // Double Floating Point
    /**
     * Reads an DoublEBE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readDoubleBE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readDoubleBE, 8, offset);
    }
    /**
     * Reads an DoubleLE value from the current read position or an optionally provided offset.
     *
     * @param offset { Number } The offset to read data from (optional)
     * @return { Number }
     */ readDoubleLE(offset) {
        return this._readNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.readDoubleLE, 8, offset);
    }
    /**
     * Writes a DoubleBE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeDoubleBE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeDoubleBE, 8, value, offset);
    }
    /**
     * Inserts a DoubleBE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertDoubleBE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeDoubleBE, 8, value, offset);
    }
    /**
     * Writes a DoubleLE value to the current write position (or at optional offset).
     *
     * @param value { Number } The value to write.
     * @param offset { Number } The offset to write the value at.
     *
     * @return this
     */ writeDoubleLE(value, offset) {
        return this._writeNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeDoubleLE, 8, value, offset);
    }
    /**
     * Inserts a DoubleLE value at the given offset value.
     *
     * @param value { Number } The value to insert.
     * @param offset { Number } The offset to insert the value at.
     *
     * @return this
     */ insertDoubleLE(value, offset) {
        return this._insertNumberValue(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].prototype.writeDoubleLE, 8, value, offset);
    }
    // Strings
    /**
     * Reads a String from the current read position.
     *
     * @param arg1 { Number | String } The number of bytes to read as a String, or the BufferEncoding to use for
     *             the string (Defaults to instance level encoding).
     * @param encoding { String } The BufferEncoding to use for the string (Defaults to instance level encoding).
     *
     * @return { String }
     */ readString(arg1, encoding) {
        let lengthVal;
        // Length provided
        if (typeof arg1 === 'number') {
            utils_1.checkLengthValue(arg1);
            lengthVal = Math.min(arg1, this.length - this._readOffset);
        } else {
            encoding = arg1;
            lengthVal = this.length - this._readOffset;
        }
        // Check encoding
        if (typeof encoding !== 'undefined') {
            utils_1.checkEncoding(encoding);
        }
        const value = this._buff.slice(this._readOffset, this._readOffset + lengthVal).toString(encoding || this._encoding);
        this._readOffset += lengthVal;
        return value;
    }
    /**
     * Inserts a String
     *
     * @param value { String } The String value to insert.
     * @param offset { Number } The offset to insert the string at.
     * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
     *
     * @return this
     */ insertString(value, offset, encoding) {
        utils_1.checkOffsetValue(offset);
        return this._handleString(value, true, offset, encoding);
    }
    /**
     * Writes a String
     *
     * @param value { String } The String value to write.
     * @param arg2 { Number | String } The offset to write the string at, or the BufferEncoding to use.
     * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
     *
     * @return this
     */ writeString(value, arg2, encoding) {
        return this._handleString(value, false, arg2, encoding);
    }
    /**
     * Reads a null-terminated String from the current read position.
     *
     * @param encoding { String } The BufferEncoding to use for the string (Defaults to instance level encoding).
     *
     * @return { String }
     */ readStringNT(encoding) {
        if (typeof encoding !== 'undefined') {
            utils_1.checkEncoding(encoding);
        }
        // Set null character position to the end SmartBuffer instance.
        let nullPos = this.length;
        // Find next null character (if one is not found, default from above is used)
        for(let i = this._readOffset; i < this.length; i++){
            if (this._buff[i] === 0x00) {
                nullPos = i;
                break;
            }
        }
        // Read string value
        const value = this._buff.slice(this._readOffset, nullPos);
        // Increment internal Buffer read offset
        this._readOffset = nullPos + 1;
        return value.toString(encoding || this._encoding);
    }
    /**
     * Inserts a null-terminated String.
     *
     * @param value { String } The String value to write.
     * @param arg2 { Number | String } The offset to write the string to, or the BufferEncoding to use.
     * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
     *
     * @return this
     */ insertStringNT(value, offset, encoding) {
        utils_1.checkOffsetValue(offset);
        // Write Values
        this.insertString(value, offset, encoding);
        this.insertUInt8(0x00, offset + value.length);
        return this;
    }
    /**
     * Writes a null-terminated String.
     *
     * @param value { String } The String value to write.
     * @param arg2 { Number | String } The offset to write the string to, or the BufferEncoding to use.
     * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
     *
     * @return this
     */ writeStringNT(value, arg2, encoding) {
        // Write Values
        this.writeString(value, arg2, encoding);
        this.writeUInt8(0x00, typeof arg2 === 'number' ? arg2 + value.length : this.writeOffset);
        return this;
    }
    // Buffers
    /**
     * Reads a Buffer from the internal read position.
     *
     * @param length { Number } The length of data to read as a Buffer.
     *
     * @return { Buffer }
     */ readBuffer(length) {
        if (typeof length !== 'undefined') {
            utils_1.checkLengthValue(length);
        }
        const lengthVal = typeof length === 'number' ? length : this.length;
        const endPoint = Math.min(this.length, this._readOffset + lengthVal);
        // Read buffer value
        const value = this._buff.slice(this._readOffset, endPoint);
        // Increment internal Buffer read offset
        this._readOffset = endPoint;
        return value;
    }
    /**
     * Writes a Buffer to the current write position.
     *
     * @param value { Buffer } The Buffer to write.
     * @param offset { Number } The offset to write the Buffer to.
     *
     * @return this
     */ insertBuffer(value, offset) {
        utils_1.checkOffsetValue(offset);
        return this._handleBuffer(value, true, offset);
    }
    /**
     * Writes a Buffer to the current write position.
     *
     * @param value { Buffer } The Buffer to write.
     * @param offset { Number } The offset to write the Buffer to.
     *
     * @return this
     */ writeBuffer(value, offset) {
        return this._handleBuffer(value, false, offset);
    }
    /**
     * Reads a null-terminated Buffer from the current read poisiton.
     *
     * @return { Buffer }
     */ readBufferNT() {
        // Set null character position to the end SmartBuffer instance.
        let nullPos = this.length;
        // Find next null character (if one is not found, default from above is used)
        for(let i = this._readOffset; i < this.length; i++){
            if (this._buff[i] === 0x00) {
                nullPos = i;
                break;
            }
        }
        // Read value
        const value = this._buff.slice(this._readOffset, nullPos);
        // Increment internal Buffer read offset
        this._readOffset = nullPos + 1;
        return value;
    }
    /**
     * Inserts a null-terminated Buffer.
     *
     * @param value { Buffer } The Buffer to write.
     * @param offset { Number } The offset to write the Buffer to.
     *
     * @return this
     */ insertBufferNT(value, offset) {
        utils_1.checkOffsetValue(offset);
        // Write Values
        this.insertBuffer(value, offset);
        this.insertUInt8(0x00, offset + value.length);
        return this;
    }
    /**
     * Writes a null-terminated Buffer.
     *
     * @param value { Buffer } The Buffer to write.
     * @param offset { Number } The offset to write the Buffer to.
     *
     * @return this
     */ writeBufferNT(value, offset) {
        // Checks for valid numberic value;
        if (typeof offset !== 'undefined') {
            utils_1.checkOffsetValue(offset);
        }
        // Write Values
        this.writeBuffer(value, offset);
        this.writeUInt8(0x00, typeof offset === 'number' ? offset + value.length : this._writeOffset);
        return this;
    }
    /**
     * Clears the SmartBuffer instance to its original empty state.
     */ clear() {
        this._writeOffset = 0;
        this._readOffset = 0;
        this.length = 0;
        return this;
    }
    /**
     * Gets the remaining data left to be read from the SmartBuffer instance.
     *
     * @return { Number }
     */ remaining() {
        return this.length - this._readOffset;
    }
    /**
     * Gets the current read offset value of the SmartBuffer instance.
     *
     * @return { Number }
     */ get readOffset() {
        return this._readOffset;
    }
    /**
     * Sets the read offset value of the SmartBuffer instance.
     *
     * @param offset { Number } - The offset value to set.
     */ set readOffset(offset) {
        utils_1.checkOffsetValue(offset);
        // Check for bounds.
        utils_1.checkTargetOffset(offset, this);
        this._readOffset = offset;
    }
    /**
     * Gets the current write offset value of the SmartBuffer instance.
     *
     * @return { Number }
     */ get writeOffset() {
        return this._writeOffset;
    }
    /**
     * Sets the write offset value of the SmartBuffer instance.
     *
     * @param offset { Number } - The offset value to set.
     */ set writeOffset(offset) {
        utils_1.checkOffsetValue(offset);
        // Check for bounds.
        utils_1.checkTargetOffset(offset, this);
        this._writeOffset = offset;
    }
    /**
     * Gets the currently set string encoding of the SmartBuffer instance.
     *
     * @return { BufferEncoding } The string Buffer encoding currently set.
     */ get encoding() {
        return this._encoding;
    }
    /**
     * Sets the string encoding of the SmartBuffer instance.
     *
     * @param encoding { BufferEncoding } The string Buffer encoding to set.
     */ set encoding(encoding) {
        utils_1.checkEncoding(encoding);
        this._encoding = encoding;
    }
    /**
     * Gets the underlying internal Buffer. (This includes unmanaged data in the Buffer)
     *
     * @return { Buffer } The Buffer value.
     */ get internalBuffer() {
        return this._buff;
    }
    /**
     * Gets the value of the internal managed Buffer (Includes managed data only)
     *
     * @param { Buffer }
     */ toBuffer() {
        return this._buff.slice(0, this.length);
    }
    /**
     * Gets the String value of the internal managed Buffer
     *
     * @param encoding { String } The BufferEncoding to display the Buffer as (defaults to instance level encoding).
     */ toString(encoding) {
        const encodingVal = typeof encoding === 'string' ? encoding : this._encoding;
        // Check for invalid encoding.
        utils_1.checkEncoding(encodingVal);
        return this._buff.toString(encodingVal, 0, this.length);
    }
    /**
     * Destroys the SmartBuffer instance.
     */ destroy() {
        this.clear();
        return this;
    }
    /**
     * Handles inserting and writing strings.
     *
     * @param value { String } The String value to insert.
     * @param isInsert { Boolean } True if inserting a string, false if writing.
     * @param arg2 { Number | String } The offset to insert the string at, or the BufferEncoding to use.
     * @param encoding { String } The BufferEncoding to use for writing strings (defaults to instance encoding).
     */ _handleString(value, isInsert, arg3, encoding) {
        let offsetVal = this._writeOffset;
        let encodingVal = this._encoding;
        // Check for offset
        if (typeof arg3 === 'number') {
            offsetVal = arg3;
        // Check for encoding
        } else if (typeof arg3 === 'string') {
            utils_1.checkEncoding(arg3);
            encodingVal = arg3;
        }
        // Check for encoding (third param)
        if (typeof encoding === 'string') {
            utils_1.checkEncoding(encoding);
            encodingVal = encoding;
        }
        // Calculate bytelength of string.
        const byteLength = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].byteLength(value, encodingVal);
        // Ensure there is enough internal Buffer capacity.
        if (isInsert) {
            this.ensureInsertable(byteLength, offsetVal);
        } else {
            this._ensureWriteable(byteLength, offsetVal);
        }
        // Write value
        this._buff.write(value, offsetVal, byteLength, encodingVal);
        // Increment internal Buffer write offset;
        if (isInsert) {
            this._writeOffset += byteLength;
        } else {
            // If an offset was given, check to see if we wrote beyond the current writeOffset.
            if (typeof arg3 === 'number') {
                this._writeOffset = Math.max(this._writeOffset, offsetVal + byteLength);
            } else {
                // If no offset was given, we wrote to the end of the SmartBuffer so increment writeOffset.
                this._writeOffset += byteLength;
            }
        }
        return this;
    }
    /**
     * Handles writing or insert of a Buffer.
     *
     * @param value { Buffer } The Buffer to write.
     * @param offset { Number } The offset to write the Buffer to.
     */ _handleBuffer(value, isInsert, offset) {
        const offsetVal = typeof offset === 'number' ? offset : this._writeOffset;
        // Ensure there is enough internal Buffer capacity.
        if (isInsert) {
            this.ensureInsertable(value.length, offsetVal);
        } else {
            this._ensureWriteable(value.length, offsetVal);
        }
        // Write buffer value
        value.copy(this._buff, offsetVal);
        // Increment internal Buffer write offset;
        if (isInsert) {
            this._writeOffset += value.length;
        } else {
            // If an offset was given, check to see if we wrote beyond the current writeOffset.
            if (typeof offset === 'number') {
                this._writeOffset = Math.max(this._writeOffset, offsetVal + value.length);
            } else {
                // If no offset was given, we wrote to the end of the SmartBuffer so increment writeOffset.
                this._writeOffset += value.length;
            }
        }
        return this;
    }
    /**
     * Ensures that the internal Buffer is large enough to read data.
     *
     * @param length { Number } The length of the data that needs to be read.
     * @param offset { Number } The offset of the data that needs to be read.
     */ ensureReadable(length, offset) {
        // Offset value defaults to managed read offset.
        let offsetVal = this._readOffset;
        // If an offset was provided, use it.
        if (typeof offset !== 'undefined') {
            // Checks for valid numberic value;
            utils_1.checkOffsetValue(offset);
            // Overide with custom offset.
            offsetVal = offset;
        }
        // Checks if offset is below zero, or the offset+length offset is beyond the total length of the managed data.
        if (offsetVal < 0 || offsetVal + length > this.length) {
            throw new Error(utils_1.ERRORS.INVALID_READ_BEYOND_BOUNDS);
        }
    }
    /**
     * Ensures that the internal Buffer is large enough to insert data.
     *
     * @param dataLength { Number } The length of the data that needs to be written.
     * @param offset { Number } The offset of the data to be written.
     */ ensureInsertable(dataLength, offset) {
        // Checks for valid numberic value;
        utils_1.checkOffsetValue(offset);
        // Ensure there is enough internal Buffer capacity.
        this._ensureCapacity(this.length + dataLength);
        // If an offset was provided and its not the very end of the buffer, copy data into appropriate location in regards to the offset.
        if (offset < this.length) {
            this._buff.copy(this._buff, offset + dataLength, offset, this._buff.length);
        }
        // Adjust tracked smart buffer length
        if (offset + dataLength > this.length) {
            this.length = offset + dataLength;
        } else {
            this.length += dataLength;
        }
    }
    /**
     * Ensures that the internal Buffer is large enough to write data.
     *
     * @param dataLength { Number } The length of the data that needs to be written.
     * @param offset { Number } The offset of the data to be written (defaults to writeOffset).
     */ _ensureWriteable(dataLength, offset) {
        const offsetVal = typeof offset === 'number' ? offset : this._writeOffset;
        // Ensure enough capacity to write data.
        this._ensureCapacity(offsetVal + dataLength);
        // Adjust SmartBuffer length (if offset + length is larger than managed length, adjust length)
        if (offsetVal + dataLength > this.length) {
            this.length = offsetVal + dataLength;
        }
    }
    /**
     * Ensures that the internal Buffer is large enough to write at least the given amount of data.
     *
     * @param minLength { Number } The minimum length of the data needs to be written.
     */ _ensureCapacity(minLength) {
        const oldLength = this._buff.length;
        if (minLength > oldLength) {
            let data = this._buff;
            let newLength = oldLength * 3 / 2 + 1;
            if (newLength < minLength) {
                newLength = minLength;
            }
            this._buff = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(newLength);
            data.copy(this._buff, 0, 0, oldLength);
        }
    }
    /**
     * Reads a numeric number value using the provided function.
     *
     * @typeparam T { number | bigint } The type of the value to be read
     *
     * @param func { Function(offset: number) => number } The function to read data on the internal Buffer with.
     * @param byteSize { Number } The number of bytes read.
     * @param offset { Number } The offset to read from (optional). When this is not provided, the managed readOffset is used instead.
     *
     * @returns { T } the number value
     */ _readNumberValue(func, byteSize, offset) {
        this.ensureReadable(byteSize, offset);
        // Call Buffer.readXXXX();
        const value = func.call(this._buff, typeof offset === 'number' ? offset : this._readOffset);
        // Adjust internal read offset if an optional read offset was not provided.
        if (typeof offset === 'undefined') {
            this._readOffset += byteSize;
        }
        return value;
    }
    /**
     * Inserts a numeric number value based on the given offset and value.
     *
     * @typeparam T { number | bigint } The type of the value to be written
     *
     * @param func { Function(offset: T, offset?) => number} The function to write data on the internal Buffer with.
     * @param byteSize { Number } The number of bytes written.
     * @param value { T } The number value to write.
     * @param offset { Number } the offset to write the number at (REQUIRED).
     *
     * @returns SmartBuffer this buffer
     */ _insertNumberValue(func, byteSize, value, offset) {
        // Check for invalid offset values.
        utils_1.checkOffsetValue(offset);
        // Ensure there is enough internal Buffer capacity. (raw offset is passed)
        this.ensureInsertable(byteSize, offset);
        // Call buffer.writeXXXX();
        func.call(this._buff, value, offset);
        // Adjusts internally managed write offset.
        this._writeOffset += byteSize;
        return this;
    }
    /**
     * Writes a numeric number value based on the given offset and value.
     *
     * @typeparam T { number | bigint } The type of the value to be written
     *
     * @param func { Function(offset: T, offset?) => number} The function to write data on the internal Buffer with.
     * @param byteSize { Number } The number of bytes written.
     * @param value { T } The number value to write.
     * @param offset { Number } the offset to write the number at (REQUIRED).
     *
     * @returns SmartBuffer this buffer
     */ _writeNumberValue(func, byteSize, value, offset) {
        // If an offset was provided, validate it.
        if (typeof offset === 'number') {
            // Check if we're writing beyond the bounds of the managed data.
            if (offset < 0) {
                throw new Error(utils_1.ERRORS.INVALID_WRITE_BEYOND_BOUNDS);
            }
            utils_1.checkOffsetValue(offset);
        }
        // Default to writeOffset if no offset value was given.
        const offsetVal = typeof offset === 'number' ? offset : this._writeOffset;
        // Ensure there is enough internal Buffer capacity. (raw offset is passed)
        this._ensureWriteable(byteSize, offsetVal);
        func.call(this._buff, value, offsetVal);
        // If an offset was given, check to see if we wrote beyond the current writeOffset.
        if (typeof offset === 'number') {
            this._writeOffset = Math.max(this._writeOffset, offsetVal + byteSize);
        } else {
            // If no numeric offset was given, we wrote to the end of the SmartBuffer so increment writeOffset.
            this._writeOffset += byteSize;
        }
        return this;
    }
}
exports.SmartBuffer = SmartBuffer; //# sourceMappingURL=smartbuffer.js.map
}),
"[project]/energy-os-v0/node_modules/socks/build/common/constants.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SOCKS5_NO_ACCEPTABLE_AUTH = exports.SOCKS5_CUSTOM_AUTH_END = exports.SOCKS5_CUSTOM_AUTH_START = exports.SOCKS_INCOMING_PACKET_SIZES = exports.SocksClientState = exports.Socks5Response = exports.Socks5HostType = exports.Socks5Auth = exports.Socks4Response = exports.SocksCommand = exports.ERRORS = exports.DEFAULT_TIMEOUT = void 0;
const DEFAULT_TIMEOUT = 30000;
exports.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
// prettier-ignore
const ERRORS = {
    InvalidSocksCommand: 'An invalid SOCKS command was provided. Valid options are connect, bind, and associate.',
    InvalidSocksCommandForOperation: 'An invalid SOCKS command was provided. Only a subset of commands are supported for this operation.',
    InvalidSocksCommandChain: 'An invalid SOCKS command was provided. Chaining currently only supports the connect command.',
    InvalidSocksClientOptionsDestination: 'An invalid destination host was provided.',
    InvalidSocksClientOptionsExistingSocket: 'An invalid existing socket was provided. This should be an instance of stream.Duplex.',
    InvalidSocksClientOptionsProxy: 'Invalid SOCKS proxy details were provided.',
    InvalidSocksClientOptionsTimeout: 'An invalid timeout value was provided. Please enter a value above 0 (in ms).',
    InvalidSocksClientOptionsProxiesLength: 'At least two socks proxies must be provided for chaining.',
    InvalidSocksClientOptionsCustomAuthRange: 'Custom auth must be a value between 0x80 and 0xFE.',
    InvalidSocksClientOptionsCustomAuthOptions: 'When a custom_auth_method is provided, custom_auth_request_handler, custom_auth_response_size, and custom_auth_response_handler must also be provided and valid.',
    NegotiationError: 'Negotiation error',
    SocketClosed: 'Socket closed',
    ProxyConnectionTimedOut: 'Proxy connection timed out',
    InternalError: 'SocksClient internal error (this should not happen)',
    InvalidSocks4HandshakeResponse: 'Received invalid Socks4 handshake response',
    Socks4ProxyRejectedConnection: 'Socks4 Proxy rejected connection',
    InvalidSocks4IncomingConnectionResponse: 'Socks4 invalid incoming connection response',
    Socks4ProxyRejectedIncomingBoundConnection: 'Socks4 Proxy rejected incoming bound connection',
    InvalidSocks5InitialHandshakeResponse: 'Received invalid Socks5 initial handshake response',
    InvalidSocks5IntiailHandshakeSocksVersion: 'Received invalid Socks5 initial handshake (invalid socks version)',
    InvalidSocks5InitialHandshakeNoAcceptedAuthType: 'Received invalid Socks5 initial handshake (no accepted authentication type)',
    InvalidSocks5InitialHandshakeUnknownAuthType: 'Received invalid Socks5 initial handshake (unknown authentication type)',
    Socks5AuthenticationFailed: 'Socks5 Authentication failed',
    InvalidSocks5FinalHandshake: 'Received invalid Socks5 final handshake response',
    InvalidSocks5FinalHandshakeRejected: 'Socks5 proxy rejected connection',
    InvalidSocks5IncomingConnectionResponse: 'Received invalid Socks5 incoming connection response',
    Socks5ProxyRejectedIncomingBoundConnection: 'Socks5 Proxy rejected incoming bound connection'
};
exports.ERRORS = ERRORS;
const SOCKS_INCOMING_PACKET_SIZES = {
    Socks5InitialHandshakeResponse: 2,
    Socks5UserPassAuthenticationResponse: 2,
    // Command response + incoming connection (bind)
    Socks5ResponseHeader: 5,
    Socks5ResponseIPv4: 10,
    Socks5ResponseIPv6: 22,
    Socks5ResponseHostname: (hostNameLength)=>hostNameLength + 7,
    // Command response + incoming connection (bind)
    Socks4Response: 8
};
exports.SOCKS_INCOMING_PACKET_SIZES = SOCKS_INCOMING_PACKET_SIZES;
var SocksCommand;
(function(SocksCommand) {
    SocksCommand[SocksCommand["connect"] = 1] = "connect";
    SocksCommand[SocksCommand["bind"] = 2] = "bind";
    SocksCommand[SocksCommand["associate"] = 3] = "associate";
})(SocksCommand || (exports.SocksCommand = SocksCommand = {}));
var Socks4Response;
(function(Socks4Response) {
    Socks4Response[Socks4Response["Granted"] = 90] = "Granted";
    Socks4Response[Socks4Response["Failed"] = 91] = "Failed";
    Socks4Response[Socks4Response["Rejected"] = 92] = "Rejected";
    Socks4Response[Socks4Response["RejectedIdent"] = 93] = "RejectedIdent";
})(Socks4Response || (exports.Socks4Response = Socks4Response = {}));
var Socks5Auth;
(function(Socks5Auth) {
    Socks5Auth[Socks5Auth["NoAuth"] = 0] = "NoAuth";
    Socks5Auth[Socks5Auth["GSSApi"] = 1] = "GSSApi";
    Socks5Auth[Socks5Auth["UserPass"] = 2] = "UserPass";
})(Socks5Auth || (exports.Socks5Auth = Socks5Auth = {}));
const SOCKS5_CUSTOM_AUTH_START = 0x80;
exports.SOCKS5_CUSTOM_AUTH_START = SOCKS5_CUSTOM_AUTH_START;
const SOCKS5_CUSTOM_AUTH_END = 0xfe;
exports.SOCKS5_CUSTOM_AUTH_END = SOCKS5_CUSTOM_AUTH_END;
const SOCKS5_NO_ACCEPTABLE_AUTH = 0xff;
exports.SOCKS5_NO_ACCEPTABLE_AUTH = SOCKS5_NO_ACCEPTABLE_AUTH;
var Socks5Response;
(function(Socks5Response) {
    Socks5Response[Socks5Response["Granted"] = 0] = "Granted";
    Socks5Response[Socks5Response["Failure"] = 1] = "Failure";
    Socks5Response[Socks5Response["NotAllowed"] = 2] = "NotAllowed";
    Socks5Response[Socks5Response["NetworkUnreachable"] = 3] = "NetworkUnreachable";
    Socks5Response[Socks5Response["HostUnreachable"] = 4] = "HostUnreachable";
    Socks5Response[Socks5Response["ConnectionRefused"] = 5] = "ConnectionRefused";
    Socks5Response[Socks5Response["TTLExpired"] = 6] = "TTLExpired";
    Socks5Response[Socks5Response["CommandNotSupported"] = 7] = "CommandNotSupported";
    Socks5Response[Socks5Response["AddressNotSupported"] = 8] = "AddressNotSupported";
})(Socks5Response || (exports.Socks5Response = Socks5Response = {}));
var Socks5HostType;
(function(Socks5HostType) {
    Socks5HostType[Socks5HostType["IPv4"] = 1] = "IPv4";
    Socks5HostType[Socks5HostType["Hostname"] = 3] = "Hostname";
    Socks5HostType[Socks5HostType["IPv6"] = 4] = "IPv6";
})(Socks5HostType || (exports.Socks5HostType = Socks5HostType = {}));
var SocksClientState;
(function(SocksClientState) {
    SocksClientState[SocksClientState["Created"] = 0] = "Created";
    SocksClientState[SocksClientState["Connecting"] = 1] = "Connecting";
    SocksClientState[SocksClientState["Connected"] = 2] = "Connected";
    SocksClientState[SocksClientState["SentInitialHandshake"] = 3] = "SentInitialHandshake";
    SocksClientState[SocksClientState["ReceivedInitialHandshakeResponse"] = 4] = "ReceivedInitialHandshakeResponse";
    SocksClientState[SocksClientState["SentAuthentication"] = 5] = "SentAuthentication";
    SocksClientState[SocksClientState["ReceivedAuthenticationResponse"] = 6] = "ReceivedAuthenticationResponse";
    SocksClientState[SocksClientState["SentFinalHandshake"] = 7] = "SentFinalHandshake";
    SocksClientState[SocksClientState["ReceivedFinalResponse"] = 8] = "ReceivedFinalResponse";
    SocksClientState[SocksClientState["BoundWaitingForConnection"] = 9] = "BoundWaitingForConnection";
    SocksClientState[SocksClientState["Established"] = 10] = "Established";
    SocksClientState[SocksClientState["Disconnected"] = 11] = "Disconnected";
    SocksClientState[SocksClientState["Error"] = 99] = "Error";
})(SocksClientState || (exports.SocksClientState = SocksClientState = {})); //# sourceMappingURL=constants.js.map
}),
"[project]/energy-os-v0/node_modules/socks/build/common/util.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shuffleArray = exports.SocksClientError = void 0;
/**
 * Error wrapper for SocksClient
 */ class SocksClientError extends Error {
    constructor(message, options){
        super(message);
        this.options = options;
    }
}
exports.SocksClientError = SocksClientError;
/**
 * Shuffles a given array.
 * @param array The array to shuffle.
 */ function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [
            array[j],
            array[i]
        ];
    }
}
exports.shuffleArray = shuffleArray; //# sourceMappingURL=util.js.map
}),
"[project]/energy-os-v0/node_modules/socks/build/common/helpers.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ipToBuffer = exports.int32ToIpv4 = exports.ipv4ToInt32 = exports.validateSocksClientChainOptions = exports.validateSocksClientOptions = void 0;
const util_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/socks/build/common/util.js [middleware-edge] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/socks/build/common/constants.js [middleware-edge] (ecmascript)");
const stream = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'stream', ecmascript)");
const ip_address_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/ip-address.js [middleware-edge] (ecmascript)");
const net = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'net', ecmascript)");
/**
 * Validates the provided SocksClientOptions
 * @param options { SocksClientOptions }
 * @param acceptedCommands { string[] } A list of accepted SocksProxy commands.
 */ function validateSocksClientOptions(options, acceptedCommands = [
    'connect',
    'bind',
    'associate'
]) {
    // Check SOCKs command option.
    if (!constants_1.SocksCommand[options.command]) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommand, options);
    }
    // Check SocksCommand for acceptable command.
    if (acceptedCommands.indexOf(options.command) === -1) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommandForOperation, options);
    }
    // Check destination
    if (!isValidSocksRemoteHost(options.destination)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsDestination, options);
    }
    // Check SOCKS proxy to use
    if (!isValidSocksProxy(options.proxy)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxy, options);
    }
    // Validate custom auth (if set)
    validateCustomProxyAuth(options.proxy, options);
    // Check timeout
    if (options.timeout && !isValidTimeoutValue(options.timeout)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsTimeout, options);
    }
    // Check existing_socket (if provided)
    if (options.existing_socket && !(options.existing_socket instanceof stream.Duplex)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsExistingSocket, options);
    }
}
exports.validateSocksClientOptions = validateSocksClientOptions;
/**
 * Validates the SocksClientChainOptions
 * @param options { SocksClientChainOptions }
 */ function validateSocksClientChainOptions(options) {
    // Only connect is supported when chaining.
    if (options.command !== 'connect') {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksCommandChain, options);
    }
    // Check destination
    if (!isValidSocksRemoteHost(options.destination)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsDestination, options);
    }
    // Validate proxies (length)
    if (!(options.proxies && Array.isArray(options.proxies) && options.proxies.length >= 2)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxiesLength, options);
    }
    // Validate proxies
    options.proxies.forEach((proxy)=>{
        if (!isValidSocksProxy(proxy)) {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsProxy, options);
        }
        // Validate custom auth (if set)
        validateCustomProxyAuth(proxy, options);
    });
    // Check timeout
    if (options.timeout && !isValidTimeoutValue(options.timeout)) {
        throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsTimeout, options);
    }
}
exports.validateSocksClientChainOptions = validateSocksClientChainOptions;
function validateCustomProxyAuth(proxy, options) {
    if (proxy.custom_auth_method !== undefined) {
        // Invalid auth method range
        if (proxy.custom_auth_method < constants_1.SOCKS5_CUSTOM_AUTH_START || proxy.custom_auth_method > constants_1.SOCKS5_CUSTOM_AUTH_END) {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthRange, options);
        }
        // Missing custom_auth_request_handler
        if (proxy.custom_auth_request_handler === undefined || typeof proxy.custom_auth_request_handler !== 'function') {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
        // Missing custom_auth_response_size
        if (proxy.custom_auth_response_size === undefined) {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
        // Missing/invalid custom_auth_response_handler
        if (proxy.custom_auth_response_handler === undefined || typeof proxy.custom_auth_response_handler !== 'function') {
            throw new util_1.SocksClientError(constants_1.ERRORS.InvalidSocksClientOptionsCustomAuthOptions, options);
        }
    }
}
/**
 * Validates a SocksRemoteHost
 * @param remoteHost { SocksRemoteHost }
 */ function isValidSocksRemoteHost(remoteHost) {
    return remoteHost && typeof remoteHost.host === 'string' && __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].byteLength(remoteHost.host) < 256 && typeof remoteHost.port === 'number' && remoteHost.port >= 0 && remoteHost.port <= 65535;
}
/**
 * Validates a SocksProxy
 * @param proxy { SocksProxy }
 */ function isValidSocksProxy(proxy) {
    return proxy && (typeof proxy.host === 'string' || typeof proxy.ipaddress === 'string') && typeof proxy.port === 'number' && proxy.port >= 0 && proxy.port <= 65535 && (proxy.type === 4 || proxy.type === 5);
}
/**
 * Validates a timeout value.
 * @param value { Number }
 */ function isValidTimeoutValue(value) {
    return typeof value === 'number' && value > 0;
}
function ipv4ToInt32(ip) {
    const address = new ip_address_1.Address4(ip);
    // Convert the IPv4 address parts to an integer
    return address.toArray().reduce((acc, part)=>(acc << 8) + part, 0) >>> 0;
}
exports.ipv4ToInt32 = ipv4ToInt32;
function int32ToIpv4(int32) {
    // Extract each byte (octet) from the 32-bit integer
    const octet1 = int32 >>> 24 & 0xff;
    const octet2 = int32 >>> 16 & 0xff;
    const octet3 = int32 >>> 8 & 0xff;
    const octet4 = int32 & 0xff;
    // Combine the octets into a string in IPv4 format
    return [
        octet1,
        octet2,
        octet3,
        octet4
    ].join('.');
}
exports.int32ToIpv4 = int32ToIpv4;
function ipToBuffer(ip) {
    if (net.isIPv4(ip)) {
        // Handle IPv4 addresses
        const address = new ip_address_1.Address4(ip);
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(address.toArray());
    } else if (net.isIPv6(ip)) {
        // Handle IPv6 addresses
        const address = new ip_address_1.Address6(ip);
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(address.canonicalForm().split(':').map((segment)=>segment.padStart(4, '0')).join(''), 'hex');
    } else {
        throw new Error('Invalid IP address format');
    }
}
exports.ipToBuffer = ipToBuffer; //# sourceMappingURL=helpers.js.map
}),
"[project]/energy-os-v0/node_modules/socks/build/common/receivebuffer.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReceiveBuffer = void 0;
class ReceiveBuffer {
    constructor(size = 4096){
        this.buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(size);
        this.offset = 0;
        this.originalSize = size;
    }
    get length() {
        return this.offset;
    }
    append(data) {
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(data)) {
            throw new Error('Attempted to append a non-buffer instance to ReceiveBuffer.');
        }
        if (this.offset + data.length >= this.buffer.length) {
            const tmp = this.buffer;
            this.buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(Math.max(this.buffer.length + this.originalSize, this.buffer.length + data.length));
            tmp.copy(this.buffer);
        }
        data.copy(this.buffer, this.offset);
        return this.offset += data.length;
    }
    peek(length) {
        if (length > this.offset) {
            throw new Error('Attempted to read beyond the bounds of the managed internal data.');
        }
        return this.buffer.slice(0, length);
    }
    get(length) {
        if (length > this.offset) {
            throw new Error('Attempted to read beyond the bounds of the managed internal data.');
        }
        const value = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(length);
        this.buffer.slice(0, length).copy(value);
        this.buffer.copyWithin(0, length, length + this.offset - length);
        this.offset -= length;
        return value;
    }
}
exports.ReceiveBuffer = ReceiveBuffer; //# sourceMappingURL=receivebuffer.js.map
}),
"[project]/energy-os-v0/node_modules/socks/build/client/socksclient.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SocksClientError = exports.SocksClient = void 0;
const events_1 = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const net = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'net', ecmascript)");
const smart_buffer_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/smart-buffer/build/smartbuffer.js [middleware-edge] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/socks/build/common/constants.js [middleware-edge] (ecmascript)");
const helpers_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/socks/build/common/helpers.js [middleware-edge] (ecmascript)");
const receivebuffer_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/socks/build/common/receivebuffer.js [middleware-edge] (ecmascript)");
const util_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/socks/build/common/util.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "SocksClientError", {
    enumerable: true,
    get: function() {
        return util_1.SocksClientError;
    }
});
const ip_address_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/ip-address.js [middleware-edge] (ecmascript)");
class SocksClient extends events_1.EventEmitter {
    constructor(options){
        super();
        this.options = Object.assign({}, options);
        // Validate SocksClientOptions
        (0, helpers_1.validateSocksClientOptions)(options);
        // Default state
        this.setState(constants_1.SocksClientState.Created);
    }
    /**
     * Creates a new SOCKS connection.
     *
     * Note: Supports callbacks and promises. Only supports the connect command.
     * @param options { SocksClientOptions } Options.
     * @param callback { Function } An optional callback function.
     * @returns { Promise }
     */ static createConnection(options, callback) {
        return new Promise((resolve, reject)=>{
            // Validate SocksClientOptions
            try {
                (0, helpers_1.validateSocksClientOptions)(options, [
                    'connect'
                ]);
            } catch (err) {
                if (typeof callback === 'function') {
                    callback(err);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return resolve(err); // Resolves pending promise (prevents memory leaks).
                } else {
                    return reject(err);
                }
            }
            const client = new SocksClient(options);
            client.connect(options.existing_socket);
            client.once('established', (info)=>{
                client.removeAllListeners();
                if (typeof callback === 'function') {
                    callback(null, info);
                    resolve(info); // Resolves pending promise (prevents memory leaks).
                } else {
                    resolve(info);
                }
            });
            // Error occurred, failed to establish connection.
            client.once('error', (err)=>{
                client.removeAllListeners();
                if (typeof callback === 'function') {
                    callback(err);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    resolve(err); // Resolves pending promise (prevents memory leaks).
                } else {
                    reject(err);
                }
            });
        });
    }
    /**
     * Creates a new SOCKS connection chain to a destination host through 2 or more SOCKS proxies.
     *
     * Note: Supports callbacks and promises. Only supports the connect method.
     * Note: Implemented via createConnection() factory function.
     * @param options { SocksClientChainOptions } Options
     * @param callback { Function } An optional callback function.
     * @returns { Promise }
     */ static createConnectionChain(options, callback) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                // Validate SocksClientChainOptions
                try {
                    (0, helpers_1.validateSocksClientChainOptions)(options);
                } catch (err) {
                    if (typeof callback === 'function') {
                        callback(err);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return resolve(err); // Resolves pending promise (prevents memory leaks).
                    } else {
                        return reject(err);
                    }
                }
                // Shuffle proxies
                if (options.randomizeChain) {
                    (0, util_1.shuffleArray)(options.proxies);
                }
                try {
                    let sock;
                    for(let i = 0; i < options.proxies.length; i++){
                        const nextProxy = options.proxies[i];
                        // If we've reached the last proxy in the chain, the destination is the actual destination, otherwise it's the next proxy.
                        const nextDestination = i === options.proxies.length - 1 ? options.destination : {
                            host: options.proxies[i + 1].host || options.proxies[i + 1].ipaddress,
                            port: options.proxies[i + 1].port
                        };
                        // Creates the next connection in the chain.
                        const result = yield SocksClient.createConnection({
                            command: 'connect',
                            proxy: nextProxy,
                            destination: nextDestination,
                            existing_socket: sock
                        });
                        // If sock is undefined, assign it here.
                        sock = sock || result.socket;
                    }
                    if (typeof callback === 'function') {
                        callback(null, {
                            socket: sock
                        });
                        resolve({
                            socket: sock
                        }); // Resolves pending promise (prevents memory leaks).
                    } else {
                        resolve({
                            socket: sock
                        });
                    }
                } catch (err) {
                    if (typeof callback === 'function') {
                        callback(err);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        resolve(err); // Resolves pending promise (prevents memory leaks).
                    } else {
                        reject(err);
                    }
                }
            }));
    }
    /**
     * Creates a SOCKS UDP Frame.
     * @param options
     */ static createUDPFrame(options) {
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt16BE(0);
        buff.writeUInt8(options.frameNumber || 0);
        // IPv4/IPv6/Hostname
        if (net.isIPv4(options.remoteHost.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv4);
            buff.writeUInt32BE((0, helpers_1.ipv4ToInt32)(options.remoteHost.host));
        } else if (net.isIPv6(options.remoteHost.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv6);
            buff.writeBuffer((0, helpers_1.ipToBuffer)(options.remoteHost.host));
        } else {
            buff.writeUInt8(constants_1.Socks5HostType.Hostname);
            buff.writeUInt8(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].byteLength(options.remoteHost.host));
            buff.writeString(options.remoteHost.host);
        }
        // Port
        buff.writeUInt16BE(options.remoteHost.port);
        // Data
        buff.writeBuffer(options.data);
        return buff.toBuffer();
    }
    /**
     * Parses a SOCKS UDP frame.
     * @param data
     */ static parseUDPFrame(data) {
        const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
        buff.readOffset = 2;
        const frameNumber = buff.readUInt8();
        const hostType = buff.readUInt8();
        let remoteHost;
        if (hostType === constants_1.Socks5HostType.IPv4) {
            remoteHost = (0, helpers_1.int32ToIpv4)(buff.readUInt32BE());
        } else if (hostType === constants_1.Socks5HostType.IPv6) {
            remoteHost = ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm();
        } else {
            remoteHost = buff.readString(buff.readUInt8());
        }
        const remotePort = buff.readUInt16BE();
        return {
            frameNumber,
            remoteHost: {
                host: remoteHost,
                port: remotePort
            },
            data: buff.readBuffer()
        };
    }
    /**
     * Internal state setter. If the SocksClient is in an error state, it cannot be changed to a non error state.
     */ setState(newState) {
        if (this.state !== constants_1.SocksClientState.Error) {
            this.state = newState;
        }
    }
    /**
     * Starts the connection establishment to the proxy and destination.
     * @param existingSocket Connected socket to use instead of creating a new one (internal use).
     */ connect(existingSocket) {
        this.onDataReceived = (data)=>this.onDataReceivedHandler(data);
        this.onClose = ()=>this.onCloseHandler();
        this.onError = (err)=>this.onErrorHandler(err);
        this.onConnect = ()=>this.onConnectHandler();
        // Start timeout timer (defaults to 30 seconds)
        const timer = setTimeout(()=>this.onEstablishedTimeout(), this.options.timeout || constants_1.DEFAULT_TIMEOUT);
        // check whether unref is available as it differs from browser to NodeJS (#33)
        if (timer.unref && typeof timer.unref === 'function') {
            timer.unref();
        }
        // If an existing socket is provided, use it to negotiate SOCKS handshake. Otherwise create a new Socket.
        if (existingSocket) {
            this.socket = existingSocket;
        } else {
            this.socket = new net.Socket();
        }
        // Attach Socket error handlers.
        this.socket.once('close', this.onClose);
        this.socket.once('error', this.onError);
        this.socket.once('connect', this.onConnect);
        this.socket.on('data', this.onDataReceived);
        this.setState(constants_1.SocksClientState.Connecting);
        this.receiveBuffer = new receivebuffer_1.ReceiveBuffer();
        if (existingSocket) {
            this.socket.emit('connect');
        } else {
            this.socket.connect(this.getSocketOptions());
            if (this.options.set_tcp_nodelay !== undefined && this.options.set_tcp_nodelay !== null) {
                this.socket.setNoDelay(!!this.options.set_tcp_nodelay);
            }
        }
        // Listen for established event so we can re-emit any excess data received during handshakes.
        this.prependOnceListener('established', (info)=>{
            setImmediate(()=>{
                if (this.receiveBuffer.length > 0) {
                    const excessData = this.receiveBuffer.get(this.receiveBuffer.length);
                    info.socket.emit('data', excessData);
                }
                info.socket.resume();
            });
        });
    }
    // Socket options (defaults host/port to options.proxy.host/options.proxy.port)
    getSocketOptions() {
        return Object.assign(Object.assign({}, this.options.socket_options), {
            host: this.options.proxy.host || this.options.proxy.ipaddress,
            port: this.options.proxy.port
        });
    }
    /**
     * Handles internal Socks timeout callback.
     * Note: If the Socks client is not BoundWaitingForConnection or Established, the connection will be closed.
     */ onEstablishedTimeout() {
        if (this.state !== constants_1.SocksClientState.Established && this.state !== constants_1.SocksClientState.BoundWaitingForConnection) {
            this.closeSocket(constants_1.ERRORS.ProxyConnectionTimedOut);
        }
    }
    /**
     * Handles Socket connect event.
     */ onConnectHandler() {
        this.setState(constants_1.SocksClientState.Connected);
        // Send initial handshake.
        if (this.options.proxy.type === 4) {
            this.sendSocks4InitialHandshake();
        } else {
            this.sendSocks5InitialHandshake();
        }
        this.setState(constants_1.SocksClientState.SentInitialHandshake);
    }
    /**
     * Handles Socket data event.
     * @param data
     */ onDataReceivedHandler(data) {
        /*
          All received data is appended to a ReceiveBuffer.
          This makes sure that all the data we need is received before we attempt to process it.
        */ this.receiveBuffer.append(data);
        // Process data that we have.
        this.processData();
    }
    /**
     * Handles processing of the data we have received.
     */ processData() {
        // If we have enough data to process the next step in the SOCKS handshake, proceed.
        while(this.state !== constants_1.SocksClientState.Established && this.state !== constants_1.SocksClientState.Error && this.receiveBuffer.length >= this.nextRequiredPacketBufferSize){
            // Sent initial handshake, waiting for response.
            if (this.state === constants_1.SocksClientState.SentInitialHandshake) {
                if (this.options.proxy.type === 4) {
                    // Socks v4 only has one handshake response.
                    this.handleSocks4FinalHandshakeResponse();
                } else {
                    // Socks v5 has two handshakes, handle initial one here.
                    this.handleInitialSocks5HandshakeResponse();
                }
            // Sent auth request for Socks v5, waiting for response.
            } else if (this.state === constants_1.SocksClientState.SentAuthentication) {
                this.handleInitialSocks5AuthenticationHandshakeResponse();
            // Sent final Socks v5 handshake, waiting for final response.
            } else if (this.state === constants_1.SocksClientState.SentFinalHandshake) {
                this.handleSocks5FinalHandshakeResponse();
            // Socks BIND established. Waiting for remote connection via proxy.
            } else if (this.state === constants_1.SocksClientState.BoundWaitingForConnection) {
                if (this.options.proxy.type === 4) {
                    this.handleSocks4IncomingConnectionResponse();
                } else {
                    this.handleSocks5IncomingConnectionResponse();
                }
            } else {
                this.closeSocket(constants_1.ERRORS.InternalError);
                break;
            }
        }
    }
    /**
     * Handles Socket close event.
     * @param had_error
     */ onCloseHandler() {
        this.closeSocket(constants_1.ERRORS.SocketClosed);
    }
    /**
     * Handles Socket error event.
     * @param err
     */ onErrorHandler(err) {
        this.closeSocket(err.message);
    }
    /**
     * Removes internal event listeners on the underlying Socket.
     */ removeInternalSocketHandlers() {
        // Pauses data flow of the socket (this is internally resumed after 'established' is emitted)
        this.socket.pause();
        this.socket.removeListener('data', this.onDataReceived);
        this.socket.removeListener('close', this.onClose);
        this.socket.removeListener('error', this.onError);
        this.socket.removeListener('connect', this.onConnect);
    }
    /**
     * Closes and destroys the underlying Socket. Emits an error event.
     * @param err { String } An error string to include in error event.
     */ closeSocket(err) {
        // Make sure only one 'error' event is fired for the lifetime of this SocksClient instance.
        if (this.state !== constants_1.SocksClientState.Error) {
            // Set internal state to Error.
            this.setState(constants_1.SocksClientState.Error);
            // Destroy Socket
            this.socket.destroy();
            // Remove internal listeners
            this.removeInternalSocketHandlers();
            // Fire 'error' event.
            this.emit('error', new util_1.SocksClientError(err, this.options));
        }
    }
    /**
     * Sends initial Socks v4 handshake request.
     */ sendSocks4InitialHandshake() {
        const userId = this.options.proxy.userId || '';
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(0x04);
        buff.writeUInt8(constants_1.SocksCommand[this.options.command]);
        buff.writeUInt16BE(this.options.destination.port);
        // Socks 4 (IPv4)
        if (net.isIPv4(this.options.destination.host)) {
            buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
            buff.writeStringNT(userId);
        // Socks 4a (hostname)
        } else {
            buff.writeUInt8(0x00);
            buff.writeUInt8(0x00);
            buff.writeUInt8(0x00);
            buff.writeUInt8(0x01);
            buff.writeStringNT(userId);
            buff.writeStringNT(this.options.destination.host);
        }
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks4Response;
        this.socket.write(buff.toBuffer());
    }
    /**
     * Handles Socks v4 handshake response.
     * @param data
     */ handleSocks4FinalHandshakeResponse() {
        const data = this.receiveBuffer.get(8);
        if (data[1] !== constants_1.Socks4Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.Socks4ProxyRejectedConnection} - (${constants_1.Socks4Response[data[1]]})`);
        } else {
            // Bind response
            if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.bind) {
                const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
                buff.readOffset = 2;
                const remoteHost = {
                    port: buff.readUInt16BE(),
                    host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE())
                };
                // If host is 0.0.0.0, set to proxy host.
                if (remoteHost.host === '0.0.0.0') {
                    remoteHost.host = this.options.proxy.ipaddress;
                }
                this.setState(constants_1.SocksClientState.BoundWaitingForConnection);
                this.emit('bound', {
                    remoteHost,
                    socket: this.socket
                });
            // Connect response
            } else {
                this.setState(constants_1.SocksClientState.Established);
                this.removeInternalSocketHandlers();
                this.emit('established', {
                    socket: this.socket
                });
            }
        }
    }
    /**
     * Handles Socks v4 incoming connection request (BIND)
     * @param data
     */ handleSocks4IncomingConnectionResponse() {
        const data = this.receiveBuffer.get(8);
        if (data[1] !== constants_1.Socks4Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.Socks4ProxyRejectedIncomingBoundConnection} - (${constants_1.Socks4Response[data[1]]})`);
        } else {
            const buff = smart_buffer_1.SmartBuffer.fromBuffer(data);
            buff.readOffset = 2;
            const remoteHost = {
                port: buff.readUInt16BE(),
                host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE())
            };
            this.setState(constants_1.SocksClientState.Established);
            this.removeInternalSocketHandlers();
            this.emit('established', {
                remoteHost,
                socket: this.socket
            });
        }
    }
    /**
     * Sends initial Socks v5 handshake request.
     */ sendSocks5InitialHandshake() {
        const buff = new smart_buffer_1.SmartBuffer();
        // By default we always support no auth.
        const supportedAuthMethods = [
            constants_1.Socks5Auth.NoAuth
        ];
        // We should only tell the proxy we support user/pass auth if auth info is actually provided.
        // Note: As of Tor v0.3.5.7+, if user/pass auth is an option from the client, by default it will always take priority.
        if (this.options.proxy.userId || this.options.proxy.password) {
            supportedAuthMethods.push(constants_1.Socks5Auth.UserPass);
        }
        // Custom auth method?
        if (this.options.proxy.custom_auth_method !== undefined) {
            supportedAuthMethods.push(this.options.proxy.custom_auth_method);
        }
        // Build handshake packet
        buff.writeUInt8(0x05);
        buff.writeUInt8(supportedAuthMethods.length);
        for (const authMethod of supportedAuthMethods){
            buff.writeUInt8(authMethod);
        }
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5InitialHandshakeResponse;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentInitialHandshake);
    }
    /**
     * Handles initial Socks v5 handshake response.
     * @param data
     */ handleInitialSocks5HandshakeResponse() {
        const data = this.receiveBuffer.get(2);
        if (data[0] !== 0x05) {
            this.closeSocket(constants_1.ERRORS.InvalidSocks5IntiailHandshakeSocksVersion);
        } else if (data[1] === constants_1.SOCKS5_NO_ACCEPTABLE_AUTH) {
            this.closeSocket(constants_1.ERRORS.InvalidSocks5InitialHandshakeNoAcceptedAuthType);
        } else {
            // If selected Socks v5 auth method is no auth, send final handshake request.
            if (data[1] === constants_1.Socks5Auth.NoAuth) {
                this.socks5ChosenAuthType = constants_1.Socks5Auth.NoAuth;
                this.sendSocks5CommandRequest();
            // If selected Socks v5 auth method is user/password, send auth handshake.
            } else if (data[1] === constants_1.Socks5Auth.UserPass) {
                this.socks5ChosenAuthType = constants_1.Socks5Auth.UserPass;
                this.sendSocks5UserPassAuthentication();
            // If selected Socks v5 auth method is the custom_auth_method, send custom handshake.
            } else if (data[1] === this.options.proxy.custom_auth_method) {
                this.socks5ChosenAuthType = this.options.proxy.custom_auth_method;
                this.sendSocks5CustomAuthentication();
            } else {
                this.closeSocket(constants_1.ERRORS.InvalidSocks5InitialHandshakeUnknownAuthType);
            }
        }
    }
    /**
     * Sends Socks v5 user & password auth handshake.
     *
     * Note: No auth and user/pass are currently supported.
     */ sendSocks5UserPassAuthentication() {
        const userId = this.options.proxy.userId || '';
        const password = this.options.proxy.password || '';
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(0x01);
        buff.writeUInt8(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].byteLength(userId));
        buff.writeString(userId);
        buff.writeUInt8(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].byteLength(password));
        buff.writeString(password);
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5UserPassAuthenticationResponse;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentAuthentication);
    }
    sendSocks5CustomAuthentication() {
        return __awaiter(this, void 0, void 0, function*() {
            this.nextRequiredPacketBufferSize = this.options.proxy.custom_auth_response_size;
            this.socket.write((yield this.options.proxy.custom_auth_request_handler()));
            this.setState(constants_1.SocksClientState.SentAuthentication);
        });
    }
    handleSocks5CustomAuthHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.options.proxy.custom_auth_response_handler(data);
        });
    }
    handleSocks5AuthenticationNoAuthHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function*() {
            return data[1] === 0x00;
        });
    }
    handleSocks5AuthenticationUserPassHandshakeResponse(data) {
        return __awaiter(this, void 0, void 0, function*() {
            return data[1] === 0x00;
        });
    }
    /**
     * Handles Socks v5 auth handshake response.
     * @param data
     */ handleInitialSocks5AuthenticationHandshakeResponse() {
        return __awaiter(this, void 0, void 0, function*() {
            this.setState(constants_1.SocksClientState.ReceivedAuthenticationResponse);
            let authResult = false;
            if (this.socks5ChosenAuthType === constants_1.Socks5Auth.NoAuth) {
                authResult = yield this.handleSocks5AuthenticationNoAuthHandshakeResponse(this.receiveBuffer.get(2));
            } else if (this.socks5ChosenAuthType === constants_1.Socks5Auth.UserPass) {
                authResult = yield this.handleSocks5AuthenticationUserPassHandshakeResponse(this.receiveBuffer.get(2));
            } else if (this.socks5ChosenAuthType === this.options.proxy.custom_auth_method) {
                authResult = yield this.handleSocks5CustomAuthHandshakeResponse(this.receiveBuffer.get(this.options.proxy.custom_auth_response_size));
            }
            if (!authResult) {
                this.closeSocket(constants_1.ERRORS.Socks5AuthenticationFailed);
            } else {
                this.sendSocks5CommandRequest();
            }
        });
    }
    /**
     * Sends Socks v5 final handshake request.
     */ sendSocks5CommandRequest() {
        const buff = new smart_buffer_1.SmartBuffer();
        buff.writeUInt8(0x05);
        buff.writeUInt8(constants_1.SocksCommand[this.options.command]);
        buff.writeUInt8(0x00);
        // ipv4, ipv6, domain?
        if (net.isIPv4(this.options.destination.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv4);
            buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
        } else if (net.isIPv6(this.options.destination.host)) {
            buff.writeUInt8(constants_1.Socks5HostType.IPv6);
            buff.writeBuffer((0, helpers_1.ipToBuffer)(this.options.destination.host));
        } else {
            buff.writeUInt8(constants_1.Socks5HostType.Hostname);
            buff.writeUInt8(this.options.destination.host.length);
            buff.writeString(this.options.destination.host);
        }
        buff.writeUInt16BE(this.options.destination.port);
        this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader;
        this.socket.write(buff.toBuffer());
        this.setState(constants_1.SocksClientState.SentFinalHandshake);
    }
    /**
     * Handles Socks v5 final handshake response.
     * @param data
     */ handleSocks5FinalHandshakeResponse() {
        // Peek at available data (we need at least 5 bytes to get the hostname length)
        const header = this.receiveBuffer.peek(5);
        if (header[0] !== 0x05 || header[1] !== constants_1.Socks5Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.InvalidSocks5FinalHandshakeRejected} - ${constants_1.Socks5Response[header[1]]}`);
        } else {
            // Read address type
            const addressType = header[3];
            let remoteHost;
            let buff;
            // IPv4
            if (addressType === constants_1.Socks5HostType.IPv4) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
                    port: buff.readUInt16BE()
                };
                // If given host is 0.0.0.0, assume remote proxy ip instead.
                if (remoteHost.host === '0.0.0.0') {
                    remoteHost.host = this.options.proxy.ipaddress;
                }
            // Hostname
            } else if (addressType === constants_1.Socks5HostType.Hostname) {
                const hostLength = header[4];
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(hostLength); // header + host length + host + port
                // Check if data is available.
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(5));
                remoteHost = {
                    host: buff.readString(hostLength),
                    port: buff.readUInt16BE()
                };
            // IPv6
            } else if (addressType === constants_1.Socks5HostType.IPv6) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm(),
                    port: buff.readUInt16BE()
                };
            }
            // We have everything we need
            this.setState(constants_1.SocksClientState.ReceivedFinalResponse);
            // If using CONNECT, the client is now in the established state.
            if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.connect) {
                this.setState(constants_1.SocksClientState.Established);
                this.removeInternalSocketHandlers();
                this.emit('established', {
                    remoteHost,
                    socket: this.socket
                });
            } else if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.bind) {
                /* If using BIND, the Socks client is now in BoundWaitingForConnection state.
                   This means that the remote proxy server is waiting for a remote connection to the bound port. */ this.setState(constants_1.SocksClientState.BoundWaitingForConnection);
                this.nextRequiredPacketBufferSize = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHeader;
                this.emit('bound', {
                    remoteHost,
                    socket: this.socket
                });
            /*
                  If using Associate, the Socks client is now Established. And the proxy server is now accepting UDP packets at the
                  given bound port. This initial Socks TCP connection must remain open for the UDP relay to continue to work.
                */ } else if (constants_1.SocksCommand[this.options.command] === constants_1.SocksCommand.associate) {
                this.setState(constants_1.SocksClientState.Established);
                this.removeInternalSocketHandlers();
                this.emit('established', {
                    remoteHost,
                    socket: this.socket
                });
            }
        }
    }
    /**
     * Handles Socks v5 incoming connection request (BIND).
     */ handleSocks5IncomingConnectionResponse() {
        // Peek at available data (we need at least 5 bytes to get the hostname length)
        const header = this.receiveBuffer.peek(5);
        if (header[0] !== 0x05 || header[1] !== constants_1.Socks5Response.Granted) {
            this.closeSocket(`${constants_1.ERRORS.Socks5ProxyRejectedIncomingBoundConnection} - ${constants_1.Socks5Response[header[1]]}`);
        } else {
            // Read address type
            const addressType = header[3];
            let remoteHost;
            let buff;
            // IPv4
            if (addressType === constants_1.Socks5HostType.IPv4) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv4;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: (0, helpers_1.int32ToIpv4)(buff.readUInt32BE()),
                    port: buff.readUInt16BE()
                };
                // If given host is 0.0.0.0, assume remote proxy ip instead.
                if (remoteHost.host === '0.0.0.0') {
                    remoteHost.host = this.options.proxy.ipaddress;
                }
            // Hostname
            } else if (addressType === constants_1.Socks5HostType.Hostname) {
                const hostLength = header[4];
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseHostname(hostLength); // header + host length + port
                // Check if data is available.
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(5));
                remoteHost = {
                    host: buff.readString(hostLength),
                    port: buff.readUInt16BE()
                };
            // IPv6
            } else if (addressType === constants_1.Socks5HostType.IPv6) {
                // Check if data is available.
                const dataNeeded = constants_1.SOCKS_INCOMING_PACKET_SIZES.Socks5ResponseIPv6;
                if (this.receiveBuffer.length < dataNeeded) {
                    this.nextRequiredPacketBufferSize = dataNeeded;
                    return;
                }
                buff = smart_buffer_1.SmartBuffer.fromBuffer(this.receiveBuffer.get(dataNeeded).slice(4));
                remoteHost = {
                    host: ip_address_1.Address6.fromByteArray(Array.from(buff.readBuffer(16))).canonicalForm(),
                    port: buff.readUInt16BE()
                };
            }
            this.setState(constants_1.SocksClientState.Established);
            this.removeInternalSocketHandlers();
            this.emit('established', {
                remoteHost,
                socket: this.socket
            });
        }
    }
    get socksClientOptions() {
        return Object.assign({}, this.options);
    }
}
exports.SocksClient = SocksClient; //# sourceMappingURL=socksclient.js.map
}),
"[project]/energy-os-v0/node_modules/socks/build/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/socks/build/client/socksclient.js [middleware-edge] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/common.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInSubnet = isInSubnet;
exports.isCorrect = isCorrect;
exports.numberToPaddedHex = numberToPaddedHex;
exports.stringToPaddedHex = stringToPaddedHex;
exports.testBit = testBit;
function isInSubnet(address) {
    if (this.subnetMask < address.subnetMask) {
        return false;
    }
    if (this.mask(address.subnetMask) === address.mask()) {
        return true;
    }
    return false;
}
function isCorrect(defaultBits) {
    return function() {
        if (this.addressMinusSuffix !== this.correctForm()) {
            return false;
        }
        if (this.subnetMask === defaultBits && !this.parsedSubnet) {
            return true;
        }
        return this.parsedSubnet === String(this.subnetMask);
    };
}
function numberToPaddedHex(number) {
    return number.toString(16).padStart(2, '0');
}
function stringToPaddedHex(numberString) {
    return numberToPaddedHex(parseInt(numberString, 10));
}
/**
 * @param binaryValue Binary representation of a value (e.g. `10`)
 * @param position Byte position, where 0 is the least significant bit
 */ function testBit(binaryValue, position) {
    const { length } = binaryValue;
    if (position > length) {
        return false;
    }
    const positionInString = length - position;
    return binaryValue.substring(positionInString, positionInString + 1) === '1';
} //# sourceMappingURL=common.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/v4/constants.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RE_SUBNET_STRING = exports.RE_ADDRESS = exports.GROUPS = exports.BITS = void 0;
exports.BITS = 32;
exports.GROUPS = 4;
exports.RE_ADDRESS = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
exports.RE_SUBNET_STRING = /\/\d{1,2}$/; //# sourceMappingURL=constants.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/address-error.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddressError = void 0;
class AddressError extends Error {
    constructor(message, parseMessage){
        super(message);
        this.name = 'AddressError';
        this.parseMessage = parseMessage;
    }
}
exports.AddressError = AddressError; //# sourceMappingURL=address-error.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/ipv4.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable no-param-reassign */ var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Address4 = void 0;
const common = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/common.js [middleware-edge] (ecmascript)"));
const constants = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/v4/constants.js [middleware-edge] (ecmascript)"));
const address_error_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/address-error.js [middleware-edge] (ecmascript)");
/**
 * Represents an IPv4 address
 * @class Address4
 * @param {string} address - An IPv4 address string
 */ class Address4 {
    constructor(address){
        this.groups = constants.GROUPS;
        this.parsedAddress = [];
        this.parsedSubnet = '';
        this.subnet = '/32';
        this.subnetMask = 32;
        this.v4 = true;
        /**
         * Returns true if the address is correct, false otherwise
         * @memberof Address4
         * @instance
         * @returns {Boolean}
         */ this.isCorrect = common.isCorrect(constants.BITS);
        /**
         * Returns true if the given address is in the subnet of the current address
         * @memberof Address4
         * @instance
         * @returns {boolean}
         */ this.isInSubnet = common.isInSubnet;
        this.address = address;
        const subnet = constants.RE_SUBNET_STRING.exec(address);
        if (subnet) {
            this.parsedSubnet = subnet[0].replace('/', '');
            this.subnetMask = parseInt(this.parsedSubnet, 10);
            this.subnet = `/${this.subnetMask}`;
            if (this.subnetMask < 0 || this.subnetMask > constants.BITS) {
                throw new address_error_1.AddressError('Invalid subnet mask.');
            }
            address = address.replace(constants.RE_SUBNET_STRING, '');
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(address);
    }
    static isValid(address) {
        try {
            // eslint-disable-next-line no-new
            new Address4(address);
            return true;
        } catch (e) {
            return false;
        }
    }
    /*
     * Parses a v4 address
     */ parse(address) {
        const groups = address.split('.');
        if (!address.match(constants.RE_ADDRESS)) {
            throw new address_error_1.AddressError('Invalid IPv4 address.');
        }
        return groups;
    }
    /**
     * Returns the correct form of an address
     * @memberof Address4
     * @instance
     * @returns {String}
     */ correctForm() {
        return this.parsedAddress.map((part)=>parseInt(part, 10)).join('.');
    }
    /**
     * Converts a hex string to an IPv4 address object
     * @memberof Address4
     * @static
     * @param {string} hex - a hex string to convert
     * @returns {Address4}
     */ static fromHex(hex) {
        const padded = hex.replace(/:/g, '').padStart(8, '0');
        const groups = [];
        let i;
        for(i = 0; i < 8; i += 2){
            const h = padded.slice(i, i + 2);
            groups.push(parseInt(h, 16));
        }
        return new Address4(groups.join('.'));
    }
    /**
     * Converts an integer into a IPv4 address object
     * @memberof Address4
     * @static
     * @param {integer} integer - a number to convert
     * @returns {Address4}
     */ static fromInteger(integer) {
        return Address4.fromHex(integer.toString(16));
    }
    /**
     * Return an address from in-addr.arpa form
     * @memberof Address4
     * @static
     * @param {string} arpaFormAddress - an 'in-addr.arpa' form ipv4 address
     * @returns {Adress4}
     * @example
     * var address = Address4.fromArpa(42.2.0.192.in-addr.arpa.)
     * address.correctForm(); // '192.0.2.42'
     */ static fromArpa(arpaFormAddress) {
        // remove ending ".in-addr.arpa." or just "."
        const leader = arpaFormAddress.replace(/(\.in-addr\.arpa)?\.$/, '');
        const address = leader.split('.').reverse().join('.');
        return new Address4(address);
    }
    /**
     * Converts an IPv4 address object to a hex string
     * @memberof Address4
     * @instance
     * @returns {String}
     */ toHex() {
        return this.parsedAddress.map((part)=>common.stringToPaddedHex(part)).join(':');
    }
    /**
     * Converts an IPv4 address object to an array of bytes
     * @memberof Address4
     * @instance
     * @returns {Array}
     */ toArray() {
        return this.parsedAddress.map((part)=>parseInt(part, 10));
    }
    /**
     * Converts an IPv4 address object to an IPv6 address group
     * @memberof Address4
     * @instance
     * @returns {String}
     */ toGroup6() {
        const output = [];
        let i;
        for(i = 0; i < constants.GROUPS; i += 2){
            output.push(`${common.stringToPaddedHex(this.parsedAddress[i])}${common.stringToPaddedHex(this.parsedAddress[i + 1])}`);
        }
        return output.join(':');
    }
    /**
     * Returns the address as a `bigint`
     * @memberof Address4
     * @instance
     * @returns {bigint}
     */ bigInt() {
        return BigInt(`0x${this.parsedAddress.map((n)=>common.stringToPaddedHex(n)).join('')}`);
    }
    /**
     * Helper function getting start address.
     * @memberof Address4
     * @instance
     * @returns {bigint}
     */ _startAddress() {
        return BigInt(`0b${this.mask() + '0'.repeat(constants.BITS - this.subnetMask)}`);
    }
    /**
     * The first address in the range given by this address' subnet.
     * Often referred to as the Network Address.
     * @memberof Address4
     * @instance
     * @returns {Address4}
     */ startAddress() {
        return Address4.fromBigInt(this._startAddress());
    }
    /**
     * The first host address in the range given by this address's subnet ie
     * the first address after the Network Address
     * @memberof Address4
     * @instance
     * @returns {Address4}
     */ startAddressExclusive() {
        const adjust = BigInt('1');
        return Address4.fromBigInt(this._startAddress() + adjust);
    }
    /**
     * Helper function getting end address.
     * @memberof Address4
     * @instance
     * @returns {bigint}
     */ _endAddress() {
        return BigInt(`0b${this.mask() + '1'.repeat(constants.BITS - this.subnetMask)}`);
    }
    /**
     * The last address in the range given by this address' subnet
     * Often referred to as the Broadcast
     * @memberof Address4
     * @instance
     * @returns {Address4}
     */ endAddress() {
        return Address4.fromBigInt(this._endAddress());
    }
    /**
     * The last host address in the range given by this address's subnet ie
     * the last address prior to the Broadcast Address
     * @memberof Address4
     * @instance
     * @returns {Address4}
     */ endAddressExclusive() {
        const adjust = BigInt('1');
        return Address4.fromBigInt(this._endAddress() - adjust);
    }
    /**
     * Converts a BigInt to a v4 address object
     * @memberof Address4
     * @static
     * @param {bigint} bigInt - a BigInt to convert
     * @returns {Address4}
     */ static fromBigInt(bigInt) {
        return Address4.fromHex(bigInt.toString(16));
    }
    /**
     * Convert a byte array to an Address4 object
     * @memberof Address4
     * @static
     * @param {Array<number>} bytes - an array of 4 bytes (0-255)
     * @returns {Address4}
     */ static fromByteArray(bytes) {
        if (bytes.length !== 4) {
            throw new address_error_1.AddressError('IPv4 addresses require exactly 4 bytes');
        }
        // Validate that all bytes are within valid range (0-255)
        for(let i = 0; i < bytes.length; i++){
            if (!Number.isInteger(bytes[i]) || bytes[i] < 0 || bytes[i] > 255) {
                throw new address_error_1.AddressError('All bytes must be integers between 0 and 255');
            }
        }
        return this.fromUnsignedByteArray(bytes);
    }
    /**
     * Convert an unsigned byte array to an Address4 object
     * @memberof Address4
     * @static
     * @param {Array<number>} bytes - an array of 4 unsigned bytes (0-255)
     * @returns {Address4}
     */ static fromUnsignedByteArray(bytes) {
        if (bytes.length !== 4) {
            throw new address_error_1.AddressError('IPv4 addresses require exactly 4 bytes');
        }
        const address = bytes.join('.');
        return new Address4(address);
    }
    /**
     * Returns the first n bits of the address, defaulting to the
     * subnet mask
     * @memberof Address4
     * @instance
     * @returns {String}
     */ mask(mask) {
        if (mask === undefined) {
            mask = this.subnetMask;
        }
        return this.getBitsBase2(0, mask);
    }
    /**
     * Returns the bits in the given range as a base-2 string
     * @memberof Address4
     * @instance
     * @returns {string}
     */ getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
    }
    /**
     * Return the reversed ip6.arpa form of the address
     * @memberof Address4
     * @param {Object} options
     * @param {boolean} options.omitSuffix - omit the "in-addr.arpa" suffix
     * @instance
     * @returns {String}
     */ reverseForm(options) {
        if (!options) {
            options = {};
        }
        const reversed = this.correctForm().split('.').reverse().join('.');
        if (options.omitSuffix) {
            return reversed;
        }
        return `${reversed}.in-addr.arpa.`;
    }
    /**
     * Returns true if the given address is a multicast address
     * @memberof Address4
     * @instance
     * @returns {boolean}
     */ isMulticast() {
        return this.isInSubnet(new Address4('224.0.0.0/4'));
    }
    /**
     * Returns a zero-padded base-2 string representation of the address
     * @memberof Address4
     * @instance
     * @returns {string}
     */ binaryZeroPad() {
        return this.bigInt().toString(2).padStart(constants.BITS, '0');
    }
    /**
     * Groups an IPv4 address for inclusion at the end of an IPv6 address
     * @returns {String}
     */ groupForV6() {
        const segments = this.parsedAddress;
        return this.address.replace(constants.RE_ADDRESS, `<span class="hover-group group-v4 group-6">${segments.slice(0, 2).join('.')}</span>.<span class="hover-group group-v4 group-7">${segments.slice(2, 4).join('.')}</span>`);
    }
}
exports.Address4 = Address4; //# sourceMappingURL=ipv4.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/v6/constants.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RE_URL_WITH_PORT = exports.RE_URL = exports.RE_ZONE_STRING = exports.RE_SUBNET_STRING = exports.RE_BAD_ADDRESS = exports.RE_BAD_CHARACTERS = exports.TYPES = exports.SCOPES = exports.GROUPS = exports.BITS = void 0;
exports.BITS = 128;
exports.GROUPS = 8;
/**
 * Represents IPv6 address scopes
 * @memberof Address6
 * @static
 */ exports.SCOPES = {
    0: 'Reserved',
    1: 'Interface local',
    2: 'Link local',
    4: 'Admin local',
    5: 'Site local',
    8: 'Organization local',
    14: 'Global',
    15: 'Reserved'
};
/**
 * Represents IPv6 address types
 * @memberof Address6
 * @static
 */ exports.TYPES = {
    'ff01::1/128': 'Multicast (All nodes on this interface)',
    'ff01::2/128': 'Multicast (All routers on this interface)',
    'ff02::1/128': 'Multicast (All nodes on this link)',
    'ff02::2/128': 'Multicast (All routers on this link)',
    'ff05::2/128': 'Multicast (All routers in this site)',
    'ff02::5/128': 'Multicast (OSPFv3 AllSPF routers)',
    'ff02::6/128': 'Multicast (OSPFv3 AllDR routers)',
    'ff02::9/128': 'Multicast (RIP routers)',
    'ff02::a/128': 'Multicast (EIGRP routers)',
    'ff02::d/128': 'Multicast (PIM routers)',
    'ff02::16/128': 'Multicast (MLDv2 reports)',
    'ff01::fb/128': 'Multicast (mDNSv6)',
    'ff02::fb/128': 'Multicast (mDNSv6)',
    'ff05::fb/128': 'Multicast (mDNSv6)',
    'ff02::1:2/128': 'Multicast (All DHCP servers and relay agents on this link)',
    'ff05::1:2/128': 'Multicast (All DHCP servers and relay agents in this site)',
    'ff02::1:3/128': 'Multicast (All DHCP servers on this link)',
    'ff05::1:3/128': 'Multicast (All DHCP servers in this site)',
    '::/128': 'Unspecified',
    '::1/128': 'Loopback',
    'ff00::/8': 'Multicast',
    'fe80::/10': 'Link-local unicast'
};
/**
 * A regular expression that matches bad characters in an IPv6 address
 * @memberof Address6
 * @static
 */ exports.RE_BAD_CHARACTERS = /([^0-9a-f:/%])/gi;
/**
 * A regular expression that matches an incorrect IPv6 address
 * @memberof Address6
 * @static
 */ exports.RE_BAD_ADDRESS = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/gi;
/**
 * A regular expression that matches an IPv6 subnet
 * @memberof Address6
 * @static
 */ exports.RE_SUBNET_STRING = /\/\d{1,3}(?=%|$)/;
/**
 * A regular expression that matches an IPv6 zone
 * @memberof Address6
 * @static
 */ exports.RE_ZONE_STRING = /%.*$/;
exports.RE_URL = /^\[{0,1}([0-9a-f:]+)\]{0,1}/;
exports.RE_URL_WITH_PORT = /\[([0-9a-f:]+)\]:([0-9]{1,5})/; //# sourceMappingURL=constants.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/v6/helpers.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spanAllZeroes = spanAllZeroes;
exports.spanAll = spanAll;
exports.spanLeadingZeroes = spanLeadingZeroes;
exports.simpleGroup = simpleGroup;
/**
 * @returns {String} the string with all zeroes contained in a <span>
 */ function spanAllZeroes(s) {
    return s.replace(/(0+)/g, '<span class="zero">$1</span>');
}
/**
 * @returns {String} the string with each character contained in a <span>
 */ function spanAll(s, offset = 0) {
    const letters = s.split('');
    return letters.map((n, i)=>`<span class="digit value-${n} position-${i + offset}">${spanAllZeroes(n)}</span>`).join('');
}
function spanLeadingZeroesSimple(group) {
    return group.replace(/^(0+)/, '<span class="zero">$1</span>');
}
/**
 * @returns {String} the string with leading zeroes contained in a <span>
 */ function spanLeadingZeroes(address) {
    const groups = address.split(':');
    return groups.map((g)=>spanLeadingZeroesSimple(g)).join(':');
}
/**
 * Groups an address
 * @returns {String} a grouped address
 */ function simpleGroup(addressString, offset = 0) {
    const groups = addressString.split(':');
    return groups.map((g, i)=>{
        if (/group-v4/.test(g)) {
            return g;
        }
        return `<span class="hover-group group-${i + offset}">${spanLeadingZeroesSimple(g)}</span>`;
    });
} //# sourceMappingURL=helpers.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/v6/regular-expressions.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ADDRESS_BOUNDARY = void 0;
exports.groupPossibilities = groupPossibilities;
exports.padGroup = padGroup;
exports.simpleRegularExpression = simpleRegularExpression;
exports.possibleElisions = possibleElisions;
const v6 = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/v6/constants.js [middleware-edge] (ecmascript)"));
function groupPossibilities(possibilities) {
    return `(${possibilities.join('|')})`;
}
function padGroup(group) {
    if (group.length < 4) {
        return `0{0,${4 - group.length}}${group}`;
    }
    return group;
}
exports.ADDRESS_BOUNDARY = '[^A-Fa-f0-9:]';
function simpleRegularExpression(groups) {
    const zeroIndexes = [];
    groups.forEach((group, i)=>{
        const groupInteger = parseInt(group, 16);
        if (groupInteger === 0) {
            zeroIndexes.push(i);
        }
    });
    // You can technically elide a single 0, this creates the regular expressions
    // to match that eventuality
    const possibilities = zeroIndexes.map((zeroIndex)=>groups.map((group, i)=>{
            if (i === zeroIndex) {
                const elision = i === 0 || i === v6.GROUPS - 1 ? ':' : '';
                return groupPossibilities([
                    padGroup(group),
                    elision
                ]);
            }
            return padGroup(group);
        }).join(':'));
    // The simplest case
    possibilities.push(groups.map(padGroup).join(':'));
    return groupPossibilities(possibilities);
}
function possibleElisions(elidedGroups, moreLeft, moreRight) {
    const left = moreLeft ? '' : ':';
    const right = moreRight ? '' : ':';
    const possibilities = [];
    // 1. elision of everything (::)
    if (!moreLeft && !moreRight) {
        possibilities.push('::');
    }
    // 2. complete elision of the middle
    if (moreLeft && moreRight) {
        possibilities.push('');
    }
    if (moreRight && !moreLeft || !moreRight && moreLeft) {
        // 3. complete elision of one side
        possibilities.push(':');
    }
    // 4. elision from the left side
    possibilities.push(`${left}(:0{1,4}){1,${elidedGroups - 1}}`);
    // 5. elision from the right side
    possibilities.push(`(0{1,4}:){1,${elidedGroups - 1}}${right}`);
    // 6. no elision
    possibilities.push(`(0{1,4}:){${elidedGroups - 1}}0{1,4}`);
    // 7. elision (including sloppy elision) from the middle
    for(let groups = 1; groups < elidedGroups - 1; groups++){
        for(let position = 1; position < elidedGroups - groups; position++){
            possibilities.push(`(0{1,4}:){${position}}:(0{1,4}:){${elidedGroups - position - groups - 1}}0{1,4}`);
        }
    }
    return groupPossibilities(possibilities);
} //# sourceMappingURL=regular-expressions.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/ipv6.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable prefer-destructuring */ /* eslint-disable no-param-reassign */ var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Address6 = void 0;
const common = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/common.js [middleware-edge] (ecmascript)"));
const constants4 = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/v4/constants.js [middleware-edge] (ecmascript)"));
const constants6 = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/v6/constants.js [middleware-edge] (ecmascript)"));
const helpers = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/v6/helpers.js [middleware-edge] (ecmascript)"));
const ipv4_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/ipv4.js [middleware-edge] (ecmascript)");
const regular_expressions_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/v6/regular-expressions.js [middleware-edge] (ecmascript)");
const address_error_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/address-error.js [middleware-edge] (ecmascript)");
const common_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/common.js [middleware-edge] (ecmascript)");
function assert(condition) {
    if (!condition) {
        throw new Error('Assertion failed.');
    }
}
function addCommas(number) {
    const r = /(\d+)(\d{3})/;
    while(r.test(number)){
        number = number.replace(r, '$1,$2');
    }
    return number;
}
function spanLeadingZeroes4(n) {
    n = n.replace(/^(0{1,})([1-9]+)$/, '<span class="parse-error">$1</span>$2');
    n = n.replace(/^(0{1,})(0)$/, '<span class="parse-error">$1</span>$2');
    return n;
}
/*
 * A helper function to compact an array
 */ function compact(address, slice) {
    const s1 = [];
    const s2 = [];
    let i;
    for(i = 0; i < address.length; i++){
        if (i < slice[0]) {
            s1.push(address[i]);
        } else if (i > slice[1]) {
            s2.push(address[i]);
        }
    }
    return s1.concat([
        'compact'
    ]).concat(s2);
}
function paddedHex(octet) {
    return parseInt(octet, 16).toString(16).padStart(4, '0');
}
function unsignByte(b) {
    // eslint-disable-next-line no-bitwise
    return b & 0xff;
}
/**
 * Represents an IPv6 address
 * @class Address6
 * @param {string} address - An IPv6 address string
 * @param {number} [groups=8] - How many octets to parse
 * @example
 * var address = new Address6('2001::/32');
 */ class Address6 {
    constructor(address, optionalGroups){
        this.addressMinusSuffix = '';
        this.parsedSubnet = '';
        this.subnet = '/128';
        this.subnetMask = 128;
        this.v4 = false;
        this.zone = '';
        // #region Attributes
        /**
         * Returns true if the given address is in the subnet of the current address
         * @memberof Address6
         * @instance
         * @returns {boolean}
         */ this.isInSubnet = common.isInSubnet;
        /**
         * Returns true if the address is correct, false otherwise
         * @memberof Address6
         * @instance
         * @returns {boolean}
         */ this.isCorrect = common.isCorrect(constants6.BITS);
        if (optionalGroups === undefined) {
            this.groups = constants6.GROUPS;
        } else {
            this.groups = optionalGroups;
        }
        this.address = address;
        const subnet = constants6.RE_SUBNET_STRING.exec(address);
        if (subnet) {
            this.parsedSubnet = subnet[0].replace('/', '');
            this.subnetMask = parseInt(this.parsedSubnet, 10);
            this.subnet = `/${this.subnetMask}`;
            if (Number.isNaN(this.subnetMask) || this.subnetMask < 0 || this.subnetMask > constants6.BITS) {
                throw new address_error_1.AddressError('Invalid subnet mask.');
            }
            address = address.replace(constants6.RE_SUBNET_STRING, '');
        } else if (/\//.test(address)) {
            throw new address_error_1.AddressError('Invalid subnet mask.');
        }
        const zone = constants6.RE_ZONE_STRING.exec(address);
        if (zone) {
            this.zone = zone[0];
            address = address.replace(constants6.RE_ZONE_STRING, '');
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(this.addressMinusSuffix);
    }
    static isValid(address) {
        try {
            // eslint-disable-next-line no-new
            new Address6(address);
            return true;
        } catch (e) {
            return false;
        }
    }
    /**
     * Convert a BigInt to a v6 address object
     * @memberof Address6
     * @static
     * @param {bigint} bigInt - a BigInt to convert
     * @returns {Address6}
     * @example
     * var bigInt = BigInt('1000000000000');
     * var address = Address6.fromBigInt(bigInt);
     * address.correctForm(); // '::e8:d4a5:1000'
     */ static fromBigInt(bigInt) {
        const hex = bigInt.toString(16).padStart(32, '0');
        const groups = [];
        let i;
        for(i = 0; i < constants6.GROUPS; i++){
            groups.push(hex.slice(i * 4, (i + 1) * 4));
        }
        return new Address6(groups.join(':'));
    }
    /**
     * Convert a URL (with optional port number) to an address object
     * @memberof Address6
     * @static
     * @param {string} url - a URL with optional port number
     * @example
     * var addressAndPort = Address6.fromURL('http://[ffff::]:8080/foo/');
     * addressAndPort.address.correctForm(); // 'ffff::'
     * addressAndPort.port; // 8080
     */ static fromURL(url) {
        let host;
        let port = null;
        let result;
        // If we have brackets parse them and find a port
        if (url.indexOf('[') !== -1 && url.indexOf(']:') !== -1) {
            result = constants6.RE_URL_WITH_PORT.exec(url);
            if (result === null) {
                return {
                    error: 'failed to parse address with port',
                    address: null,
                    port: null
                };
            }
            host = result[1];
            port = result[2];
        // If there's a URL extract the address
        } else if (url.indexOf('/') !== -1) {
            // Remove the protocol prefix
            url = url.replace(/^[a-z0-9]+:\/\//, '');
            // Parse the address
            result = constants6.RE_URL.exec(url);
            if (result === null) {
                return {
                    error: 'failed to parse address from URL',
                    address: null,
                    port: null
                };
            }
            host = result[1];
        // Otherwise just assign the URL to the host and let the library parse it
        } else {
            host = url;
        }
        // If there's a port convert it to an integer
        if (port) {
            port = parseInt(port, 10);
            // squelch out of range ports
            if (port < 0 || port > 65536) {
                port = null;
            }
        } else {
            // Standardize `undefined` to `null`
            port = null;
        }
        return {
            address: new Address6(host),
            port
        };
    }
    /**
     * Create an IPv6-mapped address given an IPv4 address
     * @memberof Address6
     * @static
     * @param {string} address - An IPv4 address string
     * @returns {Address6}
     * @example
     * var address = Address6.fromAddress4('192.168.0.1');
     * address.correctForm(); // '::ffff:c0a8:1'
     * address.to4in6(); // '::ffff:192.168.0.1'
     */ static fromAddress4(address) {
        const address4 = new ipv4_1.Address4(address);
        const mask6 = constants6.BITS - (constants4.BITS - address4.subnetMask);
        return new Address6(`::ffff:${address4.correctForm()}/${mask6}`);
    }
    /**
     * Return an address from ip6.arpa form
     * @memberof Address6
     * @static
     * @param {string} arpaFormAddress - an 'ip6.arpa' form address
     * @returns {Adress6}
     * @example
     * var address = Address6.fromArpa(e.f.f.f.3.c.2.6.f.f.f.e.6.6.8.e.1.0.6.7.9.4.e.c.0.0.0.0.1.0.0.2.ip6.arpa.)
     * address.correctForm(); // '2001:0:ce49:7601:e866:efff:62c3:fffe'
     */ static fromArpa(arpaFormAddress) {
        // remove ending ".ip6.arpa." or just "."
        let address = arpaFormAddress.replace(/(\.ip6\.arpa)?\.$/, '');
        const semicolonAmount = 7;
        // correct ip6.arpa form with ending removed will be 63 characters
        if (address.length !== 63) {
            throw new address_error_1.AddressError("Invalid 'ip6.arpa' form.");
        }
        const parts = address.split('.').reverse();
        for(let i = semicolonAmount; i > 0; i--){
            const insertIndex = i * 4;
            parts.splice(insertIndex, 0, ':');
        }
        address = parts.join('');
        return new Address6(address);
    }
    /**
     * Return the Microsoft UNC transcription of the address
     * @memberof Address6
     * @instance
     * @returns {String} the Microsoft UNC transcription of the address
     */ microsoftTranscription() {
        return `${this.correctForm().replace(/:/g, '-')}.ipv6-literal.net`;
    }
    /**
     * Return the first n bits of the address, defaulting to the subnet mask
     * @memberof Address6
     * @instance
     * @param {number} [mask=subnet] - the number of bits to mask
     * @returns {String} the first n bits of the address as a string
     */ mask(mask = this.subnetMask) {
        return this.getBitsBase2(0, mask);
    }
    /**
     * Return the number of possible subnets of a given size in the address
     * @memberof Address6
     * @instance
     * @param {number} [subnetSize=128] - the subnet size
     * @returns {String}
     */ // TODO: probably useful to have a numeric version of this too
    possibleSubnets(subnetSize = 128) {
        const availableBits = constants6.BITS - this.subnetMask;
        const subnetBits = Math.abs(subnetSize - constants6.BITS);
        const subnetPowers = availableBits - subnetBits;
        if (subnetPowers < 0) {
            return '0';
        }
        return addCommas((BigInt('2') ** BigInt(subnetPowers)).toString(10));
    }
    /**
     * Helper function getting start address.
     * @memberof Address6
     * @instance
     * @returns {bigint}
     */ _startAddress() {
        return BigInt(`0b${this.mask() + '0'.repeat(constants6.BITS - this.subnetMask)}`);
    }
    /**
     * The first address in the range given by this address' subnet
     * Often referred to as the Network Address.
     * @memberof Address6
     * @instance
     * @returns {Address6}
     */ startAddress() {
        return Address6.fromBigInt(this._startAddress());
    }
    /**
     * The first host address in the range given by this address's subnet ie
     * the first address after the Network Address
     * @memberof Address6
     * @instance
     * @returns {Address6}
     */ startAddressExclusive() {
        const adjust = BigInt('1');
        return Address6.fromBigInt(this._startAddress() + adjust);
    }
    /**
     * Helper function getting end address.
     * @memberof Address6
     * @instance
     * @returns {bigint}
     */ _endAddress() {
        return BigInt(`0b${this.mask() + '1'.repeat(constants6.BITS - this.subnetMask)}`);
    }
    /**
     * The last address in the range given by this address' subnet
     * Often referred to as the Broadcast
     * @memberof Address6
     * @instance
     * @returns {Address6}
     */ endAddress() {
        return Address6.fromBigInt(this._endAddress());
    }
    /**
     * The last host address in the range given by this address's subnet ie
     * the last address prior to the Broadcast Address
     * @memberof Address6
     * @instance
     * @returns {Address6}
     */ endAddressExclusive() {
        const adjust = BigInt('1');
        return Address6.fromBigInt(this._endAddress() - adjust);
    }
    /**
     * Return the scope of the address
     * @memberof Address6
     * @instance
     * @returns {String}
     */ getScope() {
        let scope = constants6.SCOPES[parseInt(this.getBits(12, 16).toString(10), 10)];
        if (this.getType() === 'Global unicast' && scope !== 'Link local') {
            scope = 'Global';
        }
        return scope || 'Unknown';
    }
    /**
     * Return the type of the address
     * @memberof Address6
     * @instance
     * @returns {String}
     */ getType() {
        for (const subnet of Object.keys(constants6.TYPES)){
            if (this.isInSubnet(new Address6(subnet))) {
                return constants6.TYPES[subnet];
            }
        }
        return 'Global unicast';
    }
    /**
     * Return the bits in the given range as a BigInt
     * @memberof Address6
     * @instance
     * @returns {bigint}
     */ getBits(start, end) {
        return BigInt(`0b${this.getBitsBase2(start, end)}`);
    }
    /**
     * Return the bits in the given range as a base-2 string
     * @memberof Address6
     * @instance
     * @returns {String}
     */ getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
    }
    /**
     * Return the bits in the given range as a base-16 string
     * @memberof Address6
     * @instance
     * @returns {String}
     */ getBitsBase16(start, end) {
        const length = end - start;
        if (length % 4 !== 0) {
            throw new Error('Length of bits to retrieve must be divisible by four');
        }
        return this.getBits(start, end).toString(16).padStart(length / 4, '0');
    }
    /**
     * Return the bits that are set past the subnet mask length
     * @memberof Address6
     * @instance
     * @returns {String}
     */ getBitsPastSubnet() {
        return this.getBitsBase2(this.subnetMask, constants6.BITS);
    }
    /**
     * Return the reversed ip6.arpa form of the address
     * @memberof Address6
     * @param {Object} options
     * @param {boolean} options.omitSuffix - omit the "ip6.arpa" suffix
     * @instance
     * @returns {String}
     */ reverseForm(options) {
        if (!options) {
            options = {};
        }
        const characters = Math.floor(this.subnetMask / 4);
        const reversed = this.canonicalForm().replace(/:/g, '').split('').slice(0, characters).reverse().join('.');
        if (characters > 0) {
            if (options.omitSuffix) {
                return reversed;
            }
            return `${reversed}.ip6.arpa.`;
        }
        if (options.omitSuffix) {
            return '';
        }
        return 'ip6.arpa.';
    }
    /**
     * Return the correct form of the address
     * @memberof Address6
     * @instance
     * @returns {String}
     */ correctForm() {
        let i;
        let groups = [];
        let zeroCounter = 0;
        const zeroes = [];
        for(i = 0; i < this.parsedAddress.length; i++){
            const value = parseInt(this.parsedAddress[i], 16);
            if (value === 0) {
                zeroCounter++;
            }
            if (value !== 0 && zeroCounter > 0) {
                if (zeroCounter > 1) {
                    zeroes.push([
                        i - zeroCounter,
                        i - 1
                    ]);
                }
                zeroCounter = 0;
            }
        }
        // Do we end with a string of zeroes?
        if (zeroCounter > 1) {
            zeroes.push([
                this.parsedAddress.length - zeroCounter,
                this.parsedAddress.length - 1
            ]);
        }
        const zeroLengths = zeroes.map((n)=>n[1] - n[0] + 1);
        if (zeroes.length > 0) {
            const index = zeroLengths.indexOf(Math.max(...zeroLengths));
            groups = compact(this.parsedAddress, zeroes[index]);
        } else {
            groups = this.parsedAddress;
        }
        for(i = 0; i < groups.length; i++){
            if (groups[i] !== 'compact') {
                groups[i] = parseInt(groups[i], 16).toString(16);
            }
        }
        let correct = groups.join(':');
        correct = correct.replace(/^compact$/, '::');
        correct = correct.replace(/(^compact)|(compact$)/, ':');
        correct = correct.replace(/compact/, '');
        return correct;
    }
    /**
     * Return a zero-padded base-2 string representation of the address
     * @memberof Address6
     * @instance
     * @returns {String}
     * @example
     * var address = new Address6('2001:4860:4001:803::1011');
     * address.binaryZeroPad();
     * // '0010000000000001010010000110000001000000000000010000100000000011
     * //  0000000000000000000000000000000000000000000000000001000000010001'
     */ binaryZeroPad() {
        return this.bigInt().toString(2).padStart(constants6.BITS, '0');
    }
    // TODO: Improve the semantics of this helper function
    parse4in6(address) {
        const groups = address.split(':');
        const lastGroup = groups.slice(-1)[0];
        const address4 = lastGroup.match(constants4.RE_ADDRESS);
        if (address4) {
            this.parsedAddress4 = address4[0];
            this.address4 = new ipv4_1.Address4(this.parsedAddress4);
            for(let i = 0; i < this.address4.groups; i++){
                if (/^0[0-9]+/.test(this.address4.parsedAddress[i])) {
                    throw new address_error_1.AddressError("IPv4 addresses can't have leading zeroes.", address.replace(constants4.RE_ADDRESS, this.address4.parsedAddress.map(spanLeadingZeroes4).join('.')));
                }
            }
            this.v4 = true;
            groups[groups.length - 1] = this.address4.toGroup6();
            address = groups.join(':');
        }
        return address;
    }
    // TODO: Make private?
    parse(address) {
        address = this.parse4in6(address);
        const badCharacters = address.match(constants6.RE_BAD_CHARACTERS);
        if (badCharacters) {
            throw new address_error_1.AddressError(`Bad character${badCharacters.length > 1 ? 's' : ''} detected in address: ${badCharacters.join('')}`, address.replace(constants6.RE_BAD_CHARACTERS, '<span class="parse-error">$1</span>'));
        }
        const badAddress = address.match(constants6.RE_BAD_ADDRESS);
        if (badAddress) {
            throw new address_error_1.AddressError(`Address failed regex: ${badAddress.join('')}`, address.replace(constants6.RE_BAD_ADDRESS, '<span class="parse-error">$1</span>'));
        }
        let groups = [];
        const halves = address.split('::');
        if (halves.length === 2) {
            let first = halves[0].split(':');
            let last = halves[1].split(':');
            if (first.length === 1 && first[0] === '') {
                first = [];
            }
            if (last.length === 1 && last[0] === '') {
                last = [];
            }
            const remaining = this.groups - (first.length + last.length);
            if (!remaining) {
                throw new address_error_1.AddressError('Error parsing groups');
            }
            this.elidedGroups = remaining;
            this.elisionBegin = first.length;
            this.elisionEnd = first.length + this.elidedGroups;
            groups = groups.concat(first);
            for(let i = 0; i < remaining; i++){
                groups.push('0');
            }
            groups = groups.concat(last);
        } else if (halves.length === 1) {
            groups = address.split(':');
            this.elidedGroups = 0;
        } else {
            throw new address_error_1.AddressError('Too many :: groups found');
        }
        groups = groups.map((group)=>parseInt(group, 16).toString(16));
        if (groups.length !== this.groups) {
            throw new address_error_1.AddressError('Incorrect number of groups found');
        }
        return groups;
    }
    /**
     * Return the canonical form of the address
     * @memberof Address6
     * @instance
     * @returns {String}
     */ canonicalForm() {
        return this.parsedAddress.map(paddedHex).join(':');
    }
    /**
     * Return the decimal form of the address
     * @memberof Address6
     * @instance
     * @returns {String}
     */ decimal() {
        return this.parsedAddress.map((n)=>parseInt(n, 16).toString(10).padStart(5, '0')).join(':');
    }
    /**
     * Return the address as a BigInt
     * @memberof Address6
     * @instance
     * @returns {bigint}
     */ bigInt() {
        return BigInt(`0x${this.parsedAddress.map(paddedHex).join('')}`);
    }
    /**
     * Return the last two groups of this address as an IPv4 address string
     * @memberof Address6
     * @instance
     * @returns {Address4}
     * @example
     * var address = new Address6('2001:4860:4001::1825:bf11');
     * address.to4().correctForm(); // '24.37.191.17'
     */ to4() {
        const binary = this.binaryZeroPad().split('');
        return ipv4_1.Address4.fromHex(BigInt(`0b${binary.slice(96, 128).join('')}`).toString(16));
    }
    /**
     * Return the v4-in-v6 form of the address
     * @memberof Address6
     * @instance
     * @returns {String}
     */ to4in6() {
        const address4 = this.to4();
        const address6 = new Address6(this.parsedAddress.slice(0, 6).join(':'), 6);
        const correct = address6.correctForm();
        let infix = '';
        if (!/:$/.test(correct)) {
            infix = ':';
        }
        return correct + infix + address4.address;
    }
    /**
     * Return an object containing the Teredo properties of the address
     * @memberof Address6
     * @instance
     * @returns {Object}
     */ inspectTeredo() {
        /*
        - Bits 0 to 31 are set to the Teredo prefix (normally 2001:0000::/32).
        - Bits 32 to 63 embed the primary IPv4 address of the Teredo server that
          is used.
        - Bits 64 to 79 can be used to define some flags. Currently only the
          higher order bit is used; it is set to 1 if the Teredo client is
          located behind a cone NAT, 0 otherwise. For Microsoft's Windows Vista
          and Windows Server 2008 implementations, more bits are used. In those
          implementations, the format for these 16 bits is "CRAAAAUG AAAAAAAA",
          where "C" remains the "Cone" flag. The "R" bit is reserved for future
          use. The "U" bit is for the Universal/Local flag (set to 0). The "G" bit
          is Individual/Group flag (set to 0). The A bits are set to a 12-bit
          randomly generated number chosen by the Teredo client to introduce
          additional protection for the Teredo node against IPv6-based scanning
          attacks.
        - Bits 80 to 95 contains the obfuscated UDP port number. This is the
          port number that is mapped by the NAT to the Teredo client with all
          bits inverted.
        - Bits 96 to 127 contains the obfuscated IPv4 address. This is the
          public IPv4 address of the NAT with all bits inverted.
        */ const prefix = this.getBitsBase16(0, 32);
        const bitsForUdpPort = this.getBits(80, 96);
        // eslint-disable-next-line no-bitwise
        const udpPort = (bitsForUdpPort ^ BigInt('0xffff')).toString();
        const server4 = ipv4_1.Address4.fromHex(this.getBitsBase16(32, 64));
        const bitsForClient4 = this.getBits(96, 128);
        // eslint-disable-next-line no-bitwise
        const client4 = ipv4_1.Address4.fromHex((bitsForClient4 ^ BigInt('0xffffffff')).toString(16));
        const flagsBase2 = this.getBitsBase2(64, 80);
        const coneNat = (0, common_1.testBit)(flagsBase2, 15);
        const reserved = (0, common_1.testBit)(flagsBase2, 14);
        const groupIndividual = (0, common_1.testBit)(flagsBase2, 8);
        const universalLocal = (0, common_1.testBit)(flagsBase2, 9);
        const nonce = BigInt(`0b${flagsBase2.slice(2, 6) + flagsBase2.slice(8, 16)}`).toString(10);
        return {
            prefix: `${prefix.slice(0, 4)}:${prefix.slice(4, 8)}`,
            server4: server4.address,
            client4: client4.address,
            flags: flagsBase2,
            coneNat,
            microsoft: {
                reserved,
                universalLocal,
                groupIndividual,
                nonce
            },
            udpPort
        };
    }
    /**
     * Return an object containing the 6to4 properties of the address
     * @memberof Address6
     * @instance
     * @returns {Object}
     */ inspect6to4() {
        /*
        - Bits 0 to 15 are set to the 6to4 prefix (2002::/16).
        - Bits 16 to 48 embed the IPv4 address of the 6to4 gateway that is used.
        */ const prefix = this.getBitsBase16(0, 16);
        const gateway = ipv4_1.Address4.fromHex(this.getBitsBase16(16, 48));
        return {
            prefix: prefix.slice(0, 4),
            gateway: gateway.address
        };
    }
    /**
     * Return a v6 6to4 address from a v6 v4inv6 address
     * @memberof Address6
     * @instance
     * @returns {Address6}
     */ to6to4() {
        if (!this.is4()) {
            return null;
        }
        const addr6to4 = [
            '2002',
            this.getBitsBase16(96, 112),
            this.getBitsBase16(112, 128),
            '',
            '/16'
        ].join(':');
        return new Address6(addr6to4);
    }
    /**
     * Return a byte array
     * @memberof Address6
     * @instance
     * @returns {Array}
     */ toByteArray() {
        const valueWithoutPadding = this.bigInt().toString(16);
        const leadingPad = '0'.repeat(valueWithoutPadding.length % 2);
        const value = `${leadingPad}${valueWithoutPadding}`;
        const bytes = [];
        for(let i = 0, length = value.length; i < length; i += 2){
            bytes.push(parseInt(value.substring(i, i + 2), 16));
        }
        return bytes;
    }
    /**
     * Return an unsigned byte array
     * @memberof Address6
     * @instance
     * @returns {Array}
     */ toUnsignedByteArray() {
        return this.toByteArray().map(unsignByte);
    }
    /**
     * Convert a byte array to an Address6 object
     * @memberof Address6
     * @static
     * @returns {Address6}
     */ static fromByteArray(bytes) {
        return this.fromUnsignedByteArray(bytes.map(unsignByte));
    }
    /**
     * Convert an unsigned byte array to an Address6 object
     * @memberof Address6
     * @static
     * @returns {Address6}
     */ static fromUnsignedByteArray(bytes) {
        const BYTE_MAX = BigInt('256');
        let result = BigInt('0');
        let multiplier = BigInt('1');
        for(let i = bytes.length - 1; i >= 0; i--){
            result += multiplier * BigInt(bytes[i].toString(10));
            multiplier *= BYTE_MAX;
        }
        return Address6.fromBigInt(result);
    }
    /**
     * Returns true if the address is in the canonical form, false otherwise
     * @memberof Address6
     * @instance
     * @returns {boolean}
     */ isCanonical() {
        return this.addressMinusSuffix === this.canonicalForm();
    }
    /**
     * Returns true if the address is a link local address, false otherwise
     * @memberof Address6
     * @instance
     * @returns {boolean}
     */ isLinkLocal() {
        // Zeroes are required, i.e. we can't check isInSubnet with 'fe80::/10'
        if (this.getBitsBase2(0, 64) === '1111111010000000000000000000000000000000000000000000000000000000') {
            return true;
        }
        return false;
    }
    /**
     * Returns true if the address is a multicast address, false otherwise
     * @memberof Address6
     * @instance
     * @returns {boolean}
     */ isMulticast() {
        return this.getType() === 'Multicast';
    }
    /**
     * Returns true if the address is a v4-in-v6 address, false otherwise
     * @memberof Address6
     * @instance
     * @returns {boolean}
     */ is4() {
        return this.v4;
    }
    /**
     * Returns true if the address is a Teredo address, false otherwise
     * @memberof Address6
     * @instance
     * @returns {boolean}
     */ isTeredo() {
        return this.isInSubnet(new Address6('2001::/32'));
    }
    /**
     * Returns true if the address is a 6to4 address, false otherwise
     * @memberof Address6
     * @instance
     * @returns {boolean}
     */ is6to4() {
        return this.isInSubnet(new Address6('2002::/16'));
    }
    /**
     * Returns true if the address is a loopback address, false otherwise
     * @memberof Address6
     * @instance
     * @returns {boolean}
     */ isLoopback() {
        return this.getType() === 'Loopback';
    }
    // #endregion
    // #region HTML
    /**
     * @returns {String} the address in link form with a default port of 80
     */ href(optionalPort) {
        if (optionalPort === undefined) {
            optionalPort = '';
        } else {
            optionalPort = `:${optionalPort}`;
        }
        return `http://[${this.correctForm()}]${optionalPort}/`;
    }
    /**
     * @returns {String} a link suitable for conveying the address via a URL hash
     */ link(options) {
        if (!options) {
            options = {};
        }
        if (options.className === undefined) {
            options.className = '';
        }
        if (options.prefix === undefined) {
            options.prefix = '/#address=';
        }
        if (options.v4 === undefined) {
            options.v4 = false;
        }
        let formFunction = this.correctForm;
        if (options.v4) {
            formFunction = this.to4in6;
        }
        const form = formFunction.call(this);
        if (options.className) {
            return `<a href="${options.prefix}${form}" class="${options.className}">${form}</a>`;
        }
        return `<a href="${options.prefix}${form}">${form}</a>`;
    }
    /**
     * Groups an address
     * @returns {String}
     */ group() {
        if (this.elidedGroups === 0) {
            // The simple case
            return helpers.simpleGroup(this.address).join(':');
        }
        assert(typeof this.elidedGroups === 'number');
        assert(typeof this.elisionBegin === 'number');
        // The elided case
        const output = [];
        const [left, right] = this.address.split('::');
        if (left.length) {
            output.push(...helpers.simpleGroup(left));
        } else {
            output.push('');
        }
        const classes = [
            'hover-group'
        ];
        for(let i = this.elisionBegin; i < this.elisionBegin + this.elidedGroups; i++){
            classes.push(`group-${i}`);
        }
        output.push(`<span class="${classes.join(' ')}"></span>`);
        if (right.length) {
            output.push(...helpers.simpleGroup(right, this.elisionEnd));
        } else {
            output.push('');
        }
        if (this.is4()) {
            assert(this.address4 instanceof ipv4_1.Address4);
            output.pop();
            output.push(this.address4.groupForV6());
        }
        return output.join(':');
    }
    // #endregion
    // #region Regular expressions
    /**
     * Generate a regular expression string that can be used to find or validate
     * all variations of this address
     * @memberof Address6
     * @instance
     * @param {boolean} substringSearch
     * @returns {string}
     */ regularExpressionString(substringSearch = false) {
        let output = [];
        // TODO: revisit why this is necessary
        const address6 = new Address6(this.correctForm());
        if (address6.elidedGroups === 0) {
            // The simple case
            output.push((0, regular_expressions_1.simpleRegularExpression)(address6.parsedAddress));
        } else if (address6.elidedGroups === constants6.GROUPS) {
            // A completely elided address
            output.push((0, regular_expressions_1.possibleElisions)(constants6.GROUPS));
        } else {
            // A partially elided address
            const halves = address6.address.split('::');
            if (halves[0].length) {
                output.push((0, regular_expressions_1.simpleRegularExpression)(halves[0].split(':')));
            }
            assert(typeof address6.elidedGroups === 'number');
            output.push((0, regular_expressions_1.possibleElisions)(address6.elidedGroups, halves[0].length !== 0, halves[1].length !== 0));
            if (halves[1].length) {
                output.push((0, regular_expressions_1.simpleRegularExpression)(halves[1].split(':')));
            }
            output = [
                output.join(':')
            ];
        }
        if (!substringSearch) {
            output = [
                '(?=^|',
                regular_expressions_1.ADDRESS_BOUNDARY,
                '|[^\\w\\:])(',
                ...output,
                ')(?=[^\\w\\:]|',
                regular_expressions_1.ADDRESS_BOUNDARY,
                '|$)'
            ];
        }
        return output.join('');
    }
    /**
     * Generate a regular expression that can be used to find or validate all
     * variations of this address.
     * @memberof Address6
     * @instance
     * @param {boolean} substringSearch
     * @returns {RegExp}
     */ regularExpression(substringSearch = false) {
        return new RegExp(this.regularExpressionString(substringSearch), 'i');
    }
}
exports.Address6 = Address6; //# sourceMappingURL=ipv6.js.map
}),
"[project]/energy-os-v0/node_modules/ip-address/dist/ip-address.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.v6 = exports.AddressError = exports.Address6 = exports.Address4 = void 0;
var ipv4_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/ipv4.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "Address4", {
    enumerable: true,
    get: function() {
        return ipv4_1.Address4;
    }
});
var ipv6_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/ipv6.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "Address6", {
    enumerable: true,
    get: function() {
        return ipv6_1.Address6;
    }
});
var address_error_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/address-error.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "AddressError", {
    enumerable: true,
    get: function() {
        return address_error_1.AddressError;
    }
});
const helpers = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/ip-address/dist/v6/helpers.js [middleware-edge] (ecmascript)"));
exports.v6 = {
    helpers
}; //# sourceMappingURL=ip-address.js.map
}),
"[project]/energy-os-v0/node_modules/mongodb-client-encryption/lib/bindings.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mc = void 0;
function load() {
    try {
        return (()=>{
            throw new Error('could not resolve "' + '../build/Release/mongocrypt.node' + '" into a module');
        })();
    } catch  {
        // Webpack will fail when just returning the require, so we need to wrap
        // in a try/catch and rethrow.
        /* eslint no-useless-catch: 0 */ try {
            return (()=>{
                const e = new Error("Cannot find module '../build/Debug/mongocrypt.node'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        } catch (error) {
            throw error;
        }
    }
}
exports.mc = load(); // export const
 //# sourceMappingURL=bindings.js.map
}),
"[project]/energy-os-v0/node_modules/mongodb-client-encryption/lib/crypto_callbacks.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cryptoCallbacks = void 0;
exports.makeHmacHook = makeHmacHook;
const crypto = __turbopack_context__.r("[project]/ [middleware-edge] (unsupported edge import 'crypto', ecmascript)");
function makeAES256Hook(method, mode) {
    return function(key, iv, input, output) {
        let result;
        try {
            const cipher = crypto[method](mode, key, iv);
            cipher.setAutoPadding(false);
            result = cipher.update(input);
            const final = cipher.final();
            if (final.length > 0) {
                result = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat([
                    result,
                    final
                ]);
            }
        } catch (e) {
            return e;
        }
        result.copy(output);
        return result.length;
    };
}
function randomHook(buffer, count) {
    try {
        crypto.randomFillSync(buffer, 0, count);
    } catch (e) {
        return e;
    }
    return count;
}
function sha256Hook(input, output) {
    let result;
    try {
        result = crypto.createHash('sha256').update(input).digest();
    } catch (e) {
        return e;
    }
    result.copy(output);
    return result.length;
}
function makeHmacHook(algorithm) {
    return (key, input, output)=>{
        let result;
        try {
            result = crypto.createHmac(algorithm, key).update(input).digest();
        } catch (e) {
            return e;
        }
        result.copy(output);
        return result.length;
    };
}
function signRsaSha256Hook(key, input, output) {
    let result;
    try {
        const signer = crypto.createSign('sha256WithRSAEncryption');
        const privateKey = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(`-----BEGIN PRIVATE KEY-----\n${key.toString('base64')}\n-----END PRIVATE KEY-----\n`);
        result = signer.update(input).end().sign(privateKey);
    } catch (e) {
        return e;
    }
    result.copy(output);
    return result.length;
}
const aes256CbcEncryptHook = makeAES256Hook('createCipheriv', 'aes-256-cbc');
const aes256CbcDecryptHook = makeAES256Hook('createDecipheriv', 'aes-256-cbc');
const aes256CtrEncryptHook = makeAES256Hook('createCipheriv', 'aes-256-ctr');
const aes256CtrDecryptHook = makeAES256Hook('createDecipheriv', 'aes-256-ctr');
const hmacSha512Hook = makeHmacHook('sha512');
const hmacSha256Hook = makeHmacHook('sha256');
/**
 * @public
 *
 * A JS implementation of crypto callbacks used for encryption.
 * These are only necessary on versions of Node.js that do not bundle OpenSSL 3.x
 */ exports.cryptoCallbacks = {
    randomHook,
    sha256Hook,
    signRsaSha256Hook,
    aes256CbcEncryptHook,
    aes256CbcDecryptHook,
    aes256CtrEncryptHook,
    aes256CtrDecryptHook,
    hmacSha512Hook,
    hmacSha256Hook
}; //# sourceMappingURL=crypto_callbacks.js.map
}),
"[project]/energy-os-v0/node_modules/mongodb-client-encryption/lib/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MongoCrypt = exports.MongoCryptContext = exports.cryptoCallbacks = void 0;
const bindings_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/mongodb-client-encryption/lib/bindings.js [middleware-edge] (ecmascript)");
const crypto_callbacks_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/mongodb-client-encryption/lib/crypto_callbacks.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "cryptoCallbacks", {
    enumerable: true,
    get: function() {
        return crypto_callbacks_1.cryptoCallbacks;
    }
});
class MongoCryptContext {
    context;
    errorWrapper;
    constructor(context, errorWrapper){
        this.context = context;
        this.errorWrapper = errorWrapper;
    }
    nextMongoOperation() {
        try {
            return this.context.nextMongoOperation();
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    addMongoOperationResponse(response) {
        try {
            return this.context.addMongoOperationResponse(response);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    finishMongoOperation() {
        try {
            return this.context.finishMongoOperation();
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    nextKMSRequest() {
        try {
            return this.context.nextKMSRequest();
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    provideKMSProviders(providers) {
        try {
            return this.context.provideKMSProviders(providers);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    finishKMSRequests() {
        try {
            return this.context.finishKMSRequests();
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    finalize() {
        try {
            return this.context.finalize();
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    get status() {
        try {
            return this.context.status;
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    get state() {
        try {
            return this.context.state;
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
}
exports.MongoCryptContext = MongoCryptContext;
class MongoCrypt {
    errorWrapper;
    mc;
    cryptSharedLibVersionInfo;
    cryptoHooksProvider;
    static libmongocryptVersion = bindings_1.mc.MongoCrypt.libmongocryptVersion;
    constructor(options){
        // Pass in JS cryptoCallbacks implementation by default.
        // If the Node.js openssl version is supported this will be ignored.
        this.mc = new bindings_1.mc.MongoCrypt({
            cryptoCallbacks: crypto_callbacks_1.cryptoCallbacks,
            ...options
        });
        this.errorWrapper = options.errorWrapper;
        this.cryptSharedLibVersionInfo = this.mc.cryptSharedLibVersionInfo;
        this.cryptoHooksProvider = this.mc.cryptoHooksProvider;
    }
    makeEncryptionContext(ns, command) {
        try {
            return new MongoCryptContext(this.mc.makeEncryptionContext(ns, command), this.errorWrapper);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    makeExplicitEncryptionContext(value, options) {
        try {
            return new MongoCryptContext(this.mc.makeExplicitEncryptionContext(value, options), this.errorWrapper);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    makeDecryptionContext(buffer) {
        try {
            return new MongoCryptContext(this.mc.makeDecryptionContext(buffer), this.errorWrapper);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    makeExplicitDecryptionContext(buffer) {
        try {
            return new MongoCryptContext(this.mc.makeExplicitDecryptionContext(buffer), this.errorWrapper);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    makeDataKeyContext(optionsBuffer, options) {
        try {
            return new MongoCryptContext(this.mc.makeDataKeyContext(optionsBuffer, options), this.errorWrapper);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    makeRewrapManyDataKeyContext(filter, encryptionKey) {
        try {
            return new MongoCryptContext(this.mc.makeRewrapManyDataKeyContext(filter, encryptionKey), this.errorWrapper);
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
    get status() {
        try {
            return this.mc.status;
        } catch (error) {
            throw this.errorWrapper(error);
        }
    }
}
exports.MongoCrypt = MongoCrypt; //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/punycode/punycode.es6.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "default",
    ()=>__TURBOPACK__default__export__,
    "encode",
    ()=>encode,
    "toASCII",
    ()=>toASCII,
    "toUnicode",
    ()=>toUnicode,
    "ucs2decode",
    ()=>ucs2decode,
    "ucs2encode",
    ()=>ucs2encode
]);
'use strict';
/** Highest positive signed 32-bit float value */ const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
/** Bootstring parameters */ const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128; // 0x80
const delimiter = '-'; // '\x2D'
/** Regular expressions */ const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
/** Error messages */ const errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
};
/** Convenience shortcuts */ const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;
/*--------------------------------------------------------------------------*/ /**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */ function error(type) {
    throw new RangeError(errors[type]);
}
/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */ function map(array, callback) {
    const result = [];
    let length = array.length;
    while(length--){
        result[length] = callback(array[length]);
    }
    return result;
}
/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {String} A new string of characters returned by the callback
 * function.
 */ function mapDomain(domain, callback) {
    const parts = domain.split('@');
    let result = '';
    if (parts.length > 1) {
        // In email addresses, only the domain name should be punycoded. Leave
        // the local part (i.e. everything up to `@`) intact.
        result = parts[0] + '@';
        domain = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
    domain = domain.replace(regexSeparators, '\x2E');
    const labels = domain.split('.');
    const encoded = map(labels, callback).join('.');
    return result + encoded;
}
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */ function ucs2decode(string) {
    const output = [];
    let counter = 0;
    const length = string.length;
    while(counter < length){
        const value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            const extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
                // It's an unmatched surrogate; only append this code unit, in case the
                // next code unit is the high surrogate of a surrogate pair.
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }
    return output;
}
/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */ const ucs2encode = (codePoints)=>String.fromCodePoint(...codePoints);
/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */ const basicToDigit = function(codePoint) {
    if (codePoint >= 0x30 && codePoint < 0x3A) {
        return 26 + (codePoint - 0x30);
    }
    if (codePoint >= 0x41 && codePoint < 0x5B) {
        return codePoint - 0x41;
    }
    if (codePoint >= 0x61 && codePoint < 0x7B) {
        return codePoint - 0x61;
    }
    return base;
};
/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */ const digitToBasic = function(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */ const adapt = function(delta, numPoints, firstTime) {
    let k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for(; delta > baseMinusTMin * tMax >> 1; k += base){
        delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */ const decode = function(input) {
    // Don't use UCS-2.
    const output = [];
    const inputLength = input.length;
    let i = 0;
    let n = initialN;
    let bias = initialBias;
    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.
    let basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
        basic = 0;
    }
    for(let j = 0; j < basic; ++j){
        // if it's not a basic code point
        if (input.charCodeAt(j) >= 0x80) {
            error('not-basic');
        }
        output.push(input.charCodeAt(j));
    }
    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.
    for(let index = basic > 0 ? basic + 1 : 0; index < inputLength;){
        // `index` is the index of the next character to be consumed.
        // Decode a generalized variable-length integer into `delta`,
        // which gets added to `i`. The overflow checking is easier
        // if we increase `i` as we go, then subtract off its starting
        // value at the end to obtain `delta`.
        const oldi = i;
        for(let w = 1, k = base;; k += base){
            if (index >= inputLength) {
                error('invalid-input');
            }
            const digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base) {
                error('invalid-input');
            }
            if (digit > floor((maxInt - i) / w)) {
                error('overflow');
            }
            i += digit * w;
            const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
                break;
            }
            const baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
                error('overflow');
            }
            w *= baseMinusT;
        }
        const out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        // `i` was supposed to wrap around from `out` to `0`,
        // incrementing `n` each time, so we'll fix that now:
        if (floor(i / out) > maxInt - n) {
            error('overflow');
        }
        n += floor(i / out);
        i %= out;
        // Insert `n` at position `i` of the output.
        output.splice(i++, 0, n);
    }
    return String.fromCodePoint(...output);
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */ const encode = function(input) {
    const output = [];
    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);
    // Cache the length.
    const inputLength = input.length;
    // Initialize the state.
    let n = initialN;
    let delta = 0;
    let bias = initialBias;
    // Handle the basic code points.
    for (const currentValue of input){
        if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
        }
    }
    const basicLength = output.length;
    let handledCPCount = basicLength;
    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
        output.push(delimiter);
    }
    // Main encoding loop:
    while(handledCPCount < inputLength){
        // All non-basic code points < n have been handled already. Find the next
        // larger one:
        let m = maxInt;
        for (const currentValue of input){
            if (currentValue >= n && currentValue < m) {
                m = currentValue;
            }
        }
        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
        // but guard against overflow.
        const handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error('overflow');
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (const currentValue of input){
            if (currentValue < n && ++delta > maxInt) {
                error('overflow');
            }
            if (currentValue === n) {
                // Represent delta as a generalized variable-length integer.
                let q = delta;
                for(let k = base;; k += base){
                    const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) {
                        break;
                    }
                    const qMinusT = q - t;
                    const baseMinusT = base - t;
                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                    q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
                delta = 0;
                ++handledCPCount;
            }
        }
        ++delta;
        ++n;
    }
    return output.join('');
};
/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */ const toUnicode = function(input) {
    return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
};
/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */ const toASCII = function(input) {
    return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
};
/*--------------------------------------------------------------------------*/ /** Define the public API */ const punycode = {
    /**
	 * A string representing the current Punycode.js version number.
	 * @memberOf punycode
	 * @type String
	 */ 'version': '2.3.1',
    /**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */ 'ucs2': {
        'decode': ucs2decode,
        'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
};
;
const __TURBOPACK__default__export__ = punycode;
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/infra.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note that we take code points as JS numbers, not JS strings.
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
module.exports = {
    isASCIIDigit,
    isASCIIAlpha,
    isASCIIAlphanumeric,
    isASCIIHex
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/encoding.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const utf8Encoder = new TextEncoder();
const utf8Decoder = new TextDecoder("utf-8", {
    ignoreBOM: true
});
function utf8Encode(string) {
    return utf8Encoder.encode(string);
}
function utf8DecodeWithoutBOM(bytes) {
    return utf8Decoder.decode(bytes);
}
module.exports = {
    utf8Encode,
    utf8DecodeWithoutBOM
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/percent-encoding.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isASCIIHex } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/infra.js [middleware-edge] (ecmascript)");
const { utf8Encode } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/encoding.js [middleware-edge] (ecmascript)");
function p(char) {
    return char.codePointAt(0);
}
// https://url.spec.whatwg.org/#percent-encode
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = `0${hex}`;
    }
    return `%${hex}`;
}
// https://url.spec.whatwg.org/#percent-decode
function percentDecodeBytes(input) {
    const output = new Uint8Array(input.byteLength);
    let outputIndex = 0;
    for(let i = 0; i < input.byteLength; ++i){
        const byte = input[i];
        if (byte !== 0x25) {
            output[outputIndex++] = byte;
        } else if (byte === 0x25 && (!isASCIIHex(input[i + 1]) || !isASCIIHex(input[i + 2]))) {
            output[outputIndex++] = byte;
        } else {
            const bytePoint = parseInt(String.fromCodePoint(input[i + 1], input[i + 2]), 16);
            output[outputIndex++] = bytePoint;
            i += 2;
        }
    }
    return output.slice(0, outputIndex);
}
// https://url.spec.whatwg.org/#string-percent-decode
function percentDecodeString(input) {
    const bytes = utf8Encode(input);
    return percentDecodeBytes(bytes);
}
// https://url.spec.whatwg.org/#c0-control-percent-encode-set
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
// https://url.spec.whatwg.org/#fragment-percent-encode-set
const extraFragmentPercentEncodeSet = new Set([
    p(" "),
    p("\""),
    p("<"),
    p(">"),
    p("`")
]);
function isFragmentPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraFragmentPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#query-percent-encode-set
const extraQueryPercentEncodeSet = new Set([
    p(" "),
    p("\""),
    p("#"),
    p("<"),
    p(">")
]);
function isQueryPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraQueryPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#special-query-percent-encode-set
function isSpecialQueryPercentEncode(c) {
    return isQueryPercentEncode(c) || c === p("'");
}
// https://url.spec.whatwg.org/#path-percent-encode-set
const extraPathPercentEncodeSet = new Set([
    p("?"),
    p("`"),
    p("{"),
    p("}"),
    p("^")
]);
function isPathPercentEncode(c) {
    return isQueryPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#userinfo-percent-encode-set
const extraUserinfoPercentEncodeSet = new Set([
    p("/"),
    p(":"),
    p(";"),
    p("="),
    p("@"),
    p("["),
    p("\\"),
    p("]"),
    p("|")
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#component-percent-encode-set
const extraComponentPercentEncodeSet = new Set([
    p("$"),
    p("%"),
    p("&"),
    p("+"),
    p(",")
]);
function isComponentPercentEncode(c) {
    return isUserinfoPercentEncode(c) || extraComponentPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set
const extraURLEncodedPercentEncodeSet = new Set([
    p("!"),
    p("'"),
    p("("),
    p(")"),
    p("~")
]);
function isURLEncodedPercentEncode(c) {
    return isComponentPercentEncode(c) || extraURLEncodedPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#code-point-percent-encode-after-encoding
// https://url.spec.whatwg.org/#utf-8-percent-encode
// Assuming encoding is always utf-8 allows us to trim one of the logic branches. TODO: support encoding.
// The "-Internal" variant here has code points as JS strings. The external version used by other files has code points
// as JS numbers, like the rest of the codebase.
function utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate) {
    const bytes = utf8Encode(codePoint);
    let output = "";
    for (const byte of bytes){
        // Our percentEncodePredicate operates on bytes, not code points, so this is slightly different from the spec.
        if (!percentEncodePredicate(byte)) {
            output += String.fromCharCode(byte);
        } else {
            output += percentEncode(byte);
        }
    }
    return output;
}
function utf8PercentEncodeCodePoint(codePoint, percentEncodePredicate) {
    return utf8PercentEncodeCodePointInternal(String.fromCodePoint(codePoint), percentEncodePredicate);
}
// https://url.spec.whatwg.org/#string-percent-encode-after-encoding
// https://url.spec.whatwg.org/#string-utf-8-percent-encode
function utf8PercentEncodeString(input, percentEncodePredicate, spaceAsPlus = false) {
    let output = "";
    for (const codePoint of input){
        if (spaceAsPlus && codePoint === " ") {
            output += "+";
        } else {
            output += utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate);
        }
    }
    return output;
}
module.exports = {
    isC0ControlPercentEncode,
    isFragmentPercentEncode,
    isQueryPercentEncode,
    isSpecialQueryPercentEncode,
    isPathPercentEncode,
    isUserinfoPercentEncode,
    isURLEncodedPercentEncode,
    percentDecodeString,
    percentDecodeBytes,
    utf8PercentEncodeString,
    utf8PercentEncodeCodePoint
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/url-state-machine.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const tr46 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/tr46/index.js [middleware-edge] (ecmascript)");
const infra = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/infra.js [middleware-edge] (ecmascript)");
const { utf8DecodeWithoutBOM } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/encoding.js [middleware-edge] (ecmascript)");
const { percentDecodeString, utf8PercentEncodeCodePoint, utf8PercentEncodeString, isC0ControlPercentEncode, isFragmentPercentEncode, isQueryPercentEncode, isSpecialQueryPercentEncode, isPathPercentEncode, isUserinfoPercentEncode } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/percent-encoding.js [middleware-edge] (ecmascript)");
function p(char) {
    return char.codePointAt(0);
}
const specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return [
        ...str
    ].length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return infra.isASCIIAlpha(cp1) && (cp2 === p(":") || cp2 === p("|"));
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|<|>|\?|@|\[|\\|\]|\^|\|/u) !== -1;
}
function containsForbiddenDomainCodePoint(string) {
    return containsForbiddenHostCodePoint(string) || string.search(/[\u0000-\u001F]|%|\u007F/u) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function isNotSpecial(url) {
    return !isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function parseIPv4Number(input) {
    if (input === "") {
        return failure;
    }
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    let regex = /[^0-7]/u;
    if (R === 10) {
        regex = /[^0-9]/u;
    }
    if (R === 16) {
        regex = /[^0-9A-Fa-f]/u;
    }
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return failure;
    }
    const numbers = [];
    for (const part of parts){
        const n = parseIPv4Number(part);
        if (n === failure) {
            return failure;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= 256 ** (5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * 256 ** (3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = `.${output}`;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = Array.from(input, (c)=>c.codePointAt(0));
    if (input[pointer] === p(":")) {
        if (input[pointer + 1] !== p(":")) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === p(":")) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && infra.isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === p(".")) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === p(".") && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!infra.isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(infra.isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === p(":")) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const compress = findTheIPv6AddressCompressedPieceIndex(address);
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isOpaque = false) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (isOpaque) {
        return parseOpaqueHost(input);
    }
    const domain = utf8DecodeWithoutBOM(percentDecodeString(input));
    const asciiDomain = domainToASCII(domain);
    if (asciiDomain === failure) {
        return failure;
    }
    if (endsInANumber(asciiDomain)) {
        return parseIPv4(asciiDomain);
    }
    return asciiDomain;
}
function endsInANumber(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length === 1) {
            return false;
        }
        parts.pop();
    }
    const last = parts[parts.length - 1];
    if (parseIPv4Number(last) !== failure) {
        return true;
    }
    if (/^[0-9]+$/u.test(last)) {
        return true;
    }
    return false;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePoint(input)) {
        return failure;
    }
    return utf8PercentEncodeString(input, isC0ControlPercentEncode);
}
function findTheIPv6AddressCompressedPieceIndex(address) {
    let longestIndex = null;
    let longestSize = 1; // only find elements > 1
    let foundIndex = null;
    let foundSize = 0;
    for(let pieceIndex = 0; pieceIndex < address.length; ++pieceIndex){
        if (address[pieceIndex] !== 0) {
            if (foundSize > longestSize) {
                longestIndex = foundIndex;
                longestSize = foundSize;
            }
            foundIndex = null;
            foundSize = 0;
        } else {
            if (foundIndex === null) {
                foundIndex = pieceIndex;
            }
            ++foundSize;
        }
    }
    if (foundSize > longestSize) {
        return foundIndex;
    }
    return longestIndex;
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return `[${serializeIPv6(host)}]`;
    }
    return host;
}
function domainToASCII(domain, beStrict = false) {
    const result = tr46.toASCII(domain, {
        checkHyphens: beStrict,
        checkBidi: true,
        checkJoiners: true,
        useSTD3ASCIIRules: beStrict,
        transitionalProcessing: false,
        verifyDNSLength: beStrict,
        ignoreInvalidPunycode: false
    });
    if (result === null) {
        return failure;
    }
    if (!beStrict) {
        if (result === "") {
            return failure;
        }
        if (containsForbiddenDomainCodePoint(result)) {
            return failure;
        }
    }
    return result;
}
function trimControlChars(string) {
    // Avoid using regexp because of this V8 bug: https://issues.chromium.org/issues/42204424
    let start = 0;
    let end = string.length;
    for(; start < end; ++start){
        if (string.charCodeAt(start) > 0x20) {
            break;
        }
    }
    for(; end > start; --end){
        if (string.charCodeAt(end - 1) > 0x20) {
            break;
        }
    }
    return string.substring(start, end);
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/ug, "");
}
function shortenPath(url) {
    const { path } = url;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.scheme === "file";
}
function hasAnOpaquePath(url) {
    return typeof url.path === "string";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/u.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = Array.from(this.input, (c)=>c.codePointAt(0));
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this[`parse ${this.state}`](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (infra.isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (infra.isASCIIAlphanumeric(c) || c === p("+") || c === p("-") || c === p(".")) {
        this.buffer += cStr.toLowerCase();
    } else if (c === p(":")) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && this.url.host === "") {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        if (this.stateOverride) {
            if (this.url.port === defaultPort(this.url.scheme)) {
                this.url.port = null;
            }
            return false;
        }
        this.buffer = "";
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== p("/") || this.input[this.pointer + 2] !== p("/")) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === p("/")) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.path = "";
            this.state = "opaque path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || hasAnOpaquePath(this.base) && c !== p("#")) {
        return failure;
    } else if (hasAnOpaquePath(this.base) && c === p("#")) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path;
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === p("/") && this.input[this.pointer + 1] === p("/")) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === p("/")) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (c === p("/")) {
        this.state = "relative slash";
    } else if (isSpecial(this.url) && c === p("\\")) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        if (c === p("?")) {
            this.url.query = "";
            this.state = "query";
        } else if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        } else if (!isNaN(c)) {
            this.url.query = null;
            this.url.path.pop();
            this.state = "path";
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === p("/") || c === p("\\"))) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === p("/")) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === p("/") && this.input[this.pointer + 1] === p("/")) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== p("/") && c !== p("\\")) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === p("@")) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = `%40${this.buffer}`;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === p(":") && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = utf8PercentEncodeCodePoint(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") || isSpecial(this.url) && c === p("\\")) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === p(":") && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        if (this.stateOverride === "hostname") {
            return false;
        }
        const host = parseHost(this.buffer, isNotSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
    } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") || isSpecial(this.url) && c === p("\\")) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isNotSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === p("[")) {
            this.arrFlag = true;
        } else if (c === p("]")) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (infra.isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") || isSpecial(this.url) && c === p("\\") || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > 2 ** 16 - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    p("/"),
    p("\\"),
    p("?"),
    p("#")
]);
function startsWithWindowsDriveLetter(input, pointer) {
    const length = input.length - pointer;
    return length >= 2 && isWindowsDriveLetterCodePoints(input[pointer], input[pointer + 1]) && (length === 2 || fileOtherwiseCodePoints.has(input[pointer + 2]));
}
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    this.url.host = "";
    if (c === p("/") || c === p("\\")) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        this.url.host = this.base.host;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        if (c === p("?")) {
            this.url.query = "";
            this.state = "query";
        } else if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        } else if (!isNaN(c)) {
            this.url.query = null;
            if (!startsWithWindowsDriveLetter(this.input, this.pointer)) {
                shortenPath(this.url);
            } else {
                this.parseError = true;
                this.url.path = [];
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === p("/") || c === p("\\")) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (!startsWithWindowsDriveLetter(this.input, this.pointer) && isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            }
            this.url.host = this.base.host;
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === p("/") || c === p("\\") || c === p("?") || c === p("#")) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isNotSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== p("/") && c !== p("\\")) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === p("?")) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== p("/")) {
            --this.pointer;
        }
    } else if (this.stateOverride && this.url.host === null) {
        this.url.path.push("");
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === p("/") || isSpecial(this.url) && c === p("\\") || !this.stateOverride && (c === p("?") || c === p("#"))) {
        if (isSpecial(this.url) && c === p("\\")) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== p("/") && !(isSpecial(this.url) && c === p("\\"))) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== p("/") && !(isSpecial(this.url) && c === p("\\"))) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                this.buffer = `${this.buffer[0]}:`;
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (c === p("?")) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += utf8PercentEncodeCodePoint(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse opaque path"] = function parseOpaquePath(c) {
    if (c === p("?")) {
        this.url.query = "";
        this.state = "query";
    } else if (c === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c === p(" ")) {
        const remaining = this.input[this.pointer + 1];
        if (remaining === p("?") || remaining === p("#")) {
            this.url.path += "%20";
        } else {
            this.url.path += " ";
        }
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== p("%")) {
            this.parseError = true;
        }
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path += utf8PercentEncodeCodePoint(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
        this.encodingOverride = "utf-8";
    }
    if (!this.stateOverride && c === p("#") || isNaN(c)) {
        const queryPercentEncodePredicate = isSpecial(this.url) ? isSpecialQueryPercentEncode : isQueryPercentEncode;
        this.url.query += utf8PercentEncodeString(this.buffer, queryPercentEncodePredicate);
        this.buffer = "";
        if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else if (!isNaN(c)) {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (!isNaN(c)) {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += utf8PercentEncodeCodePoint(c, isFragmentPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = `${url.scheme}:`;
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += `:${url.password}`;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += `:${url.port}`;
        }
    }
    if (url.host === null && !hasAnOpaquePath(url) && url.path.length > 1 && url.path[0] === "") {
        output += "/.";
    }
    output += serializePath(url);
    if (url.query !== null) {
        output += `?${url.query}`;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += `#${url.fragment}`;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = `${tuple.scheme}://`;
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += `:${tuple.port}`;
    }
    return result;
}
function serializePath(url) {
    if (hasAnOpaquePath(url)) {
        return url.path;
    }
    let output = "";
    for (const segment of url.path){
        output += `/${segment}`;
    }
    return output;
}
module.exports.serializeURL = serializeURL;
module.exports.serializePath = serializePath;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            {
                const pathURL = module.exports.parseURL(serializePath(url));
                if (pathURL === null) {
                    return "null";
                }
                if (pathURL.scheme !== "http" && pathURL.scheme !== "https") {
                    return "null";
                }
                return module.exports.serializeURLOrigin(pathURL);
            }
        case "ftp":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // The spec says:
            // > Unfortunate as it is, this is left as an exercise to the reader. When in doubt, return a new opaque origin.
            // Browsers tested so far:
            // - Chrome says "file://", but treats file: URLs as cross-origin for most (all?) purposes; see e.g.
            //   https://bugs.chromium.org/p/chromium/issues/detail?id=37586
            // - Firefox says "null", but treats file: URLs as same-origin sometimes based on directory stuff; see
            //   https://developer.mozilla.org/en-US/docs/Archive/Misc_top_level/Same-origin_policy_for_file:_URIs
            return "null";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return null;
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = utf8PercentEncodeString(username, isUserinfoPercentEncode);
};
module.exports.setThePassword = function(url, password) {
    url.password = utf8PercentEncodeString(password, isUserinfoPercentEncode);
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.hasAnOpaquePath = hasAnOpaquePath;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/urlencoded.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { utf8Encode, utf8DecodeWithoutBOM } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/encoding.js [middleware-edge] (ecmascript)");
const { percentDecodeBytes, utf8PercentEncodeString, isURLEncodedPercentEncode } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/percent-encoding.js [middleware-edge] (ecmascript)");
function p(char) {
    return char.codePointAt(0);
}
// https://url.spec.whatwg.org/#concept-urlencoded-parser
function parseUrlencoded(input) {
    const sequences = strictlySplitByteSequence(input, p("&"));
    const output = [];
    for (const bytes of sequences){
        if (bytes.length === 0) {
            continue;
        }
        let name, value;
        const indexOfEqual = bytes.indexOf(p("="));
        if (indexOfEqual >= 0) {
            name = bytes.slice(0, indexOfEqual);
            value = bytes.slice(indexOfEqual + 1);
        } else {
            name = bytes;
            value = new Uint8Array(0);
        }
        name = replaceByteInByteSequence(name, 0x2B, 0x20);
        value = replaceByteInByteSequence(value, 0x2B, 0x20);
        const nameString = utf8DecodeWithoutBOM(percentDecodeBytes(name));
        const valueString = utf8DecodeWithoutBOM(percentDecodeBytes(value));
        output.push([
            nameString,
            valueString
        ]);
    }
    return output;
}
// https://url.spec.whatwg.org/#concept-urlencoded-string-parser
function parseUrlencodedString(input) {
    return parseUrlencoded(utf8Encode(input));
}
// https://url.spec.whatwg.org/#concept-urlencoded-serializer
function serializeUrlencoded(tuples) {
    // TODO: accept and use encoding argument
    let output = "";
    for (const [i, tuple] of tuples.entries()){
        const name = utf8PercentEncodeString(tuple[0], isURLEncodedPercentEncode, true);
        const value = utf8PercentEncodeString(tuple[1], isURLEncodedPercentEncode, true);
        if (i !== 0) {
            output += "&";
        }
        output += `${name}=${value}`;
    }
    return output;
}
function strictlySplitByteSequence(buf, cp) {
    const list = [];
    let last = 0;
    let i = buf.indexOf(cp);
    while(i >= 0){
        list.push(buf.slice(last, i));
        last = i + 1;
        i = buf.indexOf(cp, last);
    }
    if (last !== buf.length) {
        list.push(buf.slice(last));
    }
    return list;
}
function replaceByteInByteSequence(buf, from, to) {
    let i = buf.indexOf(from);
    while(i >= 0){
        buf[i] = to;
        i = buf.indexOf(from, i + 1);
    }
    return buf;
}
module.exports = {
    parseUrlencodedString,
    serializeUrlencoded
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/URLSearchParams-impl.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const urlencoded = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/urlencoded.js [middleware-edge] (ecmascript)");
exports.implementation = class URLSearchParamsImpl {
    constructor(globalObject, constructorArgs, { doNotStripQMark = false }){
        let init = constructorArgs[0];
        this._list = [];
        this._url = null;
        if (!doNotStripQMark && typeof init === "string" && init[0] === "?") {
            init = init.slice(1);
        }
        if (Array.isArray(init)) {
            for (const pair of init){
                if (pair.length !== 2) {
                    throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not " + "contain exactly two elements.");
                }
                this._list.push([
                    pair[0],
                    pair[1]
                ]);
            }
        } else if (typeof init === "object" && Object.getPrototypeOf(init) === null) {
            for (const name of Object.keys(init)){
                const value = init[name];
                this._list.push([
                    name,
                    value
                ]);
            }
        } else {
            this._list = urlencoded.parseUrlencodedString(init);
        }
    }
    _updateSteps() {
        if (this._url !== null) {
            let serializedQuery = urlencoded.serializeUrlencoded(this._list);
            if (serializedQuery === "") {
                serializedQuery = null;
            }
            this._url._url.query = serializedQuery;
        }
    }
    get size() {
        return this._list.length;
    }
    append(name, value) {
        this._list.push([
            name,
            value
        ]);
        this._updateSteps();
    }
    delete(name, value) {
        let i = 0;
        while(i < this._list.length){
            if (this._list[i][0] === name && (value === undefined || this._list[i][1] === value)) {
                this._list.splice(i, 1);
            } else {
                i++;
            }
        }
        this._updateSteps();
    }
    get(name) {
        for (const tuple of this._list){
            if (tuple[0] === name) {
                return tuple[1];
            }
        }
        return null;
    }
    getAll(name) {
        const output = [];
        for (const tuple of this._list){
            if (tuple[0] === name) {
                output.push(tuple[1]);
            }
        }
        return output;
    }
    has(name, value) {
        for (const tuple of this._list){
            if (tuple[0] === name && (value === undefined || tuple[1] === value)) {
                return true;
            }
        }
        return false;
    }
    set(name, value) {
        let found = false;
        let i = 0;
        while(i < this._list.length){
            if (this._list[i][0] === name) {
                if (found) {
                    this._list.splice(i, 1);
                } else {
                    found = true;
                    this._list[i][1] = value;
                    i++;
                }
            } else {
                i++;
            }
        }
        if (!found) {
            this._list.push([
                name,
                value
            ]);
        }
        this._updateSteps();
    }
    sort() {
        this._list.sort((a, b)=>{
            if (a[0] < b[0]) {
                return -1;
            }
            if (a[0] > b[0]) {
                return 1;
            }
            return 0;
        });
        this._updateSteps();
    }
    [Symbol.iterator]() {
        return this._list[Symbol.iterator]();
    }
    toString() {
        return urlencoded.serializeUrlencoded(this._list);
    }
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/utils.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Returns "Type(value) is Object" in ES terminology.
function isObject(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
// Like `Object.assign`, but using `[[GetOwnProperty]]` and `[[DefineOwnProperty]]`
// instead of `[[Get]]` and `[[Set]]` and only allowing objects
function define(target, source) {
    for (const key of Reflect.ownKeys(source)){
        const descriptor = Reflect.getOwnPropertyDescriptor(source, key);
        if (descriptor && !Reflect.defineProperty(target, key, descriptor)) {
            throw new TypeError(`Cannot redefine property: ${String(key)}`);
        }
    }
}
function newObjectInRealm(globalObject, object) {
    const ctorRegistry = initCtorRegistry(globalObject);
    return Object.defineProperties(Object.create(ctorRegistry["%Object.prototype%"]), Object.getOwnPropertyDescriptors(object));
}
const wrapperSymbol = Symbol("wrapper");
const implSymbol = Symbol("impl");
const sameObjectCaches = Symbol("SameObject caches");
const ctorRegistrySymbol = Symbol.for("[webidl2js] constructor registry");
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {}).prototype);
function initCtorRegistry(globalObject) {
    if (hasOwn(globalObject, ctorRegistrySymbol)) {
        return globalObject[ctorRegistrySymbol];
    }
    const ctorRegistry = Object.create(null);
    // In addition to registering all the WebIDL2JS-generated types in the constructor registry,
    // we also register a few intrinsics that we make use of in generated code, since they are not
    // easy to grab from the globalObject variable.
    ctorRegistry["%Object.prototype%"] = globalObject.Object.prototype;
    ctorRegistry["%IteratorPrototype%"] = Object.getPrototypeOf(Object.getPrototypeOf(new globalObject.Array()[Symbol.iterator]()));
    try {
        ctorRegistry["%AsyncIteratorPrototype%"] = Object.getPrototypeOf(Object.getPrototypeOf(globalObject.eval("(async function* () {})").prototype));
    } catch  {
        ctorRegistry["%AsyncIteratorPrototype%"] = AsyncIteratorPrototype;
    }
    globalObject[ctorRegistrySymbol] = ctorRegistry;
    return ctorRegistry;
}
function getSameObject(wrapper, prop, creator) {
    if (!wrapper[sameObjectCaches]) {
        wrapper[sameObjectCaches] = Object.create(null);
    }
    if (prop in wrapper[sameObjectCaches]) {
        return wrapper[sameObjectCaches][prop];
    }
    wrapper[sameObjectCaches][prop] = creator();
    return wrapper[sameObjectCaches][prop];
}
function wrapperForImpl(impl) {
    return impl ? impl[wrapperSymbol] : null;
}
function implForWrapper(wrapper) {
    return wrapper ? wrapper[implSymbol] : null;
}
function tryWrapperForImpl(impl) {
    const wrapper = wrapperForImpl(impl);
    return wrapper ? wrapper : impl;
}
function tryImplForWrapper(wrapper) {
    const impl = implForWrapper(wrapper);
    return impl ? impl : wrapper;
}
const iterInternalSymbol = Symbol("internal");
function isArrayIndexPropName(P) {
    if (typeof P !== "string") {
        return false;
    }
    const i = P >>> 0;
    if (i === 2 ** 32 - 1) {
        return false;
    }
    const s = `${i}`;
    if (P !== s) {
        return false;
    }
    return true;
}
const byteLengthGetter = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
function isArrayBuffer(value) {
    try {
        byteLengthGetter.call(value);
        return true;
    } catch (e) {
        return false;
    }
}
function iteratorResult([key, value], kind) {
    let result;
    switch(kind){
        case "key":
            result = key;
            break;
        case "value":
            result = value;
            break;
        case "key+value":
            result = [
                key,
                value
            ];
            break;
    }
    return {
        value: result,
        done: false
    };
}
const supportsPropertyIndex = Symbol("supports property index");
const supportedPropertyIndices = Symbol("supported property indices");
const supportsPropertyName = Symbol("supports property name");
const supportedPropertyNames = Symbol("supported property names");
const indexedGet = Symbol("indexed property get");
const indexedSetNew = Symbol("indexed property set new");
const indexedSetExisting = Symbol("indexed property set existing");
const namedGet = Symbol("named property get");
const namedSetNew = Symbol("named property set new");
const namedSetExisting = Symbol("named property set existing");
const namedDelete = Symbol("named property delete");
const asyncIteratorNext = Symbol("async iterator get the next iteration result");
const asyncIteratorReturn = Symbol("async iterator return steps");
const asyncIteratorInit = Symbol("async iterator initialization steps");
const asyncIteratorEOI = Symbol("async iterator end of iteration");
module.exports = exports = {
    isObject,
    hasOwn,
    define,
    newObjectInRealm,
    wrapperSymbol,
    implSymbol,
    getSameObject,
    ctorRegistrySymbol,
    initCtorRegistry,
    wrapperForImpl,
    implForWrapper,
    tryWrapperForImpl,
    tryImplForWrapper,
    iterInternalSymbol,
    isArrayBuffer,
    isArrayIndexPropName,
    supportsPropertyIndex,
    supportedPropertyIndices,
    supportsPropertyName,
    supportedPropertyNames,
    indexedGet,
    indexedSetNew,
    indexedSetExisting,
    namedGet,
    namedSetNew,
    namedSetExisting,
    namedDelete,
    asyncIteratorNext,
    asyncIteratorReturn,
    asyncIteratorInit,
    asyncIteratorEOI,
    iteratorResult
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/Function.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/energy-os-v0/node_modules/webidl-conversions/lib/index.js [middleware-edge] (ecmascript)");
const utils = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/utils.js [middleware-edge] (ecmascript)");
exports.convert = (globalObject, value, { context = "The provided value" } = {})=>{
    if (typeof value !== "function") {
        throw new globalObject.TypeError(context + " is not a function");
    }
    function invokeTheCallbackFunction(...args) {
        const thisArg = utils.tryWrapperForImpl(this);
        let callResult;
        for(let i = 0; i < args.length; i++){
            args[i] = utils.tryWrapperForImpl(args[i]);
        }
        callResult = Reflect.apply(value, thisArg, args);
        callResult = conversions["any"](callResult, {
            context: context,
            globals: globalObject
        });
        return callResult;
    }
    invokeTheCallbackFunction.construct = (...args)=>{
        for(let i = 0; i < args.length; i++){
            args[i] = utils.tryWrapperForImpl(args[i]);
        }
        let callResult = Reflect.construct(value, args);
        callResult = conversions["any"](callResult, {
            context: context,
            globals: globalObject
        });
        return callResult;
    };
    invokeTheCallbackFunction[utils.wrapperSymbol] = value;
    invokeTheCallbackFunction.objectReference = value;
    return invokeTheCallbackFunction;
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/URLSearchParams.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/energy-os-v0/node_modules/webidl-conversions/lib/index.js [middleware-edge] (ecmascript)");
const utils = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/utils.js [middleware-edge] (ecmascript)");
const Function = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/Function.js [middleware-edge] (ecmascript)");
const newObjectInRealm = utils.newObjectInRealm;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const interfaceName = "URLSearchParams";
exports.is = (value)=>{
    return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = (value)=>{
    return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (globalObject, value, { context = "The provided value" } = {})=>{
    if (exports.is(value)) {
        return utils.implForWrapper(value);
    }
    throw new globalObject.TypeError(`${context} is not of type 'URLSearchParams'.`);
};
exports.createDefaultIterator = (globalObject, target, kind)=>{
    const ctorRegistry = globalObject[ctorRegistrySymbol];
    const iteratorPrototype = ctorRegistry["URLSearchParams Iterator"];
    const iterator = Object.create(iteratorPrototype);
    Object.defineProperty(iterator, utils.iterInternalSymbol, {
        value: {
            target,
            kind,
            index: 0
        },
        configurable: true
    });
    return iterator;
};
function makeWrapper(globalObject, newTarget) {
    let proto;
    if (newTarget !== undefined) {
        proto = newTarget.prototype;
    }
    if (!utils.isObject(proto)) {
        proto = globalObject[ctorRegistrySymbol]["URLSearchParams"].prototype;
    }
    return Object.create(proto);
}
exports.create = (globalObject, constructorArgs, privateData)=>{
    const wrapper = makeWrapper(globalObject);
    return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};
exports.createImpl = (globalObject, constructorArgs, privateData)=>{
    const wrapper = exports.create(globalObject, constructorArgs, privateData);
    return utils.implForWrapper(wrapper);
};
exports._internalSetup = (wrapper, globalObject)=>{};
exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {})=>{
    privateData.wrapper = wrapper;
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: new Impl.implementation(globalObject, constructorArgs, privateData),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper;
};
exports.new = (globalObject, newTarget)=>{
    const wrapper = makeWrapper(globalObject, newTarget);
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: Object.create(Impl.implementation.prototype),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper[implSymbol];
};
const exposed = new Set([
    "Window",
    "Worker"
]);
exports.install = (globalObject, globalNames)=>{
    if (!globalNames.some((globalName)=>exposed.has(globalName))) {
        return;
    }
    const ctorRegistry = utils.initCtorRegistry(globalObject);
    class URLSearchParams {
        constructor(){
            const args = [];
            {
                let curArg = arguments[0];
                if (curArg !== undefined) {
                    if (utils.isObject(curArg)) {
                        if (curArg[Symbol.iterator] !== undefined) {
                            if (!utils.isObject(curArg)) {
                                throw new globalObject.TypeError("Failed to construct 'URLSearchParams': parameter 1" + " sequence" + " is not an iterable object.");
                            } else {
                                const V = [];
                                const tmp = curArg;
                                for (let nextItem of tmp){
                                    if (!utils.isObject(nextItem)) {
                                        throw new globalObject.TypeError("Failed to construct 'URLSearchParams': parameter 1" + " sequence" + "'s element" + " is not an iterable object.");
                                    } else {
                                        const V = [];
                                        const tmp = nextItem;
                                        for (let nextItem of tmp){
                                            nextItem = conversions["USVString"](nextItem, {
                                                context: "Failed to construct 'URLSearchParams': parameter 1" + " sequence" + "'s element" + "'s element",
                                                globals: globalObject
                                            });
                                            V.push(nextItem);
                                        }
                                        nextItem = V;
                                    }
                                    V.push(nextItem);
                                }
                                curArg = V;
                            }
                        } else {
                            if (!utils.isObject(curArg)) {
                                throw new globalObject.TypeError("Failed to construct 'URLSearchParams': parameter 1" + " record" + " is not an object.");
                            } else {
                                const result = Object.create(null);
                                for (const key of Reflect.ownKeys(curArg)){
                                    const desc = Object.getOwnPropertyDescriptor(curArg, key);
                                    if (desc && desc.enumerable) {
                                        let typedKey = key;
                                        typedKey = conversions["USVString"](typedKey, {
                                            context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s key",
                                            globals: globalObject
                                        });
                                        let typedValue = curArg[key];
                                        typedValue = conversions["USVString"](typedValue, {
                                            context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s value",
                                            globals: globalObject
                                        });
                                        result[typedKey] = typedValue;
                                    }
                                }
                                curArg = result;
                            }
                        }
                    } else {
                        curArg = conversions["USVString"](curArg, {
                            context: "Failed to construct 'URLSearchParams': parameter 1",
                            globals: globalObject
                        });
                    }
                } else {
                    curArg = "";
                }
                args.push(curArg);
            }
            return exports.setup(Object.create(new.target.prototype), globalObject, args);
        }
        append(name, value) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'append' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 2) {
                throw new globalObject.TypeError(`Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'append' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'append' on 'URLSearchParams': parameter 2",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].append(...args));
        }
        delete(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'delete' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'delete' on 'URLSearchParams': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].delete(...args));
        }
        get(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'get' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return esValue[implSymbol].get(...args);
        }
        getAll(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'getAll' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].getAll(...args));
        }
        has(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'has' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'has' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'has' on 'URLSearchParams': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return esValue[implSymbol].has(...args);
        }
        set(name, value) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 2) {
                throw new globalObject.TypeError(`Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'set' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'set' on 'URLSearchParams': parameter 2",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].set(...args));
        }
        sort() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'sort' called on an object that is not a valid instance of URLSearchParams.");
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].sort());
        }
        toString() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of URLSearchParams.");
            }
            return esValue[implSymbol].toString();
        }
        keys() {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'keys' called on an object that is not a valid instance of URLSearchParams.");
            }
            return exports.createDefaultIterator(globalObject, this, "key");
        }
        values() {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'values' called on an object that is not a valid instance of URLSearchParams.");
            }
            return exports.createDefaultIterator(globalObject, this, "value");
        }
        entries() {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'entries' called on an object that is not a valid instance of URLSearchParams.");
            }
            return exports.createDefaultIterator(globalObject, this, "key+value");
        }
        forEach(callback) {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'forEach' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.");
            }
            callback = Function.convert(globalObject, callback, {
                context: "Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1"
            });
            const thisArg = arguments[1];
            let pairs = Array.from(this[implSymbol]);
            let i = 0;
            while(i < pairs.length){
                const [key, value] = pairs[i].map(utils.tryWrapperForImpl);
                callback.call(thisArg, value, key, this);
                pairs = Array.from(this[implSymbol]);
                i++;
            }
        }
        get size() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get size' called on an object that is not a valid instance of URLSearchParams.");
            }
            return esValue[implSymbol]["size"];
        }
    }
    Object.defineProperties(URLSearchParams.prototype, {
        append: {
            enumerable: true
        },
        delete: {
            enumerable: true
        },
        get: {
            enumerable: true
        },
        getAll: {
            enumerable: true
        },
        has: {
            enumerable: true
        },
        set: {
            enumerable: true
        },
        sort: {
            enumerable: true
        },
        toString: {
            enumerable: true
        },
        keys: {
            enumerable: true
        },
        values: {
            enumerable: true
        },
        entries: {
            enumerable: true
        },
        forEach: {
            enumerable: true
        },
        size: {
            enumerable: true
        },
        [Symbol.toStringTag]: {
            value: "URLSearchParams",
            configurable: true
        },
        [Symbol.iterator]: {
            value: URLSearchParams.prototype.entries,
            configurable: true,
            writable: true
        }
    });
    ctorRegistry[interfaceName] = URLSearchParams;
    ctorRegistry["URLSearchParams Iterator"] = Object.create(ctorRegistry["%IteratorPrototype%"], {
        [Symbol.toStringTag]: {
            configurable: true,
            value: "URLSearchParams Iterator"
        }
    });
    utils.define(ctorRegistry["URLSearchParams Iterator"], {
        next () {
            const internal = this && this[utils.iterInternalSymbol];
            if (!internal) {
                throw new globalObject.TypeError("next() called on a value that is not a URLSearchParams iterator object");
            }
            const { target, kind, index } = internal;
            const values = Array.from(target[implSymbol]);
            const len = values.length;
            if (index >= len) {
                return newObjectInRealm(globalObject, {
                    value: undefined,
                    done: true
                });
            }
            const pair = values[index];
            internal.index = index + 1;
            return newObjectInRealm(globalObject, utils.iteratorResult(pair.map(utils.tryWrapperForImpl), kind));
        }
    });
    Object.defineProperty(globalObject, interfaceName, {
        configurable: true,
        writable: true,
        value: URLSearchParams
    });
};
const Impl = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/URLSearchParams-impl.js [middleware-edge] (ecmascript)");
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/URL-impl.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const usm = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/url-state-machine.js [middleware-edge] (ecmascript)");
const urlencoded = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/urlencoded.js [middleware-edge] (ecmascript)");
const URLSearchParams = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/URLSearchParams.js [middleware-edge] (ecmascript)");
exports.implementation = class URLImpl {
    // Unlike the spec, we duplicate some code between the constructor and canParse, because we want to give useful error
    // messages in the constructor that distinguish between the different causes of failure.
    constructor(globalObject, [url, base]){
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === null) {
                throw new TypeError(`Invalid base URL: ${base}`);
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === null) {
            throw new TypeError(`Invalid URL: ${url}`);
        }
        const query = parsedURL.query !== null ? parsedURL.query : "";
        this._url = parsedURL;
        // We cannot invoke the "new URLSearchParams object" algorithm without going through the constructor, which strips
        // question mark by default. Therefore the doNotStripQMark hack is used.
        this._query = URLSearchParams.createImpl(globalObject, [
            query
        ], {
            doNotStripQMark: true
        });
        this._query._url = this;
    }
    static parse(globalObject, input, base) {
        try {
            return new URLImpl(globalObject, [
                input,
                base
            ]);
        } catch  {
            return null;
        }
    }
    static canParse(url, base) {
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === null) {
                return false;
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === null) {
            return false;
        }
        return true;
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === null) {
            throw new TypeError(`Invalid URL: ${v}`);
        }
        this._url = parsedURL;
        this._query._list.splice(0);
        const { query } = parsedURL;
        if (query !== null) {
            this._query._list = urlencoded.parseUrlencodedString(query);
        }
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return `${this._url.scheme}:`;
    }
    set protocol(v) {
        usm.basicURLParse(`${v}:`, {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return `${usm.serializeHost(url.host)}:${usm.serializeInteger(url.port)}`;
    }
    set host(v) {
        if (usm.hasAnOpaquePath(this._url)) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (usm.hasAnOpaquePath(this._url)) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        return usm.serializePath(this._url);
    }
    set pathname(v) {
        if (usm.hasAnOpaquePath(this._url)) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return `?${this._url.query}`;
    }
    set search(v) {
        const url = this._url;
        if (v === "") {
            url.query = null;
            this._query._list = [];
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
        this._query._list = urlencoded.parseUrlencodedString(input);
    }
    get searchParams() {
        return this._query;
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return `#${this._url.fragment}`;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}),
"[project]/energy-os-v0/node_modules/whatwg-url/lib/URL.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/energy-os-v0/node_modules/webidl-conversions/lib/index.js [middleware-edge] (ecmascript)");
const utils = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/utils.js [middleware-edge] (ecmascript)");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const interfaceName = "URL";
exports.is = (value)=>{
    return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = (value)=>{
    return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (globalObject, value, { context = "The provided value" } = {})=>{
    if (exports.is(value)) {
        return utils.implForWrapper(value);
    }
    throw new globalObject.TypeError(`${context} is not of type 'URL'.`);
};
function makeWrapper(globalObject, newTarget) {
    let proto;
    if (newTarget !== undefined) {
        proto = newTarget.prototype;
    }
    if (!utils.isObject(proto)) {
        proto = globalObject[ctorRegistrySymbol]["URL"].prototype;
    }
    return Object.create(proto);
}
exports.create = (globalObject, constructorArgs, privateData)=>{
    const wrapper = makeWrapper(globalObject);
    return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};
exports.createImpl = (globalObject, constructorArgs, privateData)=>{
    const wrapper = exports.create(globalObject, constructorArgs, privateData);
    return utils.implForWrapper(wrapper);
};
exports._internalSetup = (wrapper, globalObject)=>{};
exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {})=>{
    privateData.wrapper = wrapper;
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: new Impl.implementation(globalObject, constructorArgs, privateData),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper;
};
exports.new = (globalObject, newTarget)=>{
    const wrapper = makeWrapper(globalObject, newTarget);
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: Object.create(Impl.implementation.prototype),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper[implSymbol];
};
const exposed = new Set([
    "Window",
    "Worker"
]);
exports.install = (globalObject, globalNames)=>{
    if (!globalNames.some((globalName)=>exposed.has(globalName))) {
        return;
    }
    const ctorRegistry = utils.initCtorRegistry(globalObject);
    class URL {
        constructor(url){
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to construct 'URL': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to construct 'URL': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to construct 'URL': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return exports.setup(Object.create(new.target.prototype), globalObject, args);
        }
        toJSON() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'toJSON' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol].toJSON();
        }
        get href() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get href' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["href"];
        }
        set href(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set href' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'href' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["href"] = V;
        }
        toString() {
            const esValue = this;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["href"];
        }
        get origin() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get origin' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["origin"];
        }
        get protocol() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get protocol' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["protocol"];
        }
        set protocol(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set protocol' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'protocol' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["protocol"] = V;
        }
        get username() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get username' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["username"];
        }
        set username(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set username' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'username' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["username"] = V;
        }
        get password() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get password' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["password"];
        }
        set password(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set password' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'password' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["password"] = V;
        }
        get host() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get host' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["host"];
        }
        set host(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set host' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'host' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["host"] = V;
        }
        get hostname() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get hostname' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["hostname"];
        }
        set hostname(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set hostname' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'hostname' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["hostname"] = V;
        }
        get port() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get port' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["port"];
        }
        set port(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set port' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'port' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["port"] = V;
        }
        get pathname() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get pathname' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["pathname"];
        }
        set pathname(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set pathname' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'pathname' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["pathname"] = V;
        }
        get search() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get search' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["search"];
        }
        set search(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set search' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'search' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["search"] = V;
        }
        get searchParams() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get searchParams' called on an object that is not a valid instance of URL.");
            }
            return utils.getSameObject(this, "searchParams", ()=>{
                return utils.tryWrapperForImpl(esValue[implSymbol]["searchParams"]);
            });
        }
        get hash() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get hash' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["hash"];
        }
        set hash(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set hash' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'hash' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["hash"] = V;
        }
        static parse(url) {
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'parse' on 'URL': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'parse' on 'URL': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'parse' on 'URL': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(Impl.implementation.parse(globalObject, ...args));
        }
        static canParse(url) {
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'canParse' on 'URL': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'canParse' on 'URL': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'canParse' on 'URL': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return Impl.implementation.canParse(...args);
        }
    }
    Object.defineProperties(URL.prototype, {
        toJSON: {
            enumerable: true
        },
        href: {
            enumerable: true
        },
        toString: {
            enumerable: true
        },
        origin: {
            enumerable: true
        },
        protocol: {
            enumerable: true
        },
        username: {
            enumerable: true
        },
        password: {
            enumerable: true
        },
        host: {
            enumerable: true
        },
        hostname: {
            enumerable: true
        },
        port: {
            enumerable: true
        },
        pathname: {
            enumerable: true
        },
        search: {
            enumerable: true
        },
        searchParams: {
            enumerable: true
        },
        hash: {
            enumerable: true
        },
        [Symbol.toStringTag]: {
            value: "URL",
            configurable: true
        }
    });
    Object.defineProperties(URL, {
        parse: {
            enumerable: true
        },
        canParse: {
            enumerable: true
        }
    });
    ctorRegistry[interfaceName] = URL;
    Object.defineProperty(globalObject, interfaceName, {
        configurable: true,
        writable: true,
        value: URL
    });
    if (globalNames.includes("Window")) {
        Object.defineProperty(globalObject, "webkitURL", {
            configurable: true,
            writable: true,
            value: URL
        });
    }
};
const Impl = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/URL-impl.js [middleware-edge] (ecmascript)");
}),
"[project]/energy-os-v0/node_modules/whatwg-url/webidl2js-wrapper.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const URL = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/URL.js [middleware-edge] (ecmascript)");
const URLSearchParams = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/URLSearchParams.js [middleware-edge] (ecmascript)");
exports.URL = URL;
exports.URLSearchParams = URLSearchParams;
}),
"[project]/energy-os-v0/node_modules/whatwg-url/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { URL, URLSearchParams } = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/webidl2js-wrapper.js [middleware-edge] (ecmascript)");
const urlStateMachine = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/url-state-machine.js [middleware-edge] (ecmascript)");
const percentEncoding = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/lib/percent-encoding.js [middleware-edge] (ecmascript)");
const sharedGlobalObject = {
    Array,
    Object,
    Promise,
    String,
    TypeError
};
URL.install(sharedGlobalObject, [
    "Window"
]);
URLSearchParams.install(sharedGlobalObject, [
    "Window"
]);
exports.URL = sharedGlobalObject.URL;
exports.URLSearchParams = sharedGlobalObject.URLSearchParams;
exports.parseURL = urlStateMachine.parseURL;
exports.basicURLParse = urlStateMachine.basicURLParse;
exports.serializeURL = urlStateMachine.serializeURL;
exports.serializePath = urlStateMachine.serializePath;
exports.serializeHost = urlStateMachine.serializeHost;
exports.serializeInteger = urlStateMachine.serializeInteger;
exports.serializeURLOrigin = urlStateMachine.serializeURLOrigin;
exports.setTheUsername = urlStateMachine.setTheUsername;
exports.setThePassword = urlStateMachine.setThePassword;
exports.cannotHaveAUsernamePasswordPort = urlStateMachine.cannotHaveAUsernamePasswordPort;
exports.hasAnOpaquePath = urlStateMachine.hasAnOpaquePath;
exports.percentDecodeString = percentEncoding.percentDecodeString;
exports.percentDecodeBytes = percentEncoding.percentDecodeBytes;
}),
"[project]/energy-os-v0/node_modules/webidl-conversions/lib/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function makeException(ErrorType, message, options) {
    if (options.globals) {
        ErrorType = options.globals[ErrorType.name];
    }
    return new ErrorType(`${options.context ? options.context : "Value"} ${message}.`);
}
function toNumber(value, options) {
    if (typeof value === "bigint") {
        throw makeException(TypeError, "is a BigInt which cannot be converted to a number", options);
    }
    if (!options.globals) {
        return Number(value);
    }
    return options.globals.Number(value);
}
// Round x to the nearest integer, choosing the even integer if it lies halfway between two.
function evenRound(x) {
    // There are four cases for numbers with fractional part being .5:
    //
    // case |     x     | floor(x) | round(x) | expected | x <> 0 | x % 1 | x & 1 |   example
    //   1  |  2n + 0.5 |  2n      |  2n + 1  |  2n      |   >    |  0.5  |   0   |  0.5 ->  0
    //   2  |  2n + 1.5 |  2n + 1  |  2n + 2  |  2n + 2  |   >    |  0.5  |   1   |  1.5 ->  2
    //   3  | -2n - 0.5 | -2n - 1  | -2n      | -2n      |   <    | -0.5  |   0   | -0.5 ->  0
    //   4  | -2n - 1.5 | -2n - 2  | -2n - 1  | -2n - 2  |   <    | -0.5  |   1   | -1.5 -> -2
    // (where n is a non-negative integer)
    //
    // Branch here for cases 1 and 4
    if (x > 0 && x % 1 === +0.5 && (x & 1) === 0 || x < 0 && x % 1 === -0.5 && (x & 1) === 1) {
        return censorNegativeZero(Math.floor(x));
    }
    return censorNegativeZero(Math.round(x));
}
function integerPart(n) {
    return censorNegativeZero(Math.trunc(n));
}
function sign(x) {
    return x < 0 ? -1 : 1;
}
function modulo(x, y) {
    // https://tc39.github.io/ecma262/#eqn-modulo
    // Note that http://stackoverflow.com/a/4467559/3191 does NOT work for large modulos
    const signMightNotMatch = x % y;
    if (sign(y) !== sign(signMightNotMatch)) {
        return signMightNotMatch + y;
    }
    return signMightNotMatch;
}
function censorNegativeZero(x) {
    return x === 0 ? 0 : x;
}
function createIntegerConversion(bitLength, { unsigned }) {
    let lowerBound, upperBound;
    if (unsigned) {
        lowerBound = 0;
        upperBound = 2 ** bitLength - 1;
    } else {
        lowerBound = -(2 ** (bitLength - 1));
        upperBound = 2 ** (bitLength - 1) - 1;
    }
    const twoToTheBitLength = 2 ** bitLength;
    const twoToOneLessThanTheBitLength = 2 ** (bitLength - 1);
    return (value, options = {})=>{
        let x = toNumber(value, options);
        x = censorNegativeZero(x);
        if (options.enforceRange) {
            if (!Number.isFinite(x)) {
                throw makeException(TypeError, "is not a finite number", options);
            }
            x = integerPart(x);
            if (x < lowerBound || x > upperBound) {
                throw makeException(TypeError, `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`, options);
            }
            return x;
        }
        if (!Number.isNaN(x) && options.clamp) {
            x = Math.min(Math.max(x, lowerBound), upperBound);
            x = evenRound(x);
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = integerPart(x);
        // Math.pow(2, 64) is not accurately representable in JavaScript, so try to avoid these per-spec operations if
        // possible. Hopefully it's an optimization for the non-64-bitLength cases too.
        if (x >= lowerBound && x <= upperBound) {
            return x;
        }
        // These will not work great for bitLength of 64, but oh well. See the README for more details.
        x = modulo(x, twoToTheBitLength);
        if (!unsigned && x >= twoToOneLessThanTheBitLength) {
            return x - twoToTheBitLength;
        }
        return x;
    };
}
function createLongLongConversion(bitLength, { unsigned }) {
    const upperBound = Number.MAX_SAFE_INTEGER;
    const lowerBound = unsigned ? 0 : Number.MIN_SAFE_INTEGER;
    const asBigIntN = unsigned ? BigInt.asUintN : BigInt.asIntN;
    return (value, options = {})=>{
        let x = toNumber(value, options);
        x = censorNegativeZero(x);
        if (options.enforceRange) {
            if (!Number.isFinite(x)) {
                throw makeException(TypeError, "is not a finite number", options);
            }
            x = integerPart(x);
            if (x < lowerBound || x > upperBound) {
                throw makeException(TypeError, `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`, options);
            }
            return x;
        }
        if (!Number.isNaN(x) && options.clamp) {
            x = Math.min(Math.max(x, lowerBound), upperBound);
            x = evenRound(x);
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        let xBigInt = BigInt(integerPart(x));
        xBigInt = asBigIntN(bitLength, xBigInt);
        return Number(xBigInt);
    };
}
exports.any = (value)=>{
    return value;
};
exports.undefined = ()=>{
    return undefined;
};
exports.boolean = (value)=>{
    return Boolean(value);
};
exports.byte = createIntegerConversion(8, {
    unsigned: false
});
exports.octet = createIntegerConversion(8, {
    unsigned: true
});
exports.short = createIntegerConversion(16, {
    unsigned: false
});
exports["unsigned short"] = createIntegerConversion(16, {
    unsigned: true
});
exports.long = createIntegerConversion(32, {
    unsigned: false
});
exports["unsigned long"] = createIntegerConversion(32, {
    unsigned: true
});
exports["long long"] = createLongLongConversion(64, {
    unsigned: false
});
exports["unsigned long long"] = createLongLongConversion(64, {
    unsigned: true
});
exports.double = (value, options = {})=>{
    const x = toNumber(value, options);
    if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite floating-point value", options);
    }
    return x;
};
exports["unrestricted double"] = (value, options = {})=>{
    const x = toNumber(value, options);
    return x;
};
exports.float = (value, options = {})=>{
    const x = toNumber(value, options);
    if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite floating-point value", options);
    }
    if (Object.is(x, -0)) {
        return x;
    }
    const y = Math.fround(x);
    if (!Number.isFinite(y)) {
        throw makeException(TypeError, "is outside the range of a single-precision floating-point value", options);
    }
    return y;
};
exports["unrestricted float"] = (value, options = {})=>{
    const x = toNumber(value, options);
    if (isNaN(x)) {
        return x;
    }
    if (Object.is(x, -0)) {
        return x;
    }
    return Math.fround(x);
};
exports.DOMString = (value, options = {})=>{
    if (options.treatNullAsEmptyString && value === null) {
        return "";
    }
    if (typeof value === "symbol") {
        throw makeException(TypeError, "is a symbol, which cannot be converted to a string", options);
    }
    const StringCtor = options.globals ? options.globals.String : String;
    return StringCtor(value);
};
exports.ByteString = (value, options = {})=>{
    const x = exports.DOMString(value, options);
    let c;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw makeException(TypeError, "is not a valid ByteString", options);
        }
    }
    return x;
};
exports.USVString = (value, options = {})=>{
    const S = exports.DOMString(value, options);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else if (i === n - 1) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            const d = S.charCodeAt(i + 1);
            if (0xDC00 <= d && d <= 0xDFFF) {
                const a = c & 0x3FF;
                const b = d & 0x3FF;
                U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                ++i;
            } else {
                U.push(String.fromCodePoint(0xFFFD));
            }
        }
    }
    return U.join("");
};
exports.object = (value, options = {})=>{
    if (value === null || typeof value !== "object" && typeof value !== "function") {
        throw makeException(TypeError, "is not an object", options);
    }
    return value;
};
const abByteLengthGetter = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const sabByteLengthGetter = typeof SharedArrayBuffer === "function" ? Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get : null;
function isNonSharedArrayBuffer(value) {
    try {
        // This will throw on SharedArrayBuffers, but not detached ArrayBuffers.
        // (The spec says it should throw, but the spec conflicts with implementations: https://github.com/tc39/ecma262/issues/678)
        abByteLengthGetter.call(value);
        return true;
    } catch  {
        return false;
    }
}
function isSharedArrayBuffer(value) {
    try {
        sabByteLengthGetter.call(value);
        return true;
    } catch  {
        return false;
    }
}
function isArrayBufferDetached(value) {
    try {
        // eslint-disable-next-line no-new
        new Uint8Array(value);
        return false;
    } catch  {
        return true;
    }
}
exports.ArrayBuffer = (value, options = {})=>{
    if (!isNonSharedArrayBuffer(value)) {
        if (options.allowShared && !isSharedArrayBuffer(value)) {
            throw makeException(TypeError, "is not an ArrayBuffer or SharedArrayBuffer", options);
        }
        throw makeException(TypeError, "is not an ArrayBuffer", options);
    }
    if (isArrayBufferDetached(value)) {
        throw makeException(TypeError, "is a detached ArrayBuffer", options);
    }
    return value;
};
const dvByteLengthGetter = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
exports.DataView = (value, options = {})=>{
    try {
        dvByteLengthGetter.call(value);
    } catch (e) {
        throw makeException(TypeError, "is not a DataView", options);
    }
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
        throw makeException(TypeError, "is backed by a SharedArrayBuffer, which is not allowed", options);
    }
    if (isArrayBufferDetached(value.buffer)) {
        throw makeException(TypeError, "is backed by a detached ArrayBuffer", options);
    }
    return value;
};
// Returns the unforgeable `TypedArray` constructor name or `undefined`,
// if the `this` value isn't a valid `TypedArray` object.
//
// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag
const typedArrayNameGetter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get;
[
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Float32Array,
    Float64Array
].forEach((func)=>{
    const { name } = func;
    const article = /^[AEIOU]/u.test(name) ? "an" : "a";
    exports[name] = (value, options = {})=>{
        if (!ArrayBuffer.isView(value) || typedArrayNameGetter.call(value) !== name) {
            throw makeException(TypeError, `is not ${article} ${name} object`, options);
        }
        if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
            throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
        }
        if (isArrayBufferDetached(value.buffer)) {
            throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
        }
        return value;
    };
});
// Common definitions
exports.ArrayBufferView = (value, options = {})=>{
    if (!ArrayBuffer.isView(value)) {
        throw makeException(TypeError, "is not a view on an ArrayBuffer or SharedArrayBuffer", options);
    }
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
        throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
    }
    if (isArrayBufferDetached(value.buffer)) {
        throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
    }
    return value;
};
exports.BufferSource = (value, options = {})=>{
    if (ArrayBuffer.isView(value)) {
        if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
            throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
        }
        if (isArrayBufferDetached(value.buffer)) {
            throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
        }
        return value;
    }
    if (!options.allowShared && !isNonSharedArrayBuffer(value)) {
        throw makeException(TypeError, "is not an ArrayBuffer or a view on one", options);
    }
    if (options.allowShared && !isSharedArrayBuffer(value) && !isNonSharedArrayBuffer(value)) {
        throw makeException(TypeError, "is not an ArrayBuffer, SharedArrayBuffer, or a view on one", options);
    }
    if (isArrayBufferDetached(value)) {
        throw makeException(TypeError, "is a detached ArrayBuffer", options);
    }
    return value;
};
exports.DOMTimeStamp = exports["unsigned long long"];
}),
"[project]/energy-os-v0/node_modules/mongodb-connection-string-url/lib/redact.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redactValidConnectionString = redactValidConnectionString;
exports.redactConnectionString = redactConnectionString;
const index_1 = __importStar(__turbopack_context__.r("[project]/energy-os-v0/node_modules/mongodb-connection-string-url/lib/index.js [middleware-edge] (ecmascript)"));
function redactValidConnectionString(inputUrl, options) {
    const url = inputUrl.clone();
    const replacementString = options?.replacementString ?? '_credentials_';
    const redactUsernames = options?.redactUsernames ?? true;
    if ((url.username || url.password) && redactUsernames) {
        url.username = replacementString;
        url.password = '';
    } else if (url.password) {
        url.password = replacementString;
    }
    if (url.searchParams.has('authMechanismProperties')) {
        const props = new index_1.CommaAndColonSeparatedRecord(url.searchParams.get('authMechanismProperties'));
        if (props.get('AWS_SESSION_TOKEN')) {
            props.set('AWS_SESSION_TOKEN', replacementString);
            url.searchParams.set('authMechanismProperties', props.toString());
        }
    }
    if (url.searchParams.has('tlsCertificateKeyFilePassword')) {
        url.searchParams.set('tlsCertificateKeyFilePassword', replacementString);
    }
    if (url.searchParams.has('proxyUsername') && redactUsernames) {
        url.searchParams.set('proxyUsername', replacementString);
    }
    if (url.searchParams.has('proxyPassword')) {
        url.searchParams.set('proxyPassword', replacementString);
    }
    return url;
}
function redactConnectionString(uri, options) {
    const replacementString = options?.replacementString ?? '<credentials>';
    const redactUsernames = options?.redactUsernames ?? true;
    let parsed;
    try {
        parsed = new index_1.default(uri);
    } catch  {}
    if (parsed) {
        options = {
            ...options,
            replacementString: '___credentials___'
        };
        return parsed.redact(options).toString().replace(/___credentials___/g, replacementString);
    }
    const R = replacementString;
    const replacements = [
        (uri)=>uri.replace(redactUsernames ? /(\/\/)(.*)(@)/g : /(\/\/[^@]*:)(.*)(@)/g, `$1${R}$3`),
        (uri)=>uri.replace(/(AWS_SESSION_TOKEN(:|%3A))([^,&]+)/gi, `$1${R}`),
        (uri)=>uri.replace(/(tlsCertificateKeyFilePassword=)([^&]+)/gi, `$1${R}`),
        (uri)=>redactUsernames ? uri.replace(/(proxyUsername=)([^&]+)/gi, `$1${R}`) : uri,
        (uri)=>uri.replace(/(proxyPassword=)([^&]+)/gi, `$1${R}`)
    ];
    for (const replacer of replacements){
        uri = replacer(uri);
    }
    return uri;
} //# sourceMappingURL=redact.js.map
}),
"[project]/energy-os-v0/node_modules/mongodb-connection-string-url/lib/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommaAndColonSeparatedRecord = exports.ConnectionString = exports.redactConnectionString = void 0;
const whatwg_url_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/whatwg-url/index.js [middleware-edge] (ecmascript)");
const redact_1 = __turbopack_context__.r("[project]/energy-os-v0/node_modules/mongodb-connection-string-url/lib/redact.js [middleware-edge] (ecmascript)");
Object.defineProperty(exports, "redactConnectionString", {
    enumerable: true,
    get: function() {
        return redact_1.redactConnectionString;
    }
});
const DUMMY_HOSTNAME = '__this_is_a_placeholder__';
function connectionStringHasValidScheme(connectionString) {
    return connectionString.startsWith('mongodb://') || connectionString.startsWith('mongodb+srv://');
}
const HOSTS_REGEX = /^(?<protocol>[^/]+):\/\/(?:(?<username>[^:@]*)(?::(?<password>[^@]*))?@)?(?<hosts>(?!:)[^/?@]*)(?<rest>.*)/;
class CaseInsensitiveMap extends Map {
    delete(name) {
        return super.delete(this._normalizeKey(name));
    }
    get(name) {
        return super.get(this._normalizeKey(name));
    }
    has(name) {
        return super.has(this._normalizeKey(name));
    }
    set(name, value) {
        return super.set(this._normalizeKey(name), value);
    }
    _normalizeKey(name) {
        name = `${name}`;
        for (const key of this.keys()){
            if (key.toLowerCase() === name.toLowerCase()) {
                name = key;
                break;
            }
        }
        return name;
    }
}
function caseInsenstiveURLSearchParams(Ctor) {
    return class CaseInsenstiveURLSearchParams extends Ctor {
        append(name, value) {
            return super.append(this._normalizeKey(name), value);
        }
        delete(name) {
            return super.delete(this._normalizeKey(name));
        }
        get(name) {
            return super.get(this._normalizeKey(name));
        }
        getAll(name) {
            return super.getAll(this._normalizeKey(name));
        }
        has(name) {
            return super.has(this._normalizeKey(name));
        }
        set(name, value) {
            return super.set(this._normalizeKey(name), value);
        }
        keys() {
            return super.keys();
        }
        values() {
            return super.values();
        }
        entries() {
            return super.entries();
        }
        [Symbol.iterator]() {
            return super[Symbol.iterator]();
        }
        _normalizeKey(name) {
            return CaseInsensitiveMap.prototype._normalizeKey.call(this, name);
        }
    };
}
class URLWithoutHost extends whatwg_url_1.URL {
}
class MongoParseError extends Error {
    get name() {
        return 'MongoParseError';
    }
}
class ConnectionString extends URLWithoutHost {
    _hosts;
    constructor(uri, options = {}){
        const { looseValidation } = options;
        if (!looseValidation && !connectionStringHasValidScheme(uri)) {
            throw new MongoParseError('Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"');
        }
        const match = uri.match(HOSTS_REGEX);
        if (!match) {
            throw new MongoParseError(`Invalid connection string "${uri}"`);
        }
        const { protocol, username, password, hosts, rest } = match.groups ?? {};
        if (!looseValidation) {
            if (!protocol || !hosts) {
                throw new MongoParseError(`Protocol and host list are required in "${uri}"`);
            }
            try {
                decodeURIComponent(username ?? '');
                decodeURIComponent(password ?? '');
            } catch (err) {
                throw new MongoParseError(err.message);
            }
            const illegalCharacters = /[:/?#[\]@]/gi;
            if (username?.match(illegalCharacters)) {
                throw new MongoParseError(`Username contains unescaped characters ${username}`);
            }
            if (!username || !password) {
                const uriWithoutProtocol = uri.replace(`${protocol}://`, '');
                if (uriWithoutProtocol.startsWith('@') || uriWithoutProtocol.startsWith(':')) {
                    throw new MongoParseError('URI contained empty userinfo section');
                }
            }
            if (password?.match(illegalCharacters)) {
                throw new MongoParseError('Password contains unescaped characters');
            }
        }
        let authString = '';
        if (typeof username === 'string') authString += username;
        if (typeof password === 'string') authString += `:${password}`;
        if (authString) authString += '@';
        try {
            super(`${protocol.toLowerCase()}://${authString}${DUMMY_HOSTNAME}${rest}`);
        } catch (err) {
            if (looseValidation) {
                new ConnectionString(uri, {
                    ...options,
                    looseValidation: false
                });
            }
            if (typeof err.message === 'string') {
                err.message = err.message.replace(DUMMY_HOSTNAME, hosts);
            }
            throw err;
        }
        this._hosts = hosts.split(',');
        if (!looseValidation) {
            if (this.isSRV && this.hosts.length !== 1) {
                throw new MongoParseError('mongodb+srv URI cannot have multiple service names');
            }
            if (this.isSRV && this.hosts.some((host)=>host.includes(':'))) {
                throw new MongoParseError('mongodb+srv URI cannot have port number');
            }
        }
        if (!this.pathname) {
            this.pathname = '/';
        }
        Object.setPrototypeOf(this.searchParams, caseInsenstiveURLSearchParams(this.searchParams.constructor).prototype);
    }
    get host() {
        return DUMMY_HOSTNAME;
    }
    set host(_ignored) {
        throw new Error('No single host for connection string');
    }
    get hostname() {
        return DUMMY_HOSTNAME;
    }
    set hostname(_ignored) {
        throw new Error('No single host for connection string');
    }
    get port() {
        return '';
    }
    set port(_ignored) {
        throw new Error('No single host for connection string');
    }
    get href() {
        return this.toString();
    }
    set href(_ignored) {
        throw new Error('Cannot set href for connection strings');
    }
    get isSRV() {
        return this.protocol.includes('srv');
    }
    get hosts() {
        return this._hosts;
    }
    set hosts(list) {
        this._hosts = list;
    }
    toString() {
        return super.toString().replace(DUMMY_HOSTNAME, this.hosts.join(','));
    }
    clone() {
        return new ConnectionString(this.toString(), {
            looseValidation: true
        });
    }
    redact(options) {
        return (0, redact_1.redactValidConnectionString)(this, options);
    }
    typedSearchParams() {
        const _sametype = false && new (caseInsenstiveURLSearchParams(whatwg_url_1.URLSearchParams))();
        return this.searchParams;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const { href, origin, protocol, username, password, hosts, pathname, search, searchParams, hash } = this;
        return {
            href,
            origin,
            protocol,
            username,
            password,
            hosts,
            pathname,
            search,
            searchParams,
            hash
        };
    }
}
exports.ConnectionString = ConnectionString;
class CommaAndColonSeparatedRecord extends CaseInsensitiveMap {
    constructor(from){
        super();
        for (const entry of (from ?? '').split(',')){
            if (!entry) continue;
            const colonIndex = entry.indexOf(':');
            if (colonIndex === -1) {
                this.set(entry, '');
            } else {
                this.set(entry.slice(0, colonIndex), entry.slice(colonIndex + 1));
            }
        }
    }
    toString() {
        return [
            ...this
        ].map((entry)=>entry.join(':')).join(',');
    }
}
exports.CommaAndColonSeparatedRecord = CommaAndColonSeparatedRecord;
exports.default = ConnectionString; //# sourceMappingURL=index.js.map
}),
"[project]/energy-os-v0/node_modules/memory-pager/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
module.exports = Pager;
function Pager(pageSize, opts) {
    if (!(this instanceof Pager)) return new Pager(pageSize, opts);
    this.length = 0;
    this.updates = [];
    this.path = new Uint16Array(4);
    this.pages = new Array(32768);
    this.maxPages = this.pages.length;
    this.level = 0;
    this.pageSize = pageSize || 1024;
    this.deduplicate = opts ? opts.deduplicate : null;
    this.zeros = this.deduplicate ? alloc(this.deduplicate.length) : null;
}
Pager.prototype.updated = function(page) {
    while(this.deduplicate && page.buffer[page.deduplicate] === this.deduplicate[page.deduplicate]){
        page.deduplicate++;
        if (page.deduplicate === this.deduplicate.length) {
            page.deduplicate = 0;
            if (page.buffer.equals && page.buffer.equals(this.deduplicate)) page.buffer = this.deduplicate;
            break;
        }
    }
    if (page.updated || !this.updates) return;
    page.updated = true;
    this.updates.push(page);
};
Pager.prototype.lastUpdate = function() {
    if (!this.updates || !this.updates.length) return null;
    var page = this.updates.pop();
    page.updated = false;
    return page;
};
Pager.prototype._array = function(i, noAllocate) {
    if (i >= this.maxPages) {
        if (noAllocate) return;
        grow(this, i);
    }
    factor(i, this.path);
    var arr = this.pages;
    for(var j = this.level; j > 0; j--){
        var p = this.path[j];
        var next = arr[p];
        if (!next) {
            if (noAllocate) return;
            next = arr[p] = new Array(32768);
        }
        arr = next;
    }
    return arr;
};
Pager.prototype.get = function(i, noAllocate) {
    var arr = this._array(i, noAllocate);
    var first = this.path[0];
    var page = arr && arr[first];
    if (!page && !noAllocate) {
        page = arr[first] = new Page(i, alloc(this.pageSize));
        if (i >= this.length) this.length = i + 1;
    }
    if (page && page.buffer === this.deduplicate && this.deduplicate && !noAllocate) {
        page.buffer = copy(page.buffer);
        page.deduplicate = 0;
    }
    return page;
};
Pager.prototype.set = function(i, buf) {
    var arr = this._array(i, false);
    var first = this.path[0];
    if (i >= this.length) this.length = i + 1;
    if (!buf || this.zeros && buf.equals && buf.equals(this.zeros)) {
        arr[first] = undefined;
        return;
    }
    if (this.deduplicate && buf.equals && buf.equals(this.deduplicate)) {
        buf = this.deduplicate;
    }
    var page = arr[first];
    var b = truncate(buf, this.pageSize);
    if (page) page.buffer = b;
    else arr[first] = new Page(i, b);
};
Pager.prototype.toBuffer = function() {
    var list = new Array(this.length);
    var empty = alloc(this.pageSize);
    var ptr = 0;
    while(ptr < list.length){
        var arr = this._array(ptr, true);
        for(var i = 0; i < 32768 && ptr < list.length; i++){
            list[ptr++] = arr && arr[i] ? arr[i].buffer : empty;
        }
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].concat(list);
};
function grow(pager, index) {
    while(pager.maxPages < index){
        var old = pager.pages;
        pager.pages = new Array(32768);
        pager.pages[0] = old;
        pager.level++;
        pager.maxPages *= 32768;
    }
}
function truncate(buf, len) {
    if (buf.length === len) return buf;
    if (buf.length > len) return buf.slice(0, len);
    var cpy = alloc(len);
    buf.copy(cpy);
    return cpy;
}
function alloc(size) {
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc) return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(size);
    var buf = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"](size);
    buf.fill(0);
    return buf;
}
function copy(buf) {
    var cpy = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].allocUnsafe(buf.length) : new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"](buf.length);
    buf.copy(cpy);
    return cpy;
}
function Page(i, buf) {
    this.offset = i * buf.length;
    this.buffer = buf;
    this.updated = false;
    this.deduplicate = 0;
}
function factor(n, out) {
    n = (n - (out[0] = n & 32767)) / 32768;
    n = (n - (out[1] = n & 32767)) / 32768;
    out[3] = (n - (out[2] = n & 32767)) / 32768 & 32767;
}
}),
"[project]/energy-os-v0/node_modules/sparse-bitfield/index.js [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var pager = __turbopack_context__.r("[project]/energy-os-v0/node_modules/memory-pager/index.js [middleware-edge] (ecmascript)");
module.exports = Bitfield;
function Bitfield(opts) {
    if (!(this instanceof Bitfield)) return new Bitfield(opts);
    if (!opts) opts = {};
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].isBuffer(opts)) opts = {
        buffer: opts
    };
    this.pageOffset = opts.pageOffset || 0;
    this.pageSize = opts.pageSize || 1024;
    this.pages = opts.pages || pager(this.pageSize);
    this.byteLength = this.pages.length * this.pageSize;
    this.length = 8 * this.byteLength;
    if (!powerOfTwo(this.pageSize)) throw new Error('The page size should be a power of two');
    this._trackUpdates = !!opts.trackUpdates;
    this._pageMask = this.pageSize - 1;
    if (opts.buffer) {
        for(var i = 0; i < opts.buffer.length; i += this.pageSize){
            this.pages.set(i / this.pageSize, opts.buffer.slice(i, i + this.pageSize));
        }
        this.byteLength = opts.buffer.length;
        this.length = 8 * this.byteLength;
    }
}
Bitfield.prototype.get = function(i) {
    var o = i & 7;
    var j = (i - o) / 8;
    return !!(this.getByte(j) & 128 >> o);
};
Bitfield.prototype.getByte = function(i) {
    var o = i & this._pageMask;
    var j = (i - o) / this.pageSize;
    var page = this.pages.get(j, true);
    return page ? page.buffer[o + this.pageOffset] : 0;
};
Bitfield.prototype.set = function(i, v) {
    var o = i & 7;
    var j = (i - o) / 8;
    var b = this.getByte(j);
    return this.setByte(j, v ? b | 128 >> o : b & (255 ^ 128 >> o));
};
Bitfield.prototype.toBuffer = function() {
    var all = alloc(this.pages.length * this.pageSize);
    for(var i = 0; i < this.pages.length; i++){
        var next = this.pages.get(i, true);
        var allOffset = i * this.pageSize;
        if (next) next.buffer.copy(all, allOffset, this.pageOffset, this.pageOffset + this.pageSize);
    }
    return all;
};
Bitfield.prototype.setByte = function(i, b) {
    var o = i & this._pageMask;
    var j = (i - o) / this.pageSize;
    var page = this.pages.get(j, false);
    o += this.pageOffset;
    if (page.buffer[o] === b) return false;
    page.buffer[o] = b;
    if (i >= this.byteLength) {
        this.byteLength = i + 1;
        this.length = this.byteLength * 8;
    }
    if (this._trackUpdates) this.pages.updated(page);
    return true;
};
function alloc(n) {
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc) return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].alloc(n);
    var b = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"](n);
    b.fill(0);
    return b;
}
function powerOfTwo(x) {
    return !(x & x - 1);
}
}),
]);

//# sourceMappingURL=9eff3_634ec7b7._.js.map