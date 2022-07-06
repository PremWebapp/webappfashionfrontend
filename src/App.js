import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'antd/dist/antd.css';
import UserRoute from './route/userRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/user/*" element={<UserRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;