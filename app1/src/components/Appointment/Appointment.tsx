import { LargeDevice, SmallDevice } from ".";

const Appointment = () => {
  return (
    <section className="container">
      <div className="max-lg:hidden mb-16">
        <LargeDevice />
      </div>
      <div className="lg:hidden mb-16">
        <SmallDevice />
      </div>
    </section>
  );
};

export default Appointment;
