import React from "react";
import Card from "../components/Card";

// Import images
import newBuildsImage from "../images/new_builds.jpg";
import extensionsImage from "../images/extensions.jpg";
import renovationsImage from "../images/REVO.jpg";
import interiorsImage from "../images/interiors.jpg";
import joineryImage from "../images/Joinery.jpg";
import hseImage from "../images/HSE.jpg";
import councilImage from "../images/curch.jpg";
import sunroomImage from "../images/Sunroom.jpg";
import insuranceImage from "../images/Insurance.webp";
import schoolImage from "../images/school.jpg";

const Gallery = () => {
  return (
    <div className="mx-[4vw] font-bob flex flex-col items-center text-center py-10">
      <h2 className="text-2xl md:text-3xl font-semibold ">Gallery</h2>
      <div className="flex flex-wrap justify-evenly mt-7 w-full">
        <div className="p-5">
          <Card image={newBuildsImage} alt="Picture of a newly built house" />
        </div>
        <div className="p-5">
          <Card image={extensionsImage} alt="Newly built home extension" />
        </div>
        <div className="p-5">
          <Card image={renovationsImage} alt="Renovation work on a church" />
        </div>
        <div className="p-5">
          <Card image={interiorsImage} alt="Interior design of a gym" />
        </div>
        <div className="p-5">
          <Card
            image={joineryImage}
            alt="Custom joinery work in a modern kitchen"
          />
        </div>
        <div className="p-5">
          <Card
            image={hseImage}
            alt="Health, Safety, and Environment work in construction"
          />
        </div>
        <div className="p-5">
          <Card
            image={councilImage}
            alt="Council-approved construction project"
          />
        </div>
        <div className="p-5">
          <Card
            image={sunroomImage}
            alt="Bright and airy sunroom with panoramic views"
          />
        </div>
        <div className="p-5">
          <Card
            image={insuranceImage}
            alt="Insurance services for construction projects"
          />
        </div>
        <div className="p-5">
          <Card
            image={schoolImage}
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
