import { toast } from "react-toastify";



export default function useAddToFavorate(item, contexts,context) {

  const AddFavorate = () => {
    const dataLocalStorage = localStorage.getItem("Favorate");
    if (contexts == false) {
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
    if (dataLocalStorage == null && contexts == true) {
      localStorage.setItem("Favorate", JSON.stringify([item]));
      const listFavorate = JSON.parse(localStorage.getItem("Favorate"));
      context(listFavorate);
      toast.success("به علاقه مندی ها اضافه شد", {
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
      const allData_LocalStorage = JSON.parse(localStorage.getItem("Favorate"));
      const result = allData_LocalStorage.some((items) => {
        return items.name == item.name;
      });
      if (result && contexts == true) {
        const items_filter = allData_LocalStorage.filter((items) => {
          return items.name !== item.name;
        });
        localStorage.setItem("Favorate", JSON.stringify(items_filter));
        const listFavorate = JSON.parse(localStorage.getItem("Favorate"));
        context(listFavorate);
        toast.error("از علاقه مندی ها حذف شد", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else if (!result && contexts == true) {
        allData_LocalStorage.push(item);
        localStorage.setItem("Favorate", JSON.stringify(allData_LocalStorage));
        const listFavorate = JSON.parse(localStorage.getItem("Favorate"));
        context(listFavorate);
        toast.success("به علاقه مندی ها اضافه شد", {
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
  return AddFavorate();
  
}
