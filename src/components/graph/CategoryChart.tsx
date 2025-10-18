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
  building: {
    label: "Building",
    color: "var(--chart-1)",
  },
  dashboard: {
    label: "Dashboard",
    color: "var(--chart-2)",
  },
  energy: {
    label: "Energy",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export default function CategoryChart({ counts }: any) {
  const chartData = counts.map((count: any) => ({
    category: count.category,
    count: count.count,
    fill: chartConfig[count.category as keyof typeof chartConfig]?.color,
  }));
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Chart</CardTitle>
        <CardDescription>Counts per category</CardDescription>
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
              domain={[0, 6]}
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
