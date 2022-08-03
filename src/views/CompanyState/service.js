import baseService from "@/services/axios";

export const getCompanyStateList = ({ lang, currentPage, pageSize, type }) => {
  const api = `companyState/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type });
};

export const getCompanyStateDetail = (lang, id) => {
  const api = `companyState/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};
