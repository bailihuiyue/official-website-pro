import baseService from "@/services/axios";

export const getConfigGuideList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `configGuide/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type, searchTxt });
};

export const getConfigGuideDetail = (lang, id) => {
  const api = `configGuide/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};

export const addConfigGuideDetail = (lang, data) => {
  const api = `configGuide/add?lang=${lang}`;
  return baseService.post(api,data);
};

export const modifyConfigGuideDetail = (lang, data) => {
  const api = `configGuide/modify?lang=${lang}`;
  return baseService.post(api,data);
};

export const deleteConfigGuideDetail = (lang, id) => {
  const api = `configGuide/delete?lang=${lang}&id=${id}`;
  return baseService.get(api);
};