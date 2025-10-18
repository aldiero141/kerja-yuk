"use client";
import CategoryChart from "./CategoryChart";
import SubcategoryChart from "./SubcategoryChart";

type Props = {
  graphResponse: any;
};

export default function GraphComponent({ graphResponse }: Props) {
  const counts = Object.entries(graphResponse.data).map(
    ([key, value]: any) => ({
      category: key.toLowerCase(),
      count: value.length,
    }),
  );

  const subcategoryCounts: any = {};
  Object.values(graphResponse.data).forEach((respnse: any) => {
    respnse.forEach(({ html_id }: any) => {
      const key = html_id.split(".")[1].toLowerCase();
      subcategoryCounts[key] = (subcategoryCounts[key] || 0) + 1;
    });
  });

  const subcategoryCountsData = Object.entries(subcategoryCounts).map(
    ([key, value]: any) => ({
      category: key.toLowerCase(),
      count: value,
    }),
  );

  return (
    <div className="flex flex-col gap-6 p-6 w-3xl ">
      <CategoryChart counts={counts} />
      <SubcategoryChart subcategoryCountsData={subcategoryCountsData} />
    </div>
  );
}
