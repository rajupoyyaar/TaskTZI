import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <h3>Billing Software</h3>
      
      <IconButton className="menu-icon" onClick={toggleMenu}>
        <MenuIcon className="menu-icon" />
      </IconButton>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* <Link to="/" className="link" onClick={toggleMenu}>Product Details</Link> */}
        <Link to="/" className="link" onClick={toggleMenu}>Customer Details</Link>
        <Link to="/add-products" className="link" onClick={toggleMenu}>Add Products</Link>
      </div>
    </div>
  );
}

export default Navbar;
