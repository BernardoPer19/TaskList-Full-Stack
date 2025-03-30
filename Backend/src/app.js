import { default as AuthRouter } from "./Routes/Auth.routes.js";
import cookiePaser from "cookie-parser";
import morgan from 'morgan'
import express from 'express'
const PORT = 3000;

const app = express()

// Middleware
app.use(express.json());
app.use(cookiePaser());
app.use(morgan("dev"));

app.use("/", AuthRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
