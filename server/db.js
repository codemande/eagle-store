import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL || process.env.LOCAL_DATABASE_URL,
//   ssl: {
//     require: true,               // Force SSL
//     rejectUnauthorized: false,   // Allow self-signed certs
//   }, 
//   // ssl: false
// });

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: isProduction
    ? process.env.DATABASE_URL
    : process.env.LOCAL_DATABASE_URL,
  ssl: isProduction
    ? { rejectUnauthorized: false }   // Railway requires SSL
    : false,                          // Local Postgres: NO SSL
});

pool.connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

export default pool;