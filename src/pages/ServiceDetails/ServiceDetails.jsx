import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const service = services.find((service) => service.id == id);
  const { image, name, price, description, long_description } = service;
  return (
    <div className="px-20 py-10">
      <div className="flex gap-8">
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold text-[#1C172A]">{name}</h1>
          <p>{description}</p>
          <p className="text-xl font-semibold">Service Rate: {price}$</p>
          <button className="w-fit bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md inline-block">
            Book Now
          </button>
        </div>
        <div className="w-1/2">
          <img src={image} alt="" className="w-full rounded-xl" />
        </div>
      </div>
      <div className="py-8 space-y-5">
        <h1 className="w-fit mx-auto text-transparent text-4xl font-bold bg-gradient-to-r from-[#EB3B2E] to-[#BE6524] bg-clip-text mb-5">
          More About This Service
        </h1>
        <p>{long_description}</p>
        <button className="w-fit bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md block mx-auto">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
