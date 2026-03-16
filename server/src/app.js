import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Basic configurations
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Cors configuration
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Import the routes
import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

export default app;