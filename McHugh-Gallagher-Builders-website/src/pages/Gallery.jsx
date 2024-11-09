import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className="vx-[4vw] flex flex-wrap">
      <div className="flex justify-evenly mt-7 w-full flex-wrap">
        <div className="p-5">
          <Card
            image="src\images\new_builds.jpg"
            alt="Picture of new house"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\extensions.jpg"
            alt="Newly built extension"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\curch.jpg"
            alt="Picture of Renovation done on a chruch"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\interiors.jpg"
            alt="Interior of a G=gym"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\96603798_2434198276871179_3081738789790416896_n.jpg"
            alt="Picture of an extension"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;
