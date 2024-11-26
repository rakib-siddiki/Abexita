import { BRANDS } from "../../constant";

const Brands = () => {
  return (
    <section className="bg-gray-50 py-8 lg:py-16 mb-16 lg:mb-32">
      <div className="container">
        {/* description */}
        <p className="text-gray-600 text-center mb-8 lg:mb-16">
          Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over
          the World
        </p>
        {/* Brands images */}
        <div className="grid grid-cols-2 lg:grid-cols-6 place-items-center gap-4">
          {BRANDS.map(({ id, alt, img }) => (
            <img
              key={id}
              src={img}
              alt={alt}
              className="h-12 w-auto"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
