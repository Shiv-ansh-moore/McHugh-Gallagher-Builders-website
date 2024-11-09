import Card from "./Card";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <>
      <div className="flex justify-evenly mt-7 w-full flex-wrap">
        <div className="p-5">
          <Card
            image="src\images\new_builds.jpg"
            alt="Picture of new house"
            title="New Builds"
            description="Building custom homes from the ground up with precision and expertise."
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\extensions.jpg"
            alt="Newly built extension"
            title="Extensions"
            description="Seamlessly expand your living space with our tailored extension services."
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\curch.jpg"
            alt="Picture of Renovation done on a chruch"
            title="Renovations"
            description="Transform and modernize your home with comprehensive renovation solutions."
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\interiors.jpg"
            alt="Interior of a G=gym"
            title="Interiors"
            description="Elevate your interior spaces with expertly designed and executed finishes,"
          />
        </div>
      </div>
    </>
  );
};
export default HomeServices;
