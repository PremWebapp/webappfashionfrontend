import React from 'react'
import { Routes, Route, } from "react-router-dom";
import '../admin/adminDashbord/helper/admin.css'
import Vendorauth from '../vendor/auth/auth';
import VendorDashbord from '../vendor/vendorDashbord/dashbord';
import VendorHeader from '../vendor/vendorDashbord/helper/vendorHeader';
import VendorSidebar from '../vendor/vendorDashbord/helper/vendorSidebar';

function VendorRoute() {
    return (
        <>
            <VendorHeader />
            {/* <VendorSidebar /> */}
            <div>
                {/* <div className="wrapper"> */}
                    {/* <div className="section"> */}
                        <div className="box-area">
                            <Routes>
                                <Route exact path="/" element={<VendorDashbord />} />
                                <Route exact path="/auth" element={<Vendorauth />} />
                            </Routes>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )
}

export default VendorRoute