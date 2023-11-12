import { Link } from "react-router-dom";
import "../DayHealth.css";
import MultipleItems from "../Slider/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Waten from "./DayWatenSlide";
const DayWaten = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <Waten />
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
                <Link to="/DayWaten" className="card">
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
      <MultipleItems />
    </>
  );
};

export default DayWaten;
