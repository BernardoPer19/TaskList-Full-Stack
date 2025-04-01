import axios from "axios";
import { UserLoginType, UserType } from "../types/UserType";

const API = "http://localhost:3000";

export const registerRequest = (user: UserType) =>
  axios.post(`${API}/register`, user);

export const loginRequest = (user:UserLoginType) => axios.post(`${API}/login`, user)

export const verifyTokenRequest = (token: string) => 
  axios.get(`${API}/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,  // Enviamos el token como Bearer en la cabecera
    },
    withCredentials: true,
  });