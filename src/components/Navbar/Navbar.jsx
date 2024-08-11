import React from "react";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Darkmode from "../Darkmode";
const Navbar = () => {
  return (
    <>
      <div className="Navbar shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div>
          <div className="upperNavbar bg-primary/40">
            <div className="flex justify-between items-center md:px-14 px-2 py-2">
              <div className="flex gap-2">
                <img src={Logo} alt="" className="w-8 h-8" />
                <p className="text-3xl font-semibold">Shopsy</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative group hidden md:block ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded-xl outline-none px-3 w-[200px]  group-hover:w-[300px] transition-all duration-300 border border-primary focus:border-1 focus:border-secondary dark:border-gray-500 dark:bg-gray-800 "
                  />
                  <FaSearch
                    size={12}
                    className="absolute right-3 top-2 text-gray-500 group-hover:text-primary"
                  />
                </div>
                <button className=" flex items-center gap-1 p-2 rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary group">
                  <span className="group-hover:block hidden transition-all duration-200">
                    {" "}
                    Order
                  </span>
                  <MdShoppingCart
                    size={20}
                    className="text-white drop-shadow-sm cursor-pointer "
                  />
                </button>
                <div>
                  <Darkmode />
                </div>
              </div>
            </div>
          </div>
          <div className="lowerNavbar"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
