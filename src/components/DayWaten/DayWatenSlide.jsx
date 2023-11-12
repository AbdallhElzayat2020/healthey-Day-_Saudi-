import Slider_3 from "../../../public/Images/dayWaten.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Waten = () => {
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
      </div>
    </div>
  );
};

export default Waten;
