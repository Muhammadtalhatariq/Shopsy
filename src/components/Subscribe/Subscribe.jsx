import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerStyle = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  hight: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div>
      <div style={BannerStyle} className="">
        <div className="py-10">
          <div className="flex justify-center items-center flex-col space-y-6 max-w-xl mx-auto ">
            <p className="text-4xl font-semibold text-white">
              Get Notified About New Products
            </p>
            <input
              className="w-full p-3"
              placeholder="Enter your email"
              type="text"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <button
                data-aos-once="true"
                className="w-24 p-2 mx-28 sm:mx-0 text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary"
              >
               Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
