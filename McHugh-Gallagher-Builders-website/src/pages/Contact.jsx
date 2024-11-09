import React from "react";
import Navbar from "../components/Navbar";
import ContactFrom from "../components/ContactFrom";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="md:flex mx-[4vw] font-bob">
        <div className="flex flex-col justify-center">
          <p className="max-w-[500px] mb-7 text-lg">
            We'd love to hear from you! Whether you have a question about our
            services, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
          <p>
            <strong>Address:</strong>
          </p>
          <p>
            <strong>Phone:</strong>
          </p>
          <p>
            <strong>Email:</strong> mchughandgallagher@gmail.com
          </p>
        </div>
        <div className="w-screen">
          <ContactFrom />
        </div>
      </div>
    </div>
  );
};

export default Contact;
