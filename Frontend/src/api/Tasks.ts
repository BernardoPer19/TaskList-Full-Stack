import axios from "axios";
import { TaskType } from "../types/TasksType";

const API = "http://localhost:3000"; // API base

const axiosInstance = axios.create({
  baseURL: API,
  withCredentials: true,
});

export const getTasksRequest = () => axiosInstance.get(`/tasks`);

export const createTasksRequest = (task: TaskType) =>
  axiosInstance.post(`/tasks`, task);

export const deleteTasksRequest = (task_id: number) =>
  axiosInstance.delete(`/tasks`, { data: { task_id } });

export const updateTasksRequest = (taskId: string, task: TaskType) =>
  axiosInstance.put(`/tasks/${taskId}`, task);
