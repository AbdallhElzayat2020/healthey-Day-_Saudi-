import { Link } from "react-router-dom";
import "./DayHealth.css";
import MultipleItems from "./Slider/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Health from "./DayHealthSlide";
const DayHealth = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <Health />
      <section className="cards">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 bg">
              <div
                data-aos="zoom-in"
                className="box d-flex align-items-center justify-content-center"
              >
                <Link to="/dayHealth" className="card">
                  <i className="fa-solid fa-stethoscope fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div
                data-aos="zoom-in"
                className="box  d-flex align-items-center justify-content-center"
              >
                <Link to="" className="card">
                  <i className="fa-regular fa-hospital fs-2"></i>
                  <h3>اليوم الوطني</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div
                data-aos="zoom-in"
                className="box d-flex align-items-center justify-content-center"
              >
                <Link to="" className="card">
                  <i className="fa-solid fa-syringe fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div
                data-aos="zoom-in"
                className="box d-flex align-items-center justify-content-center"
              >
                <Link to="" className="card">
                  <i className="fa-solid fa-capsules fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div
                data-aos="zoom-in"
                className="box d-flex align-items-center justify-content-center"
              >
                <Link to="" className="card">
                  <i className="fa-solid fa-truck-medical fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div
                data-aos="zoom-in"
                className="box d-flex align-items-center justify-content-center"
              >
                <Link to="" className="card">
                  <i className="fa-solid fa-hospital-user fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MultipleItems />
      {/* <MultipleItems /> */}
      <section className="video">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h5 className="text-white mb-5">افعل بالاسباب وتوكل علي الله</h5>
              <iframe
                data-aos="zoom-in"
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/s9exMry8RiI?si=BS_xwFW1vTn9KHVO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Link data-aos="zoom-in" className="text-white link" to="/exame1">
                اذهب للامتحان
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DayHealth;
