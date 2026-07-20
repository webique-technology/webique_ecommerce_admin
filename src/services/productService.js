import API from "../api/axios";

const BASE_URL = "/admin/product";

/*
|--------------------------------------------------------------------------
| Product Listing
|--------------------------------------------------------------------------
*/

export const getProducts = (params = {}) => {
    return API.get(`${BASE_URL}/list`, {
        params,
    });
};

/*
|--------------------------------------------------------------------------
| Product Details
|--------------------------------------------------------------------------
*/

export const getProduct = (id) => {
    return API.get(`${BASE_URL}/show/${id}`);
};

/*
|--------------------------------------------------------------------------
| Create Product (Step 1)
|--------------------------------------------------------------------------
*/

export const createProduct = (data) => {
    return API.post(`${BASE_URL}/store`, data);
};

/*
|--------------------------------------------------------------------------
| Step 2 - Category Attributes
|--------------------------------------------------------------------------
*/

export const saveCategoryAttributes = (data) => {
    return API.post(`${BASE_URL}/save-category`, data);
};

/*
|--------------------------------------------------------------------------
| Step 3 - Simple Product
|--------------------------------------------------------------------------
*/

export const saveSimpleProduct = (data) => {
    return API.post(`${BASE_URL}/save-simple-product`, data);
};

/*
|--------------------------------------------------------------------------
| Step 3 - Variable Product
|--------------------------------------------------------------------------
*/

// export const saveVariableProduct = (data) => {
//     return API.post(`${BASE_URL}/save-variable-product`, data);
// };
export const saveVariableProduct = (data) => {
    return API.post(
        `${BASE_URL}/save-variable-product`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
};

/*
|--------------------------------------------------------------------------
| Step 4 - Publish
|--------------------------------------------------------------------------
*/

export const publishProduct = (data) => {
    return API.post(`${BASE_URL}/publish`, data);
};

/*
|--------------------------------------------------------------------------
| Update - Basic
|--------------------------------------------------------------------------
*/

export const updateBasicProduct = (id, data) => {
    return API.post(`${BASE_URL}/update-basic/${id}`, data);
};

/*
|--------------------------------------------------------------------------
| Update - Category Attributes
|--------------------------------------------------------------------------
*/

export const updateCategoryAttributes = (id, data) => {
    return API.post(`${BASE_URL}/update-category/${id}`, data);
};

/*
|--------------------------------------------------------------------------
| Update - Simple Product
|--------------------------------------------------------------------------
*/

export const updateSimpleProduct = (id, data) => {
    return API.post(`${BASE_URL}/update-simple-product/${id}`, data);
};

/*
|--------------------------------------------------------------------------
| Update - Variable Product
|--------------------------------------------------------------------------
*/

export const updateVariableProduct = (id, data) => {
    return API.post(`${BASE_URL}/update-variable-product/${id}`, data);
};

/*
|--------------------------------------------------------------------------
| Update - Publish
|--------------------------------------------------------------------------
*/

export const updatePublishProduct = (id, data) => {
    return API.post(`${BASE_URL}/update-publish/${id}`, data);
};

/*
|--------------------------------------------------------------------------
| Delete
|--------------------------------------------------------------------------
*/

export const deleteProduct = (id) => {
    return API.delete(`${BASE_URL}/delete/${id}`);
};

/*
|--------------------------------------------------------------------------
| Change Status
|--------------------------------------------------------------------------
*/

export const changeProductStatus = (id) => {
    return API.patch(`${BASE_URL}/change-status/${id}`);
};
export const getCategoryTree = () => {
    return API.get("/admin/tree");
};
export const getAttributes = (categoryId, params = {}) => {
    return API.get(`/admin/attribute/list/${categoryId}`, {
        params,
    });
};