import { default as AuthRouter } from "./Routes/Auth.routes.js";
import cookiePaser from "cookie-parser";
import morgan from 'morgan'
import express from 'express'
import { TaskRouter } from "./Routes/Tasks.routes.js";
import cors from 'cors'
const PORT = 3000;

const app = express()

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,  
}));
app.use(express.json());
app.use(cookiePaser());
app.use(morgan("dev"));

app.use("/", AuthRouter);
app.use("/" , TaskRouter)
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
