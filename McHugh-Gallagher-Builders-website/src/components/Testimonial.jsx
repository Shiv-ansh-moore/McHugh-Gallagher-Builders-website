// Testimonial.js
const Testimonial = ({ name, text }) => {
  return (
    <>
      <div className="font-bob ">
        <div className="flex justify-center">
          <h1 className="text-4xl p-2 font-bold">Reviews</h1>
        </div>
        <div className="flex justify-center">
          <div className="text-center pt-2 max-w-[70vw]">
            <h2 className="italic text-3xl font-bold">{name}</h2>
            <p className="italic text-lg">
              "{text}"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

