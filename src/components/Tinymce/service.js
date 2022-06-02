import baseService from "@/services/axios";

export const uploadImg = file => {
  const api = `api/upload/uploadImage`
  return baseService.post(api, file)
}