import baseService from "@/services/axios";

const adminLang = window.localStorage.getItem('adminLang') || 'cn'

export const getProductImgs = () => {
  const api = `ProductImgs/getAll?lang=${adminLang}`;
  return baseService.get(api);
};
export const addProductImgs = (formData) => {
  const api = `ProductImgs/add?lang=${adminLang}`;
  return baseService.post(api, { ...formData });
};
export const modifyProductImgs = (formData) => {
  const api = `productImgs/modify?lang=${adminLang}`;
  return baseService.post(api, { ...formData });
};
export const deleteProductImgs = (id) => {
  const api = `ProductImgs/delete?id=${id}&lang=${adminLang}`;
  return baseService.get(api);
};