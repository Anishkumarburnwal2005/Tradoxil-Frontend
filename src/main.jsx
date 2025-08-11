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
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<WrongRoute />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
