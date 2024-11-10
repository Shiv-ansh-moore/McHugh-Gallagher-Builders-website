import { Link } from "react-router-dom";
const Introduction = () => {
  return (
    <div>
      <section className="flex flex-col items-center px-4 md:px-[4vw] text-center mx-[4vw] rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Us?</h2>
        <p className="text-base md:text-lg max-w-full md:max-w-[70vw] mt-4 leading-relaxed">
          With over 40 years of experience in construction, McHugh & Gallagher
          Builders Ltd is a fully insured, tax-compliant, and CIF & CIRI
          registered contractor. We provide a comprehensive range of building
          solutions, including{" "}
          <strong>new builds, extensions, renovations, and more</strong>. Our
          reputation for quality, reliability, and craftsmanship has made us a
          trusted partner in both residential and commercial projects.
        </p>
      </section>
    </div>
  );
};

export default Introduction;
