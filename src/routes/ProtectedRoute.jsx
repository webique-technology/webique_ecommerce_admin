import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AUTH } from "../config/auth";
import { getLoginType } from "../utils/storage";

export default function ProtectedRoute() {
    const { loading, isAuthenticated } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (isAuthenticated) {
        return <Outlet />;
    }

    const loginType = getLoginType();

    if (loginType === AUTH.STORE_ADMIN) {
        return (
            <Navigate
                to={AUTH.ROUTES.STORE_ADMIN_LOGIN}
                replace
            />
        );
    }

    return (
        <Navigate
            to={AUTH.ROUTES.SUPER_ADMIN_LOGIN}
            replace
        />
    );
}