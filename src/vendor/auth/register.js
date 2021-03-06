import React from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'

function Register() {
    return (
        <>

            <div class="modal-dialog  modal-dialog-centered justify-content-center " role="document">
                <div class="modal-content  border-0 ">
                    <div class="modal-body  p-0">
                        <div class="row justify-content-center">
                            <div class="col">
                                <div class="card-body pt-0">
                                    <div class="row justify-content-center pb-sm-5 pb-3">
                                        <div class="col-sm-8 col px-sm-0 px-4">
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Name</p>
                                                <input class={`${style.formcontrol} form-control`} type="text" name="email" placeholder="Email" />
                                            </div>
                                            <div> <p className={`${style.vendorCardLable}`}>Mobile Number</p>
                                                <input class={`${style.formcontrol} form-control`} type="number" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Email</p>
                                                <input class={`${style.formcontrol} form-control`} type="email" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                                            </div>
                                            <div>
                                                <p className={`${style.vendorCardLable}`}>Password</p>
                                                <input class={`${style.formcontrol} form-control`} type="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                                            </div>
                                            <div class="row align-items-center mt-4 mb-5">
                                                <div class="col text-left">
                                                    <div class="custom-control custom-checkbox">
                                                        <input id="my-input" class="custom-control-input mt-2" type="checkbox" name="" value="true" />
                                                        <label for="my-input" class="custom-control-label px-2">
                                                            <span className={`${style.termCOndition}`}>I Accept all the Terms and Conditions</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row"> <div class="col d-flex justify-content-center">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#registerModel" class={`${style.authsubmitted} btn btn-primary  btn-block`}>
                                                    Register
                                                </button>
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

            <div className={`${style.modalContant} modal fade`} id="registerModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h4 className="modal-title" id="exampleModalLabel">Mobile Verification</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body pb-4">
                            <p className={`fs-6 ${style.modelLable}`}>Enter 4 digit code sent on your mobile number</p>
                            <div id="otp" class=" mx-5 inputs d-flex flex-row justify-content-center mt-2">
                                <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                                <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                                <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                            </div>
                            <div className="row mx-5">
                                <div className="col d-flex">
                                    <span className='fw-bold text-danger mky-auto'>29 sec</span>
                                    <div className='col  d-flex justify-content-end'>
                                        <span className='fw-bold text-danger mky-auto'>Resend OTP?</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register