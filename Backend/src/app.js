import express, { json } from 'express';
import { default as AuthRouter } from './Routes/Auth.routes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(json());
app.use(json())

app.use("/", AuthRouter)
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});