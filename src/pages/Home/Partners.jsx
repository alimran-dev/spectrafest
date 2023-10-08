import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch("partners.json")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);
  return (
    <div className="px-20 pb-16">
      <h1 className="w-fit mx-auto text-transparent text-5xl font-bold bg-gradient-to-r from-[#EB3B2E] to-[#BE6524] bg-clip-text mb-5">
        Our Partners
      </h1>
      <div className="relative rounded-lg">
        <Marquee speed={70}>
          {partners.map((partner) => (
            <img
              src={partner.img}
              alt=""
              key={partner.id}
              className="max-h-28 max-w-[150px] mr-16"
            />
          ))}
        </Marquee>
        <span className="h-full w-full absolute top-0 left-0 z-10 bg-gradient-to-r from-gray-300/60 via-transparent to-gray-300/60 rounded-lg"></span>
      </div>
    </div>
  );
};

export default Partners;
