import React from "react";
import { IoCarSport } from "react-icons/io5";
import { FaAmazonPay } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";

const skillsData = [
  {
    name: "Unmatched Quality",
    icon: (
      <IoCarSport className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "With safety our utmost priority, we ensure our drivers are qualified and trained professionals who always abide by traffic rules and regulations.",
    aosDelay: "0",
  },
  {
    name: "Secure Payment",
    icon: (
      <FaAmazonPay className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We securely process all of your credit card information through our payment gateway. We do not store or retain any credit card information.",
    aosDelay: "500",
  },
  {
    name: "Reliable Transportation",
    icon: (
      <AiOutlineSafetyCertificate className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "You can rest assured knowing that our taxi service is reliable because we are available 24/7, 365 days a year at reasonable rates for everyone.",
    aosDelay: "1000",
  },
  {
    name: "Free Home Delivery",
    icon: (
      <TbTruckDelivery className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "You can rest assured knowing that our taxi service is reliable because we are available 24/7, 365 days a year at reasonable rates for everyone.",
    aosDelay: "1500",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-semi dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-semi    hover:bg-primary duration-300 text-white hover:text-black rounded-lg border"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
