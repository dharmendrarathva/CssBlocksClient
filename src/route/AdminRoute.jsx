import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = () => {
  const { role } = useAuth();

  if (role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }
  
console.log("AdminRoute role:", role);

  return <Outlet />;
};

export default AdminRoute;
