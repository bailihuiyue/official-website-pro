import baseService from "@/services/axios";

export const getLogo = () => {
  const api = "logo/get";
  return baseService.get(api);
};