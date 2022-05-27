import baseService from "@/services/axios";

const adminLang = window.localStorage.getItem('adminLang') || 'cn'

export const getCarousel = () => {
  const api = `carousel/getAll?lang=${adminLang}`;
  return baseService.get(api);
};
export const addCarousel = (formData) => {
  const api = `carousel/add?lang=${adminLang}`;
  return baseService.post(api, { ...formData });
};
export const modifyCarousel = (formData) => {
  const api = `carousel/modify?lang=${adminLang}`;
  return baseService.post(api, { ...formData });
};
export const deleteCarousel = (id) => {
  const api = `carousel/delete?id=${id}&lang=${adminLang}`;
  return baseService.get(api);
};