import { IndustriesTab } from ".";

const Industries = () => {
  return (
    <section className="container mb-14">
      <h3 className="mb-4 text-center text-orange-600">Industries</h3>
      {/* industries title */}
      <h2
        aria-label="Industries title"
        className="text-[32px] max-w-2xl font-semibold text-center mx-auto mb-3"
      >
        Popular Businesses and Practitioners who use Ambel
      </h2>
      {/* description */}
      <p className="max-w-4xl mx-auto text-xl text-center text-gray-600 mb-14 ">
        Our platform supports a diverse range of professionals, with popular
        industries; including: healthcare providers, medi spas, salons , fitness
        coaches, law agencies, beauty specialists, consultants, and therapists.{" "}
      </p>
      {/* industriesTab section */}
      <IndustriesTab />
    </section>
  );
};

export default Industries;
