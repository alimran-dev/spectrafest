import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { name, image, price, description } = service;
  return (
    <div className="rounded-xl shadow-xl bg-gray-200 text-[#1C172A]">
      <img src={image} alt="" className="w-full h-52 rounded-t-xl" />
      <div className="p-3 space-y-2">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p>{description}</p>
        <p className="text-xl font-semibold">Service Rate: {price}$</p>
        <button className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md w-fit">
          Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
