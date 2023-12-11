import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Components/Login";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/main",
    element: (
      <div>
        <App />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <main className="bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
          <RouterProvider router={router} />
        </div>
      </main>
    </TaskContextProvider>
  </React.StrictMode>
);
