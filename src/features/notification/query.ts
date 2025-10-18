import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useUserActions } from "@/store/user";
import { login } from "./api";

export function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUserActions();

  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (data) => {
      setUser(data);
      Cookies.set("access_token", data.accessToken);
      Cookies.set("refresh_token", data.refreshToken);
      navigate("/dashboard");
    },
  });
}
