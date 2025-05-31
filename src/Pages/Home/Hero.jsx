import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { Dhero } from "../../Data/Data";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      effect="fade"
      fadeEffect={{ crossFade: true }} 
      className="hero-swiper"
    >
      {Dhero.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="position-relative" style={{ height: "100vh" , width:"100%" }}>
            <img
              src={slide.img}
              alt={slide.title}
              className=""
              style={{ objectFit: "cover", filter: "brightness(60%)" }}
              loading="lazy"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white swiper-text">
              <h3 className="fw-bold display-4">{slide.title}</h3>
              <p className="lead">{slide.desc}</p>
              <Link to={"/Cat"} className="btn btn-outline-light mt-3">
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
