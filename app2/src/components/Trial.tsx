import Button from "app1/Button";

const Trial = () => {
  return (
    <section className="mb-16 lg:mb-20">
      <div className="container">
        <div className="flex items-center w-full p-5 md:!p-16 space-y-3 rounded-2xl bg-teal-50 max-sm:flex-col md:justify-between">
          <div className="space-y-4 w-full">
            <h2 className="text-2xl font-semibold  text-primary-500  lg:text-left">
              Start your 30-day free trial
            </h2>
            <h2 className=" text-primary-500 lg:text-left ">
              Join over 100+ practitioners and organizations already growing
              with Ambel
            </h2>
          </div>
          <div className="flex items-center sm:justify-end gap-4 w-full">
            <Button
              variant="outline"
              className="!border-gray-100 !text-slate-600 font-semibold"
            >
              <a href="/documentations?category=quick-start&amp;subcategory=free-trial#free-trial">
                Learn More
              </a>
            </Button>
            <Button variant="primary" className="font-semibold">
              <a href="/?newUser=true">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trial;
