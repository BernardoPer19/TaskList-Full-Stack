import { validateTask } from "../Schemas/TasksSchema.js";
import { TasksModel } from "../model/TasksModel.js";

// Controller to get all tasks
export const getTasks = async (req, res) => {
  const user_id = req.user.id;
  console.log("User ID:", user_id);
  try {
    const tasks = await TasksModel.getAllTasks(user_id);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

export const createTasks = async (req, res) => {
  try {
    const validateData = validateTask(req.body);
    const user_id = req.user.id;

    const { titleTask, descriptionTask, isComplete } = validateData.data;

    const newTask = await TasksModel.AddTasks(
      user_id,
      titleTask,
      descriptionTask,
      isComplete
    );

    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Error en createTasks:", error.message);
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;
    console.log("Task ID:", id);
    console.log("User ID:", user_id);

    const deletedTask = await TasksModel.RemoveTasks(user_id, id);
    
    if (!deletedTask || deletedTask.length === 0) {
      return res.status(404).json({ message: "Task not found or not authorized to delete" });
    }

    res.status(200).json({ message: "Task deleted successfully" });

  } catch (error) {
    console.error("Error en deleteTasks:", error.message);
    res.status(500).json({ message: "Error deleting task", error: error.message });
  }
};

// tasksController.js

export const updateTask = async (req, res) => {
  try {
    const validation = validateTask(req.body);
    if (!validation.valid) {
      return res.status(400).json({ message: "Datos inválidos", errors: validation.errors });
    }

    const { titleTask, descriptionTask, isComplete } = validation.data;
    const user_id = req.user.id;
    const { id } = req.params;

    const updatedTask = await TasksModel.UpdateTask(user_id, id, titleTask, descriptionTask, isComplete);

    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada o no autorizada para actualizar" });
    }

    return res.status(200).json(updatedTask);

  } catch (error) {
    console.error("Error en updateTask:", error.message);
    return res.status(500).json({ message: "Error actualizando la tarea", error: error.message });
  }
};

