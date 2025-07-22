import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// MongoDB URI must be provided from Vercel env
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

export async function POST(request) {
  let client;

  try {
    const body = await request.json();

    const requiredFields = [
      "schoolName",
      "contactPerson",
      "email",
      "phone",
      "category",
      "teamName",
      "studentNames",
      "mentorName",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    if (
      !Array.isArray(body.studentNames) ||
      body.studentNames.length !== 3 ||
      body.studentNames.some((name) => !name.trim())
    ) {
      return NextResponse.json(
        { error: "Three student names are required" },
        { status: 400 }
      );
    }

    client = new MongoClient(uri);
    await client.connect();

    const db = client.db("worldskillchallenge");
    const collection = db.collection("registrations");

    const existingTeam = await collection.findOne({
      schoolName: body.schoolName,
      teamName: body.teamName,
    });

    if (existingTeam) {
      return NextResponse.json(
        { error: "Team name already exists for this school" },
        { status: 409 }
      );
    }

    const registration = {
      ...body,
      registrationDate: new Date(),
      status: "pending",
      paymentStatus: "pending",
    };

    const result = await collection.insertOne(registration);

    return NextResponse.json(
      {
        message: "Registration successful",
        registrationId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    if (client) await client.close();
  }
}

export async function GET() {
  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();

    const db = client.db("worldskillchallenge");
    const collection = db.collection("registrations");

    const registrations = await collection.find({}).toArray();

    return NextResponse.json({ registrations }, { status: 200 });
  } catch (error) {
    console.error("Fetch registrations error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    if (client) await client.close();
  }
}
