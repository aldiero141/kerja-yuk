import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Notification from "../pages/Notification";
import MobileLayout from "../components/layouts/MobileLayout";

const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/home" replace /> },

  {
    element: <MobileLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/notification", element: <Notification /> },
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
