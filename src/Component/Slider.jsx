import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import banner from "../../src/Images/banner.webp"
import listings from "../../src/Images/listings.webp"
import booking from "../../src/Images/booking.webp"
import company from "../../src/Images/company.webp"
import "swiper/swiper-bundle.css";

export default function Slider(){
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{delay: 3000 }}
  
      >
        <SwiperSlide><img src={company}/></SwiperSlide>
        <SwiperSlide><img src={banner}/></SwiperSlide>
        <SwiperSlide><img src={booking}/></SwiperSlide>
        <SwiperSlide><img src={listings}/></SwiperSlide>
      </Swiper>
  
    )
}