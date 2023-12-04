import { MdOutlineChevronLeft } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { HiColorSwatch } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full pt-[95px] md:pt-28 lg:pt-6 pb-2">
      <div className="flex flex-row items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-3  text-[14px] md:text-[17px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">سبدخرید</span>
      </div>

      <div className="py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-3 hidden md:block text-[16px] vazir-bold ">
        <div className="line-step-container">
          <div className="line-step ">
            <div className="line-step-boxs">
              <Link to="/Cart" className="line-step-box  complete">
                <a>
                  <p>سبد خرید</p>
                  <div className="icon">1</div>
                </a>
              </Link>
              <Link to="/Payment" className="line-step-box   ">
                <a>
                  <p>جزییات پرداخت</p>
                  <div className="icon">2</div>
                </a>
              </Link>
              <div className="line-step-box  ">
                <a>
                  <p>تکمیل سفارش</p>
                  <div className="icon">3</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col-reverse lg:flex-row-reverse justify-between  px-2.5 md:px-6  ">
        {/* ================================================================================== factor start */}
        <div className="w-full lg:w-[40%]  px-4 pb-4 xl:w-[33%] mb-7 my-5 lg:mt-0 md:mb-0  bg-white lg:mr-5 flex justify-center flex-col rounded-xl py-3 md:pt-4 lg:sticky lg:top-[90px] shadow-xl">
          <div className="flex flex-row items-center vazir-bold text-[16px] pb-3 border-b">
            <img
              src="images/bagShop.png"
              alt=""
              className="w-[28px] h-[28px] ml-2"
            />
            <span className="pt-1">فاکتور شما</span>
          </div>
          <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
            <span className="vazir-bold">تعداد کالاها : </span>
            <span>13 عدد</span>
          </div>
          <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
            <span className="vazir-bold">قیمت کالاها : </span>
            <span>1300000 تومان</span>
          </div>
          <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
            <span className="vazir-bold">تخفیف : </span>
            <span>500000 عدد</span>
          </div>
          <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
            <span className="vazir-bold">قیمت کل : </span>
            <span>800000 عدد</span>
          </div>
          <div className="flex flex-row justify-center items-center mt-3 px-3 py-1 bg-blue text-white rounded-xl border">
            <button>پرداخت</button>
          </div>
        </div>
        {/* ================================================================================== products start */}

        <div className="w-full">
          <div className="w-full px-3 py-2  bg-white  ItemCart  flex flex-col md:flex-row items-center justify-between pt-3 pb-3 md:pb-0 border-b-2 rounded-xl shadow-xl ">
            <div className="w-full flex flex-col md:flex-row items-center">
              <img
                src="images/watch (2).webp"
                alt=""
                className="w-[200px] md:w-[150px] h-[160px] md:h-[130px] rounded-xl relative left-[10px]"
              />
              {/* =============== map  */}

              <div className="flex flex-col items-center md:items-start ">
                <div className="flex flex-row">
                  <p className="text-[18px]">ایرپاد گیمینگ پرو مدل 25</p>
                  <span className=" bg-red-200  text-red-600 text-[14px] mr-2 px-2 pt-1.5 text-center rounded-xl">
                    ٪40
                  </span>
                </div>
                <div className="w-full flex flex-row items-center md:items-center mt-5">
                  <div className="w-full min-w-[133px] ml-3 flex flex-row pl-3 md:border-l-[3px] border-gray-300">
                    <BsShop className="w-[20px] h-[20px] ml-1 text-gray-600" />
                    <span className="vazir-bold ml-1 text-[14px]">
                    فروشگاه :{" "}
                    </span>
                    <span className="text-blue text-[14px]">
                       موبوتل
                    </span>
                  </div>
                  <div className="w-full flex flex-row items-center ">
                    <HiColorSwatch className="w-[20px] h-[20px] ml-1 text-gray-600" />
                    <span className="vazir-bold text-[14px] min-w-[32px]">رنگ : </span>
                    <div className="flex flex-row items-center bg-gray-200 mr-1 px-2 py-1 border-2 rounded-2xl">
                      <div className="w-[18px] h-[18px] rounded-full bg-black  "></div>
                      <span className="mr-2 text-[14px]">مشکی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[26%] xl:w-[16%] flex flex-col mt-5 md:mt-0 items-center justify-end  ">
              <div className="flex flx-row items-center text-center">
                <FaPlus
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-[30px] h-[30px]  p-1.5 rounded-r-xl text-white bg-blue  cursor-pointer"
                />
                <span className="px-5 mx-2 py-1 bg-gray-100 text-[16px] vazir-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev - 1)}
                  className="w-[30px] h-[30px]  p-1.5 rounded-l-xl text-white bg-blue cursor-pointer "
                >
                  {quantity <= 1 ? <RiDeleteBin6Line /> : <FaMinus />}
                </button>
              </div>
              <div className="min-w-[157px] flex flex-row items-center mt-5 md:mt-6 vazir-bold">
                <sapn className=" ml-2 text-blue">قیمت :</sapn>
                <sapn>1200000 تومان</sapn>
              </div>
            </div>
          </div>
          {/* ================================================================================== products finish */}
        </div>
      </div>
    </div>
  );
}
