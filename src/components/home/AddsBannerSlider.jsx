"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import AddsBannerCard from "./AddsBannerCard";
import { adds } from "@/data/adds";

export default function AddsBannerSlider() {
  return (
    <div className="py-5">
      <Swiper
        navigation={true}
        slidesPerView={4}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        className="overflow-visible!"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true} // recommended for autoplay
      >
        <div>
          {adds.map((add, index) => (
            <SwiperSlide key={add.title}>
              <AddsBannerCard data={add} index={index}/>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
