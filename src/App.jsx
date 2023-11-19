import BestProduct from "./Components/BestProduct";
import Catgory from "./Components/Catgory";
import Company from "./Components/Company";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Offer from "./Components/Offer";
import Slider from "./Components/Slider";

export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Catgory />
      <Offer />
      <BestProduct />
      <Company />
      <Footer/>
    </>
  );
}
