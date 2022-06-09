import baseService from "@/services/axios";

export const getCompanyStateList = ({ lang, currentPage, pageSize, type }) => {
  const api = `companyState/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type });
};

export const getCompanyStateDetail = (lang, id) => {
  const api = `companyState/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};

export const addCompanyStateDetail = (lang, data, type) => {
  const api = `companyState/add?lang=${lang}`;
  return baseService.post(api, { ...data, type });
};

export const modifyCompanyStateDetail = (lang, data) => {
  const api = `companyState/modify?lang=${lang}`;
  return baseService.post(api, data);
};

export const deleteCompanyStateDetail = (lang, id) => {
  const api = `companyState/delete?lang=${lang}&id=${id}`;
  return baseService.get(api);
};