import baseService from "@/services/axios";

export const getDriverList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `driver/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type, searchTxt });
};