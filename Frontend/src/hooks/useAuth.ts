import { useState, useEffect } from "react";
import { UserLoginType, UserType } from "../types/UserType";
import { siginService, signupService } from "../services/AuthServices";
import { createData } from "../util/data";
import { verifyTokenRequest } from "../api/Auth";

export const useAuth = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const handleError = (error: any) => {
    if (error?.response) {
      console.error("Error en la solicitud:", error);
      setErrors(error.response.data?.message || "Un error desconocido ocurrió");
    } else {
      console.error("Error desconocido:", error);
      setErrors("Un error desconocido ocurrió");
    }
  };

  const signup = async (user: UserType) => {
    const userData = { ...user, createAcc: createData() };
    try {
      const response = await signupService(userData);
      if (response) {
        setUser(response);
        setIsAuthenticated(true);
      }
    } catch (error: any) {
      handleError(error);
    }
  };

  const sigin = async (user: UserLoginType) => {
    try {
      const res = await siginService(user);
      if (res) {
        setUser(res);
        setIsAuthenticated(true);
        console.log(res);
      }
    } catch (error: unknown) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await verifyTokenRequest();
        console.log("Respuesta de verificación del token:", res);

        if (!res.data) {
          console.log("Respuesta sin datos");
          setIsAuthenticated(false);
        } else {
          console.log("Token verificado con éxito");
          setIsAuthenticated(true);
          setUser(res.data);
        }
      } catch (error) {
        console.error("Error verificando el token:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);
  return {
    sigin,
    signup,
    errors,
    setErrors,
    user,
    setUser,
    isAuthenticated,
    loading,
  };
};
