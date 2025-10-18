import { useQuery } from "@tanstack/react-query";
import { getNotification } from "./api";

export function useNotification() {
  return useQuery({
    queryFn: getNotification,
    queryKey: ["notification"],
  });
}
