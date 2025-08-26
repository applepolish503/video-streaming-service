import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { App } from "./routes/App";
import { Login } from "./routes/Login";
import { Main } from "./routes/Main";
import { LocationDetail } from "./routes/LocationDetail";
import "leaflet/dist/leaflet.css";
import "./styles/global.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

const router = createHashRouter([
  { path: "/", element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: "main", element: <Main /> },
      { path: "detail/:id", element: <LocationDetail /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ]
  }
], { basename: "/" });

createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


