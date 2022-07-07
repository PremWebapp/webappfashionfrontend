import React from 'react'
import { Routes, Route, } from "react-router-dom";
import '../dashbord/adminDashbord/helper/admin.css'
import VendorDashbord from '../dashbord/vendorDashbord/dashbord';
import VendorHeader from '../dashbord/vendorDashbord/helper/vendorHeader';
import VendorSidebar from '../dashbord/vendorDashbord/helper/vendorSidebar';

function VendorRoute() {
    return (
        <>
            <VendorHeader />
            <VendorSidebar />
            <div>
                <div className="wrapper">
                    <div className="section">
                        <div className="box-area">
                            <Routes>
                                <Route exact path="/" element={<VendorDashbord />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VendorRoute