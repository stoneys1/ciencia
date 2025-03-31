import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hero } from "../../dummyData"; 
import Side from "../home/sideContent/side/Side";
import "../home/mainContent/homes/style.css";
import "./singlepage.css";
import "../home/sideContent/side/side.css";
import SinglePageSlider from "./slider/SinglePageSlider";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = hero.find((item) => item.id === parseInt(id));
    window.scrollTo(0, 0);
    if (selectedItem) {
      setItem(selectedItem);
    }
  }, [id]);

  if (!item) {
    return <h1>Not Found</h1>; // 
  }

  return (
    <main>
      <SinglePageSlider />
      <div className="container">
        <section className="mainContent details">
          <h1 className="title">{item.title}</h1>

          <div className="author">
            <span>Por</span>
            <img src={item.authorImg} alt={item.authorName} />
            <p>{item.authorName} Em</p>
            <label>{item.time}</label>
          </div>

          <div className="social">
            <div className="socBox">
              <i className="fab fa-facebook-f"></i>
              <span>Compartilhar</span>
            </div>
            <div className="socBox">
              <i className="fab fa-youtube"></i>
              <span>Inscreva-se</span>
            </div>
            <div className="socBox">
              <i className="fab fa-twitter"></i>
              <span>Escrever</span>
            </div>
            <div className="socBox">
              <i className="fab fa-instagram"></i>
              <span>Compartilhar</span>
            </div>
          </div>

          <div className="desctop">
            {item.desc.map((val, index) => (
              <div key={index}>
                <p>{val.para1}</p>
                <p>{val.para2}</p>
              </div>
            ))}
          </div>
          <img src={item.cover} alt={item.title} />

          {item.desc.map((val, index) => (
            <p key={index}>{val.para3}</p>
          ))}

          <div className="descbot">
            {item.details.map((data, index) => (
              <div key={index}>
                <h1>{data.title}</h1>
                <p>{data.para1}</p>
              </div>
            ))}
          </div>

          <div className="quote">
            <i className="fa fa-quote-left"></i>
            {item.details.map((data, index) => (
              <p key={index}>{data.quote}</p>
            ))}
          </div>

          <div className="desctop">
            {item.details.map((data, index) => (
              <div key={index}>
                <h1>{data.title2}</h1>
                <p>{data.para2}</p>
                <p>{data.para3}</p>
                <p>{data.para4}</p>
                <p>{data.para5}</p>
                <p>{data.para6}</p>
                <p>{data.para7}</p>
                <p>{data.para8}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sideContent">
          <Side />
        </section>
      </div>
    </main>
  );
};

export default SinglePage;
