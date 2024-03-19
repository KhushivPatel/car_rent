import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { toast } from "react-toastify";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { deleteDoc, doc, query, updateDoc, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { MdDelete } from "react-icons/md";

const MyAccount = () => {
  const [subtotal, setSubtotal] = useState(0); // Initialize subtotal state
  const [changeDetail, setChangeDetail] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  //

  useEffect(() => {
    if (auth.currentUser) {
      setFormData({
        name: auth.currentUser.displayName || "",
        email: auth.currentUser.email || "",
      });
    }
  }, [auth.currentUser]);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Fixed signOut call
      navigate("/"); // Redirect to home or any other route after sign-out
      toast.success("You have been signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("An error occurred while signing out. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  // console.log(auth.currentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (auth.currentUser.displayName !== formData.name) {
        await updateProfile(auth.currentUser, {
          displayName: formData.name,
        });

        const docRef = doc(db, "users", auth.currentUser.email); //uid
        await updateDoc(docRef, { name: formData.name });
      }
      toast.success("Profile is updated");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Could not update the profile details");
    }
  };

  // Profile picture upload related state and functions
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // const listingRef = collection(db, "listings");
    // console.log(auth.currentUser.uid);
    // const q = query(
    //   listingRef,
    //   where("userRef", "==", auth.currentUser.uid),

    //   orderBy("timestamp", "desc")
    // );
    // console.log(listingRef);
    // const querySnap = await getDocs(q);
    const fetchData = async () => {
      try {
        const value = collection(db, "Booking");

        const q = query(value, where("Email", "==", auth.currentUser.email));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData();
  }, []);

  // kam nu

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Booking", id)); // Fix the reference by providing the document ID
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  // kam nu
  // const subtotal = bookings.reduce(
  //   (acc, booking) => acc + parseInt(booking.carPrice.replace(/,/g, "")),
  //   0
  // );
  useEffect(() => {
    // Calculate subtotal
    const subtotalValue = bookings.reduce((acc, booking) => {
      // Check if booking.carPrice exists and is not null or undefined
      const carPrice = booking.carPrice
        ? booking.carPrice.replace(/,/g, "")
        : 0;
      return acc + parseInt(carPrice);
    }, 0);

    setSubtotal(subtotalValue); // Update subtotal state
  }, [bookings]);

  return (
    <>
      <div className=" dark:bg-semi pt-12 pb-12">
        <section className="flex justify-center flex-wrap  py-9 items-center  max-w-6xl mx-auto   shadow-lg   rounded-2xl bg-primary ">
          <div className="md:w-[68%] lg:w-[54%]    ">
            <h1
              className="text-5xl lg:text-7xl font-semibold font-serif"
              data-aos="fade-up"
            >
              Go out ?
            </h1>
            <h3
              className="text-white text-2xl font-serif"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Ready to go out ? Sign out now.
            </h3>
            <button className=" mt-7">
              <Link
                onClick={handleSignOut}
                to="/Sign_up"
                className="rounded-full bg-white hover:bg-semi hover:text-primary transition duration-500 py-2 px-6 text-black"
              >
                Sign Out
              </Link>
            </button>
            {/* <img src="img/signin1.jpg" className=" object-cover w-full"></img> */}
          </div>
          {/*  */}
          {/* Profile Details Section */}
          <div
            className="w-full md:w-[67%] lg:w-[40%]  bg-white bg-opacity-50 h-fit pt-6 px-5 mb-2 rounded-xl"
            data-aos="flip-up"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex items-center">
                <span className="mr-2 text-lg text-black h-12 font-bold dark:text-black">
                  Name:
                </span>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ${
                    changeDetail && "bg-red-200 focus:bg-red-200 "
                  }`}
                  disabled={!changeDetail}
                />
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-lg text-black h-12 font-bold dark:text-black">
                  Email:
                </span>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"
                />
              </div>
              <div className="justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                <p className="flex items-center text-black dark:text-black">
                  Do you want to change your name?
                </p>
              </div>
              <button
                onClick={() => {
                  if (changeDetail) handleSubmit();
                  setChangeDetail((prevState) => !prevState);
                }}
                className="text-white hover:text-primary w-full bg-primary hover:bg-semi text-lg rounded-2xl py-1.5 transition duration-200 ease-in-out cursor-pointer  mb-8"
              >
                {changeDetail ? "Apply Change" : "Edit"}
              </button>
            </form>
          </div>
        </section>
        {/*  */}
        {/* <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-3xl font-bold  text-center dark:text-primary mb-7">
            My bookings
          </h1>
          <div className="justify-center ">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  className="bg-white rounded-lg shadow-md p-6 mb-4"
                  key={booking.id}
                >
                  <img
                    src={booking.carImage}
                    alt={booking.selectedCar}
                    className=" w-[200px] h-[120px] border object-cover mr-4"
                  />

                  <p className="mb-2 text-xl font-semibold">
                    <span className="font-semibold">Car:</span>{" "}
                    {booking.selectedCar}
                  </p>
                  <p className="mb-2 font-semibold">
                    <span className="font-semibold">Pickup Place:</span>{" "}
                    {booking.selectedPickupPlace}
                  </p>
                  <p className="mb-2 font-semibold">
                    <span className="font-semibold">Drop-off Place:</span>{" "}
                    {booking.selectedDropoffPlace}
                  </p>
                  <p className="mb-2 font-semibold">
                    <span className="font-semibold">Package:</span>{" "}
                    {booking.selectedPackage}
                  </p>
                  {booking.pickupdate && (
                    <p className="text-md font-semibold mb-2">
                      Pickup Date:{" "}
                      {new Date(
                        booking.pickupdate.seconds * 1000
                      ).toLocaleString()}
                    </p>
                  )}
                  {booking.dropoffdate && (
                    <p className="text-md font-medium mb-2">
                      Drop-off Date:{" "}
                      {new Date(
                        booking.dropoffdate.seconds * 1000
                      ).toLocaleString()}
                    </p>
                  )}

                  <p className="ml-auto text-gray-500">{booking.carPrice}</p>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => handleDelete(booking.id)}
                  >
                    <MdDelete className="text-2xl" />
                  </button>
                </div>
              ))
            ) : (
              <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md p-6 mb-4 text-center ">
                <p className="text-xl text-red-500">No bookings found😕</p>
              </div>
            )}
          </div>
        </div> */}

        <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-3xl font-bold text-center dark:text-primary mb-7">
            My bookings
          </h1>
          <div className="justify-center   ">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  className="bg-white  dark:bg-slate-500 rounded-lg shadow-md p-6 mb-4 flex items-center justify-between"
                  key={booking.id}
                >
                  <div className="flex items-center">
                    <img
                      src={booking.carImage}
                      alt={booking.selectedCar}
                      className="w-[200px] h-[120px] border object-cover mr-4"
                    />

                    <div>
                      <p className="mb-2 text-xl font-semibold dark:text-white">
                        <span className="font-semibold text-gray-500 dark:text-black">
                          Car:
                        </span>{" "}
                        {booking.selectedCar}
                      </p>
                      <p className="mb-2 font-semibold dark:text-white">
                        <span className="font-semibold text-gray-500 dark:text-black">
                          Pickup Place:
                        </span>{" "}
                        {booking.selectedPickupPlace}
                      </p>
                      <p className="mb-2 font-semibold dark:text-white">
                        <span className="font-semibold text-gray-500 dark:text-black">
                          Drop-off Place:
                        </span>{" "}
                        {booking.selectedDropoffPlace}
                      </p>
                      <p className="mb-2 font-semibold dark:text-white">
                        <span className="font-semibold text-gray-500 dark:text-black">
                          Package:
                        </span>{" "}
                        {booking.selectedPackage}
                      </p>
                      {booking.pickupdate && (
                        <p className="text-md font-semibold mb-2 dark:text-white">
                          <span className="font-semibold text-gray-500 dark:text-black">
                            Pickup Date:{" "}
                          </span>
                          {new Date(
                            booking.pickupdate.seconds * 1000
                          ).toLocaleString()}
                        </p>
                      )}
                      {booking.dropoffdate && (
                        <p className="text-md font-medium mb-2 dark:text-white">
                          <span className="font-semibold text-gray-500 dark:text-black">
                            Drop-off Date:{" "}
                          </span>
                          {new Date(
                            booking.dropoffdate.seconds * 1000
                          ).toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-black  text-2xl font-semibold">Price=</p>
                    <p className="text-black  text-2xl font-semibold">
                      {booking.carPrice}
                    </p>
                    {/* You can calculate subtotal here */}
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => handleDelete(booking.id)}
                  >
                    <MdDelete className="text-2xl" />
                  </button>
                </div>
              ))
            ) : (
              <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md p-6 mb-4 text-center dark:bg-gray-300 ">
                <p className="text-xl text-red-500">No bookings found😕</p>
              </div>
            )}
            {bookings.length > 0 && (
              <div className="bg-white  dark:bg-slate-400 rounded-lg shadow-md p-6 mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold dark:text-white">
                    Subtotal
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold  dark:text-white">
                    ₹ {subtotal}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={ {
              pathname: "/Payment",
              state: { subtotal: subtotal, bookings: bookings },
            } }
            onClick={(e)=>{
                e.preventDefault();
                navigate("/Payment", {state: {subtotal, bookings }})
            }}
          >
            {console.log(bookings)}
            <button className="bg-primary hover:bg-yellow-500 justify-center flex items-center text-center text-gray-900 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default MyAccount;
