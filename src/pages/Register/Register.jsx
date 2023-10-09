/* eslint-disable no-useless-escape */
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateNamePhoto, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const regex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~]{6,}$/;

  const handleRegister = (event) => {
    event.preventDefault();
    setError(null);
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const isAccepted = event.target.terms.checked;
    if (!regex.test(password)) {
      return setError(
        "Password must be minimum 6 characters,Minimum one capital letter and minimum one special character."
      );
    }
    if (isAccepted) {
      createUser(email, password)
        .then((result) => {
          setUser(result.user);
          updateNamePhoto(name, photo)
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration Successfully Completed",
                showConfirmButton: false,
                timer: 2000,
              });
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
              setError(error?.message);
            });
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("You must accept our terms & conditions to proceed");
    }
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successfully Completed",
          showConfirmButton: false,
          timer: 2000,
        });
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
          Create Your Account
        </h1>
        <form
          onSubmit={handleRegister}
          className="flex flex-col w-96 mx-auto p-10 rounded-lg space-y-2 shadow-2xl "
        >
          <label htmlFor="name" className="font-semibold text-lg">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="py-2 px-3 rounded-md border-2 border-gray-400"
          />
          <label htmlFor="photo" className="font-semibold text-lg">
            Your PhotoURL
          </label>
          <input
            type="text"
            name="photo"
            required
            placeholder="Your PhotoURL.."
            className="py-2 px-3 rounded-md border-2 border-gray-400"
          />
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input
            type="text"
            name="email"
            required
            placeholder="Email"
            className="py-2 px-3 rounded-md border-2 border-gray-400"
          />
          <label htmlFor="password" className="font-semibold text-lg">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="py-2 px-3 rounded-md border-2 border-gray-400"
          />
          <div className="flex gap-2">
            <input type="checkbox" name="terms" className="" />
            <p className="">
              I agree to the{" "}
              <Link className="text-blue-400">Terms and Conditions</Link> and{" "}
              <Link className="text-blue-400">Privacy Policy</Link>.
            </p>
          </div>
          <h2 className="text-lg font-bold text-center text-red-400">
            {error && error}
          </h2>
          <button
            type="submit"
            className="bg-[#47F0F2] w-fit mx-auto text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md block"
          >
            Register
          </button>
          <span className="text-center text-xl font-semibold inline-flex items-center justify-center gap-2">
            Sign In with:{" "}
            <button onClick={handleGoogle} className="text-center">
              <FcGoogle className="text-4xl" />
            </button>
          </span>
          <p className="text-center">
            Already have an Account?{" "}
            <Link to={"/login"} className="text-blue-400 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
