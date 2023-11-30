import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";
import { useContext } from "react";

export default function ForgetPassword() {
  const context = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function registerHandler() {}

  return (
    <div className="w-full h-[100vh] flex-row-center  ">
      <div className="w-[300px] md:w-[450px] py-4 px-3 bg-white border-[3px] border-gray-200 shadow-lg rounded-2xl">
        {/* ========================================================================== Logo */}
        <div className="w-full flex-row-center">
          <img
            src="images/logo.jpg"
            alt=""
            className=" w-[140px] h-[55px]"
          />
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex-col-center"
        >
          {/* ========================================================================== Phone */}
          <div className="w-full flex flex-col items-center justify-center mt-1">
            <label htmlFor="#phone" className="w-[90%]  text-[17px] mb-1">
              شماره تماس :
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "وارد کردن شماره تماس اجباریست",
              })}
              className="w-[90%] h-[45px] px-5 bg-body border-[2px]  border-gray-200 shadow-sm rounded-lg focus:outline-blue"
            />
            <div className="error">
              {errors.phone && errors.phone.message}
            </div>
          </div>
          {/* ========================================================================== Buttons Reset */}
          <div className="w-full flex flex-row items-start mt-3 md:mt-4 text-[17px] px-[18px]">
            <button className="w-full py-[5px] bg-blue text-white mx-1 shadow-xl border-[3px] hover:border-blue  border-gray-200 rounded-lg">
              ارسال کدبازیابی
            </button>
          </div>
        </form>
        {/* ========================================================================== Back Route */}
        <div className=" flex flex-row items-start mt-2 md:mt-4 text-[18px] px-[18px]">
          <button
            onClick={() =>context.ShowPasswordHandler(false)}
            className="w-full py-[4px] bg-body text-blue mx-1 shadow-xl border-[3px] hover:border-blue  border-gray-200 rounded-lg"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
}
