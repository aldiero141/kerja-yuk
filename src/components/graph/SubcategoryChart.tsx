import type { ChartConfig } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  create: {
    label: "Create",
    color: "var(--chart-1)",
  },
  delete: {
    label: "Delete",
    color: "var(--chart-2)",
  },
  edit: {
    label: "Edit",
    color: "var(--chart-3)",
  },
  index: {
    label: "Index",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export default function CategoryChart({ subcategoryCountsData }: any) {
  const chartData = subcategoryCountsData.map((count: any) => ({
    category: count.category,
    count: count.count,
    fill: chartConfig[count.category as keyof typeof chartConfig]?.color,
  }));
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subcategory Chart</CardTitle>
        <CardDescription>Counts per subcategory</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: any) =>
                chartConfig[value as keyof typeof chartConfig]?.label}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              domain={[0, 4]}
              axisLine={false}
              tickFormatter={(value: any) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="count"
              strokeWidth={2}
              radius={8}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
