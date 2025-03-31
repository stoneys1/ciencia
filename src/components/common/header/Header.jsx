import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/astro">Astronomia</Link>
              </li>
              <li>
                <Link to="/bio">Biologia</Link>
              </li>
              <li>
                <Link to="/fis">Fisica</Link>
              </li>
              <li>
                <Link to="/geo">Geografia</Link>
              </li>
              <li>
                <Link to="/ocean">Oceanologia</Link>
              </li>
              <li>
                <Link to="/quimio">Quimica</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
