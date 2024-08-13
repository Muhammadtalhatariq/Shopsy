import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md pb-12">
      <div className=" pt-8 flex  flex-col items-start pl-10 mb-10 max-w-[600px]">
        <p data-aos="fade-up" className="text-primary text sm">
          Top Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Top Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      <div>
        <div>
          <div data-aos="zoom-in">
            <div className="px-8   flex justify-center items-center flex-wrap ">
              {ProductsData.map((data) => (
                <div className="flex px-16 py-12 ">
                  <div className=" drop-shadow-2xl hadow-2xl  hover:bg-black/80 dark:hover:bg-primary  bg-white dark:bg-gray-900 dark:text-white  hover:text-white duration-200 flex items-center justify-center rounded-2xl w-72 h-80 relative ">
                    <img
                      className="h-60 w-48  rounded-lg absolute -top-20 "
                      src={data.img}
                      alt=""
                    />
                    <div className="absolute top-36 flex flex-col items-center ">
                      <div className="flex gap-1 items-center">
                        <FaStar size={13} className="text-primary" />
                        <FaStar size={13} className="text-primary" />
                        <FaStar size={13} className="text-primary" />
                        <FaStar size={13} className="text-primary" />
                      </div>
                      <p className="text-xl font-bold ">{data.title}</p>
                      <p className="text-xs px-3 text-center line-clamp-2">
                        {data.description}
                      </p>
                      <button
                      onClick={handleOrderPopup}
                      className="w-24 p-2 mx-28 sm:mx-0  mt-6 text-white rounded-2xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
