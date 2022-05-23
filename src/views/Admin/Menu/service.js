import baseService from "@/services/axios";

export const getMenu = () => {
  const api = "menu/getAll";
  return baseService.get(api);
};

export const setMenu = (menu) => {
  const api = `menu/set`;
  return baseService.post(api, { menu });
};