import React from "react"
import "./music.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { music } from "../../../../dummyData"

const Music = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <>
      <section className='music'>
        <Heading title='Séries & Filmes' />
        <div className='content'>
          <Slider {...settings}>
            {music.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 50)}</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                        <div className="watch">
                          <strong>Onde assistir:</strong>  {val.watch}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Music
