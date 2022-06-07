import baseService from "@/services/axios";

export const getFAQList = ({ lang, currentPage, pageSize, type, searchTxt }) => {
  const api = `faq/list?lang=${lang}`;
  return baseService.post(api, { currentPage, pageSize, type: type === '' ? '' : type, searchTxt });
};

export const getFAQDetail = (lang, id) => {
  const api = `faq/detail?lang=${lang}&id=${id}`;
  return baseService.get(api);
};

export const addFAQDetail = (lang, data, type) => {
  const api = `faq/add?lang=${lang}`;
  return baseService.post(api, { ...data, type });
};

export const modifyFAQDetail = (lang, data) => {
  const api = `faq/modify?lang=${lang}`;
  return baseService.post(api, data);
};

export const deleteFAQDetail = (lang, id) => {
  const api = `faq/delete?lang=${lang}&id=${id}`;
  return baseService.get(api);
};


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
