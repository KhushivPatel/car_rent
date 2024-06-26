import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import logo2 from "../../../public/images/logo_2.png";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Form from "../Component/Form";

// Menu links data
const MenuLinks = [
  { id: 1, name: "Home", link: "/Home" },
  { id: 2, name: "Services", link: "/Ser" },
  { id: 3, name: "Packages", link: "/Packages" },
  { id: 4, name: "About us", link: "/Aboutus" },
  { id: 5, name: "Contact us", link: "/Contactus" },
  { id: 6, name: "Blogs", link: "/Blogs" },
];

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [pageState, setPageState] = useState("Sign_in");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setPageState(user ? "MyAccount" : "Sign_in");
    });
  }, [auth]);

  return (
    // <div className="bg-white dark:bg-semi dark:text-white duration-200 relative z-40">
    //   <div className="py-2">
    //     <div className="container flex justify-between items-center">
    //       <div className="flex items-center gap-3">
    //         <Link
    //           to="/Home"
    //           className={`text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl ${
    //             location.pathname === "/Home" && "underline"
    //           }`}
    //         >
    //           <img
    //             src={theme === "dark" ? logo2 : logo}
    //             className="cursor-pointer h-14"
    //             alt="Logo"
    //           />
    //         </Link>
    //         <div className="lg:hidden">
    //           <button
    //             className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
    //             onClick={() => setIsMenuOpen(!isMenuOpen)}
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-6 w-6"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M4 6h16M4 12h16m-7 6h7"
    //               />
    //             </svg>
    //           </button>
    //           {isMenuOpen && (
    //             <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-500  hover:text-primary dark:hover:text-primary dark:text-white py-2 px-4 shadow-lg">
    //               {MenuLinks.map((link) => (
    //                 <li key={link.id}>
    //                   <Link
    //                     to={link.link}
    //                     className={`block py-2 font-semibold  text-semi hover:text-primary ${
    //                       location.pathname === link.link && "underline"
    //                     }`}
    //                     onClick={() => setIsMenuOpen(false)}
    //                   >
    //                     {link.name}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           )}
    //         </div>
    //         <div className="hidden lg:block">
    //           <ul className="flex items-center gap-4">
    //             {MenuLinks.map((link) => (
    //               <li key={link.id}>
    //                 <Link
    //                   to={link.link}
    //                   className={`inline-block px-4 font-semibold text-semi hover:text-primary dark:text-white dark:hover:text-primary duration-200 ${
    //                     location.pathname === link.link && "underline"
    //                   }`}
    //                 >
    //                   {link.name}
    //                 </Link>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div className="flex items-center">
    //           <div
    //             className={`inline-block px-4 font-semibold cursor-pointer text-black hover:text-primary dark:text-white dark:hover:text-primary duration-200 ${
    //               (location.pathname === "/Sign_in" ||
    //                 location.pathname === "/MyAccount") &&
    //               "text-semi underline border-b-solid border-b-white"
    //             }`}
    //             onClick={() =>
    //               navigate(pageState === "Sign_in" ? "/Sign_in" : "/MyAccount")
    //             }
    //           >
    //             {pageState === "Sign_in" ? "Sign In" : "MyAccount"}
    //           </div>
    //           <Link to="/Form">
    //             <li className="flex ml-4 px-3 font-semibold text-orange-50 hover:text-primary dark:text-white dark:hover:text-primary duration-200 h-fit bg-primary hover:bg-black rounded-full py-2 dark:bg-primary dark:hover:bg-white shadow-lg shadow-gray-400 dark:shadow-lg dark:shadow-zinc-700">
    //               <span>Booking</span>
    //             </li>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="cursor-pointer">
    //         {theme === "dark" ? (
    //           <BiSolidSun onClick={toggleTheme} className="text-2xl" />
    //         ) : (
    //           <BiSolidMoon onClick={toggleTheme} className="text-2xl" />
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="bg-white dark:bg-semi dark:text-white duration-200 relative z-40">
        <div className="py-2">
          <div className="container flex justify-between items-center">
            <div className="flex items-center">
              <Link
                to="/Home"
                className={`text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl ${
                  location.pathname === "/Home" && "underline"
                }`}
              >
                <img
                  src={theme === "dark" ? logo2 : logo}
                  className="cursor-pointer h-14"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex items-center mr-11 gap-3">
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                  {MenuLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={link.link}
                        className={`inline-block px-4 font-semibold text-semi hover:text-primary dark:text-white dark:hover:text-primary duration-200 ${
                          location.pathname === link.link && "underline"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center">
                <div
                  className={`inline-block px-4 font-semibold cursor-pointer text-black hover:text-primary dark:text-white dark:hover:text-primary duration-200 ${
                    (location.pathname === "/Sign_in" ||
                      location.pathname === "/MyAccount") &&
                    "text-semi underline border-b-solid border-b-white"
                  }`}
                  onClick={() =>
                    navigate(
                      pageState === "Sign_in" ? "/Sign_in" : "/MyAccount"
                    )
                  }
                >
                  {pageState === "Sign_in" ? "SignIn" : "MyAccount"}
                </div>
                <Link to="/Form">
                  <li className="flex ml-4 px-3 font-semibold text-orange-50 hover:text-primary dark:text-white dark:hover:text-primary duration-200 h-fit bg-primary hover:bg-black rounded-full py-2 dark:bg-primary dark:hover:bg-white shadow-lg shadow-gray-400 dark:shadow-lg dark:shadow-zinc-700">
                    <span>Booking</span>
                  </li>
                </Link>
              </div>
              {/* Responsive menu for small screens */}
              <div className="lg:hidden">
                <button
                  className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-500  hover:text-primary dark:hover:text-primary dark:text-white py-2 px-4 shadow-lg">
                    {MenuLinks.map((link) => (
                      <li key={link.id}>
                        <Link
                          to={link.link}
                          className={`block py-2 font-semibold  text-semi hover:text-primary ${
                            location.pathname === link.link && "underline"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="cursor-pointer">
              {theme === "dark" ? (
                <BiSolidSun onClick={toggleTheme} className="text-2xl" />
              ) : (
                <BiSolidMoon onClick={toggleTheme} className="text-2xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
