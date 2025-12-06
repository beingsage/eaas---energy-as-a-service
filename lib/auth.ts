import { cookies } from "next/headers"
import { getDb } from "./mongodb"
import type { User } from "./types"
import { ObjectId } from "mongodb"

export async function getSession(): Promise<{ user: User } | null> {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get("session_id")?.value

  if (!sessionId) return null

  try {
    const db = await getDb()
    const session = await db.collection("sessions").findOne({
      _id: new ObjectId(sessionId),
      expires_at: { $gt: new Date() },
    })

    if (!session) return null

    const user = await db.collection<User>("users").findOne({
      _id: new ObjectId(session.user_id),
    })

    if (!user) return null

    return { user: { ...user, _id: user._id.toString() } as User }
  } catch {
    return null
  }
}

export async function createSession(userId: string): Promise<string> {
  const db = await getDb()
  const expires = new Date()
  expires.setDate(expires.getDate() + 7) // 7 day session

  const result = await db.collection("sessions").insertOne({
    user_id: userId,
    expires_at: expires,
    created_at: new Date(),
  })

  return result.insertedId.toString()
}

export async function hashPassword(password: string): Promise<string> {
  // In production, use bcrypt or argon2
  const encoder = new TextEncoder()
  const data = encoder.encode(password + "energy_os_salt")
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password)
  return passwordHash === hash
}
