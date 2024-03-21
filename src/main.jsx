import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import Order from "./components/Pages/Order.jsx";
import Document from "./components/Pages/Document.jsx";
import Map from "./components/Pages/Map.jsx";
import Statics from "./components/Pages/Statics.jsx";
import Inbox from "./components/Pages/Inbox.jsx";
import Couriers from "./components/Pages/Couriers.jsx";
import Settings from "./components/Pages/Settings.jsx";
import Help from "./components/Pages/Help.jsx";
import Nav from "./components/Nav.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Home />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/order",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Order />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/documentation",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Document />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/map",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Map />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/statics",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Statics />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/inbox",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Inbox />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/couriers",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Couriers />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/settings",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Settings />
      </div>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: "/help",
    element: (
      <div className="flex w-screen">
        <Nav />
        <Help />
      </div>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
