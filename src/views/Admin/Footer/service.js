import baseService from "@/services/axios";

export const getFooter = (lang) => {
  const api = `footer/get?lang=${lang}`;
  return baseService.get(api);
};

export const setFooter =(lang,data) => {
  const api = `footer/set?lang=${lang}`;
  return baseService.post(api, { ...data });
};

