import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"
import { verifyPassword, createSession } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const db = await getDb()

    // Find user
    const user = await db.collection("users").findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password_hash)
    if (!isValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Create session
    const sessionId = await createSession(user._id.toString())

    const cookieStore = await cookies()
    cookieStore.set("session_id", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Failed to sign in" }, { status: 500 })
  }
}
