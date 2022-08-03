import baseService from "@/services/axios";

const adminLang = window.localStorage.getItem('adminLang') || 'cn'

export const getVideoBackground = () => {
  const api = `videoBackground/getAll?lang=${adminLang}`;
  return baseService.get(api);
};
export const modifyVideoBackground = (formData) => {
  const api = `videoBackground/modify?lang=${adminLang}`;
  return baseService.post(api, { ...formData });
};