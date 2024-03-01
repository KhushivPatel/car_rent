import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./assets/Component/Navbar";
import Footer from "./assets/Component/Footer";
import Home from "./Pages/Home/Home";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Sign_up from "./Pages/Sign_in_up/Sign_up";
import Sign_in from "./Pages/Sign_in_up/Sign_in";
import Fpass from "./Pages/Sign_in_up/Fpass";
import Just from "./Pages/Sign_in_up/Just";
import MyAccount from "./Pages/Home/MyAccount";
import Contactus from "./Pages/Home/Contactus";

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/Home" element={<Home theme={theme} />} />
          <Route path="/Sign_up" element={<Sign_up theme={theme} />} />
          <Route path="/Sign_in" element={<Sign_in theme={theme} />} />
          <Route path="/Fpass" element={<Fpass theme={theme} />} />
          <Route path="/Contactus" element={<Contactus theme={theme} />} />
          <Route path="/MyAccount" element={<MyAccount theme={theme} />} />
        </Routes>
        <Footer theme={theme} setTheme={setTheme} />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default App;
