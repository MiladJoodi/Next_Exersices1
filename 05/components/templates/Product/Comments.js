import styles from '@/styles/Product.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Comments = ({ data }) => {

  console.log(data)

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

            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 100,
                },
              }}
              modules={[Pagination]}
              className={styles.swiper}
            >
              {
                data.slice(0, 6).map((comment) => (
                  <SwiperSlide className={styles.swiper_slide} key={comment.id}>
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          className="img-fluid"
                          width={100}
                          src={comment.profile}
                          alt=""
                        />
                        <div className="ml-3">
                          <h4>{comment.username}</h4>
                          <p className="text-left mb-0">User</p>
                        </div>
                      </div>
                      <p className="m-0 mb-4">
                        {comment.body}
                      </p>
                    </div>
                  </SwiperSlide>
                ))
              }



            </Swiper>


        </div>
      </div>
    </div>
  );
};

export default Comments;
