import NotificationHeader from "@/components/notification/NotificationHeader";
import NotificationList from "@/components/notification/NotificationList";

export default function NotificationPage() {
  return (
    <div className="mx-auto w-full h-full pt-2 bg-white max-w-md shadow-sm flex flex-col flex flex-col w-full min-h-screen">
      <NotificationHeader />
      <NotificationList />
    </div>
  );
}
