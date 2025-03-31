import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"



const Side = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const catgeory = ["Biologia", "Astronomia", "Geografia", "Oceanologia", "Quimica", "Fisica"]
  return (
    <>
      <Heading title='Nossas redes' />
      <SocialMedia />

      <Heading title='Se Inscreva' />

      <section className='subscribe'>
        <h1 className='title'>Coloque seu email e receba todas as notícias</h1>
        <form action=''>
          <input type='email' placeholder='Seu Email aqui...' />
          <button>
            <i className='fa fa-paper-plane'></i> Quero receber
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='./images/banner2.webp' alt='' />
      </section>

      <Tpost />

      <section className='catgorys'>
        <Heading title='Categorias' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Galeria' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side
