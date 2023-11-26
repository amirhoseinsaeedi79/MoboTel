import Slider from "../Components/Slider";
import Catgory from "../Components/Catgory";
import Offer from "../Components/Offer";
import BestProduct from "../Components/BestProduct";
import Company from "../Components/Company";

export default function Home() {
  return (
    <div>
      <Slider />
      <Catgory />
      <Offer />
      <BestProduct />
      <Company />
    </div>
  );
}
