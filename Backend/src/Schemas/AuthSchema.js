import { z } from "zod";

// Schema for user registration
const registerSchema = z.object({
  user_name: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const validateRegister = (data) => {
  return registerSchema.safeParse(data);
};

const validateLogin = (data) => {
  return loginSchema.safeParse(data);
};

export default {
  validateRegister,
  validateLogin,
};
