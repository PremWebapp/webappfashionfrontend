import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'antd/dist/antd.css';
import UserRoute from './route/userRoute';
import AdminRoute from './route/adminRoute';
import VendorRoute from './route/vendorRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<UserRoute />} />
        <Route exact path="admin/*" element={<AdminRoute />} />
        <Route exact path="vendor/*" element={<VendorRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;