import { useEffect, useState } from "react";;
import { Navigate, Outlet } from "react-router-dom";
import { errorAlert } from "../common/Alerts";
import { LoadingSpinner } from "../common/LoadingSpinner.jsx";
import { useAuth } from "../../context/AuthContext.jsx"; 

export const IsUserAllowed = ({ rolsAccepts }) => {
    const [isAllowed, setIsAllowed] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {

        if(user){
            const isRolAccept = rolsAccepts.includes(user.rol_ID)
            setIsAllowed(isRolAccept);
            setLoading(false);
        } 
             
    }, []);

   
    if (loading) return <LoadingSpinner />;

    if (!isAllowed) {
        errorAlert("Error: 403");
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
};
