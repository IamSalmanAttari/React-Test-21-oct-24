import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const { Meta } = Card;
import Slider from "react-slick";

const SaleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const [data, setadata] = useState([]);

  const cardApi = async () => {
    const res = await axios.get("https://fakestoreapi.in/api/products");
    const dataloop = res.data.products;
    console.log(dataloop);

    setadata(dataloop);
  };
  useEffect(() => {
    cardApi();
  }, []);
  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className="mt-20 mb-10 text-4xl font-mono font-bold">Flash Sale</h1>
        <Slider {...settings}>
          {data.slice(9,15).map((items, index) => {
            console.log(items);
            return (
              <div key={index}>
                <Card
                  className=" "
                  hoverable
                  style={{
                    width: 240,
                    
                  }}
                  cover={<img className="" alt="example" src={items.image} />}
                >
                  <Meta
                  className=" "
                    title={items.title}
                    description={`$ ${items.price}`}
                    // description={items.description}

                  />
                </Card>
              </div>
            );
          })}
        </Slider>
        <img className=" mt-8 object-center" src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-7.jpg&w=3840&q=100" alt="" />
      </div>
    </div>
  );
};

export default SaleSlider;
