import type { Notification } from "@/features/notification/type";
import { IconBell } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { useGetNotification } from "@/features/notification/query";

export default function HomeHeader() {
  const { data: notification } = useGetNotification();
  const [isAllNotificationRead, setIsAllNotificationRead] = useState(false);

  useEffect(() => {
    if (notification?.data) {
      setIsAllNotificationRead(notification.data.every((item: Notification) => item.isRead));
    }
  }, [notification]);

  return (
    <nav className="flex justify-between items-center px-6 py-2">
      <h1 className="text-2xl font-bold text-primary">KerjaYuk!</h1>
      <NavLink to="/notification">
        <Button variant="ghost" className="flex size-10 relative">
          <IconBell className="size-5" />
          {
            !isAllNotificationRead && (
              <div className="absolute top-2.5 right-2 size-1.5 rounded-full bg-primary"></div>
            )
          }
        </Button>
      </NavLink>
    </nav>
  );
}
