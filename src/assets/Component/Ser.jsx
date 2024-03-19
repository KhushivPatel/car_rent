import React, { useRef } from "react";
import ser from "../images/ser.jpeg";
import ser1 from "../images/ser1.jpeg";
import ser2 from "../images/ser2.jpeg";
import ser3 from "../images/ser3.jpeg";
import { Link } from "react-router-dom";
import Form from "../Component/Form";

const Ser = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="dark:bg-semi object-top">
      {/* About Us Image Section */}
      <div className="relative">
        <img
          src={ser}
          className="w-full h-96 overflow-hidden object-cover z-20"
          alt="About Us"
        />
        {/* Title Overlay */}
        <h1
          className="absolute top-1/2  left-5 transform -translate-x-1/2 -translate-y-1/2 text-semi text-start text-5xl"
          data-aos="fade-left"
        >
          OUR POPULAR SERVICES
        </h1>
      </div>
      {/*  */}
      <div className="bg-gray-100 dark:bg-gray-700 flex justify-center items-center">
        <div className="dark:bg-semi_primary dark:text-white duration-300 relative z-20">
          <div className="container min-h-[420px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
              {/* Video Section */}
              <div
                className="order-2 sm:order-1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <img
                  src={ser1}
                  className="relative -z-10  sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-full h-[300px] w-[300px]  "
                />
              </div>
              {/* Text Section */}
              <div className="order-1 sm:order-2 space-x-6 sm:pl-32 ">
                <div>
                  <h1
                    className="text-2xl font-semibold font-serif"
                    data-aos="fade-up"
                  >
                    Local Taxi Service
                  </h1>
                  <h3
                    className="text-gray-400 text-xl font-serif"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Baba Mahakal Tour and Travels is a local taxi service
                    provider in Bhopal, offering transportation solutions to
                    individuals and around the city.
                  </h3>
                </div>

                <button
                  className="rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  onClick={scrollToForm}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-white dark:bg-gray-600 flex justify-center items-center">
        <div className="dark:bg-semi_primary dark:text-white duration-300 relative z-20">
          <div className="container min-h-[420px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
              {/* Video Section */}
              <div
                className="order-1 sm:order-2  "
                data-aos="flip-up"
                data-aos-duration="1500"
              >
                <img
                  src={ser2}
                  className="relative -z-10  sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-full h-[300px] w-[300px]  "
                />
              </div>
              {/* Text Section */}
              <div className="order-2 sm:order-1 space-y-6 sm:pr-32">
                <div>
                  <h1
                    className="text-2xl lg:text-2xl font-semibold font-serif"
                    data-aos="fade-up"
                  >
                    Outstation Taxi Service
                  </h1>
                  <h3
                    className="text-gray-400 text-md font-serif"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Baba Mahakal Tour and Travels provide outstation taxi
                    services in Bhopal. We offer transportation solutions for
                    customers who need to travel from Bhopal to outstation
                    destinations.
                  </h3>
                </div>
                <button
                  className="rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  onClick={scrollToForm}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-gray-100 dark:bg-gray-700 flex justify-center items-center">
        <div className="dark:bg-semi_primary dark:text-white duration-300 relative z-20">
          <div className="container min-h-[420px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
              {/* Video Section */}
              <div
                className="order-2 sm:order-1"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <img
                  src={ser3}
                  className="relative -z-10  sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-full h-[300px] w-[300px]  "
                />
              </div>
              {/* Text Section */}
              <div className="order-1 sm:order-2 space-x-6 sm:pl-32 ">
                <div>
                  <h1
                    className="text-2xl lg:text-2xl font-semibold font-serif"
                    data-aos="fade-up"
                  >
                    One Way Taxi Service
                  </h1>
                  <h3
                    className="text-gray-400 text-xl font-serif"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Baba Mahakal Tour and Travels in Bhopal. We offer you
                    reliable and convenient oneway taxi services. If you’re
                    planning a family vacation,or just need a reliable mode of
                    transportation.
                  </h3>
                </div>
                <button
                  className="rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  onClick={scrollToForm}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={formRef} className="pt-8">
        <Form />
      </div>
    </div>
  );
};

export default Ser;
