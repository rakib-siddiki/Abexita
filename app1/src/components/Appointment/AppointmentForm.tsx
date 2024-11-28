const AppointmentForm = () => {
  return (
    <form className="flex flex-col md:flex-row justify-center gap-4 mb-8">
      <div className="relative flex-1 h-full">
        <div className="absolute top-1/2 -translate-y-1/2 left-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Doctor, Therapist, Consultant, Spa"
          className="w-full pl-10 pr-4 py-2 placeholder:text-gray-300 rounded-full border border-gray-100  focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="relative flex-1 h-full">
        <div className="absolute top-1/2 -translate-y-1/2 left-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Select your location"
          className="w-full pl-10 pr-4 py-2 rounded-full border placeholder:text-gray-300 border-gray-100  focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-2 bg-indigo-500 text-white font-medium rounded-full transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default AppointmentForm;
