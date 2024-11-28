const IndustriesMain = () => {
  return (
    <>
      <h3 className="mb-2 max-lg:text-xl lg:mb-4 font-medium text-center text-orange-600">
        Industries
      </h3>
      {/* industries title */}
      <h2
        aria-label="Industries title"
        className="text-3xl lg:text-[32px] leading-10 lg:leading-[50px] lg:max-w-2xl font-semibold lg:text-center mx-auto mb-3"
      >
        Popular Businesses and Practitioners who use Ambel
      </h2>
      {/* description */}
      <p className="lg:max-w-4xl mx-auto text-xs lg:text-xl lg:text-center text-gray-600 mb-14 ">
        Our platform supports a diverse range of professionals, with popular
        industries; including: healthcare providers, medi spas, salons , fitness
        coaches, law agencies, beauty specialists, consultants, and therapists.{" "}
      </p>
    </>
  );
};

export default IndustriesMain;
