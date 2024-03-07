import React, { useState, useEffect } from "react";
import count from "../images/count.jpeg";

const Count = () => {
  const [experiencedDrivers, setExperiencedDrivers] = useState(0);
  const [peopleDropped, setPeopleDropped] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [cars, setCars] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (experiencedDrivers < 20) {
        setExperiencedDrivers((prevCount) => prevCount + 1);
      }
      if (peopleDropped < 1000) {
        setPeopleDropped((prevCount) => prevCount + 10);
      }
      if (satisfiedClients < 1000) {
        setSatisfiedClients((prevCount) => prevCount + 10);
      }
      if (cars < 30) {
        setCars((prevCount) => prevCount + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [experiencedDrivers, peopleDropped, satisfiedClients, cars]);

  return (
    <>
      <div
        className="bg-cover bg-center p-8"
        style={{ backgroundImage: `url(${count})` }}
      >
        <div className="grid grid-cols-2 gap-4  mt-28 mx-9">
          <div className="text-center text-4xl font-bold ">
            {experiencedDrivers}
            <div className="text-center text-xl font-bold ">
              <span className="text-gray-600">Experienced Drivers</span>
            </div>
          </div>
          <div className="text-center text-4xl font-bold">
            {satisfiedClients}+
            <div className="text-center text-xl font-bold">
              <span className="text-gray-600">Satisfied Clients</span>
            </div>
          </div>
          <div className="text-center text-4xl font-bold">
            {peopleDropped}K
            <div className="text-center text-xl font-bold">
              <span className="text-gray-600">People Dropped</span>
            </div>
          </div>
          <div className="text-center text-4xl font-bold">
            {cars}+
            <div className="text-center text-xl font-bold">
              <span className="text-gray-600">Cars </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
