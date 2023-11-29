import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/navigation/navigation.min.css';

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function ImgSlider(item) {
  console.log(item);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // تنظیمات مربوط به navigation
  const navigationStyles = {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    // تنظیمات رنگ دکمه‌ها
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className="px-2">
      <Swiper
        Navigation={navigationStyles}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full relative rounded-xl flex items-center bg-white"
      >
        <SwiperSlide>
          <img
            src={`images/${item.item.imgae}`}
            className="rounded-xl w-full   "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`images/${item.item.image1}`}
            className="rounded-xl w-full    "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`images/${item.item.image2}`}
            className="rounded-xl w-full  "
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mt-3 mb-2 w-full pl-[2px] "
      >
        <SwiperSlide className="cursor-pointer border-1  border-body hover:border-blue">
          <img src={`images/${item.item.imgae}`} className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer border-1  border-body hover:border-blue">
          <img src={`images/${item.item.image1}`} className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer border-1  border-body hover:border-blue">
          <img src={`images/${item.item.image2}`} className="rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
