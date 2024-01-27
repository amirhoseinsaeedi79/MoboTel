import { MdOutlineChevronLeft } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { HiColorSwatch } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Context from "../Context/context";

export default function Cart() {
  const context = useContext(Context);
  const navigate = useNavigate()
  const [allCart, setAllCart] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [totalOffer, setTotalOffer] = useState(0);
  const [numberCart, setNumberCart] = useState(0);

  const dataAt_localStorage = JSON.parse(localStorage.getItem("Cart"));
  useEffect(() => {
    if (dataAt_localStorage!=null) {
      dataAt_localStorage.reverse();
      setAllCart(dataAt_localStorage);
    }
  },[]);

  useEffect(() => {
    let totalPrice = 0;
    for (let obj of allCart) {
      totalPrice += obj.price * obj.q;
    }
    const result = totalPrice; 
    setTotalPriceCart(result);
  }, [allCart]);

  useEffect(() => {
    let total_Offer = 0;
    for (let obj of allCart) {
      total_Offer += (obj.price * obj.q * obj.Discount) / 100;
    }
    const resultOffer = total_Offer;
    setTotalOffer(resultOffer);
  }, [allCart]);
  useEffect(() => {
    let total_Number = 0;
    for (let obj of allCart) {
      total_Number += obj.q;
    }
    const resultOffer = total_Number;
    setNumberCart(resultOffer);
  }, [allCart]);

  const addQuantity = (item) => {
    const dataAt_localStorages = JSON.parse(localStorage.getItem("Cart"));
    const filteredProducts = dataAt_localStorages.filter(
      (product) => product.id === item.id
    );
    filteredProducts[0].q++;
    dataAt_localStorages[dataAt_localStorages.indexOf(filteredProducts[0])] =
      filteredProducts[0];
    localStorage.setItem("Cart", JSON.stringify(dataAt_localStorages));
    setAllCart(dataAt_localStorages.reverse());
    context.editnumberNavbar(numberCart+1);
  };
  const minQuantity = (item,num) => {
    const dataAt_localStorages = JSON.parse(localStorage.getItem("Cart"));
    const filteredProducts = dataAt_localStorages.filter(
      (product) => product.id === item.id
    );
    filteredProducts[0].q--;
    dataAt_localStorages[dataAt_localStorages.indexOf(filteredProducts[0])] =
      filteredProducts[0];
    localStorage.setItem("Cart", JSON.stringify(dataAt_localStorages));
    setAllCart(dataAt_localStorages.reverse());
    context.editnumberNavbar(numberCart-1);
    if (num==0) {
      removeHandler()
    }
  };
  const removeHandler = (item) => {
    const dataAt_localStorages = JSON.parse(localStorage.getItem("Cart"));
    const filteredProducts = dataAt_localStorages.filter(
      (product) => product.id !== item.id
    );
    localStorage.setItem("Cart", JSON.stringify(filteredProducts));
    setAllCart(filteredProducts.reverse());
    context.editnumberNavbar(numberCart-1);
  };

  return (
    <div className="w-full pt-[95px] md:pt-28 lg:pt-6 pb-2">
      <div className="flex flex-row items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-8  text-[14px] md:text-[17px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[15px] h-[15px] mx-2" />
        <span className="text-blue pb-[2px] cursor-pointer">سبدخرید</span>
      </div>

      {allCart.length >= 1 && context.isLogin==true ? (
        <>
          <div className="py-2 px-2 md:py-5 mt-7 md:px-3 mx-2 md:mx-3 hidden md:block text-[16px] vazir-bold ">
            <div className="line-step-container">
              <div className="line-step ">
                <div className="line-step-boxs">
                  <div className="line-step-box  complete">
                    <Link to="/Cart">
                      <p>سبد خرید</p>
                      <div className="icon">1</div>
                    </Link>
                  </div>
                  <div className="line-step-box   ">
                    <Link to="/Payment">
                      <p>جزییات پرداخت</p>
                      <div className="icon">2</div>
                    </Link>
                  </div>
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

          <div className=" flex flex-col-reverse lg:flex-row-reverse justify-between  px-2.5 md:px-6 relative top-[-10px] ">
            {/* ================================================================================== factor start */}
            <div className="w-full lg:w-[40%]  h-[340px] border-[2px] px-4 pb-4 xl:w-[33%] mb-3 my-5 lg:mt-0 md:mb-0  bg-white lg:mr-5 flex justify-center flex-col rounded-xl py-3 md:pt-4 lg:sticky lg:top-[90px] shadow-xl">
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
                <span className="vazir-bold">قیمت کالاها : </span>
                <span>{totalPriceCart.toLocaleString("fa-money")} تومان</span>
              </div>
              <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
                <span className="vazir-bold">تخفیف : </span>
                <span>{totalOffer.toLocaleString("fa-money")} تومان</span>
              </div>
              <div className="flex flex-row justify-between mt-3 px-3 py-2 bg-body rounded-xl border">
                <span className="vazir-bold">قیمت کل : </span>
                <span>
                  {(totalPriceCart - totalOffer).toLocaleString("fa-money")}
                  تومان
                </span>
              </div>
              <div onClick={()=>navigate("/Payment")} className="flex flex-row justify-center items-center mt-3 px-3 py-1 bg-blue text-white rounded-xl border">
                <button>پرداخت</button>
              </div>
            </div>
            {/* ================================================================================== products start */}

            <div className="w-full">
              {allCart.map((item) => (
                <div
                  key={item.id}
                  className="w-full  px-3 py-2 mb-3 border-[2px] bg-white  ItemCart  flex flex-col md:flex-row items-center justify-between pt-3 pb-3 md:pb-0 border-b-2 rounded-xl shadow-xl "
                >
                  <div className="w-full flex flex-col md:flex-row items-center">
                    <img
                      src={`images/${item.imgae}`}
                      alt=""
                      className="w-[200px] md:w-[150px] h-[160px] md:h-[130px] rounded-xl relative left-[10px]"
                    />
                    {/* =============== map  */}

                    <div className="flex flex-col items-center md:items-start ">
                      <div className="flex flex-row">
                        <p className="text-[18px]">{item.name}</p>
                        <span className=" max-h-[28px] bg-red-200  text-red-600 text-[14px] mr-2 px-2 pt-1.5 text-center rounded-xl">
                          {item.Discount}%
                        </span>
                      </div>
                      <div className="w-full flex flex-row items-center md:items-center mt-5">
                        <div className="w-full min-w-[133px] ml-3 flex flex-row pl-3 md:border-l-[3px] border-gray-300">
                          <BsShop className="w-[20px] h-[20px] ml-1 text-gray-600" />
                          <span className="vazir-bold ml-1 text-[14px]">
                            فروشگاه :{" "}
                          </span>
                          <span className="text-blue text-[14px]">موبوتل</span>
                        </div>
                        <div className="w-full flex flex-row items-center ">
                          <HiColorSwatch className="w-[20px] h-[20px] ml-1 text-gray-600" />
                          <span className="vazir-bold text-[14px] min-w-[32px]">
                            رنگ :{" "}
                          </span>
                          <div className="flex flex-row items-center bg-gray-200 mr-1 px-2 py-1 border-2 rounded-2xl">
                            <div
                              className={`w-[18px] h-[18px] rounded-full ${
                                item.color == "مشکی"
                                  ? "bg-black"
                                  : item.color == "سفید"
                                  ? "bg-white"
                                  : item.color == "قرمز"
                                  ? "bg-red-500"
                                  : "bg-green-500"
                              }`}
                            ></div>
                            <span className="mr-2 text-[14px]">
                              {item.color}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[26%] xl:w-[18%] flex flex-col mt-5 md:mt-0 items-center justify-end  ">
                    <div className="flex flx-row items-center text-center">
                      <FaPlus
                        onClick={() => addQuantity(item)}
                        className="w-[30px] h-[30px]  p-1.5 rounded-r-xl text-white bg-blue  cursor-pointer"
                      />
                      <span className="px-5 mx-2 py-1 bg-gray-100 text-[16px] vazir-bold">
                        {item.q.toLocaleString("fa")}
                      </span>
                      <button
                        onClick={() => minQuantity(item,item.q)}
                        className="w-[30px] h-[30px]  p-1.5 rounded-l-xl text-white bg-blue cursor-pointer "
                      >
                        {item.q <= 1 ? (
                          <RiDeleteBin6Line
                            onClick={() => removeHandler(item)}
                          />
                        ) : (
                          <FaMinus />
                        )}
                      </button>
                    </div>
                    <div className="min-w-[156px]  text-[15px] flex flex-row items-center mt-5 md:mt-6 vazir-bold">
                      <sapn className=" ml-2 text-blue">قیمت :</sapn>
                      <sapn>
                        {(item.price * item.q).toLocaleString("fa-money")} تومان
                      </sapn>
                    </div>
                  </div>
                </div>
              ))}
              {/* ================================================================================== products finish */}
            </div>
          </div>
        </>
      ) : (
        <div className="flex-col-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-3 text-[18px] vazir-bold">
          <img
            src="images/empty-cart.svg"
            alt=""
            className="max-w-[400px] mb-3 mx-auto px-3"
          />
          <span>سبدخرید شما خالی است</span>
        </div>
      )}
    </div>
  );
}
