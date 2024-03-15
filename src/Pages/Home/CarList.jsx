import React from "react";
import { Link } from "react-router-dom";
import whiteCar from "../../assets/images/car_light.png";
import car2 from "../../assets/images/car_light.png";
import car3 from "../../assets/images/car_light.png";
import { FaCloudMoon, FaRoad } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { LuParkingCircle } from "react-icons/lu";

const CarList = () => {
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

  return (
    <div className="container mt-8">
      <h1
        className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        data-aos="fade-up"
      >
        Our cars
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {carList.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

const CarCard = ({ car }) => {
  return (
    <div
      className="border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
      data-aos="fade-up"
      data-aos-delay={car.aosDelay}
    >
      <div className="w-full h-[120px]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
        />
      </div>
      <div className="space-y-2">
        <Link
          to={`/car/${encodeURIComponent(car.name)}`}
          className="text-primary font-semibold"
        >
          {car.name}
        </Link>
        <div className="grid grid-cols-2 text-md text-gray-500 font-semibold">
          <CarInfo icon={<FaCloudMoon />} text={`${car.price}rs/Night`} />
          <CarInfo icon={<IoIosMan />} text={car.person} />
          <CarInfo icon={<LuParkingCircle />} text={car.parking} />
          <CarInfo icon={<FaRoad />} text={`${car.km}rs/km`} />
        </div>
      </div>

      <div>
        <Link
          to={{
            pathname: `/car/${encodeURIComponent(car.name)}`,
            state: { car: car }, // Pass the car object as state
          }}
          className="justify-center flex text-xl text-primary text-center"
        >
          View Details
        </Link>
      </div>
      <p className="text-xl font-semibold absolute top-0 left-3">12Km/Day</p>
    </div>
  );
};

const CarInfo = ({ icon, text }) => (
  <p className="flex">
    {icon}
    <span className="mx-2 mt-1">{text}</span>
  </p>
);

export default CarList;
