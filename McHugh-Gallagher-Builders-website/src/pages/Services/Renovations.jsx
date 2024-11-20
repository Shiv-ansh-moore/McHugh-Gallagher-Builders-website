import SlashServices from "../../components/SlashServices";
import renovationsImage from "../../images/REVO.jpg";

const Renovations = () => {
  return (
    <div>
      <SlashServices
        title="Renovations"
        description="From updating single rooms to full home makeovers, we offer comprehensive renovation services to transform and modernize your property with minimal disruption."
        image={renovationsImage}
        imageAlt="Renovation work on a church"
      />
    </div>
  );
};

export default Renovations;
