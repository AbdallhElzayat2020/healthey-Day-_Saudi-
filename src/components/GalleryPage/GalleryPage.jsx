// import Swipper from "../Slider/Swipper";
import Filter from "../Filter/Filter";
const GalleryPage = () => {
  return (
    <>
      {/* <Swipper /> */}
      {/* <section className="cards">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 bg">
              <div className="box d-flex align-items-center justify-content-center">
                <Link to="/dayHealth" className="card">
                  <i className="fa-solid fa-stethoscope fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div className="box d-flex align-items-center justify-content-center">
                <Link to="" className="card">
                  <i className="fa-regular fa-hospital fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div className="box d-flex align-items-center justify-content-center">
                <Link to="" className="card">
                  <i className="fa-solid fa-syringe fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div className="box d-flex align-items-center justify-content-center">
                <Link to="" className="card">
                  <i className="fa-solid fa-capsules fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div className="box d-flex align-items-center justify-content-center">
                <Link to="" className="card">
                  <i className="fa-solid fa-truck-medical fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 bg">
              <div className="box d-flex align-items-center justify-content-center">
                <Link to="" className="card">
                  <i className="fa-solid fa-hospital-user fs-2"></i>
                  <h3>اليوم العالمي للصحة</h3>
                  <p>loremloremloremloremloremloremloremloremlorem</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="filterr">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Filter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
