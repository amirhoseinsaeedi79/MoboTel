import { useEffect, useState } from "react";

export default function Profile() {
  const [showUsername, setShowUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    setShowUsername(user);
  },[]);

  return (
    <div className="py-6 px-4 bg-white shadow-xl border-[2px] pb-8 rounded-xl">
      <div className="w-full flex flex-col text-[16px] md:text-[18px]  vazir-bold">
        <h4> اطلاعات کاربری</h4>
        <div className="bg-gray-200 mt-4">
          <div className="w-[12%] h-[3px] bg-blue "></div>
        </div>
      </div>
      {/* ================================================================ Info  */}
      <div className="w-full md:mt-3 grid md:grid-cols-2 md:gap-x-20 md:gap-y-5">
        <div className="  flex flex-col items-start mt-3">
          <label htmlFor="#name" className="vazir-bold mb-1.5 mr-2 ">
            نام و نام خانوادگی :
          </label>
          <span
            id="name"
            className={`w-full h-[51px] overflow-hidden px-5 py-3 lg:py-3 border-[2px] ${
              showUsername.fullname == undefined
                ? "text-red-500"
                : "text-gray-600"
            }  border-gray-300 rounded-xl shadow-lg`}
          >
            {showUsername.fullname == undefined
              ? " برای شما ثبت نشده ..."
              : showUsername.fullname}
          </span>
        </div>
        <div className="w-full  flex flex-col items-start mt-3 ">
          <label htmlFor="#name" className="vazir-bold mb-1.5 mr-2 ">
            نام کاربری :
          </label>
          <span
            id="name"
            className={`w-full px-5 py-3 lg:py-3 border-[2px] ${
              showUsername.username == undefined
                ? "text-red-500"
                : "text-gray-600"
            }  border-gray-300 rounded-xl shadow-lg`}
          >
            {showUsername.username == undefined
              ? " برای شما ثبت نشده ..."
              : showUsername.username}
          </span>
        </div>
        <div className="w-full  flex flex-col items-start mt-2 md:mt-0">
          <label htmlFor="#name" className="vazir-bold mb-1.5 mr-2 ">
            آدرس :
          </label>
          <span
            id="name"
            className={`w-full px-5 py-3 lg:py-3 border-[2px] ${
              showUsername.address == undefined
                ? "text-red-500"
                : "text-gray-600"
            }  border-gray-300 rounded-xl shadow-lg`}
          >
            {showUsername.address == undefined
              ? " برای شما ثبت نشده ..."
              : showUsername.address}
          </span>
        </div>
        <div className="w-full  flex flex-col items-start mt-2 md:mt-0">
          <label htmlFor="#name" className="vazir-bold mb-1.5 mr-2 ">
            ایمیل :
          </label>
          <span
            id="name"
            className={`w-full px-5  py-3 lg:py-3 border-[2px] ${
              showUsername.email == undefined ? "text-red-500" : "text-gray-600"
            }  border-gray-300 rounded-xl shadow-lg`}
          >
            {showUsername.email == undefined
              ? " برای شما ثبت نشده ..."
              : showUsername.email}
          </span>
        </div>
        <div className="w-full  flex flex-col items-start mt-2 md:mt-0">
          <label htmlFor="#name" className="vazir-bold mb-1.5 mr-2 ">
            شماره تماس :
          </label>
          <span
            id="name"
            className={`w-full px-5 py-3 lg:py-3 border-[2px] ${
              showUsername.phone == undefined ? "text-red-500" : "text-gray-600"
            }  border-gray-300 rounded-xl shadow-lg`}
          >
            {showUsername.phone == undefined
              ? " برای شما ثبت نشده ..."
              : showUsername.phone}
          </span>
        </div>
        <div className="w-full  flex flex-col items-start mt-2 md:mt-0">
          <label htmlFor="#name" className="vazir-bold mb-1.5 mr-2 ">
            رمز عبور :
          </label>
          <span
            id="name"
            className={`w-full px-5 py-3 lg:py-3 border-[2px] ${
              showUsername.password == undefined
                ? "text-red-500"
                : "text-gray-600"
            }  border-gray-300 rounded-xl shadow-lg`}
          >
            {showUsername.password == undefined
              ? " برای شما ثبت نشده ..."
              : showUsername.password}
          </span>
        </div>
      </div>
    </div>
  );
}
