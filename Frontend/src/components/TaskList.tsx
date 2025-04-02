import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";

function TaskList() {
  const { getTasks, tasks, deleteTask } = useTasks();


  

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Mis Tareas
        </h1>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            
            <p className="text-center text-gray-600">No hay tareas aún.</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.titleTask + Date.now()}
                className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 flex flex-col gap-4"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {task.titleTask}
                  </h2>
                  <div className="flex space-x-2">
                    <button
                      // onClick={() => editTask(task)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Editar
                    </button>
                    <button
                    onClick={() => deleteTask(task.task_id)} 
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                  </div>
                </div>
                <p className="text-gray-600">{task.descriptionTask}</p>
                <p className={`text-gray-600 ${task.isComplete ? 'text-green-600' : 'text-red-600'}`}>
                  {task.isComplete ? "Completado" : "No completado"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
