import { Link } from "react-router-dom";
import React from "react";
import ContactFrom from "../components/ContactFrom";

const SlashServices = ({ title, description, image, imageAlt }) => {
  return (
    <section className="mx-[4vw] py-8 font-bob">
      {/* Service Title */}
      <header className="flex flex-col items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
        {/* Call to Action Button */}
        <Link to="/Contact">
          <button className="mt-2 px-6 py-2 bg-yellow-300 font-bold rounded-md hover:bg-yellow-500 transition-colors">
            Get Started Today
          </button>
        </Link>
      </header>

      {/* Service Description */}
      <article className="max-w-3xl mx-auto text-center mb-6">
        <p className="text-base md:text-lg">{description}</p>
      </article>

      {/* Service Image */}
      <div className="flex justify-center mb-6">
        <img
          src={image}
          alt={imageAlt}
          className="max-h-[40vh] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Contact Form */}
      <ContactFrom />
    </section>
  );
};

export default SlashServices;
