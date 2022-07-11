import React from 'react'
import style from '../vendorDashbord/helper/vendor.module.css'

function Vendorauth() {
    return (
        <div className="container  pb-5">
            <div className={`row d-flex justify-content-center align-items-center ${style.vendorAuthBox}`}>
                <div className="col-lg-5 col-md-5 col-10">
                    <h3 className={`${style.vendorAuthText}`}>Sell on Pyde Ya</h3>
                    <p className="fw-bold mb-2">Login or Create Account to Start Selling</p>
                    <div className="pb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                </div>
                <div className='col-lg-5 col-md-5 '>
                    <div className={`mt-3 mt-md-5 ${style.authCard}`}>
                        <h6>Log in to your account</h6>
                        <form className="pt-4">
                            <div className="d-flex flex-column pb-3">
                                <label for="email">Email Address</label>
                                <input type="email" name="email" id="emailId" className="border-bottom border-primary" />
                            </div>
                            <div className="d-flex flex-column pb-3">
                                <label for="password">Password</label>
                                <input type="password" name="passwrd" id="pwd" className="border-bottom border-primary"/>
                            </div>
                            <div className="d-flex jusity-content-end pb-4">
                                <div className="ml-auto">
                                    <a href="#" className="text-danger text-decoration-none">Forgot password?</a>
                                </div>
                            </div>
                            <input type="button" value="Log in" className="btn btn-primary btn-block mb-3" />
                            <div className="register mt-5">
                                <p>Don't have an account? <a href="#">Create an account</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendorauth