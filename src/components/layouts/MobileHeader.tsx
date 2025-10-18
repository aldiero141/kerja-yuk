import { IconBell } from "@tabler/icons-react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export default function HomeHeader() {
  return (
    <nav className="flex justify-between items-center px-6 py-2">
      <h1 className="text-2xl font-bold text-primary">KerjaYuk!</h1>
      <NavLink to="/notification">
        <Button variant="ghost">
          <IconBell className="size-5" />
        </Button>
      </NavLink>
    </nav>
  );
}
