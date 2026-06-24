import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import todoRoutes from "./routes/todos.js";

const app = express();
const PORT = process.env.PORT || 3000;

// This is to enable CORS for the frontend
app.use(cors({ origin: "http://localhost:5173" }));
// This is to enable JSON parsing for all routes
app.use(express.json());
// This is to enable the clerk middleware for all routes
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// This is to enable the todo routes, protected by clerk auth
app.use("/todos", requireAuth(), todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
