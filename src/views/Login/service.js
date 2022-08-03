import baseService from "@/services/axios";

export const userLogin = ({ loginName, password }) => {
  const api = `user/login`;
  return baseService.post(api, { loginName, password });
};