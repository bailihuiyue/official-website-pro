import baseService from "@/services/axios";

export const getRecruitmentList = (lang) => {
  const api = `recruitment/getAll?lang=${lang}`;
  return baseService.get(api);
};

export const modifyRecruitment = (lang, data) => {
  const api = `recruitment/modify?lang=${lang}`;
  return baseService.post(api, data);
};