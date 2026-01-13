import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: { "Content-Type": "application/json" },
  timeout: 10000
});

/* Attach JWT */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* Normalize errors */
api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const msg =
      err.response?.data?.message ||
      err.response?.data ||
      err.message ||
      "Request failed";
    return Promise.reject(new Error(msg));
  }
);

/* ========== AUTH ========== */
export const authApi = {
  login: (email, password) => api.post("/auth/login", { email, password }),
  register: (data) => api.post("/auth/register", data),
  verify: (data) => api.post("/auth/verify", data)
};

/* ========== USER ========== */
export const userApi = {
  hello: () => api.get("/user/hello")
};

/* ========== ADMIN ========== */
export const adminApi = {
  hello: () => api.get("/admin/hello")
};

/* ========== PRODUCTS ========== */
export const productApi = {
  create: (data) => api.post("/products", data),
  getAll: () => api.get("/products"),
  getById: (id) => api.get(`/products/${id}`),
  update: (id, data) => api.put(`/products/${id}`, data),
  remove: (id) => api.delete(`/products/${id}`)
};

/* ========== EMAIL ========== */
export const emailApi = {
  send: (data) => api.post("/email/send", data)
};
