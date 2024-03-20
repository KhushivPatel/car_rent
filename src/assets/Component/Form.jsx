import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { CiBoxList } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { db } from "../../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import car1 from "../../../public/images/f1.png";
import car2 from "../../../public/images/f2.png";
import car3 from "../../../public/images/f3.png";
import car4 from "../../../public/images/f4.png";
import car5 from "../../../public/images/f5.png";
import car6 from "../../../public/images/f6.png";
import car7 from "../../../public/images/f7.png";
import car8 from "../../../public/images/f8.png";
import car9 from "../../../public/images/f9.png";
import form from "../../../public/images/form.jpeg";
import { getAuth } from "firebase/auth";

const Form = () => {
  // const [image, setImage] = useState(null);
  const auth = getAuth();
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [selectedPickupPlace, setSelectedPickupPlace] = useState("");
  const [selectedDropoffPlace, setSelectedDropoffPlace] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [val, setVal] = useState([]);
  const [Price, setPrice] = useState("1,000"); // Default price

  const cars = [
    {
      name: "Tempo Traveler (17 seats)",
      price: "1,000",
      image: car1,
    },
    {
      name: "Tempo Traveler(13 seats)",
      price: "1,000",
      image: car2,
    },

    {
      name: "Etios",
      price: "1,000",
      image: car3,
    },

    {
      name: "Ertiga",
      price: "1,000",
      image: car4,
    },

    {
      name: "Aura",
      price: "1,000",
      image: car5,
    },

    {
      name: "Innova",
      price: "1,000",
      image: car6,
    },

    {
      name: "Swift Dzire",
      price: "1,000",
      image: car7,
    },

    {
      name: "Innova Crysta",
      price: "1,000",
      image: car8,
    },

    {
      name: "Hundai Xcent",
      price: "1,000",
      image: car9,
    },
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
      let updatedPrice = "1,000"; // Default price

      // Update price based on selected package
      if (selectedPackage === "Local Trip") {
        updatedPrice = "4,500"; // Update price for local trip
      }

      // Set the price state
      setPrice(updatedPrice);
      // Process form submission
      toast.success("Form submitted successfully!");
      setPickupDate(null);
      setDropoffDate(null);
      setSelectedPickupPlace("");
      setSelectedDropoffPlace("");
      setSelectedPackage("");
      setSelectedCar("");
    } else {
      alert("Drop-off date must be greater than pick-up date");
    }
  };

  // Inside the handleSubmit function

  // firebase
  const value = collection(db, "Booking");

  const handleCreate = async () => {
    try {
      const selectedCarInfo = cars.find((car) => car.name === selectedCar);
      await addDoc(value, {
        pickupdate: pickupDate,
        dropoffdate: dropoffDate,
        selectedPickupPlace: selectedPickupPlace,
        selectedDropoffPlace: selectedDropoffPlace,
        selectedPackage: selectedPackage,
        selectedCar: selectedCar,
        carImage: selectedCarInfo.image,
        carPrice: selectedCarInfo.price,
        Email: auth.currentUser.email,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // display data
  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  //
  return (
    <div className="pb-4 dark:bg-semi justify-center items-center flex pt-9">
      <div className="flex w-full md:w-[80%] lg:w-[70%] bg-yellow-100  dark:bg-gray-600 px-5 mb-2 rounded-xl">
        <img
          src={form}
          alt="Car"
          className="w-[400px] h-[400px] rounded-lg md:h-auto  mb-7 mt-7 mr-5"
        />
        <div className="w-[60%] px-5 ">
          <h2 className="text-3xl font-semibold my-6 text-center">
            Booking Vehicle
          </h2>
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="mb-4 ">
              <label
                htmlFor="car"
                className="block font-medium mb-1 justify-center  "
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
                  <option key={index} value={car.name}>
                    {car.name}
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
              onClick={handleCreate}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Rest of the content */}
    </div>
  );
};

export default Form;
