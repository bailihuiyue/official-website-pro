import baseService from "@/services/axios";

export const getMenu = () => {
  const api = "menu/getAll";
  return baseService.get(api);
};

export const updateMenu = (menu) => {
  const api = `menu/update`;
  return baseService.post(api, { menu });
};