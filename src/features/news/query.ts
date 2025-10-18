import { useQuery } from "@tanstack/react-query";
import { getNews } from "./api";

export function useGetNews() {
  return useQuery({
    queryFn: getNews,
    queryKey: ["news"],
  });
}
