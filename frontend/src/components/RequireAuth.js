import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export const RequireAuth = ({children}) => {

    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to='/login' />
    }

    return children
}