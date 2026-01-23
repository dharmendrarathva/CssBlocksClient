import api from "./axios";

export const adminHello = () => api.get("/admin/hello");
export const userHello = () => api.get("/user/hello");




