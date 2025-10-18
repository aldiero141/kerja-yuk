import { cn } from "@/lib/utils";

type Props = {
  notification: {
    type: string;
    title: string;
    status: string;
    message: string;
    time: string;
    isRead: boolean;
  };
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

  return (
    <div
      className={cn(
        "flex flex-row gap-2 justify-between px-6 py-4",
        notification.isRead ? "bg-white" : "bg-blue-500/10"
      )}
    >
      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center ">
        <img
          src={imageUrl()}
          className="size-6"
          alt={`notification-${notification.type}`}
        />
      </div>

      <div className="flex flex-col w-[280px]">
        <h1 className="font-bold text-base -mt-1">{notification.title}</h1>
        <p className="text-sm text-muted-foreground w-full line-clamp-3 text-ellipsis ">
          {notification.message}
        </p>
      </div>

      <div className="flex items-start justify-end w-16 text-right">
        <p className="text-xs text-muted-foreground">{notification.time}</p>
      </div>
    </div>
  );
}
