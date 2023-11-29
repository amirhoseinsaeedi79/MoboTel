import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Questions from "./Pages/Questions";
import Offers from "./Pages/Offers";
import Products from "./Pages/Products";
import ShowProduct from "./Components/ShowProduct";

let routes =[
    { path:'/' , element:<Home/>},
    { path:'/Login' , element:<Login/>},
    { path:'/Questions' , element:<Questions/>},
    { path:'/Offers' , element:<Offers/>},
    { path:'/Products' , element:<Products/>},
    { path:'/ShowProduct' , element:<ShowProduct/>},
]


export default routes