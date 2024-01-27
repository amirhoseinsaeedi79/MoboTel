import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineReply } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useState } from "react";
export default function UserComment(prop) {
  const [like, setLike] = useState(0);
  console.log("item log is " + prop);

  const [dislike, setDisLike] = useState(0);
  return (
    <div className="flex flex-col pb-7 ">
      {/* ================================================================ info user comments */}
      <div className="flex flex-row justify-between  pt-5 border-t-[3px] border-gray-300">
        <div className="flex flex-row items-center">
          <FaRegUserCircle className="w-[35px] h-[35px] text-gray-400 ml-3" />
          <div className="flex flex-col ">
            <span className="text-[17px]">{prop.item.username}</span>
            <span className="text-[14px] text-gray-700">خریدار</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex mb-2 md:mb-0 flex-row items-center md:ml-5 cursor-pointer">
            <MdOutlineReply className="w-[20px] md:w-[25px] h-[20px] md:h-[25px]" />
            <span className="text-[14px] md:text-4">پاسخ</span>
          </div>
          <div className="flex flex-col md:flex-row item-center">
            <div
              onClick={() => setLike((prev) => prev + 1)}
              className="flex flex-row items-center px-3 py-1 border-[2px] text-green-500  cursor-pointer"
            >
              <span>{like}</span>
              <BiLike className="w-[20px] h-[20px] mr-2" />
            </div>
            <div
              onClick={() => setDisLike((prev) => prev + 1)}
              className="flex flex-row items-center px-3 py-1 border-[2px] text-red-500 cursor-pointer"
            >
              <span>{dislike}</span>
              <BiDislike className="w-[20px] h-[20px] mr-2" />
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================ text comments */}
      <div className="px-4 py-3 bg-white rounded-xl border-[2px] mt-3 shadow-md">
        <p>{prop.item.text}</p>
      </div>
      <div className="flex flex-col md:flex-row  md:mr-3  mt-3 ">
        <div className="flex flex-row items-center mb-2 md:mb-0 md:ml-4">
          <img
            src="images/profile.jpg"
            className="w-[35px] h-[35px] text-gray-400 ml-3 rounded-full"
          />
          <div className="flex flex-col ">
            <span className="text-[17px] min-w-[123px]">امیرحسین سعیدی</span>
            <span className="text-[14px] text-blue">پشتیبانی</span>
          </div>
        </div>
        <p className="px-4 py-3 bg-blue rounded-xl border-[2px] text-white shadow-md">
          {prop.item.textAmin}
        </p>
      </div>
    </div>
  );
}
