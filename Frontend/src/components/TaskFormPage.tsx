import { useForm } from "react-hook-form";
import { TaskType } from "../types/TasksType";
import { useTasks } from "../context/TasksContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TaskForm() {
  const { register, handleSubmit } = useForm<TaskType>();
  const { createTasks } = useTasks();

  const params = useParams()


  useEffect(()=>{
    console.log(params);
    
  },[])

  const addTask = (data: TaskType) => {
    createTasks(data)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        Añadir Nueva Tarea
      </h2>
      <form onSubmit={handleSubmit(addTask)} className="flex flex-col gap-4">
        <input
          {...register("titleTask", { required: true })}
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Título de la tarea"
        />
        <textarea
          {...register("descriptionTask", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Descripción de la tarea"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Agregar Tarea
        </button>
      </form>



    </div>
  );
}
