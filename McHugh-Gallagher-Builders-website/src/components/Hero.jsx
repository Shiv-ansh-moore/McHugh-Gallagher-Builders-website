import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const parentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const parent = parentRef.current;

    // Function to update the parent's height
    const updateParentHeight = () => {
      if (image && parent) {
        const imageHeight = image.offsetHeight;
        parent.style.height = `${imageHeight}px`;
      }
    };

    // Update height when image loads
    if (image.complete) {
      // If image is already loaded
      updateParentHeight();
    } else {
      // If image is not loaded yet
      image.addEventListener("load", updateParentHeight);
    }
    window.addEventListener("resize", updateParentHeight);

    // Cleanup event listener on unmount
    return () => {
      image.removeEventListener("load", updateParentHeight);
      window.removeEventListener("resize", updateParentHeight);
    };
  }, []);

  return (
    <div className="flex relative mr-[4vw]" ref={parentRef}>
      <div className="z-40 flex flex-col justify-center w-[50vw]">
        <h1 className="text-7xl  font-bold ml-[4vw] pb-9">
          McHugh & Gallagher Builders Ltd
        </h1>
        <div className="flex ml-[4vw]">
          <Link to="/Contact">
            <button className="bg-yellow-300 h-8 text-lg font-bob font-semibold w-[120px] mr-10 rounded-xl">
              Contact now
            </button>
          </Link>
          <Link to="/Services">
            <button className="bg-yellow-300 h-8 text-lg font-bob font-semibold w-[120px] rounded-xl">
              See Services
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute right-0">
        <img
          ref={imageRef}
          src="src/images/hero.webp"
          className="min-w-[60vw] max-w-[70vw] max-h-[65vh] opacity-90"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
