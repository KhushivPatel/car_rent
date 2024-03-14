import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
// import { deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";


const Payment = () => {
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
    const subtotalValue = bookings.reduce(
      (acc, booking) => acc + parseInt(booking.carPrice.replace(/,/g, "")),
      0
    );
    setSubtotal(subtotalValue);
  }, [bookings]);

  return (
    <>
      <div className="dark:bg-semi pb-12">
        <div className="container mx-auto px-4 ">
          <h1 className="text-3xl font-bold text-center bg-primary rounded-md py-4  mb-7">
            My Billing
          </h1>
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
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xl font-semibold">Subtotal</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">₹ {subtotal}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
