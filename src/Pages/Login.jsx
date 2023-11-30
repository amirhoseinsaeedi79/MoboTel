import { useForm } from "react-hook-form";
import Context from "../Context/context";
import { useContext } from "react";
import { toast } from "react-toastify";
import { GetUser } from "../Services/Axios/Requests/Users";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const context = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function registerHandler(data) {
    GetUser()
      .then((res) => res.data)
      .then((allUser) => {
        let result = allUser.find(function (users) {
          return (
            users.username == data.username && users.password == data.password
          );
        });
        if (result == undefined) {
          toast.error("رمز عبور یا نام کاربری اشتباه است", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.success("با موفقیت وارد شدید", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          reset();
          context.login(result);
          navigate(-1);
        }
      });
  }

  return (
    <div className="w-full h-[100vh] flex-row-center  ">
      <div className="w-[300px] md:w-[450px] py-4 px-3 bg-white border-[3px] border-gray-200 shadow-lg rounded-2xl">
        {/* ========================================================================== Logo */}
        <div className="w-full flex-row-center">
          <img
            src="images/logo.jpg"
            alt=""
            className="w-[150px] md:w-[160px] h-[60px] md:h-[70px]"
          />
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex-col-center"
        >
          {/* ========================================================================== Username */}
          <div className="w-full flex flex-col items-center justify-center mt-1">
            <label htmlFor="#username" className="w-[90%]  text-[17px] mb-2">
              نام کاربری :
            </label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "لطفا نام کاربری خودرا وارد کنید",
                minLength: {
                  value: 6,
                  message: "طول نام کاربری کمتر از 6 کارکتر است",
                },
              })}
              className="w-[90%] h-[45px] px-5 bg-body border-[2px]  border-gray-200 shadow-sm rounded-lg focus:outline-blue"
            />
            <div className="error">
              {errors.username && errors.username.message}
            </div>
          </div>
          {/* ========================================================================== Password */}
          <div className="w-full flex flex-col items-center justify-center mt-3">
            <label htmlFor="#username" className="w-[90%]  text-[17px] mb-2">
              رمز عبور :
            </label>
            <input
              type="password"
              id="username"
              {...register("password", {
                required: "لطفا رمزعبور خودرا وارد کنید ",
                minLength: {
                  value: 8,
                  message: "حداقل طول کلمه عبور باید 8 کاراکتر باشد",
                },
              })}
              className="w-[90%] h-[45px] px-5 bg-body border-[2px]  border-gray-200 shadow-sm rounded-lg focus:outline-blue"
            />
            <div className="error">
              {errors.password && errors.password.message}
            </div>
          </div>
          {/* ========================================================================== Forgot Password */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:mr-6 mt-6  md:text-[17px] ">
            <span>رمز عبور خود را فراموش کرده‌اید؟ </span>
            <span
              onClick={() => context.ShowPasswordHandler(true)}
              className="text-blue cursor-pointer mr-3"
            >
              بازیابی رمز{" "}
            </span>
          </div>
          {/* ========================================================================== Buttons */}
          <div className="w-full flex flex-row items-start mt-3 md:mt-6 text-[17px] px-[18px]">
            <button className="w-[65%] py-[4px] bg-blue text-white mx-1 shadow-xl border-[2px]  border-gray-200 rounded-lg">
              ورود
            </button>
            <button
              onClick={() => context.ShowFormHandler(true)}
              type="button"
              className="w-[35%] py-[4px] bg-white text-blue mx-1 shadow-xl border-[2px] hover:text-white hover:bg-blue  border-blue rounded-lg"
            >
              ثبت نام
            </button>
          </div>
        </form>
        {/* ========================================================================== Back Route */}
        <div className=" flex flex-row items-start mt-2 md:mt-4 text-[18px] px-[18px]">
          <button
            onClick={() => history.back()}
            className="w-full py-[4px] bg-body text-blue mx-1 shadow-xl border-[3px] hover:border-blue  border-gray-200 rounded-lg"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
}
