import { useNavigate } from 'react-router-dom'
import { IoIosMore } from 'react-icons/io'
export default function Title(prop) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-row justify-between items-center border-[1px] border-gray-200 bg-white py-2 px-2 md:py-5 md:px-3 mx-2 md:mx-6 rounded-xl shadow-xl my-2 mb-7 text-[14px] md:text-[16px] vazir-bold">
    <div className="flex-row-center ">
      <img src="images/item.png" alt="" className='w-[20px] h-[20px] md:w-[32px] md:h-[32px]' />
      <span className="mr-3">
        {prop.title.textWhite} <span className="text-blue">{prop.title.textBlue}</span>
      </span>
    </div>
    <div onClick={()=>navigate('/Products')} className="flex-row-center cursor-pointer text-center pb-1 pt-2 border-b-[3px] border-white hover:border-blue">
      <span>{prop.title.more}</span>
      <IoIosMore className="text-blue w-[20px] h-[20px] md:w-[25px] md:h-[25px] mr-1" />
    </div>
  </div>
  )


}
