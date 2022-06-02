import baseService from "@/services/axios";

const adminLang = window.localStorage.getItem('adminLang') || 'cn'

export const getProductType = () => {
  const api = `product/type/getAll`;
  return baseService.get(api);
};
export const addProductType = (formData) => {
  const api = `productType/add`;
  return baseService.post(api, { ...formData });
};
export const modifyProductType = (formData) => {
  const api = `productType/modify`;
  return baseService.post(api, { ...formData });
};
export const deleteProductType = (id) => {
  const api = `productType/delete?id=${id}`;
  return baseService.get(api);
};