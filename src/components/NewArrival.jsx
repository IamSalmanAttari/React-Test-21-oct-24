import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const { Meta } = Card;
// import Slider from "react-slick";

const NewArrival = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 400,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//   };
  const [data, setadata] = useState([]);

  const cardApi = async () => {
    try {
        
        const res = await axios.get("https://fakestoreapi.in/api/products");
        const dataloop = res?.data?.products;
        console.log(dataloop);
        setadata(dataloop);
    } catch (error) {
        console.log(error)
    }

  };
  useEffect(() => {
    cardApi();
  }, []);
  return (
    <div className=" p-20">
        <h1 className=" mt-5 mb-10 text-4xl font-mono font-bold">New Arrival</h1>
    <div className=" flex flex-wrap  ">
      {/* <div className="container mx-auto"> */}
        {/* <Slider {...settings}> */}
          {data.map((items, index) => {
              console.log(items);
              return (
                  <div key={index}>
                <Card
                  className=" "
                  hoverable
                  style={{
                      width: 253,
                      
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
        {/* </Slider>
      </div> */}
    </div>
        </div>
  );
};

export default NewArrival;
