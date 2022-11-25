import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Show from "../Show/Show";
import Map from "../Map/Map"
import Works from "../Works/Portfolio"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Show />
      <Map/>
   <Works/>
    </div>
  );
};
export default Home;
