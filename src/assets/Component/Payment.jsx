import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
// import { deleteDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const Payment = () => {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = collection(db, "Booking");
        const querySnapshot = await getDocs(value);
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

  useEffect(() => {
    const subtotalValue = bookings.reduce((acc, booking) => {
      const carPrice = booking.carPrice
        ? booking.carPrice.replace(/,/g, "")
        : 0;
      return acc + parseInt(carPrice);
    }, 0);

    setSubtotal(subtotalValue);
  }, [bookings]);

  // const handlePlaceOrder = async () => {
  //   try {
  //     // Save booking details to Firebase Payment collection
  //     await Promise.all(
  //       bookings.map(async (booking) => {
  //         const docRef = await addDoc(collection(db, "Payment"), booking);
  //         console.log("Document written with ID: ", docRef.id);

  //         // Delete booking from the Booking collection after moving to Payment
  //         await deleteDoc(doc(db, "Booking", booking.id));
  //       })
  //     );

  //     // Clear booking data from the state
  //     setBookings([]);

  //     // Show success toast message
  //     toast.success("Order placed successfully!", {
  //       onClose: () => {
  //         // console.log("hi");
  //         // Navigate back to myaccount page after toast is closed
  //         navigate("/Home");
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // };

  const handlePlaceOrder = async () => {
    try {
      // Save booking details and form data to Firebase Payment collection
      await Promise.all(
        bookings.map(async (booking) => {
          const paymentData = {
            ...booking,
            name,
            country,
            streetAddress,
            town,
            state,
            pin,
            phoneNumber,
          };
          const docRef = await addDoc(collection(db, "Payment"), paymentData);
          console.log("Document written with ID: ", docRef.id);

          // Delete booking from the Booking collection after moving to Payment
          await deleteDoc(doc(db, "Booking", booking.id));
        })
      );

      // Clear booking data from the state
      setBookings([]);

      // Reset form fields
      setName("");
      setCountry("");
      setStreetAddress("");
      setTown("");
      setState("");
      setPin("");
      setPhoneNumber("");

      // Show success toast message
      toast.success("Order placed successfully!", {
        onClose: () => {
          navigate("/Home");
        },
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // kam nu upper nu

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (
      !name ||
      !country ||
      !streetAddress ||
      !town ||
      !state ||
      !pin ||
      !phoneNumber
    ) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await addDoc(collection(db, "Details"), {
        name: name,
        country: country,
        streetAddress: streetAddress,
        town: town,
        state: state,
        pin: pin,
        phoneNumber: phoneNumber,
      });
      toast.success("Form submitted successfully!");
      // Reset form fields
      setName("");
      setCountry("");
      setStreetAddress("");
      setTown("");
      setState("");
      setPin("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className="dark:bg-semi pb-12">
        <div className="container mx-auto px-4 ">
          <p className="text-xl dark:text-gray-400 rounded-md py-4  ">
            <span className="font-bold">Note:</span> Maximum Distance Limit :
            250 km /day
          </p>
          <h1 className="text-xl font-bold   dark:text-white rounded-md py-4  ">
            Billing & Shipping
          </h1>
          {/* details start */}
          <div className="flex  py-5">
            <div className="w-full md:w-[80%] lg:w-[60%] bg-gray-200 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                My Detail
              </h2>
              <form onSubmit={handleSubmit} className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block font-medium mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="input"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="streetAddress"
                      className="block font-medium mb-1"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="streetAddress"
                      className="input"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="town" className="block font-medium mb-1">
                      Town
                    </label>
                    <input
                      type="text"
                      id="town"
                      className="input"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block font-medium mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="input"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pin" className="block font-medium mb-1">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pin"
                      className="input"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block font-medium mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      className="input"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* details end */}
          <div className="gap-8">
            <div className="flex flex-col">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div
                    className="bg-white rounded-lg shadow-lg dark:bg-slate-500 p-6 mb-4 flex items-center justify-between"
                    key={booking.id}
                  >
                    <div className="flex items-center">
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
                    {/* Move the price display to the right corner */}
                    <div>
                      <p className="text-xl font-semibold dark:text-white">
                        Price= {booking.carPrice}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6 mb-4 text-center">
                  <p className="text-xl text-red-500">No bookings found😕</p>
                </div>
              )}
              <div>
                {bookings.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex items-center justify-between dark:bg-slate-400">
                    <div>
                      <p className="text-xl font-semibold dark:text-white">
                        Subtotal
                      </p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold dark:text-white">
                        ₹ {subtotal}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-primary text-white px-4 py-2 rounded-md mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
