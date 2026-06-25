import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import express from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";
import todoRoutes from "./routes/todos.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3000;

// This enables CORS for the frontend
app.use(cors({ origin: "http://localhost:5173" }));
// This enables JSON parsing for all routes
app.use(express.json());
// This enables Clerk's auth middleware for all routes
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// This protects all todo routes by checking if the user is authenticated
const protect = (req, res, next) => {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ error: "Unauthorized" });
  next();
};

// This applies the protect middleware to all todo routes
app.use("/todos", protect, todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
