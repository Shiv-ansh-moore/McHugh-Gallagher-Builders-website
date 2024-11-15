const Testimonial = ({ name, text }) => {
  return (
    <div className="font-bob">
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="text-4xl p-2 font-bold">Reviews</h1>
      </div>

      {/* Content */}
      <div className="flex justify-center">
        <div className="text-center pt-2 max-w-[70vw] md:max-w-[50vw] overflow-hidden text-ellipsis">
          <h2 className="italic text-3xl font-bold truncate">{name}</h2>
          <p className="italic text-lg line-clamp-4 break-words overflow-hidden">
            "{text}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
