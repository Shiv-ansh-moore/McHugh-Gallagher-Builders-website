import SlashServices from "../../components/SlashServices";
import councilImage from "../../images/curch.jpg";

const CouncilWork = () => {
  return (
    <div>
      <SlashServices
        title="Council Work"
        description="We specialize in council-approved projects, managing construction efforts with a keen understanding of compliance and local regulations."
        image={councilImage}
        imageAlt="Council-approved construction project"
      />
    </div>
  );
};

export default CouncilWork;
