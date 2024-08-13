import React from "react";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Darkmode from "../Darkmode";
import { FaCaretDown } from "react-icons/fa";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "#/",
  },
  {
    id: 2,
    name: "Top Eated",
    link: "#/",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "#/",
  },
  {
    id: 4,
    name: "Men Wear",
    link: "#/",
  },
  {
    id: 5,
    name: "Women Wear",
    link: "#/",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({handleOrderPopup}) => {
  return (
    <>
      <div className="Navbar shadow-md relative z-40">
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
                <button 
                onClick={handleOrderPopup}
                className=" flex items-center gap-1 p-2 rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary group">
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
          <div className="lowerNavbar hidden sm:block">
            <div data-aos="zoom-in" data-aos-duration="500"  className="flex justify-center items-center">
              <ul className="flex gap-8 p-2">
                {Menus.map((menu) => (
                  <li key={menu.id}>
                    <a
                      className="hover:text-secondary duration-200"
                      href={menu.link}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                <li className=" group relative cursor-pointer">
                  <a className="flex items-center gap-2" href="/">
                    Trending Products
                    <span>
                      {" "}
                      <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />{" "}
                    </span>
                  </a>
                  <div className="hidden group-hover:block z-999 absolute w-[200px] rounded-md ">
                    <ul className="  text-black bg-white py-2 ">
                      {DropdownLinks.map((menu) => (
                        <li key={menu.id}>
                          <a
                            className="hover:bg-secondary/20  inline-block transition-all duration-200 w-full px-2"
                            href={menu.link}
                          >
                            {menu.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
