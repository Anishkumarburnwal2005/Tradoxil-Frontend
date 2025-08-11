import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Landing_Page/about/AboutPage";
import HomePage from "./Landing_Page/home/HomePage";
import PricingPage from "./Landing_Page/pricing/PricingPage";
import ProductPage from "./Landing_Page/products/ProductPage";
import Signup from "./Landing_Page/signUp/Signup";
import SupportPage from "./Landing_Page/support/SupportPage";
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";

import "./index.css";
import WrongRoute from "./WrongRoute";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="https://tradoxil.onrender.com" element={<HomePage />} />
      <Route path="https://tradoxil.onrender.com/signUp" element={<Signup />} />
      <Route
        path="https://tradoxil.onrender.com/about"
        element={<AboutPage />}
      />
      <Route
        path="https://tradoxil.onrender.com/pricing"
        element={<PricingPage />}
      />
      <Route
        path="https://tradoxil.onrender.com/product"
        element={<ProductPage />}
      />
      <Route
        path="https://tradoxil.onrender.com/support"
        element={<SupportPage />}
      />
      <Route path="*" element={<WrongRoute />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
