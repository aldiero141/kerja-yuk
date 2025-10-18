import {
  IconCalendarWeekFilled,
  IconDoorExit,
  IconFileTextFilled,
  IconHomeFilled,
  IconSettingsFilled,
} from "@tabler/icons-react";
import { NavLink, useLocation } from "react-router";

import { Button } from "@/components/ui/button";

export default function HomeFooter() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 max-w-md z-50 flex h-16 w-full items-center justify-around bg-white border-t border-gray-200 shadow-sm ">
      <NavLink to="/home">
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center gap-1 py-6"
        >
          <IconHomeFilled
            className={pathname === "/home" ? "size-5 text-primary" : "size-5"}
          />
          <p
            className={
              pathname === "/home" ? "text-xs text-primary" : "text-xs"
            }
          >
            Home
          </p>
        </Button>
      </NavLink>
      <NavLink to="/attendance">
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center gap-1 py-6"
        >
          <IconCalendarWeekFilled
            className={
              pathname === "/attendance" ? "size-5 text-primary" : "size-5"
            }
          />
          <p
            className={
              pathname === "/attendance" ? "text-xs text-primary" : "text-xs"
            }
          >
            Attendance
          </p>
        </Button>
      </NavLink>
      <div className="flex flex-col items-center justify-start gap-1 py-6 mb-11">
        <Button
          variant="default"
          className="flex flex-col items-center justify-center w-16 h-16 rounded-full shadow-sm shadow-primary"
        >
          <IconDoorExit className="size-6 text-white" />
        </Button>
        <p className="text-xs text-black font-semibold">Check Out</p>
      </div>
      <NavLink to="/form">
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center gap-1 py-6"
        >
          <IconFileTextFilled
            className={pathname === "/form" ? "size-5 text-primary" : "size-5"}
          />
          <p
            className={
              pathname === "/form" ? "text-xs text-primary" : "text-xs"
            }
          >
            Form
          </p>
        </Button>
      </NavLink>
      <NavLink to="/settings">
        <Button
          variant="ghost"
          className="flex flex-col items-center justify-center gap-1 py-6"
        >
          <IconSettingsFilled
            className={
              pathname === "/settings" ? "size-5 text-primary" : "size-5"
            }
          />
          <p
            className={
              pathname === "/settings" ? "text-xs text-primary" : "text-xs"
            }
          >
            Settings
          </p>
        </Button>
      </NavLink>
    </nav>
  );
}
