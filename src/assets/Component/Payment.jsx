import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
// import { deleteDoc, doc } from "firebase/firestore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import GooglePayButton from "@google-pay/button-react";
// import payment from "../../../public/images/payment.jpeg";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [subtotal, setSubtotal] = useState(location.state.subtotal ?? []);
  const [bookings, setBookings] = useState(location.state.bookings ?? []);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online");

  useEffect(() => {
    const subtotalValue = bookings.reduce((acc, booking) => {
      const carPrice = booking.carPrice
        ? booking.carPrice.replace(/,/g, "")
        : 0;
      return acc + parseInt(carPrice);
    }, 0);

    setSubtotal(subtotalValue);
  }, [bookings]);

  // Define lists for country, state, and town options
const countries = [
  "India"
];
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
const towns = [
  "Agartala",
  "Ahmedabad",
  "Agra",
  "Ahmedabad",
  "Aizawl",
  "Almora",
  "Amritsar",
  "Asansol",
  "Bangalore",
  "Bhagalpur",
  "Bhilai",
  "Bhopal",
  "Bhubaneswar",
  "Bhavnagar",
  "Bikaner",
  "Bokaro",
  "Chandigarh",
  "Chennai",
  "Churachandpur",
  "Coimbatore",
  "Cuttack",
  "Dehradun",
  "Delhi",
  "Dharamshala",
  "Dibrugarh",
  "Diu",
  "Dimapur",
  "Durgapur",
  "Faridabad",
  "Gangtok",
  "Gaya",
  "Ghaziabad",
  "Goa",
  "Guntur",
  "Gurgaon",
  "Guwahati",
  "Gwalior",
  "Haridwar",
  "Hubli",
  "Hyderabad",
  "Imphal",
  "Indore",
  "Itanagar",
  "Jabalpur",
  "Jaipur",
  "Jalandhar",
  "Jammu",
  "Jamshedpur",
  "Jodhpur",
  "Kakching",
  "Kanpur",
  "Karimnagar",
  "Kavaratti",
  "Kochi",
  "Kohima",
  "Kollam",
  "Kota",
  "Kozhikode",
  "Kullu",
  "Kumarakom",
  "Kurnool",
  "Leh",
  "Ludhiana",
  "Lucknow",
  "Lunglei",
  "Madurai",
  "Mahe",
  "Mandi",
  "Mangalore",
  "Margao",
  "Mumbai",
  "Muzaffarpur",
  "Mysore",
  "Nagpur",
  "Nainital",
  "Nashik",
  "Nellore",
  "Nizamabad",
  "Noida",
  "Patiala",
  "Patna",
  "Panaji",
  "Panchkula",
  "Panipat",
  "Puri",
  "Port Blair",
  "Raipur",
  "Rajkot",
  "Ranchi",
  "Rishikesh",
  "Rourkela",
  "Saiha",
  "Salem",
  "Shillong",
  "Silchar",
  "Siliguri",
  "Silvassa",
  "Srinagar",
  "Surat",
  "Tezpur",
  "Thane",
  "Thiruvananthapuram",
  "Thrissur",
  "Tiruchirappalli",
  "Tura",
  "Udaipur",
  "Uttarkashi",
  "Vadodara",
  "Vasco da Gama",
  "Vijayawada",
  "Visakhapatnam",
  "Warangal",
  "Yamunanagar",
  "Yanam",
  "Yanam",
  "Yanam"
];


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

  const handlePlaceOrder = async () => {
    try {
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
      if (!paymentMethod) {
        toast.error("Please select a payment method.");
        return;
      }

      if (paymentMethod === "online") {
        console.log("Redirecting to payment gateway...");
        setTimeout(() => {
          console.log("Payment successful!");
          // Clear booking data from the state after successful payment
          setBookings([]);
          // Show success toast message
          toast.success("Order placed successfully!", {
            onClose: () => {
              navigate("/Home");
            },
          });
        }, 2000); // Simulating 2 seconds delay for payment processing
      } else if (paymentMethod === "cod") {
        // Save booking details and payment method to Firebase Payment collection
        await Promise.all(
          bookings.map(async (booking) => {
            const docRef = await addDoc(collection(db, "Payment"), {
              ...booking,
              paymentMethod: "cod",
            });
            console.log("Document written with ID: ", docRef.id);

            // Delete booking from the Booking collection after moving to Payment
            await deleteDoc(doc(db, "Booking", booking.id));
          })
        );

        // Clear booking data from the state
        setBookings([]);

        // Show success toast message
        toast.success("Order placed successfully!", {
          onClose: () => {
            navigate("/Home");
          },
        });
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("An error occurred while placing the order.");
    }
  };

  return (
    <>
      <div className="dark:bg-semi pb-12 object-top">
        <div className="container mx-auto  ">
          <p className="text-xl dark:text-gray-400 rounded-md py-4  ">
            <span className="font-bold">Note:</span> Maximum Distance Limit :
            250 km /day
          </p>
          <h1 className="text-xl font-bold   dark:text-white rounded-md py-4  ">
            Billing & Shipping
          </h1>

          <div className="flex py-5 mb-7 dark:text-white">
            <div className="relative w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                  fill up the form
                </h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                      <label
                        htmlFor="name"
                        className="block w-24 font-medium mr-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="input flex-grow bg-gray-200 rounded-md h-9 "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="   Enter your name"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="streetAddress"
                        className="block w-24 font-medium mr-2"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        className="input flex-grow bg-gray-200 rounded-md h-9 "
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        placeholder="   Enter your street address"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="country"
                        className="block w-24 font-medium mr-2"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        className="input flex-grow bg-gray-200 rounded-md h-9"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      >
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="state"
                        className="block w-24 font-medium mr-2"
                      >
                        State
                      </label>
                      <select
                        id="state"
                        className="input flex-grow bg-gray-200 rounded-md h-9"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      >
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="town"
                        className="block w-24 font-medium mr-2"
                      >
                        Town
                      </label>
                      <select
                        id="town"
                        className="input flex-grow bg-gray-200 rounded-md h-9"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        required
                      >
                        <option value="">Select Town</option>
                        {towns.map((town, index) => (
                          <option key={index} value={town}>
                            {town}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="pin"
                        className="block w-24 font-medium mr-2"
                      >
                        Pin Code
                      </label>
                      <input
                        type="text"
                        id="pin"
                        className="input flex-grow bg-gray-200 rounded-md h-9 "
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="  Enter your pin code"
                        required
                      />
                    </div>
                    {/* <div className="flex items-center">
                      <label
                        htmlFor="phoneNumber"
                        className="block w-24 font-medium mr-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        className="input flex-grow bg-gray-200 rounded-md h-9 "
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="  Enter your phone number"
                        required
                      />
                    </div> */}
                    <div className="flex items-center">
                      <label
                        htmlFor="phoneNumber"
                        className="block w-24 font-medium mr-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        className="input flex-grow bg-gray-200 rounded-md h-9"
                        value={phoneNumber}
                        onChange={(e) => {
                          // Restrict input to numeric characters only
                          const input = e.target.value.replace(/\D/g, "");
                          // Limit the input to 10 characters
                          const maxLength = 10;
                          const truncatedInput = input.slice(0, maxLength);
                          setPhoneNumber(truncatedInput);
                        }}
                        placeholder="Enter your phone number"
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="hidden md:block md:w-1/4 flex justify-center items-center">
                  
                    <img
                      src={payment}
                      alt="Image"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div> */}
                </form>
              </div>
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
            {/* Payment options */}
            <div className="grid grid-cols-1 gap-6">
              <label className="flex gap-3">
                <input
                  type="radio"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                  className="dark:text-white gap-3 flex"
                />
                <p className="dark:text-white gap-3">Online Payment</p>
              </label>
              {paymentMethod === "online" && (
                <div className="flex flex-col justify-center items-center space-y-8">
                  <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: "CARD",
                          parameters: {
                            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                            allowedCardNetworks: ["MASTERCARD", "VISA"],
                          },
                          tokenizationSpecification: {
                            type: "PAYMENT_GATEWAY",
                            parameters: {
                              gateway: "example",
                              gatewayMerchantId: "exampleGatewayMerchantId",
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: "12345678901234567890",
                        merchantName: "Demo Merchant",
                      },
                      transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPriceLabel: "Total",
                        totalPrice: "100.00",
                        currencyCode: "USD",
                        countryCode: "US",
                      },
                    }}
                    onLoadPaymentData={(paymentRequest) => {
                      console.log("load payment data", paymentRequest);
                    }}
                  />
                </div>
              )}
              <label className="flex gap-3">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="dark:text-white gap-3"
                />
                <p className="dark:text-white gap-3">Cash on Delivery</p>
              </label>
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
