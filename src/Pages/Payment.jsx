import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa6";
import { MdOutlineChevronLeft } from "react-icons/md";
import { BsRocketFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function Payment() {
  const [allCart, setAllCart] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [totalOffer, setTotalOffer] = useState(0);
  const [numberCart, setNumberCart] = useState(0);
  const [codeItem, setCodeItem] = useState(1);
  const [codePost, setCodePost] = useState(12000);

  const dataAt_localStorage = JSON.parse(localStorage.getItem("Cart"));
  useEffect(() => {
    dataAt_localStorage.reverse();
    setAllCart(dataAt_localStorage);
  }, []);

  useEffect(() => {
    let total_Offer = 0;
    for (let obj of allCart) {
      total_Offer += (obj.price * obj.q * obj.Discount) / 100;
    }
    const resultOffer = total_Offer;
    setTotalOffer(resultOffer);
  }, [allCart]);

  useEffect(() => {
    let totalPrice = 0;
    for (let obj of allCart) {
      totalPrice += obj.price * obj.q;
    }
    const result = totalPrice;
    setTotalPriceCart(result);
  }, [allCart]);

  useEffect(() => {
    let total_Number = 0;
    for (let obj of allCart) {
      total_Number += obj.q;
    }
    const resultOffer = total_Number;
    setNumberCart(resultOffer);
  }, [allCart]);



  return (
    <div className="w-full pt-[95px] md:pt-28 lg:pt-6 pb-2">
      <div className="flex flex-row items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-3  text-[12px] md:text-[17px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">سبدخرید</span>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">جزییات پرداخت</span>
      </div>

      <div className="py-2 px-2 hidden md:block md:py-5 md:px-3 mx-2 md:mx-3 text-[16px] vazir-bold ">
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

      <div className=" flex flex-col-reverse lg:flex-row-reverse justify-between  md:py-5 md:px-3 mx-2 md:mx-3 relative top-[-7px] ">
        <div className="w-full lg:w-[30%] ">
          {/* ====================================================== time send  */}
          <div className="w-full  h-[210px] border-[2px] px-4 pb-4  mb-5  my-5 lg:mt-0  bg-white flex justify-center flex-col rounded-xl py-3 md:pt-4  shadow-md">
            <div className="flex flex-row  vazir-bold text-[16px] pb-3 border-b">
              <FaCalendarCheck className="w-[24px] h-[24px] ml-2 text-blue" />
              <span className="pt-1">زمان ارسال</span>
            </div>
            <div className="grid grid-cols-3 gap-y-3 mt-3 text-[14px]">
              <div
                onClick={() => setCodeItem(1)}
                className={`flex flex-col items-center border-[3px] ${
                  codeItem == 1 ? "border-blue" : "border-gray-300"
                } py-1  rounded-xl ml-2 cursor-pointer`}
              >
                <span className="vazir-bold">یک شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(4).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div
                onClick={() => setCodeItem(2)}
                className={`flex flex-col items-center border-[3px] ${
                  codeItem == 2 ? "border-blue" : "border-gray-300"
                } py-1  rounded-xl mx-1 cursor-pointer`}
              >
                <span className="vazir-bold">دو شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(5).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div
                onClick={() => setCodeItem(3)}
                className={`flex flex-col items-center border-[3px] ${
                  codeItem == 3 ? "border-blue" : "border-gray-300"
                } py-1  rounded-xl mr-2 cursor-pointer`}
              >
                <span className="vazir-bold">سه شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(6).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div
                onClick={() => setCodeItem(4)}
                className={`flex flex-col items-center border-[3px] ${
                  codeItem == 4 ? "border-blue" : "border-gray-300"
                } py-1  rounded-xl ml-2 cursor-pointer`}
              >
                <span className="vazir-bold">چهار شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(7).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div
                onClick={() => setCodeItem(5)}
                className={`flex flex-col items-center border-[3px] ${
                  codeItem == 5 ? "border-blue" : "border-gray-300"
                } py-1  rounded-xl mx-1 cursor-pointer`}
              >
                <span className="vazir-bold">پنج شنبه</span>
                <span className="text-gray-700 mt-1">
                  {(8).toLocaleString("fa")} تیر ماه
                </span>
              </div>
              <div
                onClick={() => setCodeItem(6)}
                className={`flex flex-col items-center border-[3px] ${
                  codeItem == 6 ? "border-blue" : "border-gray-300"
                } py-1  rounded-xl mr-2 cursor-pointer`}
              >
                <span className="vazir-bold">جمعه</span>
                <span className="text-gray-700 mt-1">
                  {(9).toLocaleString("fa")} تیر ماه
                </span>
              </div>
            </div>
          </div>
          {/* ====================================================== time send  */}
          <div className="w-full  h-[200px] border-[2px] px-4 pb-4  mb-5 my-5 lg:mt-0   bg-white  flex justify-center flex-col rounded-xl py-3 md:pt-4  shadow-md">
            <div className="flex flex-row items-center vazir-bold text-[16px] pb-3 border-b">
              <BsRocketFill className="w-[22px] h-[22px] ml-2 text-blue" />
              <span className="pt-1">نحوه ارسال</span>
            </div>
            <div className="flex flex-col mt-3 text-[14px]">
              <div
                onClick={() => setCodePost(12000)}
                className={`flex flex-row items-center border-[3px] ${
                  codePost == 12000 ? "border-blue" : "border-gray-300"
                }  rounded-xl px-3 py-2 mb-3 cursor-pointer`}
              >
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
              <div
                onClick={() => setCodePost(8000)}
                className={`flex flex-row items-center border-[3px] ${
                  codePost == 8000 ? "border-blue" : "border-gray-300"
                }   rounded-xl px-3 py-2 cursor-pointer`}
              >
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

          <div className="w-full  h-[320px] border-[2px] px-4 pb-4  mb-3 my-5 lg:mt-0 md:mb-0  bg-white  flex justify-center flex-col rounded-xl py-3 md:pt-4 text-[14px] shadow-md">
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
              <span>{numberCart.toLocaleString("fa-money")} عدد</span>
            </div>
            <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
              <span className="vazir-bold">سود شما : </span>
              <span>{totalOffer.toLocaleString("fa-money")} تومان</span>
            </div>
            <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
              <span className="vazir-bold">هزینه ارسال : </span>
              <span>{codePost .toLocaleString("fa-money")} تومان</span>
            </div>
            <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
              <span className="vazir-bold">قیمت کل : </span>
              <span>
                {" "}
                {(totalPriceCart - totalOffer+codePost).toLocaleString("fa-money")}
                تومان
              </span>
            </div>
            <div className="flex flex-row justify-center items-center mt-3 px-3 py-1 bg-blue text-white rounded-xl border">
              <button>پرداخت</button>
            </div>
          </div>
        </div>

        {/* ++++++++==================================================================== */}
        <div className="w-full lg:w-[75%] bg-white ml-5 md:h-[610px] lg:h-[630px]  border-[3px] mt-4 md:mt-0 py-3 px-5 shadow-md lg:shadow-xl rounded-xl lg:sticky lg:top-[90px] ">
          <div className=" text-[18px] vazir-bold text-blue">
            <span>جزییات پرداخت</span>
          </div>
          <form className="w-full lg:mt-3 pb-2">
            <div className="flex flex-col md:flex-row items-center ">
              <div className=" w-full md:w-1/2 mt-4 flex flex-col justify-center ">
                <label htmlFor="name " className="mb-2 md:mr-1">
                  نام و نام خانوادگی :
                </label>
                <input
                  id="name"
                  type="text"
                  className=" md:ml-3 px-5 py-3 lg:py-3 focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
                  placeholder="نام کامل خودرا وارد کنید"
                />
              </div>
              <div className=" w-full md:w-1/2 mt-4 flex flex-col justify-center ">
                <label htmlFor="email" className="mb-2 md:mr-4">
                  آدرس ایمیل :
                </label>
                <input
                  id="email"
                  type="email"
                  className=" md:mr-3 px-5 py-3 lg:py-3  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
                  placeholder="آدرس ایمیل خود را وارد کنید"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center lg:mt-1">
              <div className=" w-full lg::w-1/2 mt-4 flex flex-col justify-center ">
                <label htmlFor="phone" className="mb-2 ms:mr-1">
                  شماره تماس :
                </label>
                <input
                  id="phone"
                  type="text"
                  className=" md:ml-3 px-5 py-3 lg:py-3  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
                  placeholder="شماره تماس خودرا وارد کنید"
                />
              </div>
              <div className="w-full ld:w-1/2 mt-4 flex flex-col justify-center ">
                <label htmlFor="post" className="mb-2 md:mr-4">
                  کد پستی :
                </label>
                <input
                  id="post"
                  type="text"
                  className=" md:mr-3 px-5 py-3 lg:py-3  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
                  placeholder="کد پستی خود را وارد کنید"
                />
              </div>
            </div>
            <div className="flex flex-col  items-center lg:mt-1">
              <div className="w w-full  mt-4 flex flex-col justify-center ">
                <label htmlFor="address" className="mb-2 mr-1">
                  آدرس :
                </label>
                <input
                  id="address"
                  type="text"
                  className="  px-5 py-3 lg:py-3  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
                  placeholder="آدرس خودرا وارد کنید"
                />
              </div>
              <div className="w-full  mt-4 flex flex-col justify-center ">
                <label htmlFor="description" className="mb-2 md:mr-1">
                  توضیحات :
                </label>
                <textarea
                  id="description"
                  className="px-5 py-3 lg:py-3 h-[200px]   focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
                  placeholder="نکات خود را در مورد سفارش اینجا وارد کنید"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 