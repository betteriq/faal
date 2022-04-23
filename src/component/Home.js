import React from "react";
import faal from "./fal";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const randomElement = faal[Math.floor(Math.random() * faal.length)];

const Home = () => {
  return (
    <div className="app">
      <h1>فال حافظ</h1>
      <pre className="lol">{randomElement[1]}</pre>
      <div className="diva">🌻🌻🌻🌻🌻🌻🌻🌻</div>
      <p> - {randomElement[2]}</p>

      <Footer />
    </div>
  );
};

export default Home;
