import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Catgory from "../Components/Catgory";
import Offer from "../Components/Offer";
import BestProduct from "../Components/BestProduct";
import Company from "../Components/Company";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Catgory />
      <Offer />
      <BestProduct />
      <Company />
      <Footer />
    </div>
  );
}
