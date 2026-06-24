import { Router } from "express";
import { getAuth } from "@clerk/express";
import prisma from "../lib/prisma.js";

const router = Router();

// Docs: https://www.prisma.io/docs/orm/prisma-client/queries/crud#findmany
router.get("/", async (req, res) => {
  const { userId } = getAuth(req);
  // TASK 2: Use prisma.todo.findMany() to fetch all todos where userId matches
  res.status(501).json({ error: "Not implemented" });
});

// Docs: https://www.prisma.io/docs/orm/prisma-client/queries/crud#create
router.post("/", async (req, res) => {
  // TASK 3: Get userId from getAuth(req)
  //         Use prisma.todo.create() with req.body.title and userId
  res.status(501).json({ error: "Not implemented" });
});

// Docs: https://www.prisma.io/docs/orm/prisma-client/queries/crud#update
router.patch("/:id", async (req, res) => {
  // TASK 4: Get userId from getAuth(req)
  //         Use prisma.todo.findUnique() with req.params.id to find the todo
  //         Check if todo exists and todo.userId === userId (return 403 if not)
  //         Use prisma.todo.update() to toggle the completed field using req.body.completed
  res.status(501).json({ error: "Not implemented" });
});

// Docs: https://www.prisma.io/docs/orm/prisma-client/queries/crud#delete
router.delete("/:id", async (req, res) => {
  // TASK 5: Get userId from getAuth(req)
  //         Use prisma.todo.findUnique() with req.params.id to find the todo
  //         Check if todo exists and todo.userId === userId (return 403 if not)
  //         Use prisma.todo.delete() to delete it
  res.status(501).json({ error: "Not implemented" });
});

export default router;
