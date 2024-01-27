import { useContext, useEffect, useState } from "react";
import Context from "../../Context/context";
import ShowModalTicket from "../ShowModalTicket";
import AddTicketModal from "../AddTicketModal";
import { GetUser } from "../../Services/Axios/Requests/Users";
import axios from "axios";

export default function Tickets() {
  const context = useContext(Context);
  const [infoTickets, setInfoTickets] = useState();
  const [allUsers, setAllUsers] = useState([]);

  const showModalTicket = (data) => {
    context.showTicket_Modal(true);
    setInfoTickets(data);
  };

  useEffect(() => {
    GetUser().then((res) => setAllUsers(res.data));
    context.getAllUser(allUsers);
    console.log("tickets:"+context.allTicket);
    const userInfo = JSON.parse(localStorage.getItem("User"));
    axios.get(`https://mobo-server.liara.run/user?username=${userInfo.username}`).then(res => context.getNew_AllTicket(res.data[0].tickets.reverse()
    ))
  },[]);

  return (
    <div className="py-6 px-4 bg-white shadow-xl border-[2px] pb-8 rounded-xl">
      <div className="w-full flex flex-col text-[16px] md:text-[18px]  vazir-bold">
        <h4>تیکت ها</h4>
        <div className="bg-gray-200 mt-4">
          <div className="w-[22%] md:w-[10%] h-[3px] bg-blue "></div>
        </div>
      </div>
      <div className="w-full py-5 px-2">
        <div className="w-full flex flex-row items-start">
          <button
            onClick={() => context.AddTicket_Modal(true)}
            className="px-3 py-2 mb-4 md:mb-0 bg-blue hover:text-blue border-2 hover:bg-white hover:border-blue vazir-bold text-white rounded-xl shadow-xl"
          >
            ارسال تیکت جدید
          </button>
        </div>
        {context.allTicket.length !== 0 ? (
          <>
            <div className="w-full flex flex-row justify-center">
              <div className="vazir-bold text-[20px] text-blue">
                تیکت های ارسال شده
              </div>
            </div>
            {/* =========================================================================== Table Tickets start */}
            <div className="flex flex-col vazir pt-5">
              <div className="overflow-x-auto sm:mx-0.5  ">
                <div className="py-2 inline-block min-w-full ">
                  <div className="overflow-hidden border-[3px] border-gray-300 rounded-xl">
                    <table className="min-w-full ">
                      <thead className="bg-white border-b-[2px] blue border-gray-300 ">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm text-black pr-6 py-4 text-right "
                          >
                            عنوان تیکت
                          </th>
                          <th
                            scope="col"
                            className="text-sm text-black pr-8 px-6 py-4 text-right "
                          >
                            تاریخ ارسال
                          </th>

                          <th
                            scope="col"
                            className="text-sm text-black pr-6 py-4 text-right "
                          >
                            نمایش محتوای تیکت
                          </th>
                          <th
                            scope="col"
                            className="text-sm text-black pl-4 py-4 text-center "
                          >
                            وضعیت تیکت
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {context.allTicket.map((ticket) => (
                          <tr
                            key={ticket.id}
                            className="bg-gray-100 vazir-bold "
                          >
                            <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                              {ticket.title}
                            </td>
                            <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                              1402/09/12
                            </td>
                            <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                              <svg
                                onClick={() => showModalTicket(ticket)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 hover:text-blue cursor-pointer mr-8"
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

                            <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold">
                              <button className="px-5 py-2 bg-green-500 ml-5 text-black rounded-xl">
                                {ticket.status}
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
          </>
        ) : (
          <div className="w-full h-[70px] bg-white flex-row-center mt-8">
            <span className="text-[16px] md:text-[18px] vazir-bold text-white px-5 py-3 bg-blue rounded-xl shadow-xl">
              تیکتی برای شما ثبت نشده !
            </span>
          </div>
        )}
        {context.showModalTicket && <ShowModalTicket info={infoTickets} />}
        {context.showAddModalTicket && <AddTicketModal />}
        {/* =========================================================================== Table Tickets Finish */}
      </div>
    </div>
  );
}
