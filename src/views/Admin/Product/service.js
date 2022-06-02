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

export const getProductList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `product/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type || '', searchTxt });
};

export const getProductDetail = (lang, id) => {
  const api = `product/detail/getAll?lang=${lang}&id=${id}`;
  return baseService.get(api);
};