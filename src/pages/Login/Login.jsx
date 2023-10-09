import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState(null);
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError(null);
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successfully Completed",
          showConfirmButton: false,
          timer: 2000,
        });
        state ? navigate(`${state}`) : navigate("/");
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        state ? navigate(`${state}`) : navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully Completed",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error?.message);
      });
  };
  return (
    <div>
      <div className="my-8">
        <h1 className="w-fit mx-auto text-transparent text-3xl font-bold bg-gradient-to-r from-[#EB3B2E] to-[#BE6524] bg-clip-text mb-5">
          Login Your Account
        </h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-96 mx-auto p-10 rounded-lg space-y-2 shadow-2xl "
        >
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="py-2 px-3 rounded-md border-2 border-gray-400"
          />
          <label htmlFor="password" className="font-semibold text-lg">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="py-2 px-3 rounded-md border-2 border-gray-400"
          />
          <h2 className="text-lg font-bold text-center text-red-400">
            {error && error}
          </h2>
          <button
            type="submit"
            className="bg-[#47F0F2] w-fit mx-auto text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md block"
          >
            Login
          </button>
          <span className="text-center text-xl font-semibold inline-flex items-center justify-center gap-2">
            Sign In with:{" "}
            <button onClick={handleGoogle} className="text-center">
              <FcGoogle className="text-4xl" />
            </button>
          </span>
          <p className="text-center">
            New User?{" "}
            <Link to={"/register"} className="text-blue-400 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
