import baseService from "@/services/axios";

export const getAboutCompanyList = (lang) => {
  const api = `aboutCompany/getAll?lang=${lang}`;
  return baseService.get(api);
};