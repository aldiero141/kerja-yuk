import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Notification from "../pages/Notification";
import MobileLayout from "../components/layouts/MobileLayout";
import Attendance from "../pages/Attendance";
import Form from "../pages/Form";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/home" replace /> },

  {
    element: <MobileLayout />,
    children: [
      { path: "/notification", element: <Notification /> },
      { path: "/home", element: <Home /> },
      { path: "/attendance", element: <Attendance /> },
      { path: "/form", element: <Form /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
