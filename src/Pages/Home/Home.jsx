import React from "react";
import carLightImage from "../../../public/images/car_light.svg";
import carDarkImage from "../../../public/images/light_dp.png";
import t1 from "../../../public/images/t1.gif";
import t2 from "../../../public/images/t2.gif";
import Bestcar from "./Bestcar";
import Services from "./Services";
import CarList from "./CarList";
import Contact from "./Contact";
import Member from "./Member";
import Slider from "../../assets/Component/Slider";
import Count from "../../assets/Component/Count";
import { Link } from "react-router-dom";

const Home = ({ theme }) => {
  // Determine which car image to use based on the theme
  const carImage = theme === "dark" ? carDarkImage : carLightImage;

  return (
    <>
      <div
        className="dark:bg-semi dark:text-white duration-300 relative 
      z-20 "
      >
        <div className="container min-h-[620px] flex ">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            {/* Car Image Section */}
            <div
              className="order-1 sm:order-2"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                src={carImage}
                alt="Car"
                className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
            {/* Text and Button Section */}
            <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
              <h1
                className="text-5xl lg:text-7xl font-semibold font-serif"
                data-aos="fade-up"
              >
                Rent a Car in Bhopal
              </h1>
              <h3
                className="text-primary text-2xl font-serif"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Book Your Drive Now!
              </h3>
              <Link to="/Form">
                <button
                  className="rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Count />
        <CarList />
        <Services />
        <div className="container bg-white rounded-md">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-semi justify-center items-center flex"
          >
            Rental Type
          </h1>
          <div className="flex flex-col  sm:flex-row justify-center sm:justify-between mx-28 sm:px-0">
            <div className="text-center mb-4 sm:mb-0 sm:mr-2">
              <img src={t1} className="h-40" />
              <p className="text-4xl mt-2 text-blue-500">Self Drive</p>
            </div>
            <div className="text-center">
              <img src={t2} className="h-40" />
              <p className="text-4xl mt-2 text-blue-500">With Driver</p>
            </div>
          </div>
        </div>

        <Bestcar />
        <Member />
        <Slider />
        <Contact />
      </div>
    </>
  );
};

export default Home;
