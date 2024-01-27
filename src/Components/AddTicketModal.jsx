import ReactDOM from "react-dom";
import Context from "../Context/context";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PatchUser } from "../Services/Axios/Requests/Users";
import axios from "axios";
export default function AddTicketModal() {
  const context = useContext(Context);
  const [infoUser, setInfoUser] = useState();
  const [allUsers, setAllUsers] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function exitHandler() {
    context.AddTicket_Modal(false);
  }
  async function getAll_users() {
    const userInfo = JSON.parse(localStorage.getItem("User"));
    setInfoUser(userInfo.username);
    await axios
      .get(`https://mobo-server.liara.run/user?id=${userInfo.id}`)
      .then((res) => setAllUsers(res.data[0]));
  }

  useEffect(() => {
    getAll_users();
  }, []);

  async function registerHandler(data) {
    await getAll_users();

    const oldTiket = allUsers.tickets;
    console.log(infoUser);
    const dataTicket = {
      title: data.title,
      text: data.text,
      time: "1402/03/14",
      status: "درحال بررسی",
      username: infoUser,
    };

    axios
      .post("https://mobo-server.liara.run/ticket", dataTicket)
      .then((res) => console.log(res.data));

    await oldTiket.push(dataTicket);

    const editUser = { tickets: oldTiket };

    await PatchUser(editUser, allUsers.id).then((res) => res.data);

    const AddToList_Ticket = oldTiket.reverse();

    context.getNew_AllTicket(AddToList_Ticket);

    exitHandler();
  }

  return ReactDOM.createPortal(
    <div className="modal-parent direction">
      <div className="w-[90%] md:w-[65%] lg:w-[50%] flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1">
        <div className=" py-2 bg-blue flex flex-row items-center justify-between rounded-t-lg">
          <h3 className="text-[16px] md:text-[18px]  vazir-bold md:pr-3 pr-3  ">
            ثبت تیکت جدید
          </h3>
          <svg
            onClick={exitHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 float-left ml-3 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <form
          onSubmit={handleSubmit(registerHandler)}
          className="w-full flex flex-col  justify-between py-4 px-3"
        >
          <div className="w-full flex flex-col  ">
            <label htmlFor="title" className="mr-1 vazir-bold">
              عنوان تیکت :
            </label>
            <input
              id="title"
              type="text"
              placeholder="موضوع تیکت را وارد کنید"
              className="w-full px-3 py-2 border-[2px] border-gray-200 focus:outline-blue text- rounded-xl shadow-xl mt-1 "
              {...register("title", {
                required: "لطفا عنوان تیکت وارد کنید",
              })}
            />
            <div className="error text-center">
              {errors.title && errors.title.message}
            </div>
          </div>
          <div className="w-full flex flex-col mt-5 ">
            <label htmlFor="title" className="mr-1 vazir-bold">
              متن تیکت :
            </label>
            <textarea
              id="title"
              type="text"
              placeholder="متن تیکت را وارد کنید"
              className="w-full h-[100px] px-3 py-2 border-[2px] border-gray-200 focus:outline-blue text- rounded-xl shadow-xl mt-1 "
              {...register("text", {
                required: "لطفا متن تیکت وارد کنید",
              })}
            />
            <div className="error text-center">
              {errors.text && errors.text.message}
            </div>
          </div>
          <div className="w-full flex flex-col mt-5 items-center  text-center">
            <button
              type="submit"
              className="w-[35%] md:w-[25%]  py-2 shadow-xl bg-blue text-white rounded-xl text-[16px] md:text-[18px] hover:bg-white border-2 hover:border-blue hover:text-blue"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
