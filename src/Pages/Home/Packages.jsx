import React, { useRef } from "react";
import about from "../../assets/images/packages.jpeg";
import k from "../../assets/images/ujjain.jpg";
import v from "../../assets/images/indore.jpg";
import y from "../../assets/images/allin.jpg";
import Form from "../../assets/Component/Form";

const Packages = () => {
  const formRef = useRef(null);
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ServicesData = [
    {
      name: "Package 1",
      Image: k,
      description: "BHOPAL to UJJAIN",
      price: "300",
      cartype: "Sedan",
      aosDelay: "0",
      Number: "+91 123456789",
    },
    {
      name: "Package 2",
      Image: v,
      description: "BHOPAL to INDORE",
      price: "300",
      cartype: "Sedan",
      aosDelay: "500",
      Number: "+91 123456789",
    },
    {
      name: "Package 3",
      Image: y,
      description: "BHOPAL to ALL INDIA",
      price: "300",
      cartype: "Sedan",
      aosDelay: "1000",
      Number: "+91 123456789",
    },
  ];

  return (
    <div className="dark:bg-semi">
      <div className="relative">
        <img
          src={about}
          className="w-full h-96 overflow-hidden object-cover z-20"
          alt="About Us"
        />
        {/* Title Overlay */}
        <h1
          className="absolute top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 text-white text-start text-5xl"
          data-aos="fade-left"
        >
          OUR AWESOME PACKAGES
        </h1>
      </div>
      {/*  */}
      {/* <div className=" justify-center  text-center  flex gap-20 md:gap-5 place-items-center">
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
        \
              <a
                href={`tel:${service.Number}`}
                className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
              >
                Call: {service.Number}
              </a>
            </div>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col items-center py-16">
        {ServicesData.map((service, index) => (
          <div
            key={index} // Use the index as the key
            data-aos="fade-up"
            data-aos-delay={service.aosDelay}
            className="rounded-2xl bg-gray-100 dark:bg-semi cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-400 hover:text-white relative shadow-xl duration-high group w-[800px] mb-8 flex" // Added 'flex' class to make it flex container
          >
            <div className="h-[300px]">
              <img
                src={service.Image}
                alt=""
                className="h-[250px] w-[250px] rounded-md block mx-auto transform translate-y-5 -translate-x-20 group-hover:scale-105 duration-300 shadow-md"
              />
            </div>
            <div className="p-4  flex-1">
              {/* Adjusted to be a flex container */}
              <h1 className="text-semi dark:text-primary group-hover:text-white duration-high text-2xl font-semibold line-clamp-2">
                {service.name}
              </h1>
              <h1 className="text-7xl font-bold">{service.title}</h1>
              <div className="flex justify-start flex-col items-start mt-4">
                {" "}
                {/* Added margin top */}
                <p className="text-gray-800 group-hover:text-white duration-high text-lg line-clamp-2">
                  {" "}
                  {/* Added margin-right */}
                  {service.description}
                </p>
                <p className="text-gray-800  group-hover:text-white duration-high text-lg line-clamp-2 flex gap-2">
                  {" "}
                  {/* Added margin-right */}
                  <p className="font-semibold text-gray-700 flex">Price:</p>
                  {service.price}
                </p>
                <p className="text-gray-800 group-hover:text-white duration-high text-lg line-clamp-2 flex gap-3">
                  {" "}
                  {/* Removed unnecessary classes */}
                  <p className="font-semibold text-gray-700 flex">
                    Car Type:
                  </p>{" "}
                  {service.cartype}
                </p>
                <button
                  className="rounded-md mt-9 bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  onClick={scrollToForm}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div ref={formRef} className="pt-8">
        <Form />
      </div>
    </div>
  );
};

export default Packages;
