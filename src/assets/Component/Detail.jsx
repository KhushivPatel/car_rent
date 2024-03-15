import React, { useState } from "react";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = () => {
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
    <div className="flex  py-5">
      <div className="w-full md:w-[80%] lg:w-[60%] bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center">My Detail</h2>
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
              <label htmlFor="streetAddress" className="block font-medium mb-1">
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
              <label htmlFor="phoneNumber" className="block font-medium mb-1">
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
  );
};

export default Detail;
