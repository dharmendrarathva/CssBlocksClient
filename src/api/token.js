let accessToken = null;

export const setToken = (token) => {
  accessToken = token;
  sessionStorage.setItem("accessToken", token);
};

export const getToken = () => {
  if (!accessToken) {
    accessToken = sessionStorage.getItem("accessToken");
  }
  return accessToken;
};

export const clearToken = () => {
  accessToken = null;
  sessionStorage.removeItem("accessToken");
};
