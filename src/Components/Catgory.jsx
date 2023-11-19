import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Title from "./Title";
// import { Link } from "react-router-dom";
import ctg from "../Data/Ctg";

export default function Catgory() {
  const title = {
    textWhite: "دسته بندی",
    textBlue: "محصولات",
    more: "مشاهده همه",
  };
  return (
    <>
      <Title title={title} />
      <div className=" px-2.5 md:px-6 pt-3">
        <div className="lg:w-full  ">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={true}
            // navigation={true}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
              1424: {
                slidesPerView: 6,
                spaceBetween: 70,
              },
            }}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper w-full  "
          >
            {ctg.map((item) => (
              <SwiperSlide key={item.id} className="flex-row-center ">
                <div className=" px-5 py-3  text-[20px] ">
                  <img
                    src={item.src}
                    alt=""
                    className="rounded-full h-[133px] w-[133px] mb-3"
                  />
                  <span className="pr-11 text-[20px] vazir-bold ">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
