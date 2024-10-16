import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar(){
    return(
        <div className="nav-container">
            <h3>Billing Software</h3>
            <div>
                <Link to="/" className="link">Product Details</Link>
                <Link to="/customer-details" className="link">Customer Details</Link>
            </div>
        </div>
    )
}

export default Navbar