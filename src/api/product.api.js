import api from "./axios";

/**
 * CREATE PRODUCT
 * POST /api/products
 */
export const createProduct = (data) => {
  return api.post("/products", {
    name: data.name,
    code: data.code,
    htmlCode: data.htmlCode,
    cssCode: data.cssCode,
    jsCode: data.jsCode,
  });
};

/**
 * GET ALL PRODUCTS
 * GET /api/products
 */
export const getProducts = () => {
  return api.get("/products");
};

/**
 * GET PRODUCT BY ID
 * GET /api/products/{id}
 */
export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

/**
 * UPDATE PRODUCT
 * PUT /api/products/{id}
 */
export const updateProduct = (id, data) => {
  return api.put(`/products/${id}`, {
    name: data.name,
    code: data.code,
    htmlCode: data.htmlCode,
    cssCode: data.cssCode,
    jsCode: data.jsCode,
  });
};

/**
 * DELETE PRODUCT
 * DELETE /api/products/{id}
 */
export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
