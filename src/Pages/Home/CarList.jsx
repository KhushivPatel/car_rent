import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCloudMoon, FaRoad } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { LuParkingCircle } from "react-icons/lu";
import cd_1 from "../../../public/images/cd_1.png";
import cd1 from "../../../public/images/cd1.jpg";
import cd_2 from "../../../public/images/cd_2.png";
import cd2 from "../../../public/images/cd2.png";
import cd_3 from "../../../public/images/cd_3.png";
import cd3 from "../../../public/images/cd3.jpg";
import cd_4 from "../../../public/images/cd_4.png";
import cd4 from "../../../public/images/cd4.png";
import cd_5 from "../../../public/images/cd_5.png";
import cd5 from "../../../public/images/cd5.png";
import cd_6 from "../../../public/images/cd_6.png";
import cd6 from "../../../public/images/cd6.png";

const CarList = () => {
  const carList = [
    {
      name: "HUNDAU XCENT",
      price: 200,
      person: 4,
      parking: "Extra Charge",
      km: 250,
      image: cd_1,
      image2: cd1,
      aosDelay: 0,
      rs: 10,
    },
    {
      name: "INNOVA CRYSTA",
      price: 250,
      person: 7,
      parking: "Extra Charge",
      km: 250,
      rs: 17,
      image: cd_2,
      image2: cd2,
      aosDelay: 100,
    },
    {
      name: "TEMPO TRAVELER(13 SEATS)",
      price: 400,
      person: 13,
      parking: "Extra Charge",
      km: 250,
      rs: 18,
      image: cd_3,
      image2: cd3,
      aosDelay: 200,
    },

    {
      name: "ERTIGA",
      price: 200,
      person: 6,
      parking: "Extra Charge",
      km: 250,
      rs: 13,
      image: cd_4,
      image2: cd4,
      aosDelay: 0,
    },

    {
      name: "TEMPO TRAVELER(17 SEATS)",
      price: 500,
      person: 17,
      parking: "Extra Charge",
      km: 250,
      rs: 20,
      image: cd_5,
      image2: cd5,
      aosDelay: 100,
    },
    {
      name: "INNOVA",
      price: 200,
      person: 7,
      parking: "Extra Charge",
      km: 250,
      rs: 17,
      image: cd_6,
      image2: cd6,
      aosDelay: 200,
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
  const navigate = useNavigate();
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
          to={{
            pathname: `/car/${encodeURIComponent(car.name)}`,
            state: { car: car }, // Pass the car object as state
          }}
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
          onClick={(e) => {
            e.preventDefault();
            navigate(`/car/${encodeURIComponent(car.name)}`, {
              state: { car: car },
            });
          }}
        >
          {console.log(car)}
          View Details
        </Link>
      </div>
      <p className="text-xl font-semibold absolute top-0 left-3">
        {car.rs}RS/DAY
      </p>
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

