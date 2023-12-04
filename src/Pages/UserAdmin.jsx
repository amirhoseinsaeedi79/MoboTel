import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdOutlineChevronLeft } from "react-icons/md";
import { PiUserCircleDuotone } from "react-icons/pi";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { BsBasket2Fill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RiQuestionLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context/context";
import { toast } from "react-toastify";

export default function UserAdmin() {
  const [menuUser, setMenuUser] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    context.setShow_Username(user.username);
  }, []);

  const closeMenu = () => {
    setMenuUser(false);
    context.showModalMenu(false);
  };

  const openMenu = () => {
    setMenuUser(true);
    context.showModalMenu(true);
  };

  const navigate = useNavigate();
  const context = useContext(Context);
  const logOut = () => {
    context.logout();
    navigate("/");
    toast.error("از حساب خود خارج شدید", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="w-full pt-[95px] md:pt-28 lg:pt-6 pb-2 ">
      <div className="flex flex-row items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl mb-3  text-[14px] md:text-[16px] vazir-bold">
        <Link to="/">خانه</Link>
        <MdOutlineChevronLeft className="w-[16px] h-[16px] mx-2 " />
        <span className="text-blue pb-[2px] cursor-pointer">
          پروفایل کاربری
        </span>
      </div>
      <div className="md:px-3 mx-2 md:mx-3 flex my-6">
        {/* ========================================================================== Menu */}
        <div className="hidden lg:flex md:flex-col  w-[275px] h-[395px] ml-3 bg-white shadow-xl border-[2px]  rounded-xl py-4 px-3 sticky top-[85px] ">
          <div className="flex flex-row items-center border-b-[2px] pb-3">
            <PiUserCircleDuotone className="w-[45px] h-[45px] ml-2 text-blue" />
            <div className="flex flex-col items-start ">
              <span className=" text-blue mb-1 vazir-bold">حساب کاربری من</span>
              <span className="mt-1">{context.showUsername}</span>
            </div>
          </div>
          <NavLink
            to="/UserAdmin/Profile"
            className="w-full  item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <IoHomeOutline className="w-[22px] h-[22px] ml-2 " />
            <span> پروفایل</span>
          </NavLink>
          <NavLink
            to="/UserAdmin/EditProfile"
            className="w-full  item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <IoHomeOutline className="w-[22px] h-[22px] ml-2 " />
            <span>ویرایش پروفایل</span>
          </NavLink>
          <NavLink
            to="/UserAdmin/History"
            className="w-full item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <BsBasket2Fill className="w-[22px] h-[22px] ml-2 " />
            <span>تاریخچه سفارشات </span>
          </NavLink>
          <NavLink
            to="/UserAdmin/LoveProducts"
            className="w-full item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <FaRegHeart className="w-[22px] h-[22px] ml-2 " />
            <span>محصولات مورد پسند</span>
          </NavLink>
          <NavLink
            to="/UserAdmin/Tickets"
            className="w-full item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <RiQuestionLine className="w-[22px] h-[22px] ml-2 " />
            <span>تیکت ها</span>
          </NavLink>
          <div
            onClick={logOut}
            className="w-full cursor-pointer flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <LuLogOut className="w-[22px] h-[22px] ml-2 " />
            <span>خروج از حساب</span>
          </div>
        </div>

        {/* ========================================================================== hamburger Menu */}
        <div
          className={`lg:hidden flex flex-col z-[20000] w-[275px] h-[100vh] ml-3 bg-body shadow-xl border-[2px] border-gray-400  py-4 px-3 fixed top-0 ${
            menuUser ? "right-0" : "right-[-275px]"
          } transition-all ease-in-out duration-300 `}
        >
          <div className="w-full flex justify-end">
            <IoClose onClick={closeMenu} className="w-[30px] h-[30px]" />
          </div>
          <div className="flex flex-row items-center border-b-[2px] pb-3">
            <PiUserCircleDuotone className="w-[45px] h-[45px] ml-2 text-blue" />
            <div className="flex flex-col items-start ">
              <span className=" text-blue mb-1 vazir-bold">حساب کاربری من</span>
              <span className="mt-1">{context.showUsername}</span>
            </div>
          </div>
          <NavLink
            onClick={closeMenu}
            to="/UserAdmin/Profile"
            className="w-full  item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <IoHomeOutline className="w-[22px] h-[22px] ml-2 " />
            <span> پروفایل</span>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/UserAdmin/EditProfile"
            className="w-full  item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <IoHomeOutline className="w-[22px] h-[22px] ml-2 " />
            <span>ویرایش پروفایل</span>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/UserAdmin/History"
            className="w-full item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <BsBasket2Fill className="w-[22px] h-[22px] ml-2 " />
            <span>تاریخچه سفارشات </span>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/UserAdmin/LoveProducts"
            className="w-full item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <FaRegHeart className="w-[22px] h-[22px] ml-2 " />
            <span>محصولات مورد پسند</span>
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/UserAdmin/Tickets"
            className="w-full item-menu  flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <RiQuestionLine className="w-[22px] h-[22px] ml-2 " />
            <span>تیکت ها</span>
          </NavLink>
          <div
            onClick={logOut}
            className="w-full cursor-pointer flex flex-row items-center  mt-2 px-3 py-2 hover:bg-blue hover:text-white rounded-xl"
          >
            <LuLogOut className="w-[22px] h-[22px] ml-2 " />
            <span>خروج از حساب</span>
          </div>
        </div>
        <div
          onClick={openMenu}
          className="h-[63px] w-[80px]  lg:hidden fixed bottom-[50px] text-white border-2 border-black bg-blue rounded-xl p-2 text-center"
        >
          <span>مشاهده منو</span>
        </div>

        <div className="w-full lg:w-[90%] lg:mr-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
