import { Link, useRouteError } from "react-router-dom";
import cat from "../../assets/error_cat2.png";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText } = error;
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={cat} alt="" className="w-1/5" />
      <span className="text-8xl font-bold">{status}</span>
      <span className="text-4xl font-bold">{statusText && statusText}</span>
      <Link
        to={"/"}
        className="bg-[#47F0F2] text-[#1C172A] py-1.5 px-4 text-lg font-semibold rounded-md block mt-5"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
