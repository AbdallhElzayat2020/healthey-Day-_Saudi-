import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import img from "../../../public/Images/home.jpg";

const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, color: "white" }} // تعيين لون السهم إلى اللون الأبيض
    onClick={onClick}
  />
);
const MultipleItems = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    initialSlide: 0,
    prevArrow: <CustomArrow />, // استخدام السهم المخصص للسابق
    nextArrow: <CustomArrow />, // استخدام السهم المخصص للتالي
    dots: true, // إظهار نقاط الترقيم
    appendDots: (dots) => (
      <ul style={{ color: "white" }}> {dots} </ul> // تعيين لون نقاط الترقيم إلى اللون الأبيض
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="sliderMain text-center">
      <Slider {...settings}>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
        <div className="one">
          <img src={img} className="slideImage" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default MultipleItems;
