import baseService from "@/services/axios";

export const getProduct = txt => {
  const api = `product/search?prod=${txt}`;
  return baseService.get(api);
};