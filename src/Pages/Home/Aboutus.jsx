import React from "react";
import about from "../../assets/images/about.jpeg";
import logoVideo from "../../assets/images/a1.png";
import logoVideo2 from "../../assets/images/a2.png";
import logoVideo3 from "../../assets/images/a3.jpeg";
import logoVideo4 from "../../assets/images/a4.jpeg";

const Aboutus = () => {
  return (
    <div className="dark:bg-semi">
      {/* About Us Image Section */}
      <div className="relative">
        <img
          src={about}
          className="w-full h-auto overflow-hidden object-cover z-20"
          alt="About Us"
        />
        {/* Title Overlay */}
        <h1
          className="absolute top-1/2 left-44 transform -translate-x-1/2 -translate-y-1/2 text-semi text-start text-7xl"
          data-aos="fade-left"
        >
          About us
        </h1>
      </div>

      {/* Video and Text Section */}

      <div className="dark:bg-semi_primary dark:text-white duration-300 relative z-20">
        <div className="container min-h-[420px] flex">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            {/* Video Section */}
            <div
              className="order-1 sm:order-2  "
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                src={logoVideo}
                className="relative -z-10 max-h-[300px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg  pr-8"
              />
            </div>
            {/* Text Section */}
            <div className="order-2 sm:order-1 space-y-6 sm:pr-32">
              <h1
                className="text-2xl lg:text-2xl font-semibold font-serif"
                data-aos="fade-up"
              >
                Our Journey Begins.
              </h1>
              <h3
                className="text-gray-400 text-md font-serif"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Baba Mahakal Tour and Travels was founded with a vision to
                revolutionize the way people experience travel. Our journey
                began with a simple yet profound idea: to offer a reliable,
                efficient, and affordable taxi service for the people of Bhopal
                and its visitors. Over the years, we have dedicated ourselves to
                providing top-notch taxi services that ensure comfort, safety,
                and convenience.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="dark:bg-semi_primary dark:text-white duration-300 relative z-20 mt-6">
        <div className="container min-h-[420px] flex">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            {/* Video Section */}
            <div
              className="order-2 sm:order-1"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img
                src={logoVideo2}
                className="relative -z-10 max-h-[300px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-lg pl-9"
              />
            </div>
            {/* Text Section */}
            <div className="order-1 sm:order-2 space-x-6 sm:pl-32 ">
              <h1
                className="text-2xl lg:text-2xl font-semibold font-serif"
                data-aos="fade-up"
              >
                Mission & Vission
              </h1>
              <h3
                className="text-gray-400 text-sm font-serif"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <span className="text-2xl text-semi dark:text-white">
                  Mission
                </span>
                <br />
                At Baba Mahakal Tour and Travels, our mission is to provide our
                customers with safe, convenient, and reliable transportation
                solutions that enhance their travel experiences. We are
                committed to delivering exceptional car rental services in
                Bhopal and beyond, offering a diverse fleet of well-maintained
                vehicles and a dedicated team of professionals to ensure our
                clients’ comfort, convenience, and satisfaction. We strive to be
                a trusted partner for all your travel needs, making every
                journey memorable and hassle-free.
                <br />
                <span className="text-2xl text-semi dark:text-white">
                  Vission
                </span>
                <br />
                Our vision at Baba Mahakal Tour and Travels is to be the premier
                car rental service in Bhopal, setting the industry standard for
                excellence and customer satisfaction. We aim to continually
                expand our fleet, services, and reach to serve more travelers
                and businesses across the region. We aspire to innovate and
                adopt eco-friendly practices to contribute to a sustainable
                future. Our vision is to build enduring relationships with our
                clients, partners, and communities, becoming the go-to choice
                for those seeking exceptional car rental experiences in Bhopal
                and beyond.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="dark:bg-semi_primary dark:text-white duration-300 relative z-20">
        <div className="container min-h-[420px] flex">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            {/* Video Section */}
            <div
              className="order-1 sm:order-2  "
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              <img
                src={logoVideo3}
                className="relative -z-10  sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-full h-[320px] w-[320px]  "
              />
            </div>
            {/* Text Section */}
            <div className="order-2 sm:order-1 space-y-6 sm:pr-32">
              <h1
                className="text-2xl lg:text-2xl font-semibold font-serif"
                data-aos="fade-up"
              >
                Booking Made Easy
              </h1>
              <h3
                className="text-gray-400 text-md font-serif"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                At Baba Mahakal Tour and Travels, we understand that booking a
                taxi should be simple and convenient. That’s why we offer an
                easy-to-use online taxi booking platform. With just a few
                clicks, you can secure your ride, choose your vehicle, and even
                track your driver’s location in real-time. We put the power of
                transportation in your hands.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="dark:bg-semi_primary dark:text-white duration-300 relative z-20 pb-6">
        <div className="container min-h-[420px] flex">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            {/* Video Section */}
            <div
              className="order-2 sm:order-1  "
              data-aos="flip-up"
              data-aos-duration="1500"
            >
              <img
                src={logoVideo4}
                className="relative -z-10  sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] rounded-full h-[320px] w-[320px]  "
              />
            </div>
            {/* Text Section */}
            <div className="order-1 sm:order-2 space-y-6 sm:pr-32">
              <h1
                className="text-2xl lg:text-2xl font-semibold font-serif"
                data-aos="fade-up"
              >
                Join Us on Your Journey
              </h1>
              <h3
                className="text-gray-400 text-md font-serif"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                We invite you to experience the difference with Baba Mahakal
                Tour and Travels. Whether you’re a local resident, a tourist
                exploring Bhopal’s rich heritage, or a traveler venturing into
                the captivating landscapes of Madhya Pradesh, we are here to
                serve you.
                <br /> Our journey is intertwined with yours, and we are ready
                to make each ride with us a memorable one. Discover Bhopal,
                explore its surroundings, and set out on exciting adventures
                with Baba Mahakal Tour and Travels.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
