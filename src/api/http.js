import axios from "axios";
const createAxios = () => axios.create({
    baseURL: 'https://edu-market.online/api/v1',
  })

  const $mainApi = createAxios();
  const $authApi = createAxios();

  $authApi.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },  
);

  export { $mainApi, $authApi };
