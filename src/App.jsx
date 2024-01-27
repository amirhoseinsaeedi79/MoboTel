import { useLocation, useRoutes } from "react-router-dom";
import Router from "./Routes.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Context from "./Context/context.jsx";
import { useEffect, useState } from "react";
import { GetProduct } from "./Services/Axios/Requests/Products.jsx";
import GotoUp from "./Components/GotoUp.jsx";
import { GetUser } from "./Services/Axios/Requests/Users.jsx";
import axios from "axios";

export default function App() {
  // ================================================================ All States
  const [allProduct, setAllProduct] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [offersProduct, setOffersProduct] = useState([]);
  const [allCart, setAllCart] = useState([]);
  const [statusModal, setStatusModal] = useState(false);
  const [statusbestProduct, setStatusBestProduct] = useState(false);
  const [statusComment, setStatusComment] = useState(false);
  const [statusMenu, setStatusMenu] = useState(false);
  const [statusRoute, setStatusRoute] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [infoProduct, setInfoProduct] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [showModalTicket, setShowModalTicket] = useState(false);
  const [showAddModalTicket, setShowAddModalTicket] = useState(false);
  const [allTicket, setAllTicket] = useState([]);
  const [showUsername, setShowUsername] = useState("ورود / ثبت نام");
  const [numberNavbar, setNumberNavbar] = useState(0);
  const [favorate, setFavorate] = useState([]);
  // ================================================================ All functions
  const { pathname: location } = useLocation();
  let router = useRoutes(Router);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.pathname == "/Register") {
      setStatusRoute(true);
    } else {
      setStatusRoute(false);
    }
  }, [location]);

  useEffect(() => {
    if (isLogin) {
      const listFavorate = JSON.parse(localStorage.getItem("Favorate"));
      setFavorate(listFavorate);
    }
  }, []);



  useEffect(() => {
      GetProduct().then((res) => setAllProduct(res.data));
      GetUser().then((res) => setAllUsers(res.data));
      const dataAt_localStorage = JSON.parse(localStorage.getItem("Cart"));
      setAllCart(dataAt_localStorage);
  },[]);

  useEffect(() => {
    const resultOffers = allProduct.filter((item) => {
      return item.Discount >= 30;
    });
    setOffersProduct(resultOffers);
  }, [allProduct]);

  useEffect(() => {
    if (allCart != null) {
      let total_Number = 0;
      for (let obj of allCart) {
        total_Number += obj.q;
      }
      const resultOffer = total_Number;
      setNumberNavbar(resultOffer);
    }

  },[allCart]);

  const newProduct = (ctg) => {
    setAllProduct(ctg);
  };
  const setShow_Username = (ctg) => {
    setShowUsername(ctg);
  };
  const showTicket_Modal = (ctg) => {
    setShowModalTicket(ctg);
  };
  const getNew_AllTicket = (ctg) => {
    setAllTicket(ctg);
  };
  const AddTicket_Modal = (ctg) => {
    setShowAddModalTicket(ctg);
  };

  const showOffer = (ctg) => {
    setOffersProduct(ctg);
  };
  const showOrder = (ctg) => {
    setOrderModal(ctg);
  };

  const showInfoProduct = (ctg) => {
    setInfoProduct(ctg);
  };
  const ShowFormHandler = (ctg) => {
    setShowForm(ctg);
  };
  const editnumberNavbar = (ctg) => {
    setNumberNavbar(ctg);
  };
  const updateFavorate = (ctg) => {
    setFavorate(ctg);
  };
  const ShowPasswordHandler = (ctg) => {
    setShowPassword(ctg);
  };
  const showModalMenu = (ctg) => {
    setStatusMenu(ctg);
  };

  const showModal = (status) => {
    setStatusModal(status);
  };
  const showModalComment = (status) => {
    setStatusComment(status);
  };

  const bestshowModal = (status) => {
    setStatusBestProduct(status);
  };
  const getAllUser = (status) => {
    setAllUsers(status);
  };
  const changeNumber_Navbar = (status) => {
    setNumberNavbar(status);
  };

  async function login(newtoken) {
    localStorage.setItem("User", JSON.stringify(newtoken));
    setIsLogin(true);
    const userInfo = JSON.parse(localStorage.getItem("User"));
    axios
      .get(`https://mobo-server.liara.run/user?username=${userInfo.username}`)
      .then((res) => setAllTicket(res.data[0].tickets.reverse()));
  }

  function logout() {
    localStorage.removeItem("User");
    setIsLogin(false);
  }

  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user != null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  console.log("isloggin:", isLogin);

  return (
    <Context.Provider
      value={{
        allProduct,
        allCart,
        allTicket,
        statusModal,
        favorate,
        statusbestProduct,
        infoProduct,
        statusComment,
        statusMenu,
        offersProduct,
        showForm,
        showPassword,
        orderModal,
        isLogin,
        allUsers,
        showModalTicket,
        showAddModalTicket,
        showUsername,
        numberNavbar,
        newProduct,
        changeNumber_Navbar,
        setShow_Username,
        AddTicket_Modal,
        getNew_AllTicket,
        showTicket_Modal,
        getAllUser,
        showOrder,
        login,
        logout,
        ShowPasswordHandler,
        updateFavorate,
        editnumberNavbar,
        ShowFormHandler,
        showOffer,
        showModalMenu,
        showModalComment,
        bestshowModal,
        showInfoProduct,
        showModal,
      }}
    >
      {!statusRoute && <Navbar />}
      <GotoUp />
      {router}
      {!statusRoute && <Footer />}
    </Context.Provider>
  );
}
