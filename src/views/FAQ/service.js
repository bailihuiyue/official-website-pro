import baseService from "@/services/axios";

export const getFAQList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `faq/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type, searchTxt });
};

export const getFAQDetail = (lang, id) => {
  const api = `faq/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};
