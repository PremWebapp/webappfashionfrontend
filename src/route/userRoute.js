import React from 'react'
import { Routes, Route, } from "react-router-dom";
import UserSignup from '../authPages/usersignup';
import UserdDashbord from '../dashbord/userDashbord/UserDashbord';
import UserHeaderSearchBar from '../dashbord/userDashbord/userHeaderSearchBar';
import PaymentPage from '../paymentSection/paymentPage';
import ProductCart from '../product/productCart';
import ProductDetails from '../product/productDetails';
import ProductFilterSidebar from '../product/productFilterSidebar';

function UserRoute() {
    return (
        <div>
            <UserHeaderSearchBar/>
            <Routes>
                <Route exact path="/" element={<UserdDashbord />} />
                <Route exact path="/signup" element={<UserSignup />} />
                <Route exact path="/product" element={<ProductFilterSidebar />} />
                <Route exact path="/product/details" element={<ProductDetails />} />
                <Route exact path="/product/cart" element={<ProductCart />} />
                <Route exact path="/payment" element={<PaymentPage />} />
            </Routes>
        </div>
    )
}

export default UserRoute