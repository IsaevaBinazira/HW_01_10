import axios from "axios";
const createAxios = () => axios.create({
    baseURL: 'https://edu-market.online/api/v1',
  })

  const $mainApi = createAxios();

  export { $mainApi };