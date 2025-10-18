import { Outlet } from "react-router";
import MobileFooter from "./MobileFooter";
import MobileHeader from "./MobileHeader";

export default function DashboardLayout() {
  return (
    <div className="mx-auto w-full h-full pt-6 bg-white max-w-md shadow-sm flex flex-col justify-between">
      <MobileHeader />
      <div className="flex flex-col gap-2 w-full px-6 min-h-[calc(100vh-5.25rem)]">
        <Outlet />
      </div>
      <MobileFooter />
    </div>
  );
}
