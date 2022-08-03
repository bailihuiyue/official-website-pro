import baseService from "@/services/axios";

export const getOfflineStore = lang => {
  const api = `offlineStore/detail?lang=${lang}`;
  return baseService.get(api);
};

export const modifyOfflineStore = (lang, data) => {
  const api = `offlineStore/modify?lang=${lang}`;
  return baseService.post(api, data);
};