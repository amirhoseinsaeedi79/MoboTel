import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Title from "./Title";
// import { Link } from "react-router-dom";
import ctg from "../Data/Ctg";
import axios from "axios";
import Context from "../Context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Catgory() {
  const navigate = useNavigate();
  const context = useContext(Context);

  const title = {
    textWhite: "دسته بندی",
    textBlue: "محصولات",
    more: "مشاهده همه",
  };
  async function sortHandler(ctg) {
    await axios
      .get(`https://mobodb.onrender.com/product?ctg=${ctg}`)
      .then((res) => context.newProduct(res.data));

    navigate("/Products");
  }
  return (
    <>
      <Title title={title} />
      <div className=" px-2.5 md:px-6 ">
        <div className="lg:w-full  ">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={true}
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
              <SwiperSlide
                onClick={() => sortHandler(item.ctg)}
                key={item.id}
                className="flex-row-center cursor-pointer "
              >
                <div className=" px-5 pb-3 text-[20px] ">
                  <img
                    src={item.src}
                    alt=""
                    className="rounded-full w-[110px] h-[110px] md:h-[110px]  md:w-[110px] mb-3"
                  />
                  <span className="pr-[34px] md:pr-9 w-full text-center text-[16px] vazir-bold ">
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
