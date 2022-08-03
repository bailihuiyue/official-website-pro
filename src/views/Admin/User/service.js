import baseService from "@/services/axios";

export const getUserAll = () => {
  const api = `user/getUserAll`;
  return baseService.get(api);
};
export const createUser = (formData) => {
  const api = `user/createUser`;
  return baseService.post(api, { ...formData });
};
export const modifiedUser = (formData) => {
  const api = `user/modifiedUser`;
  return baseService.post(api, { ...formData });
};
export const deleteUser = (id) => {
  const api = `user/deleteUser?id=${id}`;
  return baseService.get(api);
};