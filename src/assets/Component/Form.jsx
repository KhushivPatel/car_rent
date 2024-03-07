import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { CiBoxList } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const Form = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [selectedPickupPlace, setSelectedPickupPlace] = useState("");
  const [selectedDropoffPlace, setSelectedDropoffPlace] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedCar, setSelectedCar] = useState("");

  const cars = [
    "Tempo Traveler (17 seats)",
    "Tempo Traveler(13 seats)",
    "Etios",
    "Ertiga",
    "Aura",
    "Innova",
    "Swift Dzire",
    "Innova Crysta",
    "Hundai Xcent",
  ];
  const pickupPlaces = [
    "Other",
    "Bhopal",
    "Khajuraho",
    "Orchha",
    "Maihar",
    "Rewa",
    "Sagar",
    "Jhansi",
    "Ashoknager",
    "Guna",
    "sivani",
    "Balaghat",
    "Chhindwara",
    "Pachmadhi",
    "Betul",
    "Itarsi",
    "Hoshangabad",
    "Ujjain",
    "Gwalior",
    "Indore",
    "Jabalpur",
  ];
  const dropoffPlaces = [
    "Other",
    "Bhopal",
    "Khajuraho",
    "Orchha",
    "Maihar",
    "Rewa",
    "Sagar",
    "Jhansi",
    "Ashoknager",
    "Guna",
    "sivani",
    "Balaghat",
    "Chhindwara",
    "Pachmadhi",
    "Betul",
    "Itarsi",
    "Hoshangabad",
    "Ujjain",
    "Gwalior",
    "Indore",
    "Jabalpur",
  ];
  const packages = [
    "OutStation(One Way)",
    "OutStation(Round Trip)",
    "Local Trip",
  ];

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
  };

  const handleDropoffDateChange = (date) => {
    setDropoffDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dropoffDate > pickupDate) {
      // Process form submission
      console.log("Form submitted successfully!");
    } else {
      alert("Drop-off date must be greater than pick-up date");
    }
  };

  return (
    <>
      <div className="py-9 dark:bg-semi justify-center items-center flex">
        <div className="w-full md:w-[67%] lg:w-[40%]  bg-primary  bg-opacity-50 h-fit  px-5 mb-2 rounded-xl  ">
          <h2 className="text-3xl font-semibold my-6 text-center ">
            Booking Vehicle
          </h2>
          <form onSubmit={handleSubmit} className="px-6">
            <div className="mb-4 ">
              <label
                htmlFor="car"
                className="block font-medium mb-1 justify-center "
              >
                <FaCar
                  className="absolute mt-[3px]  ml-[-20px] text-3xl text-semi
            cursor-pointer justify-center text-center dark:text-white"
                />
              </label>
              <select
                id="car"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-9 mx-5"
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
              >
                <option value="">Select a car</option>
                {cars.map((car, index) => (
                  <option key={index} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="car"
                className="block font-medium mb-1 justify-center "
              >
                <ImLocation2
                  className="absolute mt-[3px] ml-[-20px] text-2xl text-semi
            cursor-pointer justify-center text-center dark:text-white"
                />
              </label>
              <select
                id="pickupPlace"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-9 mx-5"
                value={selectedPickupPlace}
                onChange={(e) => setSelectedPickupPlace(e.target.value)}
              >
                <option value="">Select a pickup place</option>
                {pickupPlaces.map((place, index) => (
                  <option key={index} value={place}>
                    {place}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="car"
                className="block font-medium mb-1 justify-center "
              >
                <ImLocation2
                  className="absolute mt-[3px] ml-[-20px] text-2xl text-semi
            cursor-pointer justify-center text-center dark:text-white"
                />
              </label>
              <select
                id="dropoffPlace"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-9 mx-5"
                value={selectedDropoffPlace}
                onChange={(e) => setSelectedDropoffPlace(e.target.value)}
              >
                <option value="">Select a drop-off place</option>
                {dropoffPlaces.map((place, index) => (
                  <option key={index} value={place}>
                    {place}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="car"
                className="block font-medium mb-1 justify-center "
              >
                <CiBoxList
                  className="absolute mt-[3px] ml-[-20px] text-3xl text-semi
            cursor-pointer justify-center text-center dark:text-white"
                />
              </label>
              <select
                id="package"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-9 mx-5"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
              >
                <option value="">Select a package</option>
                {packages.map((pkg, index) => (
                  <option key={index} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="car"
                className="block font-medium mb-1 justify-center "
              >
                <SlCalender
                  className="absolute mt-[3px] ml-[-20px] text-xl  text-semi
            cursor-pointer justify-center text-center  dark:text-white"
                />
              </label>
              <DatePicker
                id="pickupDate"
                selected={pickupDate}
                placeholderText=" Pick Up"
                onChange={handlePickupDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-9 mx-5"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="car"
                className="block font-medium mb-1 justify-center "
              >
                <SlCalender
                  className="absolute mt-[3px] ml-[-20px] text-xl text-semi
            cursor-pointer justify-center text-center dark:text-white"
                />
              </label>
              <DatePicker
                id="dropoffDate"
                placeholderText=" Drop Off"
                selected={dropoffDate}
                onChange={handleDropoffDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-9 mx-5"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary px-7 py-3 text-white text-sm font-medium uppercase rounded-full shadow-md hover:bg-semi transition duration-150 ease-in-out hover:shadow-lg active:bg-semi mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
