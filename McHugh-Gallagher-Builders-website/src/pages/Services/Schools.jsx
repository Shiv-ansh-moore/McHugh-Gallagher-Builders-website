import SlashServices from "../../components/SlashServices";
import schoolImage from "../../images/school.jpg";

const Schools = () => {
  return (
    <div>
      <SlashServices
        title="Schools"
        description="Our expertise in educational facility construction ensures safe, functional, and inspiring spaces for learning."
        image={schoolImage}
        imageAlt="Construction project for educational institutions"
      />
    </div>
  );
};

export default Schools;
