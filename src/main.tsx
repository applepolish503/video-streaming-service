import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { App } from "./routes/App";
import { Login } from "./routes/Login";
import { Main } from "./routes/Main";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

const router = createHashRouter([
  { path: "/", element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: "main", element: <Main /> },
    ]
  }
], { basename: "/" });

createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


