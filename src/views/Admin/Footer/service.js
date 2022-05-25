import baseService from "@/services/axios";

export const getFooter = () => {
  const api = "footer/get";
  return baseService.get(api);
};

export const setFooter = data => {
  const api = "footer/set";
  return baseService.post(api, { ...data });
};

