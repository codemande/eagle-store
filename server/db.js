import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString:   process.env.LOCAL_DATABASE_URL, //process.env.DATABASE_URL ||
  // ssl: {
  //   require: true,               // Force SSL
  //   rejectUnauthorized: false,   // Allow self-signed certs
  // }, 
  ssl: false
});

pool.connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

export default pool;