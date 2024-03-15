// CarD.jsx

import React from "react";

const CarD = ({ car }) => {
  console.log("Car Data:", car); // Debugging statement to inspect car data

  return (
    <div className="container mt-8">
      <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
        {car.name} Details
      </h1>
      <div>
        <p>Price: {car.price}</p>
        <p>Person: {car.person}</p>
        <p>Parking: {car.parking}</p>
        <p>Kilometers: {car.km}</p>
      </div>
    </div>
  );
};

export default CarD;
