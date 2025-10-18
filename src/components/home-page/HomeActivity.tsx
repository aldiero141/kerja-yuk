import { IconClockHour6, IconClockHour9 } from "@tabler/icons-react";
import { RotateCw } from "lucide-react";

export default function HomeActivity() {
  return (
    <div className="flex flex-col gap-2 py-4">
      <h2 className="text-base font-medium text-black px-2">
        Today's Activity
      </h2>
      <div className="grid grid-cols-3 w-full gap-2">
        <div className="flex flex-col items-center">
          <IconClockHour9 className="text-primary size-9 mb-2" />
          <p className="text-sm font-semibold">08:00</p>
          <p className="text-sm ">Check In</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center relative">
            <RotateCw className="text-primary size-9 mb-2" />
            <p className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-primary">
              8
            </p>
          </div>
          <p className="text-sm font-semibold text-primary">09:00</p>
          <p className="text-sm ">Working Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <IconClockHour6 className="text-primary size-9 mb-2" />
          <p className="text-sm font-semibold">--:--</p>
          <p className="text-sm ">Check Out</p>
        </div>
      </div>
    </div>
  );
}
