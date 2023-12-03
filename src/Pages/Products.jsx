import { MdOutlineChevronLeft } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context/context";
import axios from "axios";
import ctg from "../Data/Ctg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Title from "../Components/Title";
import { useContext, useEffect, useState } from "react";
import { GetProduct } from "../Services/Axios/Requests/Products";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";

export default function Products() {
  const context = useContext(Context);
  // ============================================================ states
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  // ============================================================ functions
  useEffect(() => {
    GetProduct().then((res) => setAllProducts(res.data));
  }, [search]);

  const navigate = useNavigate();

  const InfoHandler = async (item) => {
    const localInfo = localStorage.setItem("info", JSON.stringify(item));
    context.showInfoProduct(localInfo);
    navigate("/ShowProduct");
  };

  async function sortHandler(ctg) {
    await axios
      .get(`http://localhost:3000/product?ctg=${ctg}`)
      .then((res) => context.newProduct(res.data));
    console.log(context.allProduct);
  }
  const allSelectProducts = () => {
    GetProduct().then((res) => context.newProduct(res.data));
  };

  // =============================================== locals favorate start
  const addToListFavorate = (item) => {
    if (context.isLogin == false) {
      toast.error("لطفا ابتدا وارد حساب خود شوید", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
    }

    const dataLocalStorage = localStorage.getItem("Favorate");
    if (dataLocalStorage == null && context.isLogin == true) {
      localStorage.setItem("Favorate", JSON.stringify([item]));
      toast.success("به علاقه مندی ها اضافه شد", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });


    } else {
      const allData_LocalStorage = JSON.parse(localStorage.getItem("Favorate"));
      const result = allData_LocalStorage.some((items) => {
        return items.name == item.name;
      });

      if (result && context.isLogin == true) {
        const items_filter = allData_LocalStorage.filter((items) => {
          return items.name !== item.name;
        });
        localStorage.setItem("Favorate", JSON.stringify(items_filter));
        toast.error("از علاقه مندی ها حذف شد", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (!result && context.isLogin == true) {
        allData_LocalStorage.push(item);
        localStorage.setItem("Favorate", JSON.stringify(allData_LocalStorage));
        toast.success("به علاقه مندی ها اضافه شد", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  // =============================================== locals favorate finish

  const inexpensive = () => {
    const filterPrice = allProducts.filter((items) => {
      return items.price < 1000000;
    });
    context.newProduct(filterPrice);
  };

  const expensive = () => {
    const filterPrice = allProducts.filter((items) => {
      return items.price > 2000000;
    });
    context.newProduct(filterPrice);
  };

  async function searchHandler(event) {
    setSearch(event.target.value);
    const searchValue = allProducts.filter((item) =>
      item.name.includes(search)
    );
    await context.newProduct(searchValue);
  }

  const title = {
    textWhite: "محصولات",
    textBlue: "فروشگاه",
    more: "مشاهده همه محصولات",
  };

  return (
    <div className="w-full pt-[95px] md:pt-28 lg:pt-6 pb-2">
      <div className="flex flex-row items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-3  text-[12px] md:text-[17px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">محصولات</span>
      </div>
      <div className="px-2.5 md:px-6">
        <div className="">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
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
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full "
          >
            {ctg.map((item) => (
              <SwiperSlide
                onClick={() => sortHandler(item.ctg)}
                key={item.id}
                className="flex-row-center "
              >
                <div className=" px-5 py-3  text-[20px] flex-col-center">
                  <img
                    src={item.src}
                    alt=""
                    className="rounded-full h-[133px] w-[133px] mb-3"
                  />
                  <span className="pl-2 text-[20px] vazir-bold ">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Title title={title} />
      <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-between  px-2.5 md:px-6  ">
        <div className="w-full md:w-[85%] xl:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 xl:gap-x-7">
          {context.allProduct.length !== 0 ? (
            context.allProduct.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-[100%] h-[360px] md:h-[320px] rounded-xl text-center bg-white flex flex-col py-4 px-2 mb-5 md:mb-4 shadow-lg"
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="text-[17px] px-2 py-[3px] pt-1 rounded-lg text-red-600 bg-red-200 ">
                    <span>{item.Discount}٪ تخفیف</span>
                  </div>
                  <div className="flex-row-center">
                    <FaRegHeart
                      onClick={() => addToListFavorate(item)}
                      className="w-[35px] h-[35px] px-[7px] py-1 rounded-xl ml-2 bg-gray-200 cursor-pointer text-red-500"
                    />
                    <span
                      onClick={() => InfoHandler(item)}
                      className=" px-[7px] py-1 text-[16px] rounded-xl bg-gray-200 cursor-pointer hover:text-blue"
                    >
                      نمایش
                    </span>
                  </div>
                </div>
                <div className="flex-row-center mt-3">
                  <img
                    src={`images/${item.imgae}`}
                    alt=""
                    className="w-[180px] h-[180px] md:w-[150px]  md:h-[145px] items-center"
                  />
                </div>
                <div className="flex-row-center mt-4 lg:text-[17px] vazir-bold  ">
                  <span className="h-[24px] overflow-hidden">{item.name}</span>
                </div>
                <div className="flex flex-row-reverse items-center justify-between mt-3 ">
                  <div className="py-2">
                    <button className="flex-row-center text-white bg-blue rounded-xl px-2 py-1  hover:text-black">
                      <CiShoppingBasket className="w-[25px] h-[25px]" />
                      <span className="text-[16px]">سفارش</span>
                    </button>
                  </div>
                  <div className="flex-col-center text-[17px]">
                    <span className="text-blue"> {item.price} تومان</span>
                    <del className="text-red-500 min-w-[117px]">
                      {item.price + (item.price * item.Discount) / 100} تومان
                    </del>
                  </div>
                </div>
                {/* </div> */}
              </SwiperSlide>
            ))
          ) : (
            <Loader />
          )}
        </div>
        {/* ================================================================ sort products */}
        <div className="w-full md:w-[23%] xl:w-[25%] mb-7 md:mb-0 md:h-[560px] bg-white ml-5 flex justify-center flex-row md:flex-col rounded-xl py-2 md:pt-4 md:sticky md:top-[90px] shadow-xl">
          <form onSubmit={() => event.preventDefault()} className=" ">
            <div className="w-full relative px-3">
              <button className="flex absolute inset-y-0 left-2 items-center pl-3 ">
                <svg
                  className="w-7 h-7 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                onChange={searchHandler}
                value={search}
                type="text"
                id="default-search"
                className=" direction px-5 py-2 md:py-3 pl-10 w-full rounded-xl border-[1px] bg-gray-200 border-gray-300 focus:outline-none"
                placeholder="جستجوی محصول ..."
              />
            </div>
          </form>
          <div className="px-3 pt-5 vazir-bold hidden md:flex flex-row md:flex-col ">
            <span className="text-blue">نمایش بر اساس :</span>
            <div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">تمام محصولات</span>
                <input
                  onClick={() => allSelectProducts()}
                  type="radio"
                  name="test"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">ارزانترین</span>
                <input onClick={() => inexpensive()} type="radio" name="test" />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">گرانترین</span>
                <input onClick={() => expensive()} type="radio" name="test" />
              </div>
            </div>
          </div>
          <div className="px-3 pt-3 vazir-bold hidden md:flex md:flex-col pb-5">
            <span className="text-blue">دسته بندی :</span>
            <div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">ایرپاد</span>
                <input
                  onClick={() => sortHandler("ایرپاد")}
                  type="radio"
                  name="ctg"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">شارژر</span>
                <input
                  onClick={() => sortHandler("شارژر")}
                  type="radio"
                  name="ctg"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">پاوربانک</span>
                <input
                  onClick={() => sortHandler("پاوربانک")}
                  type="radio"
                  name="ctg"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">قاب موبایل</span>
                <input
                  onClick={() => sortHandler("قاب")}
                  type="radio"
                  name="ctg"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">هدفون</span>
                <input
                  onClick={() => sortHandler("هدفون")}
                  type="radio"
                  name="ctg"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">فلش</span>
                <input
                  onClick={() => sortHandler("فلش")}
                  type="radio"
                  name="ctg"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">مموری</span>
                <input
                  onClick={() => sortHandler("مموری")}
                  type="radio"
                  name="ctg"
                />
              </div>
              <div className="mt-3 flex flex-row">
                <span className="ml-2">ساعت</span>
                <input
                  onClick={() => sortHandler("ساعت")}
                  type="radio"
                  name="ctg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
