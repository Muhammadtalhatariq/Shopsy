import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/50  z-50 backdrop-blur-sm p-3">
          <div className="fixed bg-gray-100 dark:bg-gray-800 w-[300px] shadow-md -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 py-3 ">
            <div className="flex dark:text-white text-black justify-between items-center px-2">
              <h1 className="text-xl">order now</h1>
              <IoCloseOutline
                size={20}
                onClick={() => setOrderPopup(false)}
              />
            </div>
            <div className="mt-4 mx-3">
              <input
                type="text"
                placeholder="Name"
                className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
                <input
                type="text"
                placeholder="Address"
                className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
            
              <div className="flex justify-center">
                <button
                onClick={()=> setOrderPopup(false)}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
