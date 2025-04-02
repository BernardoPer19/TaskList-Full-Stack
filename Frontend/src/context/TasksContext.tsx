import React, { createContext, useContext, useState, ReactNode } from "react";
import { TaskType } from "../types/TasksType";
import {
  createTasksRequest,
  deleteTasksRequest,
  getTasksRequest,
} from "../api/Tasks";

interface TasksContextType {
  tasks: TaskType[];
  createTasks: (task: TaskType) => Promise<void>;
  getTasks: () => Promise<void>;
  deleteTask: (taskId: number) => Promise<void>;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const createTasks = async (tasks: TaskType) => {
    const response = await createTasksRequest(tasks);
    console.log(response);
  };

  const getTasks = async () => {
    try {
      const response = await getTasksRequest();
      setTasks(response.data);

      console.log(response.data);
      console.log(response.data[0].task_id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      const response = await deleteTasksRequest(taskId);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error deleting task:", error.response?.data?.message);
    }
  };

  return (
    <TasksContext.Provider value={{ deleteTask, tasks, createTasks, getTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
