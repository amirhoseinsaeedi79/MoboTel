import { useContext } from "react";
import Allorder from "../../Data/Orders.jsx";
import OrderModal from "../OrderModal.jsx";
import Context from "../../Context/context.jsx";
export default function History() {
  const context = useContext(Context);
  return (
    <div className="py-6 px-4 bg-white shadow-xl border-[2px] pb-8 rounded-xl">
      <div className="w-full flex flex-col text-[16px] md:text-[18px]  vazir-bold">
        <h4> تاریخچه سفارشات</h4>
        <div className="bg-gray-200 mt-4">
          <div className="w-[50%] md:w-[17%] h-[3px] bg-blue "></div>
        </div>
      </div>
      {/* =================================================================== Table Orders // start */}
      <div className="flex flex-col vazir pt-5">
        <div className="overflow-x-auto sm:mx-0.5  ">
          <div className="py-2 inline-block min-w-full ">
            <div className="overflow-hidden border-[3px] border-blue rounded-xl">
              <table className="min-w-full ">
                <thead className="bg-white border-b-[2px] blue border-blue ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm text-black pl-6 pr-4 py-4 text-right max-w-[130px] "
                    >
                      شماره
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pr-7 py-4 text-right "
                    >
                      تاریخ سفارش
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pr-10 px-6 py-4 text-right "
                    >
                      کد پیگیری
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pr-6 py-4 text-right "
                    >
                      فاکتور
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pr-6 py-4 text-right "
                    >
                      قیمت فاکتور
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pl-4 py-4 text-center "
                    >
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Allorder.map((order) => (
                    <tr key={order.id} className="bg-gray-100 vazir-bold ">
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                        {order.id}
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        {order.time}
                      </td>

                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        {order.code}
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        <svg
                          onClick={() => context.showOrder(true)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8 hover:text-blue cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        {order.price} تومان
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold">
                        <button className="px-5 py-2 bg-green-500 ml-5 text-black rounded-xl">
                          {order.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {context.orderModal && <OrderModal />}

      {/* =================================================================== Table Orders // finish */}
    </div>
  );
}
