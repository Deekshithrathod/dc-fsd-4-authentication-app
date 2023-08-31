import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register.tsx";
import Login from "./pages/Login/Login.tsx";
import Home from "./pages/Home/Home.tsx";
import User from "./layouts/User/User.tsx";
import EditProfile from "./pages/EditProfile/EditProfile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "edit",
        element: <EditProfile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
