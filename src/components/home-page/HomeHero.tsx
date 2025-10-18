import { Card, CardHeader, CardTitle } from "../ui/card";

export default function HomeHero() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-medium text-black">Hi, Good Morning!</h2>
      <Card className="bg-gradient-to-r from-primary to-[#C5105F] text-white">
        <CardHeader>
          <CardTitle>Home Hero</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
