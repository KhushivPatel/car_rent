import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import logo2 from "../images/logo_2.png";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Form from "../Component/Form"

// Menu links data
const MenuLinks = [
  { id: 1, name: "Home", link: "/Home" },
  { id: 2, name: "Services", link: "/" },
  { id: 3, name: "Packages", link: "/" },
  { id: 4, name: "About us", link: "/Aboutus" },
  { id: 5, name: "Contact us", link: "/Contactus" },
  { id: 6, name: "Bloges", link: "/Blog" },
];

const Navbar = ({ theme, setTheme }) => {
  // Handler for toggling theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [pageState, setPageState] = useState("Sign_in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("MyAccount");
      } else {
        setPageState("Sign_in");
      }
    });
  }, [auth]);

  return (
    <div className="bg-white dark:bg-semi dark:text-white duration-200 relative z-40">
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
                      className="inline-block px-4 font-semibold text-semi hover:text-primary dark:text-white dark:hover:text-primary duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`inline-block px-4 font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary duration-200 ${
                location.pathname === "/Sign_in" ||
                (location.pathname === "/MyAccount" &&
                  "text-white  border-b-solid border-b-white")
              }`}
              onClick={() =>
                navigate(pageState === "Sign_in" ? "/Sign_in" : "/MyAccount")
              }
            >
              {pageState === "Sign_in" ? "Sign In" : "MyAccount"}
            </div>

            {/* Booking button */}
            <Link to="/Form">
              <li className="flex ml-16 px-3 font-semibold text-orange-50 hover:text-primary dark:text-white dark:hover:text-primary duration-200 h-fit bg-primary hover:bg-black rounded-full py-2 dark:bg-primary dark:hover:bg-white shadow-lg shadow-gray-400 dark:shadow-lg dark:shadow-zinc-700">
                <span>Booking</span>
              </li>
            </Link>
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
