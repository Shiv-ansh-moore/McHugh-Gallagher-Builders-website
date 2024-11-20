import SlashServices from "../../components/SlashServices";
import joineryImage from "../../images/Joinery.jpg";

const Joinery = () => {
  return (
    <div>
      <SlashServices
        title="Joinery"
        description="Bespoke joinery solutions to enhance the beauty and functionality of your spaces, crafted with precision and expertise."
        image={joineryImage}
        imageAlt="Custom joinery work in a modern kitchen"
      />
    </div>
  );
};

export default Joinery;
