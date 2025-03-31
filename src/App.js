import React from "react";
import Header from "./components/common/header/Header.jsx";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route exact path="/singlepage/:id" component={SinglePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
