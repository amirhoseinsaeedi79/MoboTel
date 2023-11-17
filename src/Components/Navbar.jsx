import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="bg-white shadow-lg">
      {/* ================================================ start navbar */}
      <div className="container flex flex-row justify-between px-5">
        {/* ================================================ topbar-right */}
        <div className="topbar-right flex-row-center py-2">
          {/* <Link to='/'> */}
          <img
            src="images/logo.jpg"
            alt="logo"
            className="w-[140px] h-[60px]"
          />
          {/* </Link> */}
          <div className="relative px-3 mr-5">
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
              className="w-[400px] h-[50px] px-8 py-1.5 pl-10  text-gray-900 bg-gray-100 rounded-3xl border border-gray-200 focus:outline-none"
              placeholder="جستجوی محصولات ... "
            />
          </div>
        </div>
        {/* ================================================ topbar-left */}
        <div className="topbar-left flex-row-center vazir-bold text-gray-700">
          <div className="flex-row-center p-3.5 ml-3 cursor-pointer  bg-white hover:border hover:border-blue rounded-3xl shadow-lg border-[1px] border-gray-200">
            <FaCircleUser className="w-[28px] h-[28px] text-blue" />
            <span className="mr-3 vazir">ورود / ثبت نام</span>
          </div>
          <div className="flex-row-center p-3 cursor-pointer bg-white hover:border hover:border-blue rounded-3xl shadow-lg border-[1px] border-gray-200">
            <CiShoppingBasket className="w-[28px] h-[30px] text-blue" />
            <span className="mx-3">سبد خرید</span>
            <span className="px-3 py-1 rounded-full bg-blue shadow-xl text-white">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
