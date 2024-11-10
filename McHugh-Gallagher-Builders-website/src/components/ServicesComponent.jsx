import Card from "./Card";

const ServicesComponent = () => {
  return (
    <div className="mx-[4vw] font-bob flex flex-col items-center text-center py-10">
      <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
      <div className="flex flex-wrap justify-evenly">
        <div className="p-5">
          <Card
            image="src\images\new_builds.jpg"
            alt="Picture of new house"
            title="New Builds"
            description="Building custom homes from the ground up with precision and expertise."
            link="/Services/NewBuilds"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\extensions.jpg"
            alt="Newly built extension"
            title="Extensions"
            description="Seamlessly expand your living space with our tailored extension services."
            link="/Services/Extensions"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\REVO.jpg"
            alt="Picture of Renovation done on a chruch"
            title="Renovations"
            description="Transform and modernize your home with comprehensive renovation solutions."
            link="/Services/Renovations"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\interiors.jpg"
            alt="Interior of a G=gym"
            title="Interiors"
            description="Elevate your interior spaces with expertly designed and executed finishes,"
            link="/Services/Interior"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\Joinery.jpg"
            alt=""
            title="Joinery"
            description=""
            link="/Services/"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\HSE.jpg"
            alt=""
            title="HSE work"
            description=""
            link="/Services/"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\curch.jpg"
            alt=""
            title="Council Work"
            description=""
            link="/Services/"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\Sunroom.jpg"
            alt=""
            title="Sunrooms"
            description=""
            link="/Services/"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\Insurance.webp"
            alt=""
            title="Insurance"
            description=""
            link="/Services/"
          />
        </div>
        <div className="p-5">
          <Card
            image="src\images\school.jpg"
            alt=""
            title="Schools"
            description=""
            link="/Services/"
          />
        </div>
      </div>
    </div>
  );
};
export default ServicesComponent;
