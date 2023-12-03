import { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Context from "../Context/context";
import { PiUserCircleDuotone } from "react-icons/pi";
import { useRef } from "react";
export default function ShowModalTicket(prop) {
  const context = useContext(Context);
  const anser = useRef()
  prop.info.anserAdmin

  useEffect(()=>{
    if (prop.info.anserAdmin == undefined) {
      anser.current.classList.add("hidden")
    }else{
      anser.current.classList.remove("hidden")
    }
  },[])



  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className="w-[90%] md:w-[90%] lg:w-[60%] flex flex-col shadow-2xl rounded-xl mx-1  ">
        <div className="py-2 blue rounded-t-lg flex flex-row items-center justify-between">
          <h3 className="text-[18px]  md:pr-5 pr-3">{`عنوان : ${prop.info.title}`}</h3>
          <svg
            onClick={() => context.showTicket_Modal(false)}
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
        </div>
        <div className="bgTicket  rounded-b-lg">
          <div className="w-full p-2 pt-4 flex ">
            <PiUserCircleDuotone className="w-[35px] h-[35px] ml-1" />
            <div className="w-[90%] md:w-[70%] flex flex-col px-3 pt-3 bg-blue rounded-t-2xl rounded-l-2xl text-gray-100 ">
              <p className="mb-2">{prop.info.text}</p>
              <span className="w-full  text-left pb-1  text-[14px] mt-2 text-white">
              1402/09/14
              </span>
            </div>
          </div>
          <div ref={anser}  className="w-full flex flex-row items-end justify-end p-3 ">
            <div className="w-[90%] md:w-[70%] px-3 pt-3  bg-white shadow-md border-[2px] border-gray-300 rounded-t-2xl rounded-r-2xl ">
              <p className="mb-2 ">{prop.info.anserAdmin}</p>
              <span className="w-full text-[14px] mt-2 text-gray-600">
                {" "}
                1402/09/15
              </span>
            </div>
            <img
              src="/public/images/profile.jpg"
              className="w-[35px] h-[35px] mr-1 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
