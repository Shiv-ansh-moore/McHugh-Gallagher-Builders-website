import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import TestimonialsCarousel from "../components/TestimonialCarosel";
import Widgets from "../components/Widgets";
import Introduction from "../components/Introduction";
import ContactForm from "../components/ContactFrom";
import Hero2 from "../components/Hero2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero2 />
      {/* <Hero /> */}
      {/* <Hero /> */}
      <Introduction />
      <HomeServices />
      <TestimonialsCarousel />
      <Widgets />
      <ContactForm />
    </div>
  );
};

export default Home;
