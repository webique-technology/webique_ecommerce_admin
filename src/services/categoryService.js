import API from "../api/axios";

const BASE_URL = "/admin/category";

export const getCategories = (page = 1) => {
    return API.get(`${BASE_URL}/list?page=${page}`);
};

export const getCategory = (id) => {
    return API.get(`${BASE_URL}/show/${id}`);
};

export const createCategory = (data) => {
    return API.post(`${BASE_URL}/store`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateCategory = (id, data) => {
    return API.post(`${BASE_URL}/update/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteCategory = (id) => {
    return API.delete(`${BASE_URL}/delete/${id}`);
};

export const changeCategoryStatus = (id) => {
    return API.patch(`${BASE_URL}/change-status/${id}`);
};
export const getCategoryTree = () => {
    return API.get("/admin/tree");
};