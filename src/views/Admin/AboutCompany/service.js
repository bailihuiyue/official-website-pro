import baseService from "@/services/axios";

export const getAboutCompanyList = (lang) => {
  const api = `aboutCompany/getAll?lang=${lang}`;
  return baseService.get(api);
};

export const modifyAboutCompany = (lang, data) => {
  const api = `aboutCompany/modify?lang=${lang}`;
  return baseService.post(api, data);
};