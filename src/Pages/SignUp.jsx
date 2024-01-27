import { useForm } from "react-hook-form";
import Context from "../Context/context";
import { useContext } from "react";
import { toast } from "react-toastify";
import { PostUser } from "../Services/Axios/Requests/Users";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const context = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const AllTicket = {
    id: 1,
    title: "برگشت وجه ",
    text: "سلام وقت بخیر برای برگشت وجه فاکتور شماره 12545 مزاحم شدم ممنون میشم مبلغ رو به حسابم برگردونید ",
    time: "1402/03/14",
    anserAdmin:
      "سلام وقت شماهم بخیر بله حتما لطفا شماره کارت خودتون رو بفرستید تادر اسرع وقت براتون واریز بشه",
    status: "بسته شده‌",
    dataAnswer: "1402/03/15",
  };

  function registerHandler(data) {
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
      favourites: [],
      comment: [],
      tickets: [AllTicket],
      
    };

    if (data.password !== data.reapetPassword) {
      toast.error("رمز عبور و تکرار آن برابر نیست ", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      PostUser(newUser).then((res) => context.login(res.data));
      reset();
      context.login(newUser)
      toast.success("ثبت نام با موفقیت انجام شد", {
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
  }

  return (
    <div className="w-full  flex-row-center ">
      <div className="w-[300px] md:w-[450px] my-10 py-4 px-3 bg-white border-[3px] border-gray-200 shadow-lg rounded-2xl">
        {/* ========================================================================== Logo */}

        <div className="w-full flex-row-center">
          <img src="images/logo.jpg" alt="" className=" w-[140px] h-[55px]" />
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex-col-center"
        >
          {/* ========================================================================== Username */}

          <div className="w-full flex flex-col items-center justify-center mt-1">
            <label htmlFor="#username" className="w-[90%]  text-[17px] mb-1">
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

          {/* ========================================================================== Email */}
          <div className="w-full flex flex-col items-center justify-center mt-3">
            <label htmlFor="#email" className="w-[90%]  text-[17px] mb-1">
              ایمیل :
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "لطفا ایمیل خودرا وارد کنید",
              })}
              className="w-[90%] h-[45px] px-5 bg-body border-[2px]  border-gray-200 shadow-sm rounded-lg focus:outline-blue"
            />
            <div className="error">{errors.email && errors.email.message}</div>
          </div>
          {/* ========================================================================== Phone */}

          <div className="w-full flex flex-col items-center justify-center mt-3">
            <label htmlFor="#phone" className="w-[90%]  text-[17px] mb-1">
              شماره تماس :
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "لطفا شماره تماس خودرا وارد کنید",
                minLength: {
                  value: 11,
                  message: "شماره وارد شده نادرست است",
                },
                maxLength: {
                  value: 12,
                  message: "شماره وارد شده نادرست است",
                },
              })}
              className="w-[90%] h-[45px] px-5 bg-body border-[2px]  border-gray-200 shadow-sm rounded-lg focus:outline-blue"
            />
            <div className="error">{errors.phone && errors.phone.message}</div>
          </div>
          {/* ========================================================================== Password */}

          <div className="w-full flex flex-col items-center justify-center mt-3">
            <label htmlFor="#username" className="w-[90%]  text-[17px] mb-1">
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
          {/* ========================================================================== Repeat Username */}

          <div className="w-full flex flex-col items-center justify-center mt-3">
            <label
              htmlFor="#reapetPassword"
              className="w-[90%]  text-[17px] mb-1"
            >
              تکرار کلمه عبور :
            </label>
            <input
              type="password"
              id="reapetPassword"
              {...register("reapetPassword", {
                required: "لطفا تکرار رمز عبور خود را وارد کنید",
                minLength: {
                  value: 8,
                  message: "حداقل طول کلمه عبور باید 8 کاراکتر باشد",
                },
              })}
              className="w-[90%] h-[45px] px-5 bg-body border-[2px]  border-gray-200 shadow-sm rounded-lg focus:outline-blue"
            />
            <div className="error">
              {errors.reapetPassword && errors.reapetPassword.message}
            </div>
          </div>
          {/* ==========================================================================  Buttons */}
          <div className="w-full flex flex-row items-start mt-3 md:mt-4 text-[17px] px-[18px]">
            <button className="w-full py-[4px] bg-blue text-white mx-1 shadow-xl border-[3px] hover:border-blue  border-gray-200 rounded-lg">
              ثبت نام
            </button>
          </div>
        </form>
        {/* ========================================================================== Back Route */}

        <div className=" flex flex-row items-start mt-2 md:mt-4 text-[18px] px-[18px]">
          <button
            onClick={() => context.ShowFormHandler(false)}
            className="w-full py-[4px] bg-body text-blue mx-1 shadow-xl border-[3px] hover:bg-blue hover:text-white  border-gray-200 rounded-lg"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
}
