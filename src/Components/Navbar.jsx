import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Context from "../Context/context";
import ModalMenu from "./ModalMenu";
export default function Navbar() {
  const context = useContext(Context);
  const navigate = useNavigate();
  const userButtom = useRef();
  const [statusMenu, setStatusMenu] = useState(false);

  const Menu = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!Menu.current.contains(e.target)) {
        setStatusMenu(false);
        context.showModalMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  useEffect(() => {
    const dataUser = localStorage.getItem("User");
    if (dataUser != null) {
      const user = JSON.parse(localStorage.getItem("User"));
      context.setShow_Username(user.username);
      userButtom.current.classList.add("border-green-500");
      userButtom.current.classList.add("text-green-600");
    } else {
      context.setShow_Username("ورود / ثبت نام");
      userButtom.current.classList.remove("border-green-500");
      userButtom.current.classList.remove("text-green-600");
    }
  });

  const loginHandler = () => {
    if (!context.isLogin) {
      navigate("/Register");
    } else {
      navigate("/UserAdmin/Profile");
    }
  };

  const exitMenu = () => {
    setStatusMenu(!statusMenu);
    context.showModalMenu(false);
  };
  const openMenu = () => {
    setStatusMenu(!statusMenu);
    context.showModalMenu(true);
  };

  return (
    <>
      <nav className="bg-white z-10">
        {/* ================================================ start navbar */}
        <div className="z-10 w-full flex flex-row justify-between  bg-white py-2 px-2 md:px-5 fixed top-0  lg:relative shadow-lg lg:shadow-none pb-2 lg:pb-0">
          {/* ================================================ topbar-right */}
          <div className="topbar-right flex-row-center py-2">
            <IoMenu onClick={openMenu} className="w-9 h-9 ml-3 lg:hidden " />
            <Link to="/">
              <img
                src="/public/images/logo.jpg"
                alt="logo"
                className="w-[120px] h-[45px]   md:w-[140px] md:h-[50px] lg:hidden"
              />
            </Link>
            <div className="relative  mr-5 lg:mr-0 hidden lg:flex">
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
                placeholder="جستجوی بیشتر ... "
              />
            </div>
          </div>
          {/* ================================================ topbar-left */}
          <div className="topbar-left flex-row-center vazir-bold text-gray-700">
            <div
              onClick={loginHandler}
              ref={userButtom}
              className="flex-row-center p-2 md:p-3 ml-3 cursor-pointer bg-white border-[2px] hover:border-[3px]  rounded-3xl shadow-md  border-gray-200"
            >
              <FaCircleUser className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-blue" />
              <div className="mr-3 hidden  lg:flex">{context.showUsername}</div>
            </div>
            <Link to="/Cart" className="flex-row-center p-2 md:p-3 cursor-pointer bg-gray-300 lg:bg-white hover:border hover:border-blue rounded-3xl shadow-md border-[1px] border-gray-200">
              <FaBasketShopping className="w-[22px] h-[22px] ml-2 md:w-[30px] md:h-[30px] text-blue" />
              <span  className="mx-3 hidden lg:flex">سبد خرید</span>
              <span className="px-2 py-1 lg:px-2 lg:py-1 text-[13px] lg:text-[15px] rounded-full bg-blue text-white shadow-xl ">
                2
              </span>
            </Link>
          </div>
        </div>
        {/* ================================================ hamburger Menu */}

        <div
          ref={Menu}
          className={`w-[320px] h-[100vh] bg-white fixed top-0 ${
            !statusMenu ? "right-[-320px]" : "right-0"
          } transition-all ease-in-out duration-500 z-[99999] p-3 `}
        >
          <div className="flex flex-row justify-between items-center vazir-bold ">
            <Link to="/" className="text-[20px]">
              فروشگاه <span className="text-blue">موبوتل</span>
            </Link>
            <IoMdClose
              onClick={exitMenu}
              className="w-[35px] h-[35px] cursor-pointer"
            />
          </div>
          <div className="flex-col-center pt-5">
            <Link to="/">
              <img
                src="src/assets/images/logo.jpg"
                alt="logo"
                className="w-[135px] h-[60px]"
              />
            </Link>
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
                placeholder="جستجوی بیشتر ... "
              />
            </div>
          </div>
          {/* ================================================================ hamburger Menu body  */}
          <div className="flex flex-col justify-start items-start mt-7">
            <Link
              onClick={exitMenu}
              to="/"
              className="w-full flex-row-center py-2 bg-body mb-3  hover:bg-blue hover:text-white hover:border-b-blue"
            >
              <span className="mr-1.5 text-[17px] ">صفحه اصلی </span>
            </Link>
            <Link
              onClick={exitMenu}
              to="/Products"
              className="w-full flex-row-center py-2 mb-3 bg-body  hover:bg-blue hover:text-white hover:border-b-blue"
            >
              <span className="mr-1.5 text-[17px] ">دسته بندی محصولات</span>
            </Link>
            <Link
              onClick={exitMenu}
              to="/Offers"
              className="w-full flex-row-center py-2 mb-3  bg-body hover:bg-blue hover:text-white  hover:border-b-blue"
            >
              <span className="mr-1.5 text-[17px] ">تخفیف و پیشنهاد ها</span>
            </Link>
            <Link
              onClick={exitMenu}
              to="/Questions"
              className="w-full flex-row-center py-2 mb-3  bg-body  hover:bg-blue hover:text-white hover:border-b-blue"
            >
              <span className="mr-1.5 text-[17px] ">سوالات متداول</span>
            </Link>
            <div
              onClick={exitMenu}
              className="w-full flex-row-center py-2 mb-3  bg-body  hover:bg-blue hover:text-white hover:border-b-blue"
            >
              <span className="mr-1.5 text-[17px] ">حساب کاربری</span>
            </div>
          </div>
        </div>
      </nav>
      {/* ============================================================ navbar-bottom */}
      <div className=" z-10  px-5 navbar-bottom bg-white shadow-lg text-gray-700 py-2 hidden lg:flex-row-center sticky top-0 ">
        <div className="flex-row-center   ">
          <Link
            to="/"
            className="flex-row-center ml-10 py-2 border-b-2 border-white hover:border-b-blue"
          >
            <IoHome className="w-[25px] h-[25px] text-blue" />
            <div className="mr-1.5 text-[17px] ">صفحه اصلی </div>
          </Link>
          <Link
            to="/Products"
            className="flex-row-center ml-10 py-2 border-b-2 border-white hover:border-b-blue"
          >
            <TbCategory className="w-[25px] h-[25px] text-blue" />
            <div className="mr-1.5 text-[17px] ">دسته بندی محصولات</div>
          </Link>
          <Link to="/">
            <img
              src="/public/images/logo.jpg"
              alt="logo"
              className="w-[140px] h-[55px] mr-7 ml-7"
            />
          </Link>
          <Link
            to="/Offers"
            className="flex-row-center mr-14 py-2 border-b-2 border-white hover:border-b-blue"
          >
            <MdOutlineLocalOffer className="w-[25px] h-[25px] text-blue" />
            <div className="mr-1.5 text-[17px]">تخفیف و پیشنهاد ها</div>
          </Link>
          <Link
            to="/Questions"
            className="flex-row-center mr-12 py-2 border-b-2 border-white hover:border-b-blue"
          >
            <BsQuestionCircleFill className="w-[25px] h-[25px] text-blue" />
            <div className="mr-1.5 text-[17px]">سوالات متداول</div>
          </Link>
        </div>
      </div>
      {context.statusMenu && <ModalMenu />}
    </>
  );
}
