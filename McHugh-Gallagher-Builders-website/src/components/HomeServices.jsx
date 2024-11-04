import Card from "./Card";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <>
      <div className="flex justify-evenly pt-2 w-full flex-wrap">
        <div className="p-5">
          <Card
            image="src\images\new_builds.jpg"
            alt="Picture of new house"
            title="New Builds"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi quo omnis temporibus 
          nihil, alias perspiciatis eaque assumenda recusandae beatae sapiente repudiandae 
          reiciendis consectetur. Praesentium blanditiis suscipit ipsa aperiam tempora?"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\extensions.jpg"
            alt="Newly built extension"
            title="Extensions"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi quo omnis temporibus 
          nihil, alias perspiciatis eaque assumenda recusandae beatae sapiente repudiandae 
          reiciendis consectetur. Praesentium blanditiis suscipit ipsa aperiam tempora?"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\curch.jpg"
            alt="Picture of Renovation done on a chruch"
            title="Renovations"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi quo omnis temporibus 
          nihil, alias perspiciatis eaque assumenda recusandae beatae sapiente repudiandae 
          reiciendis consectetur. Praesentium blanditiis suscipit ipsa aperiam tempora?"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\interiors.jpg"
            alt="Interior of a G=gym"
            title="Interiors"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi quo omnis temporibus 
          nihil, alias perspiciatis eaque assumenda recusandae beatae sapiente repudiandae 
          reiciendis consectetur. Praesentium blanditiis suscipit ipsa aperiam tempora?"
          />
        </div>
      </div>
      <div className="pt-2 flex justify-center">
        <Link to="/Services">
          <button className="bg-yellow-300 h-8 text-lg font-bob font-semibold w-[120px] rounded-xl">
            See More
          </button>
        </Link>
      </div>
    </>
  );
};
export default HomeServices;
