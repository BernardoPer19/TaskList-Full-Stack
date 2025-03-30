import { Router } from "express";
import {
  loginUser,
  logout,
  protectedRoute,
  registerUser,
} from "../controllers/Auth.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const AuthRouter = Router();

AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", loginUser);
AuthRouter.post("/logout", logout);
AuthRouter.get("/profile", authenticate, protectedRoute);

export default AuthRouter;
