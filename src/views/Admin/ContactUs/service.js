import baseService from "@/services/axios";

export const getQuestionList = ({ lang, type }) => {
  const api = `question/list?type=${type}`;
  return baseService.get(api);
};

export const getQuestionDetail = (id) => {
  const api = `question/detail?id=${id}`;
  return baseService.get(api);
};

export const deleteQuestionDetail = (lang, id) => {
  const api = `question/delete?lang=${lang}&id=${id}`;
  return baseService.get(api);
};
