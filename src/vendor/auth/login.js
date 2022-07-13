import React from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <>
            <div className="modal-dialog  modal-dialog-centered justify-content-center " role="document">
                <div className="modal-content  border-0 ">
                    <div className="modal-body  p-0">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="card-body pt-0">
                                    <div className="row justify-content-center pb-sm-5 pb-3">
                                        <div className="col-sm-8 col px-sm-0 px-4">
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Provider Type</p>
                                                <select className={`${style.formcontrol} form-control bg-light`} >
                                                    <option value="volvo">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                            <div> <p className={`${style.vendorCardLable}`}>Mobile Number</p>
                                                <input className={`${style.formcontrol} form-control`} type="number" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                                            </div>

                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Password</p>
                                                <input className={`${style.formcontrol} form-control`} type="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                                            </div>
                                            <div className="row align-items-center mt-4 mb-5">
                                                <div className="col text-left">
                                                    <div className="custom-control custom-checkbox">
                                                        <input id="my-input" className="custom-control-input mt-2" type="checkbox" name="" value="true" />
                                                        <label for="my-input" className="custom-control-label px-2">
                                                            <span className={`${style.termCOndition}`}>I Accept all the Terms and Conditions</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex  d-flex">
                                                    <button type="button" className={`${style.authsubmitted} btn btn-primary  btn-block`} data-bs-toggle="modal" data-bs-target="#loginModel">
                                                        Login
                                                    </button>
                                                    <div className='col d-flex justify-content-end'>
                                                        
                                                        <Link to='/vendor/password-reset' className='text-danger mky-auto'>Forgate Password?</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${style.modalContant} modal fade`} id="loginModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h3 className="modal-title" id="exampleModalLabel">Enter OTP</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className={`fs-6 ${style.modelLable}`}>OTP Sent to registered mobile number</p>
                            <input className={`${style.formcontrol} form-control shadow-none`} type="password" name="password" placeholder="Email Id/Mobile Number" />
                        </div>
                        <div className="modal-footer  d-flex justify-content-center">
                            <button type="button" className={`${style.authsubmitted} btn btn-primary`}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login