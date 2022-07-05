import React from 'react';
import './App.css';
import UserdDashbord from './dashbord/userDashbord/UserDashbord';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProductHome from './product/productHome';
import ProductDetails from './product/productDetails';
import 'antd/dist/antd.css';
import ProductCart from './product/productCart';
import ProductFilterSidebar from './product/productFilterSidebar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserdDashbord />} />
        <Route exact path="/product" element={<ProductHome />} />
        <Route exact path="/product/details" element={<ProductDetails />} />
        <Route exact path="/product/cart" element={<ProductCart />} />
        <Route exact path="/product/filter" element={<ProductFilterSidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
