import baseService from "@/services/axios";

export const getAppDownloadList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `appDownload/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type, searchTxt });
};

export const getAppDownloadDetail = (lang, id) => {
  const api = `appDownload/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};

export const addAppDownloadDetail = (lang, data) => {
  const api = `appDownload/add?lang=${lang}`;
  return baseService.post(api,data);
};

export const modifyAppDownloadDetail = (lang, data) => {
  const api = `appDownload/modify?lang=${lang}`;
  return baseService.post(api,data);
};

export const deleteAppDownloadDetail = (lang, id) => {
  const api = `appDownload/delete?lang=${lang}&id=${id}`;
  return baseService.get(api);
};