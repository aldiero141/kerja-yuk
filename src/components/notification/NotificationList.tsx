import NotificationItem from "./NotificationItem";
import { useNotification } from "@/features/notification/query";
import type { Notification } from "@/features/notification/type";
import NotificationListSkeleton from "./NotificationListSkeleton";

export default function NotificationList() {
  const { data: notifications, isLoading } = useNotification();
  return (
    <div className="flex flex-col w-full">
      {isLoading ? (
        <NotificationListSkeleton />
      ) : (
        notifications?.data?.map(
          (notification: Notification, index: number) => (
            <NotificationItem key={index} notification={notification} />
          )
        )
      )}
    </div>
  );
}
