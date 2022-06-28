import baseService from "@/services/axios";

export const getRecruitment = (typeNo, lang) => {
  const api = `recruitment/getAll?lang=${lang}&type=${typeNo}`;
  return baseService.get(api);
};