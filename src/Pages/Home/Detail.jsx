import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const Detail = () => {
  const { carName } = useParams(); // Assuming your route parameter is named 'carName'
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const db = getFirestore();
        const carRef = doc(db, "cars", carName); // Assuming 'carName' is the document ID
        const carSnapshot = await getDoc(carRef);
        if (carSnapshot.exists()) {
          setCar(carSnapshot.data());
        } else {
          console.log("No such car!");
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCar();
  }, [carName]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <p>hi</p>
      {/* Render car details here using the 'car' state */}
      <h1>{car.name}</h1>
      <p>Price: {car.price}</p>
      {/* Render other details accordingly */}
    </div>
  );
};

export default Detail;
