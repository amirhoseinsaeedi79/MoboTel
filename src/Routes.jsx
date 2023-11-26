import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Questions from "./Pages/Questions";
import Offers from "./Pages/Offers";
import Products from "./Pages/Products";

let routes =[
    { path:'/' , element:<Home/>},
    { path:'/Login' , element:<Login/>},
    { path:'/Questions' , element:<Questions/>},
    { path:'/Offers' , element:<Offers/>},
    { path:'/Products' , element:<Products/>},
]


export default routes