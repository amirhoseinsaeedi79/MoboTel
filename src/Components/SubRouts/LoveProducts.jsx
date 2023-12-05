import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function LoveProducts() {
  const [favorate, setFavorate] = useState([]);

  useEffect(() => {
    const dataAt_localStorage = JSON.parse(localStorage.getItem("Favorate"));
    dataAt_localStorage.reverse();
    setFavorate(dataAt_localStorage);
  },[]);

  const removeItem = (item) => {
    const dataAt_localStorage = JSON.parse(localStorage.getItem("Favorate"));
    dataAt_localStorage.reverse();
    const items_filter = dataAt_localStorage.filter((items) => {
      return items.name !== item.name;
    });
    localStorage.setItem("Favorate", JSON.stringify(items_filter));
    setFavorate(items_filter);
    toast.error("از علاقه مندی ها حذف شد", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="py-6 px-4 bg-white shadow-xl border-[2px] pb-8 rounded-xl">
      <div className="w-full flex flex-col text-[16px] md:text-[18px]  vazir-bold">
        <h4>محصولات مورد پسند</h4>
        <div className="bg-gray-200 mt-4">
          <div className="w-[13%] h-[3px] bg-blue "></div>
        </div>
      </div>
      {/* =============================================================== Table Love Products // start */}
      {favorate.length !== 0 ? (
        <div className="flex flex-col vazir pt-5">
          <div className="overflow-x-auto sm:mx-0.5  ">
            <div className="py-2 inline-block min-w-full ">
              <div className="overflow-hidden border-[3px] border-gray-300 rounded-xl">
                <table className="min-w-full ">
                  <thead className="bg-white border-b-[2px] blue border-gray-300 ">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm text-black pr-9 py-4 text-right "
                      >
                        عکس محصول
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black pr-10 px-6 py-4 text-right "
                      >
                        نام محصول
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black pr-4 py-4 text-right "
                      >
                        دسته بندی
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black pr-6 py-4 text-right "
                      >
                        قیمت محصول
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black pr-6 py-4 text-right "
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {favorate.map((order) => (
                      <tr key={order.id} className="bg-gray-100 vazir-bold ">
                        <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                          <img
                            src={`/public/images/${order.imgae}`}
                            alt=""
                            className="w-[100px] h-[75px] rounded-xl"
                          />
                        </td>

                        <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                          {order.name}
                        </td>
                        <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                          {order.ctg}
                        </td>
                        <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                          {order.price} تومان
                        </td>
                        <td className="text-[15px]   px-6 py-4 whitespace-nowrap vazir-bold">
                          <button
                            onClick={() => removeItem(order)}
                            className="px-5 py-2 bg-red-500  ml-5 text-black rounded-xl"
                          >
                            حذف
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
      ) : (
        <div className="w-full h-[70px] bg-white flex-row-center mt-8">
          <span className="text-[16px] md:text-[18px] vazir-bold text-white px-5 py-3 bg-blue rounded-xl shadow-xl">
            محصولی انتخاب نکردید !
          </span>
        </div>
      )}

      {/* =============================================================== Table Love Products // finish */}
    </div>
  );
}
