import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import SharedHosting from "./pages/SharedHosting.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import WordPressHosting from "./pages/WordPressHosting.jsx";
import VPSHosting from "./pages/VPSHosting.jsx";
import SellerHosting from "./pages/SellerHosting.jsx";
import Affiliate from "./pages/Affiliate.jsx";
import PythonHosting from "./pages/PythonHosting.jsx";
import EcommerceHosting from "./pages/EcommerceHosting.jsx";
import CloudHosting from "./pages/CloudHosting.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/shared-hosting" element={<SharedHosting />} />
        <Route path="/wordPress-hosting" element={<WordPressHosting />} />
        <Route path="/VPS-server" element={<VPSHosting />} />
        <Route path="/reseller-hosting" element={<SellerHosting />} />
        <Route path="/python-hosting" element={<PythonHosting />} />
        <Route path="/ecommerce-hosting" element={<EcommerceHosting />} />
        <Route path="/cloud-hosting" element={<CloudHosting />} />
        <Route path="/affiliate" element={<Affiliate />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
