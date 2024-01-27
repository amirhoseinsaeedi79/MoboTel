import ReactDOM from "react-dom";
import { useContext } from "react";
import Context from "../Context/context";

export default function OrderModal(prop) {
  const context = useContext(Context);
  const AllCart = [
    {
      id: 1,
      name: "ایرپاد پرو 2",
      time: "14 / 4 / 1402",
      q: "1",
      price: "10,600,000",
      allprice: "500,000",
      src: "/public/images/airpod (3).webp",
    },
    {
      id: 2,
      name: "قاب موبایل آیفون 13",
      time: "20 / 12 / 1401",
      q: "1",
      price: "15,500,000",
      allprice: "800,000",
      src: "/public/images/cover (4).jpg",
    },
    {
      id: 1,
      name: "ساعت هوشمند نکست 2",
      time: "04 / 6 / 1401",
      q: "1",
      price: "450,000",
      allprice: "4,500,000",
      src: "/public/images/watch (5).jpg",
    },
  ];

  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className="w-[70%] md:w-[90%] lg:w-[60%] flex flex-col shadow-2xl rounded-xl mx-1 bg-white ">
        <div className=" py-2 blue rounded-t-xl">
          <svg
            onClick={() => context.showOrder(false)}
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
          <h3 className="text-[20px] vazir-bold md:pr-9 pr-3  text-gray-800">
            سفارش کاربر{" "}
          </h3>
        </div>
        <div className="bg-white  overflow-x-auto pt-2">
          <table className="w-full ">
            <thead className="border-b-2 border-blue">
              <tr>
                <th
                  scope="col"
                  className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                >
                  شماره
                </th>
                <th
                  scope="col"
                  className="text-sm text-black pl-3 xl:pl-12 pr-3 py-2 text-center max-w-[80px] "
                >
                  عکس
                </th>
                <th
                  scope="col"
                  className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                >
                  محصول
                </th>
                <th
                  scope="col"
                  className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                >
                  تعداد
                </th>
                <th
                  scope="col"
                  className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                >
                  قیمت
                </th>
                <th
                  scope="col"
                  className="text-sm text-black pl-6 pr-3 py-2 text-center min-w-[90px] "
                >
                  قیمت کل
                </th>
              </tr>
            </thead>
            <tbody>
              {AllCart.map((item) => (
                <tr key={item.id} className="text-center">
                  <th
                    scope="col"
                    className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                  >
                    {item.id}
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black  pr-5 py-2 text-center min-w-[80px] "
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="min-w-[80px] h-[70px]"
                    />
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pl-6 pr-3 py-2 text-center min-w-[180px] md:w-[80px] "
                  >
                    {item.name}
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                  >
                    {item.q}
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                  >
                    {item.price} تومان
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pl-6 pr-3 py-2 text-center max-w-[80px] "
                  >
                    {item.allprice} تومان
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full vazir-bold p-5 border-t-2 border-blue text-[15px] md:text-[17px]">
          <div className="mb-3">
            <span>جمع کل فاکتور :</span>
            <span className="mr-2 text-blue">4,800,000 تومان </span>
          </div>
          {/* ================= */}
          <div>
            <span>وضعیت سفارش :</span>
            <span className="mr-2 text-green-500">تکمیل</span>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
