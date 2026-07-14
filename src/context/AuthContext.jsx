import { createContext, useEffect, useState } from "react";

import {
    loginUser,
    logoutUser,
} from "../services/authService";

import {
    getToken,
    getUser,
    getLoginType,
    setToken,
    setUser,
    setLoginType,
    clearStorage,
} from "../utils/storage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [token, setAuthToken] = useState(null);
    const [user, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setAuthToken(getToken());
        setAuthUser(getUser());

        setLoading(false);

    }, []);

    const login = async (loginType, credentials) => {

        const response = await loginUser(loginType, credentials);

        const token = response.data.data.token;
        const user = response.data.data.user;

        setToken(token);
        setUser(user);
        setLoginType(loginType);

        setAuthToken(token);
        setAuthUser(user);

        return response;
    };

    const logout = async (loginType) => {
        try {
            await logoutUser(loginType);
        } catch (error) {
            console.log(error);
        }

        clearStorage();

        setAuthToken(null);
        setAuthUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                loading,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContext;