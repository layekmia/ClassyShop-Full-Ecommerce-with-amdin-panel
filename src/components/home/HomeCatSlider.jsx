"use client";

import Wrapper from "../Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { categories } from "@/data/adds";

export default function HomeCatSlider() {
  return (
    <div className="homeCatSlider pt-4 pb-8">
      <Wrapper>
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i + 1}>
              <Link href="/">
                <div className="py-7 px-3 bg-white shadow-md flex flex-col items-center gap-2">
                  <img
                    className="w-[60px] h-[60px] hover:scale-[1.2] transition-transform"
                    src={cat.image}
                    alt={cat.label}
                  />
                  <h3 className="text-sm font-medium">{cat.label}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
}
