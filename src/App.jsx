import { useRoutes } from "react-router-dom";
import Router from "./Routes.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Context from "./Context/context.jsx";
import { useEffect, useState } from "react";
import { GetProduct } from "./Services/Axios/Requests/Products.jsx";
export default function App() {

  // ================================================================ All States
  const [allProduct, setAllProduct] = useState([]);

  // ================================================================ All functions
  useEffect(()=>{
    GetProduct().then(res=>setAllProduct(res.data))
  },[])

  const newProduct = (ctg)=>{
    fetch(`http://localhost:3000/product?ctg=${ctg}`)
     .then((res) => setAllProduct(res.data));
 }



  let router = useRoutes(Router);

  return (
    <Context.Provider value={{
      allProduct,
      newProduct

    }}>
      <Navbar />
      {router}
      <Footer />
    </Context.Provider>
  );
}
