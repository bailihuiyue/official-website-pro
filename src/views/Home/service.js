import baseService from "@/services/axios";

export const getCarousel = lang => {
  const api = `carousel/getAll?lang=${lang}`;
  return baseService.get(api);
};