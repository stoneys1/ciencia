import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/logo.png' alt='' />
            <p>Um Universo vasto de muita Ciência e muitas Curiosidades para descobrir e um Infinito de possibilidades</p>
            <i className='fa fa-envelope'></i>
            <span> malvesbonacina@yahoo.com.br </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +55 11 963328131</span>
          </div>
          <div className='box'>
            <h3>Mais</h3>
            <div className='item'>
              <img src='../images/hero/bios.jpg' alt='' />
              <p>Cientistas chineses criam metais bidimensionais com espessura de um átomo</p>
            </div>
            <div className='item'>
              <img src='../images/hero/buraco.webp' alt='' />
              <p>Continente perdido: como cientistas encontraram a Argolândia</p>
            </div>
          </div>
          <div className='box'>
            <h3>Curiosidades</h3>
            <div className='item'>
              <img src='../images/hero/planetas.webp' alt='' />
              <p>O que significa o raro alinhamento de planetas que está acontecendo no céu?</p>
            </div>
            <div className='item'>
              <img src='../images/hero/tempo.webp' alt='' />
              <p>O bizarro paradoxo quântico do tempo negativo</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Curiosidades</span> 
              </li>
              <li>
                <span>Filmes & Séries</span> 
              </li>
              <li>
                <span>Galeria</span> 
              </li>
              <li>
                <span>Mais Populares</span> 
              </li>
              <li>
                <span>Mais Notícias</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© Todos os direitos reservados</p>
          <p>
            Feito com <i className='fa fa-heart'></i> Pela Ciência e Curiosidade 
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
