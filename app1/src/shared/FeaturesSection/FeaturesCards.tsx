import { Card } from ".";
import { FEATURES_CARDS } from "./constant";
const FeaturesCards = () => {
  return (
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {FEATURES_CARDS.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
};

export default FeaturesCards;
