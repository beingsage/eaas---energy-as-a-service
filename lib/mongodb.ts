import { MongoClient, type Db } from "mongodb"

// Do not error at import time; lazily validate the env variable inside getDb.
// Import-time checks cause builds (and other serverless compile steps) to fail if MONGODB_URI
// is not present at build time. We prefer a runtime error when `getDb()` is actually used.
const uri = process.env.MONGODB_URI
const options = {}

let clientPromise: Promise<MongoClient> | undefined

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (uri) {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const newClient = new MongoClient(uri, options)
      global._mongoClientPromise = newClient.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    const newClient = new MongoClient(uri, options)
    clientPromise = newClient.connect()
  }
}

export async function getDb(): Promise<Db> {
  if (!uri) {
    throw new Error("Please add your MongoDB URI to .env")
  }

  if (!clientPromise) {
    // This should only occur if clientPromise didn't exist because uri wasn't set
    // at import time but is now set (unlikely). Recreate the clientPromise now.
    const newClient = new MongoClient(uri, options)
    clientPromise = newClient.connect()
  }

  const client = await clientPromise
  return client.db("energy_os")
}

export default clientPromise
