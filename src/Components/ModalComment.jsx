import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { useContext, useEffect, useState } from "react";
import Context from "../Context/context";
import { PostComment } from "../Services/Axios/Requests/Comments";
import axios from "axios";
import { toast } from "react-toastify";

export default function ModalComment() {
  const context = useContext(Context);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("User"));
    setUsername(getUserInfo.username);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function registerHandler(data) {
    const addComment = {
      username: username,
      text: data.text,
    };
    axios
      .post("https://mobo-server.liara.run/comment", addComment)
      .then((res) => console.log(res));
    reset();
    context.showModalComment(false);
    toast.success("ثبت شد و بعد از تایید نمایش داده میشود", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  function exitHandler() {
    context.showModalComment(false);
  }
  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className=" w-[300px] md:w-[500px]  flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1  ">
        <div className=" py-2 bg-blue rounded-t-lg">
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
          <h3 className="text-[18px] vazir-bold  pr-3  text-white">
            ثبت نظر جدید{" "}
          </h3>
        </div>
        <form onSubmit={handleSubmit(registerHandler)} className=" px-3 py-3">
          {/* =========================== */}
          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className="w-full flex flex-col items-start ">
              <label
                htmlFor="#text"
                className="vazir-bold text-[16px] min-w-[50px] mb-1 mr-1"
              >
                متن نظر :
              </label>

              <div className="w-full flex flex-col ">
                <textarea
                  {...register("text", {
                    required: "نظر خود را وارد کنید",
                  })}
                  cols="10"
                  rows="5"
                  placeholder="متن نظر خود را وارد کنید"
                  className="w-full mb-1 text-black p-3 text-[16px] border-[3px] border-blue  focus:outline-none rounded-xl "
                ></textarea>

                <div className="error text-center ">
                  {errors.text && errors.text.message}
                </div>
              </div>
            </div>
          </div>
          {/* ===========================image */}
          <div className="w-full  flex-row-center ">
            <button className="max-w-[120px] px-6 py-1.5 hover:text-blue text-md vazir-bold rounded-xl border-[3px] border-blue ">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
