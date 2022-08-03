import baseService from "@/services/axios";

export const getRecruitment = (typeNo, lang) => {
  const api = `recruitment/getAll?lang=${lang}&type=${typeNo}`;
  return baseService.get(api);
};

export const modifyRecruitment = (lang, data) => {
  const api = `recruitment/modify?lang=${lang}`;
  return baseService.post(api, data);
};