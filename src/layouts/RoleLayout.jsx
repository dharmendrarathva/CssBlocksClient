import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";

const RoleLayout = () => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;

  }

  console.log("Auth:", isAuthenticated, "Role:", role);


  return role === "ADMIN" ? <AdminLayout /> : <UserLayout />;
};

export default RoleLayout;





