import sql from "./db/index.js";

async function testConnection() {
  try {
    const result = await sql`SELECT NOW()`;
    console.log("✅ Connected to Railway!", result[0].now);
  } catch (e) {
    console.error("❌ Railway connection failed:", e.message);
  } finally {
    await sql.end({ timeout: 5 });
  }
}

testConnection();
