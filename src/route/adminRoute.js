import React from 'react'
import { Routes, Route, } from "react-router-dom";
import AdminSidebar from '../dashbord/adminDashbord/helper/adminSidebar';
import AdminDashbord from '../dashbord/adminDashbord/dashbord';
import '../dashbord/adminDashbord/helper/admin.css'
import AdminHeader from '../dashbord/adminDashbord/helper/adminHeader';

function AdminRoute() {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div>

        <div className="wrapper">
          <div className="section">
            <div className="box-area">
              <Routes>
                <Route exact path="/" element={<AdminDashbord />} />
              </Routes>
            </div>
          </div>
        </div></div>

    </>
  )
}

export default AdminRoute