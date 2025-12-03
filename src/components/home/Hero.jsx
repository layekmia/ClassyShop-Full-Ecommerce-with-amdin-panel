"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Wrapper from "../Wrapper";

const slides = [
  "https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg",
  "https://serviceapi.spicezgold.com/download/1763051442252_34296.jpg",
  "https://serviceapi.spicezgold.com/download/1763812170460_homeslides2.jpg",
  "https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg",
  "https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg",
  "https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg",
  "https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg",
];

export default function Hero() {
  return (
    <div className="py-5">
      <Wrapper>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          className="!overflow-visible"
          autoplay={{
            delay: 2500, // time between slides
            disableOnInteraction: false, // keep autoplay even after user swipes
          }}
          loop={true} // recommended for autoplay
        >
          {slides.map((image, i) => (
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
