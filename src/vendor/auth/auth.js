import React from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import { Tabs } from 'antd';
import Login from './login';
import Register from './register';

function Vendorauth() {
    const { TabPane } = Tabs;

    return (
        <div className="container py-2 mt-5">
            <div className="row mt-5">
                <div className="col-md-6 col-xl-6 col-sm-6 col-12 d-flex  d-flex justify-content-center mt-5">
                    <div className=" mb-2 mt-5">
                        <h4>Sell on Pyde Ya</h4>
                        <h5 className='mb-0' style={{ color: '#5A5A5A' }}>Login or Create Account to Start Selling</h5>
                        <p className={`${style.vendorCardLable}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='mt-5 col-md-6 col-xl-6 col-sm-6 col-12'>
                    <div className="mt-5 d-flex  d-flex justify-content-center ">
                        <div className={`${style.vendorauthcard} pt-4`}>
                            <Tabs defaultActiveKey="1" centered >
                                <TabPane tab="Login" key="1">
                                  <Login />
                                </TabPane>
                                <TabPane tab="Register" key="2">
                                   <Register/>
                                </TabPane>

                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendorauth