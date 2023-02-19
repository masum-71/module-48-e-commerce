import React from "react";
import logo from "../images/Logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 flex items-center justify-between pr-5 pl-5">
      <img src={logo} alt="" />
      <div>
        <a
          className="no-underline mr-3 text-white hover:text-orange-500"
          href="/order"
        >
          Order
        </a>
        <a
          className="no-underline mr-3 text-white hover:text-orange-500"
          href="/order-review"
        >
          Order Review
        </a>
        <a
          className="no-underline mr-3 text-white hover:text-orange-500"
          href="/manage-inventory"
        >
          Manage Inventory
        </a>
        <a
          className="no-underline mr-3 text-white hover:text-orange-500"
          href="./login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
