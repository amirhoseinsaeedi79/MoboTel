import { useLocation, useRoutes } from "react-router-dom";
import Router from "./Routes.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Context from "./Context/context.jsx";
import { useEffect, useState } from "react";
import { GetProduct } from "./Services/Axios/Requests/Products.jsx";
import GotoUp from "./Components/GotoUp.jsx";
export default function App() {
  // ================================================================ All States
  const [allProduct, setAllProduct] = useState([]);
  const [offersProduct, setOffersProduct] = useState([]);
  const [statusModal, setStatusModal] = useState(false);
  const [statusbestProduct, setStatusBestProduct] = useState(false);
  const [statusComment, setStatusComment] = useState(false);
  const [statusMenu, setStatusMenu] = useState(false);
  const [statusRoute, setStatusRoute] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [infoProduct, setInfoProduct] = useState({});
  const [isLogin, setIsLogin] = useState(false);
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
  },[location]);

  useEffect(() => {
    GetProduct().then((res) => setAllProduct(res.data));
  },[]);

  useEffect(() => {
    const resultOffers = allProduct.filter((item) => {
      return item.Discount >= 30;
    });
    setOffersProduct(resultOffers);
  },[allProduct]);

  const newProduct = (ctg) => {
    setAllProduct(ctg);
  };

  const showOffer = (ctg) => {
    setOffersProduct(ctg);
  };

  const showInfoProduct = (ctg) => {
    setInfoProduct(ctg);
  };
  const ShowFormHandler = (ctg) => {
    setShowForm(ctg);
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


  async function login(newtoken){
    localStorage.setItem("User", JSON.stringify(newtoken));
    setIsLogin(true);
  }
  
  function logout() {
    localStorage.removeItem("User");
    setIsLogin(false);
  }
  
  useEffect(()=>{
    const user = localStorage.getItem("User");
    if(user !=null){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  },[])
  console.log("isloggin:", isLogin);

  return (
    <Context.Provider
      value={{
        allProduct,
        statusModal,
        statusbestProduct,
        infoProduct,
        statusComment,
        statusMenu,
        offersProduct,
        showForm,
        showPassword,
        newProduct,
        login,
        logout,
        ShowPasswordHandler,
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
