import baseService from "@/services/axios";

export const getMenu = () => {
  const api = "menu/getAll";
  return baseService.get(api);
};

export const updateMenu = (menu) => {
  const api = `menu/modify`;
  return baseService.post(api, menu);
};

export const addMenu = (menu) => {
  const api = `menu/add`;
  return baseService.post(api, menu);
};

export const deleteMenu = (menu) => {
  const api = `menu/delete`;
  return baseService.post(api, menu);
};

export const getProductType = () => {
  const api = `product/type/getAll`;
  return baseService.get(api);
};