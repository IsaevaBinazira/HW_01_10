import {useQuery} from "@tanstack/react-query";
import { $mainApi } from "./http.js";

const useProductStore = () => useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const {data} = await $mainApi.get('/products');
        return data?.data
    }
});

export default useProductStore;