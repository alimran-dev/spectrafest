import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div>
      <div className="my-8">
        <h1 className="w-fit mx-auto text-transparent text-3xl font-bold bg-gradient-to-r from-[#EB3B2E] to-[#BE6524] bg-clip-text mb-5">
          Create Your Account
        </h1>
        <form className="flex flex-col w-96 mx-auto p-10 rounded-lg space-y-2 shadow-2xl ">
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
          <button
            type="submit"
            className="bg-[#47F0F2] w-fit mx-auto text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md block"
          >
            Register
          </button>
          <span className="text-center text-xl font-semibold inline-flex items-center justify-center gap-2">
            Sign In with:{" "}
            <button className="text-center">
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
