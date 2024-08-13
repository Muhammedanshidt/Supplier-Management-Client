import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-50 to-cyan-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-cyan-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-cyan-900 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
