// 真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发
import { User } from "./screens/project-list/search-panel";
const localStoragekey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStoragekey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStoragekey, user.token || "");
  return user;
};

export const login = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};

export const register = (data: { username: string; password: string }) => {
  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStoragekey);
