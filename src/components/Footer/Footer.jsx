const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            {/* <div className="col-lg-3">
              <div className="iamge">
                <img src={logo} alt="" />
              </div>
            </div> */}
            <div className="col-lg-4 text-center text-white">
              <h5 className="head">Contact Social</h5>
              <p>facebook</p>
              <p>whatsapp</p>
              <p>tictok</p>
            </div>
            <div className="col-lg-4 text-center text-white">
              <h5 className="head">Important Links</h5>
              <p>يوم الصحة العالمي</p>
              <p>اليوم الوطني</p>
              <p>يوم المعلم المثالي</p>
            </div>
            <div className="col-lg-4 text-center text-white">
              <h3 className="head">Get In Touch</h3>
              <p>
                <i className="fa-solid fa-phone ms-2"></i> +201212484233
              </p>
              <p>
                <i className="fa-solid fa-envelope ms-2"></i>
                abdallhelzayat194@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-location-dot ms-2"></i> Egypt 20
                Street Mansoura City
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
