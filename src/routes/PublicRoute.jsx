import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AUTH } from "../config/auth";

export default function PublicRoute() {

    const { loading, isAuthenticated } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated
        ? <Navigate to={AUTH.ROUTES.DASHBOARD} replace />
        : <Outlet />;
}