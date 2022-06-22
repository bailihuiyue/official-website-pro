import baseService from "@/services/axios";

export const getFooter = () => {
  const api = `footer/get`;
  return baseService.get(api);
};