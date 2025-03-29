import { Router } from "express";
import { registerUser } from "../controllers/Auth.controller.js";



const AuthRouter = Router();

AuthRouter.post("/register", registerUser);

// router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);

export default AuthRouter;
