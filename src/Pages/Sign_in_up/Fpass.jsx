import Auth from "../../assets/Component/Auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { MdEmail } from "react-icons/md";

const Fpass = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password email");
    }
  };

  return (
    <section className="dark:bg-semi h-full">
      <div className="flex justify-center flex-wrap py-8 items-center max-w-6xl mx-auto shadow-lg rounded-2xl bg-primary">
        <div className="md:w-[68%] lg:w-[54%]">
          <h1 className="text-7xl lg:text-7xl font-semibold font-serif" data-aos="fade-up">
            Lost access?
          </h1>
          <h3 className="text-white text-2xl font-serif" data-aos="fade-up" data-aos-delay="600">
            Enter your email address, and we'll send you a link to reset your password and regain access.
          </h3>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] bg-white bg-opacity-50 h-fit px-5 mb-2 rounded-xl">
          <form onSubmit={onSubmit}>
            <h1 className="text-center font-semibold text-3xl mt-3 mb-3 text-semi">Forgot Password</h1>
            <div className="relative mt-6 mb-6">
              <MdEmail className="absolute mt-3.5 ml-2 text-base cursor-pointer" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                className="w-full px-8 py-2 text-gray-700 bg-white border-gray-300 rounded-full border transition ease-in-out"
              />
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm">
              <p className="mb-6">
                Don't have an account?{" "}
                <Link to="/Sign_up" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1">
                  Register
                </Link>
              </p>
              <p className="text-red-500 hover:text-red-800 transition duration-200 ease-in-out">
                <Link to="/Sign_in">Sign in</Link>
              </p>
            </div>
            <button
              className="w-full bg-primary px-7 py-3 text-white text-sm font-medium uppercase rounded-full shadow-md hover:bg-semi transition duration-150 ease-in-out hover:shadow-lg active:bg-semi"
              type="submit"
            >
              Send Reset Password
            </button>
          </form>
          <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <Auth />
        </div>
      </div>
    </section>
  );
};

export default Fpass;