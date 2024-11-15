import SlashServices from "../../components/SlashServices";
import newBuildsImage from "../../images/new_builds.jpg";

const NewBuilds = () => {
  return (
    <div>
      <SlashServices
        title="New Builds"
        description="At McHugh & Gallagher Builders Ltd, we specialize in constructing custom homes tailored to your unique vision and lifestyle. With over 40 years of experience, our dedicated team ensures that every new build is crafted with the highest standards of quality, craftsmanship, and attention to detail. From initial consultation to the final walkthrough, we work closely with you to bring your dream home to life."
        image={newBuildsImage}
        imageAlt="picture of new build"
      />
    </div>
  );
};

export default NewBuilds;
