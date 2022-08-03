import baseService from "@/services/axios";

export const getAppDownloadList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `appDownload/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type, searchTxt });
};

export const getAppDownloadDetail = (lang, id) => {
  const api = `appDownload/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};