import React from 'react'

function VendorHeader() {
  return (
    <nav className="navbar navbar-light bg-dark fixed-top">
    <div className="container d-flex">
      <a className="navbar-brand text-white">Vendor</a>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default VendorHeader