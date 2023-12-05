import { useContext } from "react";
import Context from "../Context/context";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgetPassword from "../Components/ForgetPassword";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const context = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      {!context.isLogin ? (
        context.showPassword ? (
          <ForgetPassword />
        ) : context.showForm ? (
          <SignUp />
        ) : (
          <Login />
        )
      ) : (
        navigate(-1)
      )}
    </>
  );
}
