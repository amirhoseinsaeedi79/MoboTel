import { useContext } from "react";
import Context from "../Context/context";
import DataComments from "../Data/Comments";
import UserComment from "./UserComment";
import ModalComment from "./ModalComment";

export default function Comments() {
  const context = useContext(Context);

  return (
    <div className=" py-2 px-2 md:px-3 mx-2 md:mx-3">
      <div className="mb-10">
        <button
          onClick={() => context.showModalComment(true)}
          className="px-4 py-2 bg-blue hover:text-white shadow-2xl text-[18px] rounded-xl vazir-bold "
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
