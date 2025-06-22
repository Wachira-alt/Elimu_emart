import { Routes, Route } from "react-router-dom";

import Home from "../pages/client/Home";
import AboutUs from "../pages/client/AboutUs";
import Accessories from "../pages/client/Accessories";
import CartPage from "../pages/client/CartPage";
import FAQ from "../pages/client/FAQ";
import GetHelp from "../pages/client/GetHelp";
import HotDeals from "../pages/client/HotDeals";
import ProfilePage from "../pages/client/ProfilePage";
import TopCategories from "../pages/client/TopCategories";
import TrackOrder from "../pages/client/TrackOrder";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/get-help" element={<GetHelp />} />
      <Route path="/hot-deals" element={<HotDeals />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/top-categories" element={<TopCategories />} />
      <Route path="/track-order" element={<TrackOrder />} />
    </Routes>
  );
}
