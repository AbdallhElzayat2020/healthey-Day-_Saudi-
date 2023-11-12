import { Link } from "react-router-dom";
import "../../App.css";
import "../Timer/Timer.css";
import Filter from "../Filter/Filter";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSlide from "./SwiperHome";
const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <MainSlide />
      <section className="cards">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 bg">
              <div
                data-aos="zoom-in"
                className="box d-flex align-items-center justify-content-center"
              >
                <Link to="/" className="card">
                  <i className="fa-solid fa-stethoscope fs-2"></i>
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
                <Link to="/" className="card">
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

      <section className="roquah">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="zoom-in" className="boxere  bg p-5 ">
                <div className="head">
                  <h2 className="text-white text-center">رؤيتنا</h2>
                  <div className="text">
                    <p className="text-white">
                      تعليم مُتميز عالي الجودة ؛ لِبناء مُواطن مُعتزّ بِقيمه
                      الوطنية ومُنافس عالمياً
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="zoom-in" className="boxere bg p-5 ">
                <div className="head">
                  <h2 className="text-white text-center">رسالتنا</h2>
                  <div className="text">
                    <p className="text-white">
                      بيئة تعليمية مُحفزة على الإبداع والابتكار لِتلبية مُتطلبات
                      التنمية؛ وتزويد المُتعلمين بالقِيم والمهارات اللاّزمة
                      ليُصبحوا مُواطنين صالحين، مُدركين لمسؤولياتهم تجاه الأسرة
                      والمجتمع والوطن
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filterr">
        <div className="container">
          <div className="row">
            <div data-aos="zoom-in" className="col-lg-12">
              <Filter />
            </div>
          </div>
        </div>
      </section>
      {/* <MultipleItems /> */}
      <section className="student py-5">
        <div className="container">
          <div className="row">
            <h4 className="text-center mb-5" data-aos="zoom-in">
              الطلاب المتفوقين
            </h4>
            <div className="col-lg-3" data-aos="zoom-in">
              <h5>Abdallh Elzayat</h5>
            </div>
            <div className="col-lg-3" data-aos="zoom-in">
              <h5>Abdallh Elzayat</h5>
            </div>
            <div className="col-lg-3" data-aos="zoom-in">
              <h5>Abdallh Elzayat</h5>
            </div>
            <div className="col-lg-3" data-aos="zoom-in">
              <h5>Abdallh Elzayat</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
