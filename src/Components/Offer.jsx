import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Title from "./Title";
import offer from "../Data/Data";

export default function Offer() {
  return (
    <>
      <Title />
      <div className="blue md:px-6 pt-3 pb-3">
        <div className="lg:w-full blue ">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={true}
            navigation={true}
            loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  // spaceBetween: 100,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView:3,
                  spaceBetween:100,
                },
                1424: {
                  slidesPerView:4,
                  spaceBetween: 70,
                },
              }}

            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper w-full blue "
          >
            {offer.map((item) => (
              <SwiperSlide key={item.id} className="pr-7 md:pr-0">
                <div className="w-[315px] md:w-[350px] rounded-xl text-center bg-white flex flex-col p-4 shadow-lg">
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-[17px] px-2 py-[3px] pt-1 rounded-lg text-red-600 bg-red-200 ">
                      <span>40٪ تخفیف</span>
                    </div>
                    <div className="flex-row-center">
                      <FaRegHeart className="w-[35px] h-[35px] px-[7px] py-1 rounded-xl ml-2 bg-gray-200 cursor-pointer hover:text-red-500" />
                      <IoEyeOutline className="w-[35px] h-[35px] px-[7px] py-1 rounded-xl bg-gray-200 cursor-pointer hover:text-blue" />
                    </div>
                  </div>
                  <div className="flex-row-center mt-3">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[180px] h-[180px] md:w-[250px]  md:h-[250px] items-center"
                    />
                  </div>
                  <div className="flex-row-center my-2 text-[20px]">
                    <span>{item.name}</span>
                  </div>
                  <div className="flex flex-row-reverse items-center justify-between mt-3 ">
                    <div className="py-2">
                      <button className="flex-row-center bg-blue rounded-xl p-2 mx-h-[50px] hover:text-white">
                        <CiShoppingBasket className="w-[25px] h-[25px]" />
                        <span>خرید محصول</span>
                      </button>
                    </div>
                    <div className="flex-col-center text-[17px]">
                      <span>{item.newPrice}</span>
                      <del className="text-red-500">{item.oldPrice}</del>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
