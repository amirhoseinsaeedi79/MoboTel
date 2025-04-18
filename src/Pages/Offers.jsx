import { MdOutlineChevronLeft } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context/context";
import axios from "axios";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext, useEffect } from "react";
import { GetProduct } from "../Services/Axios/Requests/Products";
import Loader from "../Components/Loader";
import useAddToCart from "../Components/useAddToCar";
import useAddToFavorate from "../Components/useAddToFavorate.jsx";

export default function Offers() {
  const context = useContext(Context);
  const navigate = useNavigate();

  const InfoHandler = async (item) => {
    const localInfo = localStorage.setItem("info", JSON.stringify(item));
    context.showInfoProduct(localInfo);
    navigate("/ShowProduct");
  };

  async function sortHandler(ctg) {
    await axios
      .get(`https://mobodb.onrender.com/product?ctg=${ctg}`)
      .then((res) => context.newProduct(res.data));
    console.log(context.allProduct);
  }
  useEffect(() => {
    GetProduct().then((res) => context.newProduct(res.data));
  }, []);

  const allSelectProducts = () => {
    GetProduct().then((res) => context.newProduct(res.data));
  };

  const offerUp = async () => {
    const filterPrice = context.allProduct.filter((items) => {
      return items.Discount > 40;
    });
    context.showOffer(filterPrice);
  };

  const inexpensive = async () => {
    const filterPrice = context.allProduct.filter((items) => {
      return items.price < 1000000;
    });
    context.showOffer(filterPrice);
  };

  function statusFavorate(item) {
    const isin = (items) => items.name == item;
    let status = context.favorate.some(isin);
    return status;
  }

  return (
    <div className="w-full pt-[95px] md:pt-28 lg:pt-6 pb-2">
      <div className="flex flex-row items-center  border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-3  text-[12px] md:text-[16px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">
          تخفیف و پیشنهادات{" "}
        </span>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-between  px-2.5 md:px-6 mt-6 ">
        <div className="w-full md:w-[85%] xl:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 xl:gap-x-7">
          {context.offersProduct.length !== 0 ? (
            context.offersProduct.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-[100%]  h-[315px] md:h-[320px] rounded-xl text-center bg-white flex flex-col py-4 px-2 mb-5 md:mb-4 shadow-lg"
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="text-[17px] px-2 py-[3px] pt-1 rounded-lg text-red-600 bg-red-200 ">
                    <span>{item.Discount}٪ تخفیف</span>
                  </div>
                  <div className="flex-row-center">
                    {statusFavorate(item.name) == true ? (
                      <FaHeart
                        onClick={() =>
                          useAddToFavorate(
                            item,
                            context.isLogin,
                            context.updateFavorate
                          )
                        }
                        className={`w-[35px] h-[35px] px-[7px] py-1 rounded-xl ml-2 bg-gray-200 cursor-pointer text-red-500`}
                      />
                    ) : (
                      <FaRegHeart
                        onClick={() =>
                          useAddToFavorate(
                            item,
                            context.isLogin,
                            context.updateFavorate
                          )
                        }
                        className={`w-[35px] h-[35px] px-[7px] py-1 rounded-xl ml-2 bg-gray-200 cursor-pointer text-red-500`}
                      />
                    )}
                    <span
                      onClick={() => InfoHandler(item)}
                      className=" px-[7px] py-1 text-[18px] rounded-xl bg-gray-200 cursor-pointer hover:text-blue"
                    >
                      نمایش
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => InfoHandler(item)}
                  className="flex-row-center mt-3"
                >
                  <img
                    src={`images/${item.imgae}`}
                    alt=""
                    className="w-[140px] h-[140px] md:w-[150px]  md:h-[145px] items-center cursor-pointer"
                  />
                </div>
                <div
                  onClick={() => InfoHandler(item)}
                  className="flex-row-center mt-4 cursor-pointer lg:text-[17px] vazir-bold"
                >
                  <span className="h-[24px] overflow-hidden">{item.name}</span>
                </div>
                <div className="flex flex-row-reverse items-center justify-between mt-3 ">
                  <div className="py-2">
                    <button
                      onClick={() => useAddToCart(item, context)}
                      className="flex-row-center text-white bg-blue rounded-xl px-2 py-1  hover:text-black"
                    >
                      <CiShoppingBasket className="w-[25px] h-[25px]" />
                      <span className="text-[16px]">سفارش</span>
                    </button>
                  </div>
                  <div className="flex-col-center text-[17px]">
                    <span className="text-blue">
                      {" "}
                      {item.price.toLocaleString("fa-money")} تومان
                    </span>
                    <del className="text-red-500 min-w-[117px]">
                      {(
                        item.price +
                        (item.price * item.Discount) / 100
                      ).toLocaleString("fa-money")}{" "}
                      تومان
                    </del>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <Loader />
          )}
        </div>
        {/* ================================================================ sort products */}
        <div className="w-full md:w-[23%] xl:w-[25%] mb-7 md:mb-0 h-fit bg-white ml-5 flex md:justify-center flex-row md:flex-col rounded-xl  md:sticky md:top-[90px] shadow-xl">
          <div className="px-3 pt-3 vazir-bold hidden md:flex md:flex-col ">
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
          <div className="px-2 md:px-3  vazir-bold  md:flex flex-row md:flex-col py-2">
            <span className="text-blue md:pt-3">نمایش بر اساس :</span>
            <div className="flex flex-row items-center md:items-start md:flex-col justify-around text-[13px] md:text-[15px]">
              <div className="mt-3 ml-3 flex flex-row">
                <span className="ml-1">تمام محصولات</span>
                <input
                  onClick={() => allSelectProducts()}
                  type="radio"
                  name="test"
                  defaultChecked="true"
                />
              </div>
              <div className="mt-3 ml-3 flex flex-row mx-1 md:mx-0">
                <span className="ml-1">بیشترین تخفیف</span>
                <input onClick={() => offerUp()} type="radio" name="test" />
              </div>
              <div className="mt-3  flex flex-row">
                <span className="ml-1">ارزانترین</span>
                <input onClick={() => inexpensive()} type="radio" name="test" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
