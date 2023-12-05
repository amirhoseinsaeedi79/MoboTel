import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa6";
import { MdOutlineChevronLeft } from "react-icons/md";
import { BsRocketFill } from "react-icons/bs";
export default function Payment() {
  return (
    <div className="w-full pt-[95px] md:pt-28 lg:pt-6 pb-2">
      <div className="flex flex-row items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-3  text-[12px] md:text-[17px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">سبدخرید</span>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">جزییات پرداخت</span>
      </div>

      <div className="py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-3 text-[16px] vazir-bold ">
        <div className="line-step-container d-sm-block d-none">
          <div className="line-step ">
            <div className="line-step-boxs">
              <Link to="/Cart" className="line-step-box payment complete">
                <a>
                  <p>سبد خرید</p>
                  <div className="icon">1</div>
                </a>
              </Link>
              <Link to="/Payment" className="line-step-box  complete ">
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
      {/* ================================================================================================================ */}

      <div className=" flex flex-col-reverse lg:flex-row-reverse justify-between  px-2.5 md:px-6 relative top-[-10px] ">
        <div className="w-full lg:w-[40%] ">
          {/* ====================================================== time send  */}
          <div className="w-full  h-[210px] border-[2px] px-4 pb-4  mb-5  my-5 lg:mt-0  bg-white lg:mr-5 flex justify-center flex-col rounded-xl py-3 md:pt-4  shadow-md">
            <div className="flex flex-row items-center vazir-bold text-[16px] pb-3 border-b">
              <FaCalendarCheck className="w-[24px] h-[24px] ml-2 text-blue" />
              <span className="pt-1">زمان ارسال</span>
            </div>
            <div className="grid grid-cols-3 gap-y-3 mt-3 text-[14px]">
              <div className="flex flex-col items-center border-[3px] border-gray-200 py-1  rounded-xl mx-2 cursor-pointer">
                <span className="vazir-bold">یک شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(4).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div className="flex flex-col items-center border-[3px] border-gray-200 py-1  rounded-xl mx-2 cursor-pointer">
                <span className="vazir-bold">دو شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(5).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div className="flex flex-col items-center border-[3px] border-gray-200 py-1  rounded-xl mx-2 cursor-pointer">
                <span className="vazir-bold">سه شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(6).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div className="flex flex-col items-center border-[3px] border-blue py-1  rounded-xl mx-2 cursor-pointer">
                <span className="vazir-bold">چهار شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(7).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div className="flex flex-col items-center border-[3px] border-gray-200 py-1  rounded-xl mx-2 cursor-pointer">
                <span className="vazir-bold">پنج شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(8).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div className="flex flex-col items-center border-[3px] border-gray-200 py-1  rounded-xl mx-2 cursor-pointer">
                <span className="vazir-bold">جمعه</span>
                <span className="text-gray-700 mt-1">
                  {(9).toLocaleString("fa")} تیر ماه
                </span>
              </div>
            </div>
          </div>
          {/* ====================================================== time send  */}
          <div className="w-full  h-[200px] border-[2px] px-4 pb-4  mb-5 my-5 lg:mt-0   bg-white lg:mr-5 flex justify-center flex-col rounded-xl py-3 md:pt-4  shadow-md">
            <div className="flex flex-row items-center vazir-bold text-[16px] pb-3 border-b">
              <BsRocketFill className="w-[22px] h-[22px] ml-2 text-blue" />
              <span className="pt-1">نحوه ارسال</span>
            </div>
            <div className="flex flex-col mt-3 text-[14px]">
              <div className="flex flex-row items-center border-[3px] border-blue  rounded-xl px-3 py-2 mb-3 cursor-pointer">
                <img
                  src="images/post-logo.png"
                  alt=""
                  className="w-[30px] h-[30px] ml-2 text-blue"
                />
                <span className="text-gray-700 mt-1 vazir-bold ml-3">
                  پست پیشتاز :{" "}
                </span>
                <span className="text-gray-700 mt-1">
                  {(12000).toLocaleString("fa")} تومان{" "}
                </span>
              </div>
              <div className="flex flex-row items-center border-[3px] border-gray-200   rounded-xl px-3 py-2 cursor-pointer">
                <img
                  src="images/post-logo.png"
                  alt=""
                  className="w-[30px] h-[30px] ml-2 text-blue"
                />
                <span className="text-gray-700 mt-1 vazir-bold ml-3">
                  پست عادی :{" "}
                </span>
                <span className="text-gray-700 mt-1">
                  {(8000).toLocaleString("fa")} تومان{" "}
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== factor  */}

          <div className="w-full   h-[270px] border-[2px] px-4 pb-4  mb-3 my-5 lg:mt-0 md:mb-0  bg-white lg:mr-5 flex justify-center flex-col rounded-xl py-3 md:pt-4 text-[14px] shadow-xl">
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
              <span>{(15).toLocaleString("fa-money")} عدد</span>
            </div>
            <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
              <span className="vazir-bold">سود شما : </span>
              <span>{(250000).toLocaleString("fa-money")} تومان</span>
            </div>
            <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
              <span className="vazir-bold">قیمت کل : </span>
              <span>{(200000).toLocaleString("fa-money")} تومان</span>
            </div>
            <div className="flex flex-row justify-center items-center mt-3 px-3 py-1 bg-blue text-white rounded-xl border">
              <button>پرداخت</button>
            </div>
          </div>
        </div>
        <div className="w-full blue lg:sticky lg:top-[90px] rounded-xl"></div>
      </div>
    </div>
  );
}
