import Card from "./Card";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly mt-7">
        <div className="p-5">
          <Card
            image="src\images\new_builds.jpg"
            alt="Picture of new house"
            title="New Builds"
            description="Building custom homes from the ground up with precision and expertise."
            link="/Services/NewBuilds"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\extensions.jpg"
            alt="Newly built extension"
            title="Extensions"
            description="Seamlessly expand your living space with our tailored extension services."
            link="/Services/Extensions"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\REVO.jpg"
            alt="Picture of Renovation done"
            title="Renovations"
            description="Transform and modernize your home with comprehensive renovation solutions."
            link="/Services/Renovations"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\interiors.jpg"
            alt="Interior of a G=gym"
            title="Interiors"
            description="Elevate your interior spaces with expertly designed and executed finishes,"
            link="/Services/Interior"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/Services">
          <button className="bg-yellow-300 h-8 text-lg font-semibold w-[120px] rounded-xl">
            See More
          </button>
        </Link>
      </div>
    </>
  );
};
export default HomeServices;
