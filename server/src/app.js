import express from "express";
import cors from "cors";

const app = express();

// Basic configurations
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cors configuration
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Import the routes
import healthCheckRouter from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

export default app;