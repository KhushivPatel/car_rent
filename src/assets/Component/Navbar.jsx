import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import logo2 from "../images/logo_2.png";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

// Menu links data
const MenuLinks = [
  { id: 1, name: "Home", link: "/Home" },
  { id: 2, name: "Services", link: "/" },
  { id: 3, name: "Packages", link: "/" },
  { id: 4, name: "About us", link: "/" },
  { id: 5, name: "Contact us", link: "/" },
  { id: 6, name: "Bloges", link: "/" },
  { id: 7, name: "My Account", link: "/" },
];

const Navbar = ({ theme, setTheme }) => {
  // Handler for toggling theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-black dark:text-white duration-200 relative z-40">
      <div className="py-2">
        <div className="container flex justify-between items-center">
          {/* Logo and link section */}
          <div className="flex items-center gap-3">
            <Link
              to="/Home"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              {/* Conditional rendering of logo based on theme */}
              <img
                src={theme === "dark" ? logo2 : logo}
                className="cursor-pointer h-14"
              />
            </Link>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.link}
                      className="inline-block px-4 font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Booking button */}
            <li className="flex ml-16 px-3 font-semibold text-orange-50 hover:text-primary dark:text-white dark:hover:text-primary duration-200 h-fit bg-primary hover:bg-black rounded-full py-2 dark:bg-primary dark:hover:bg-white shadow-lg shadow-gray-400 dark:shadow-lg dark:shadow-zinc-700">
              <span>Booking</span>
            </li>
          </div>
          {/* Dark mode toggle */}
          <div>
            {theme === "dark" ? (
              <BiSolidSun onClick={toggleTheme} className="text-2xl" />
            ) : (
              <BiSolidMoon onClick={toggleTheme} className="text-2xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
