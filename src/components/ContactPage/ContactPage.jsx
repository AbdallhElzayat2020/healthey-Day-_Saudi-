import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSlide from "../HomePage/SwiperHome";
const ContactPage = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <MainSlide />

      <section className="contact">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6">
              <iframe
                data-aos="zoom-in"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3570.883023174483!2d45.359919!3d26.491711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fd5130dd8ac7171%3A0xb1e017f10edd0c6b!2z2KvYp9mG2YjZitipINin2YTYo9mF2YrYsSDYs9mE2LfYp9mGIC0g2KjZhtmK2YY!5e0!3m2!1sar!2seg!4v1694171814970!5m2!1sar!2seg"
                style={{ border: "0", width: "100%", height: "350px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-6">
              <form data-aos="zoom-in">
                <div className="form-group my-2">
                  <label className=" fs-5 my-2 text-white" htmlFor="username">
                    الاسم بالكامل
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group my-2">
                  <label className=" fs-5 my-2 text-white" htmlFor="phone">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group my-2">
                  <label className=" fs-5 my-2 text-white" htmlFor="email">
                    الايمال
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary fs-4 d-flex align-items-center justify-content-center mx-auto"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
