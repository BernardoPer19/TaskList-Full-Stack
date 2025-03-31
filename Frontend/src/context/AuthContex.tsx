import { createContext, useContext, useEffect, useState } from "react";
import { UserLoginType, UserType } from "../types/UserType";
import { registerRequest, loginRequest } from "../api/Auth";

interface AuthContextType {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  signup: (data: UserType) => Promise<void>;
  sigin: (user: UserLoginType) => Promise<void>;
  isAuthenticated: boolean;
  errors: string;
}

interface ChildrenType {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: ChildrenType) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string>("");

  const signup = async (user: UserType) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("es-ES");
    const userData = { ...user, createAcc: formattedDate };
    try {
      const response = await registerRequest(userData);
      setUser(response.data);
      setisAuthenticated(true);
    } catch (error: any) {
      if (error.response) {
        console.error("Error en el registro:", error);
        setErrors(
          error.response.data?.message || "Un error desconocido ocurrió"
        );
      } else {
        console.error("Error desconocido:", error);
        setErrors("Un error desconocido ocurrió");
      }
    }
  };

  const sigin = async (user: UserLoginType) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (error: unknown) {
      if (error.response) {
        console.error("Error en el registro:", error);
        setErrors(
          error.response.data?.message || "Un error desconocido ocurrió"
        );
      } else {
        console.error("Error desconocido:", error);
        setErrors("Un error desconocido ocurrió");
      }
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer =  setTimeout(() => {
        setErrors("");
      }, 2000);
      return clearTimeout(timer)
    }
  }, [errors]);

  const value = { user, setUser, signup, errors, isAuthenticated, sigin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para usar el contexto
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
