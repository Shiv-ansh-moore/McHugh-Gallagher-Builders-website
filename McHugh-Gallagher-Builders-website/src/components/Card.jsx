import { Link } from "react-router-dom";

const Card = ({image, alt, title, description, link = "/Services"}) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 font-bob">
        <img className="w-full opacity-95" src={image} alt={alt} />
        {title && (
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {title}
            </div>
            <p className="text-gray-700 text-base text-center">{description}</p>
            <div className="flex justify-center my-2 py-4">
              <Link to={link}>
                <button className="bg-slate-200 h-8 text-lg font-semibold w-[120px] rounded-xl">
                  {title}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
