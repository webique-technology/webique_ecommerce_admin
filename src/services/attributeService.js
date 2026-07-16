import API from "../api/axios";

const BASE_URL = "/admin/attribute";

// List
export const getAttributes = (categoryId, params = {}) => {
    return API.get(`${BASE_URL}/list/${categoryId}`, {
        params,
    });
};

// Show
export const getAttribute = (id) => {
    return API.get(`${BASE_URL}/show/${id}`);
};

// Store
export const createAttribute = (data) => {
    return API.post(`${BASE_URL}/store`, data);
};

// Update
export const updateAttribute = (id, data) => {
    return API.post(`${BASE_URL}/update/${id}`, data);
};

// Delete
export const deleteAttribute = (id) => {
    return API.delete(`${BASE_URL}/delete/${id}`);
};

// Status
export const changeAttributeStatus = (id) => {
    return API.patch(`${BASE_URL}/change-status/${id}`);
};