import SlashServices from "../../components/SlashServices";
import insuranceImage from "../../images/Insurance.webp";

const Insurance = () => {
  return (
    <div>
      <SlashServices
        title="Insurance Work"
        description="We specialize in repairing and restoring properties covered by insurance claims, ensuring a seamless process to get your property back to its best condition. Our team works directly with insurance providers to manage and execute repairs efficiently and professionally."
        image={insuranceImage}
        imageAlt="Insurance repair work on a property"
      />
    </div>
  );
};

export default Insurance;
