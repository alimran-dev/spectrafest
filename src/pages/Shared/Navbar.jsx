import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`w-full flex items-center justify-between py-3 px-16 ${
        pathname === "/" && "absolute top-0 left-0"
      }`}
    >
      <img src={logo} alt="" className="w-56" />
      <div className="flex items-center gap-4 font-medium text-white">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-[#47F0F2] border-b-2 border-[#47F0F2]" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
        <div className="space-x-5">
          <button className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md">
            Login
          </button>
          <button className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
