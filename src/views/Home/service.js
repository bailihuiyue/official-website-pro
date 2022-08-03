import baseService from "@/services/axios";

export const getCarousel = lang => {
  const api = `carousel/getAll?lang=${lang}`;
  return baseService.get(api);
};

export const getProductImgs = lang => {
  const api = `ProductImgs/getAll?lang=${lang}`;
  return baseService.get(api);
};

export const getBottomImgs = lang => {
  const api = `bottomImg/getAll?lang=${lang}`;
  return baseService.get(api);
};

export const getVideoBackground = lang => {
  const api = `videoBackground/getAll?lang=${lang}`;
  return baseService.get(api);
};