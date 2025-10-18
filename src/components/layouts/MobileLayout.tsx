import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="mx-auto w-full h-full p-6 bg-white max-w-md min-h-screen shadow-sm">
      <Outlet />
    </div>
  );
}
