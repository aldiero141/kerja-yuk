import type { Notification } from "@/features/notification/type";
import { IconArrowRight, IconCheck, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Props = {
  notification: Notification;
};

export default function NotificationItem({ notification }: Props) {
  const imageUrl = () => {
    switch (notification.type) {
      case "reimbursement":
        return "/notification/coin.png";
      case "sickness":
        return "/notification/pill.png";
      case "overtime":
        return "/notification/alarm.png";
      default:
        return "/notification/coin.png";
    }
  };

  const renderStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-green-500 flex items-center justify-center z-10">
            <IconCheck className="text-white size-3" />
          </div>
        );
      case "approved":
        return (
          <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-green-500 flex items-center justify-center z-10">
            <IconCheck className="text-white size-3" />
          </div>
        );
      case "rejected":
        return (
          <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-red-700 flex items-center justify-center z-10">
            <IconX className="text-white size-3" />
          </div>
        );
      case "processed":
        return (
          <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-blue-500 flex items-center justify-center z-10">
            <IconArrowRight className="text-white size-3" />
          </div>
        );
      case "reviewed":
        return (
          <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-blue-500 flex items-center justify-center z-10">
            <IconArrowRight className="text-white size-3" />
          </div>
        );
      default:
        return (
          <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-blue-500 flex items-center justify-center z-10">
            <IconCheck className="text-white size-3" />
          </div>
        );
    }
  };

  return (
    <div
      className={cn(
        "flex flex-row gap-3 justify-between px-6 py-4",
        notification.isRead ? "bg-white" : "bg-blue-500/10",
      )}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-primary to-[#C11965] rounded-xl flex items-center justify-center relative">
        <img
          src={imageUrl()}
          className="size-6"
          alt={`notification-${notification.type}`}
        />
        {renderStatusIcon(notification.status)}
      </div>

      <div className="flex flex-col w-[70%]">
        <h1 className="font-bold text-base -mt-1">{notification.title}</h1>
        <p className="text-sm text-muted-foreground w-full line-clamp-3 text-ellipsis ">
          {notification.message}
        </p>
      </div>

      <div className="flex items-start justify-end w-16 text-right">
        <p className="text-xs text-gray-400 font-semibold">
          {notification.time}
        </p>
      </div>
    </div>
  );
}
