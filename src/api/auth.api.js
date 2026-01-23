import api from "./axios";
import { setToken } from "./token";

export const registerUser = (data) => {
  return api.post("/auth/register", {
    email: data.email,
    password: data.password,
    role: data.role,
  });
};

export const verifyUser = (data) => {
  return api.post("/auth/verify", {
    email: data.email,
    code: data.code,
  });
};  

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", {
    email: data.email,
    password: data.password,
  });

  setToken(res.data.token); 
  return res.data;
};




