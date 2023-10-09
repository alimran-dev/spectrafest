const Reservation = () => {
  return (
    <div className="px-20">
      <h1 className="w-fit mx-auto text-transparent text-3xl font-bold bg-gradient-to-r from-[#EB3B2E] to-[#BE6524] bg-clip-text mb-5">
        Make a Reservation
      </h1>
      <p className="font-semibold text-center w-2/3 mx-auto">
        Welcome to SpectraFest Event Solution&apos;s reservation page!
        We&apos;re excited to help you plan and manage your upcoming event. To
        get started, please follow the simple steps below.
      </p>
      <form className="py-10">
        <div className="flex justify-center gap-40">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold py-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Your Name"
              className="border border-gray-400 rounded-md py-1 px-3"
            />
            <label htmlFor="email" className="block text-lg font-semibold py-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Your Email"
              className="border border-gray-400 rounded-md py-1 px-3"
            />
            <label htmlFor="phone" className="block text-lg font-semibold py-1">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              name="phone"
              placeholder="Your Phone Number"
              className="border border-gray-400 rounded-md py-1 px-3"
            />
          </div>
          <div>
            <label
              htmlFor="event_type"
              className="block text-lg font-semibold py-1"
            >
              Event Type<span className="text-red-500">*</span>
            </label>
            <select
              name="event_type"
              id=""
              required
              className="border border-gray-400 rounded-md py-1 px-3"
            >
              <option value="">Concerts and Music Festivals</option>
              <option value="">Theater and Performing Arts</option>
              <option value="">Film Screenings and Premieres</option>
              <option value="">Comedy Shows</option>
              <option value="">Sports Events</option>
              <option value="">Fashion Events</option>
            </select>
            <label htmlFor="date" className="block text-lg font-semibold py-1">
              Preferred Event Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              id=""
              required
              className="border border-gray-400 rounded-md py-1 px-3"
            />
            <label
              htmlFor="attendance"
              className="block text-lg font-semibold py-1"
            >
              Expected Number of Attendance
            </label>
            <input
              type="number"
              placeholder="Number of Attendance"
              className="border border-gray-400 rounded-md py-1 px-3"
            />
          </div>
        </div>
        <label
          htmlFor="additional"
          className="block text-center text-lg font-semibold mt-2"
        >
          Additional Details(Optional)
        </label>
        <textarea
          name="additional"
          id=""
          cols="30"
          rows="4"
          placeholder="Additional Details"
          className="w-1/2 border border-gray-400 rounded-md py-2 px-4 block mx-auto resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-[#47F0F2] w-fit mx-auto text-[#1C172A] py-1.5 px-4 my-2 text-lg font-semibold rounded-md block"
        >
          Reserve
        </button>
      </form>
    </div>
  );
};

export default Reservation;
