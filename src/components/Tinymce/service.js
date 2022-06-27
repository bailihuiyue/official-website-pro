import baseService from "@/services/axios";

export const uploadImg = file => {
  const api = `api/upload/uploadImage`
  return baseService.post(api, file)
}

export const uploadFile = file => {
  const api = `api/upload/uploadfile`
  return baseService.post(api, file)
}