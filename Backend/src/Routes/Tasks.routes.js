import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import {
  createTasks,
  deleteTasks,
  getTasks,
} from "../controllers/Tasks.controller.js";

export const TaskRouter = Router();

TaskRouter.get("/tasks", authenticate, getTasks);
TaskRouter.post("/tasks", authenticate, createTasks);
TaskRouter.delete("/tasks/:id", authenticate, deleteTasks);
