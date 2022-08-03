import baseService from "@/services/axios";

export const getCompanyHonorList = (lang) => {
  const api = `companyHonor/getAll?lang=${lang}`;
  return baseService.get(api);
};