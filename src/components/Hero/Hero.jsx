import React from "react";
import Image1 from "../../assets/hero/Women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="Hero text-black relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex justify-center items-center shadow-md bg-gray-100 dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="absolute bg-primary/40 h-[700px] w-[700px] right-0 -top-1/2  rotate-45 rounded-3xl -z"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col  justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <div className=" pt-8 sm:pt-0 flex justify-center text-center flex-col sm:text-left ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="lg:text-7xl sm:text-6xl text-5xl font-bold "
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-sm pt-4"
                    >
                      {data.description}
                    </p>

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                      <button
                        data-aos-once="true"
                        className="w-24 p-2 mx-28 sm:mx-0  mt-6 text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="image order-1 sm:order-2">
                  <div data-aos="zoom-out" data-aos-once="true">
                    <img
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                      src={data.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
