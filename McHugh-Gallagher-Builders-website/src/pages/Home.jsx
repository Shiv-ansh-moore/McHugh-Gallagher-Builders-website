import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import TestimonialsCarousel from "../components/TestimonialCarosel";
import Widgets from "../components/Widgets";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HomeServices/>
        <TestimonialsCarousel/>
        <Widgets/>
    </div>
  );
};

export default Home;
