import React from "react";
import whiteCar from "../../assets/images/car_light.png";
import car2 from "../../assets/images/car_light.png";
import car3 from "../../assets/images/car_light.png";

// Data for car list
const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: 0,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: 500,
  },
  {
    name: "BMW UX",
    price: 100,
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
                <h1 className="text-primary font-semibold">{car.name}</h1>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>${car.price}/Day</p>
                  <a href="#">Details</a>
                </div>
              </div>
              {/* Car Distance */}
              <p className="text-xl font-semibold absolute top-0 left-3">
                12Km
              </p>
            </div>
          ))}
        </div>
        {/* End of car listing */}
        {/* CTA Button */}
        <div className="grid place-items-center mt-8" data-aos="fade-up">
          <button className="button-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
