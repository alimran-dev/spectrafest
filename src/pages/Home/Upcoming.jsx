import { useEffect, useState } from "react";
import useDateCountdown from "../../hooks/useDateCountdown";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Upcoming = () => {
  const [event, SetEvent] = useState();
  const { title, img, location, date } = event || {};
  const { day, hour, minute, second } = useDateCountdown(date);
  useEffect(() => {
    fetch("upcoming.json")
      .then((res) => res.json())
      .then((data) => SetEvent(data));
      AOS.init();
  }, []);
  return (
    <div className="px-20 pt-16">
      <h1 className="w-fit mx-auto text-transparent text-5xl font-bold bg-gradient-to-r from-[#EB3B2E] to-[#BE6524] bg-clip-text mb-6">
        Discover Our Next Spectacular Event...
      </h1>
      <div className="grid md:grid-cols-2 gap-7">
        <div data-aos="fade-right" className="space-y-5">
          <h1 className="text-4xl font-bold text-[#1C172A] mt-7">{title}</h1>
          <p className="text-2xl font-medium">
            <span className="text-3xl font-bold">Location: </span>
            {location}
          </p>
          <p className="text-4xl font-bold text-center text-[#1C172A]">
            Get Ready!
          </p>
          {/* Timer */}
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold"> {day || 0} :</p>
              <p className="text-lg font-semibold">Day</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold"> {hour || 0} :</p>
              <p className="text-lg font-semibold">Hour</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold"> {minute || 0} :</p>
              <p className="text-lg font-semibold">Min</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">{second || 0}</p>
              <p className="text-lg font-semibold">Sec</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={img}
            alt=""
            className="rounded-tl-[250px] rounded-bl-[30px] rounded-tr-[30px] border-4 border-[#47F0F2]"
          />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
