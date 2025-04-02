import { createContext } from "react";
import { useAuth } from "../hooks/useAuth"; // Usamos el hook que ya tienes
import { UserLoginType, UserType } from "../types/UserType";

interface AuthContextType {
  user: UserType | null;
  signup: (data: UserType) => Promise<void>;
  sigin: (user: UserLoginType) => Promise<void>;
  isAuthenticated: boolean;
  errors: string;
  loading: boolean;
  logout: () => void;
}

interface ChildrenType {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: ChildrenType) {
  const { user, signup, sigin, errors, isAuthenticated, loading, logout } = useAuth();

  const value = {
    user,
    signup,
    sigin,
    errors,
    isAuthenticated,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
