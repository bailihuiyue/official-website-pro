import baseService from "@/services/axios";

export const getLogo = () => {
  const api = "logo/get";
  return baseService.get(api);
};

export const updateLogo = (data) => {
  const api = "logo/modify";
  return baseService.post(api, data);
};