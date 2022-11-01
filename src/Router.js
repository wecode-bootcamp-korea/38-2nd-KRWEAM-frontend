import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductList from "./pages/ProductList/ProductList";
import Login from "./pages/Login/Login";
import Buy from "./pages/BuySell/Buy/Buy";
import Sell from "./pages/BuySell/Sell/Sell";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";
import KaKaoLogin from "./pages/KaKaoLogin/KaKaoLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy/:id" element={<Buy />} />
        <Route path="/sell/:id" element={<Sell />} />
        <Route path="/mypage/:log" element={<MyPage />} />
        <Route path="/oauth/kakao/callback" element={<KaKaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
