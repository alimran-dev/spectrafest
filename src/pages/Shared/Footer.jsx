import logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Map, Marker } from "pigeon-maps";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#1C172A] to-[#291f44] px-16 py-10 flex justify-around items-center">
      <div className="space-y-4 text-white">
        <img src={logo} alt="logo" className="w-56" />
        <p className="inline-flex items-baseline gap-1">
          <FaLocationDot /> 67 Lake Circus (2nd Flr) Kalabagan, <br />
          Mirpur Road, Dhaka{" "}
        </p>
        <Link
          to={"tel:+8801712345678"}
          className="flex items-center gap-1 hover:text-[#47F0F2]"
        >
          <IoCall /> Call: +8801712345678
        </Link>
        <Link
          to={"mailto:abcd@gmail.com"}
          className="flex items-center gap-1 hover:text-[#47F0F2]"
        >
          <MdEmail /> Email: abcd@gmail.com
        </Link>
      </div>
      <div>
        <Map
          height={250}
          width={300}
          defaultCenter={[23.751678879188663, 90.3814564945768]}
          defaultZoom={15}
        >
          <Marker width={50} anchor={[23.751678879188663, 90.3814564945768]} />
        </Map>
      </div>
    </div>
  );
};

export default Footer;
