import Slider from "react-slick";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container m-auto">
      <Slider {...settings}>
        <div>
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-5.jpg&w=3840&q=100"
            alt=""
          />{" "}
        </div>
        <div>
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-4.jpg&w=3840&q=100"
            alt=""
          />{" "}
        </div>
        <div>
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-6.jpg&w=1920&q=100"
            alt=""
          />{" "}
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
