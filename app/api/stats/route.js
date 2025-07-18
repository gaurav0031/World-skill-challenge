import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)

export async function GET() {
  try {
    await client.connect()
    const db = client.db("worldskillchallenge")
    const collection = db.collection("registrations")

    // Get registration statistics
    const totalRegistrations = await collection.countDocuments()

    const categoryStats = await collection
      .aggregate([
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 },
          },
        },
      ])
      .toArray()

    const schoolStats = await collection
      .aggregate([
        {
          $group: {
            _id: "$schoolName",
            teamCount: { $sum: 1 },
          },
        },
        {
          $sort: { teamCount: -1 },
        },
        {
          $limit: 10,
        },
      ])
      .toArray()

    const recentRegistrations = await collection.find({}).sort({ registrationDate: -1 }).limit(5).toArray()

    return NextResponse.json(
      {
        totalRegistrations,
        categoryStats,
        schoolStats,
        recentRegistrations,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Stats error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  } finally {
    await client.close()
  }
}
