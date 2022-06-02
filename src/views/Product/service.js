import baseService from "@/services/axios";

export const getProduct = txt => {
  const api = `product/search?prod=${txt}`;
  return baseService.get(api);
};

export const getProductList = (lang, currentPage, pageSize, type) => {
  const api = `product/list?lang=${lang}&currentPage=${currentPage}&pageSize=${pageSize}&type=${type||''}`;
  return baseService.get(api);
};


export const getProductType = (lang, txt) => {
  const api = `product/type/getAll`;
  return baseService.get(api);
};