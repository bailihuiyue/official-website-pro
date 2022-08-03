import baseService from "@/services/axios";

export const getDriverList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `driver/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type, searchTxt });
};

export const getDriverDetail = (lang, id) => {
  const api = `driver/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};

export const addDriverDetail = (lang, data) => {
  const api = `driver/add?lang=${lang}`;
  return baseService.post(api,data);
};

export const modifyDriverDetail = (lang, data) => {
  const api = `driver/modify?lang=${lang}`;
  return baseService.post(api,data);
};

export const deleteDriverDetail = (lang, id) => {
  const api = `driver/delete?lang=${lang}&id=${id}`;
  return baseService.get(api);
};