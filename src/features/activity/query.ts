import { useQuery } from "@tanstack/react-query";
import { getActivity } from "./api";

export function useGetActivity() {
  return useQuery({
    queryFn: getActivity,
    queryKey: ["activity"],
  });
}
