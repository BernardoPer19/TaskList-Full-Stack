import { loginRequest, registerRequest } from "../api/Auth";
import { UserLoginType, UserType } from "../types/UserType";

export const signupService = async (user: UserType): Promise<UserType> => {
  try {
    const result = await registerRequest(user);
    return result.data; 
  } catch (error) {
    console.error("Error en el registro:", error);
    throw new Error("Error en el registro de datos");
  }
};

export const siginService = async (user: UserLoginType): Promise<UserType> => {
  try {
    const result = await loginRequest(user);
    return result.data; 
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    throw new Error("Error en el inicio de sesión de datos");
  }
};
