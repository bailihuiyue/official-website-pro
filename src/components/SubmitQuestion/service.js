import baseService from "@/services/axios";

export const addQuestion = (lang, type, data) => {
  const api = `question/add?lang=${lang}&type=${type}`;
  return baseService.post(api, data);
};