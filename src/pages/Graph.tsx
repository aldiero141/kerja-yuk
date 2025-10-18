import type { GraphResponse } from "@/features/graph/type";
import GraphComponent from "@/components/graph/GraphComponent";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetGraph } from "@/features/graph/query";

type GroupedData = {
  [key: string]: { id: number; name: string; html_id: string }[];
};

export default function GraphPage() {
  const { data: graphData, isLoading } = useGetGraph();

  function transformResponse(response: GraphResponse) {
    const grouped: GroupedData = {};

    response.data.forEach(({ id, name }: { id: number; name: string }) => {
      const [categoryRaw, actionRaw] = name.split(".");
      if (!categoryRaw || !actionRaw)
        return;

      const category
        = categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1);
      const action = actionRaw.charAt(0).toUpperCase() + actionRaw.slice(1);

      if (!grouped[category])
        grouped[category] = [];

      grouped[category].push({
        id,
        name: action,
        html_id: name,
      });
    });

    return {
      code: response.code,
      msg: response.msg,
      data: grouped,
    };
  }

  return (
    <div className="flex flex-col gap-2 h-full w-full justify-center items-center">
      {isLoading
        ? (
            <>
              <Skeleton className="mt-4 h-[500px] w-3xl rounded-xl" />
              <Skeleton className="mt-4 h-[500px] w-3xl rounded-xl" />
            </>
          )
        : graphData
          ? (
              <GraphComponent graphResponse={transformResponse(graphData)} />
            )
          : (
              <p>No Data</p>
            )}
    </div>
  );
}
