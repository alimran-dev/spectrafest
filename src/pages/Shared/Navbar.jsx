import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai"
import {IoCloseSharp} from "react-icons/io5"

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  const { photoURL, displayName } = user || {};
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`w-full flex items-center justify-between py-3 px-8 md:px-16 ${
        pathname === "/a" && "absolute top-0 left-0"
      }`}
    >
      <img src={logo} alt="" className="w-32 md:w-56" />
      <div className="flex gap-8 items-center">
        <div
          className={`flex flex-col md:flex-row items-center gap-4 font-medium bg-white md:bg-none absolute md:static  ${
            pathname == "/" ? "md:text-white" : "text-[#1C172A]"
          } ${open ? "top-8 text-black":""}`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-[#47F0F2] border-b-2 border-[#47F0F2]" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={({ isActive }) =>
              isActive ? "text-[#47F0F2] border-b-2 border-[#47F0F2]" : ""
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to={"/reservation"}
            className={({ isActive }) =>
              isActive ? "text-[#47F0F2] border-b-2 border-[#47F0F2]" : ""
            }
          >
            Reservation
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-[#47F0F2] border-b-2 border-[#47F0F2]" : ""
            }
          >
            About
          </NavLink>
        </div>
        <div className="space-x-5">
          {user ? (
            <div className="flex items-center gap-4 pl-14">
              <p>{displayName}</p>
              <img src={photoURL} alt="" className="w-10 rounded-full" />
              <button
                onClick={handleLogOut}
                className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md inline-block"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <Link
                to={"/login"}
                className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md inline-block"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md inline-block"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <div onClick={()=>setOpen(!open)}>
        {
          open ? <IoCloseSharp className="md:hidden text-2xl font-bold"/>: <AiOutlineMenu className="md:hidden text-2xl font-bold"/>
        }
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
