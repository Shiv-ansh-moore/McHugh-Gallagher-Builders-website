import SlashServices from "../../components/SlashServices";
import extensionsImage from "../../images/extensions.jpg";

const Extensions = () => {
  return (
    <div>
      <SlashServices
        title="Extensions"
        description="Expand your living space with expertly designed extensions that integrate seamlessly with your existing structure. Our team focuses on enhancing your home's functionality and aesthetic, ensuring a harmonious blend of old and new."
        image={extensionsImage}
        imageAlt="Picture of home extension"
      />
    </div>
  );
};

export default Extensions;
