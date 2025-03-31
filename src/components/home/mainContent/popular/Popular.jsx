import React from "react";
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      &#x2192; {/* Símbolo de seta direita */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      &#x2190; {/* Símbolo de seta esquerda */}
    </div>
  );
};

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };

  return (
    <section className="popular">
      <Heading title="Mais Notícias" />
      <div className="content">
        <Slider {...settings}>
          {popular.map((val) => {
            return (
              <a href={val.link} target="_blank" rel="noopener noreferrer" key={val.id}>
                <div className="items">
                  <div className="box shadow">
                    <div className="images row">
                      <div className="img">
                        <img src={val.cover} alt={val.title} />
                      </div>
                      <div className="category category1">
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className="title">{val.title.slice(0, 50)}...</h1>
                      <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label>{val.date}</label>
                      </div>
                      <div className="comment">
                        <i className="fas fa-comments"></i>
                        <label>{val.comments}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Popular;
