import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "../Component/Form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CarD = () => {
  const location = useLocation();
  const car = location.state ? location.state.car : {};
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="dark:bg-semi">
      <div className="relative">
        <img
          src={car.image2}
          className="w-full h-80 overflow-hidden object-cover z-20"
          alt="About Us"
        />
        {/* Title Overlay */}
        <h1
          className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold  text-start text-5xl"
          data-aos="fade-left"
        >
          {car.name}
        </h1>
        <button
          className="absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black font-semibold  text-start"
          data-aos="fade-up"
          data-aos-duration="1500"
          onClick={scrollToForm}
        >
          Book Now
        </button>
      </div>
      <div className=" pt-10 p-6 bg-white dark:bg-semi   shadow-md flex">
        {/* Car Image */}
        {car && car.image && (
          <img src={car.image} alt={car.name} className="w-1/2 h-auto mr-4" />
        )}

        {/* Car Details */}
        <div className="flex w-full mt-10 space-x-12 pb-9">
          <div className="pb-5 flex flex-col">
            <div className="mb-10 dark:text-gray-300 ">
              <span className="font-semibold text-lg dark:text-primary mr-4">
                Note:
              </span>
              Payment only for 1st day, rest after the ride is over.
            </div>
            <div className="text-black flex items-center mb-2  dark:text-gray-400">
              <span className="font-semibold mr-2">Name:</span>
              <p className="font-semibold text-xl text-gray-800 dark:text-white">
                {car ? car.name : ""}
              </p>
            </div>
            <div className="text-black flex items-center mb-2 dark:text-gray-400">
              <span className="font-semibold mr-2">Rate:</span>
              <p className="font-semibold text-xl text-gray-800 dark:text-white">
                {car ? car.rs : ""}
              </p>
              <p className="text-lg text-gray-600">rs/km</p>
            </div>
            <div className="text-black flex items-center mb- dark:text-gray-400">
              <span className="font-semibold mr-2">Distance Limit:</span>
              <p className="font-semibold text-xl text-gray-800 dark:text-white">
                {car ? car.km : ""}
              </p>
              <p className="text-lg text-gray-600">rs/Day</p>
            </div>
            <div className="text-black flex items-center mb-2  dark:text-gray-400">
              <span className="font-semibold mr-2">Night Charges:</span>
              <p className="font-semibold text-xl text-gray-800 dark:text-white">
                {car ? car.price : ""}
              </p>
              <p className="text-lg text-gray-600">rs/Night</p>
            </div>
            <div className="text-black flex items-center mb-2 dark:text-gray-400">
              <span className="font-semibold mr-2">Max passengers:</span>
              <p className="font-semibold text-xl text-gray-800 dark:text-white">
                {car ? car.person : ""}
              </p>
            </div>
            <div className="text-black flex items-center mb-2  dark:text-gray-400">
              <span className="font-semibold mr-2">Parking:</span>
              <p className="font-semibold text-xl text-gray-800 dark:text-white">
                {car ? car.parking : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="pt-10 p-6 dark:text-white ">
        <div className="flex justify-between items-center">
          <p className="text-2xl">Table Price & Discount</p>
          <button onClick={toggleDetails} className="text-2xl">
            {showDetails ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
        <hr className="h-1 bg-primary"></hr>
        <div className="">
          {showDetails && (
            <div className="p-9 transition-all duration-300">
              <div className="flex gap-3">
                <h1 className="font-semibold">OUTSTATION(ONE WAY) :</h1>
                <p className="text-red-600 font-semibold"> ₹1,000.00</p>
              </div>
              <div className="flex gap-3">
                <h1 className="font-semibold"> OUTSTATION(ROUND TRIP) :</h1>
                <p className="text-red-600 font-semibold"> ₹1,000.00</p>
              </div>
              <div className="flex gap-3">
                <h1 className="font-semibold"> LOCAL TRIP :</h1>
                <p className="text-red-600 font-semibold"> ₹4,500.00</p>
              </div>
            </div>
          )}
          <div />
        </div>
      </div>

      <div ref={formRef} className="">
        <Form />
      </div>
    </div>
  );
};

export default CarD;
