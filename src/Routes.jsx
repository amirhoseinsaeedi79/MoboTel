import Home from "./Pages/Home";
import Questions from "./Pages/Questions";
import Offers from "./Pages/Offers";
import Products from "./Pages/Products";
import ShowProduct from "./Components/ShowProduct";
import Register from "./Pages/Register";
import UserAdmin from "./Pages/UserAdmin";
import EditProfile from "./Components/SubRouts/EditProfile";
import History from "./Components/SubRouts/History";
import LoveProducts from "./Components/SubRouts/LoveProducts";
import Tickets from "./Components/SubRouts/Tickets";
import Profile from "./Components/SubRouts/Profile";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/Register", element: <Register /> },
  { path: "/Questions", element: <Questions /> },
  { path: "/Offers", element: <Offers /> },
  { path: "/Products", element: <Products /> },
  { path: "/ShowProduct", element: <ShowProduct /> },
  {
    path: "/UserAdmin/*",
    element: <UserAdmin />,
    children: [
      { path: "EditProfile", element: <EditProfile /> },
      { path: "History", element: <History /> },
      { path: "LoveProducts", element: <LoveProducts /> },
      { path: "Tickets", element: <Tickets /> },
      { path: "Profile", element: <Profile/> },
    ],
  },
];

export default routes;
