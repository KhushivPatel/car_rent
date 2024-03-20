import React, { useState } from "react";
import { db } from "../../Firebase";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import { addDoc, collection } from "firebase/firestore";

const Contactus = () => {
  const collectionRef = collection(db, "Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure that db is correctly initialized
      if (!db) {
        throw new Error("Firestore is not initialized");
      }

      // Add the form data to the 'Contact' collection in Firestore
      await addDoc(collectionRef, {
        Name: formData.name,
        Email: formData.email,
        PhoneNumber: formData.phone,
        Message: formData.message,
      });

      toast.success("Message submitted successfully");
      // Clear the form after submission
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("Failed to submit message. Please try again.");
    }
  };

  return (
    // <section className="dark:bg-semi h-full">
    //   <div className="justify-center flex-wrap items-center text-center py-8">
    //     <h1
    //       className="text-5xl text-primary lg:text-5xl font-semibold font-serif"
    //       data-aos="fade-up"
    //     >
    //       Got in touch
    //     </h1>
    //     <h3
    //       className="text-gray-500 text-2xl font-serif mb-7"
    //       data-aos="fade-up"
    //       data-aos-delay="600"
    //     >
    //       You can reach us anytime...!
    //     </h3>
    //   </div>

    //   <div className="flex justify-center flex-wrap py-8 items-center max-w-6xl mx-auto shadow-lg rounded-2xl bg-primary">
    //     <div className="md:w-[68%] lg:w-[54%]">
    //       <h1
    //         className="text-5xl lg:text-5xl font-semibold font-serif"
    //         data-aos="fade-up"
    //       >
    //         Contact Information
    //       </h1>
    //       <h3
    //         className="text-white text-2xl font-serif mb-7"
    //         data-aos="fade-up"
    //         data-aos-delay="600"
    //       >
    //         Got any questions? Fell free to reach out to us below....!
    //       </h3>
    //       <h3 className="text-xl font-bold">
    //         Phone:
    //         <a href="tel:+916261215099" className="text-white">
    //           {" "}
    //           +91 6261215099
    //         </a>
    //       </h3>
    //       <h3 className="text-xl font-bold">
    //         Email:
    //         <a
    //           href="mailto:info@babamahakaltourandtravels.in"
    //           className="text-white"
    //         >
    //           {" "}
    //           info@babamahakaltourandtravels.in
    //         </a>
    //       </h3>
    //     </div>

    //     <div className="w-full md:w-[67%] lg:w-[40%] bg-white bg-opacity-50 px-5 mb-2 rounded-xl shadow-lg">
    //       <form className="p-6" onSubmit={handleSubmit}>
    //         <h1 className="text-center font-semibold text-3xl mt-3 mb-4">
    //           Contact Form
    //         </h1>
    //         <div className="mb-4">
    //           <label
    //             htmlFor="name"
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //           >
    //             Name
    //           </label>
    //           <input
    //             id="name"
    //             type="text"
    //             value={formData.name}
    //             onChange={handleChange}
    //             placeholder="Enter Your Name"
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label
    //             htmlFor="email"
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //           >
    //             Email
    //           </label>
    //           <input
    //             id="email"
    //             type="email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             placeholder="Enter Your Email"
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label
    //             htmlFor="phone"
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //           >
    //             Phone number
    //           </label>
    //           <input
    //             id="phone"
    //             type="tel"
    //             value={formData.phone}
    //             onChange={handleChange}
    //             placeholder="Enter Your Phone Number"
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <label
    //             htmlFor="message"
    //             className="block text-gray-700 text-sm font-bold mb-2"
    //           >
    //             Message
    //           </label>
    //           <textarea
    //             id="message"
    //             value={formData.message}
    //             onChange={handleChange}
    //             placeholder="Message"
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           ></textarea>
    //         </div>
    //         <div className="flex items-center justify-center">
    //           <button
    //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //             type="submit"
    //           >
    //             Send Message
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="justify-center flex-wrap items-center text-center py-8">
    //     <h1
    //       className="text-5xl  text-primary lg:text-5xl font-semibold font-serif"
    //       data-aos="fade-up"
    //     >
    //       Google Map Location
    //     </h1>
    //     <h3
    //       className="text-gray-500 text-2xl font-serif mb-7"
    //       data-aos="fade-up"
    //       data-aos-delay="600"
    //     >
    //       With this map, you can easily find us....
    //     </h3>
    //   </div>
    //   <div className="w-full md:w-[67%] lg:w-[40%]">
    //     <iframe
    //       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3672.145843837331!2d74.79934177408548!3d23.018416679176713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAxJzA2LjMiTiA3NMKwNDgnMDYuOSJF!5e0!3m2!1sen!2sin!4v1709201337119!5m2!1sen!2sin"
    //       width="1500"
    //       height="450"
    //       allowFullScreen
    //       loading="lazy"
    //       referrerPolicy="no-referrer-when-downgrade"
    //     ></iframe>
    //   </div>
    // </section>
    <section className="dark:bg-semi">
      <div className="justify-center flex-wrap items-center text-center py-8">
        <h1
          className="text-5xl text-primary lg:text-5xl font-semibold font-serif"
          data-aos="fade-up"
        >
          Got in touch
        </h1>
        <h3
          className="text-gray-500 text-2xl font-serif mb-7"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          You can reach us anytime...!
        </h3>
      </div>

      <div className="flex  flex-wrap py-8 items-center max-w-6xl mx-auto sm:mx-9 justify-center shadow-lg rounded-2xl bg-primary">
        <div className="md:w-full lg:w-[54%]">
          <h1
            className="text-5xl lg:text-5xl font-semibold font-serif"
            data-aos="fade-up"
          >
            Contact Information
          </h1>
          <h3
            className="text-white text-xl lg:text-2xl font-serif mb-7"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Got any questions? Feel free to reach out to us below....!
          </h3>
          <h3 className="text-lg lg:text-xl font-bold">
            Phone:
            <a href="tel:+916261215099" className="text-white">
              +91 6261215099
            </a>
          </h3>
          <h3 className="text-lg lg:text-xl font-bold">
            Email:
            <a
              href="mailto:info@babamahakaltourandtravels.in"
              className="text-white"
            >
              info@babamahakaltourandtravels.in
            </a>
          </h3>
        </div>

        <div className="w-full md:w-full lg:w-[40%] bg-white bg-opacity-50 px-5 mb-2  rounded-xl shadow-lg mt-8 md:mt-0">
          <form className="p-6" onSubmit={handleSubmit}>
            <h1 className="text-center font-semibold text-3xl mt-3 mb-4">
              Contact Form
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="justify-center flex-wrap items-center text-center py-8">
        <h1
          className="text-5xl  text-primary lg:text-5xl font-semibold font-serif"
          data-aos="fade-up"
        >
          Google Map Location
        </h1>
        <h3
          className="text-gray-500 text-2xl font-serif mb-7"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          With this map, you can easily find us....
        </h3>
      </div>

      <div className="w-full md:w-full lg:w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3672.145843837331!2d74.79934177408548!3d23.018416679176713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAxJzA2LjMiTiA3NMKwNDgnMDYuOSJF!5e0!3m2!1sen!2sin!4v1709201337119!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contactus;
