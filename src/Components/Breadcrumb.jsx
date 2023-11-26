export default function Breadcrumb() {
  return (
    <div className="mt-2">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 5,
            // spaceBetween: 1,
          },
          1424: {
            slidesPerView: 5.5,
            // spaceBetween: 1,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-center px-3 max-h-[185px] mt-10 mb-5"
      >
        <SwiperSlide
          onClick={() => sortHandler("watch")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
            <img src="src/assets/images/watch.webp" alt="" className="mb-2" />
            <span className="max-h-[30px]">ساعت</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => sortHandler("airpod")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
            <img src="src/assets/images/airpod.webp" alt="" className="mb-2" />
            <span>ایرپاد</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => sortHandler("charger")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
            <img src="src/assets/images/charger.webp" alt="" className="mb-2" />
            <span>شارژر</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => sortHandler("cover")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
            <img
              src="src/assets/images/cover.jpeg"
              alt=""
              className="rounded-full h-[105px] w-[105px] mb-2"
            />
            <span>قاب</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => sortHandler("flash")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
            <img
              src="src/assets/images/flash.webp"
              alt=""
              className="rounded-full h-[105px] w-[105px] mb-2"
            />
            <span>فلش</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => sortHandler("memori")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
            <img
              src="src/assets/images/memori.jpg"
              alt=""
              className="rounded-full h-[105px] w-[105px] mb-2"
            />
            <span>مموری</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => sortHandler("power")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
            <img
              src="src/assets/images/power.webp"
              alt=""
              className="rounded-full h-[105px] w-[105px] mb-2"
            />
            <span>پاوربانک</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => sortHandler("headphon")}
          className="flex-row-center "
        >
          <Link className=" px-5 py-3 text-[20px] rounded-xl w-[150px]">
            <img
              src="src/assets/images/headphone.webp"
              alt=""
              className="rounded-full h-[105px] w-[105px] mb-2"
            />
            <span>هدفون</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
