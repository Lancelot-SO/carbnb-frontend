import React, { useEffect } from 'react';

import SwiperCore, { Virtual, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchcars } from '../../redux/Actions/car-actions';
import { clearCars } from '../../redux/Slices/car-slice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Home.css';

SwiperCore.use([Virtual, Navigation]);

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCars());
    dispatch(fetchcars());
  }, [dispatch]);

  const cars = useSelector((state) => state.carSlice);

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1124: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1324: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <>
      <div className="home-container-outer">
        <div className="home-container-inner">
          <div className="home-title-container">
            <h2 className="home-title">
              CarBnB
            </h2>
            <p className="home-description">
              Please select a CarBnB Model
            </p>
          </div>
          <Swiper
            className="swiper"
            spaceBetween={10}
            slidesPerView={2}
            navigation
            breakpoints={breakpoints}
          >
            {cars.map((slideContent, index) => (
              <SwiperSlide key={slideContent.id}>
                <Link to={`/cars/${slideContent.id}`} state={slideContent}>
                  <div className="swiper-slide-content">
                    <img
                      src={slideContent.imageUrl}
                      className="swiper-slide-img"
                      alt={`Slide ${index + 1}, ${slideContent.name}`}
                    />
                    <div className="car-swiper-slide-text">
                      <div>
                        <h1 className="car-name">
                          {slideContent.model}
                          {' '}
                          {slideContent.name}
                        </h1>
                        <h4 className="car-model">
                          $
                          {slideContent.price}
                        </h4>
                        <p className="car-description">
                          {slideContent.description}
                        </p>
                      </div>
                      <ul className="car-bottom-links">
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-amazon" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fa-brands fa-google" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
