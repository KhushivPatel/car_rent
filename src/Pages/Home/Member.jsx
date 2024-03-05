import React from "react";
import k from "../../assets/images/m1.jpeg";
import v from "../../assets/images/m2.jpeg";
import y from "../../assets/images/m3.jpeg";
import { FaStar } from "react-icons/fa";

const Member = () => {
  //   const logoImage = theme === "dark" ? logo2 : logo;
  const ServicesData = [
    {
      name: "Rahual Anand",
      Image: k,
      description:
        "With safety as our utmost priority, we ensure our drivers are qualified and trained professionals who always abide by traffic rules and regulations.",
      aosDelay: "0",
      Number: "+91 123456789",
    },
    {
      name: "Piyush Agarwal",
      Image: v,
      description:
        "We securely process all of your credit card information through our payment gateway. We do not store or retain any credit card .",
      aosDelay: "500",
      Number: "+91 123456789",
    },
    {
      name: "Raj Kumar",
      Image: y,
      description:
        "You can rest assured knowing that our taxi service is reliable because we are available 24/7, 365 days a year at reasonable rates for everyone.",
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
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white dark:bg-semi  cursor-pointer  hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
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
