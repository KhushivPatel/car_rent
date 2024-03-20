import React from "react";
import SwiperCore from "swiper/core";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import your images
import image1 from "../../../public/images/s1.jpg";
import image2 from "../../../public/images/s2.jpg";
import image3 from "../../../public/images/s3.jpg";
// import image4 from "../../assets/images/s4.jpg";

const Slider = () => {
  SwiperCore.use([Autoplay, EffectFade, Pagination, Navigation]);

  return (
    <>
      <div className="text-center mb-5 max-w-[400px] mx-auto">
        <h1 className="text-6xl font-bold">Brands</h1>
      </div>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={image1}
              alt="Slide 1"
              className="w-full h-[500px] object-cover"
            />
            <p className="text-semi  absolute left-1 top-3 font-medium max-w-[90%] bg-primary shadow-lg opacity-90 p-2 rounded-br-3xl">
              SWIFT
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={image2}
              alt="Slide 2"
              className="w-full h-[500px] object-cover "
            />
            <p className="text-semi  absolute left-1 top-3 font-medium max-w-[90%] bg-primary shadow-lg opacity-90 p-2 rounded-br-3xl">
              HONDA
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={image3}
              alt="Slide 3"
              className="w-full h-[500px] object-cover "
            />
            <p className="text-semi  absolute left-1 top-3 font-medium max-w-[90%] bg-primary shadow-lg opacity-90 p-2 rounded-br-3xl">
              TOYTO
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

// {/* <SwiperSlide>
//   <div className="relative">
//     <img
//       src={image4}
//       alt="Slide 4"
//       className="w-full h-[500px] object-cover "
//     />
//     {/* <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
//             Text Over Image 3
//           </div> */}
//   </div>
// </SwiperSlide>; */}
