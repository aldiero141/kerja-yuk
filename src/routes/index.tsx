import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import MobileLayout from "../components/layouts/MobileLayout";
import AttendancePage from "../pages/Attendance";
import FormPage from "../pages/Form";
import GraphPage from "../pages/Graph";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import NotificationPage from "../pages/Notification";
import SettingsPage from "../pages/Settings";

const router = createBrowserRouter([
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/notification", element: <NotificationPage /> },
  { path: "/graph", element: <GraphPage /> },
  {
    element: <MobileLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/attendance", element: <AttendancePage /> },
      { path: "/form", element: <FormPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
