import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ThemeShirts from "./pages/ThemeShirts";
import Cart from "./pages/Cart";
import CheckOut from "./pages/Checkout";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import CreateDesign from "./pages/CreateDesign";
import ArtistShirts from "./pages/ArtistShirts";

const Auth0ProviderLayout = () => (
  <Auth0ProviderWithNavigate>
    <App />
  </Auth0ProviderWithNavigate>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth0ProviderLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "shirts/theme/:themeId", element: <ThemeShirts /> },
      { path: "shirts/artist/:artistId", element: <ArtistShirts /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "create", element: <CreateDesign /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
