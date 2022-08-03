import baseService from "@/services/axios";

export const getClassify = (type) => {
  const api = `classify/getAll?type=${type}`;
  return baseService.get(api);
};
export const addClassify = (formData) => {
  const api = `classify/add`;
  return baseService.post(api, { ...formData });
};
export const modifyClassify = (formData) => {
  const api = `classify/modify`;
  return baseService.post(api, { ...formData });
};
export const deleteClassify = (id) => {
  const api = `classify/delete?id=${id}`;
  return baseService.get(api);
};
