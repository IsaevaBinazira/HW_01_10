import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { $mainApi } from "../api/http.js";
import useAuth from "../hooks/use-auth.js";



const useRegisterMutation = () => {
const navigate = useNavigate()
const setAuth = useAuth((state) => state.setAuth)

return useMutation({
     mutationFn: async (payload) => {
        const { data } = await $mainApi.post('/auth/sign-up', payload)
        return data
        },
     onSuccess: (respData) => {
        localStorage. setItem('token', respData.accessToken)
        navigate('/')
        toast.info('Successfully registered')
        setAuth(true)
        }
 })
} 


   const useLoginMutation = () => {
   const navigate =useNavigate()
   const setAuth = useAuth((state) => state.setAuth)
return useMutation ({

        mutationFn: async (payload) => {
        const {data } = await $mainApi.post('/auth/sign-in', payload)
        return data
        },
     onSuccess: (respData) => {
        localStorage. setItem('token', respData.accessToken)
        navigate('/')
        toast.info('Successfully logged in')
        setAuth(true)

        }
        })
} ;

const useLogoutMutation = () => {
  const navigate = useNavigate();
  const clear = useAuth((state) => state.clear);

  return useMutation({
    mutationFn: async () => {
      await $mainApi.post("/auth/logout");
    },
    onMutate: () => {
      localStorage.removeItem("token");
      clear();
      navigate("/auth");
    },
    onSuccess: () => toast.info("Successfully logged out"),
    onError: () => toast.info("Вы вышли из аккаунта"),
  });
};


export { useRegisterMutation, useLoginMutation, useLogoutMutation };
