import baseService from "@/services/axios";

const adminLang = window.localStorage.getItem('adminLang') || 'cn'

export const getCompanyHonorList = (lang) => {
  const api = `companyHonor/getAll?lang=${lang}`;
  return baseService.get(api);
};
export const addCompanyHonor = (formData) => {
  const api = `companyHonor/add?lang=${adminLang}`;
  return baseService.post(api, { ...formData });
};
export const modifyCompanyHonor = (formData) => {
  const api = `companyHonor/modify?lang=${adminLang}`;
  return baseService.post(api, { ...formData });
};
export const deleteCompanyHonor = (id, type) => {
  const api = `companyHonor/delete?id=${id}&lang=${adminLang}&type=${type}`;
  return baseService.get(api);
};