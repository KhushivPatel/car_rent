import React from "react";
import carLightImage from "../../assets/images/car_light.svg";
import carDarkImage from "../../assets/images/dark_car.jpg";
import Bestcar from "./Bestcar";
import Services from "./Services";
import CarList from "./CarList";
import Contact from "./Contact";

const Home = ({ theme }) => {
  // Determine which car image to use based on the theme
  const carImage = theme === "dark" ? carDarkImage : carLightImage;

  return (
    <>
      <div className="dark:bg-black dark:text-white duration-300 relative 
      z-20 ">
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
              <button
                className="rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <Bestcar />
        <Services />
        <CarList />
        <Contact />
      </div>
    </>
  );
};

export default Home;
