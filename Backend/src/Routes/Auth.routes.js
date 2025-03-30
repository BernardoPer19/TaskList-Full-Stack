import { Router } from "express";
import { loginUser, registerUser } from "../controllers/Auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", loginUser);


// AuthRouter.get('/profile', protect, getUserProfile);

export default AuthRouter;
