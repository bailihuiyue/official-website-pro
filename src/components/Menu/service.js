import baseService from "@/services/axios";

export const getMenu = () => {
  const api = "menu/getAll";
  return baseService.get(api);
};