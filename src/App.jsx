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
  const [statusModal, setStatusModal] = useState(false);
  const [statusbestProduct, setStatusBestProduct] = useState(false);
  const [statusComment, setStatusComment] = useState(false);
  const [statusMenu, setStatusMenu] = useState(false);
  const [infoProduct, setInfoProduct] = useState({});

  // ================================================================ All functions
  const  {pathname :location}=useLocation()
  useEffect(() =>{
    window.scrollTo(0,0)
  },[location])
  
  useEffect(()=>{
    GetProduct().then(res=>setAllProduct(res.data))
  },[])

  const newProduct = (ctg)=>{
    setAllProduct(ctg)
 }
  const showInfoProduct = (ctg)=>{
    setInfoProduct(ctg)
 }
  const showModalMenu = (ctg)=>{
    setStatusMenu(ctg)
 }

  const showModal = (status)=>{
    setStatusModal(status)
 }
  const showModalComment = (status)=>{
    setStatusComment(status)
 }

  const bestshowModal = (status)=>{
    setStatusBestProduct(status)
 }

  let router = useRoutes(Router);

  return (
    <Context.Provider value={{
      allProduct,
      statusModal,
      statusbestProduct,
      infoProduct,
      statusComment,
      statusMenu,
      newProduct,
      showModalMenu,
      showModalComment,
      bestshowModal,
      showInfoProduct,
      showModal

    }}>
      <Navbar />
      <GotoUp/>
      {router}
      <Footer />
    </Context.Provider>
  );
}
