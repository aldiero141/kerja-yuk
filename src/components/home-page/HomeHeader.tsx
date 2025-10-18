import { Button } from "@/components/ui/button";
import { IconBell } from "@tabler/icons-react";

export default function HomeHeader() {
  return (
    <nav className="flex justify-between items-center pb-2">
      <h1 className="text-2xl font-bold text-primary">KerjaYuk!</h1>
      <div>
        <Button variant="ghost">
          <IconBell className="size-5" />
        </Button>
      </div>
    </nav>
  );
}
