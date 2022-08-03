import baseService from "@/services/axios";

export const getBanner = () => {
  const api = "banner/get";
  return baseService.get(api);
};