import baseService from "@/services/axios";

export const getRecruitmentList = (lang) => {
  const api = `recruitment/getAll?lang=${lang}`;
  return baseService.get(api);
};