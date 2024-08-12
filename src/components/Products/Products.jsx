import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <>
      <div className="shadow-md pb-12 bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className=" pt-14  flex  flex-col items-center mx-auto mb-10 max-w-[600px]">
          <p className="text-primary text sm">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400 px-4 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className=" flex justify-between items-center flex-wrap mx-auto  gap-5  px-16">
          {ProductsData.map((card) => (
            <div className="">
              <img
                className="h-60 w-48 pl-10 rounded-lg"
                src={card.img}
                alt=""
              />
              <div className="">
                <p className="text-xl font-bold pl-10 ">{card.title}</p>
                <p className="text-xs text-gray-400 pl-10">{card.color}</p>
                <div className="flex gap-1 items-center pl-10">
                  <FaStar size={13} className="text-primary" />{" "}
                  <span>{card.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      <div  className="flex items-center justify-center">
      <button className=" text-white p-2 mt-8  rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary">
          View All Button
        </button>
      </div>
      </div>
    </>
  );
};

export default Products;
