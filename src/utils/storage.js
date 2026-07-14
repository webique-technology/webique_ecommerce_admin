const TOKEN_KEY = "token";
const USER_KEY = "user";
const LOGIN_TYPE_KEY = "login_type";

// Token
export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

// User
export const setUser = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
    localStorage.removeItem(USER_KEY);
};

// Login Type
export const setLoginType = (type) => {
    localStorage.setItem(LOGIN_TYPE_KEY, type);
};

export const getLoginType = () => {
    return localStorage.getItem(LOGIN_TYPE_KEY);
};

export const removeLoginType = () => {
    localStorage.removeItem(LOGIN_TYPE_KEY);
};

// Clear All
export const clearStorage = () => {
    removeToken();
    removeUser();
    // removeLoginType();
};