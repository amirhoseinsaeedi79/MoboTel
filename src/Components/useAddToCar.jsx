import { toast } from "react-toastify";

export default function useAddToCart(item, context) {

  const AddCart = () => {
    const dataLocalStorage = localStorage.getItem("Cart");
    if (context == false) {
      toast.error("لطفا ابتدا وارد حساب خود شوید", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (dataLocalStorage == null && context == true) {
      localStorage.setItem("Cart", JSON.stringify([item]));
      toast.success("به سبد خرید اضافه شد", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const allData_LocalStorage = JSON.parse(localStorage.getItem("Cart"));
      const result = allData_LocalStorage.some((items) => {
        return items.name == item.name;
      });
      if (result && context == true) {
        toast.error("این محصول در سبد خرید وجود دارد", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (!result && context == true) {
        allData_LocalStorage.push(item);
        localStorage.setItem("Cart", JSON.stringify(allData_LocalStorage));
        toast.success("به سبد خرید اضافه شد", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  return AddCart();
}
