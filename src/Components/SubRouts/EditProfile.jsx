import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PatchUser } from "../../Services/Axios/Requests/Users";
import Context from "../../Context/context";
import { toast } from "react-toastify";
import { useNavigate, useNavigation } from "react-router-dom";
export default function EditProfile() {
  const [showUsername, setShowUsername] = useState("");

  const context = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    setShowUsername(user);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function registerHandler(data) {
    const editUser = {
      id: showUsername.id,
      fullname: data.name,
      username: data.username == "" ? showUsername.username : data.username,
      email: data.email == "" ? showUsername.email : data.email,
      address: data.address,
      password: data.password == "" ? showUsername.password : data.password,
      phone: data.phone == "" ? showUsername.phone : data.phone,
    };

    await PatchUser(editUser, showUsername.id).then((res) => console.log(res));
    reset();
    toast.success("اطلاعات با موفقیت ویرایش شد", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    context.login(editUser);
    context.setShow_Username(editUser.username)
  }

  return (
    <div className="py-6 px-4 bg-white shadow-xl border-[2px] rounded-xl">
      <div className="w-full flex flex-col text-[16px] md:text-[18px]  vazir-bold">
        <h4>ویرایش اطلاعات کاربری</h4>
        <div className="bg-gray-200 mt-4">
          <div className="w-[14%] h-[3px] bg-blue "></div>
        </div>
      </div>
      <form onSubmit={handleSubmit(registerHandler)} className="w-full lg:mt-3">
        <div className="flex flex-col md:flex-row items-center ">
          <div className=" w-full md:w-1/2 mt-5 flex flex-col justify-center ">
            <input
              {...register("name", {
                required: "وارد کردن نام اجباریست",
                minLength: {
                  value: 3,
                  message: "طول نام  کمتر از 3 کارکتر است",
                },
              })}
              type="text"
              className=" md:ml-3 px-5 py-3 lg:py-4  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
              placeholder="نام کامل خودرا وارد کنید"
            />
            <div className="error text-center">
              {errors.name && errors.name.message}
            </div>
          </div>
          <div className=" w-full md:w-1/2 mt-5 flex flex-col justify-center ">
            <input
              {...register("username", {
                minLength: {
                  value: 6,
                  message: "طول نام کاربری کمتر از 6 کارکتر است",
                },
              })}
              type="text"
              className=" md:mr-3 px-5 py-3 lg:py-4  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
              placeholder="نام کاربری خود را وارد کنید"
            />
            <div className="error  text-center">
              {errors.username && errors.username.message}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center lg:mt-1">
          <div className=" w-full lg::w-1/2 mt-5 flex flex-col justify-center ">
            <input
              {...register("email", {})}
              type="email"
              className=" md:ml-3 px-5 py-3 lg:py-4  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
              placeholder="ایمیل خودرا وارد کنید"
            />
            <div className="error text-center">
              {errors.email && errors.email.message}
            </div>
          </div>
          <div className="w-full ld:w-1/2 mt-5 flex flex-col justify-center ">
            <input
              {...register("address", {
                required: "وارد کردن آدرس اجباریست",
              })}
              type="text"
              className=" md:mr-3 px-5 py-3 lg:py-4  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
              placeholder="آدرس خود را وارد کنید"
            />
            <div className="error text-center">
              {errors.address && errors.address.message}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center lg:mt-1">
          <div className="w w-full md:w-1/2 mt-5 flex flex-col justify-center ">
            <input
              type="password"
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "حداقل طول کلمه عبور باید 8 کاراکتر باشد",
                },
              })}
              className=" md:ml-3 px-5 py-3 lg:py-4  focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
              placeholder="رمزعبور خودرا وارد کنید"
            />
            <div className="error text-center">
              {errors.password && errors.password.message}
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-5 flex flex-col justify-center ">
            <input
              type="text"
              {...register("phone", {
                minLength: {
                  value: 11,
                  message: "شماره وارد شده نادرست است",
                },
                maxLength: {
                  value: 12,
                  message: "شماره وارد شده نادرست است",
                },
              })}
              className=" md:mr-3 px-5 py-3 lg:py-4   focus:outline-blue border-[2px] border-gray-200 rounded-xl shadow-lg  "
              placeholder="شماره تماس خود را وارد کنید"
            />
            <div className="error text-center">
              {errors.phone && errors.phone.message}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-5 lg:mt-7 ">
          <button className="px-7 md:px-10 py-2 shadow-xl bg-blue text-white rounded-xl text-[16px] md:text-[18px] hover:bg-white border-2 hover:border-blue hover:text-blue">
            ویرایش
          </button>
        </div>
      </form>
    </div>
  );
}
