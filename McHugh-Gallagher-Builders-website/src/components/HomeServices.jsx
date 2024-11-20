import Card from "./Card";
import { Link } from "react-router-dom";

// Import images
import newBuildsImage from "../images/new_builds.jpg";
import extensionsImage from "../images/extensions.jpg";
import revoImage from "../images/REVO.jpg";
import interiorsImage from "../images/interiors.jpg";

const HomeServices = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly mt-7">
        <div className="p-5">
          <Card
            image={newBuildsImage}
            alt="Picture of new house"
            title="New Builds"
            description="Building custom homes from the ground up with precision and expertise."
            link="/Services/NewBuilds"
          />
        </div>
        <div className="p-5">
          <Card
            image={extensionsImage}
            alt="Newly built extension"
            title="Extensions"
            description="Seamlessly expand your living space with our tailored extension services."
            link="/Services/Extensions"
          />
        </div>
        <div className="p-5">
          <Card
            image={revoImage}
            alt="Picture of Renovation done"
            title="Renovations"
            description="Transform and modernize your home with comprehensive renovation solutions."
            link="/Services/Renovations"
          />
        </div>
        <div className="p-5">
          <Card
            image={interiorsImage}
            alt="Interior of a gym"
            title="Interiors"
            description="Elevate your interior spaces with expertly designed and executed finishes."
            link="/Services/Interior"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/Services">
          <button className="bg-yellow-300 h-8 text-lg font-semibold w-[120px] rounded-xl hover:bg-yellow-400">
            See More
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeServices;

