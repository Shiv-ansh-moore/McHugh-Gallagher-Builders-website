import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="mx-[4vw] font-bob flex flex-col items-center text-center py-5 ">
      <div>
        <h1 className="text-[4vw] font-bold">
          McHugh & Gallagher Builders Ltd
        </h1>
        <p className="text-[2.5vw]">
          "Trusted construction service for over 40 years"
        </p>
        <div className="flex py-5 justify-center">
          <Link to="/Contact">
            <button className="bg-yellow-300 h-8 text-lg font-semibold w-[120px] mr-10 rounded-xl">
              Contact now
            </button>
          </Link>
          <Link to="/Services">
            <button className="bg-yellow-300 h-8 text-lg font-semibold w-[120px] rounded-xl">
              See Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
