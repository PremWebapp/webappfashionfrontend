import React from 'react'
import './paymentCss.css'
import { FaCcVisa } from "react-icons/fa";

function PaymentPage() {
    return (
        <div className="payment-container d-lg-flex">
            <div className="box-1 bg-light user">
                {/* <div className="d-flex align-items-center mb-3">
                    <img src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        className="pic rounded-circle" alt="" />
                    <p className="ps-2 name">Oliur</p>
                </div> */}
                <div className="box-inner-1 pb-3 mb-3 ">
                    <div className="d-flex justify-content-between mb-3 userdetails">
                        <p className="fw-bold">Lightroom Presets</p>
                        <p className="fw-lighter"><span className="fas fa-dollar-sign"></span>33.00+</p>
                    </div>
                    <div id="my" className="carousel slide carousel-fade img-details" data-bs-ride="carousel"
                        data-bs-interval="2000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#my" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    className="d-block w-100" />
                            </div>
                            {/* <div className="carousel-item">
                                <img src="https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    className="d-block w-100 h-100" />
                            </div> */}
                            {/* <div className="carousel-item">
                                <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    className="d-block w-100" />
                            </div> */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                            <div className="icon">
                                <span className="fas fa-arrow-left"></span>
                            </div>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                            <div className="icon">
                                <span className="fas fa-arrow-right"></span>
                            </div>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p className="dis info my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa
                        sed officiis odio
                    </p>
                    <div className="radiobtn">
                        <input type="radio" name="box" id="one" />
                        <input type="radio" name="box" id="two" />
                        <input type="radio" name="box" id="three" />
                        <label for="one" className="box py-2 first">
                            <div className="d-flex align-items-start">
                                <span className="circle"></span>
                                <div className="course">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="fw-bold">
                                            Collection 01
                                        </span>
                                        <span className="fas fa-dollar-sign">29</span>
                                    </div>
                                    <span>10 x Presets. Released in 2018</span>
                                </div>
                            </div>
                        </label>
                        <label for="two" className="box py-2 second">
                            <div className="d-flex">
                                <span className="circle"></span>
                                <div className="course">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="fw-bold">
                                            Collection 01
                                        </span>
                                        <span className="fas fa-dollar-sign">29</span>
                                    </div>
                                    <span>10 x Presets. Released in 2018</span>
                                </div>
                            </div>
                        </label>
                        <label for="three" className="box py-2 third">
                            <div className="d-flex">
                                <span className="circle"></span>
                                <div className="course">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="fw-bold">
                                            Collection 01
                                        </span>
                                        <span className="fas fa-dollar-sign">29</span>
                                    </div>
                                    <span>10 x Presets. Released in 2018</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="box-2">
                <div className="box-inner-2">
                    <div>
                        <p className="fw-bold">Payment Details</p>
                        <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                    </div>
                    <form >
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Email address</p>
                            <input className="form-control" type="email" value="luke@skywalker.com" />
                        </div>
                        <div>
                            <p className="dis fw-bold mb-2">Card details</p>
                            <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                                <div className="fas fa-cc-visa ps-3"><FaCcVisa size='30' /></div>
                                <input type="text" className="form-control" placeholder="Card Details" />
                                <div className="d-flex w-50">
                                    <input type="text" className="form-control px-0" placeholder="MM/YY" />
                                    <input type="password" maxlength={3} className="form-control px-0" placeholder="CVV"/>
                                </div>
                            </div>
                            <div className="my-3 cardname">
                                <p className="dis fw-bold mb-2">Cardholder name</p>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="address">
                                <p className="dis fw-bold mb-3">Billing address</p>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected hidden>United States</option>
                                    <option value="1">India</option>
                                    <option value="2">Australia</option>
                                    <option value="3">Canada</option>
                                </select>
                                <div className="d-flex">
                                    <input className="form-control zip" type="text" placeholder="ZIP" />
                                    <input className="form-control state" type="text" placeholder="State" />
                                </div>
                                <div className=" my-3">
                                    <p className="dis fw-bold mb-2">VAT Number</p>
                                    <div className="inputWithcheck">
                                        <input className="form-control" type="text" value="GB012345B9"/>
                                            <span className="fas fa-check"></span>

                                    </div>
                                </div>
                                <div className="d-flex flex-column dis">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>Subtotal</p>
                                        <p><span className="fas fa-dollar-sign"></span>33.00</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>VAT<span>(20%)</span></p>
                                        <p><span className="fas fa-dollar-sign"></span>2.80</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p className="fw-bold">Total</p>
                                        <p className="fw-bold"><span className="fas fa-dollar-sign"></span>35.80</p>
                                    </div>
                                    <div className="btn btn-primary mt-2">Pay<span className="fas fa-dollar-sign px-1"></span>35.80
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage