import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import MobileLayout from "../components/layouts/MobileLayout";
import Attendance from "../pages/Attendance";
import Form from "../pages/Form";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Notification from "../pages/Notification";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/notification", element: <Notification /> },
  {
    element: <MobileLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/attendance", element: <Attendance /> },
      { path: "/form", element: <Form /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
