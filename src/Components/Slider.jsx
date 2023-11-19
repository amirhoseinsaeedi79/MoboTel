import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function Slider() {
  return (
    <div className="all-Slider px-2 md:px-6 pt-24 md:pt-28 lg:pt-0 lg:mt-7 mb-7">
      {/* ================================================================ header slider */}
      <div className=" w-full  ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img
              src="images/1.webp"
              alt=""
              className=" h-[130px]  md:h-[350px] lg:h-[430px] rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/2.jpg" alt="" className="  h-[130px]  md:h-[350px] lg:h-[430px] rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/whatch.png"
              alt=""
              className="  h-[130px]  md:h-[350px] lg:h-[430px] rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/4.png" alt="" className="  h-[130px]  md:h-[350px] lg:h-[430px] rounded-2xl" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ================================================================ sale slider */}
    </div>
  );
}
