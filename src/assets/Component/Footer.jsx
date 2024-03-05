import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import logo2 from "../images/logo_2.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Services",
    link: "/",
  },
  {
    title: "Packages",
    link: "/",
  },
];
const Footerlink = [
  {
    title: "About us",
    link: "/#",
  },
  {
    title: "Contact Us",
    link: "/",
  },
  {
    title: "Blogs",
    link: "/",
  },
];

const Footer = ({ theme, setTheme }) => {
  return (
    <div className="dark:bg-semi bg-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <Link
              to="/Home"
              className=" text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl  "
            >
              {theme == "dark" ? (
                <img src={logo2} className={"cursor-pointer h-14"} />
              ) : (
                <img src={logo} className={"cursor-pointer h-14"} />
              )}
            </Link>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-gray-500 mt-4">
              Drive Your Dreams: Where Every Journey Begins
            </p>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="inline-block bg-primary text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              click here
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 dark:text-primary">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 dark:text-primary">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {Footerlink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3 dark:text-primary">
                Address
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="dark:text-primary" />
                  <p className="dark:text-white"> Bhopal</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt className="dark:text-primary" />
                  <p className="dark:text-white">+91 1234567890</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300 dark:text-white dark:hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200 dark:text-white dark:hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200 dark:text-white dark:hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
