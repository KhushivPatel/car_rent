import React from "react";
import k from "../../../public/images/m1.png";
import v from "../../../public/images/m2.png";
import y from "../../../public/images/m3.png";
import { FaStar } from "react-icons/fa";

const Member = () => {
  //   const logoImage = theme === "dark" ? logo2 : logo;
  const ServicesData = [
    {
      name: "Rahual Anand",
      Image: k,
      description: "This is a good company.",
      aosDelay: "0",
      Number: "+91 123456789",
    },
    {
      name: "Piyush Agarwal",
      Image: v,
      description: "Good car, Good driver.",
      aosDelay: "500",
      Number: "+91 123456789",
    },
    {
      name: "Raj Kumar",
      Image: y,
      description: "Awesome service.",
      aosDelay: "1000",
      Number: "+91 123456789",
    },
  ];
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold"> Hear From Our Guests</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service, index) => (
              <div
                key={index} // Use the index as the key
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white dark:bg-semi  w-96 cursor-pointer  hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.Image}
                    alt=""
                    className="h-[130px] w-[130px] rounded-full block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-semi dark:text-primary group-hover:text-white duration-high text-2xl font-semibold line-clamp-2">
                    {service.name}
                  </h1>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <a
                    href={`tel:${service.Number}`}
                    className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                  >
                    Call: {service.Number}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
