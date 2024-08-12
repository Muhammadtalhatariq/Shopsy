import React from "react";
import women from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="shadow-md pb-12 bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="flex flex-wrap">
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center  w-full sm:w-1/2"
        >
          <img
            className="w-80 h-80 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover mx-auto rounded-xl"
            src={women}
            alt=""
          />
        </div>
        <div className="w-full sm:w-1/2 px-4 pt-4 sm:pt-0 ">
          <div className="">
            <h1
              data-aos="fade-up"
              className="lg:text-4xl sm:text-3xl text-2xl font-bold "
            >
              Winter Sale upto 50% Off
            </h1>
            <p data-aos="fade-up" className="text-sm pt-4 px-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div >
            <div data-aos="fade-up" className="flex items-center gap-4 pt-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 pt-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 pt-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 pt-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
