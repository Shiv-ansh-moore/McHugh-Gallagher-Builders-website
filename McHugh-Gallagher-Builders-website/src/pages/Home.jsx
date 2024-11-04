import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HomeServices/>
        <Testimonial/>
    </div>
  );
};

export default Home;
