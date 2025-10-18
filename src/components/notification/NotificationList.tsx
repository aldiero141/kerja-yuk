import type { Notification } from "@/features/notification/type";
import { useGetNotification } from "@/features/notification/query";
import NotificationItem from "./NotificationItem";
import NotificationListSkeleton from "./NotificationListSkeleton";

export default function NotificationList() {
  const { data: notifications, isLoading } = useGetNotification();
  return (
    <div className="flex flex-col w-full">
      {isLoading
        ? (
            <NotificationListSkeleton />
          )
        : (
            notifications?.data?.map(
              (notification: Notification, index: number) => (
                <NotificationItem key={index} notification={notification} />
              ),
            )
          )}
    </div>
  );
}
