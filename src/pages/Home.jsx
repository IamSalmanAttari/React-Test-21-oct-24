import BannerCard from "../components/BannerCard";
import BannerSlider from "../components/BannerSlider";
import FeaturedSlider from "../components/FeaturedSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewArrival from "../components/NewArrival";
import SaleSlider from "../components/SaleSlider";
import { BannerCardData } from "../utils/constant/BannerCardData";

const Home = () => {
  return (
    <div className=" text-2xl">
      <Header />
      <BannerSlider />
      <div className="flex px-16 gap-10 w-[100%]">
        {BannerCardData.map((items,index)=>{
          return(
            <BannerCard key={index} data={items} />
            )
        })}
      </div>
      <FeaturedSlider />

      <SaleSlider/>
      <NewArrival/>
      <Footer/>
    </div>
  );
};

export default Home;
