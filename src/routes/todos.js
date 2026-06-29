import { Router } from "express";
import { getAuth } from "@clerk/express";
import prisma from "../lib/prisma.js";

const router = Router();

// This fetches all todos for the authenticated user
router.get("/", async (req, res) => {
  const { userId } = getAuth(req);
  const todos = await prisma.todo.findMany({ where: { userId } });
  res.json(todos);
});

// This creates a new todo for the authenticated user
router.post("/", async (req, res) => {
  const { userId } = getAuth(req);
  const { title } = req.body;
  const todo = await prisma.todo.create({ data: { title, userId } });
  res.status(201).json(todo);
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
