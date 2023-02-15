import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ShirtsGallery from "./pages/ShirtsGallery";
import Cart from "./pages/Cart";
import CheckOut from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "shirts", element: <ShirtsGallery /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <CheckOut /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
