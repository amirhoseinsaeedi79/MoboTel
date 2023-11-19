
export default function Company() {
  return (
    <div className="flex bg-white border-[1px] border-gray-200 shadow-xl py-2 flex-row flex-wrap justify-between xl:flex-row-center pl-3 xl:ml-0  mt-5 px-2 md:px-6 text-[20px]">
        {/* <span className="xl:3/12 p-2 border-r-4 border-blue vazir-bold">برندهای برتر <span className="text-blue">فروشگاه</span></span> */}
       <div className="w-full flex flex-row flex-wrap justify-between">
       <img src="images/app.png" alt=""  className="w-[65px] md:w-[130px] h-[35px] md:h-[80px] cursor-pointer  grayscale-[100%] hover:grayscale-0  "/>
        <img src="images/mi.png" alt=""  className="w-[65px] md:w-[130px] h-[35px] md:h-[80px] cursor-pointer mx-[1px]  grayscale-[100%] hover:grayscale-0 "/>
        <img src="images/can.png" alt=""  className="w-[65px] md:w-[130px] h-[35px] md:h-[80px] cursor-pointer mx-[1px]  grayscale-[100%] hover:grayscale-0"/>
        <img src="images/sam.png" alt=""  className="w-[65px] md:w-[130px] h-[35px] md:h-[80px] cursor-pointer  grayscale-[100%] hover:grayscale-0  "/>
        <img src="images/lenovo.png" alt="" className="w-[130px] h-[80px] cursor-pointer mx-2 hidden xl:flex mx-[px] grayscale-[100%] hover:grayscale-0" />

       </div>
    </div>
  )
}
