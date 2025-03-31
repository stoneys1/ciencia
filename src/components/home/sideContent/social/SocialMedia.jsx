import React from "react"

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>12,740 Curtidas</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-pinterest'></i>
          <span>5,600 Seguidores</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>8,700 Seguidores</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>22,700 Seguidores</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <span>1M Inscritos</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
