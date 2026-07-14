import API from "../api/axios";
import { AUTH } from "../config/auth";

export const loginUser = (loginType, data) => {
    return API.post(AUTH.API[loginType].login, data);
};

export const logoutUser = (loginType) => {
    return API.post(AUTH.API[loginType].logout);
};

export const getProfile = (loginType) => {
    return API.get(AUTH.API[loginType].profile);
};