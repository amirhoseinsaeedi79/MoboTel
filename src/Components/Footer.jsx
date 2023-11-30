import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-white px-2.5 md:px-7 pt-3 flex  items-center flex-wrap flex-row justify-between py-5">
        <div className=" ">
          <h3 className="vazir-bold text-[17px] md:text-[20px] text-blue">دسترسی سریع</h3>
          <div className="flex flex-col text-[15px]">
            <span className="mt-3 hover:text-blue">صفحه اصلی</span>
            <span className="mt-3 hover:text-blue">ارتباط باما</span>
            <span className="mt-3 hover:text-blue pl-1">تخفیف ها و پیشنهاد ها</span>
            <span className="mt-3 hover:text-blue">دسته بندی محصولات</span>
            <span className="mt-3 hover:text-blue">سوالات متداول</span>
            <span className="mt-3 hover:text-blue">حساب کاربری</span>
          </div>
        </div>
        <div className=" ">
          <h3 className="vazir-bold text-[17px] md:text-[20px] text-blue">
            برند برتر محصولات
          </h3>
          <div className="flex flex-col text-[15px]">
            <span className="mt-3 hover:text-blue">هیسکا</span>
            <span className="mt-3 hover:text-blue">آیفون</span>
            <span className="mt-3 hover:text-blue">سامسونگ</span>
            <span className="mt-3 hover:text-blue">شیایومی</span>
            <span className="mt-3 hover:text-blue">لنوو</span>
            <span className="mt-3 hover:text-blue">اکو</span>
          </div>
        </div>

        <div className="mt-6 md:mt-0 ">
          <h3 className="vazir-bold text-[17px] md:text-[20px]  text-blue">
            ارتباط با ما
          </h3>
          <div className="flex flex-col items-start ">
            <div className="flex-row-center mt-6">
              <FaLocationDot className="w-[18px] text-blue h-[18px] ml-2" />
              <span>تهران - ولیعصر خیابان مهر پلاک 12</span>
            </div>
            <div className="flex-row-center mt-4">
              <FaPhone className="w-[18px] text-blue h-[18px] ml-2" />
              <span>021-37564018</span>
            </div>
            <div className="flex-row-center mt-4">
              <FaPhone className="w-[18px] text-blue h-[18px] ml-2" />
              <span>09123456789</span>
            </div>
            <div className="flex-row-center mt-4">
              <MdEmail className="w-[18px] text-blue h-[18px] ml-2" />
              <span>mobotel@gmail.com</span>
            </div>
            <div className="flex-row-center mt-4">
              <MdEmail className="w-[18px] text-blue h-[18px] ml-2" />
              <span>mobotel-city@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[300px] items-center flex-1 md:flex-none md:mr-[220px] lg:mr-0 mt-8 lg:mt-0">
          <div className="mb-5">
            <span className="text-[25px] vazir">
              فروشگاه{" "}
              <span className="text-[25px] text-blue vazir ">موبوتل</span>
            </span>
          </div>
          <div className="flex-row-center mb-3">
            <img src="images/rezi.png" alt="" className="w-[80px] h-[80px]" />
            <img
              src="images/enamad.png"
              alt=""
              className="w-[80px] h-[80px]"
            />
          </div>
          <div className="flex flex-row justify-around mt-8 w-full">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="25"
              height="25"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="25"
              height="25"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="25"
              height="25"
              alt="inst"
            />
          </div>
        </div>
      </footer>
      <div className="w-full h-10 bg-body text-black flex-row-center vazir-bold border-t-[3px] ">
        <span className="text-blue text-md vazir">
          \\ Developer : Amirhosein Saeedi //
        </span>
      </div>
    </>
  );
}
