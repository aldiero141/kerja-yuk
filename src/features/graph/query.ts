import { useQuery } from "@tanstack/react-query";
import { getGraph } from "./api";

export function useGetGraph() {
  return useQuery({
    queryFn: getGraph,
    queryKey: ["graph"],
  });
}
