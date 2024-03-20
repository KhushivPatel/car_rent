// import React from "react";
// import carabout from "../../assets/images/about_car.png";
// import carAboutDark from "../../assets/images/about_car_dark.svg";
// import { Link } from "react-router-dom";

// const Bestcar = () => {
//   return (
//     <div className="dark:bg-semi dark:text-white duration-125 sm:min-h-[600px] sm:grid sm:place-items-center">
//       <div className="container">
//         <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
//           <div>
//             <img
//               src={carAboutDark}
//               // src={carabout}
//               className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
//             />
//           </div>
//           <div className="space-y-5 sm:p-16 pb-6">
//             <h1 className="text-3xl sm:text-4xl font-bold font-serif">
//               Best Car Rental In Bhopal
//             </h1>
//             <p>
//               Baba MahaKal is a convenient, on demand taxi service provider
//               delivering excellence day and night. If you’re looking for a
//               trustworthy company who can offer a variety of vehicles at
//               affordable prices then look no further. Get a ride any time day or
//               night. Our taxi service is available 24 hours a day, 365 days a
//               year
//             </p>

//             <Link to="/Form">
//               <button
//                 className="rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
//                 data-aos="fade-up"
//                 data-aos-duration="1500"
//               >
//                 BookNow
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Bestcar;

import React from "react";
import carabout from "../../../public/images/about_car.png";
import carAboutDark from "../../../public/images/about_car_dark.svg";
import { Link } from "react-router-dom";

const Bestcar = () => {
  return (
    <div className="dark:bg-semi dark:text-white duration-125 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="mb-8 sm:mb-0 sm:order-2">
            <img
              src={carAboutDark}
              // src={carabout}
              className="sm:scale-105 sm:-translate-x-11 max-h-[300px] sm:max-h-full drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              alt="Car"
            />
          </div>
          <div className="space-y-5 sm:p-16 pb-6 sm:order-1">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Best Car Rental In Bhopal
            </h1>
            <p className="text-sm sm:text-base">
              Baba MahaKal is a convenient, on-demand taxi service provider
              delivering excellence day and night. If you’re looking for a
              trustworthy company who can offer a variety of vehicles at
              affordable prices then look no further. Get a ride any time day or
              night. Our taxi service is available 24 hours a day, 365 days a
              year
            </p>

            <Link to="/Form">
              <button
                className="rounded-md bg-primary hover:bg-primary transition duration-500 py-2 px-6 text-black"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bestcar;
