import baseService from "@/services/axios";

export const getProduct = txt => {
  const api = `product/search?prod=${txt}`;
  return baseService.get(api);
};

export const getProductList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `product/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type || '', searchTxt });
};


export const getProductType = () => {
  const api = `product/type/getAll`;
  return baseService.get(api);
};


export const getProductDetail = (lang, id) => {
  const api = `product/getAll?lang=${lang}&id=${id}`;
  return baseService.get(api);
};