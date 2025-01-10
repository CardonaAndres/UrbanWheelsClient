import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LoadingSpinner } from "../common/LoadingSpinner";
import Cookies from "js-cookie"

export const ProtectedRoute = () => {

  const { loading} = useAuth();
  const token = Cookies.get('token');

  if(loading) return <LoadingSpinner />
  if (!token) return <Navigate to="/login" replace />

  return (
    <>
    <Outlet />
    </>
  )

};
