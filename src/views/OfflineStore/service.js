import baseService from "@/services/axios";

export const getOfflineStore = lang => {
  const api = `offlineStore/detail?lang=${lang}`;
  return baseService.get(api);
};