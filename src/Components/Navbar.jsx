import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [statusMenu, setStatusMenu] = useState(false);

  const Menu = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!Menu.current.contains(e.target)) {
        setStatusMenu(false);
      }
      // if (!sale.current.contains(e.target)) {
      //   setStatusSale(false);
      // }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <>
      <nav className="bg-white  ">
        {/* ================================================ start navbar */}
        <div className=" w-full flex flex-row justify-between py-2 px-2 md:px-5 fixed top-0  lg:relative shadow-lg lg:shadow-none pb-2 lg:pb-0">
          {/* ================================================ topbar-right */}
          <div className="topbar-right flex-row-center py-2">
            <IoMenu
              onClick={() => setStatusMenu(!statusMenu)}
              className="w-9 h-9 ml-3 lg:hidden "
            />
            {/* <Link to='/'> */}
            <img
              src="images/logo.jpg"
              alt="logo"
              className="w-[100px] h-[40px]  md:w-[140px] md:h-[55px] lg:hidden"
            />
            {/* </Link> */}
            <div className="relative px-3 mr-5 lg:mr-0 hidden lg:flex">
              <button className="flex absolute inset-y-0 left-2 items-center pl-3 ">
                <svg
                  className="w-8 h-8  text-blue "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="text"
                id="default-search"
                className="w-[400px] h-[50px] px-8 py-1.5 pl-10 shadow-md  text-gray-900 bg-gray-100 rounded-3xl border border-gray-200 focus:outline-none"
                placeholder="جستجوی محصولات ... "
              />
            </div>
          </div>
          {/* ================================================ topbar-left */}
          <div className="topbar-left flex-row-center vazir-bold text-gray-700">
            <div className="flex-row-center p-2 md:p-3.5 ml-3 cursor-pointer bg-white hover:border hover:border-blue rounded-3xl shadow-md border-[1px] border-gray-200">
              <FaCircleUser className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-blue" />
              <span className="mr-3 hidden  lg:flex">ورود / ثبت نام</span>
            </div>
            <div className="flex-row-center p-2 md:p-3 cursor-pointer bg-gray-300 lg:bg-white hover:border hover:border-blue rounded-3xl shadow-md border-[1px] border-gray-200">
              <FaBasketShopping className="w-[22px] h-[22px] ml-2 md:w-[30px] md:h-[30px] text-blue" />
              <span className="mx-3 hidden lg:flex">سبد خرید</span>
              <span className="px-2 py-1 lg:px-2 lg:py-1 text-[13px] lg:text-[15px] rounded-full bg-blue text-white shadow-xl ">
                2
              </span>
            </div>
          </div>
        </div>
        {/* ================================================ hamburger Menu */}
        <div
          className={`w-[100%] h-[100%] absolute bg-black opacity-[50%] pt-0 z-10 ${
            statusMenu ? "flex" : "hidden"
          }`}
        ></div>
        <div
        ref={Menu}
          className={`w-[320px] h-[100vh] bg-white fixed top-0 right-0 z-20 p-3 ${
            statusMenu ? "visible" : "hidden"
          }`}
        >
          <div className="flex flex-row justify-between items-center vazir-bold ">
            <h3 className="text-[20px]">
              فروشگاه <span className="text-blue">موبوتل</span>
            </h3>
            <IoMdClose
              onClick={() => setStatusMenu(!statusMenu)}
              className="w-[35px] h-[35px] cursor-pointer"
            />
          </div>
          <div className="flex-col-center pt-5">
            {/* <> */}
            <img
              src="images/logo.jpg"
              alt="logo"
              className="w-[135px] h-[60px]"
            />
            {/* </Link> */}
            <div className="relative mt-3 ">
              <button className="flex absolute inset-y-0 left-2 items-center pl-1 ">
                <svg
                  className="w-8 h-8  text-blue "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="text"
                id="default-search"
                className="w-[300px] h-[40px] px-8 py-1.5  shadow-md  text-gray-900 bg-gray-100 rounded-3xl border border-gray-200 focus:outline-none"
                placeholder="جستجوی محصولات ... "
              />
            </div>
          </div>
          {/* ================================================================ hamburger Menu body  */}
          <div className="flex flex-col justify-start items-start mt-7">
            <div className="w-full flex-row-center py-2 bg-body mb-3  hover:bg-blue hover:text-white hover:border-b-blue">
              <span className="mr-1.5 text-[17px] ">صفحه اصلی </span>
            </div>
            <div className="w-full flex-row-center py-2 mb-3 bg-body  hover:bg-blue hover:text-white hover:border-b-blue">
              <span className="mr-1.5 text-[17px] ">دسته بندی محصولات</span>
            </div>
            <div className="w-full flex-row-center py-2 mb-3  bg-body hover:bg-blue hover:text-white  hover:border-b-blue">
              <span className="mr-1.5 text-[17px] ">تخفیف و پیشنهاد ها</span>
            </div>
            <div className="w-full flex-row-center py-2 mb-3  bg-body  hover:bg-blue hover:text-white hover:border-b-blue">
              <span className="mr-1.5 text-[17px] ">سوالات متداول</span>
            </div>
            <div className="w-full flex-row-center py-2 mb-3  bg-body  hover:bg-blue hover:text-white hover:border-b-blue">
              <span className="mr-1.5 text-[17px] ">ثبت نام یا ورود</span>
            </div>
          </div>
        </div>
      </nav>
      {/* ============================================================ navbar-bottom */}
      <div className=" px-5 navbar-bottom bg-white shadow-lg text-gray-700 py-2 hidden lg:flex-row-center sticky top-0 ">
        <div className="flex-row-center ">
          <div className="flex-row-center ml-10 py-2 border-b-2 border-white hover:border-b-blue">
            <IoHome className="w-[25px] h-[25px] text-blue" />
            <span className="mr-1.5 text-[17px] ">صفحه اصلی </span>
          </div>
          <div className="flex-row-center ml-10 py-2 border-b-2 border-white hover:border-b-blue">
            <TbCategory className="w-[25px] h-[25px] text-blue" />
            <span className="mr-1.5 text-[17px] ">دسته بندی محصولات</span>
          </div>
          {/* <Link to='/'> */}
          <img
            src="images/logo.jpg"
            alt="logo"
            className="w-[140px] h-[55px] mr-7 ml-7"
          />
          {/* </Link> */}
          <div className="flex-row-center mr-14 py-2 border-b-2 border-white hover:border-b-blue">
            <MdOutlineLocalOffer className="w-[25px] h-[25px] text-blue" />
            <span className="mr-1.5 text-[17px] ">تخفیف و پیشنهاد ها</span>
          </div>
          <div className="flex-row-center mr-12 py-2 border-b-2 border-white hover:border-b-blue">
            <BsQuestionCircleFill className="w-[25px] h-[25px] text-blue" />
            <span className="mr-1.5 text-[17px] ">سوالات متداول</span>
          </div>
        </div>
      </div>
    </>
  );
}
