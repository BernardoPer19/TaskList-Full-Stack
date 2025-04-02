import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuthContext();
  
  if (loading) {
    return <h1>Cargando...</h1>
  }


  if (!loading && !isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
