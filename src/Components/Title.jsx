
import { IoIosMore } from 'react-icons/io'

export default function Title() {
  return (
    <div className="flex flex-row justify-between items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl my-4 md:my-7 text-[12px] md:text-[17px] vazir-bold">
    <div className="flex-row-center ">
      <img src="images/item.png" alt="" className='w-[20px] h-[20px] md:w-[32px] md:h-[32px]' />
      <span className="mr-3">
        پیشنهادات ویژه <span className="text-blue">فروشگاه</span>
      </span>
    </div>
    <div className="flex-row-center text-center pb-1 pt-2 border-b-[3px] border-white hover:border-blue">
      <span>مشاهده بیشتر</span>
      <IoIosMore className="text-blue w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-1" />
    </div>
  </div>
  )
}
