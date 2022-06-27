import baseService from "@/services/axios";

export const getFooter = (lang) => {
  const api = `footer/get?lang=${lang}`;
  return baseService.get(api);
};