// Load environment variables from the .env file
require('dotenv').config();

const { MongoClient } = require("mongodb");

// Get the MongoDB URI from the .env file, fallback to localhost only if not defined
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

// Main setup function
async function setupDatabase() {
  let client;

  try {
    client = new MongoClient(uri); // Connect using Atlas or local MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB");

    // You can change this DB name if needed
    const db = client.db("worldskillchallenge");

    // Collections
    const registrationsCollection = db.collection("registrations");
    const categoriesCollection = db.collection("categories");

    // Indexes for performance
    await registrationsCollection.createIndex({ email: 1 });
    await registrationsCollection.createIndex({ schoolName: 1, teamName: 1 });
    await registrationsCollection.createIndex({ registrationDate: -1 });
    await registrationsCollection.createIndex({ category: 1 });

    // Default categories to insert (You can modify or extend this list)
    const categories = [
      {
        name: "TechFrontiers",
        subtitle: "Robotics, AI & Machine Learning",
        description: "Innovate solutions for real-world problems using sensors, automation, or ML logic.",
        price: 499,
        maxTeams: 100,
      },
      {
        name: "HackLogic",
        subtitle: "Coding & App Development",
        description: "Build useful tools, games, or apps to solve social and student-life challenges.",
        price: 499,
        maxTeams: 100,
      },
      {
        name: "Idea2Impact",
        subtitle: "Young Entrepreneur Challenge",
        description: "Pitch your startup idea that solves a real-world need in sustainability, education, or everyday tech.",
        price: 499,
        maxTeams: 100,
      },
      {
        name: "SoarFest",
        subtitle: "Aeromodelling & Aviation Science",
        description: "Design, construct and explain working gliders or RC-based air models.",
        price: 499,
        maxTeams: 50,
      },
      {
        name: "ThinkCreate",
        subtitle: "Design Thinking & 3D Modelling",
        description: "Solve problems with smart design using SketchUp or paper prototyping techniques.",
        price: 499,
        maxTeams: 100,
      },
      {
        name: "Gaming: Get.Set.Go!",
        subtitle: "RC Car Races & BattleBot Duals",
        description: "Compete in adrenaline-filled RC Car races and BattleBot duals.",
        price: 999,
        maxTeams: 30,
      },
    ];

    // Refresh categories collection
    await categoriesCollection.deleteMany({});
    await categoriesCollection.insertMany(categories);

    // Final status logs
    console.log("✅ Database setup completed successfully!");
    console.log("📁 Collections created:");
    console.log("- registrations");
    console.log("- categories");
    console.log("🧠 Indexes created and sample data inserted.");
  } catch (error) {
    console.error("❌ Database setup error:", error);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

// Run the setup
setupDatabase();
