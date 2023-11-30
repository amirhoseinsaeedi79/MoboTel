import Home from "./Pages/Home";
import Questions from "./Pages/Questions";
import Offers from "./Pages/Offers";
import Products from "./Pages/Products";
import ShowProduct from "./Components/ShowProduct";
import Register from "./Pages/Register";

let routes =[
    { path:'/' , element:<Home/>},
    { path:'/Register' , element:<Register/>},
    { path:'/Questions' , element:<Questions/>},
    { path:'/Offers' , element:<Offers/>},
    { path:'/Products' , element:<Products/>},
    { path:'/ShowProduct' , element:<ShowProduct/>},
]


export default routes