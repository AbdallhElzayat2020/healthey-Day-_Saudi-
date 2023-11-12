import Slider_3 from "../../../public/Images/home.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const MainSlide = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators"></div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slider_3} className="d-block w-100" alt="..." />
          <div className="background">
            <h3 className="h33">
              ثانوية الأمير سلطان بن عبدالعزيز بالارطاوية
              <br />
              <br />
              تعليم مُتميز عالي الجودة ؛ لِبناء مُواطن مُعتزّ بِقيمه الوطنية
              ومُنافس عالمياً
            </h3>
          </div>
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        {/* <div className="carousel-item">
          <img src={Slider_3} className="d-block w-100" alt="..." />
          <h3 className="h33">
            ثانوية الأمير سلطان بن عبدالعزيز بالارطاوية
            <br />
            <br />
            تعليم مُتميز عالي الجودة ؛ لِبناء مُواطن مُعتزّ بِقيمه الوطنية
            ومُنافس عالمياً
          </h3>
          <div className="carousel-caption d-none d-md-block"></div>
        </div> */}
        {/* <div className="carousel-item">
          <img src={Slider_3} className="d-block w-100" alt="..." />
          <h3 className="h33">
            ثانوية الأمير سلطان بن عبدالعزيز بالارطاوية
            <br />
            <br />
            تعليم مُتميز عالي الجودة ؛ لِبناء مُواطن مُعتزّ بِقيمه الوطنية
            ومُنافس عالمياً
          </h3>
          <div className="carousel-caption d-none d-md-block"></div>
        </div> */}
      </div>
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-primary"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button> */}
      {/* <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-primary"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default MainSlide;
