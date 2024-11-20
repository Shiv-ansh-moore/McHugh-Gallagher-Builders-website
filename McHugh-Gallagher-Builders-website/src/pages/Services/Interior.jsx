import SlashServices from "../../components/SlashServices";
import interiorsImage from "../../images/interiors.jpg";

const Interiors = () => {
  return (
    <div>
      <SlashServices
        title="Interiors"
        description="Our interior design services provide sophisticated and functional spaces tailored to your lifestyle, creating a home that’s as comfortable as it is beautiful."
        image={interiorsImage}
        imageAlt="Interior design of a gym"
      />
    </div>
  );
};

export default Interiors;
