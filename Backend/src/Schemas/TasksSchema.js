import { z } from "zod";

// Esquema para validar una tarea
const taskSchema = z.object({
  titleTask: z
    .string()
    .min(3, "El título debe tener al menos 3 caracteres")
    .max(100, "El título es muy largo")
    .trim(), // Eliminar espacios al inicio y final
  descriptionTask: z
    .string()
    .max(500, "La descripción es demasiado larga")
    .optional()
    .nullable(), 
  isComplete: z.boolean().default(false), 
});

// Función para validar los datos de la tarea
export const validateTask = (data) => {
  const result = taskSchema.safeParse(data);

  if (!result.success) {
    return { valid: false, errors: result.error.format() };
  }
  return { valid: true, data: result.data };
};
