

import ReactDOM from "react-dom";
import  { useContext } from 'react'
import Context from '../Context/context';

export default function BestModal(info) {
     
    const context = useContext(Context);


  function exitHandler() {
    context.bestshowModal(false)
  }


    return ReactDOM.createPortal(
        <div className="modal-parent active">
          <div className="w-[90%] md:w-[65%] lg:w-[50%] xl:w-[35%]  flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1">
            <div className=" py-2 bg-blue rounded-t-lg">
              <svg
                onClick={exitHandler}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 float-left ml-3 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <h3 className="text-[22px] vazir-bold md:pr-3 pr-3  text-white">
                مشخصات محصول
              </h3>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between py-4">
              {/* ===== */}
    
              <div className="info pt-1">
                <div className="mr-4 flex flex-col md:flex-row">
                  <span className="text-[20px] text-blue vazir-bold ml-2">نام :</span>
                  <span className="text-[20px] ">{info.item.name}</span>
                </div>
    
                <div className="mr-4 mt-3 ">
                  <span className="text-[20px] text-blue vazir-bold ml-2">وضعیت موجودی :</span>
                  <span className="text-[20px] text-green-500 ">موجود</span>
                </div>
    
    
                <div className="mr-4 mt-3 ">
                  <span className="text-[20px] text-blue vazir-bold ml-2">قیمت قبلی :</span>
                  <span className="text-lg text-red-500">
                  {info.item.oldPrice} 
                  </span>
                </div>
                <div className="mr-4 mt-3 ">
                  <span className="text-[20px] text-blue vazir-bold ml-2">قیمت با تخفیف :</span>
                  <span className="text-lg text-green-500">
                  {info.item.newPrice}
                  </span>
                </div>
              </div>
              <div className="flex-row-center ml-3">
                <img
                  src={info.item.image}
                  alt="airpod1"
                  className="w-[170px] h-[170px]"
                />
              </div>
              {/* ====== */}
            </div>
          </div>
        </div>,
        document.getElementById("modals-parent")
      );
    }
    