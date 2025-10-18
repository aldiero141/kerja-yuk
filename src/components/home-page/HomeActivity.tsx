import { IconClockHour6, IconClockHour9 } from "@tabler/icons-react";
import { RotateCw } from "lucide-react";
import { useGetActivity } from "@/features/activity/query";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeActivity() {
  const { data: activity, isLoading } = useGetActivity();
  return (
    <div className="flex flex-col gap-2 py-4 px-3">
      <h2 className="text-base font-medium text-black">Today's Activity</h2>
      <div className="grid grid-cols-3 w-full gap-2">
        <div className="flex flex-col items-center">
          <IconClockHour9 className="text-primary size-9 mb-2" />
          {isLoading ? (
            <Skeleton className="h-4 w-10 rounded-xl" />
          ) : activity?.data?.checkinTime ? (
            <p className="text-sm font-semibold">
              {activity?.data.checkinTime}
            </p>
          ) : (
            <p className="text-sm font-semibold">--:--</p>
          )}
          <p className="text-sm ">Check In</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center relative">
            <RotateCw className="text-primary size-9 mb-2" />
            <p className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-primary">
              {isLoading ? (
                <Skeleton className="h-4 w-4 rounded-xl" />
              ) : activity?.data ? (
                activity?.data.workingHours
              ) : (
                "--:--"
              )}
            </p>
          </div>
          {isLoading ? (
            <Skeleton className="h-4 w-10 rounded-xl" />
          ) : activity?.data?.totalTimeWorking ? (
            <p className="text-sm font-semibold text-primary">
              {activity?.data.totalTimeWorking}
            </p>
          ) : (
            <p className="text-sm font-semibold">--:--</p>
          )}
          <p className="text-sm ">Working Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <IconClockHour6 className="text-primary size-9 mb-2" />
          {isLoading ? (
            <Skeleton className="h-4 w-10 rounded-xl" />
          ) : activity?.data.checkoutTime ? (
            <p className="text-sm font-semibold">
              {activity?.data.checkoutTime}
            </p>
          ) : (
            <p className="text-sm font-semibold">--:--</p>
          )}
          <p className="text-sm ">Check Out</p>
        </div>
      </div>
    </div>
  );
}
