import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Comments = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div className="row">
          <div className="testimonial-item">
            <div className="d-flex align-items-center mb-3">
              <img
                className="img-fluid"
                width={100}
                src="/images/testimonial-3.jpg"
                alt=""
              />
              <div className="ml-3">
                <h4>Alireza</h4>
                <p className="text-left mb-0">User</p>
              </div>
            </div>
            <p className="m-0 mb-4">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
          <div className="testimonial-item">
            <div className="d-flex align-items-center mb-3">
              <img
                className="img-fluid"
                width={100}
                src="/images/testimonial-4.jpg"
                alt=""
              />
              <div className="ml-3">
                <h4>Amin Saeedi</h4>
                <p className="text-left mb-0">User</p>
              </div>
            </div>
            <p className="m-0 mb-4">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              eirmod clita lorem. Dolor tempor ipsum sanct clita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
