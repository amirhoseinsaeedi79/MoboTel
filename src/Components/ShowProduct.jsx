import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import ImgSlider from "./ImgSlider";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { GoAlertFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Title from "./Title.jsx";
import Comments from "./Comments";
import Context from "../Context/context";
import useAddToCar from "./useAddToCar";
import useAddToCart from "./useAddToCar";
export default function ShowProduct() {
  // ================================================== all states
  const [info, setInfo] = useState({});
  const [color, setColor] = useState("سفید");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const context = useContext(Context);

  const ButtonRef = useRef();
  const title = {
    textWhite: "نظرات",
    textBlue: "کاربران",
    more: "مشاهده نظرات",
  };

  useEffect(() => {
    const localInfo = JSON.parse(localStorage.getItem("info"));
    setInfo(localInfo);
  }, []);

  const infoProduct = {
    id: info.id,
    name: info.name,
    ctg: info.ctg,
    price: info.price,
    q: quantity,
    color: color,
    imgae: info.imgae,
    Discount: info.Discount,
  };

  useEffect(() => {
    if (quantity == 1) {
      ButtonRef.current.disabled = true;
    } else {
      ButtonRef.current.disabled = false;
    }
  }, [quantity]);
  console.log(price);
  return (
    <div className="w-full  pt-[90px] md:pt-[115px] lg:pt-6 pb-5 ">
      <div className="flex flex-row items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl  md:mb-8 text-[12px] md:text-[17px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <Link to="/Products" className=" pb-[2px] cursor-pointer">
          محصولات
        </Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">{info.ctg}</span>
      </div>
      <div className="flex-col-center  flex md:flex-row md:justify-between lg:justify-center  bg-white rounded-xl shadow-xl mb-8 mt-5 py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 ">
        {/* ============================================= image product */}
        <div className="  relative md:ml-5 w-[85%] md:w-[45%] lg:w-[32%] xl:w-[23%] pt-2 md:pr-1 bg-body border-[1px] border-gray-200 shadow-2xl rounded-xl">
          <ImgSlider item={info} />
        </div>
        {/* ============================================= info product */}
        <div className="w-full xl:ml-16 lg:mr-3 mb-5 mt-5">
          <div className="w-full flex-col-center md:flex md:flex-col md:items-start border-b-[3px] pb-3">
            <span className="text-[17px] md:text-[22px] lg:text-[25px] vazir-bold">
              {info.name}
            </span>
            <span className="text-[15px]  vazir-bold text-blue mt-3">
              محصولی اورجینال و با ضمانت موبوتل
            </span>
          </div>
          <div className="flex-col-center md:flex md:flex-col md:items-start">
            <div className="flex flex-row items-center mt-3">
              <AiFillSafetyCertificate className="w-[25px] h-[25px] text-green-500 ml-1" />
              <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
            </div>
            <div className="flex flex-row items-center mt-3">
              <span className="text-blue ml-1 vazir-bold">
                قابلیت مقاومتی :
              </span>
              <span>مقاوم در برابر ضربه حرارت</span>
            </div>
            <div className="flex flex-row items-center mt-3">
              <span className="text-blue ml-1 vazir-bold">اقلام همراه :</span>
              <span>محصول به همراه دفترچه راهنما</span>
            </div>
            <div className="flex flex-row items-center mt-3">
              <span className="text-blue ml-2 vazir-bold">انتخاب رنگ : </span>
              <span className="vazir-bold ">{color}</span>
            </div>
            <div className="flex flex-row items-center mt-4">
              <div onClick={() => setColor("سفید")}>
                <div className="ml-2 px-2 py-2 border-[2px] border-gray-400 cursor-pointer  rounded-full">
                  {color == "سفید" ? (
                    <TiTick className="w-[17px] h-[17px] text-black" />
                  ) : (
                    <TiTick className="w-[17px] h-[17px] text-white" />
                  )}
                </div>
              </div>
              <div onClick={() => setColor("مشکی")}>
                <div className="mx-2 px-2 py-2 border-[2px] cursor-pointer  rounded-full bg-black text-white">
                  {color == "مشکی" ? (
                    <TiTick className="w-[17px] h-[17px] text-white" />
                  ) : (
                    <TiTick className="w-[17px] h-[17px] text-black" />
                  )}
                </div>
              </div>
              <div onClick={() => setColor("قرمز")} className="flex-col-center">
                <div className="mx-2 px-2 py-2 border-[2px]  cursor-pointer  rounded-full bg-red-500 ">
                  {color == "قرمز" ? (
                    <TiTick className="w-[17px] h-[17px] text-white" />
                  ) : (
                    <TiTick className="w-[17px] h-[17px] text-red-500" />
                  )}
                </div>
              </div>
              <div onClick={() => setColor("سبز")} className="flex-col-center">
                <div className="mx-2 px-2 py-2 border-[2px]  cursor-pointer  rounded-full bg-green-500 ">
                  {color == "سبز" ? (
                    <TiTick className="w-[17px] h-[17px] text-white" />
                  ) : (
                    <TiTick className="w-[17px] h-[17px] text-green-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex-row-center md:flex md:flex-row  mt-4">
              <GoAlertFill className="w-[30px] h-[30px] text-red-500 ml-1" />
              <span className="w-full border-r-2 border-red-500 pr-2">
                درخواست مرجوع کردن کالا در گروه {info.ctg} با دلیل "انصراف از
                خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد
                (در صورت پلمپ بودن، کالا نباید باز شده باشد).
              </span>
            </div>
          </div>
          <div className="bg-body py-5 mt-5 px-5 flex-col-center lg:flex-row-center rounded-xl border-[2px] shadow-xl">
            <div className="w-full flex-row-center lg:flex lg:flex-row lg:justify-start text-[16px] lg:text-[19px] mb-5 lg:mb-0">
              <del className="text-gray-400 pl-2 border-l-2 border-gray-400 ">
                {info.price + (info.price * info.Discount) / 100} تومان
              </del>
              <span className="px-2 text-blue ">{info.price} تومان</span>
            </div>
            <div className="flex-row-center">
              <div onClick={() => useAddToCart(infoProduct, context.isLogin)}>
                <button className="bg-blue text-white w-[120px] py-2 rounded-xl text-[17px]">
                  سفارش محصول
                </button>
              </div>
              <div className="flex-row-center mr-10">
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="bg-blue px-3  py-2.5  rounded-r-3xl"
                >
                  <FaPlus />
                </button>
                <span className="px-3  pt-[6px] bg-white text-[20px] vazir-bold">
                  {quantity}
                </span>
                <button
                  ref={ButtonRef}
                  onClick={() => setQuantity((prev) => prev - 1)}
                  className="bg-blue px-3 py-2.5 rounded-l-3xl cursor-pointer"
                >
                  <FaMinus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Title title={title} />
      <Comments />
    </div>
  );
}
