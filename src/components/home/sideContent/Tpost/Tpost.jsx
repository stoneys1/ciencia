import React from "react"
import { tpost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./tpost.css"

const Tpost = () => {
  return (
    <>
      <section className='tpost'>
        <Heading title='Shorts' />
        {tpost.map((val) => {
          return (
            <a href={val.link} target="_blank" rel="noopener noreferrer" key={val.id}>
              <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 50)}...</h1>
                <span>Uma semana Atrás</span>
              </div>
            </div>
            </a>
          )
        })}
      </section>
    </>
  )
}

export default Tpost
