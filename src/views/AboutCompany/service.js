import baseService from "@/services/axios";

export const getAboutCompanyList = (lang) => {
  const api = `aboutCompany/all?lang=${lang}`;
  return baseService.get(api);
};