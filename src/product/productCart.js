import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { decrementCartProductCount, incrementCartProductCount, removeItemFromCart } from '../redux/reducers/cartReducer';
import { Empty } from 'antd';
import { Link } from 'react-router-dom';

function ProductCart() {
    const dispatch = useDispatch()
    const selectedCartItem = useSelector(state => state.cart?.cartItems)
    
    return (
        <div>
          {selectedCartItem.length === 0? <Empty />:
            <section className="h-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">

                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                                        className="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                            </div>
                            {selectedCartItem.map((item, index) => {
                                return <div className="card rounded-3 mb-4">
                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img src={item.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2" >{item.title}</p>
                                                <p><span className="text-muted">Size: </span>M<span className="text-muted">Color: </span>Grey</p>
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button disabled={item.incriCount === 1 ? true:false} className="btn btn-link text-black px-2" onClick={() =>dispatch(decrementCartProductCount(index))}>
                                                    <FaMinus />
                                                </button>

                                                <input id="form1" min="0" name="quantity" value={item.quantity} type="text"
                                                    className="form-control form-control-sm text-center" />
                                                <button className="btn btn-link px-2 text-dark" onClick={() =>dispatch(incrementCartProductCount(index))}>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0" >${item.price}</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <button className="border-0 bg-white text-danger" onClick={()=>dispatch(removeItemFromCart(item?.id))}><AiFillDelete fontSize={30}/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}


                            <div className="card">
                                <div className="card-body">
                                   <Link to='/user/payment'>
                                   <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                   </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>}
        </div>
    )
}

export default ProductCart