import jwt from "jsonwebtoken";
import { JWT_PASSWORD_SECRET } from "../config.js";

export const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    
    if (!token) {
      return res
      .status(401)
      .json({ message: "No autorizado. No se encontró el token." });
    }
    
    const decoded = jwt.verify(token, JWT_PASSWORD_SECRET);
    // console.log("Decoded JWT:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
};
