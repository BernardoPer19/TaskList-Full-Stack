import { Router } from "express";

// import { protect } from "../Middleware/Auth.middleware.js";
import { registerUser } from "../Controllers/Auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/register", registerUser);

// router.post('/login', loginUser);
// router.get('/profile', protect, getUserProfile);

export default AuthRouter;
