import baseService from "@/services/axios";

export const getBottomImgs = lang => {
  const api = `bottomImg/getAll?lang=${lang}`;
  return baseService.get(api);
};

export const updateBottomImgs = (lang, data) => {
  const api = `bottomImg/modify?lang=${lang}`;
  return baseService.post(api, { data });
};