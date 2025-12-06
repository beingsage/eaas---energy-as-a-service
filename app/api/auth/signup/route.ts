import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"
import { hashPassword, createSession } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, password } = body

    if (!name || !email || !phone || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const db = await getDb()

    // Check if user exists
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    // Create user
    const passwordHash = await hashPassword(password)
    const result = await db.collection("users").insertOne({
      name,
      email,
      phone,
      password_hash: passwordHash,
      role: "customer",
      created_at: new Date(),
      kyc_verified: false,
    })

    // Create session
    const sessionId = await createSession(result.insertedId.toString())

    const cookieStore = await cookies()
    cookieStore.set("session_id", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Failed to create account" }, { status: 500 })
  }
}
