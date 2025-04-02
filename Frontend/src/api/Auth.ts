import axios from "axios";
import { UserLoginType, UserType } from "../types/UserType";

const API = "http://localhost:3000";

export const registerRequest = (user: UserType) =>
  axios.post(`${API}/register`, user, { withCredentials: true });

export const loginRequest = (user: UserLoginType) =>
  axios.post(`${API}/login`, user, { withCredentials: true });

export const verifyTokenRequest = () =>
  axios.get(`${API}/verify`, { withCredentials: true });
