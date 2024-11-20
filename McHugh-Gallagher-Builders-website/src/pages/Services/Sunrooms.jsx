import SlashServices from "../../components/SlashServices";
import sunroomImage from "../../images/Sunroom.jpg";

const Sunrooms = () => {
  return (
    <div>
      <SlashServices
        title="Sunrooms"
        description="Our sunroom designs bring light and warmth into your home, creating a year-round connection with the outdoors."
        image={sunroomImage}
        imageAlt="Bright and airy sunroom with panoramic views"
      />
    </div>
  );
};

export default Sunrooms;
