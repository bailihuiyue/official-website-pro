import baseService from "@/services/axios";

export const getVideoBackground = (lang) => {
  const api = `videoBackground/getAll?lang=${lang}`;
  return baseService.get(api);
};