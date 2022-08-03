// export const baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:9999/"
//     : "http://shkjgw.shkjem.com/api/";
export const baseURL = window.baseURL;
// export const baseURL = "http://localhost:8081/";
// export const imgServer = "http://localhost:8081/";
// export const imgServer = "http://shkjgw.shkjem.com/";
export const imgServer = window.imgServer;
export const videoURL = window.videoURL;

export const getLang = () => window.localStorage.getItem('lang') || 'cn'
export const getAdminLang = () => window.localStorage.getItem('adminLang') || 'cn'
export const getToken = () => window.sessionStorage.getItem("token")

export const createFormData = (formDatas, file) => {
  const formData = new FormData()
  if (file.length) {
    file.map(item => {
      formData.append('file', item)
    })
  } else {
    formData.append('file', file)
  }
  for (const item in formDatas) {
    formData.append(item, formDatas[item] || '')
  }
  return formData
}