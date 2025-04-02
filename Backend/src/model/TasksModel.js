import pool from "../db/db.js";

export class TasksModel {
  static async getAllTasks(id) {
    try {
      const query = `SELECT * FROM tasks_tb WHERE user_id = $1`;
      const data = [id];
      const { rows } = await pool.query(query, data);
      return rows;
    } catch (error) {
      console.error(error.message);
      throw new Error("Error al ver los datos en la DB");
    }
  }

  static async AddTasks(user_id, titleTask, descriptionTask, isComplete) {
    try {
      const query = `INSERT INTO tasks_tb(
        user_id, "titleTask", "descriptionTask", "isComplete")
        VALUES ($1, $2, $3, $4) RETURNING *`;

      const data = [user_id, titleTask, descriptionTask, isComplete];
      const { rows } = await pool.query(query, data);

      return rows[0];
    } catch (error) {
      console.error(error.message);
      throw new Error("Error al crear los datos en la DB");
    }
  }

    static async RemoveTasks(user_id, tasks_id) {
      try {
        console.log("Eliminando tarea con task_id:", tasks_id, "y user_id:", user_id);  
        const query = `DELETE FROM tasks_tb WHERE task_id = $1 AND user_id = $2`;
        const data = [tasks_id, user_id];
        
        const result = await pool.query(query, data);
        return result.rowCount;  
      } catch (error) {
        console.error("Error al eliminar tarea:", error.message);
        throw new Error("Error al eliminar los datos en la DB");
      }
    } 
  // tasksModel.js

  static async UpdateTask(
    user_id,
    task_id,
    titleTask,
    descriptionTask,
    isComplete
  ) {
    try {
      const query = `
      UPDATE tasks_tb 
      SET "titleTask" = $1, "descriptionTask" = $2, "isComplete" = $3
      WHERE task_id = $4 AND user_id = $5
      RETURNING *;
    `;
      const data = [titleTask, descriptionTask, isComplete, task_id, user_id];
      const { rows } = await pool.query(query, data);

      // Si no se encontró la tarea, no actualizamos nada
      if (rows.length === 0) {
        return null;
      }

      return rows[0];
    } catch (error) {
      console.error(error.message);
      throw new Error("Error al actualizar la tarea en la base de datos");
    }
  }
}
