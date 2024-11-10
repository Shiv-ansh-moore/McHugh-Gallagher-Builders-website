// src/components/Gallery.jsx

import React from "react";
import Card from "../components/Card";

const Gallery = () => {
  return (
    <div className="mx-[4vw] font-bob flex flex-col items-center text-center py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Gallery</h2>
      <div className="flex flex-wrap justify-evenly mt-7 w-full">
        <div className="p-5">
          <Card
            image="src/images/new_builds.jpg"
            alt="Picture of a newly built house"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/extensions.jpg"
            alt="Newly built home extension"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/REVO.jpg"
            alt="Renovation work on a church"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/interiors.jpg"
            alt="Interior design of a gym"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/Joinery.jpg"
            alt="Custom joinery work in a modern kitchen"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/HSE.jpg"
            alt="Health, Safety, and Environment work in construction"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/curch.jpg"
            alt="Council-approved construction project"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/Sunroom.jpg"
            alt="Bright and airy sunroom with panoramic views"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/Insurance.webp"
            alt="Insurance services for construction projects"
          />
        </div>
        <div className="p-5">
          <Card
            image="src/images/school.jpg"
            alt="Construction project for educational institutions"
          />
        </div>
      </div>
      
      {/* Added Message Section */}
      <div className="mt-10 px-5">
        <p className="text-lg md:text-xl">
          To see more projects and pictures, check out our Facebook page{" "}
          <a
            href="https://www.facebook.com/Sligobuilder/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Gallery;

