import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import whiteCar from "../../assets/images/car_light.png";
import car2 from "../../assets/images/car_light.png";
import car3 from "../../assets/images/car_light.png";
import { FaCloudMoon } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { LuParkingCircle } from "react-icons/lu";
import { FaRoad } from "react-icons/fa";

import { FaCarSide } from "react-icons/fa";
<FaCarSide />;

const carList = [
  {
    name: "BMW UX",
    price: 250,
    person: 4,
    parking: "Extra Charge",
    km: 17,
    image: whiteCar,
    aosDelay: 0,
  },
  {
    name: "KIA UX",
    price: 140,
    person: 6,
    parking: "Extra Charge",
    km: 17,
    image: car2,
    aosDelay: 500,
  },
  {
    name: "BMW UX",
    price: 100,
    person: 7,
    parking: "Extra Charge",
    km: 17,
    image: car3,
    aosDelay: 1000,
  },
  // Add three more cars
  {
    name: "Toyota UX",
    price: 120,
    person: 2,
    parking: "Extra Charge",
    km: 17,
    image: whiteCar,
    aosDelay: 0,
  },
  {
    name: "Honda UX",
    price: 110,
    person: 4,
    parking: "Extra Charge",
    km: 17,
    image: car2,
    aosDelay: 500,
  },
  {
    name: "Tesla UX",
    price: 180,
    person: 7,
    parking: "Extra Charge",
    km: 17,
    image: car3,
    aosDelay: 1000,
  },
];

const CarList = () => {
  return (
    <div className="">
      <div className="container">
        {/* Section Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem ipsum dolor
        </h1>
        {/* Section Subheading */}
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Car listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((car, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={car.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              {/* Car Image */}
              <div className="w-full h-[120px]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              {/* Car Details */}
              <div className="space-y-2">
                {/* Wrap the car name with Link */}
                <Link
                  to={`/car/${car.name}`}
                  className="text-primary font-semibold"
                >
                  {car.name}
                </Link>
                <div className=" justify-between items-center text-md text-gray-500 font-semibold grid grid-cols-2">
                  <p className="flex ">
                    <FaCloudMoon className="mx-2 mt-1" />
                    {car.price}rs/Night
                  </p>
                  <p className="flex ">
                    <IoIosMan className="mx-2 mt-1" />
                    {car.person}
                  </p>
                  <p className="flex ">
                    <LuParkingCircle className="mx-2 mt-1" />
                    {car.parking}
                  </p>
                  <p className="flex ">
                    <FaRoad className="mx-2 mt-1" />
                    {car.km}rs/km
                  </p>
                </div>
              </div>
              {/* Add Link to Details page */}
              <Link
                to={`/car/${car.name}`}
                className="justify-center flex text-xl text-primary text-center"
              >
                Details
              </Link>
              {/* Car Distance */}
              <p className="text-xl font-semibold absolute top-0 left-3 ">
                12Km/Day
              </p>
            </div>
          ))}
        </div>
        {/* End of car listing */}
      </div>
    </div>
  );
};

export default CarList;
