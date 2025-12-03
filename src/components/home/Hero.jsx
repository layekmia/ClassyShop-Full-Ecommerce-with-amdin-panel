"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Wrapper from "../Wrapper";
import { bannerImages } from "@/data/adds";



export default function Hero() {
  return (
    <div className="py-5">
      <Wrapper>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          className="overflow-visible!"
          autoplay={{
            delay: 2500, // time between slides
            disableOnInteraction: false, // keep autoplay even after user swipes
          }}
          loop={true} // recommended for autoplay
        >
          {bannerImages.map((image, i) => (
            <SwiperSlide key={i}>
              <img
                className="rounded-lg w-full h-auto"
                src={image}
                alt="Slider banner"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
}
