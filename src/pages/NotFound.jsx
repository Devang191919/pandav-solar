import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="page-shell min-h-[65vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-3xl">
        ☀️
      </div>
      <h1 className="text-6xl font-bold text-solar-900 mb-2">404</h1>
      <h2 className="text-xl font-semibold text-solar-800 mb-3">Page Not Found</h2>
      <p className="text-solar-700 mb-8 max-w-md text-sm">
        The page you are looking for does not exist or may have been moved.
      </p>
      <NavLink to="/" className="btn-primary">
        Back to Home
        <FaArrowRightLong className="text-xs" />
      </NavLink>
    </div>
  );
};

export default NotFound;
