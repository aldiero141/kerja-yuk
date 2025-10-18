import { useQuery } from "@tanstack/react-query";
import { getMe, getOnlineUser } from "./api";

export function useGetMe() {
  return useQuery({
    queryFn: getMe,
    queryKey: ["me"],
  });
}

export function useGetOnlineUser() {
  return useQuery({
    queryFn: getOnlineUser,
    queryKey: ["online-user"],
  });
}
