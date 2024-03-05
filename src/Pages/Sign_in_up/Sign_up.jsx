import { useState } from "react";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Auth from "../../assets/Component/Auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import su from "../../assets/images/su.png";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Sign_up = () => {
  const collectionRef = collection(db, "users");
  const [ShowPass, setShowPass] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = FormData;
  const navigate = useNavigate();

  function onchange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    // console.log(password);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //updateProfile(auth.currentUser, { displayName: name });
      const user = userCredential.user;
      console.log(user);
      await addDoc(collectionRef, {
        name: FormData.name,
        email: FormData.email,
      });

      navigate("/");
      toast.success("Signup success");
    } catch (error) {
      toast.error("Something is wrong with Registration");
    }
  }

  return (
    <section className=" dark:bg-semi h-full">
      <div
        className="flex justify-center flex-wrap  py-8 items-center  max-w-6xl mx-auto   shadow-lg   rounded-2xl bg-primary   "
        // style={{
        //   backgroundImage: `url(${su})`,
        // }}
      >
        {/* <div
          className="w-full md:w-[68%] lg:w-[52%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${su})`,
            height: "400px",
          }} // Adjusted height
        ></div> */}

        <div className="w-full md:w-[67%] lg:w-[40%]  bg-white bg-opacity-50 h-fit  px-5 mb-2 rounded-xl">
          <form>
            <h1 className="text-center font-semibold text-3xl mt-3 mb-4 text-white dark:text-semi ">
              Sign Up
            </h1>
            <div>
              <FaUserAlt className="absolute mt-3.5 ml-2   text-sm cursor-pointer" />

              <input
                type="text"
                id="name"
                value={FormData.name}
                onChange={onchange}
                // autocomplete="off"
                placeholder=" Enter your name"
                className=" w-full px-8 py-2   text-gray-700 bg-white border-gray-300 rounded-full border transition ease-in-out "
              />
            </div>

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
            <div className="flex  whitespace-nowrap text-md  justify-center mb-4">
              {/* <div className="flex justify-center whitespace-nowrap text-sm">
                have an account ?
                <button className="mb-6">
                  <Link
                    to="/Sign_in"
                    className="text-white  scale-105 transition duration-200 ease-in-out ml-1"
                  >
                    Sign In
                  </Link>
                </button>
              </div> */}
              <p className="text-red-500 hover:text-red-800 transition duration-200 ease-in-out ">
                <Link to="/Fpass">Forgot Password?</Link>
              </p>
            </div>
            <button
              className="w-full bg-primary px-7 py-3 text-white text-sm font-medium uppercase rounded-full shadow-md hover:bg-semi transition duration-150 ease-in-out hover:shadow-lg active:bg-semi "
              type="submit"
              onClick={onSubmit}
            >
              Sign Up
            </button>
          </form>
          <div className=" flex items-center my-4 before:border-t  before:flex-1  before:border-gray-500  after:border-t  after:flex-1  after:border-gray-500">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <Auth />
        </div>
        <div className="md:w-[68%] lg:w-[54%] text-end   ">
          <h1
            className="text-5xl lg:text-7xl font-semibold font-serif"
            data-aos="fade-up"
          >
            One Of Us?
          </h1>
          <h3
            className="text-white text-2xl font-serif"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Unlock your account's full potential. Sign in now
          </h3>
          <button className=" mt-7">
            <Link
              to="/Sign_in"
              className="rounded-full bg-white hover:bg-semi hover:text-white transition duration-500 py-2 px-6 text-semi"
            >
              Sign-In
            </Link>
          </button>
          {/* <img src="img/signin1.jpg" className=" object-cover w-full"></img> */}
        </div>
      </div>
    </section>
  );
};

export default Sign_up;
