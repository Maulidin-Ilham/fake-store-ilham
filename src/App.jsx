import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";

import ProductDetail from "./pages/ProductDetail";
import FilterPage from "./pages/FilterPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:category" element={<FilterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
