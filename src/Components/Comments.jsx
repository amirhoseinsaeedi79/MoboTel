import { useContext } from "react";
import Context from "../Context/context";
import DataComments from "../Data/Comments";
import UserComment from "./UserComment";
import ModalComment from "./ModalComment";
import { toast } from "react-toastify";

export default function Comments() {
  const context = useContext(Context);

  const showModalComment = () => {
    if (context.isLogin) {
      context.showModalComment(true);
    } else {
      toast.error("لطفا ابتدا وارد حساب خود شوید", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  
  return (
    <div className=" py-2 px-2 md:px-3 mx-2 md:mx-3">
      <div className="mb-9">
        <button
          onClick={showModalComment}
          className="px-3 py-2 bg-blue text-white hover:text-white shadow-2xl text-[16px] rounded-xl vazir-bold "
        >
          افزودن نظر
        </button>
      </div>
      {context.statusComment && <ModalComment />}
      {/* ============================================================ all comments */}
      {DataComments.map((item) => (
        <UserComment key={item.id} item={item} />
      ))}
    </div>
  );
}
