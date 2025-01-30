import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { technologies } from "../constants";
import BallCanvas from "./Ball";

const TechPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
      {/* Heading & Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8 sm:mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
          Clientele
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mt-2 sm:mt-3 max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto px-4">
          Our ever-expanding clientele is a testament to our unwavering dedication
          to client satisfaction and the successful execution of campaigns. 
          We've had the privilege of collaborating with businesses from industry 
          giants to startups.
        </p>
      </motion.div>

      {/* Ball Icons with Sliding Effect */}
      <div className="w-full mt-8 sm:mt-12 lg:mt-16">
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={true}
          spaceBetween={15}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full px-2 sm:px-6 lg:px-10"
        >
          {technologies?.length > 0 ? (
            technologies.map((technology, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <motion.div
                  className="w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28"
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                  }}
                >
                  <BallCanvas icon={technology.icon} />
                </motion.div>
              </SwiperSlide>
            ))
          ) : (
            <div className="w-full text-center py-10">
              <p className="text-gray-500 text-sm sm:text-base">
                No technologies available
              </p>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default TechPage;