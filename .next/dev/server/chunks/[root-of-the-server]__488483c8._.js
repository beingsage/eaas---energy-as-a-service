module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/energy-os-v0/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDb",
    ()=>getDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
// Do not error at import time; lazily validate the env variable inside getDb.
// Import-time checks cause builds (and other serverless compile steps) to fail if MONGODB_URI
// is not present at build time. We prefer a runtime error when `getDb()` is actually used.
const uri = process.env.MONGODB_URI;
const options = {};
let clientPromise;
if (uri) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!global._mongoClientPromise) {
            const newClient = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, options);
            global._mongoClientPromise = newClient.connect();
        }
        clientPromise = global._mongoClientPromise;
    } else //TURBOPACK unreachable
    ;
}
async function getDb() {
    if (!uri) {
        throw new Error("Please add your MongoDB URI to .env");
    }
    if (!clientPromise) {
        // This should only occur if clientPromise didn't exist because uri wasn't set
        // at import time but is now set (unlikely). Recreate the clientPromise now.
        const newClient = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, options);
        clientPromise = newClient.connect();
    }
    const client = await clientPromise;
    return client.db("energy_os");
}
const __TURBOPACK__default__export__ = clientPromise;
}),
"[project]/energy-os-v0/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "getSession",
    ()=>getSession,
    "hashPassword",
    ()=>hashPassword,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
;
;
async function getSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = cookieStore.get("session_id")?.value;
    if (!sessionId) return null;
    try {
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        const session = await db.collection("sessions").findOne({
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](sessionId),
            expires_at: {
                $gt: new Date()
            }
        });
        if (!session) return null;
        const user = await db.collection("users").findOne({
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["ObjectId"](session.user_id)
        });
        if (!user) return null;
        return {
            user: {
                ...user,
                _id: user._id.toString()
            }
        };
    } catch  {
        return null;
    }
}
async function createSession(userId) {
    const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); // 7 day session
    const result = await db.collection("sessions").insertOne({
        user_id: userId,
        expires_at: expires,
        created_at: new Date()
    });
    return result.insertedId.toString();
}
async function hashPassword(password) {
    // In production, use bcrypt or argon2
    const encoder = new TextEncoder();
    const data = encoder.encode(password + "energy_os_salt");
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b)=>b.toString(16).padStart(2, "0")).join("");
}
async function verifyPassword(password, hash) {
    const passwordHash = await hashPassword(password);
    return passwordHash === hash;
}
}),
"[project]/energy-os-v0/app/api/auth/signup/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/energy-os-v0/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, password } = body;
        if (!name || !email || !phone || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "All fields are required"
            }, {
                status: 400
            });
        }
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        // Check if user exists
        const existingUser = await db.collection("users").findOne({
            email
        });
        if (existingUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Email already registered"
            }, {
                status: 400
            });
        }
        // Create user
        const passwordHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(password);
        const result = await db.collection("users").insertOne({
            name,
            email,
            phone,
            password_hash: passwordHash,
            role: "customer",
            created_at: new Date(),
            kyc_verified: false
        });
        // Create session
        const sessionId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])(result.insertedId.toString());
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set("session_id", sessionId, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        console.error("Signup error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$energy$2d$os$2d$v0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to create account"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__488483c8._.js.map