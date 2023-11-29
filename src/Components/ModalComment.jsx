import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { useContext } from "react";
import Context from "../Context/context";

export default function ModalComment() {
  const context = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function registerHandler() {}

  function exitHandler() {
    context.showModalComment(false);
  }

  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className=" w-[300px] md:w-[350px]  flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1  ">
        <div className=" py-2 bg-blue rounded-t-lg">
          <svg
            onClick={exitHandler}
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
          <h3 className="text-[22px] vazir-bold  pr-3  text-white">
            ثبت نظر جدید{" "}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className=" px-3 py-3"
        >
          {/* ===========================name */}
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
            <div className=" flex flex-row items-baseline ">
              <label
                htmlFor="#id"
                className="vazir-bold text-[18px] "
              >
                نام :
              </label>
              <div className="mr-[50px] flex flex-col">
                <input
                  id="name"
                  type="text"
                  className="w-[190px] md:w-[240px] mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("name", {
                    required: "وارد کردن نام اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.name && errors.name.message}
                </div>
              </div>
            </div>
          </div>
          {/* ===========================price */}
          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className=" flex flex-row items-baseline ">
              <label
                htmlFor="#email"
                className="vazir-bold text-[18px] min-w-[60px] "
              >
                ایمیل :
              </label>
              <div className="mr-[22px] flex flex-col">
                <input
                  id="email"
                  type="email"
                  className="w-[190px] md:w-[240px] mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("email", {
                    required: "وارد کردن ایمیل اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.email && errors.email.message}
                </div>
              </div>
            </div>
          </div>
          {/* =========================== */}

          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className=" flex flex-row items-baseline ">
              <label
                htmlFor="#text"
                className="vazir-bold text-[18px] ml-8 min-w-[50px]"
              >
                نظر :
              </label>

              <div className=" flex flex-col ">
                <textarea
                  {...register("text", {
                    required: "نظر خود را وارد کنید",
                  })}
                  cols="30"
                  rows="7"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                ></textarea>

                <div className="error ">
                  {errors.text && errors.text.message}
                </div>
              </div>
            </div>
          </div>
          {/* ===========================image */}
          <div className="w-full  flex-row-center ">
            <button className="max-w-[120px] px-6 py-1.5 hover:text-blue text-md vazir-bold rounded-xl border-[3px] border-blue mt-3 np">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
