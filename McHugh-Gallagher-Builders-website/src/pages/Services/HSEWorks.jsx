import SlashServices from "../../components/SlashServices";
import hseImage from "../../images/HSE.jpg";

const HSEWork = () => {
  return (
    <div>
      <SlashServices
        title="HSE Work"
        description="Trusted by the HSE to maintain the highest standards of health, safety, and environmental protection across all projects."
        image={hseImage}
        imageAlt="Health, Safety, and Environment work in construction"
      />
    </div>
  );
};

export default HSEWork;
