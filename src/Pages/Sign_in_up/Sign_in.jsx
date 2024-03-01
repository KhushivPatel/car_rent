import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { VscEyeClosed } from "react-icons/vsc";
import Auth from "../../assets/Component/Auth";
import { VscEye } from "react-icons/vsc";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../Firebase";
import { MdEmail } from "react-icons/md";
import su from "../../assets/images/su.png";
import { RiLockPasswordFill } from "react-icons/ri";

const Sign_in = () => {
  const [ShowPass, setShowPass] = useState(false);
  const [FormData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = FormData;
  const navigate = useNavigate();
  function onchange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    console.log(email);
    try {
      const auth = getAuth();
      // console.log (auth)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        FormData.email,
        FormData.password
      );
      if (userCredential.user) {
        navigate("/");
      }
      toast.success("user enter successfully");
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }

  return (
    <section className=" dark:bg-black  h-full">
      <div
        className="flex justify-center flex-wrap  py-8 items-center  max-w-6xl mx-auto   shadow-lg   rounded-2xl bg-primary   "
        // style={{
        //   backgroundImage: `url(${su})`,
        // }}
      >
        <div className="md:w-[68%] lg:w-[54%]    ">
          <h1
            className="text-5xl lg:text-7xl font-semibold font-serif"
            data-aos="fade-up"
          >
            New Here?
          </h1>
          <h3
            className="text-white text-2xl font-serif"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Ready to get started? Sign up now and create your account.
          </h3>
          <button className=" mt-7">
            <Link
              to="/Sign_up"
              className="rounded-full bg-white hover:bg-black hover:text-primary transition duration-500 py-2 px-6 text-black"
            >
              Sign-Up
            </Link>
          </button>
          {/* <img src="img/signin1.jpg" className=" object-cover w-full"></img> */}
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]  bg-white bg-opacity-50 h-fit  px-5 mb-2 rounded-xl">
          <form>
            <h1 className="text-center font-semibold text-3xl mt-3 mb-4 text-black ">
              Sign In
            </h1>
            <div className="relative mt-6 mb-6">
              <MdEmail className="absolute mt-3.5 ml-2 text-base cursor-pointer" />
              <input
                type="email"
                id="email"
                value={FormData.email}
                onChange={onchange}
                placeholder="Enter your mail"
                className=" w-full px-8 py-2  text-gray-700 bg-white border-gray-300 rounded-full border transition ease-in-out "
              />
            </div>
            <div className="relative mt-6 mb-6">
              <RiLockPasswordFill className="absolute mt-3.5 ml-2   text-md cursor-pointer" />
              <input
                type={ShowPass ? "text" : "password"}
                id="password"
                value={FormData.password}
                onChange={onchange}
                placeholder="Enter your Password"
                className="w-full px-8 py-2  text-gray-700 bg-white border-gray-300 rounded-full border transition ease-in-out "
              />
              {ShowPass ? (
                <VscEyeClosed
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPass((prevState) => !prevState)}
                />
              ) : (
                <VscEye
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPass((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-center whitespace-nowrap text-md mb-4">
              {/* <p className="mb-6">
                do not have account ?
                <Link
                  to="/Sign_up"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p> */}
              <p className="text-red-500 hover:text-red-800 transition duration-200 ease-in-out ">
                <Link to="/Fpass">Forgot Password?</Link>
              </p>
            </div>
            <button
              className="w-full bg-primary px-7 py-3 text-white text-sm font-medium uppercase rounded-full shadow-md hover:bg-black transition duration-150 ease-in-out hover:shadow-lg active:bg-black "
              type="submit"
              onClick={onSubmit}
            >
              Sign In
            </button>
          </form>
          <div className=" flex items-center my-4 before:border-t  before:flex-1  before:border-gray-500  after:border-t  after:flex-1  after:border-gray-500">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <Auth />
        </div>
      </div>
    </section>
  );
};

export default Sign_in;
