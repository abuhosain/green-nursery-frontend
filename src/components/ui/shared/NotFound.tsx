 import notFoundImage from "../../../assets/images/notFound.jpg"

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <img
        src={notFoundImage}
        alt="404 Illustration"
        className="w-full rounded-full max-w-md mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404: Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
