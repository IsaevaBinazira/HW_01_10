import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { $authApi } from "../api/http.js";

const useFavoritesStore = () =>
  useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      const { data } = await $authApi.get("/favorites");

      return data?.data?.products;
    },
  });

const useAddToFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      const { data } = await $authApi.post("/favorites", { productId });

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        alert("Пожалуйста, войдите в систему или зарегистрируйтесь");
      }
    },
  });
};

const useRemoveFromFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      const { data } = await $authApi.delete(`/favorites/${productId}`);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        alert("Пожалуйста, войдите в систему или зарегистрируйтесь");
      }
    },
  });
};

export { useAddToFavorite, useFavoritesStore, useRemoveFromFavorite };
