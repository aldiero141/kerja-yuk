import { useQuery } from "@tanstack/react-query";
import { getNotification } from "./api";

export function useGetNotification() {
  return useQuery({
    queryFn: getNotification,
    queryKey: ["notification"],
  });
}
