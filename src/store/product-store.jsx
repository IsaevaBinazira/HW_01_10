import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { $mainApi } from "../api/http.js";
import useAuth from "../hooks/use-auth.js";

const saveSession = (response) => {
  const token = response?.accessToken || response?.data?.accessToken;

  if (token) {
    localStorage.setItem("token", token);
  }
};

const getErrorMessage = (error) => {
  return error.response?.data?.message || "Попробуйте ещё раз через пару минут.";
};

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  const setAuth = useAuth((state) => state.setAuth);

  return useMutation({
    mutationFn: async (payload) => {
      const response = await $mainApi.post("/auth/sign-up", payload);

      return response.data;
    },
    onSuccess: (response) => {
      saveSession(response);
      setAuth(true);
      toast.success("Регистрация прошла успешно!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(`Не удалось зарегистрироваться. ${getErrorMessage(error)}`);
    },
  });
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setAuth = useAuth((state) => state.setAuth);

  return useMutation({
    mutationFn: async (payload) => {
      const response = await $mainApi.post("/auth/sign-in", payload);

      return response.data;
    },
    onSuccess: (response) => {
      saveSession(response);
      setAuth(true);
      toast.success("С возвращением!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(`Не удалось войти. ${getErrorMessage(error)}`);
    },
  });
};
