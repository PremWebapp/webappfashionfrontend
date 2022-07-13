import React from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'

function SellingCategory() {
    return (
        <div className="container">
            <div class="card text-center shadow py-5 ">
                <div class="card-body ">
                    <h5 class="card-title ">Select your Primary Selling Category</h5>
                    <div className='d-flex justify-content-center mt-4'>
                        <div style={{width: '200px'}}>
                            <select className={`${style.formcontrol} form-control bg-light shadow-none`} >
                                <option value="">Select Provider type</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellingCategory