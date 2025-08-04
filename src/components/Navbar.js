import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <button>Proposals</button>
      <button>Custom Plan</button>
      <button>Work Order</button>
      <button>👤 My Profile</button>
    </div>
  );
};

export default Navbar;
