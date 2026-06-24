// This is to load the environment variables from the .env file
import "dotenv/config";
// This is to load the express module
import express from "express";
// This is to load the cors module
import cors from "cors";
// This is to load the clerk related functions and middleware for authentication and authorization
import {
  clerkMiddleware,
  clerkClient,
  requireAuth,
  getAuth,
} from "@clerk/express";

const app = express();
const PORT = 3000;

// This is to enable CORS for all routes
app.use(cors());
// This is to enable JSON parsing for all routes
app.use(express.json());
// This is to enable the clerk middleware for all routes
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/protected", requireAuth(), async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  const { userId } = getAuth(req);

  // Use the `getUser()` method to get the user's User object
  const user = await clerkClient.users.getUser(userId);

  return res.json({ user });
});
// Application listening on the specified port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
