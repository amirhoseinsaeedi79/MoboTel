import { Link } from "react-router-dom";
import { MdOutlineChevronLeft } from "react-icons/md";
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
              <Link to='/Payment' className="line-step-box  complete ">
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
    </div>
  );
}
