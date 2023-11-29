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
import Context from "../Context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function BestProduct() {
  const title = {
    textWhite: "محصولات",
    textBlue: "پرفروش",
    more: "مشاهده بیشتر",
  };
  const context = useContext(Context);
  const navigate = useNavigate();
  const InfoHandler = async (item) => {
    const localInfo = localStorage.setItem("info", JSON.stringify(item));
    context.showInfoProduct(localInfo);
    navigate("/ShowProduct");
  };
  return (
    <>
      <Title title={title} />
      <div className="blue px-2.5 md:px-6 pt-3 pb-3">
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
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              1424: {
                slidesPerView: 4.5,
                spaceBetween: 70,
              },
            }}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper w-full blue "
          >
            {offer.map((item) => (
              <SwiperSlide key={item.id} className="w-full  md:pr-0">
                <div className="w-full md:w-[320px] rounded-xl text-center bg-white flex flex-col p-4 shadow-lg">
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-[17px] px-2 py-[3px] pt-1 rounded-lg text-red-600 bg-red-200 ">
                      <span>40٪ تخفیف</span>
                    </div>
                    <div className="flex-row-center">
                    <FaRegHeart className="w-[35px] h-[35px] px-[7px] py-1 rounded-xl ml-2 bg-gray-200 cursor-pointer hover:text-red-500" />
                    <span onClick={() => InfoHandler(item)}
                      className=" px-[7px] py-1 text-[18px] rounded-xl bg-gray-200 cursor-pointer hover:text-blue">نمایش</span>
                  </div>
                  </div>
                  <div className="flex-row-center mt-3">
                    <img
                      src={`images/${item.imgae}`}
                      alt=""
                      className="w-[180px] h-[180px] md:w-[180px]  md:h-[180px] items-center"
                    />
                  </div>
                  <div className="flex-row-center mt-4 text-[18px]">
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
                      <span>{item.Price}</span>
                      <del className="text-red-500">{item.oldPrice}</del>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="paralexHome mt-5 md:mt-9"></div>
    </>
  );
}
