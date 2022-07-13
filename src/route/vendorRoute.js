import React from 'react'
import { Routes, Route, } from "react-router-dom";
import '../admin/adminDashbord/helper/admin.css'
import Vendorauth from '../vendor/auth/auth';
import VendorPasswordReset from '../vendor/auth/resetPassword';
import VendorLocation from '../vendor/pages/location';
import ProfileCompletedDetails from '../vendor/pages/profileCompletedDetails';
import SellingCategory from '../vendor/pages/sellingCategory';
import VendorDashbord from '../vendor/vendorDashbord/dashbord';
import VendorFooter from '../vendor/vendorDashbord/helper/footer';
import VendorHeader from '../vendor/vendorDashbord/helper/vendorHeader';
import VendorSidebar from '../vendor/vendorDashbord/helper/vendorSidebar';
import style from '../vendor/vendorDashbord/helper/vendor.module.css'

function VendorRoute() {
    return (
        <>
            <VendorHeader />
            {/* <VendorSidebar /> */}
                <div className={`${style.vendorboxarea}`}>
                    <Routes>
                        <Route exact path="/" element={<VendorDashbord />} />
                        <Route exact path="/auth" element={<Vendorauth />} />
                        <Route exact path="/password-reset" element={<VendorPasswordReset />} />
                        <Route exact path="/location" element={<VendorLocation />} />
                        <Route exact path="/category" element={<SellingCategory />} />
                        <Route exact path="/profile-completed-details" element={<ProfileCompletedDetails />} />
                    </Routes>
                </div>
            <VendorFooter/>
        </>
    )
}

export default VendorRoute