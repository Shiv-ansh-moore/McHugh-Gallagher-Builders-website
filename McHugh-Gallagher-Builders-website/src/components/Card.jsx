const Card = (props) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 font-bob">
        <img className="w-full opacity-95" src={props.image} alt={props.alt} />
        {props.title && (
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {props.title}
            </div>
            <p className="text-gray-700 text-base">{props.description}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
