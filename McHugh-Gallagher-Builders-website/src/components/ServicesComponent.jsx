import Card from "./Card";

const ServicesComponent = () => {
  return (
    <div className="mx-[4vw] font-bob flex flex-col items-center text-center py-10">
      <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
      <div className="flex flex-wrap justify-evenly">
        <div className="p-5">
          <Card
            image="./src/images/new_builds.jpg"
            alt="Picture of a newly built house"
            title="New Builds"
            description="Building custom homes from the ground up with precision and expertise."
            link="/Services/NewBuilds"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/extensions.jpg"
            alt="Newly built home extension"
            title="Extensions"
            description="Seamlessly expand your living space with our tailored extension services."
            link="/Services/Extensions"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/REVO.jpg"
            alt="Renovation work on a church"
            title="Renovations"
            description="Transform and modernize your home with comprehensive renovation solutions."
            link="/Services/Renovations"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/interiors.jpg"
            alt="Interior design of a gym"
            title="Interiors"
            description="Elevate your interior spaces with expertly designed and executed finishes."
            link="/Services/Interior"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/Joinery.jpg"
            alt="Custom joinery work in a modern kitchen"
            title="Joinery"
            description="Crafting bespoke joinery solutions to enhance the beauty and functionality of your spaces."
            link="/Services/JoineryService"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/HSE.jpg"
            alt="Health, Safety, and Environment work in construction"
            title="HSE Work"
            description="Trusted by the HSE to uphold the highest standards"
            link="/Services/HSEWorks"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/curch.jpg"
            alt="Council-approved construction project"
            title="Council Work"
            description="Managing and executing construction projects in compliance with local council regulations."
            link="/Services/CouncilWorks"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/Sunroom.jpg"
            alt="Bright and airy sunroom with panoramic views"
            title="Sunrooms"
            description="Designing and building sunrooms that bring the outdoors inside."
            link="/Services/Sunrooms"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/Insurance.webp"
            alt="Insurance services for construction projects"
            title="Insurance"
            description="Providing comprehensive insurance solutions to protect your construction investments."
            link="/Services/InsuranceWorks"
          />
        </div>
        <div className="p-5">
          <Card
            image="./src/images/school.jpg"
            alt="Construction project for educational institutions"
            title="Schools"
            description="Specializing in the construction and renovation of educational facilities."
            link="/Services/Schools"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
