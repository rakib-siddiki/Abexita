import { FeaturesSummery, FeaturesCards } from ".";

const FeaturesSection = () => {
  return (
    <section className="bg-primary-500 py-10 lg:py-16 mb-16">
      <div className="container">
        {/* features section summary  */}
        <FeaturesSummery />
        {/* features cards */}
        <FeaturesCards />
      </div>
    </section>
  );
};

export default FeaturesSection;
