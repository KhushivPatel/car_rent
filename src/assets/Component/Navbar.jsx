import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/Home",
  },
  {
    id: 2,
    name: "Services",
    link: "/Shop",
  },
  {
    id: 3,
    name: "Packages",
    link: "/About",
  },
  {
    id: 4,
    name: "About us",
    link: "/Blog",
  },
  {
    id: 5,
    name: "Contact us",
    link: "/",
  },
  {
    id: 6,
    name: "Bloges",
    link: "/Shop",
  },
  {
    id: 7,
    name: "My Account",
    link: "/About",
  },
];

// main
const Navbar = () => {
  // logic

  // structure
  return (
    <>
      <div className="  bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 shadow-md">
        <div className="py-4">
          <div className="container flex justify-between items-center  ">
            {/* logo and link section */}
            <div className="flex  items-center gap-4">
              <Link
                to="/Home"
                className=" text-orange-600 font-semibold tracking-widest text-2xl uppercase sm:text-3xl "
              >
                carrent
              </Link>
              {/* Menu Items */}
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4 ">
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <Link
                        to={data.link}
                        className="inline-block px-4 font-semibold text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 duration-200"
                      >
                        {" "}
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <li className="flex  px-4 font-semibold text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 duration-200 h-fit bg-orange-600 hover:bg-black rounded-full py-2 dark:bg-orange-600 dark:hover:bg-white">
                <span>Booking</span>
              </li>
            </div>
            {/* darkmode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
