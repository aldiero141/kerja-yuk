import { Outlet } from "react-router";
import HomeFooter from "../home-page/HomeFooter";

export default function DashboardLayout() {
  return (
    <div className="mx-auto w-full h-full pt-6 bg-white max-w-md shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-2 w-full px-6 min-h-[calc(100vh-1.5rem)]">
        <Outlet />
      </div>
      <HomeFooter />
    </div>
  );
}
